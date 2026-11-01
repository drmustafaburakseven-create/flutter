"use strict";
const $ = (s) => document.querySelector(s);
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const read = (k, d) => {
  try {
    return JSON.parse(localStorage.getItem("mm-preview-" + k)) ?? d;
  } catch {
    return d;
  }
};
const write = (k, v) => {
  try {
    localStorage.setItem("mm-preview-" + k, JSON.stringify(v));
  } catch {
    toast("Bu tarayıcıda değişiklikler kalıcı kaydedilemiyor.");
  }
};
let triedRecipesOnly = false;
let recipes = [],
  guide = {},
  tab = "today",
  category = "Tümü",
  query = "",
  fav = new Set(read("favorites", [])),
  shop = new Set(read("shopping", [])),
  checks = new Set(read("checks", [])),
  design = read("design", { theme: "blue", layout: "grid", font: "normal" }),
  selected = null,
  step = 0;
const minutes = (r) => r.steps.reduce((n, s) => n + (s.minutes || 0), 0);
const normalize = (s) => s.toLocaleLowerCase("tr-TR");
let toastTimer;
function toast(t) {
  $("#toast").textContent = t;
  $("#toast").classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $("#toast").classList.remove("visible"), 2300);
}
function applyDesign() {
  const p = {
    blue: ["#1854b7", "#e8eef9", "#ffffff", "#1854b7"],
    green: ["#177763", "#e7f1ed", "#ffffff", "#177763"],
    rose: ["#d93875", "#fbe8ef", "#000000", "#a42052"],
    yellow: ["#f8cf49", "#fff4ce", "#10202c", "#705400"],
  }[design.theme] || ["#1854b7", "#e8eef9", "#ffffff", "#1854b7"];
  document.documentElement.style.setProperty("--accent", p[0]);
  document.documentElement.style.setProperty("--soft", p[1]);
  document.documentElement.style.setProperty("--on-accent", p[2]);
  document.documentElement.style.setProperty("--accent-text", p[3]);
  document.documentElement.style.setProperty(
    "--type",
    design.font === "large" ? "1.14" : "1",
  );
  document
    .querySelectorAll("[data-theme]")
    .forEach((b) =>
      b.classList.toggle("selected", b.dataset.theme === design.theme),
    );
  document
    .querySelectorAll("select[data-setting],#layout,#font")
    .forEach((s) => (s.value = design[s.dataset.setting || s.id]));
  if ($(".cards"))
    $(".cards").className = "cards " + (design.layout === "list" ? "list" : "");
}
function setDesign(k, v) {
  design[k] = v;
  write("design", design);
  applyDesign();
}
function initControls() {
  document
    .querySelectorAll("[data-theme]")
    .forEach((b) => (b.onclick = () => setDesign("theme", b.dataset.theme)));
  document
    .querySelectorAll("#layout,#font,select[data-setting]")
    .forEach(
      (s) => (s.onchange = () => setDesign(s.dataset.setting || s.id, s.value)),
    );
  document.querySelectorAll("[data-reset],#reset").forEach(
    (b) =>
      (b.onclick = () => {
        design = { theme: "blue", layout: "grid", font: "normal" };
        write("design", design);
        applyDesign();
      }),
  );
}
$("#mobilecontrols").innerHTML = $(".panel")
  .innerHTML.replace('id="layout"', 'data-setting="layout" id="mobilelayout"')
  .replace('for="layout"', 'for="mobilelayout"')
  .replace('id="font"', 'data-setting="font" id="mobilefont"')
  .replace('for="font"', 'for="mobilefont"')
  .replace('id="reset"', 'data-reset="true"');
initControls();
applyDesign();
$("#detail").addEventListener("close", () =>
  $("#detail").classList.remove("cook-mode"),
);
$("#molagames").onclick = () => toast("Bir Mola — Yakında");
$("#settings").onclick = () => $("#settingsdialog").showModal();
document.querySelectorAll("dialog").forEach((d) =>
  d.addEventListener("click", (e) => {
    if (e.target === d) d.close();
  }),
);
const tabScroll = {};
function go(t) {
  tabScroll[tab] = $("#content").scrollTop;
  tab = t;
  render();
  $("#content").scrollTop = tabScroll[t] || 0;
}
document
  .querySelectorAll("[data-tab]")
  .forEach((b) => (b.onclick = () => go(b.dataset.tab)));
