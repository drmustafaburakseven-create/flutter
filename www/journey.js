"use strict";
function recipeImage(r) {
  return r.cover || "assets/" + r.id + "-640.webp";
}
function availableRecipes() {
  return recipes.filter((r) => MMGame.unlocked(r, activeProfile()));
}
function renderHeader() {
  const p = activeProfile(),
    a = MMGame.avatar(p?.avatar, p ? MMGame.ensure(p).xp : 0),
    dec = MMGame.decorations.find((d) => d.id === p?.game?.decoration);
  $("#headerprofile").innerHTML =
    `<button class="header-child" ${dec?.kind === "sticker" ? 'data-sticker="☀"' : ""} id="openprofiles" aria-label="Çocuk profilini aç"><img src="${a.src}" alt="" style="background:${dec?.color || "transparent"};border-radius:12px"><span><b>${esc(p?.name || "Profil ekle")}</b><small>${p ? MMLogic.ageMonths(p.birth) + " ay" : "Minik molamız"}</small></span></button>`;
  $("#openprofiles").onclick = openProfiles;
}
function avatarPicker(p) {
  const xp = MMGame.ensure(p).xp;
  return `<h3>Çizgi karakterini seç</h3><div class="avatar-grid">${MMGame.avatars.map((a) => `<label class="avatar-choice ${xp < a.xp ? "locked" : ""}"><input type="radio" name="avatar" value="${a.id}" ${MMGame.avatar(p.avatar, xp).id === a.id ? "checked" : ""} ${xp < a.xp ? "disabled" : ""}><img src="${a.src}" alt="${esc(a.name)}" loading="lazy"><b>${esc(a.name)}</b><small>${xp < a.xp ? a.xp + " puanda açılır" : "Seçilebilir"}</small></label>`).join("")}</div>`;
}
function gameAction(type) {
  const p = activeProfile();
  if (p && MMGame.act(p, type)) {
    saveProfiles();
    renderHeader();
    return true;
  }
  return false;
}
function lessonSections() {
  const out = [];
  for (const b of guide.blocks || []) {
    if (b.kind === "heading") out.push({ title: b.text, text: [] });
    else if (out.length) out[out.length - 1].text.push(b.text);
  }
  return out;
}
function renderJourney() {
  const p = activeProfile(),
    g = p ? MMGame.ensure(p) : { xp: 0, lessons: {}, trials: [] },
    next = MMGame.nextReward(p),
    avatar = MMGame.avatar(p?.avatar, g.xp),
    days = MMGame.week(p),
    badges = MMGame.badges(p),
    dec = MMGame.decorations.find((d) => d.id === g.decoration);
  $("#content").innerHTML =
    `<h1>Yolculuğum</h1><p class="album-intro">Her küçük keşif bize ait.</p><section class="journey-hero journey-simple" style="background:${dec?.color || "#e7f1ed"}"><button class="journey-character" id="charactercollection" aria-label="Avatar koleksiyonumu aç"><img src="${avatar.src}" alt=""></button><h2>${p ? esc(p.name) + " ile birlikte" : "Birlikte keşfedelim"}</h2><button class="xp-pill" id="pointdetails">${g.xp} Mola puanı · Nasıl kazanırım?</button>${next ? `<p>${esc(next.name)}</p><progress value="${g.xp}" max="${next.xp}" aria-label="Bir sonraki ödüle ilerleme"></progress><p class="small">Bir sonraki ödüle ${next.xp - g.xp} puan kaldı.</p>` : "<p>Koleksiyonundaki tüm karakterler açıldı ✦</p>"}<button class="secondary" id="collection">Koleksiyonum</button>${!p ? '<button class="primary" id="journeyprofile">Profil oluştur</button>' : ""}</section><section class="mola-week"><h2>Bu haftanın küçük molaları</h2><p class="small">${days.filter((d) => d.done).length} gün gözlem kaydettik. Üç farklı günde kayıt: +10 puan.</p><div class="week-dots">${days.map((d) => `<span class="${d.done ? "done" : ""} ${d.today ? "today" : ""}"><i>${d.done ? "✓" : "·"}</i>${d.label}</span>`).join("")}</div><p class="small muted">Ara verince kazandıkların kalır. Yemek miktarı ve beceri hızı puanı değiştirmez.</p></section><button class="primary" id="journeyalbum">Tadım albümümü aç</button><div class="chips"><button class="chip" id="journeyreview">Becerileri gözden geçir</button><button class="chip" id="journeytrial">Sofra notu ekle</button></div><h2>Birlikte öğrenelim</h2><p class="small muted">Sunum bilgileri her zaman açık. Her kısa rehber bir kez +5 puan.</p><div class="learning-grid">${MMGame.chapters.map((c) => `<button data-lesson="${c.id}"><span>${g.lessons[c.id] ? "✓" : c.icon}</span><b>${esc(c.title)}</b></button>`).join("")}</div><h2>Küçük hatıralarımız</h2><div class="memory-album">${badges.length ? badges.map((b) => `<article><span>${b.icon}</span><b>${esc(b.name)}</b><small>${esc(b.kind)}</small></article>`).join("") : '<p class="muted small">İlk gözlem kaydınla ilk hatıran burada belirecek.</p>'}</div>${
      g.trials.length
        ? `<h2>Son sofra notları</h2>${g.trials
            .slice(-5)
            .reverse()
            .map(
              (t) =>
                `<p class="trial-log"><b>${esc((t.kind === "food" ? foods : recipes).find((x) => x.id === t.item)?.name || recipes.find((x) => x.id === t.item)?.title || t.item)}</b><span>${esc(t.outcome)} · ${dateLabel(t.date)}</span>${t.note ? `<span>${esc(t.note)}</span>` : ""}</p>`,
            )
            .join("")}`
        : ""
    }<details><summary>Bilgi kaynakları</summary>${(guide.sources || []).map((x) => `<p><a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.title)}</a></p>`).join("")}</details>`;
  if ($("#journeyprofile")) $("#journeyprofile").onclick = openProfiles;
  $("#journeyalbum").onclick = () => go("foods");
  $("#pointdetails").onclick = openPoints;
  $("#collection").onclick = openCollection;
  $("#charactercollection").onclick = openCollection;
  $("#journeyreview").onclick = () => (p ? openReview(p) : openProfiles());
  $("#journeytrial").onclick = () => openTrial();
  document
    .querySelectorAll("[data-lesson]")
    .forEach((b) => (b.onclick = () => openLesson(b.dataset.lesson)));
}
function openPoints() {
  $("#detail").classList.remove("cook-mode");
  $("#detailbody").innerHTML =
    `<div class="detailwrap"><button class="textbutton" id="closepoints">Kapat</button><h2>Mola puanları</h2>${[
      ["Günlük ilk sofra gözlemi", "+10"],
      ["Yeni bir sunum bilgisini tamamlamak", "+5 · bir kez"],
      ["Aylık beceri gözlemini güncellemek", "+10 · ayda bir"],
      ["Haftanın üç farklı gününde gözlem", "+10 · haftada bir"],
    ]
      .map(([t, n]) => `<p class="note"><b>${t}</b><br>${n}</p>`)
      .join(
        "",
      )}<p>Dokunmak, koklamak, tatmak ve bugün istememek aynı değerde. Diğer günlük kayıtların da saklanır.</p><p class="small muted">Eski puanların ve açılmış ödüllerin korundu. Yalnızca yeni puan kazanma kuralları değişti.</p></div>`;
  $("#closepoints").onclick = () => $("#detail").close();
  if (!$("#detail").open) $("#detail").showModal();
  $("#detail").scrollTop = 0;
}
function openCollection(keep = false) {
  const p = activeProfile(),
    xp = p?.game?.xp || 0,
    scroll = $("#detail").scrollTop;
  $("#detail").classList.remove("cook-mode");
  $("#detailbody").innerHTML =
    `<div class="detailwrap"><button class="textbutton" id="closecollection">Kapat</button><h2>Koleksiyonum</h2><h3>Çizgi karakterlerim</h3><div class="avatar-grid">${MMGame.avatars.map((a) => `<button class="avatar-choice ${xp < a.xp ? "locked" : ""}" data-avatar="${a.id}" ${!p || xp < a.xp ? "disabled" : ""} aria-pressed="${p?.avatar === a.id}"><img src="${a.src}" alt="${a.name}" loading="lazy"><b>${a.name}</b><small>${xp < a.xp ? a.xp + " puanda açılır" : p?.avatar === a.id ? "Seçili ✓" : "Seç"}</small></button>`).join("")}</div><h3>Profilime küçük bir renk</h3>${MMGame.decorations.map((d) => `<button class="secondary" data-decoration="${d.id}" ${!p || xp < d.xp ? "disabled" : ""}>${d.symbol} ${d.name}${xp < d.xp ? " · " + d.xp + " puan" : p?.game?.decoration === d.id ? " · Seçili ✓" : ""}</button>`).join("")}${p?.game?.decoration ? '<button class="textbutton" id="cleardecoration">Profil rengini kaldır</button>' : ""}<h3>Özel tarifler</h3>${MMGame.rewards.map((r) => `<button class="secondary" data-reward="${r.id}" ${xp < r.xp ? "disabled" : ""}>${esc(r.title)}${xp < r.xp ? " · " + r.xp + " puan" : " ↗"}</button>`).join("")}</div>`;
  $("#closecollection").onclick = () => $("#detail").close();
  document.querySelectorAll("[data-avatar]").forEach(
    (b) =>
      (b.onclick = () => {
        p.avatar = MMGame.avatar(b.dataset.avatar, xp).id;
        saveProfiles();
        render();
        openCollection(true);
      }),
  );
  document.querySelectorAll("[data-decoration]").forEach(
    (b) =>
      (b.onclick = () => {
        MMGame.ensure(p).decoration = b.dataset.decoration;
        saveProfiles();
        render();
        openCollection(true);
      }),
  );
  if ($("#cleardecoration"))
    $("#cleardecoration").onclick = () => {
      delete MMGame.ensure(p).decoration;
      saveProfiles();
      render();
      openCollection(true);
    };
  document
    .querySelectorAll("[data-reward]")
    .forEach((b) => (b.onclick = () => openRecipe(b.dataset.reward)));
  if (!$("#detail").open) $("#detail").showModal();
  $("#detail").scrollTop = keep ? scroll : 0;
}
function openLesson(id) {
  const p = activeProfile(),
    ch = MMGame.chapters.find((x) => x.id === id);
  if (!ch) return;
  const section = lessonSections()[ch.section];
  $("#detail").classList.remove("cook-mode");
  $("#detailbody").innerHTML =
    `<div class="detailwrap"><button class="textbutton" id="closelesson">← Yolculuğuma dön</button><h2>${esc(section?.title || ch.title)}</h2>${(section?.text || []).map((t) => `<p>${esc(t)}</p>`).join("")}<button class="primary" id="finishlesson">${p?.game?.lessons[id] ? "Keşfedildi ✓" : "Okudum · +5 puan"}</button></div>`;
  $("#closelesson").onclick = () => $("#detail").close();
  $("#finishlesson").onclick = () => {
    if (!p) {
      $("#detail").close();
      openProfiles();
      return;
    }
    const earned = MMGame.lesson(p, id);
    saveProfiles();
    $("#detail").close();
    render();
    toast(
      earned
        ? "+5 puan · Birlikte öğrendik"
        : "Bu bilgiyi daha önce keşfettin.",
    );
  };
  if (!$("#detail").open) $("#detail").showModal();
  $("#detail").scrollTop = 0;
}
function trialEligible(kind, item, p) {
  if (!p) return false;
  if (kind === "recipe") {
    const r = recipes.find((x) => x.id === item);
    return (
      r &&
      MMGame.unlocked(r, p) &&
      MMLogic.ageMonths(p.birth) >= r.minAge &&
      MMLogic.permitted(r, p)
    );
  }
  const f = foods.find((x) => x.id === item);
  return !!f && MMTasting.eligibility(f, p).allowed;
}
function openTrial(kind = "food", item = "") {
  const p = activeProfile();
  if (!p) {
    $("#detail").close();
    openProfiles();
    return;
  }
  if (item && !trialEligible(kind, item, p)) {
    toast(
      "Yaş ve kayıtlı alerjilere göre bu gıda için kişisel planını kontrol et.",
    );
    return;
  }
  const entries = [
    ...foods.map((f) => ({ kind: "food", id: f.id, title: f.name })),
    ...availableRecipes().map((r) => ({
      kind: "recipe",
      id: r.id,
      title: r.title,
    })),
  ].filter((x) => trialEligible(x.kind, x.id, p));
  $("#detail").classList.remove("cook-mode");
  $("#detailbody").innerHTML =
    `<div class="detailwrap"><button class="textbutton" id="closetrial">Kapat</button><h2>Bugünkü deneyim nasıldı?</h2><p>Dokunmak, koklamak, tatmak veya bugün istememek: hepsi aynı değerde.</p>${entries.length ? `<form id="trialform"><label class="form-label" for="trialitem">Neyi denedik?</label><select id="trialitem" class="form-input">${entries.map((x) => `<option value="${x.kind}:${x.id}" ${x.kind === kind && x.id === item ? "selected" : ""}>${esc(x.title)}</option>`).join("")}</select><fieldset class="trial-outcomes"><legend>Nasıl geçti?</legend>${MMGame.outcomes.map((o) => `<label><input required type="radio" name="outcome" value="${esc(o)}">${o}</label>`).join("")}</fieldset><button class="primary">Denemeyi kaydet</button><p class="muted small">Günlük ilk kayıt +10 puan. Haftanın üç ayrı gününde kayıt +10 puan daha kazandırır. Yeme miktarı puanı değiştirmez.</p></form>` : '<p class="note">Profilin yaşı ve alerjileri için uygun deneme seçeneği bulunamadı.</p>'}</div>`;
  $("#closetrial").onclick = () => $("#detail").close();
  if ($("#trialform"))
    $("#trialform").onsubmit = (e) => {
      e.preventDefault();
      const [k, id] = $("#trialitem").value.split(":");
      if (!trialEligible(k, id, p)) return;
      const result = MMGame.trial(
        p,
        k,
        id,
        new FormData(e.target).get("outcome"),
      );
      saveProfiles();
      $("#detail").close();
      render();
      toast(
        result.points
          ? "+" + result.points + " puan · Gözlem kaydedildi"
          : "Gözlem kaydedildi",
      );
    };
  if (!$("#detail").open) $("#detail").showModal();
  $("#detail").scrollTop = 0;
}
function portionHTML(r, age = null) {
  if (age === null)
    age = activeProfile() ? MMLogic.ageMonths(activeProfile().birth) : r.minAge;
  const x = MMPortion.get(r, age);
  return `<section class="portion-card" id="portioncard"><span class="eyebrow mini">ÖĞÜN MİKTARI ÖRNEĞİ</span><h3>${esc(x.title)}</h3><div class="month-shortcuts">${[6, 9, 12, 18].map((m) => `<button data-portion-age="${m}" class="${x.band === m ? "active" : ""}">+${m} ay</button>`).join("")}</div><b>${activeProfile() && age === MMLogic.ageMonths(activeProfile().birth) ? esc(activeProfile().name) + " · " : ""}${age} ay için</b><p>${esc(x.first)}</p>${x.eligible ? `<img src="assets/portions/${x.image}.webp" alt="${esc(x.caption)}" loading="lazy"><small>${esc(x.caption)}</small>` : ""}<p>${esc(x.example)}</p><p><b>Toplam öğün örneği:</b> ${esc(x.total)}</p><p class="note">${esc(x.note)}</p><p>${esc(x.cues)}</p><p class="muted small">${esc(x.milk)}</p><details><summary>Miktar bilgisi kaynakları</summary>${x.sources.map(([t, u]) => `<p><a href="${u}" target="_blank" rel="noopener">${t}</a></p>`).join("")}<p class="small">Tarife ait başlangıç sunumları Minik Mola örnekleridir; kaynaklar genel yaş, toplam öğün ve duyarlı besleme yaklaşımını destekler.</p></details></section>`;
}
function bindPortion() {
  document.querySelectorAll("[data-portion-age]").forEach(
    (b) =>
      (b.onclick = () => {
        const age = Number(b.dataset.portionAge);
        $("#portioncard").outerHTML = portionHTML(selected, age);
        bindPortion();
      }),
  );
}
