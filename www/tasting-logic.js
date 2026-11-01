(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.MMTasting = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  const fold = (s) =>
    String(s || "")
      .toLocaleLowerCase("tr-TR")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ı/g, "i")
      .trim();
  function age(p, now = new Date()) {
    if (!p?.birth) return null;
    const [y, m, d] = p.birth.split("-").map(Number);
    if (!y || !m || !d) return null;
    return (
      (now.getFullYear() - y) * 12 +
      now.getMonth() -
      (m - 1) -
      (now.getDate() < d ? 1 : 0)
    );
  }
  function hits(food, p) {
    return [
      ...(food.allergens || []),
      food.name,
      ...(food.aliases || []),
    ].filter((a) => (p?.allergies || []).some((b) => fold(a) === fold(b)));
  }
  function eligibility(food, p, now = new Date()) {
    const months = age(p, now);
    if (food.requiresReview)
      return {
        allowed: false,
        early: false,
        reason:
          food.introNote || "Bu gıda için önce kişisel değerlendirme gerekir.",
      };
    if (!p)
      return {
        allowed: false,
        early: false,
        reason: "Tadımları kaydetmek için çocuk profili oluştur.",
      };
    if (hits(food, p).length)
      return {
        allowed: false,
        early: false,
        reason:
          "Profilde alerji eşleşmesi var. Bu gıdayı sunma; kişisel hekim planını izle.",
      };
    if (
      months === 5 &&
      food.min <= 6 &&
      p.earlyTasting?.[food.id]?.instruction?.trim()
    )
      return {
        allowed: true,
        early: true,
        reason: "Hekimle belirlediğiniz kişisel sunum planı.",
      };
    if (months === null || months < food.min)
      return {
        allowed: false,
        early: false,
        reason:
          food.id === "honey-single"
            ? "Bal ilk 12 ayda hiçbir şekilde verilmez."
            : "Genel başlangıç yaklaşık 6 ayda, hazır oluş belirtilerine göre belirlenir. 5. ayda yalnızca hekimle belirlenen gıdaya özel planı kaydet.",
      };
    return { allowed: true, early: false, reason: "" };
  }
  function stage(months) {
    return months >= 18 ? 18 : months >= 12 ? 12 : months >= 9 ? 9 : 6;
  }
  // Introduction filters and the pictured serving age are separate. Use the
  // same preview age in the album and on first opening a food card.
  function previewStage(months, filter = "all") {
    if (filter === "nine") return 9;
    const childStage = stage(months ?? 6);
    return filter === "after12" ? Math.max(12, childStage) : childStage;
  }
  function hasTasted(p, id) {
    return !!p?.game?.foods?.[id]?.firstTasted;
  }
  const ageFilters = [
    { id: "all", label: "Tümü" },
    { id: "before12", label: "1 yaş öncesi" },
    { id: "nine", label: "9+ sunum" },
    { id: "after12", label: "12+ kullanım" },
    { id: "review", label: "Özel notlar" },
  ];
  function matchesAgeFilter(food, filter) {
    if (filter === "review")
      return (
        !!food.requiresReview ||
        ["fava", "olive", "kefir", "grapefruit"].includes(food.id)
      );
    if (filter === "after12") return food.min >= 12 || food.ageBand === "dual";
    if (filter === "before12" || filter === "nine")
      return (
        !food.requiresReview &&
        food.min < 12 &&
        food.servingReview?.imageStatus !== "withhold"
      );
    return true;
  }
  function matchesQuery(food, query) {
    return fold([food.name, ...(food.aliases || [])].join(" ")).includes(
      fold(query),
    );
  }
  function presentation(food, month) {
    if (food.requiresReview) return food.avoid;
    if (food.servingReview?.imageStatus === "withhold")
      return "Bu gıdanın aya göre sunumu henüz doğrulanamadı. Kendi hekiminizle belirlediğiniz sunumu esas alın.";
    if (month < food.min)
      return food.id === "honey-single"
        ? "Bal ilk 12 ayda hiçbir şekilde verilmez; pişmiş bal da buna dahildir."
        : food.min + " ay öncesi sunum önerilmez.";
    return food.stages[String(stage(month))];
  }
  function sourceBand(food, month) {
    if (food.requiresReview || food.servingReview?.status !== "verified")
      return null;
    return (
      (food.servingReview.sourceBands || [])
        .filter((band) => band.minMonths <= month)
        .sort((a, b) => b.minMonths - a.minMonths)[0] || null
    );
  }
  function servingImageAvailable(food) {
    return !["withhold", "replace"].includes(food.servingReview?.imageStatus);
  }
  function servingReviewNote(food) {
    const review = food.servingReview;
    if (!review) return "Çizimler temsili sunum örnekleridir.";
    if (food.requiresReview)
      return "Bu gıdanın sunumu için kişisel değerlendirme gerekir.";
    if (review.status === "verified")
      return review.basis === "text"
        ? "Solid Starts sunum açıklamasından hazırlanmış özgün çizim."
        : "Solid Starts sunum görselleri ve açıklamasıyla karşılaştırılmış özgün çizim.";
    return review.status === "no-direct-source"
      ? "Bu gıda için ayrı bir Solid Starts sunum kaydı bulunamadı. Genel bilgi kaynakları aşağıda."
      : "Bu gıdanın Solid Starts sunum bilgisi henüz doğrulanamadı. Genel bilgi kaynakları aşağıda.";
  }
  // A category match must not imply that a particular ingredient has been tried.
  // Only exact counterparts are mapped. Unknown ingredients remain explicitly unrecorded.
  const ingredientFood = {
    ahududu: "raspberry",
    ananas: "pineapple",
    "antep-fistigi": "pistachio",
    armut: "pear",
    arpa: "barley",
    avokado: "avocado-single",
    ayva: "quince",
    badem: "almond",
    bakla: "fava",
    bal: "honey-single",
    balkabagi: "pumpkin",
    "bal-kabagi": "pumpkin",
    bamya: "okra",
    "beyaz-lahana": "cabbage",
    "beyaz-un": "flour",
    bezelye: "peas",
    biber: "pepper",
    bogurtlen: "blackberry",
    borulce: "black-eyed-peas",
    brokoli: "broccoli",
    "bruksel-lahanasi": "brussels-sprout",
    bulgur: "wheat",
    ceviz: "walnut",
    cilek: "strawberry",
    "corek-otu": "black-cumin",
    dereotu: "dill",
    domates: "tomato",
    dut: "mulberry",
    elma: "apple",
    enginar: "artichoke",
    erik: "plum",
    feslegen: "basil",
    findik: "hazelnut",
    greyfurt: "grapefruit",
    "gun-kurusu": "dried-apricot",
    havuc: "carrot",
    hindi: "turkey",
    ispanak: "spinach",
    incir: "fig",
    sut: "milk-single",
    irmik: "semolina",
    kabak: "zucchini",
    "kara-lahana": "kale",
    karanfil: "clove",
    karnabahar: "cauliflower",
    karpuz: "watermelon",
    kavun: "melon",
    kayisi: "apricot",
    kefir: "kefir",
    kekik: "thyme",
    kereviz: "celery",
    kestane: "chestnut",
    pancar: "beet",
    "kirmizi-pancar": "beet",
    kizilcik: "cornelian-cherry",
    kimyon: "cumin",
    kiraz: "cherry",
    kivi: "kiwi",
    "kuru-erik": "dried-plum",
    kuskonmaz: "asparagus",
    kuzu: "lamb",
    limon: "lemon",
    mandalina: "mandarin",
    mango: "mango",
    mantar: "mushroom",
    maydanoz: "parsley",
    misir: "corn",
    "misir-unu": "cornmeal",
    muz: "banana",
    nane: "mint",
    nar: "pomegranate",
    nohut: "chickpea",
    patates: "potato",
    patlican: "aubergine",
    pazi: "chard",
    pirasa: "leek",
    pirinc: "rice",
    portakal: "orange",
    salatalik: "cucumber",
    sarimsak: "garlic",
    semizotu: "purslane",
    sogan: "onion",
    susam: "sesame",
    seftali: "peach",
    tahin: "tahini",
    "tam-bugday-unu": "whole-wheat-flour",
    tarcin: "cinnamon",
    "tatli-patates": "sweet-potato",
    tavuk: "chicken",
    "taze-fasulye": "green-beans",
    "trabzon-hurmasi": "persimmon",
    turp: "radish",
    uzum: "grape",
    visne: "sour-cherry",
    "yer-elmasi": "jerusalem-artichoke",
    "yer-fistigi": "peanut",
    yogurt: "yogurt",
    yulaf: "oats",
    yumurta: "egg-single",
    zencefil: "ginger",
    zeytin: "olive",
  };
  function recipeStatus(recipe, p) {
    const needed = (recipe.ingredients || []).filter(
      (i) => !i.optional && i.canonicalIngredientId !== "su",
    );
    const exactFormFood = {
      "bugday--semolina": "semolina",
      "tam-bugday--flour": "whole-wheat-flour",
    };
    const missing = needed.filter((i) => {
      const foodId =
        exactFormFood[i.canonicalIngredientId + "--" + i.form] ||
        ingredientFood[i.canonicalIngredientId];
      return !foodId || !hasTasted(p, foodId);
    });
    return {
      ready: needed.length > 0 && !missing.length,
      missing: [...new Set(missing.map((i) => i.name))],
    };
  }
  return {
    age,
    hits,
    eligibility,
    stage,
    previewStage,
    hasTasted,
    recipeStatus,
    ageFilters,
    matchesAgeFilter,
    matchesQuery,
    presentation,
    sourceBand,
    servingImageAvailable,
    servingReviewNote,
  };
});