function cardsHTML(rs) {
  return rs.length
    ? rs
        .map(
          (r) =>
            `<article class="card"><button class="cardopen" data-open="${esc(r.id)}"><img loading="lazy" src="${esc(recipeImage(r))}" alt="${esc(r.title)}"><div class="cardtext"><span class="category">${esc(r.category)}</span><h3>${esc(r.title)}</h3><div class="meta"><span>◷ ${minutes(r)} dk</span><span>·</span><span>${r.minAge}+ ay sunumu</span></div></div></button><button ${fav.has(r.id) ? "" : "hidden"} class="heart ${fav.has(r.id) ? "saved" : ""}" aria-label="${fav.has(r.id) ? "Favorilerden çıkar" : "Favorilere ekle"}" aria-pressed="${fav.has(r.id)}" data-fav="${esc(r.id)}">${fav.has(r.id) ? "♥" : ""}</button><details class="photo-options"><summary aria-label="Tarif görseli seçenekleri">•••</summary><button data-fav="${esc(r.id)}" class="favorite-action">${fav.has(r.id) ? "Favorilerden çıkar" : "Favoriye ekle"}</button></details></article>`,
        )
        .join("")
    : '<div class="empty" style="grid-column:1/-1"><b>Burada henüz tarif yok.</b>Aramayı veya seçtiğin kategoriyi değiştirebilirsin.</div>';
}
function filtered() {
  return availableRecipes().filter(
    (r) =>
      (!triedRecipesOnly || MMTasting.recipeStatus(r, activeProfile()).ready) &&
      MMLogic.permitted(r, activeProfile()) &&
      (category === "Tümü" || r.category === category) &&
      normalize(
        r.title + " " + r.ingredients.map((i) => i.name).join(" "),
      ).includes(normalize(query)),
  );
}
function favoriteChange(id, onlyLike = false) {
  if (onlyLike) fav.add(id);
  else fav.has(id) ? fav.delete(id) : fav.add(id);
  write("favorites", [...fav]);
  document.querySelectorAll("[data-fav]").forEach((b) => {
    if (b.dataset.fav !== id) return;
    const heart = b.classList.contains("heart");
    if (heart) b.hidden = !fav.has(id);
    b.textContent = heart
      ? fav.has(id)
        ? "♥"
        : ""
      : fav.has(id)
        ? "Favorilerden çıkar"
        : "Favoriye ekle";
    b.setAttribute("aria-pressed", String(fav.has(id)));
    b.setAttribute(
      "aria-label",
      fav.has(id) ? "Favorilerden çıkar" : "Favoriye ekle",
    );
  });
  if (selected?.id === id && $("#detailfavorite")) {
    $("#detailfavorite").hidden = !fav.has(id);
    $("#detailfavorite").textContent = fav.has(id) ? "♥" : "";
    $("#detailfavorite").setAttribute("aria-pressed", String(fav.has(id)));
    if ($("#favoriteaction"))
      $("#favoriteaction").textContent = fav.has(id)
        ? "Favorilerden çıkar"
        : "Favoriye ekle";
  }
  toast(fav.has(id) ? "Favorilerine eklendi" : "Favorilerinden çıkarıldı");
  if (tab === "favorites") render();
}
function likeBurst(target) {
  const heart = document.createElement("span");
  heart.className = "like-burst";
  heart.textContent = "♥";
  heart.setAttribute("aria-hidden", "true");
  target.append(heart);
  setTimeout(() => heart.remove(), 650);
}
function bindCards() {
  document.querySelectorAll("[data-open]").forEach((b) => {
    if (!b.classList.contains("cardopen")) {
      b.onclick = () => openRecipe(b.dataset.open);
      return;
    }
    let last = 0,
      pending = null;
    b.onclick = (e) => {
      if (e.detail === 0 || e.target.tagName !== "IMG") {
        openRecipe(b.dataset.open);
        return;
      }
      const now = Date.now();
      if (last && now - last < 320) {
        last = 0;
        clearTimeout(pending);
        favoriteChange(b.dataset.open, true);
        likeBurst(b.closest(".card"));
      } else {
        last = now;
        pending = setTimeout(() => {
          last = 0;
          if (b.isConnected) openRecipe(b.dataset.open);
        }, 325);
      }
    };
  });
  document
    .querySelectorAll("[data-fav]")
    .forEach((b) => (b.onclick = () => favoriteChange(b.dataset.fav)));
}
function updateResults() {
  const rs = filtered();
  $("#results").innerHTML = cardsHTML(rs);
  $("#resultcount").textContent = rs.length + " tarif";
  bindCards();
}
function renderBase() {
  document.querySelectorAll("[data-tab]").forEach((b) => {
    b.classList.toggle("active", b.dataset.tab === tab);
    b.setAttribute("aria-current", b.dataset.tab === tab ? "page" : "false");
  });
  const c = $("#content");
  if (tab === "today") {
    c.innerHTML = `<h1 class="greeting-title" id="meal-greeting">${mealGreeting()}</h1><button class="chip" id="findforme">Öneriyi değiştir</button>${dailyHero()}<details><summary>Neden önerildi?</summary><p>Öğün saatine ve tercihlerine göre önerildi. Profil varsa yaş ve kayıtlı alerjiler filtrelenir; ay etiketi kişisel uygunluk kararı değildir.</p></details>`;
    $("#findforme").onclick = () => startFinder();
    bindCards();
  }
  if (tab === "recipes") {
    c.innerHTML = `<h1>Tarifler</h1><div class="chips"><button class="chip" id="favoriteslink">Favorilerim</button><button class="chip" id="foodslink">Tadım albümüm</button></div><button class="chip ${triedRecipesOnly ? "active" : ""}" id="triedrecipes" aria-pressed="${triedRecipesOnly}">Denediklerimizle hazırlanır</button><div class="search"><input id="search" aria-label="Tarif veya malzeme ara" placeholder="Tarif veya malzeme ara…" value="${esc(query)}"><button id="clearsearch" aria-label="Aramayı temizle">×</button></div><div class="chips">${["Tümü", ...new Set(recipes.map((r) => r.category))].map((x) => `<button class="chip ${x === category ? "active" : ""}" data-category="${esc(x)}">${esc(x)}</button>`).join("")}</div><div class="countrow"><span id="resultcount"></span><span>Küçük adımlar, gerçek tarifler</span></div><div id="results" class="cards ${design.layout === "list" ? "list" : ""}"></div><p class="muted" style="font-size:10px">Ay etiketleri sunum örneğidir; hazır oluş ve beslenme becerisi birlikte değerlendirilir.</p>`;
    updateResults();
    $("#triedrecipes").onclick = () => {
      triedRecipesOnly = !triedRecipesOnly;
      render();
    };
    $("#favoriteslink").onclick = () => go("favorites");
    $("#foodslink").onclick = () => go("foods");
    $("#search").oninput = (e) => {
      query = e.target.value;
      updateResults();
    };
    $("#clearsearch").onclick = () => {
      query = "";
      $("#search").value = "";
      updateResults();
      $("#search").focus();
    };
    document.querySelectorAll("[data-category]").forEach(
      (b) =>
        (b.onclick = () => {
          category = b.dataset.category;
          document
            .querySelectorAll("[data-category]")
            .forEach((x) => x.classList.toggle("active", x === b));
          updateResults();
        }),
    );
  }
  if (tab === "favorites") {
    const rs = recipes.filter((r) => fav.has(r.id));
    c.innerHTML = `<span class="eyebrow mini">YENİDEN YAPMAK İÇİN</span><h1>Favori tariflerin</h1><p class="muted">Sevdiğin tatlar, bir dokunuş uzağında.</p>${rs.length ? `<div class="cards ${design.layout === "list" ? "list" : ""}">${cardsHTML(rs)}</div>` : '<div class="empty"><b>İlk favorini seç.</b>Tarif görseline çift dokunarak favorine ekle.<button class="primary" id="browse">Tarifleri keşfet</button></div>'}`;
    bindCards();
    if ($("#browse")) $("#browse").onclick = () => go("recipes");
  }
  if (tab === "shopping") {
    const rs = recipes.filter((r) => shop.has(r.id));
    c.innerHTML = `<span class="eyebrow mini">MARKETE ÇIKMADAN</span><h1>Alışveriş listem</h1><p class="muted">${rs.length ? rs.length + " tarifin malzemeleri. Aldıklarını işaretle." : "Tariflerden malzeme ekleyerek listeni oluştur."}</p>${rs.length ? '<button class="secondary" id="copylist">Listeyi kopyala</button>' : '<div class="empty"><b>Ne pişirelim?</b>Bir tarifi açıp “Listeme ekle”ye dokun.<button class="primary" id="browse">Tarif seç</button></div>'}${rs.map((r) => `<section class="shopgroup"><button class="remove" data-remove="${esc(r.id)}" aria-label="${esc(r.title)} listesini kaldır">×</button><h3>${esc(r.title)}</h3>${r.ingredients.map((i, n) => `<label class="item"><input type="checkbox" data-check="${esc(r.id + ":" + n)}" ${checks.has(r.id + ":" + n) ? "checked" : ""}><span>${esc(i.name)}${i.optional ? " (isteğe bağlı)" : ""}<small>${esc(i.amount)}</small></span></label>`).join("")}</section>`).join("")}`;
    document.querySelectorAll("[data-check]").forEach(
      (x) =>
        (x.onchange = () => {
          x.checked
            ? checks.add(x.dataset.check)
            : checks.delete(x.dataset.check);
          write("checks", [...checks]);
        }),
    );
    document.querySelectorAll("[data-remove]").forEach(
      (x) =>
        (x.onclick = () => {
          shop.delete(x.dataset.remove);
          write("shopping", [...shop]);
          render();
        }),
    );
    if ($("#browse")) $("#browse").onclick = () => go("recipes");
    if ($("#copylist"))
      $("#copylist").onclick = async () => {
        const t = rs
          .map(
            (r) =>
              r.title +
              "\n" +
              r.ingredients
                .map(
                  (i, n) =>
                    (checks.has(r.id + ":" + n) ? "✓ " : "□ ") +
                    i.name +
                    " — " +
                    i.amount,
                )
                .join("\n"),
          )
          .join("\n\n");
        try {
          await navigator.clipboard.writeText(t);
          toast("Liste kopyalandı");
        } catch {
          toast(
            "Kopyalama izni verilmedi. Listedeki metni seçip kopyalayabilirsin.",
          );
        }
      };
  }
  if (tab === "guide") renderJourney();
}
function openRecipe(id) {
  selected = recipes.find((r) => r.id === id);
  if (!selected) return;
  if (!MMGame.unlocked(selected, activeProfile())) {
    toast("Bu tarifin kilidini Yolculuğum bölümünde açabilirsin.");
    return;
  }
  renderDetail();
  if (!$("#detail").open) $("#detail").showModal();
}
function renderDetail() {
  $("#detail").classList.remove("cook-mode");
  const r = selected;
  $("#detailbody").innerHTML =
    `<button class="close" id="closedetail" aria-label="Tarifi kapat">×</button><div class="detail-visual"><img class="detailimage" src="${esc(recipeImage(r))}" alt="${esc(r.title)}"><button ${fav.has(r.id) ? "" : "hidden"} class="detail-heart" id="detailfavorite" aria-label="${fav.has(r.id) ? "Favorilerden çıkar" : "Favorime ekle"}" aria-pressed="${fav.has(r.id)}">${fav.has(r.id) ? "♥" : ""}</button></div><div class="detailwrap"><details class="photo-options"><summary aria-label="Tarif görseli seçenekleri">•••</summary><button id="favoriteaction">${fav.has(r.id) ? "Favorilerden çıkar" : "Favoriye ekle"}</button></details><span class="eyebrow mini">${esc(r.category)} · ${minutes(r)} DAKİKA</span><h2>${esc(r.title)}</h2><p class="muted">${esc(r.yield)}</p><div class="note">${r.minAge}+ ay sunumu · Ay etiketi tek başına başlama ölçütü değildir.</div><button class="secondary" id="addshop">${shop.has(r.id) ? "✓ Listemde · çıkarmak için dokun" : "＋ Malzemeleri listeme ekle"}</button>${r.allergens.length || (r.possibleAllergens || []).length ? `<div class="note"><b>Alerjenler (olası içerikler dahil):</b> ${esc([...new Set([...(r.allergens || []), ...(r.possibleAllergens || [])])].join(", "))}</div>` : ""}${recipeProfileWarning(r)}<button class="secondary" id="childlike">Çocuğum bunu sevdi</button><details open><summary>Malzemeler ve hazırlık</summary><h3>Malzemeler</h3><ul>${r.ingredients.map((i) => `<li><b>${esc(i.name)}</b> — ${esc(i.amount)}${i.optional ? " (isteğe bağlı)" : ""}</li>`).join("")}</ul><h3>Hazırlık</h3><p>${esc(r.equipment || "")}</p>${r.steps.map((s, n) => `<div class="step"><b>${n + 1}. ${esc(s.title)} <span class="muted">· ${s.minutes} dk</span></b><p>${esc(s.text)}</p></div>`).join("")}<h3>Hazır olduğunu nasıl anlarsın?</h3><p>${esc(r.readyCheck)}</p></details><details><summary>Çocuğuma sunum</summary>${portionHTML(r)}<h3>Sunum</h3><p>${esc(r.spoon)}</p>${r.finger ? `<p>${esc(r.finger)}</p>` : ""}<h3>Küçük mutfak ipucu</h3><p>${esc(r.chef)}</p><div class="note">${esc(r.fix)}</div>${r.nutritionNote ? `<p class="muted">${esc(r.nutritionNote)}</p>` : ""}</details></div><footer class="recipe-action"><button class="primary" id="startcook">Pişirmeye başla →</button></footer>`;
  $("#detailfavorite").onclick = () => favoriteChange(r.id);
  $("#favoriteaction").onclick = () => favoriteChange(r.id);
  let lastTap = 0;
  $(".detailimage").style.touchAction = "manipulation";
  $(".detailimage").onclick = () => {
    const now = Date.now();
    if (lastTap && now - lastTap < 320) {
      lastTap = 0;
      favoriteChange(r.id, true);
      likeBurst($(".detail-visual"));
    } else lastTap = now;
  };
  $("#closedetail").onclick = () => $("#detail").close();
  $("#childlike").onclick = () => openRecipeStory(r);
  $("#startcook").onclick = () => {
    step = 0;
    cookPage = 0;
    renderCook();
  };
  $("#addshop").onclick = () => {
    shop.has(r.id) ? shop.delete(r.id) : shop.add(r.id);
    write("shopping", [...shop]);
    if (shop.has(r.id)) gameAction("list");
    $("#addshop").textContent = shop.has(r.id)
      ? "✓ Listemde · çıkarmak için dokun"
      : "＋ Malzemeleri listeme ekle";
    toast(
      shop.has(r.id)
        ? "Malzemeler listene eklendi"
        : "Tarif listenden çıkarıldı",
    );
    if (tab === "shopping") render();
  };
  bindPortion();
  $("#detail").scrollTop = 0;
}
let cookPage = 0,
  cookPageKey = "";
