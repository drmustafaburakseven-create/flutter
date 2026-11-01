/* Visual tasting album. Shares records and eligibility rules with Expo. */
let tastingAgeFilter = "all";
let tastingMode = "all",
  tastingUndo = null,
  tastingSelected = null;
function foodPicture(f, stage = 6) {
  if (!MMTasting.servingImageAvailable(f))
    return '<div class="food-picture food-picture-pending"><span>Sunum görseli hazırlanıyor</span></div>';
  if (f.coreServing) return servingTemplate(f);
  const crop = MMServingFrame.frame(f.id, stage, f.imageAspect);
  return `<div class="food-picture" data-serving-stage="${stage}" data-corner="${crop.corner}" style="aspect-ratio:${crop.ratio}"><img src="${esc(f.imagePath)}" alt="${esc(f.name)} · ${stage}+ ay temsili sunum çizimi" loading="lazy" style="width:${100/crop.w}%;left:${-crop.x/crop.w*100}%;top:${-crop.y/crop.h*100}%"></div>`;
}
function servingTemplate(f) {
  if (f.coreServing) return `<figure class="serving-poster"><img src="${esc(f.imagePath)}" alt="${esc(f.name)}: 6, 9, 12 ve 18 ay sunum örnekleri" style="display:block;width:100%;height:auto" loading="lazy"></figure>`;
  const cell = (month) => `<section class="serving-cell">${foodPicture(f, month)}<h4>${month}+ ay</h4><p>${esc(MMTasting.presentation(f, month))}</p></section>`;
  return `<figure class="serving-template"><h3>${esc(f.name)}</h3><div class="serving-pair">${cell(6)}${cell(9)}</div><div class="serving-brand"><img src="assets/icon.png" alt=""><b>minik mola</b><small>SOFRADA BİRLİKTE</small></div><div class="serving-pair">${cell(18)}${cell(12)}</div><figcaption>Aylar örnektir. Sunumu çocuğunun hazır oluşuna ve yeme becerilerine göre uyarla.</figcaption></figure>`;
}
function foodFilterBar() {
  return '<p class="small muted">Bir gıda seç; nasıl sunulacağını ve yaşa göre dikkat edilecekleri kartın içinde gör.</p>';
}