function moveCook(direction) {
  const next = MMFlow.advance(
    selected.steps,
    { step, page: cookPage },
    direction,
  );
  step = next.step;
  cookPage = next.page;
  cookPageKey = selected.id + ":" + step;
  renderCook();
}
function renderCook() {
  const r = selected,
    s = r.steps[step],
    key = r.id + ":" + step;
  if (cookPageKey !== key) {
    cookPage = 0;
    cookPageKey = key;
  }
  const chunks = MMFlow.pages(s.text),
    last = step === r.steps.length - 1 && cookPage === chunks.length - 1;
  $("#detail").classList.add("cook-mode");
  $("#detailbody").innerHTML =
    `<div class="cook-shell"><header class="cook-top"><button class="textbutton" id="backrecipe">← Tarif</button><span>${esc(r.title)}</span><button id="closedetail" aria-label="Pişirme ekranını kapat">×</button></header><div class="cook-heading"><div class="progress">${r.steps.map((_, i) => `<i class="${i <= step ? "done" : ""}"></i>`).join("")}</div><span class="stepnumber">ADIM ${step + 1} / ${r.steps.length} · ${s.cookingMinutes ? "PİŞİRME" : "HAZIRLIK / SUNUM"}</span><h2>${esc(s.title)}</h2></div><div class="cook-reading" id="cookreading" tabindex="0" aria-label="Tarif adımı; sağ ve sol ok tuşlarıyla ilerle"><p>${esc(chunks[cookPage])}</p><small>${chunks.length > 1 ? `Bu adımın ${cookPage + 1} / ${chunks.length}. bölümü · ` : ""}← Önceki · Sonraki →</small></div>${timerControls(r, step)}<footer class="cook-footer"><div class="cookbuttons"><button class="secondary" id="prev" ${step === 0 && cookPage === 0 ? "disabled" : ""}>← Önceki adım</button><button class="primary" id="next">${last ? "Tamamladım ✓" : cookPage < chunks.length - 1 ? "Devam →" : "Sonraki adım →"}</button></div></footer></div>`;
  $("#closedetail").onclick = () => $("#detail").close();
  $("#backrecipe").onclick = renderDetail;
  $("#prev").onclick = () => moveCook(-1);
  $("#next").onclick = () => {
    if (last) {
      openTrial("recipe", r.id);
      toast("Ellerine sağlık. İstersen deneyimini kaydet.");
    } else moveCook(1);
  };
  bindHorizontal($("#cookreading"), moveCook);
  bindTimerControls();
}
// Horizontal gesture: vertical scrolling and taps never make a selection.
function bindHorizontal(el, commit, visual) {
  MMSwipe.bind(el, commit, visual);
}

Promise.all([
  fetch("recipes.json").then((r) => {
    if (!r.ok) throw Error();
    return r.json();
  }),
  fetch("guide.json").then((r) => {
    if (!r.ok) throw Error();
    return r.json();
  }),
  fetch("bonus-recipes.json").then((r) => {
    if (!r.ok) throw Error();
    return r.json();
  }),
])
  .then(([r, g, b]) => {
    recipes = [...r, ...b];
    if (
      cookingTimer &&
      !recipes.find((x) => x.id === cookingTimer.recipe)?.steps[
        cookingTimer.step
      ]?.cookingMinutes
    ) {
      cookingTimer = null;
      write("cookingTimer", null);
    }
    guide = g;
    render();
    checkReviewPrompt();
  })
  .catch(() => {
    $("#content").innerHTML =
      '<div class="empty"><b>Tarifler yüklenemedi.</b>Bağlantını kontrol edip sayfayı yenile.<button class="primary" onclick="location.reload()">Yeniden dene</button></div>';
  });

let mealLimit = 999,
  mealCategory = "Tümü",
  mealQuery = "";
function startFinder() {
  const d = $("#detail");
  d.classList.remove("cook-mode");
  $("#detailbody").innerHTML =
    `<div class="detailwrap"><button class="textbutton" id="finderclose">Kapat</button><h2>Bugünkü önerin</h2><label for="mealquery">Tarif veya malzeme</label><input class="form-input" id="mealquery" value="${esc(mealQuery)}" placeholder="Örneğin kabak"><label for="mealcategory">Ne hazırlayalım?</label><select id="mealcategory">${["Tümü", ...new Set(recipes.map((r) => r.category))].map((c) => `<option ${c === mealCategory ? "selected" : ""}>${esc(c)}</option>`).join("")}</select><label for="meallimit">Ne kadar vaktin var?</label><select id="meallimit">${[20, 40, 999].map((n) => `<option value="${n}" ${n === mealLimit ? "selected" : ""}>${n === 999 ? "Sınır yok" : n + " dk"}</option>`).join("")}</select><button class="primary" id="applymeal">Önerileri göster</button></div>`;
  $("#finderclose").onclick = () => d.close();
  $("#applymeal").onclick = () => {
    mealLimit = Number($("#meallimit").value);
    mealCategory = $("#mealcategory").value;
    mealQuery = $("#mealquery").value.trim();
    d.close();
    go("today");
  };
  d.showModal();
}

/* Child profiles: local-only storage, no external health-data transfer. */
let profiles = read("profiles", []),
  activeProfileId = read("activeProfile", null),
  foodMonth = null,
  foodQuery = "";