function renderFoods() {
  const p = activeProfile(),
    age = MMTasting.age(p),
    tried = foods.filter((f) => MMTasting.hasTasted(p, f.id)).length;
  if (foodMonth === null)
    foodMonth = MMTasting.previewStage(age, tastingAgeFilter);
  $("#content").innerHTML =
    `<h1>Tadım</h1><p class="album-intro">Küçük tatlar, kendi ritmimiz.</p><div class="album-segments"><button data-album="all" class="${tastingMode === "all" ? "active" : ""}" aria-pressed="${tastingMode === "all"}">Keşfet</button><button data-album="tried" class="${tastingMode === "tried" ? "active" : ""}" aria-pressed="${tastingMode === "tried"}">Denediklerim · ${tried}</button></div><div class="search"><input id="foodsearch" placeholder="Bir gıda bul…" aria-label="Gıda ara" value="${esc(foodQuery)}"></div>${foodFilterBar()}${age === 5 ? '<p class="note"><b>5. ay kişisel tadım planı</b><br>Hekiminle belirlediğin gıdayı açıp sunum notunu kaydedebilirsin. Genel başlangıç yaklaşık 6 ayda, hazır oluş belirtilerine göre belirlenir.</p>' : ""}<p class="muted small">${tastingMode === "tried" ? "Tik tadım kaydını gösterir; alerji değerlendirmesi değildir." : "Görsele dokun, sunumunu keşfet. Tadınca “Denedik” ile albümüne ekle."}</p><div id="foodresults" class="tasting-grid"></div>`;
  document.querySelectorAll("[data-album]").forEach(
    (b) =>
      (b.onclick = () => {
        tastingMode = b.dataset.album;
        renderFoods();
      }),
  );
  document.querySelectorAll("[data-foodage]").forEach(
    (b) =>
      (b.onclick = () => {
        tastingAgeFilter = b.dataset.foodage;
        renderFoods();
      }),
  );
  $("#foodsearch").oninput = (e) => {
    foodQuery = e.target.value;
    renderFoodResults();
  };
  renderFoodResults();
}
function renderFoodResults() {
  const p = activeProfile(),
    preview = MMTasting.previewStage(MMTasting.age(p), tastingAgeFilter),
    list = foods.filter(
      (f) =>
        MMTasting.matchesQuery(f, foodQuery) &&
        MMTasting.matchesAgeFilter(f, tastingAgeFilter) &&
        (tastingMode === "all" || MMTasting.hasTasted(p, f.id)),
    );
  $("#foodresults").innerHTML = list.length
    ? list
        .map(
          (f) =>
            `<button class="tasting-tile ${MMTasting.hasTasted(p, f.id) ? "tasted" : ""}" data-food="${esc(f.id)}" aria-label="${esc(f.name)}${MMTasting.hasTasted(p, f.id) ? ", tadıldı" : ""}. Sunumu aç">${foodPicture(f, preview)}<b>${esc(f.name)}</b><small class="food-age-label">${esc(f.ageLabel)}</small>${MMTasting.hasTasted(p, f.id) ? '<span class="tasting-check" aria-hidden="true">✓</span>' : ""}</button>`,
        )
        .join("")
    : `<div class="empty"><b>${tastingMode === "tried" ? "İlk tadımını kaydettiğinde görseli burada belirecek." : "Bu aramada gıda bulunamadı."}</b><button class="secondary" id="discoverfoods">Gıdaları keşfet</button></div>`;
  document
    .querySelectorAll("[data-food]")
    .forEach((b) => (b.onclick = () => openFood(b.dataset.food)));
  if ($("#discoverfoods"))
    $("#discoverfoods").onclick = () => {
      tastingMode = "all";
      foodQuery = "";
      tastingAgeFilter = "all";
      renderFoods();
    };
}
function openFood(id, keep = false) {
  const f = foods.find((x) => x.id === id || x.name === id);
  if (!f) return;
  const p = activeProfile(),
    age = MMTasting.age(p),
    state = MMTasting.eligibility(f, p),
    review = f.servingReview;
  const draftNote =
    keep && tastingSelected === f.id ? $("#tastingnote")?.value || "" : "";
  if (!keep) {
    foodMonth = MMTasting.previewStage(age, tastingAgeFilter);
    tastingUndo = null;
  }
  tastingSelected = f.id;
  $("#detail").classList.remove("cook-mode");
  $("#detailbody").innerHTML =
    `<div class="tasting-detail"><div class="sheet-top"><h2>${esc(f.name)}</h2><button id="closefood" aria-label="Tadım kartını kapat">×</button></div><div class="detailwrap"><div class="note"><b>${esc(f.ageLabel)}</b><p>${esc(f.introNote)}</p></div>${state.early ? `<div class="note"><b>5. ay · Kişisel planımız</b><p>${esc(p.earlyTasting[f.id].instruction)}</p></div>` : `${MMTasting.servingImageAvailable(f) ? servingTemplate(f) : ""}<h3>Nasıl sunabilirim?</h3>${[6,9,12,18].map(m => `<p><b>${m}+ ay:</b> ${esc(MMTasting.presentation(f,m))}</p>`).join("")}`}<p class="muted small">Sunum dönemleri örnektir; doku ve boyutu çocuğun hazır oluşuna ve becerilerine uyarla. Dik ve uyanık otursun, yanında bir yetişkin olsun.</p>${f.allergens.length ? `<p class="food-tags">Alerjen: ${esc(f.allergens.join(", "))}</p>` : ""}<p class="small">Kaçın: ${esc(f.avoid)}</p>${state.reason ? `<p class="note ${MMTasting.hits(f, p).length ? "alert" : ""}">${esc(state.reason)}</p>` : ""}${state.allowed ? `<button class="primary" id="tastedit">${MMTasting.hasTasted(p, f.id) ? "Bugün yeniden tattık ✓" : "Denedik ✓"}</button><div class="chips">${["Dokundu", "Kokladı", "Bugün istemedi"].map((o) => `<button class="chip" data-observation="${o}">${o}</button>`).join("")}</div><label for="tastingnote" class="sr-only">Tadım notu, isteğe bağlı</label><input id="tastingnote" class="form-input" maxlength="300" value="${esc(draftNote)}" placeholder="Küçük bir not… (isteğe bağlı)">` : !p ? '<button class="primary" id="tastingprofile">Çocuk profili oluştur</button>' : ""}<div id="tastingfeedback" role="status"></div>${age === 5 && f.min <= 6 && !f.requiresReview && !MMTasting.hits(f, p).length ? `<details class="early-plan"><summary>Bu gıda için hekim planım var</summary><p class="small">Kişisel planını kaydeder. Uygulama 5. ay için otomatik sunum önermez.</p><form id="earlyplan"><label for="earlyinstruction">Hekimle belirlenen sunum</label><textarea class="form-input" id="earlyinstruction" maxlength="300" required placeholder="Bu gıdayı nasıl sunmanız önerildi?">${esc(p.earlyTasting?.[f.id]?.instruction || "")}</textarea><button class="secondary">Kişisel planı kaydet</button>${p.earlyTasting?.[f.id] ? '<button type="button" class="textbutton" id="removeearlyplan">Bu kişisel planı kaldır</button>' : ""}</form></details>` : ""}<button class="secondary" id="readfood">${p?.game?.claimed["food-guide:" + f.id] ? "Sunumu keşfettim ✓" : "Sunumu keşfettim · +5 puan"}</button><p class="small muted">${esc(MMTasting.servingReviewNote(f))}</p>${review?.note ? `<p class="small muted">${esc(review.note)}</p>` : ""}<p class="small"><a href="${esc(review?.status === "verified" ? review.sourceUrl : f.sourceUrls[0])}" target="_blank" rel="noopener">${review?.status === "verified" ? "Solid Starts sunum rehberi ↗" : "Genel bilgi kaynağı ↗"}</a></p>${review?.safetySourceUrl ? `<p class="small"><a href="${esc(review.safetySourceUrl)}" target="_blank" rel="noopener">Ek güvenlik kaynağı ↗</a></p>` : ""}</div></div>`;
  $("#closefood").onclick = () => $("#detail").close();
  if ($("#tastingprofile"))
    $("#tastingprofile").onclick = () => {
      $("#detail").close();
      openProfiles();
    };
  document.querySelectorAll("[data-stage]").forEach(
    (b) =>
      (b.onclick = () => {
        foodMonth = Number(b.dataset.stage);
        openFood(f.id, true);
      }),
  );
  function record(outcome) {
    if (
      !p ||
      p.id !== activeProfile()?.id ||
      !MMTasting.eligibility(f, p).allowed
    )
      return;
    const result = MMGame.trial(p, "food", f.id, outcome, new Date(), {
      note: $("#tastingnote").value,
      stage: state.early ? 5 : foodMonth,
    });
    tastingUndo = result.undo;
    saveProfiles();
    if (tab === "foods") renderFoods();
    renderHeader();
    $("#tastingfeedback").innerHTML =
      `<p class="note">${outcome === "Tattı" ? "Tadım kaydedildi ✓" : "Gözlem kaydedildi"}${result.points ? " · +" + result.points + " puan" : ""}<button class="textbutton" id="undotasting">Geri al</button></p>`;
    $("#tastedit").textContent = MMTasting.hasTasted(p, f.id)
      ? "Bugün yeniden tattık ✓"
      : "Denedik ✓";
    $("#undotasting").onclick = () => {
      if (MMGame.undoTrial(p, tastingUndo)) {
        saveProfiles();
        if (tab === "foods") renderFoods();
        renderHeader();
        $("#tastingfeedback").textContent = "Son kayıt geri alındı.";
        $("#tastedit").textContent = MMTasting.hasTasted(p, f.id)
          ? "Bugün yeniden tattık ✓"
          : "Denedik ✓";
      } else
        $("#tastingfeedback").textContent =
          "Yeni kayıtlar bulundu; son işlem geri alınamadı.";
      tastingUndo = null;
    };
  }
  if ($("#tastedit")) $("#tastedit").onclick = () => record("Tattı");
  document
    .querySelectorAll("[data-observation]")
    .forEach((b) => (b.onclick = () => record(b.dataset.observation)));
  $("#readfood").onclick = () => {
    if (!p) {
      $("#detail").close();
      openProfiles();
      return;
    }
    const earned = MMGame.readFood(p, f.id);
    saveProfiles();
    renderHeader();
    tastingUndo = null;
    $("#readfood").textContent = "Sunumu keşfettim ✓";
    $("#tastingfeedback").textContent = earned
      ? "+5 puan · Sunum bilgisi keşfedildi."
      : "Bu sunum bilgisini daha önce keşfettin.";
  };
  if ($("#earlyplan"))
    $("#earlyplan").onsubmit = (e) => {
      e.preventDefault();
      const instruction = $("#earlyinstruction").value.trim();
      if (!instruction) return;
      p.earlyTasting = {
        ...p.earlyTasting,
        [f.id]: { instruction, updatedAt: MMGame.day() },
      };
      saveProfiles();
      openFood(f.id);
      toast("Kişisel sunum planın kaydedildi");
    };
  if ($("#removeearlyplan"))
    $("#removeearlyplan").onclick = () => {
      delete p.earlyTasting[f.id];
      saveProfiles();
      openFood(f.id);
    };
  if (!$("#detail").open) $("#detail").showModal();
  if (!keep) $("#detail").scrollTop = 0;
}