const reviewedThisVisit = new Set();
profiles.forEach((p) => MMGame.ensure(p));
const skills = [
  ["hand", "Elle tutup ağzına götürme"],
  ["lumps", "Yumuşak pütürlü dokuyu yönetme"],
  ["pincer", "Küçük yumuşak parçayı iki parmakla alma"],
  ["spoon", "Kaşığı ağzına götürme"],
  ["cup", "Açık bardaktan destekle içme"],
];
const skillOptions = [
  ["unknown", "Henüz gözlemlemedim"],
  ["trying", "Deniyor / destek gerekiyor"],
  ["yes", "Yapabiliyor"],
];
function activeProfile() {
  return profiles.find((p) => p.id === activeProfileId) || null;
}
function saveProfiles() {
  profiles.forEach((p) => MMGame.syncSkills(p));
  write("profiles", profiles);
  write("activeProfile", activeProfileId);
}
function dateLabel(d) {
  const x = MMLogic.parseDate(d);
  return x
    ? x.toLocaleDateString("tr-TR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "—";
}
function profileStrip() {
  const p = activeProfile(),
    age = p ? MMLogic.ageMonths(p.birth) : null;
  return `<section class="profile-strip"><button id="openprofiles" class="profile-main"><span class="avatar">${p ? esc(p.name.slice(0, 1).toLocaleUpperCase("tr-TR")) : "＋"}</span><span><b>${p ? esc(p.name) : "Çocuğunun profilini oluştur"}</b><small>${p ? `${age === null ? "Yaş bilgisi eksik" : age + " aylık"} · Profili düzenle` : "Yaş · alerjiler · sevdiği tatlar · beceriler"}</small></span><span>›</span></button>${profiles.length > 1 ? `<label class="sr-only" for="activechild">Çocuk profili</label><select id="activechild">${profiles.map((x) => `<option value="${esc(x.id)}" ${x.id === activeProfileId ? "selected" : ""}>${esc(x.name)}</option>`).join("")}</select>` : ""}${p ? `<div class="profile-summary"><span>${p.allergies.length ? esc(p.allergies.join(", ")) : "Alerji kaydı yok"}</span><button id="reviewskills">${MMLogic.due(p) ? "● Aylık kontrol zamanı" : "Becerileri güncelle"}</button></div>` : ""}</section>`;
}
function render() {
  const oldScroll = $("#content").scrollTop;
  const child = activeProfile();
  if (child && (MMGame.visit(child) || MMGame.syncSkills(child)))
    saveProfiles();
  if (tab === "foods") {
    document.querySelectorAll("[data-tab]").forEach((b) => {
      b.classList.toggle("active", b.dataset.tab === tab);
      b.setAttribute("aria-current", b.dataset.tab === tab ? "page" : "false");
    });
    renderFoods();
  } else renderBase();
  renderHeader();
  if ($("#activechild"))
    $("#activechild").onchange = (e) => {
      activeProfileId = e.target.value;
      saveProfiles();
      foodMonth = null;
      render();
      checkReviewPrompt();
    };
  if ($("#reviewskills"))
    $("#reviewskills").onclick = () => openReview(activeProfile());
  bindDaily();
  renderTimerBar();
  $("#content").scrollTop = oldScroll;
  if (tab === "shopping" && activeProfile()?.allergies.length)
    $("#content").insertAdjacentHTML(
      "beforeend",
      '<p class="note">Liste daha önce eklenmiş tarifler içerebilir. Seçili çocuğun alerjilerine göre malzemeleri ve ürün etiketlerini yeniden kontrol et.</p>',
    );
}
function openProfiles() {
  const p = activeProfile();
  $("#profilebody").innerHTML =
    `<div class="detailwrap"><button class="close" id="closeprofile" aria-label="Kapat">×</button><span class="eyebrow mini">MİNİK MOLAMIZ</span><h2>Çocuk profilleri</h2><p class="muted">Her çocuğun sofrası ve gelişimi ayrı.</p>${profiles.map((x) => `<button class="profile-row" data-editprofile="${esc(x.id)}"><span class="avatar">${esc(x.name[0])}</span><span><b>${esc(x.name)}</b><small>${MMLogic.ageMonths(x.birth)} aylık · ${x.id === activeProfileId ? "Seçili profil" : "Düzenle / seç"}</small></span><span>›</span></button>`).join("")}<button class="primary" id="newprofile">＋ Çocuk profili ekle</button><p class="note">Bilgiler yalnızca bu tarayıcıda saklanır. Başka cihazlarla eşitlenmez; tarayıcı verilerini silersen kaybolur. Tam ad yerine takma ad kullanabilirsin.</p></div>`;
  $("#closeprofile").onclick = () => $("#profiledialog").close();
  $("#newprofile").onclick = () => editProfile();
  document
    .querySelectorAll("[data-editprofile]")
    .forEach(
      (b) =>
        (b.onclick = () =>
          editProfile(profiles.find((x) => x.id === b.dataset.editprofile))),
    );
  if (!$("#profiledialog").open) $("#profiledialog").showModal();
}
function skillFields(p, review = false) {
  return skills
    .map(
      ([key, label]) =>
        `<label class="skill-field" for="skill-${key}"><span>${review && key === "hand" ? "Elle yeme becerisi bu ay nasıl?" : label}</span>${review ? `<small>Önceki: ${esc(skillOptions.find((x) => x[0] === (p.skills || {})[key])?.[1] || "Henüz gözlemlemedim")}</small>` : ""}<select id="skill-${key}" name="skill-${key}">${skillOptions.map(([v, t]) => `<option value="${v}" ${(p.skills || {})[key] === v ? "selected" : ""}>${t}</option>`).join("")}</select></label>`,
    )
    .join("");
}
function editProfile(p = null) {
  const isNew = !p;
  p = p || {
    id: crypto.randomUUID(),
    name: "",
    birth: "",
    allergies: [],
    likes: [],
    likedRecipes: [],
    skills: {},
    history: [],
  };
  const known = [
    "Süt",
    "Yumurta",
    "Buğday",
    "Yulaf",
    "Balık",
    "Susam",
    "Kereviz",
    "Yer fıstığı",
    "Sert kabuklu yemiş",
    "Soya",
    "Kabuklu deniz ürünü",
  ];
  const others = p.allergies.filter((x) => !known.includes(x));
  $("#profilebody").innerHTML =
    `<div class="detailwrap"><button class="textbutton" id="profilesback">← Profiller</button><h2>${isNew ? "Yeni çocuk profili" : esc(p.name) + " · profil"}</h2><form id="profileform"><label class="form-label" for="childname">Adı veya takma adı</label><input class="form-input" id="childname" name="name" maxlength="30" required value="${esc(p.name)}" placeholder="Örn. Minik"><label class="form-label" for="birth">Doğum tarihi</label><input class="form-input" id="birth" name="birth" type="date" required max="${MMLogic.dateKey()}" min="2008-01-01" value="${esc(p.birth)}">${avatarPicker(p)}<h3>Alerjiler</h3><p class="muted">Bilinen veya şüphe edilenleri işaretle. Bu kayıt tanı koymaz.</p><div class="choice-grid">${known.map((x) => `<label><input type="checkbox" name="allergy" value="${esc(x)}" ${p.allergies.includes(x) ? "checked" : ""}><span>${esc(x)}</span></label>`).join("")}</div><label class="form-label" for="otherallergies">Diğer alerjiler (virgülle ayır)</label><input class="form-input" id="otherallergies" name="other" maxlength="150" value="${esc(others.join(", "))}" placeholder="Örn. nohut"><p class="note">Eşleşen ve olası alerjen içeren tarifler önerilerden çıkarılır. Etiket ve çapraz bulaş kontrolünün yerini tutmaz. Diğer alerjilerde eşleştirme yalnızca yazdığın kelimeyle yapılır; tüm türevleri tanımayabilir.</p><h3>Sevdiği yemekler ve tatlar</h3><label class="form-label" for="childlikes">Virgülle ayırarak yaz</label><input class="form-input" id="childlikes" name="likes" maxlength="180" value="${esc((p.likes || []).join(", "))}" placeholder="Örn. kabak, mercimek, yoğurt"><p class="muted">Tarif ekranındaki “Çocuğum bu yemeği seviyor” düğmesiyle de ekleyebilirsin.</p><div class="liked-list">${(
      p.likedRecipes || []
    )
      .map((id) => recipes.find((r) => r.id === id))
      .filter(Boolean)
      .map((r) => `<span>${esc(r.title)}</span>`)
      .join(
        "",
      )}</div><h3>Yeme becerileri</h3>${skillFields(p)}<p class="note">Bu bir gelişim testi değildir. Her becerinin temposu değişebilir. Bir sonraki kısa kontrol, son beceri güncellemesinden bir ay sonra siteyi açtığında gösterilir.</p><button class="primary" type="submit">Kaydet ve bu profili kullan</button>${!isNew ? '<button class="textbutton danger" type="button" id="deleteprofile">Bu profili sil</button>' : ""}</form></div>`;
  $("#profilesback").onclick = openProfiles;
  $("#profileform").onsubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target),
      birth = String(f.get("birth")),
      age = MMLogic.ageMonths(birth);
    if (age === null || age < 0) {
      toast("Geçerli bir doğum tarihi seç.");
      return;
    }
    const current = Object.fromEntries(
      skills.map(([k]) => [k, String(f.get("skill-" + k))]),
    );
    const skillsChanged =
      isNew || JSON.stringify(current) !== JSON.stringify(p.skills || {});
    const today = MMLogic.dateKey();
    const updated = {
      ...p,
      avatar: MMGame.avatar(
        String(f.get("avatar") || p.avatar || "spoon"),
        MMGame.ensure(p).xp,
      ).id,
      name: String(f.get("name")).trim(),
      birth,
      allergies: [
        ...new Set([
          ...f.getAll("allergy"),
          ...String(f.get("other"))
            .split(",")
            .map((x) => x.trim())
            .filter(Boolean),
        ]),
      ],
      likes: String(f.get("likes"))
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean),
      skills: current,
    };
    if (!updated.name) {
      toast("Bir ad veya takma ad yaz.");
      return;
    }
    if (skillsChanged) {
      updated.lastReview = today;
      updated.nextReview = MMLogic.nextMonth(today);
      updated.snoozeUntil = null;
      updated.history = [
        ...(p.history || []),
        { date: today, skills: current },
      ].slice(-24);
    }
    profiles = isNew
      ? [...profiles, updated]
      : profiles.map((x) => (x.id === p.id ? updated : x));
    activeProfileId = p.id;
    saveProfiles();
    foodMonth = null;
    $("#profiledialog").close();
    render();
    toast("Çocuk profili kaydedildi");
  };
  if ($("#deleteprofile"))
    $("#deleteprofile").onclick = () => {
      if (
        !confirm(
          p.name + " profilini ve beceri geçmişini silmek istiyor musun?",
        )
      )
        return;
      profiles = profiles.filter((x) => x.id !== p.id);
      if (activeProfileId === p.id) activeProfileId = profiles[0]?.id || null;
      saveProfiles();
      $("#profiledialog").close();
      render();
      toast("Profil silindi");
    };
  $("#profiledialog").scrollTop = 0;
}
function openReview(p) {
  if (!p) return;
  reviewedThisVisit.add(p.id);
  $("#profilebody").innerHTML =
    `<div class="detailwrap"><span class="eyebrow mini">KÜÇÜK BİR GELİŞİM MOLASI</span><h2>${esc(p.name)} için bu ay neler değişti?</h2><p class="muted">Son kayıt: ${dateLabel(p.lastReview)}. Sadece gözlemlediğini seç; değişiklik olmaması tek başına sorun anlamına gelmez.</p><form id="reviewform">${skillFields(p, true)}<label class="form-label" for="reviewnote">Bu ayki gözlemin (isteğe bağlı)</label><textarea class="form-input" id="reviewnote" maxlength="300" placeholder="Örn. Yumuşak sebzeleri eliyle daha rahat tutuyor."></textarea><button class="primary">Becerileri güncelle</button><button class="secondary" type="button" id="reviewlater">Yarın tekrar sor</button></form><p class="note">Daha önce yaptığı bir beceriyi kaybetme, beslenirken sürekli öksürme veya yutma güçlüğünde aylık kontrolü beklemeden çocuk doktoruna danış.</p>${
      p.history?.length
        ? `<details><summary>Önceki kayıtlar (${p.history.length})</summary>${p.history
            .slice()
            .reverse()
            .map(
              (h) =>
                `<p><b>${dateLabel(h.date)}</b><br>${skills.map(([k, l]) => esc(l) + ": " + esc(skillOptions.find((x) => x[0] === h.skills[k])?.[1] || "Gözlem yok")).join("<br>")}${h.note ? "<br>" + esc(h.note) : ""}</p>`,
            )
            .join("")}</details>`
        : ""
    }</div>`;
  $("#reviewform").onsubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target),
      today = MMLogic.dateKey();
    p.skills = Object.fromEntries(
      skills.map(([k]) => [k, String(f.get("skill-" + k))]),
    );
    p.lastReview = today;
    p.nextReview = MMLogic.nextMonth(today);
    p.snoozeUntil = null;
    p.history = [
      ...(p.history || []),
      {
        date: today,
        skills: { ...p.skills },
        note: $("#reviewnote").value.trim(),
      },
    ].slice(-24);
    MMGame.act(p, "review");
    saveProfiles();
    $("#profiledialog").close();
    render();
    toast("Güncellendi. Bir sonraki kontrol: " + dateLabel(p.nextReview));
  };
  $("#reviewlater").onclick = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    p.snoozeUntil = MMLogic.dateKey(tomorrow);
    saveProfiles();
    $("#profiledialog").close();
    render();
  };
  if (!$("#profiledialog").open) $("#profiledialog").showModal();
  $("#profiledialog").scrollTop = 0;
}
function checkReviewPrompt() {
  const p = activeProfile();
  if (!MMLogic.due(p) || reviewedThisVisit.has(p.id) || $("#reviewprompt"))
    return;
  const card = document.createElement("section");
  card.id = "reviewprompt";
  card.className = "note";
  card.innerHTML =
    '<b>Bu ay neler değişti?</b><p>Yeme becerilerini birlikte gözden geçirelim.</p><button class="chip" id="reviewnow">Becerileri güncelle</button><button class="chip" id="reviewlaterinline">Yarın hatırlat</button>';
  $("#content").append(card);
  $("#reviewnow").onclick = () => openReview(p);
  $("#reviewlaterinline").onclick = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    p.snoozeUntil = MMLogic.dateKey(d);
    saveProfiles();
    card.remove();
  };
}

function toggleChildLike(id) {
  const p = activeProfile();
  if (!p) {
    $("#detail").close();
    openProfiles();
    toast("Önce bir çocuk profili oluştur.");
    return;
  }
  p.likedRecipes = p.likedRecipes || [];
  p.likedRecipes = p.likedRecipes.includes(id)
    ? p.likedRecipes.filter((x) => x !== id)
    : [...p.likedRecipes, id];
  saveProfiles();
  renderDetail();
  toast("Sevdiği yemekler güncellendi");
}
function recipeProfileWarning(r) {
  const p = activeProfile();
  if (!p) return "";
  const hits = MMLogic.allergens(r, p);
  return hits.length
    ? `<div class="note alert"><b>${esc(p.name)} profilindeki alerjiyle eşleşiyor: ${esc(hits.join(", "))}.</b> Bu tarifi çocuk için hazırlama; kişisel alerji planını izle.</div>`
    : "";
}
let lastMealStamp = "";
function mealGreeting() {
  const c = MMMeals.context(),
    p = activeProfile();
  return `${esc(c.greeting)}${p ? ", " + esc(p.name) : ""}.<br><span>Birlikte sofraya.</span>`;
}
let mealChoices = read("mealChoices", {}),
  lastChoice = null;
function choiceKey(now = new Date()) {
  return (activeProfile()?.id || "guest") + ":" + MMMeals.context(now).date;
}
function dailyRecipe(now = new Date()) {
  const choices = mealChoices[choiceKey(now)] || {};
  return MMMeals.pick(
    availableRecipes().filter(
      (r) =>
        !choices[r.id] &&
        (mealCategory === "Tümü" || r.category === mealCategory) &&
        minutes(r) <= mealLimit &&
        normalize(
          r.title + " " + r.ingredients.map((i) => i.name).join(" "),
        ).includes(normalize(mealQuery)),
    ),
    activeProfile(),
    MMLogic,
    now,
  );
}
function refreshDeck() {
  const hero = $(".daily-hero");
  if (hero) {
    hero.outerHTML = dailyHero();
    bindCards();
    bindDaily();
  }
}
function decideMeal(dir) {
  const r = dailyRecipe();
  if (!r) return;
  const key = choiceKey();
  mealChoices[key] ??= {};
  mealChoices[key][r.id] = dir > 0 ? "yes" : "no";
  lastChoice = { key, id: r.id };
  write("mealChoices", mealChoices);
  refreshDeck();
  if (dir > 0) {
    toast("Bugünkü sofrana eklendi");
  } else toast("Bugün istemiyorum · Sıradaki öneri");
}
function undoMeal() {
  if (!lastChoice) return;
  delete mealChoices[lastChoice.key]?.[lastChoice.id];
  lastChoice = null;
  write("mealChoices", mealChoices);
  refreshDeck();
}

function dailyHero() {
  const p = activeProfile(),
    c = MMMeals.context(),
    r = dailyRecipe(),
    choices = mealChoices[choiceKey()] || {},
    chosen = availableRecipes().filter(
      (x) => choices[x.id] === "yes" && MMLogic.permitted(x, p),
    );
  lastMealStamp = c.stamp;
  const tail = `${lastChoice?.key === choiceKey() ? '<button class="textbutton" id="undomeal">↶ Son seçimi geri al</button>' : ""}${chosen.length ? `<div class="chosen-meals"><b>Bugün seçtiklerin</b>${chosen.map((x) => `<button data-open="${esc(x.id)}">✓ ${esc(x.title)} →</button>`).join("")}</div>` : ""}`;
  if (!r)
    return `<section class="daily-hero"><h2>${Object.keys(choices).length ? "Bugünkü önerileri gezdin." : "Birlikte uygun seçenekleri bulalım."}</h2><p>${Object.keys(choices).length ? "Seçtiğin tarifleri açabilir veya önerileri yeniden değerlendirebilirsin." : "Yaş ve kayıtlı alerjilere uygun tarif bulunamadı. Profil bilgilerini kontrol et."}</p>${Object.keys(choices).length ? '<button class="secondary" id="resetmeals">Bugünkü seçimleri sıfırla</button>' : '<button class="secondary" id="dailyfoodguide">Sunum rehberini aç</button>'}${tail}</section>`;
  return `<section class="daily-hero"><div class="daily-top"><span class="eyebrow mini">${esc(c.label.toLocaleUpperCase("tr-TR"))} · <span class="meal-clock">${c.clock}</span></span><span class="daily-badge">${minutes(r)} dk toplam</span></div><div class="meal-rail" id="mealrail" tabindex="0" aria-label="Tarif seçimi: sağa kabul, sola sonraki öneri"><div class="rail-panel rail-yes" aria-hidden="true">♥ Bugün mükemmel olur</div><div class="rail-panel swipe-card" id="mealcard" tabindex="0" aria-label="${esc(r.title)}. Sola: bugün istemiyorum. Sağa: bugün mükemmel olur."><div class="swipe-stamp reject" aria-hidden="true">Bugün<br>istemiyorum</div><div class="swipe-stamp accept" aria-hidden="true">Bugün<br>mükemmel olur</div><button class="daily-open" data-open="${esc(r.id)}"><img draggable="false" src="${esc(recipeImage(r))}" alt="${esc(r.title)}"><h2>${esc(r.title)}</h2><span class="daily-info">${r.minAge}+ ay · Tarife dokunarak göz at</span></button></div><div class="rail-panel rail-no" aria-hidden="true">Bugün istemiyorum</div></div><details class="meal-menu"><summary aria-label="Tarif kartı seçenekleri">•••</summary><button id="rejectmeal">Sonraki öneri</button><button id="acceptmeal">Bugünkü soframa ekle</button></details><p class="daily-foot">Kartı sağa / sola kaydır. Yaş ve kayıtlı alerji filtreleri korunur.</p>${tail}</section>`;
}

function refreshTimedSuggestion() {
  const c = MMMeals.context();
  if ($("#deviceclock")) $("#deviceclock").textContent = c.clock;
  document
    .querySelectorAll(".meal-clock")
    .forEach((x) => (x.textContent = c.clock));
  if (tab === "today" && recipes.length && lastMealStamp !== c.stamp) {
    if ($("#meal-greeting")) $("#meal-greeting").innerHTML = mealGreeting();
    const hero = $(".daily-hero");
    if (hero) {
      hero.outerHTML = dailyHero();
      bindCards();
      bindDaily();
    }
  }
}
setInterval(() => {
  if (document.visibilityState !== "hidden") refreshTimedSuggestion();
}, 30000);
refreshTimedSuggestion();
function bindDaily() {
  if ($("#dailyfoodguide")) $("#dailyfoodguide").onclick = () => go("foods");
  if ($("#undomeal")) $("#undomeal").onclick = undoMeal;
  if ($("#resetmeals"))
    $("#resetmeals").onclick = () => {
      delete mealChoices[choiceKey()];
      lastChoice = null;
      write("mealChoices", mealChoices);
      refreshDeck();
    };
  const card = $("#mealcard");
  if (card) {
    let leaving = false;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const commit = (dir) => {
      if (leaving) return;
      leaving = true;
      card.style.transition = reduced
        ? "none"
        : "transform 230ms ease-out,opacity 230ms";
      card.style.transform = reduced
        ? "none"
        : `translateX(${dir * 500}px) rotate(${dir * 14}deg)`;
      card.style.opacity = "0";
      const expected = dailyRecipe()?.id;
      setTimeout(
        () => {
          if (card.isConnected && expected === dailyRecipe()?.id)
            decideMeal(dir);
        },
        reduced ? 0 : 230,
      );
    };
    MMSwipe.bind(card, commit, (dx) => {
      if (leaving) return;
      card.style.transition = dx ? "none" : "transform 220ms ease-out";
      card.style.transform = reduced
        ? "none"
        : `translateX(${dx}px) rotate(${dx / 25}deg)`;
      card.querySelector(".accept").style.opacity = Math.max(
        0,
        Math.min(1, dx / 80),
      );
      card.querySelector(".reject").style.opacity = Math.max(
        0,
        Math.min(1, -dx / 80),
      );
    });
    $("#rejectmeal").onclick = () => commit(-1);
    $("#acceptmeal").onclick = () => commit(1);
  }
}

const foods = FOOD_CATALOG;

/* A single wall-clock timer keeps elapsed time accurate across navigation/reloads. */
let cookingTimer = read("cookingTimer", null);
function timerLeft() {
  if (!cookingTimer) return 0;
  return cookingTimer.running
    ? Math.max(0, Math.ceil((cookingTimer.endAt - Date.now()) / 1000))
    : cookingTimer.remaining;
}
function timeText(s) {
  return (
    Math.floor(s / 60)
      .toString()
      .padStart(2, "0") +
    ":" +
    Math.floor(s % 60)
      .toString()
      .padStart(2, "0")
  );
}
function timerControls(r, i) {
  const mins = r.steps[i].cookingMinutes;
  if (!mins) return "";
  const same = cookingTimer?.recipe === r.id && cookingTimer?.step === i;
  return `<section class="timer-panel compact-timer"><div><b>Pişirme sayacı</b><span id="timerreadout">${same ? timeText(timerLeft()) : timeText(mins * 60)}</span></div><div class="timer-buttons"><label class="sr-only" for="timerminutes">Pişirme süresi, dakika</label><input id="timerminutes" aria-label="Pişirme süresi dakika" type="number" min="1" max="240" value="${same ? Math.round(cookingTimer.duration / 60) : mins}" inputmode="numeric"><span>dk</span><button class="secondary" id="timerstart">${same ? "Yeniden başlat" : "Başlat"}</button>${same ? `<button class="secondary" id="timerpause">${cookingTimer.running ? "Duraklat" : timerLeft() ? "Devam et" : "Tamamlandı"}</button><button class="textbutton" id="timerreset">Sıfırla</button>` : ""}</div><small>Pişirmeye geçince başlat; süre sonunda pişmeyi kontrol et.</small></section>`;
}

function persistTimer() {
  write("cookingTimer", cookingTimer);
  renderTimerBar();
}
function bindTimerControls() {
  if (!$("#timerstart")) return;
  $("#timerstart").onclick = () => {
    const n = Number($("#timerminutes").value);
    if (!Number.isFinite(n) || n < 1 || n > 240) {
      toast("1–240 dakika arasında süre gir.");
      return;
    }
    if (
      cookingTimer &&
      timerLeft() > 0 &&
      (cookingTimer.recipe !== selected.id || cookingTimer.step !== step) &&
      !confirm(
        "Çalışan sayacı bu adım için yenisiyle değiştirmek istiyor musun?",
      )
    )
      return;
    cookingTimer = {
      recipe: selected.id,
      step,
      duration: Math.round(n * 60),
      remaining: Math.round(n * 60),
      endAt: Date.now() + n * 60000,
      running: true,
      notified: false,
    };
    persistTimer();
    renderCook();
    toast("Geri sayım başladı");
  };
  if ($("#timerpause"))
    $("#timerpause").onclick = () => {
      if (cookingTimer.running) {
        cookingTimer.remaining = timerLeft();
        cookingTimer.running = false;
      } else if (cookingTimer.remaining > 0) {
        cookingTimer.endAt = Date.now() + cookingTimer.remaining * 1000;
        cookingTimer.running = true;
      } else {
        toast("Süre tamamlandı. Yeni sayaç başlatabilirsin.");
        return;
      }
      persistTimer();
      renderCook();
    };
  if ($("#timerreset"))
    $("#timerreset").onclick = () => {
      cookingTimer.remaining = cookingTimer.duration;
      cookingTimer.running = false;
      cookingTimer.notified = false;
      persistTimer();
      renderCook();
    };
}
function renderTimerBar() {
  let bar = $("#timerbar");
  if (!cookingTimer) {
    bar?.remove();
    return;
  }
  if (!bar) {
    bar = document.createElement("div");
    bar.id = "timerbar";
    document.querySelector("nav").before(bar);
  }
  const r = recipes.find((r) => r.id === cookingTimer.recipe),
    left = timerLeft();
  bar.innerHTML = `<button id="returntimer"><b id="bartime">${left ? timeText(left) : "Süre doldu"}</b><span>${esc(r?.title || "Pişirme sayacı")} · ${cookingTimer.step + 1}. adım</span></button><button id="cleartimer" aria-label="Sayacı kapat">×</button>`;
  $("#returntimer").onclick = () => {
    if (!r) return;
    selected = r;
    step = cookingTimer.step;
    renderCook();
    if (!$("#detail").open) $("#detail").showModal();
  };
  $("#cleartimer").onclick = () => {
    if (timerLeft() > 0 && !confirm("Geri sayımı kapatmak istiyor musun?"))
      return;
    cookingTimer = null;
    persistTimer();
    if ($("#timerstart")) renderCook();
  };
}
setInterval(() => {
  if (!cookingTimer) return;
  const left = timerLeft();
  if ($("#bartime"))
    $("#bartime").textContent = left ? timeText(left) : "Süre doldu";
  if (
    $("#timerreadout") &&
    selected?.id === cookingTimer.recipe &&
    step === cookingTimer.step
  )
    $("#timerreadout").textContent = timeText(left);
  if (cookingTimer.running && left === 0) {
    cookingTimer.running = false;
    cookingTimer.remaining = 0;
    cookingTimer.notified = true;
    persistTimer();
    toast("Süre doldu. Yemeğin pişmesini kontrol et.");
    if ($("#timerpause")) $("#timerpause").textContent = "Tamamlandı";
  }
}, 500);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    renderTimerBar();
    refreshTimedSuggestion();
    checkReviewPrompt();
  }
});

async function openRecipeStory(r) {
  const p = activeProfile();
  if (p) {
    p.likedRecipes = p.likedRecipes || [];
    if (!p.likedRecipes.includes(r.id)) {
      p.likedRecipes.push(r.id);
      saveProfiles();
    }
  }
  const d = document.createElement("dialog");
  d.className = "story-preview";
  d.setAttribute("aria-label", "Tarif kartı");
  document.body.append(d);
  let page = 0,
    url = null,
    closed = false;
  const pages = MMStory.pages(r);
  d.addEventListener("close", () => {
    closed = true;
    if (url) URL.revokeObjectURL(url);
    d.remove();
  });
  d.showModal();
  async function show() {
    d.innerHTML = `<div class="story-top"><b>Tarif kartı · ${page + 1}/${pages.length}</b><button data-close>Kapat</button></div><p>Kapak, malzemeler ve yapılış kartlarını sırayla inceleyebilirsin.</p><p role="status" data-status>Hazırlanıyor…</p><div data-picture></div><div class="story-actions"><button class="secondary" data-prev ${page === 0 ? "disabled" : ""}>Önceki</button><button class="secondary" data-next ${page === pages.length - 1 ? "disabled" : ""}>Sonraki</button><button class="primary" data-share disabled>Bu kartı paylaş ↗</button><a class="secondary" data-download hidden>Görseli indir</a></div>`;
    d.querySelector("[data-close]").onclick = () => d.close();
    d.querySelector("[data-prev]").onclick = () => {
      page--;
      show();
    };
    d.querySelector("[data-next]").onclick = () => {
      page++;
      show();
    };
    const requested = page;
    try {
      const { blob } = await MMStory.create(r, recipeImage(r), page);
      if (closed || requested !== page) return;
      if (url) URL.revokeObjectURL(url);
      url = URL.createObjectURL(blob);
      const img = document.createElement("img");
      img.src = url;
      img.alt = r.title + " · " + pages[page].title;
      d.querySelector("[data-picture]").append(img);
      const file = new File([blob], r.id + "-" + (page + 1) + ".png", {
        type: "image/png",
      });
      const link = d.querySelector("[data-download]");
      link.href = url;
      link.download = file.name;
      link.hidden = false;
      d.querySelector("[data-status]").textContent = "Görsel hazır";
      const share = d.querySelector("[data-share]");
      share.disabled = false;
      share.onclick = async () => {
        if (navigator.canShare?.({ files: [file] })) {
          try {
            await navigator.share({ files: [file], title: r.title });
          } catch (e) {
            if (e.name !== "AbortError")
              toast("Paylaşım açılamadı; görseli indirebilirsin.");
          }
        } else link.click();
      };
    } catch {
      if (!closed)
        d.querySelector("[data-status]").textContent =
          "Görsel oluşturulamadı. Kapatıp yeniden dene.";
    }
  }
  await show();
}

const originalBindDaily = bindDaily;
bindDaily = function () {
  originalBindDaily();
  const chosen = document.querySelector(".chosen-meals");
  if (chosen && !chosen.closest("details")) {
    const d = document.createElement("details");
    d.innerHTML = "<summary>Bugünkü sofram</summary>";
    chosen.before(d);
    d.append(chosen);
  }
};
