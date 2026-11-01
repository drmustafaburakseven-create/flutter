/* Original Turkish serving summaries with food-specific source reviews. */
const FOOD_CATALOG = [
  {
    "id": "raspberry",
    "name": "Ahududu",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert, olgunlaşmamış bütün taneleri sunmayın.",
    "slug": "raspberry",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Olgun, ezilmiş"
      },
      {
        "title": "+9 ay",
        "caption": "Yassılaştırılmış yumuşak tane"
      },
      {
        "title": "+12 ay",
        "caption": "Olgun, yumuşak bütün tane"
      },
      {
        "title": "+18 ay",
        "caption": "Olgun, yumuşak bütün tane"
      }
    ],
    "stages": {
      "6": "Ahududuyu ezin; tek başına veya kaşıkla alınabilen gıdaya karıştırarak sunun.",
      "9": "Olgun yumuşak taneleri nazikçe yassılaştırın.",
      "12": "Yalnız olgun ve yumuşaksa bütün tane; hazır değilse ezin.",
      "18": "12 ay biçimi sürer: olgun yumuşak tane veya yassılaştırılmış."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/raspberry/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "ahududu"
    ],
    "imagePath": "assets/serving/core50/raspberry.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/raspberry/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Ezilmiş; düzleştirilmiş alternatif.",
          "conditions": "Küçük parçayı tutamıyorsa ezme."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Yassılaştırılmış yumuşak tane.",
          "conditions": "Kıskaç kavrama."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Bütün olgun yumuşak tane.",
          "conditions": "Hazır değilse düzleştirmeyi sürdürün."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "pineapple",
    "name": "Ananas",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert iri küpler sunmayın; dirençli göbekten parça koparabiliyorsa göbeği bırakın.",
    "slug": "pineapple",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Yumuşak, uzun yassı şerit"
      },
      {
        "title": "+9 ay",
        "caption": "Yumuşak küçük lokmalar"
      },
      {
        "title": "+12 ay",
        "caption": "Yumuşak küçük lokmalar"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak küçük lokmalar"
      }
    ],
    "stages": {
      "6": "Olgun ve hafif basınçla ezilen ananası soyup uzun yassı şeritler kesin.",
      "9": "Yumuşak küçük lokmalar; uzun şeritler de sürebilir.",
      "12": "Küçük yumuşak lokmalar; çatalla alınabilir.",
      "18": "12 ay biçimi sürer: yumuşak küçük lokmalar ve çatal."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/pineapple/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "ananas"
    ],
    "imagePath": "assets/serving/core50/pineapple.webp",
    "imageAspect": 0.8333333333333334,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/pineapple/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Uzun yassı şerit veya dirençli göbek.",
          "conditions": "Hafif basınçla ezilen olgun meyve; göbek kopuyorsa bırakın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Yumuşak küçük lokma.",
          "conditions": "Hafif basınç testi."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Küçük lokmalar, çatalla.",
          "conditions": "Yumuşak ve olgun."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "pistachio",
    "name": "Antep fıstığı",
    "icon": "",
    "allergens": [
      "Sert kabuklu yemiş",
      "Antep fıstığı"
    ],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Bütün/iri kuruyemişleri 5 yaş altında verme; yoğun yapışkan ezme topağı sunma.",
    "slug": "pistachio",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "İnce öğütülmüş; nemli yemeğe karışmış"
      },
      {
        "title": "+9 ay",
        "caption": "İnce öğütülmüş; nemli yemeğe karışmış"
      },
      {
        "title": "+12 ay",
        "caption": "İnce öğütülmüş; nemli yemeğe karışmış"
      },
      {
        "title": "+18 ay",
        "caption": "İnce öğütülmüş; nemli yemeğe karışmış"
      }
    ],
    "stages": {
      "6": "Kabuksuz Antep fıstığı içini un inceliğinde öğütüp nemli yemeğe karıştır veya pürüzsüz ezmesini incelt.",
      "9": "6 ay hazırlığını sürdür; iri kırıntı bırakma.",
      "12": "İnce öğütülmüş içi yemeğe karıştır veya inceltilmiş pürüzsüz ezmeyi çok ince sür.",
      "18": "12 ay hazırlığını sürdür; bütün veya iri kuruyemişe otomatik geçiş yapma."
    },
    "aliases": [
      "Antep fıstığı (öğütülmüş)"
    ],
    "sourceUrls": [
      "https://solidstarts.com/foods/pistachio/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html",
      "https://www.nhs.uk/baby/weaning-and-feeding/food-allergies-in-babies-and-young-children/"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "antep-fistigi"
    ],
    "imagePath": "assets/serving/expanded/pistachio.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/pistachio/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "İnce öğütülmüş kuruyemiş veya inceltilmiş pürüzsüz ezme.",
          "conditions": "Nemli yemeğe karıştır; iri parça yok."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Aynı formlar sürer; ince sürülebilir.",
          "conditions": "Yoğun ezme topağı yok."
        },
        {
          "minMonths": 36,
          "label": "36+ ay",
          "preparation": "Kaynak bütün kuruyemişe beceriyle geçişi tartışır.",
          "conditions": "Uygulama 6–18 ayda bu geçişi göstermez."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "pear",
    "name": "Armut",
    "icon": "🍐",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 1,
    "avoid": "Sert armut ve sert küpler sunma; çekirdekleri çıkar.",
    "slug": "pear",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Yumuşak pişmiş yarım"
      },
      {
        "title": "+9 ay",
        "caption": "Küçük, yassı parçalar"
      },
      {
        "title": "+12 ay",
        "caption": "Çok olgun · beceri uygunsa"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak · beceri uygunsa"
      }
    ],
    "stages": {
      "6": "Çekirdeksiz armut yarımını çok yumuşak olana kadar pişir.",
      "9": "Çok olgun armudu küçük, yassı parçalara ayır; sertse yumuşak pişir.",
      "12": "Çok yumuşak bütün armut yalnız uygun ısırma/çiğneme becerisiyle; sap ve sert çekirdekleri çıkar. Yumuşak dilimler sürdürülebilir.",
      "18": "12+ sunumu sürer: çok yumuşak armut ve beceriye göre ısırma."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/pear/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [
      "armut"
    ],
    "imagePath": "assets/serving/core50/pear.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/pear/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Çekirdeği çıkarılmış yumuşak yarım, ince dilim, rende veya ezme.",
          "conditions": "Sertse pişir; hafif parmak basısıyla ezilmeli."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Küçük yassı parçalar veya yumuşak yarım.",
          "conditions": "Küçük parçalar için kıskaç kavrama."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Yumuşak çeyrek, lokmalar veya hazırsa bütün olgun armut.",
          "conditions": "Sert, olgunlaşmamış armuttan kaçın."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "Bütün sunum yalnız çok yumuşak meyve ve uygun ısırma/çiğneme becerisi içindir. Sert meyveyi pişirin; sap ve sert çekirdekleri çıkarın.",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "barley",
    "name": "Arpa",
    "icon": "",
    "allergens": [
      "Arpa",
      "Gluten"
    ],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Gluten içerir; çölyak için uygun değildir. Kuru sert tane verme.",
    "slug": "barley",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "İyi pişmiş arpa lapası"
      },
      {
        "title": "+9 ay",
        "caption": "Lapa veya yassılaşmış taneler"
      },
      {
        "title": "+12 ay",
        "caption": "Kaşıkla yumuşak lapa"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak aile yemeğinde"
      }
    ],
    "stages": {
      "6": "İyice pişmiş arpa lapasını elle veya önceden doldurulmuş kaşıkla sun.",
      "9": "Lapaya devam edebilir; iyi pişmiş taneleri çatalla yassılaştırıp nemli sunabilirsin.",
      "12": "Lapa veya arpalı çorba ve sulu yemeklerde kaşık pratiği yapılabilir.",
      "18": "12 ay sunumları sürer; tek zorunlu doku yoktur."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/barley/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html",
      "https://www.nhs.uk/baby/weaning-and-feeding/food-allergies-in-babies-and-young-children/"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "arpa"
    ],
    "imagePath": "assets/serving/expanded/barley.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/barley/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Arpa lapası; undan yumuşak hamur işi.",
          "conditions": "İyi pişmiş."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Lapa veya küçük yumuşak parçalar; pişmiş taneleri yassılaştır.",
          "conditions": "Kıskaç tutuşuna göre."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Lapa, çorba ve sulu yemekler.",
          "conditions": "Kaşık isteğe bağlı."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "avocado-single",
    "name": "Avokado",
    "icon": "🥑",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 0,
    "avoid": "Sert avokado, kabuk ve çekirdek sunma.",
    "slug": "avocado",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Olgun avokado dilimi"
      },
      {
        "title": "+9 ay",
        "caption": "Küçük yumuşak parçalar"
      },
      {
        "title": "+12 ay",
        "caption": "Avokado lokmaları"
      },
      {
        "title": "+18 ay",
        "caption": "Kaşıkla alma pratiği"
      }
    ],
    "stages": {
      "6": "Olgun avokadonun kabuğunu ve çekirdeğini çıkar; kalın yumuşak dilim sun.",
      "9": "Kavrama geliştiyse küçük yumuşak parçalar sun.",
      "12": "9+ sunumu sürer: küçük yumuşak parçalar.",
      "18": "Çekirdeği çıkarılmış yarımdan kaşıklama denenebilir; kabuk yenmez."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/avocado/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [
      "avokado"
    ],
    "imagePath": "assets/serving/core50/avocado-single.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/avocado/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Soyulmuş ve çekirdeksiz olgun yarım, kalın şerit veya ezme.",
          "conditions": "Olgun, yumuşak olmalı."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Küçük yumuşak lokmalar.",
          "conditions": "Kıskaç kavrama yoksa büyük şerit veya ezmeyi sürdür."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Şerit, lokma, ezme veya kabuk içinden kaşıklama.",
          "conditions": "Çekirdek çıkarılır; kabuk yenmez."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "12 ay için ayrı kaynak bandı yok; 9+ sürdürülür.",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "quince",
    "name": "Ayva",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Çiğ sert ayva, çekirdek ve sert kabuk sunmayın.",
    "slug": "quince",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş, kabuksuz büyük parça"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş, yumuşak parçalar"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş küçük lokmalar"
      },
      {
        "title": "+18 ay",
        "caption": "Pişmiş küçük lokmalar"
      }
    ],
    "stages": {
      "6": "Kabuk ve çekirdeği çıkarılmış, tamamen yumuşayana dek pişmiş büyük bölüm.",
      "9": "Pişmiş büyük bölümler; kıskaç kavrama varsa küçük lokmalar.",
      "12": "İyi pişmiş küçük lokmalar, önceden yüklenmiş çatalla.",
      "18": "12 ay biçimini sürdürün: pişmiş küçük lokmalar."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/quince/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "ayva"
    ],
    "imagePath": "assets/serving/reviewed/quince.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/quince/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "İyi pişmiş büyük bölüm veya ezme.",
          "conditions": "Kabuk ve çekirdek çıkarılır."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Pişmiş büyük bölüm veya küçük lokma.",
          "conditions": "Kıskaç kavrama gelişmişse küçük parçalar."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "İyi pişmiş lokmalar, çatalla.",
          "conditions": "Kabuksuz ve çekirdeksiz."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "almond",
    "name": "Badem",
    "icon": "",
    "allergens": [
      "Sert kabuklu yemiş",
      "Badem"
    ],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Bütün/iri kuruyemişleri 5 yaş altında verme; yoğun yapışkan ezme topağı sunma.",
    "slug": "almond",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "İnce öğütülmüş; nemli yemeğe karışmış"
      },
      {
        "title": "+9 ay",
        "caption": "İnce öğütülmüş; nemli yemeğe karışmış"
      },
      {
        "title": "+12 ay",
        "caption": "İnce öğütülmüş; nemli yemeğe karışmış"
      },
      {
        "title": "+18 ay",
        "caption": "İnce öğütülmüş; nemli yemeğe karışmış"
      }
    ],
    "stages": {
      "6": "Kabuksuz badem içini un inceliğinde öğütüp nemli yemeğe karıştır veya pürüzsüz ezmesini incelt.",
      "9": "6 ay hazırlığını sürdür; iri kırıntı bırakma.",
      "12": "İnce öğütülmüş içi yemeğe karıştır veya inceltilmiş pürüzsüz ezmeyi çok ince sür.",
      "18": "12 ay hazırlığını sürdür; bütün veya iri kuruyemişe otomatik geçiş yapma."
    },
    "aliases": [
      "Badem (öğütülmüş)"
    ],
    "sourceUrls": [
      "https://solidstarts.com/foods/almond/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html",
      "https://www.nhs.uk/baby/weaning-and-feeding/food-allergies-in-babies-and-young-children/"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "badem"
    ],
    "imagePath": "assets/serving/core50/almond.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/almond/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "İnce öğütülmüş kuruyemiş veya inceltilmiş pürüzsüz ezme.",
          "conditions": "Nemli yemeğe karıştır; iri parça yok."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Aynı formlar sürer; ince sürülebilir.",
          "conditions": "Yoğun ezme topağı yok."
        },
        {
          "minMonths": 36,
          "label": "36+ ay",
          "preparation": "Kaynak bütün kuruyemişe beceriyle geçişi tartışır.",
          "conditions": "Uygulama 6–18 ayda bu geçişi göstermez."
        }
      ],
      "basis": "text",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "fava",
    "name": "Bakla",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "G6PD eksikliğinde bakla verilmez. Aile öyküsü varsa sunmadan önce hekime danışın.",
    "slug": "fava",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş, kabuksuz ezme"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş, ezilmiş"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş, ezilmiş"
      },
      {
        "title": "+18 ay",
        "caption": "Pişmiş, ezilmiş"
      }
    ],
    "stages": {
      "6": "G6PD eksikliği yoksa, pişmiş baklayı ezin. Aile öyküsünde önce hekime danışın.",
      "9": "Pişmiş bakla tanelerini ezin veya yassılaştırın; G6PD uyarısı sürer.",
      "12": "Ezme sürdürülebilir. Bütün tane yalnız iyi çiğneyip ağzını doldurmayan çocukta.",
      "18": "12+ sunumu sürdürün; G6PD eksikliğinde hiçbir yaşta vermeyin."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/fava-bean/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html",
      "https://www.rch.org.au/kidsinfo/fact_sheets/g6pd_deficiency/"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · G6PD uyarısı",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir. G6PD eksikliği varsa hiçbir yaşta verilmez.",
    "ingredientIds": [
      "bakla"
    ],
    "imagePath": "assets/serving/expanded/fava.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/fava-bean/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Pişmiş ezme veya yassılaştırılmış tane.",
          "conditions": "G6PD eksikliğinde verilmez; aile öyküsünde önce hekimle görüşülür."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Pişmiş taneleri yassılaştırın.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "İyi çiğniyor ve ağzını doldurmuyorsa pişmiş bütün tane.",
          "conditions": "Beceriye göre uyarlayın."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "honey-single",
    "name": "Bal",
    "icon": "🍯",
    "allergens": [],
    "min": 12,
    "start": "12 aydan önce verilmez",
    "source": 2,
    "avoid": "12 ay dolmadan hiçbir biçimde bal verme.",
    "slug": "honey",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "VERİLMEZ"
      },
      {
        "title": "+9 ay",
        "caption": "VERİLMEZ"
      },
      {
        "title": "+12 ay",
        "caption": "Gerekli değil"
      },
      {
        "title": "+18 ay",
        "caption": "Az miktar, yemek içinde"
      }
    ],
    "stages": {
      "6": "Verilmez. Bal içeren pişmiş ürünler de buna dahildir.",
      "9": "Verilmez. Pişirmek 12 ay sınırını kaldırmaz.",
      "12": "12 ay dolduktan sonra kullanılabilir; gerekli değildir.",
      "18": "Kullanılıyorsa uygun yemeğin içinde az miktarda sun."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/honey/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "after12",
    "ageLabel": "12 ay dolmadan verilmez",
    "introNote": "Bal 12 ay dolmadan hiçbir şekilde verilmez; pişmiş bal içeren tarifler de buna dahildir. 12+ olması tüketilmesi gerektiği anlamına gelmez.",
    "ingredientIds": [
      "bal"
    ],
    "imagePath": "assets/serving/individual/honey-single.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/honey/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6–11 ay",
          "preparation": "Verilmez.",
          "conditions": "Bebek botulizmi riski."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Yemek, sos veya pişmiş ürün içinde kullanılabilir.",
          "conditions": "Gerekli değildir; tatlılar ölçülü tutulur."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "pumpkin",
    "name": "Bal kabağı",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Çekirdekleri ayıklayın; sert ve az pişmiş parçalar vermeyin.",
    "slug": "pumpkin",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş büyük hilal dilim"
      },
      {
        "title": "+9 ay",
        "caption": "Küçük yumuşak parçalar"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş parçalar ve çatal"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak lokmalar"
      }
    ],
    "stages": {
      "6": "Çekirdekleri çıkarın; iyice pişmiş balkabağını ezin veya büyük hilal dilim sunun.",
      "9": "Kıskaç kavraması varsa kabuksuz yumuşak küçük parçalar sunun.",
      "12": "Yumuşak lokmalar veya büyük dilimler sunun; çatalı önceden doldurabilirsiniz.",
      "18": "12+ sunumunu sürdürün: iyice pişmiş yumuşak lokmalar."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/pumpkin/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "balkabagi",
      "bal-kabagi"
    ],
    "imagePath": "assets/serving/core50/pumpkin.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/pumpkin/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Yumuşak pişmiş ezme veya büyük hilal dilim.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Kıskaç kavramasıyla kabuksuz yumuşak küçük parçalar.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Yumuşak lokmalar veya büyük dilimler; çatal denemesi.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "fish",
    "name": "Balık",
    "icon": "🐟",
    "allergens": [
      "Balık"
    ],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 1,
    "avoid": "Kılçık, deri, çiğ veya az pişmiş balık sunma.",
    "slug": "salmon",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Uzun, kılçıksız somon şeridi"
      },
      {
        "title": "+9 ay",
        "caption": "Yumuşak somon parçaları"
      },
      {
        "title": "+12 ay",
        "caption": "Küçük somon lokmaları"
      },
      {
        "title": "+18 ay",
        "caption": "Çatal ile deneme"
      }
    ],
    "stages": {
      "6": "Somon örneği: tam pişmiş, derisiz ve kılçıksız eti uzun yumuşak şerit halinde sun.",
      "9": "Somon örneği: kılçıksız küçük yumuşak parçalar sun.",
      "12": "Somon örneği: küçük lokmalarla çatal denenebilir.",
      "18": "12+ somon sunumunu sürdür; kılçıkları yeniden kontrol et."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/salmon/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [],
    "imagePath": "assets/serving/core50/fish.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/salmon/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ somon örneği",
          "preparation": "Kılçıksız, derisiz pişmiş şerit veya nemli yemeğe karışmış somon.",
          "conditions": "Tam pişmiş olmalı."
        },
        {
          "minMonths": 9,
          "label": "9+ somon örneği",
          "preparation": "Küçük yumuşak somon parçaları veya uzun şerit.",
          "conditions": "Tüm kılçık ve deri çıkarılır."
        },
        {
          "minMonths": 12,
          "label": "12+ somon örneği",
          "preparation": "Pişmiş şerit, lokma veya küçük lifler.",
          "conditions": "Çatal denemesi yapılabilir."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "Somon bir sunum örneğidir; tüm balık türlerinin cıva, kılçık ve alerjen değerlendirmesi aynı değildir.",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "okra",
    "name": "Bamya",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert lifli ve az pişmiş bamya sunmayın; sapı çıkarın.",
    "slug": "okra",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Büyük, bütün pişmiş bamya"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş küçük parçalar"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş küçük parçalar"
      },
      {
        "title": "+18 ay",
        "caption": "Pişmiş uzun parçalar"
      }
    ],
    "stages": {
      "6": "Sapı alınmış büyük bütün bamyayı iki parmak arasında ezilene dek pişirin.",
      "9": "Kıskaç kavraması geliştiyse yumuşak pişmiş küçük halka veya yarım ay parçalar sunun.",
      "12": "9+ sunumunu sürdürün: yumuşak pişmiş lokmalar.",
      "18": "Pişmiş uzun veya küçük parçalar; dokuyu çiğneme becerisine göre ayarlayın."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/okra/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "bamya"
    ],
    "imagePath": "assets/serving/reviewed/okra.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/okra/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Yumuşak pişmiş büyük bütün bamya veya kıyım.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Yumuşak pişmiş halka veya yarım ay parçalar.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Pişmiş uzun veya küçük parçalar.",
          "conditions": "Beceriye göre uyarlayın."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "cabbage",
    "name": "Beyaz lahana",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert çiğ yaprak parçalarını küçük bebeğe kalın ve iri vermeyin.",
    "slug": "cabbage",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş ince kıyım"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş ince şeritler"
      },
      {
        "title": "+12 ay",
        "caption": "Yumuşak pişmiş parçalar"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak pişmiş yaprak"
      }
    ],
    "stages": {
      "6": "İnce kıyılmış lahanayı yumuşak bir gıdaya karıştırın.",
      "9": "Pişmiş, ince kıyılmış veya büyük yumuşak şeritler sunun.",
      "12": "Yumuşak pişmiş şerit veya parçalar; çiğse ince kıyın.",
      "18": "Pişmiş yaprak, şerit veya yumuşak sarma sunun."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/cabbage/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "beyaz-lahana"
    ],
    "imagePath": "assets/serving/reviewed/cabbage.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/cabbage/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "İnce kıyım/rende yumuşak gıdaya katılmış.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "İnce şerit veya pişmiş büyük şerit.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Pişmiş doğranmış yaprak/şerit; çiğse ince kıyım.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Pişmiş yaprak veya sarma; çiğ doku beceriye bağlı.",
          "conditions": "Beceriye göre uyarlayın."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "flour",
    "name": "Beyaz un",
    "icon": "",
    "allergens": [
      "Buğday"
    ],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Unu çiğ tattırma. Yemeğin her tarafı tamamen pişmiş, içi hamursuz ve yumuşak olmalı; kuru un/toz yedirme.",
    "slug": "flour",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Tam pişmiş lapa içinde"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş, yumuşak karışım"
      },
      {
        "title": "+12 ay",
        "caption": "Tam pişmiş yumuşak şerit"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak, pişmiş lokma"
      }
    ],
    "stages": {
      "6": "Tam pişmiş lapa içinde. Unu çiğ tattırma. Yemeğin her tarafı tamamen pişmiş, içi hamursuz ve yumuşak olmalı; kuru un/toz yedirme.",
      "9": "Pişmiş, yumuşak karışım. Unu çiğ tattırma. Yemeğin her tarafı tamamen pişmiş, içi hamursuz ve yumuşak olmalı; kuru un/toz yedirme.",
      "12": "Tam pişmiş yumuşak şerit. Unu çiğ tattırma. Yemeğin her tarafı tamamen pişmiş, içi hamursuz ve yumuşak olmalı; kuru un/toz yedirme.",
      "18": "Yumuşak, pişmiş lokma. Unu çiğ tattırma. Yemeğin her tarafı tamamen pişmiş, içi hamursuz ve yumuşak olmalı; kuru un/toz yedirme."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/wheat/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html",
      "https://www.nhs.uk/baby/weaning-and-feeding/food-allergies-in-babies-and-young-children/"
    ],
    "reviewedAt": "2026-10-18",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "beyaz-un"
    ],
    "imagePath": "assets/serving/expanded/flour.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "no-direct-source",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/wheat/",
      "sourceBands": [],
      "basis": "text",
      "imageStatus": "keep",
      "note": "İlgili buğday kaynağından uyarlama; ayrı un türü için doğrudan yaş rehberi değil.",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "peas",
    "name": "Bezelye",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert, çiğ bezelye taneleri sunma.",
    "slug": "peas",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş bezelye ezmesi"
      },
      {
        "title": "+9 ay",
        "caption": "Çatalla yassılaştırılmış"
      },
      {
        "title": "+12 ay",
        "caption": "Yumuşak, yassı taneler"
      },
      {
        "title": "+18 ay",
        "caption": "Yassı tanelerle çatal"
      }
    ],
    "stages": {
      "6": "Bezelyeyi iyice pişirip ez.",
      "9": "Yumuşak taneleri tek tek çatalla yassılaştır; alabilmesi için aralıklı sun.",
      "12": "Pişmiş, yassılaştırılmış taneleri sürdür.",
      "18": "Yumuşak yassı tanelerle çatal denenebilir."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/peas-garden/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "bezelye"
    ],
    "imagePath": "assets/serving/core50/peas.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/peas-garden/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Pişmiş bezelye ezmesi veya çatalla yassılaştırılmış tane.",
          "conditions": "Yumuşak pişir."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Çatalla yassılaştırılmış taneler.",
          "conditions": "Kıskaç kavrama; doğrudan tepside az az sun."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Beceri uygunsa pişmiş bütün tane; yassı sunum sürdürülebilir.",
          "conditions": "Ağızda yönetebildiği gözlenmeli."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "Kaynak 12+ bütün taneyi beceriye bağlar; yuvarlak şekli azaltmak için kaynakta kabul edilen yassı biçim sürdürülür.",
      "safetySourceUrl": "https://www.nhs.uk/best-start-in-life/baby/weaning/safe-weaning/preparing-food-safely/"
    },
    "coreServing": true
  },
  {
    "id": "pepper",
    "name": "Biber",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Kalın çiğ biber parçaları ve acı biber sunmayın.",
    "slug": "pepper",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş, soyulmuş yarım"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş küçük parçalar"
      },
      {
        "title": "+12 ay",
        "caption": "İncecik çiğ şeritler"
      },
      {
        "title": "+18 ay",
        "caption": "Beceri uygunsa çiğ yarım"
      }
    ],
    "stages": {
      "6": "Acısız biberi pişirin; kabuk, sap, çekirdek ve beyaz iç kısmı çıkarıp büyük yarım sunun.",
      "9": "Yumuşak pişmiş küçük parçalar veya kâğıt inceliğinde çiğ şeritler sunun.",
      "12": "9+ sunumu sürdürün; pişmiş parçalar ve ince çiğ şeritler.",
      "18": "Çiğnemesi uygunsa çekirdekleri çıkarılmış çiğ yarım; pişmiş parçalar da sürebilir."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/bell-pepper/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "biber"
    ],
    "imagePath": "assets/serving/core50/pepper.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/bell-pepper/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Pişmiş yarım biber; kabuk, sap ve çekirdek çıkarılmış.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Pişmiş parçalar veya kâğıt inceliğinde çiğ dilim.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Pişmiş parçalar; beceri uygunsa çiğ yarım veya dilim.",
          "conditions": "Beceriye göre uyarlayın."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "blackberry",
    "name": "Böğürtlen",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert ve küçük bütün taneleri sunmayın.",
    "slug": "blackberry",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Ezilmiş, yumuşak"
      },
      {
        "title": "+9 ay",
        "caption": "Boyuna dörde bölünmüş"
      },
      {
        "title": "+12 ay",
        "caption": "İri, çok yumuşak tane"
      },
      {
        "title": "+18 ay",
        "caption": "İri, çok yumuşak tane"
      }
    ],
    "stages": {
      "6": "Olgun böğürtleni ezin veya pişirerek patlatın; yumuşak gıdaya karıştırın.",
      "9": "Yumuşak böğürtleni boyuna dörde bölün.",
      "12": "Bütün sunulacaksa iri ve çok yumuşak tane seçin; hazır değilse dörde bölün.",
      "18": "12 ay biçimi sürer; iri yumuşak tane veya boyuna dörtte bir."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/blackberry/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "bogurtlen"
    ],
    "imagePath": "assets/serving/core50/blackberry.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/blackberry/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Pişirilip patlamış veya ezilmiş.",
          "conditions": "Olgun ve yumuşak."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Boyuna dörde bölünmüş.",
          "conditions": "Gerekirse yarımlar; ağza doldurmaması izlenir."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Bütün iri, çok yumuşak tane düşünülebilir.",
          "conditions": "Küçük ve sert taneler daha riskli; dörtte bir devam edebilir."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "black-eyed-peas",
    "name": "Börülce",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Çiğ, sert veya az pişmiş börülce vermeyin.",
    "slug": "black-eyed-peas",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş ezme"
      },
      {
        "title": "+9 ay",
        "caption": "Yumuşak, ezilmiş"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş yumuşak taneler"
      },
      {
        "title": "+18 ay",
        "caption": "Pişmiş ezme"
      }
    ],
    "stages": {
      "6": "İyice pişmiş börülceyi ezin; koyuluğu yumuşak bir gıdayla ayarlayabilirsiniz.",
      "9": "Kıskaç kavraması geliştiyse taneleri yassılaştırın; ezme de olabilir.",
      "12": "İyi pişmiş, yumuşak taneler veya ezme sunun.",
      "18": "12+ sunumu sürdürün; çatal veya kaşık denemesi yapabilirsiniz."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/black-eye-peas/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "borulce"
    ],
    "imagePath": "assets/serving/expanded/black-eyed-peas.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/black-eye-peas/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Pişmiş ezme veya püre.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Yassılaştırılmış taneler veya ezme.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "İyi pişmiş bütün taneler veya ezme.",
          "conditions": "Beceriye göre uyarlayın."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "broccoli",
    "name": "Brokoli",
    "icon": "🥦",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 1,
    "avoid": "Sert, yuvarlak sap parçaları sunma.",
    "slug": "broccoli",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Saplı, yumuşak çiçek"
      },
      {
        "title": "+9 ay",
        "caption": "Küçük pişmiş çiçekler"
      },
      {
        "title": "+12 ay",
        "caption": "Yumuşak küçük parçalar"
      },
      {
        "title": "+18 ay",
        "caption": "Çatal ile deneme"
      }
    ],
    "stages": {
      "6": "Saplı büyük çiçeği yumuşak pişir; sert sapı ayır veya boyuna böl.",
      "9": "Küçük pişmiş çiçekler sun; tutamıyorsa büyük parçaya dön.",
      "12": "Küçük yumuşak parçalarla çatal denenebilir.",
      "18": "12+ sunumunu sürdür; çatal kullanması zorunlu değildir."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/broccoli/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [
      "brokoli"
    ],
    "imagePath": "assets/serving/core50/broccoli.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/broccoli/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Üç yetişkin parmağı genişliğinde pişmiş çiçek veya soyulmuş yassı sap.",
          "conditions": "Yumuşak pişir; yuvarlak sert sapı boyuna böl."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Küçük pişmiş çiçek veya sap parçaları.",
          "conditions": "Tutamıyorsa büyük çiçeğe dön."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Küçük pişmiş parçalarla çatal pratiği.",
          "conditions": "Dokuyu çiğneme becerisine göre ayarla."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "brussels-sprout",
    "name": "Brüksel lahanası",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Küçük bütün sert lahanaları sunmayın; tamamen yumuşatın.",
    "slug": "brussels-sprout",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Büyük, pişmiş yarım"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş çeyrek parçalar"
      },
      {
        "title": "+12 ay",
        "caption": "İnce kıyılmış yapraklar"
      },
      {
        "title": "+18 ay",
        "caption": "İnce kıyılmış yapraklar"
      }
    ],
    "stages": {
      "6": "Büyük Brüksel lahanasını yumuşayana dek pişirip yarım veya çeyrek sunun.",
      "9": "Kıskaç kavramasıyla yumuşak pişmiş lokmalar veya çeyrekler sunun.",
      "12": "İnce kıyılmış çiğ veya pişmiş yapraklar; pişmiş lokmalarla çatal da denenebilir.",
      "18": "12+ sunumunu sürdürün: ince kıyılmış yapraklar veya pişmiş lokmalar."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/brussels-sprouts/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "bruksel-lahanasi"
    ],
    "imagePath": "assets/serving/reviewed/brussels-sprout.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/brussels-sprouts/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Büyük ve yumuşak pişmiş yarım/çeyrek; küçükleri kıyıp yemeğe katın.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Yumuşak pişmiş lokmalar/çeyrekler.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Pişmiş parçalar veya ince çiğ rende.",
          "conditions": "Beceriye göre uyarlayın."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "wheat",
    "name": "Bulgur",
    "icon": "🌾",
    "allergens": [
      "Buğday",
      "Gluten"
    ],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 0,
    "avoid": "Sert kuru tane sunma; buğday alerjisinde veya çölyakta uygun değildir.",
    "slug": "bulgur",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Yumuşak bulgur lapası"
      },
      {
        "title": "+9 ay",
        "caption": "Nemli bulgur yemeği"
      },
      {
        "title": "+12 ay",
        "caption": "Kaşıkla bulgur"
      },
      {
        "title": "+18 ay",
        "caption": "Kaşık pratiği"
      }
    ],
    "stages": {
      "6": "Bulguru iyice pişir; nemli lapa olarak sun.",
      "9": "Yumuşak bulguru nemli yemeğe karıştır; tutulamıyorsa ezmeye ekle.",
      "12": "Nemli bulgurla kaşık denenebilir.",
      "18": "12+ sunumunu sürdür; kaşık kullanması zorunlu değil."
    },
    "aliases": [
      "Bulgur",
      "Buğday"
    ],
    "sourceUrls": [
      "https://solidstarts.com/foods/bulgur/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [
      "bulgur"
    ],
    "imagePath": "assets/serving/core50/wheat.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/bulgur/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Yumuşak bulgur lapası veya büyük yumuşak köfte/mücver.",
          "conditions": "Buğday içerir."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Lapa, yumuşak lokma veya nemli bulgur.",
          "conditions": "Tane tutulamıyorsa ezmeye karıştır."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Lapa, yemek, çorba veya salata içinde bulgur.",
          "conditions": "Kaşık ve elle yeme birlikte sürdürülebilir."
        }
      ],
      "basis": "text",
      "imageStatus": "replaced",
      "note": "Görsel bulguru örnekler; bütün buğday tanesi sunumu değildir.",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "walnut",
    "name": "Ceviz",
    "icon": "",
    "allergens": [
      "Sert kabuklu yemiş",
      "Ceviz"
    ],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Bütün/iri kuruyemişleri 5 yaş altında verme; yoğun yapışkan ezme topağı sunma.",
    "slug": "walnut",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "İnce öğütülmüş; nemli yemeğe karışmış"
      },
      {
        "title": "+9 ay",
        "caption": "İnce öğütülmüş; nemli yemeğe karışmış"
      },
      {
        "title": "+12 ay",
        "caption": "İnce öğütülmüş; nemli yemeğe karışmış"
      },
      {
        "title": "+18 ay",
        "caption": "İnce öğütülmüş; nemli yemeğe karışmış"
      }
    ],
    "stages": {
      "6": "Kabuksuz ceviz içini un inceliğinde öğütüp nemli yemeğe karıştır veya pürüzsüz ezmesini incelt.",
      "9": "6 ay hazırlığını sürdür; iri kırıntı bırakma.",
      "12": "İnce öğütülmüş içi yemeğe karıştır veya inceltilmiş pürüzsüz ezmeyi çok ince sür.",
      "18": "12 ay hazırlığını sürdür; bütün veya iri kuruyemişe otomatik geçiş yapma."
    },
    "aliases": [
      "Ceviz (öğütülmüş)"
    ],
    "sourceUrls": [
      "https://solidstarts.com/foods/walnut/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html",
      "https://www.nhs.uk/baby/weaning-and-feeding/food-allergies-in-babies-and-young-children/"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "ceviz"
    ],
    "imagePath": "assets/serving/core50/walnut.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/walnut/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "İnce öğütülmüş kuruyemiş veya inceltilmiş pürüzsüz ezme.",
          "conditions": "Nemli yemeğe karıştır; iri parça yok."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Aynı formlar sürer; ince sürülebilir.",
          "conditions": "Yoğun ezme topağı yok."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "Kaynak bütün kuruyemişe beceriyle geçişi tartışır.",
          "conditions": "Uygulama 6–18 ayda bu geçişi göstermez."
        }
      ],
      "basis": "text",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "strawberry",
    "name": "Çilek",
    "icon": "🍓",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 1,
    "avoid": "Küçük, sert ve bütün çilek sunma.",
    "slug": "strawberry",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Ezilmiş, yumuşak çilek"
      },
      {
        "title": "+9 ay",
        "caption": "İnce çilek dilimleri"
      },
      {
        "title": "+12 ay",
        "caption": "Boyuna dört ince parça"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak parçalar"
      }
    ],
    "stages": {
      "6": "Sapını çıkar; küçük çileği ez veya pişir. Görsel ezme seçeneğini gösterir.",
      "9": "Olgun çileği ince dilimle; kâğıt inceliğinde olmasın.",
      "12": "Yumuşak çileği boyuna çeyrekle veya dilimleri sürdür.",
      "18": "12+ sunumunu sürdür: olgun, yumuşak parçalar."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/strawberry/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [
      "cilek"
    ],
    "imagePath": "assets/serving/core50/strawberry.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/strawberry/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6–8 ay",
          "preparation": "Çok büyük, yumuşak bütün çilek veya küçük çilekten ezme.",
          "conditions": "Bütün sunulan ağıza tümüyle sığmamalı; sap çıkarılır."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "İnce çilek dilimleri.",
          "conditions": "Kâğıt inceliğindeki dilimler yapışabilir."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Dilimler; hazırsa büyük bütün veya çeyrek çilek.",
          "conditions": "Çok olgun ve yumuşak olmalı."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "Kaynak 6+ çok büyük bütün çileği koşullu gösterir. Küçük yuvarlak meyve riski nedeniyle başlangıçta ezilmiş, ileride kesilmiş biçim korunur.",
      "safetySourceUrl": "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    },
    "coreServing": true
  },
  {
    "id": "black-cumin",
    "name": "Çörek otu",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Çörek otu yağı/kürü ve ayrı kuru tohum kaşığı verme.",
    "slug": "black-cumin",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "İnce öğütülmüş; yemeğe karışmış"
      },
      {
        "title": "+9 ay",
        "caption": "İnce öğütülmüş; yemeğe karışmış"
      },
      {
        "title": "+12 ay",
        "caption": "İnce öğütülmüş; yemeğe karışmış"
      },
      {
        "title": "+18 ay",
        "caption": "İnce öğütülmüş; yemeğe karışmış"
      }
    ],
    "stages": {
      "6": "Az ince öğütülmüş çörek otunu nemli yemeğe iyice karıştır.",
      "9": "6 ay hazırlığını sürdür; kuru tohum kaşığı sunma.",
      "12": "Pişmiş yemeğin içinde az miktarda kullan.",
      "18": "12 ay sunumu sürer; bütün tohumlara geçmek zorunlu değil."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/nigella-black-cumin/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Tek başına tadım öğünü değil; yemeğe çok az aroma olarak.",
    "ingredientIds": [
      "corek-otu"
    ],
    "imagePath": "assets/serving/expanded/black-cumin.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/nigella-black-cumin/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Çörek otunu yemeğe az karıştır; ince öğütülebilir.",
          "conditions": "Ayrı tohum kaşığı değil."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Pişmiş aile yemeğine az çörek otu.",
          "conditions": "Yemeğe iyice karışmış."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "dill",
    "name": "Dereotu",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert sap ve uçucu yağ verme.",
    "slug": "dill",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "İnce kıyılmış; yemek içinde"
      },
      {
        "title": "+9 ay",
        "caption": "İnce kıyılmış; yemek içinde"
      },
      {
        "title": "+12 ay",
        "caption": "İnce kıyılmış; yemek içinde"
      },
      {
        "title": "+18 ay",
        "caption": "İnce kıyılmış; yemek içinde"
      }
    ],
    "stages": {
      "6": "Sert sapı ayır; ince kıyılmış dereotunu yemeğe kat.",
      "9": "6 ay hazırlığını sürdür; yemeğe karışmış küçük yapraklar kullan.",
      "12": "Yemek içinde kıyılmış dereotuna devam et; büyük yapraklar ağıza yapışabilir.",
      "18": "12 ay sunumunu sürdür; çiğneme ve yaprakla baş etme becerisini gözet."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/dill/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Tek başına tadım öğünü değil; yemeğe çok az aroma olarak.",
    "ingredientIds": [
      "dereotu"
    ],
    "imagePath": "assets/serving/expanded/dill.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/dill/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "İnce kıyılmış dereotu veya kuru/toz.",
          "conditions": "Sert sapı çıkar."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Yemek içinde daha büyük yumuşak yapraklar da olabilir.",
          "conditions": "Ağıza yapışma ve öksürük görülebilir."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "tomato",
    "name": "Domates",
    "icon": "🍅",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 1,
    "avoid": "Bütün çeri domates ve enine yuvarlak kesit sunma.",
    "slug": "tomato",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Büyük, olgun domates dilimi"
      },
      {
        "title": "+9 ay",
        "caption": "Çeri domates · boyuna dört"
      },
      {
        "title": "+12 ay",
        "caption": "Boyuna dört parça"
      },
      {
        "title": "+18 ay",
        "caption": "Boyuna dört parça"
      }
    ],
    "stages": {
      "6": "Büyük, olgun ve yumuşak domatesi iri boyuna dilimler halinde sun; küçük çeri bütün verilmez.",
      "9": "Çeri domatesi sapından tabanına boyuna dört parçaya ayır.",
      "12": "9+ sunumunu sürdür: çeri domatesi boyuna dört parçala.",
      "18": "9+ sunumunu sürdür: boyuna dört parça; bütün küçük domates sunma."
    },
    "aliases": [
      "Domates",
      "Çeri domates"
    ],
    "sourceUrls": [
      "https://solidstarts.com/foods/tomato/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [
      "domates"
    ],
    "imagePath": "assets/serving/core50/tomato.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/tomato/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Büyük olgun domates dilimi; pişmiş domates veya sos.",
          "conditions": "Kabuk ayrılırsa uzaklaştır."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Çeri domates boyuna dört parça; büyük olgun dilimler de olur.",
          "conditions": "Kabuk yönetimini izle."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "Bütün çeri için ileri beceri ve doğrudan gözetim tartışılır.",
          "conditions": "Uygulamada bütün çeri kullanılmaz."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "6+ görseli büyük domates; 9+ görselleri çeri domates örneğidir. Küçük domates bütün verilmez.",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "mulberry",
    "name": "Dut",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Olgun ve yumuşak olanı seç; yıkayıp sert sapları çıkar. Yuvarlak şeklini ezerek boz; sert bütün meyve sunma.",
    "slug": "mulberry",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Yumuşak, iyice ezilmiş"
      },
      {
        "title": "+9 ay",
        "caption": "Yassılaştırılmış, yumuşak"
      },
      {
        "title": "+12 ay",
        "caption": "Ezilmiş veya ince kıyılmış"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak, ezilmiş parçalar"
      }
    ],
    "stages": {
      "6": "Yumuşak, iyice ezilmiş. Olgun ve yumuşak olanı seç; yıkayıp sert sapları çıkar. Yuvarlak şeklini ezerek boz; sert bütün meyve sunma.",
      "9": "Yassılaştırılmış, yumuşak. Olgun ve yumuşak olanı seç; yıkayıp sert sapları çıkar. Yuvarlak şeklini ezerek boz; sert bütün meyve sunma.",
      "12": "Ezilmiş veya ince kıyılmış. Olgun ve yumuşak olanı seç; yıkayıp sert sapları çıkar. Yuvarlak şeklini ezerek boz; sert bütün meyve sunma.",
      "18": "Yumuşak, ezilmiş parçalar. Olgun ve yumuşak olanı seç; yıkayıp sert sapları çıkar. Yuvarlak şeklini ezerek boz; sert bütün meyve sunma."
    },
    "aliases": [],
    "sourceUrls": [
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-18",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "Sunum bilgisi hazırlanıyor",
    "introNote": "Bu gıdanın aya göre sunumu henüz doğrulanamadı. Başka bir gıdanın sunumuyla eşleştirilmedi.",
    "ingredientIds": [
      "dut"
    ],
    "imagePath": "assets/serving/expanded/mulberry.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "no-direct-source",
      "checkedAt": "2026-10-19",
      "sourceUrl": "",
      "sourceBands": [],
      "basis": "text",
      "imageStatus": "withhold",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "apple",
    "name": "Elma",
    "icon": "🍎",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 1,
    "avoid": "Sert çiğ küp ve kalın çiğ dilim sunma.",
    "slug": "apple",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş, çekirdeksiz yarım"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş ince dilimler"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş ince dilimler"
      },
      {
        "title": "+18 ay",
        "caption": "Pişmiş ince dilimler"
      }
    ],
    "stages": {
      "6": "Soyulmuş ve çekirdeği çıkarılmış yarım elmayı çatalla kolay ezilene kadar pişir.",
      "9": "Çekirdeksiz, ince yarım daire dilimleri yumuşak pişir.",
      "12": "9+ sunumunu sürdür: yumuşak pişmiş ince dilimler.",
      "18": "Yumuşak pişmiş ince dilimleri sürdür; ay dolması çiğ elmaya geçiş anlamına gelmez."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/apple/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [
      "elma"
    ],
    "imagePath": "assets/serving/core50/apple.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/apple/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Yumuşak pişmiş, soyulmuş ve çekirdeksiz yarım; ezme veya çiğ rende.",
          "conditions": "Çatalla kolay ezilmeli."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Pişmiş parçalar, çiğ rende veya ince yuvarlak dilim.",
          "conditions": "Kaynak çiğ dilimin katlanıp yapışacak kadar ince olmamasını söyler; uygulama pişmiş seçeneği kullanır."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Hazırsa bütün elma; sap ve çekirdekler çıkarılır.",
          "conditions": "İyi çiğneme, sakin oturma ve yakın gözetim gerekir."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "Hazırsa çiğ çeyrek veya dilim.",
          "conditions": "Doğru lokma alma ve yan dişlerle çiğneme gerekir."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "Sert çiğ elma yerine kaynakta da kabul edilen pişmiş alternatif gösterilir; 18 ay çiğ elmaya otomatik geçiş değildir. Sert çiğ elma yerine kaynakta da kabul edilen pişmiş alternatif gösterilir;18 ay çiğ elmaya otomatik geçiş değildir.",
      "safetySourceUrl": "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    },
    "coreServing": true
  },
  {
    "id": "artichoke",
    "name": "Enginar",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert dış yaprakları ve iç tüyleri sunmayın. Yeterince pişmemiş enginar sert ve kaygan olabilir.",
    "slug": "artichoke",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Saplı, pişmiş büyük kalp"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş küçük kalp parçaları"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş yumuşak parçalar"
      },
      {
        "title": "+18 ay",
        "caption": "Pişmiş yumuşak lokmalar"
      }
    ],
    "stages": {
      "6": "Yaprak ve tüyleri çıkarılmış, tamamen yumuşak enginar kalbini ezin veya saplı büyük parça sunun.",
      "9": "Kıskaç kavraması geliştiyse tüm yaprakları çıkarılmış yumuşak kalbi ince dilimleyin.",
      "12": "Sert yaprak ve tüyleri ayıklayın; yumuşak kalbi lokmalara bölün.",
      "18": "12+ sunumu sürdürün: pişmiş yumuşak kalpten lokmalar."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/artichoke/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "enginar"
    ],
    "imagePath": "assets/serving/reviewed/artichoke.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/artichoke/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Yaprakları ve iç tüyleri alınmış, iyice pişmiş büyük kalp; sapı tutulabilir. Ezme de olur.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Kıskaç kavramasıyla yumuşak kalpten küçük parçalar veya ince dilimler.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Yumuşak iç yapraklar kalabilir; pişmiş kalpten lokmalar.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "Yönerge izleyebiliyorsa yaprak etini sıyırmayı modelleyin.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "plum",
    "name": "Erik",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert/ham meyve ve serbest çekirdek sunmayın.",
    "slug": "plum",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Çekirdeksiz, yumuşak yarım"
      },
      {
        "title": "+9 ay",
        "caption": "Yumuşak, ince dilimler"
      },
      {
        "title": "+12 ay",
        "caption": "Çekirdeksiz küçük lokmalar"
      },
      {
        "title": "+18 ay",
        "caption": "Beceri uygunsa bütün"
      }
    ],
    "stages": {
      "6": "Çok yumuşak erik: çekirdeksiz yarım; ezme de mümkün.",
      "9": "Yumuşak ince dilim; tutamıyorsa yarım biçimini sürdürün.",
      "12": "Çekirdeksiz küçük lokmalar; çatala önceden takılabilir.",
      "18": "Çok yumuşak bütün meyve yalnız uygun çiğneme becerisi ve yakın gözetimle; çekirdek görünürse çıkarın."
    },
    "aliases": [
      "Mor erik"
    ],
    "sourceUrls": [
      "https://solidstarts.com/foods/plum/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "erik"
    ],
    "imagePath": "assets/serving/core50/plum.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/plum/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Çekirdeksiz yarım veya ezme.",
          "conditions": "Çok olgun, hafif basınçla ezilebilir; çekirdeği çıkarın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "İnce dilim.",
          "conditions": "Çok olgun, hafif basınçla ezilebilir; çekirdeği çıkarın."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "İnce dilim veya küçük lokma.",
          "conditions": "Çok olgun, hafif basınçla ezilebilir; çekirdeği çıkarın."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Bütün meyve denenebilir.",
          "conditions": "Olgun ve yumuşak; ısırmayı ve çekirdekten kaçınmayı modelleyin; gerekirse çekirdeği çıkarın."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "beef",
    "name": "Et · Kıyma",
    "icon": "🥩",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 1,
    "avoid": "Sert et küpleri ve kuru kıyma tanelerini tek başına sunma.",
    "slug": "ground-beef",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Nemli ezmeye karışmış et"
      },
      {
        "title": "+9 ay",
        "caption": "Yumuşak köfte parçaları"
      },
      {
        "title": "+12 ay",
        "caption": "Nemli, küçük parçalar"
      },
      {
        "title": "+18 ay",
        "caption": "Çatal ile et lokması"
      }
    ],
    "stages": {
      "6": "Tam pişmiş kıymayı nemli sebze ezmesine karıştır.",
      "9": "Yumuşak tam pişmiş köfteyi küçük parçalara ayır.",
      "12": "9+ sunumunu sürdür: nemli kıymalı yemek veya köfte lokmaları.",
      "18": "Kıymayı yemek içinde veya yumuşak köfte lokmaları olarak sun."
    },
    "aliases": [
      "Kırmızı et",
      "Kıyma"
    ],
    "sourceUrls": [
      "https://solidstarts.com/foods/ground-beef/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [],
    "imagePath": "assets/serving/core50/beef.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/ground-beef/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Tam pişmiş kıyma nemli ezmeye karışır veya büyük yumuşak köfte olur.",
          "conditions": "Kıyma 71°C; kuru taneleri tek başına sunma."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Yumuşak köfteden küçük lokmalar.",
          "conditions": "Gerekirse sosla nemlendir."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Kıyma yemek, sos veya yumuşak köfte biçiminde sürer.",
          "conditions": "Tam pişir."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "Bu karttaki çizim ve açıklamalar kıyma örneğidir; bütün et kesimlerine genellenmez.",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "basil",
    "name": "Fesleğen",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert sapları ayır; bütün yaprak demeti sunma.",
    "slug": "basil",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "İnce kıyılmış; yemek içinde"
      },
      {
        "title": "+9 ay",
        "caption": "İnce kıyılmış; yemek içinde"
      },
      {
        "title": "+12 ay",
        "caption": "İnce kıyılmış; yemek içinde"
      },
      {
        "title": "+18 ay",
        "caption": "İnce kıyılmış; yemek içinde"
      }
    ],
    "stages": {
      "6": "Fesleğen yaprağını çok ince kıyıp yumuşak yemeğe karıştır.",
      "9": "Küçük kıyılmış parçaları yemeğe karıştır; ince yaprak şeritleri de kaynakta anlatılır.",
      "12": "9 ay hazırlığını sürdür; küçük kıyılmış yapraklar kullan.",
      "18": "Kıyılmış yaprakla devam et. Bütün çiğ yaprak ayrı bir 24+ ay ve beceri önerisidir."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/basil/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Tek başına tadım öğünü değil; yemeğe çok az aroma olarak.",
    "ingredientIds": [
      "feslegen"
    ],
    "imagePath": "assets/serving/expanded/basil.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/basil/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "İnce kıyılmış yaprağı yemeğe karıştır.",
          "conditions": "Yumuşak yemeğin içinde."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Küçük kıyılmış yaprak veya ince şerit.",
          "conditions": "Ağız içinde yapışabilir."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "Bütün yaprak ancak ısırıp koparabiliyorsa.",
          "conditions": "Uygulamada 18 aya çekilmiyor."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "hazelnut",
    "name": "Fındık",
    "icon": "",
    "allergens": [
      "Sert kabuklu yemiş",
      "Fındık"
    ],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Bütün/iri kuruyemişleri 5 yaş altında verme; yoğun yapışkan ezme topağı sunma.",
    "slug": "hazelnut",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "İnce öğütülmüş; nemli yemeğe karışmış"
      },
      {
        "title": "+9 ay",
        "caption": "İnce öğütülmüş; nemli yemeğe karışmış"
      },
      {
        "title": "+12 ay",
        "caption": "İnce öğütülmüş; nemli yemeğe karışmış"
      },
      {
        "title": "+18 ay",
        "caption": "İnce öğütülmüş; nemli yemeğe karışmış"
      }
    ],
    "stages": {
      "6": "Kabuksuz fındık içini un inceliğinde öğütüp nemli yemeğe karıştır veya pürüzsüz ezmesini incelt.",
      "9": "6 ay hazırlığını sürdür; iri kırıntı bırakma.",
      "12": "İnce öğütülmüş içi yemeğe karıştır veya inceltilmiş pürüzsüz ezmeyi çok ince sür.",
      "18": "12 ay hazırlığını sürdür; bütün veya iri kuruyemişe otomatik geçiş yapma."
    },
    "aliases": [
      "Fındık (öğütülmüş)"
    ],
    "sourceUrls": [
      "https://solidstarts.com/foods/hazelnut/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html",
      "https://www.nhs.uk/baby/weaning-and-feeding/food-allergies-in-babies-and-young-children/"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "findik"
    ],
    "imagePath": "assets/serving/core50/hazelnut.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/hazelnut/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "İnce öğütülmüş kuruyemiş veya inceltilmiş pürüzsüz ezme.",
          "conditions": "Nemli yemeğe karıştır; iri parça yok."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Aynı formlar sürer; ince sürülebilir.",
          "conditions": "Yoğun ezme topağı yok."
        },
        {
          "minMonths": 36,
          "label": "36+ ay",
          "preparation": "Kaynak bütün kuruyemişe beceriyle geçişi tartışır.",
          "conditions": "Uygulama 6–18 ayda bu geçişi göstermez."
        }
      ],
      "basis": "text",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "grapefruit",
    "name": "Greyfurt",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Zar ve çekirdek bırakmayın; ilaç kullanılıyorsa etkileşimi hekime sorun.",
    "slug": "grapefruit",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Zarsız büyük dilim"
      },
      {
        "title": "+9 ay",
        "caption": "Zarsız küçük lokmalar"
      },
      {
        "title": "+12 ay",
        "caption": "Zarsız küçük lokmalar"
      },
      {
        "title": "+18 ay",
        "caption": "Zarsız küçük lokmalar"
      }
    ],
    "stages": {
      "6": "Kabuğu, zarı ve çekirdeği çıkarılmış büyük greyfurt segmenti.",
      "9": "Zarsız ve çekirdeksiz küçük lokmalar.",
      "12": "Zarsız küçük lokmalar; çatalla alınabilir.",
      "18": "12 ay biçimi sürer: zarsız küçük lokmalar."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/grapefruit/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "greyfurt"
    ],
    "imagePath": "assets/serving/reviewed/grapefruit.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/grapefruit/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Kabuk, zar, çekirdek çıkarılmış büyük segment.",
          "conditions": "Sert zar kalmamalı."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Zarsız ince dilim veya küçük lokma.",
          "conditions": "Çekirdek çıkarılır."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Zarsız küçük lokma, çatalla.",
          "conditions": "Çekirdek çıkarılır."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "Yarımdan kaşıkla çıkarma pratiği.",
          "conditions": "Segmentler gevşetilir; çekirdek alınır."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "dried-apricot",
    "name": "Gün kurusu",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert, bütün kuru meyve otomatik yaş ilerlemesiyle sunulmaz.",
    "slug": "dried-apricot",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Islatılmış, pişmiş ve ezilmiş"
      },
      {
        "title": "+9 ay",
        "caption": "Islatılmış, pişmiş ve ezilmiş"
      },
      {
        "title": "+12 ay",
        "caption": "Islatılmış, pişmiş ve ezilmiş"
      },
      {
        "title": "+18 ay",
        "caption": "Islatılmış, pişmiş ve ezilmiş"
      }
    ],
    "stages": {
      "6": "Ilık suda tamamen yumuşatın; çekirdeği kontrol edin. Püre yapıp yemeğe karıştırın.",
      "9": "Ilık suda tamamen yumuşatın; çekirdeği kontrol edin. Püre yapıp yemeğe karıştırın.",
      "12": "Ilık suda tamamen yumuşatın; çekirdeği kontrol edin. Püre yapıp yemeğe karıştırın.",
      "18": "Ilık suda tamamen yumuşatın; çekirdeği kontrol edin. Püre yapıp yemeğe karıştırın."
    },
    "aliases": [
      "Kuru kayısı"
    ],
    "sourceUrls": [
      "https://solidstarts.com/foods/apricot/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "gun-kurusu"
    ],
    "imagePath": "assets/serving/expanded/dried-apricot.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/apricot/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Yumuşatılıp çok ince kıyılmış veya püre; yemeğe karıştırılır.",
          "conditions": "Ilık suda tamamen yumuşatın; çekirdeği kontrol edin."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Bütün kuru kayısı yalnız ileri beceriyle denenebilir.",
          "conditions": "Isırma, koparma, çiğneme ve yutma yeterli değilse bekleyin."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "carrot",
    "name": "Havuç",
    "icon": "🥕",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 1,
    "avoid": "Sert çiğ yuvarlak havuç ve kalın sert parçalar sunma.",
    "slug": "carrots",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Yumuşak pişmiş şerit"
      },
      {
        "title": "+9 ay",
        "caption": "Küçük, yumuşak parçalar"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş yassı parçalar"
      },
      {
        "title": "+18 ay",
        "caption": "Çatal için yumuşak lokma"
      }
    ],
    "stages": {
      "6": "Havucu iki yetişkin parmağı boyutunda boyuna kes; kolay ezilene kadar pişir.",
      "9": "Yumuşak pişmiş küçük parçalar sun.",
      "12": "9+ sunumunu sürdür: pişmiş yassı parçalar.",
      "18": "Pişmiş yumuşak lokmalarla çatal pratiği yapılabilir."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/carrots/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [
      "havuc"
    ],
    "imagePath": "assets/serving/core50/carrot.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/carrots/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "İki yetişkin parmağı boyutunda yumuşak pişmiş parça veya ezme.",
          "conditions": "Uzunlamasına bölerek yuvarlak şekli gider."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Yumuşak pişmiş lokmalar, uzun parçalar veya çiğ rende.",
          "conditions": "Küçük parçalar için kıskaç kavrama."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Pişmiş parça sürer; bazı çocuklarda boyuna çeyrek çiğ çubuk.",
          "conditions": "Çiğ için gelişmiş çiğneme ve yakın gözetim."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "Pişmiş veya çiğ çubuk; bütün çiğ bebek havucu yalnız beceriyle.",
          "conditions": "Yüksek boğulma riski; uygulamada bütün çiğ sunulmaz."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "Kaynak 18+ çiğ seçeneğini beceriye bağlar. Sert çiğ havuç riski nedeniyle pişmiş yumuşak biçim sürdürülür.",
      "safetySourceUrl": "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    },
    "coreServing": true
  },
  {
    "id": "turkey",
    "name": "Hindi eti",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Deri, kemik, kuru sert et küpleri verme. İçi 74°C olmalı.",
    "slug": "turkey",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Uzun, yassı ve nemli şerit"
      },
      {
        "title": "+9 ay",
        "caption": "Küçük, nemli et lifleri"
      },
      {
        "title": "+12 ay",
        "caption": "Yumuşak, lokmalık parçalar"
      },
      {
        "title": "+18 ay",
        "caption": "Nemli parçalar; çatal denemesi"
      }
    ],
    "stages": {
      "6": "Kemiksiz, derisiz, tam pişmiş hindiyi uzun yassı şerit olarak sun; kıymayı nemli yemeğe de karıştırabilirsin.",
      "9": "Kıskaç tutuşu geliştiğinde nemli ince lifler veya yumuşak köftenin küçük parçalarını sun.",
      "12": "Nemli, ince didiklenmiş eti lokmalara ayır; elle veya çatalla sun.",
      "18": "12 ay sunumu sürer: küçük nemli parçalar, ince lifler veya yemeğe karışmış kıyma."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/turkey/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "hindi"
    ],
    "imagePath": "assets/serving/reviewed/turkey.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/turkey/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Uzun yassı şerit veya nemli yemeğe karışmış kıyma.",
          "conditions": "Deri ve kemik çıkarılmış; içi 74°C."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "İnce lifler veya küçük yumuşak köfte parçaları.",
          "conditions": "Kıskaç tutuşu gelişiyorsa."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Nemli, lokmalık parçalar veya didiklenmiş et.",
          "conditions": "Sert küp değil."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "spinach",
    "name": "Ispanak",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Yaprak parçaları damağa yapışabilir; küçük bebekte yumuşak gıdaya karıştırın.",
    "slug": "spinach",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş, ince kıyılmış"
      },
      {
        "title": "+9 ay",
        "caption": "Küçük yaprak parçaları"
      },
      {
        "title": "+12 ay",
        "caption": "Beceriye göre yaprak"
      },
      {
        "title": "+18 ay",
        "caption": "Beceriye göre yaprak"
      }
    ],
    "stages": {
      "6": "İyice pişmiş, ince kıyılmış ıspanağı yumuşak bir gıdaya karıştırın.",
      "9": "Küçük doğranmış pişmiş veya çiğ yapraklar sunun; yumuşak gıdaya karıştırılabilir.",
      "12": "Pişmiş veya çiğ yaprağı çocuğun çiğneme becerisine göre sunun.",
      "18": "12+ sunumunu sürdürün: pişmiş veya çiğ yaprak; gerekirse doğrayın."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/spinach/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "ispanak"
    ],
    "imagePath": "assets/serving/core50/spinach.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/spinach/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Pişmiş ince kıyımı yumuşak gıdaya katın.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "İnce doğranmış pişmiş/çiğ yaprak; yemeğe karıştırılabilir.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Pişmiş veya çiğ, beceriye göre.",
          "conditions": "Beceriye göre uyarlayın."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "fig",
    "name": "İncir",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert incir, odunsu sap ve zor çiğnenen kuru inciri sunmayın.",
    "slug": "fig",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Sapsız, yumuşak yarım"
      },
      {
        "title": "+9 ay",
        "caption": "Boyuna dörde bölünmüş"
      },
      {
        "title": "+12 ay",
        "caption": "Boyuna dörde bölünmüş"
      },
      {
        "title": "+18 ay",
        "caption": "Boyuna dörde bölünmüş"
      }
    ],
    "stages": {
      "6": "Sapı çıkarılmış, çok yumuşak inciri boyuna ikiye bölün.",
      "9": "Yumuşak inciri sapı alındıktan sonra boyuna dörde bölün.",
      "12": "9 ay sunumunu sürdürün: boyuna dörtte bir parçalar.",
      "18": "Yumuşak dörtte birler sürer. Kaynak fotoğrafı bütünü 24+ gösterdiği için burada bütüne geçilmez."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/fig/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "incir"
    ],
    "imagePath": "assets/serving/reviewed/fig.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/fig/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Sapı alınmış yumuşak yarım veya ezme.",
          "conditions": "Olgun ve kolay ezilebilir."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Boyuna dörde bölünmüş veya büyük yarım.",
          "conditions": "Sap çıkarılır."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Yarım/dörtte bir; bütün yalnız gelişmiş beceriyle.",
          "conditions": "Fotoğraf bütün için 24+ diyor; 18 ay görselinde dörde bölme korunur."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "milk-single",
    "name": "İnek sütü",
    "icon": "🥛",
    "allergens": [
      "Süt"
    ],
    "min": 6,
    "start": "Yemekte 6+ · içecek 12+",
    "source": 0,
    "avoid": "12 aydan önce içecek olarak inek sütü verme; çiğ süt kullanma.",
    "slug": "milk",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Yemekte malzeme"
      },
      {
        "title": "+9 ay",
        "caption": "Yemekte malzeme"
      },
      {
        "title": "+12 ay",
        "caption": "Bardakta süt"
      },
      {
        "title": "+18 ay",
        "caption": "Bardakta süt"
      }
    ],
    "stages": {
      "6": "Pastörize süt yalnız yemeğin malzemesi olarak; içecek yerine kullanılmaz.",
      "9": "6+ sunumu sürer: uygun yemekte malzeme.",
      "12": "12 ay dolduysa pastörize süt açık bardakta sunulabilir.",
      "18": "12+ sunumunu sürdür; süt içmesi zorunlu değildir."
    },
    "aliases": [
      "Süt",
      "İnek sütü"
    ],
    "sourceUrls": [
      "https://solidstarts.com/foods/milk/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "dual",
    "ageLabel": "Yemekte 6+ · içecek 12+",
    "introNote": "Pastörize tam yağlı inek sütü yaklaşık 6 aydan itibaren yemek içinde kullanılabilir. Ana süt içeceği olarak ancak 12 ay dolduktan sonra; ilk yıl anne sütü veya uygun formül sürer.",
    "ingredientIds": [
      "sut"
    ],
    "imagePath": "assets/serving/individual/milk-single.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/milk/",
      "sourceBands": [
        {
          "minMonths": 4,
          "label": "4+ yalnız özel hekim planı",
          "preparation": "Süt içeren gıdayla alerjen tanıtımı.",
          "conditions": "İçecek süt değildir; bireysel hekim planı."
        },
        {
          "minMonths": 6,
          "label": "6–10 ay",
          "preparation": "Süt uygun yemeğin malzemesi olabilir.",
          "conditions": "İçecek olarak anne sütü veya formül önceliklidir."
        },
        {
          "minMonths": 11,
          "label": "11 ay",
          "preparation": "Kaynak küçük alıştırma yudumlarını seçenek olarak verir.",
          "conditions": "Uygulamada 12 ay öncesi içecek süt önerilmez."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Pastörize süt açık bardakta içecek olabilir.",
          "conditions": "İçmek zorunlu değildir; diğer gıdaların yerini almamalı."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "Beslenme gereksinimine göre süt seçimi yeniden değerlendirilir.",
          "conditions": "Bireysel gereksinimler esas alınır."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "Kaynakta 11 ay alıştırma yudumları bulunur; uygulama mevcut 12 ay içecek sınırını korur. Kaynakta yaşa özel sunum fotoğrafı yok; yaş eşlemesi yazılı açıklamaya dayanır.",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "semolina",
    "name": "İrmik",
    "icon": "",
    "allergens": [
      "Buğday"
    ],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Buğday içerir. 12 aydan önce bal ekleme; çiğ irmik sunma.",
    "slug": "semolina",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş irmik lapası"
      },
      {
        "title": "+9 ay",
        "caption": "Lapa veya yumuşak lokma"
      },
      {
        "title": "+12 ay",
        "caption": "Kaşığa tutunan lapa"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak, pişmiş sunum"
      }
    ],
    "stages": {
      "6": "Tam pişmiş irmik lapasını elle veya doldurulmuş kaşıkla sun. Bal ekleme.",
      "9": "Lapaya devam et; yumuşak irmikli pankek veya köfteyi küçük parçalara ayırabilirsin.",
      "12": "Kaşığa tutunan yumuşak lapa veya irmikli pişmiş yemekler sun.",
      "18": "12 ay seçenekleri sürer; kıvamı ve lokmayı çiğneme becerisine uyarla."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/semolina/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html",
      "https://www.nhs.uk/baby/weaning-and-feeding/food-allergies-in-babies-and-young-children/"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "irmik"
    ],
    "imagePath": "assets/serving/expanded/semolina.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/semolina/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "İrmik lapası veya büyük yumuşak makarna.",
          "conditions": "Bal eklenmez; süt alerjisi gözetilir."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Lapa veya küçük yumuşak pankek/köfte parçaları.",
          "conditions": "Kıskaç tutuşuna göre."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Lapa, makarna ve pişmiş irmikli yemekler.",
          "conditions": "Kaşığa tutunan kıvam."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "zucchini",
    "name": "Kabak",
    "icon": "🥒",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 1,
    "avoid": "Sert, çiğ büyük parçalar yerine beceriye uygun sunum kullan.",
    "slug": "zucchini",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Yumuşak pişmiş şerit"
      },
      {
        "title": "+9 ay",
        "caption": "Küçük pişmiş parçalar"
      },
      {
        "title": "+12 ay",
        "caption": "Yumuşak pişmiş parçalar"
      },
      {
        "title": "+18 ay",
        "caption": "İnce, pişmiş dilimler"
      }
    ],
    "stages": {
      "6": "Kabağı iki yetişkin parmağı boyutunda boyuna parçala; yumuşak pişir.",
      "9": "Küçük, yumuşak pişmiş parçalar sun.",
      "12": "9+ biçimini sürdür: küçük yumuşak pişmiş parçalar.",
      "18": "İnce yarım daire veya uzun ince şeritleri yumuşak pişirerek sun."
    },
    "aliases": [
      "Yeşil kabak"
    ],
    "sourceUrls": [
      "https://solidstarts.com/foods/zucchini/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [
      "kabak"
    ],
    "imagePath": "assets/serving/core50/zucchini.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/zucchini/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "İki yetişkin parmağı boyutunda yumuşak pişmiş çubuk.",
          "conditions": "Kabuk kalabilir; çiğ ince rende de seçenek."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Pişmiş küçük lokmalar veya büyük çubuk.",
          "conditions": "Kıskaç kavrama gelişimine göre."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Pişmiş parçalar, erişte veya mücver.",
          "conditions": "Diğer malzemeleri ayrı değerlendir."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Pişmiş sunumu sürdür; hazırsa ince çiğ dilim/çubuk.",
          "conditions": "Beceriye göre."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "kale",
    "name": "Kara lahana",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert sapları ve kalın lifli parçaları küçük bebeğe sunmayın.",
    "slug": "kale",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş ince kıyım"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş ince şeritler"
      },
      {
        "title": "+12 ay",
        "caption": "Çiğ, küçük yaprak parçaları"
      },
      {
        "title": "+18 ay",
        "caption": "Çiğ, küçük yaprak parçaları"
      }
    ],
    "stages": {
      "6": "Pişmiş ince kıyılmış karalahanayı yumuşak bir yemeğe karıştırın.",
      "9": "İnce şeritlere kesilmiş pişmiş yaprak sunun; çiğ ince şerit kaynakta alternatif.",
      "12": "Pişmiş veya çiğ doğranmış yaprağı beceriye göre sunun.",
      "18": "12+ sunumu sürdürün: çocuğun becerisine göre doğranmış çiğ veya pişmiş yaprak."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/kale/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "kara-lahana"
    ],
    "imagePath": "assets/serving/reviewed/kale.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/kale/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Pişmiş ince kıyım yemeğe karıştırılmış.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "İnce çiğ veya pişmiş şeritler.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Doğranmış pişmiş veya çiğ yaprak.",
          "conditions": "Beceriye göre uyarlayın."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "clove",
    "name": "Karanfil",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Bütün karanfil ve karanfil yağı verme; diş çıkarma amacıyla da yağ kullanma.",
    "slug": "clove",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Çok az; yemek içinde"
      },
      {
        "title": "+9 ay",
        "caption": "Çok az; yemek içinde"
      },
      {
        "title": "+12 ay",
        "caption": "Çok az; yemek içinde"
      },
      {
        "title": "+18 ay",
        "caption": "Çok az; yemek içinde"
      }
    ],
    "stages": {
      "6": "Çok az toz karanfili nemli yemeğe karıştır.",
      "9": "6 ay sunumunu sürdür; çok az, yemek içinde kullan.",
      "12": "Pişmiş yemek veya hamur işine aroma için az kullan.",
      "18": "12 ay sunumu sürer; bütün karanfil serviste kalmamalı."
    },
    "aliases": [
      "Toz karanfil"
    ],
    "sourceUrls": [
      "https://solidstarts.com/foods/cloves/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Tek başına tadım öğünü değil; yemeğe çok az aroma olarak.",
    "ingredientIds": [
      "karanfil"
    ],
    "imagePath": "assets/serving/expanded/clove.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/cloves/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Çok az öğütülmüş karanfili yemeğe ekle.",
          "conditions": "Bütün karanfili servisten çıkar."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Yemek ve hamura baharat.",
          "conditions": "Bütün karanfil kalmasın."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "cauliflower",
    "name": "Karnabahar",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert, yuvarlak sap kesitleri sunmayın. Çiğ sunum için sabit güvenli ay yoktur.",
    "slug": "cauliflower",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Büyük pişmiş çiçek"
      },
      {
        "title": "+9 ay",
        "caption": "Küçük pişmiş çiçekler"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş çiçek ve çatal"
      },
      {
        "title": "+18 ay",
        "caption": "Pişmiş çiçekler"
      }
    ],
    "stages": {
      "6": "Yaklaşık üç yetişkin parmağı genişliğinde büyük çiçeği yumuşayana dek pişirin.",
      "9": "Kıskaç kavraması geliştiyse küçük pişmiş çiçekler sunun.",
      "12": "Yumuşak çiçekleri elle veya önceden doldurulmuş çatalla sunun.",
      "18": "Pişmiş çiçekleri sürdürün; sertliği yalnız çiğneme becerisine göre ayarlayın."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/cauliflower/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "karnabahar"
    ],
    "imagePath": "assets/serving/core50/cauliflower.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/cauliflower/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Büyük pişmiş çiçek veya ezme.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Küçük pişmiş çiçekler; iri çiçekler de olabilir.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Pişmiş çiçekler; çatal denemesi.",
          "conditions": "Beceriye göre uyarlayın."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "watermelon",
    "name": "Karpuz",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Çekirdek bırakmayın; sert kabuk parçası koparılmasını izleyin.",
    "slug": "watermelon",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Çekirdeksiz, yassı şerit"
      },
      {
        "title": "+9 ay",
        "caption": "Çekirdeksiz küçük lokmalar"
      },
      {
        "title": "+12 ay",
        "caption": "Çekirdeksiz küçük lokmalar"
      },
      {
        "title": "+18 ay",
        "caption": "Kabuklu üçgen, yakın gözetim"
      }
    ],
    "stages": {
      "6": "Çekirdeksiz, kabuksuz; iki yetişkin parmağı genişliğinde yassı dikdörtgen şerit.",
      "9": "Çekirdeksiz küçük lokmalar veya uzun yassı şeritler.",
      "12": "9 ay biçimi sürer: çekirdeksiz küçük lokmalar.",
      "18": "15+ kaynak bandına göre kabuklu üçgen; kabuk parçası koparabiliyorsa kabuğu çıkarın."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/watermelon/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "karpuz"
    ],
    "imagePath": "assets/serving/core50/watermelon.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/watermelon/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Çekirdeksiz, kabuksuz dikdörtgen şerit; kabuk dişleyici alternatif.",
          "conditions": "İki yetişkin parmağı genişliği; dağılmayacak kalınlık."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Şerit veya küçük lokma.",
          "conditions": "Çekirdekler çıkarılır."
        },
        {
          "minMonths": 15,
          "label": "15+ ay",
          "preparation": "Küçük lokma veya kabuklu üçgen.",
          "conditions": "Kabuk koparabiliyorsa çıkarın."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "melon",
    "name": "Kavun",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Kavun topları, iri sert küpler ve çekirdek sunmayın.",
    "slug": "melon",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Kabuksuz, uzun yassı hilal"
      },
      {
        "title": "+9 ay",
        "caption": "Kabuksuz, uzun yassı şerit"
      },
      {
        "title": "+12 ay",
        "caption": "Kabuksuz, uzun yassı şerit"
      },
      {
        "title": "+18 ay",
        "caption": "Beceri uygunsa kabuklu dilim"
      }
    ],
    "stages": {
      "6": "Olgun kavunu kabuksuz ve çekirdeksiz uzun, yassı hilal şeklinde kesin.",
      "9": "İki yetişkin parmağı boyutunda uzun, yassı dikdörtgenler.",
      "12": "9 ay biçimi sürer: uzun yassı dikdörtgenler; top veya iri küp yok.",
      "18": "İyi çiğneyip yönerge izleyebiliyorsa kabuğu yıkanmış büyük dilim; aksi halde yassı şeritler."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/cantaloupe/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "kavun"
    ],
    "imagePath": "assets/serving/core50/melon.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/cantaloupe/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Uzun yassı hilal veya dikdörtgen.",
          "conditions": "Olgun; kabuk ve çekirdek çıkarılır."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "İki parmak boyutunda uzun yassı dikdörtgen.",
          "conditions": "Top ve iri küplerden kaçının."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Uzun yassı parça; beceri uygunsa kabuklu büyük dilim.",
          "conditions": "İyi çiğneme ve yönerge izleme; kabuğu yıkayın."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "İri parçalar yalnız yeterli çiğnemeyle.",
          "conditions": "Riskli biçime yaş dolunca otomatik geçilmez."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "apricot",
    "name": "Kayısı",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert kayısı ve çekirdeğini sunmayın; bütün kuru kayısı varsayılan değildir.",
    "slug": "apricot",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Çekirdeksiz, yumuşak yarım"
      },
      {
        "title": "+9 ay",
        "caption": "Yumuşak ince dilimler"
      },
      {
        "title": "+12 ay",
        "caption": "Çekirdeksiz küçük lokmalar"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak ince dilimler"
      }
    ],
    "stages": {
      "6": "Olgun, çok yumuşak, çekirdeği çıkarılmış yarım kayısı.",
      "9": "Yumuşak ince dilimler veya küçük lokmalar.",
      "12": "Çekirdeksiz küçük lokmalar; çatalla denenebilir.",
      "18": "Yumuşak yarımlar, ince dilimler veya küçük lokmalar sürer."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/apricot/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "kayisi"
    ],
    "imagePath": "assets/serving/core50/apricot.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/apricot/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Olgun, çekirdeksiz yarım.",
          "conditions": "Çok olgun, hafif basınçla ezilebilir; çekirdeği çıkarın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "İnce dilim veya yumuşak küçük parça.",
          "conditions": "Çok olgun, hafif basınçla ezilebilir; çekirdeği çıkarın."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Yarım, ince dilim veya küçük lokma.",
          "conditions": "Çok olgun, hafif basınçla ezilebilir; çekirdeği çıkarın."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Taze meyvede aynı biçimler.",
          "conditions": "Kuru bütün kayısı ancak ileri ısırma/çiğneme becerisiyle."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "Bütün taze kayısı düşünülebilir.",
          "conditions": "Çekirdekten kaçınmayı modelleyin."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "kefir",
    "name": "Kefir",
    "icon": "",
    "allergens": [
      "Süt"
    ],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "12 ay öncesi içecek olarak sunma. Pastörize, sade seç; bal ve ek şeker içermesin.",
    "slug": "kefir",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Koyu dip; içecek değil"
      },
      {
        "title": "+9 ay",
        "caption": "Yemeğe karışmış kefir"
      },
      {
        "title": "+12 ay",
        "caption": "Açık bardakta da sunulabilir"
      },
      {
        "title": "+18 ay",
        "caption": "Yemekle veya açık bardakta"
      }
    ],
    "stages": {
      "6": "Sade, pastörize tam yağlı kefiri koyulaştırılmış dip olarak veya yemeğe karışmış sun; içecek olarak verme.",
      "9": "6–12 ay sunumu sürer: yemeğe karışmış ya da süzülmüş koyu kefir; içecek değil.",
      "12": "Sade pastörize kefir yemeğe eklenebilir veya açık bardakta içecek olarak sunulabilir.",
      "18": "12–24 ay sunumu sürer; diğer süt ürünleriyle toplam tüketimi gözet."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/kefir/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html",
      "https://www.nhs.uk/baby/weaning-and-feeding/food-allergies-in-babies-and-young-children/"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "dual",
    "ageLabel": "Yemekte 6+ · içecek 12+",
    "introNote": "Sade, pastörize kefir ilk yıl koyu kıvamda yemeğe katılabilir. İçecek olarak 12 ay dolduktan sonra sunulur.",
    "ingredientIds": [
      "kefir"
    ],
    "imagePath": "assets/serving/reviewed/kefir.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/kefir/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6–12 ay",
          "preparation": "Süzülmüş koyu kefir, dip veya yemeğe karışmış kefir.",
          "conditions": "Tam yağlı, sade, pastörize; içecek değil."
        },
        {
          "minMonths": 12,
          "label": "12–24 ay",
          "preparation": "Yemeğin içinde veya açık bardakta.",
          "conditions": "12–24 ay; süt alerjisi gözetilir."
        }
      ],
      "basis": "text",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "thyme",
    "name": "Kekik",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Odunsu sap, uçucu yağ veya bitkisel kür verme.",
    "slug": "thyme",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Yemeğe karışmış; sapsız"
      },
      {
        "title": "+9 ay",
        "caption": "Yemeğe karışmış; sapsız"
      },
      {
        "title": "+12 ay",
        "caption": "Yemeğe karışmış; sapsız"
      },
      {
        "title": "+18 ay",
        "caption": "Yemeğe karışmış; sapsız"
      }
    ],
    "stages": {
      "6": "Odunsu sapı ayır; yaprağı ince kıyıp yemeğe az ekle.",
      "9": "6 ay hazırlığını sürdür; taze, kuru veya toz kekik yemeğe karışmış olsun.",
      "12": "Yemek içinde yaprak kullanılabilir; odunsu dalı servisten çıkar.",
      "18": "12 ay sunumu sürer; odunsu dal bırakma."
    },
    "aliases": [
      "Toz kekik"
    ],
    "sourceUrls": [
      "https://solidstarts.com/foods/thyme/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Tek başına tadım öğünü değil; yemeğe çok az aroma olarak.",
    "ingredientIds": [
      "kekik"
    ],
    "imagePath": "assets/serving/expanded/thyme.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/thyme/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Taze yaprağı ince kıy veya kuru/toz kekik kullan.",
          "conditions": "Odunsu sapı ayır."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Yemek içinde taze, kuru veya toz.",
          "conditions": "Odunsu dalı servisten çıkar."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "celery",
    "name": "Kereviz",
    "icon": "",
    "allergens": [
      "Kereviz"
    ],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Bu kayıt kök kereviz içindir. Sert çiğ kök parçaları sunmayın.",
    "slug": "celery",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Yumuşak pişmiş iri dilim"
      },
      {
        "title": "+9 ay",
        "caption": "Küçük pişmiş parçalar"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş parçalar ve çatal"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak pişmiş parçalar"
      }
    ],
    "stages": {
      "6": "Kök kerevizi soyun; iyice pişmiş yumuşak iri dilim veya ezme sunun.",
      "9": "Soyulmuş, iki parmak arasında ezilen küçük pişmiş parçalar sunun.",
      "12": "9+ sunumu sürdürün: yumuşak pişmiş lokmalar; çatal denenebilir.",
      "18": "Yumuşak pişmiş lokmalar veya iri dilimler sunun."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/celeriac-celery-root/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html",
      "https://www.nhs.uk/baby/weaning-and-feeding/food-allergies-in-babies-and-young-children/"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "kereviz"
    ],
    "imagePath": "assets/serving/reviewed/celery.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/celeriac-celery-root/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Soyulmuş yumuşak iri dilim veya ezme.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Yumuşak lokmalar; alternatif rende veya kâğıt inceliğinde dilim.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Pişmiş parçalar; çiğ ince şerit yalnız beceri uygunsa.",
          "conditions": "Beceriye göre uyarlayın."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "chestnut",
    "name": "Kestane",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Bütün sert kestane, şekerleme ve koyu yapışkan püre sunmayın.",
    "slug": "chestnut",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş, inceltilmiş püre"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş, inceltilmiş püre"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş, ufalanır ince dilim"
      },
      {
        "title": "+18 ay",
        "caption": "Pişmiş, ufalanır ince dilim"
      }
    ],
    "stages": {
      "6": "Pişmiş, kabuksuz kestaneyi ince öğütün; yumuşak yemeğe karıştırın veya akıcı püreye inceltin.",
      "9": "Öğütülmüş kestane veya tamamen yumuşak, kolay ufalanan ince dilim.",
      "12": "Pişmiş, soyulmuş kestane ince dilimler; hafif basınçla ufalanmalı.",
      "18": "12 ay biçimi sürer: yumuşak, kolay ufalanan ince dilimler."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/chestnut/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "kestane"
    ],
    "imagePath": "assets/serving/reviewed/chestnut.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/chestnut/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Pişmiş soyulmuş ince öğütülmüş veya inceltilmiş püre.",
          "conditions": "Koyu yapışkan topak kalmamalı."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "İnce öğütülmüş/inceltilmiş; hazır pişmişse ufalanır ince dilim.",
          "conditions": "Basınçla kolay dağılmalı."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Pişmiş, soyulmuş ince dilim veya ufalanmış.",
          "conditions": "Kolay ufalanmıyorsa öğütün."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "Bütün pişmiş kestane yalnız uygun beceriyle.",
          "conditions": "Çiğneme gösterilir ve gözetilir."
        },
        {
          "minMonths": 36,
          "label": "36+ ay",
          "preparation": "Şekerli kestane yalnız olgun beceriyle.",
          "conditions": "Riskli biçimdir."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "flax",
    "name": "Keten tohumu",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Çiğ öğütülmüş keten tohumu verme. Pişirme riski azaltabilir; buradan bebek için güvenli gramaj veya başlangıç ayı çıkarılmaz. Hekimle değerlendir.",
    "slug": "flax",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Çiğ öğütülmüş verme"
      },
      {
        "title": "+9 ay",
        "caption": "Çiğ öğütülmüş verme"
      },
      {
        "title": "+12 ay",
        "caption": "Çiğ öğütülmüş verme"
      },
      {
        "title": "+18 ay",
        "caption": "Çiğ öğütülmüş verme"
      }
    ],
    "stages": {
      "6": "Çiğ öğütülmüş keten tohumu verme. Pişirme riski azaltabilir; buradan bebek için güvenli gramaj veya başlangıç ayı çıkarılmaz. Hekimle değerlendir.",
      "9": "Çiğ öğütülmüş keten tohumu verme. Pişirme riski azaltabilir; buradan bebek için güvenli gramaj veya başlangıç ayı çıkarılmaz. Hekimle değerlendir.",
      "12": "Çiğ öğütülmüş keten tohumu verme. Pişirme riski azaltabilir; buradan bebek için güvenli gramaj veya başlangıç ayı çıkarılmaz. Hekimle değerlendir.",
      "18": "Çiğ öğütülmüş keten tohumu verme. Pişirme riski azaltabilir; buradan bebek için güvenli gramaj veya başlangıç ayı çıkarılmaz. Hekimle değerlendir."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/flaxseed-linseed/",
      "https://www.bfr.bund.de/en/notification/hydrocyanic-acid-and-cadmium-in-linseeds/"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": true,
    "ageBand": "review",
    "ageLabel": "Önce değerlendir",
    "introNote": "Çiğ öğütülmüş keten tohumu küçük çocuklara önerilmez. Otomatik bebek tariflerine eklenmez.",
    "ingredientIds": [
      "keten-tohumu"
    ],
    "imagePath": "assets/serving/expanded/flax.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/flaxseed-linseed/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Kaynak yemeğe tohum/öğütülmüş keten eklemeyi öneriyor.",
          "conditions": "BfR uyarısıyla uygulamaya doğrudan aktarılmaz."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Kaynak küçük pişmiş parçalar veya yemeğe eklemeyi anlatır.",
          "conditions": "Bireysel değerlendirme sürer."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Kaynak yemeklere eklemeyi anlatır.",
          "conditions": "Uygulama otomatik başlangıç ayı vermez."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "16 Haziran 2026 tarihli BfR önerisi çiğ öğütülmüş keteni küçük çocuklar için dışlar. Solid Starts başlangıç ayı uygulama uygunluğu sayılmaz.",
      "safetySourceUrl": "https://www.bfr.bund.de/en/notification/hydrocyanic-acid-and-cadmium-in-linseeds/"
    }
  },
  {
    "id": "beet",
    "name": "Kırmızı pancar",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert çiğ pancar parçalarını sunmayın.",
    "slug": "beet",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Büyük, pişmiş yarım"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş ince düz dilimler"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş lokmalar ve çatal"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak pişmiş lokmalar"
      }
    ],
    "stages": {
      "6": "Pancarı tamamen yumuşatıp soyun; ağızdan büyük yarım sunun, küçükse ezin.",
      "9": "Soyulmuş, yumuşak düz dilimler veya ince lokmalar sunun.",
      "12": "Yumuşak pişmiş lokmalar; çatal kullanmayı modelleyin.",
      "18": "12+ sunumunu sürdürün: yumuşak pişmiş lokmalar."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/beet-beetroot/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "pancar",
      "kirmizi-pancar"
    ],
    "imagePath": "assets/serving/reviewed/beet.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/beet-beetroot/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Soyulmuş çok yumuşak büyük yarım; küçükse ezme.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Yumuşak düz ince dilim veya ince lokmalar.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Yumuşak yarım veya lokmalar; çatal denemesi.",
          "conditions": "Beceriye göre uyarlayın."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "cornelian-cherry",
    "name": "Kızılcık",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert çekirdeği çıkar; suyla yumuşayana kadar pişir. Çatalla kolay ezilmeyen çiğ parça sunma. Ekşi, sert meyveyi çekirdeksiz ve pişmiş posa olarak kullan. Çekirdeğini tamamen ayır; şekerli şurup/şerbet hazırlama.",
    "slug": "cornelian-cherry",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş, çekirdeksiz ezme"
      },
      {
        "title": "+9 ay",
        "caption": "Yumuşak pişmiş ezme"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş, yumuşak parçalar"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak, çekirdeksiz"
      }
    ],
    "stages": {
      "6": "Pişmiş, çekirdeksiz ezme. Sert çekirdeği çıkar; suyla yumuşayana kadar pişir. Çatalla kolay ezilmeyen çiğ parça sunma. Ekşi, sert meyveyi çekirdeksiz ve pişmiş posa olarak kullan. Çekirdeğini tamamen ayır; şekerli şurup/şerbet hazırlama.",
      "9": "Yumuşak pişmiş ezme. Sert çekirdeği çıkar; suyla yumuşayana kadar pişir. Çatalla kolay ezilmeyen çiğ parça sunma. Ekşi, sert meyveyi çekirdeksiz ve pişmiş posa olarak kullan. Çekirdeğini tamamen ayır; şekerli şurup/şerbet hazırlama.",
      "12": "Pişmiş, yumuşak parçalar. Sert çekirdeği çıkar; suyla yumuşayana kadar pişir. Çatalla kolay ezilmeyen çiğ parça sunma. Ekşi, sert meyveyi çekirdeksiz ve pişmiş posa olarak kullan. Çekirdeğini tamamen ayır; şekerli şurup/şerbet hazırlama.",
      "18": "Yumuşak, çekirdeksiz. Sert çekirdeği çıkar; suyla yumuşayana kadar pişir. Çatalla kolay ezilmeyen çiğ parça sunma. Ekşi, sert meyveyi çekirdeksiz ve pişmiş posa olarak kullan. Çekirdeğini tamamen ayır; şekerli şurup/şerbet hazırlama."
    },
    "aliases": [],
    "sourceUrls": [
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-18",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "Sunum bilgisi hazırlanıyor",
    "introNote": "Bu gıdanın aya göre sunumu henüz doğrulanamadı. Başka bir gıdanın sunumuyla eşleştirilmedi.",
    "ingredientIds": [
      "kizilcik"
    ],
    "imagePath": "assets/serving/expanded/cornelian-cherry.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "no-direct-source",
      "checkedAt": "2026-10-19",
      "sourceUrl": "",
      "sourceBands": [],
      "basis": "text",
      "imageStatus": "withhold",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "cumin",
    "name": "Kimyon",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Kimyon yağı, takviye veya kuru baharat kaşığı verme.",
    "slug": "cumin",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Yemeğe az miktarda"
      },
      {
        "title": "+9 ay",
        "caption": "Yemeğe az miktarda"
      },
      {
        "title": "+12 ay",
        "caption": "Yemeğe az miktarda"
      },
      {
        "title": "+18 ay",
        "caption": "Yemeğe az miktarda"
      }
    ],
    "stages": {
      "6": "Çok az toz kimyonu nemli yemeğe karıştır.",
      "9": "6 ay sunumu sürer; nemli yemeğin içinde kullan.",
      "12": "Yemek veya sosu az kimyonla tatlandır.",
      "18": "12 ay sunumu sürer; ayrı bir doku basamağı yok."
    },
    "aliases": [
      "Toz kimyon"
    ],
    "sourceUrls": [
      "https://solidstarts.com/foods/cumin/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Tek başına tadım öğünü değil; yemeğe çok az aroma olarak.",
    "ingredientIds": [
      "kimyon"
    ],
    "imagePath": "assets/serving/expanded/cumin.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/cumin/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Az öğütülmüş kimyonu yemeğe ekle.",
          "conditions": "Kuru kaşık dolusu değil."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Yemek ve soslara baharat.",
          "conditions": "Yemeğe karışmış."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "cherry",
    "name": "Kiraz",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Bütün yuvarlak kiraz, sap ve çekirdek sunmayın.",
    "slug": "cherry",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Çekirdeksiz, çok ince kıyılmış"
      },
      {
        "title": "+9 ay",
        "caption": "Çekirdeksiz, dörde bölünmüş"
      },
      {
        "title": "+12 ay",
        "caption": "Çekirdeksiz, yassılaştırılmış"
      },
      {
        "title": "+18 ay",
        "caption": "Çekirdeksiz, yassılaştırılmış"
      }
    ],
    "stages": {
      "6": "Sapı ve çekirdeği çıkarılmış kirazı çok ince kıyın; yumuşak gıdaya karıştırılabilir.",
      "9": "Çekirdeksiz kirazı boyuna dörde bölün.",
      "12": "Çekirdeksiz kirazı tamamen yassılaştırın; gerekirse dörde bölmeye devam edin.",
      "18": "12 ay biçimi sürer: çekirdeksiz yassı kiraz."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/cherry/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "kiraz"
    ],
    "imagePath": "assets/serving/reviewed/cherry.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/cherry/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Çekirdeksiz, çok ince kıyılmış veya iyice pişmiş.",
          "conditions": "Sap çıkarılır."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Çekirdeksiz dörde bölünmüş.",
          "conditions": "Kıskaç kavrama gelişimine göre."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Çekirdeksiz yassı disk.",
          "conditions": "Gerekirse diskleri yarıya kesin veya dörtte bir sürdürün."
        },
        {
          "minMonths": 36,
          "label": "36+ ay",
          "preparation": "Bütün meyve yalnız beceri değerlendirmesiyle.",
          "conditions": "Otomatik güvenli yaş değildir."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "kiwi",
    "name": "Kivi",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert/ham kivi ve ağza doldurulan büyük lokmalardan kaçının.",
    "slug": "kiwi",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Çok yumuşak, bütün veya yarım"
      },
      {
        "title": "+9 ay",
        "caption": "Yumuşak ince dilimler"
      },
      {
        "title": "+12 ay",
        "caption": "Yumuşak küçük lokmalar"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak küçük lokmalar"
      }
    ],
    "stages": {
      "6": "Çok olgun, kolay ezilen büyük kivi; tutma için kabuğun yarısı kalabilir. Yarım veya ezme de mümkündür.",
      "9": "Yumuşak ince yuvarlak dilimler veya küçük lokmalar.",
      "12": "Yumuşak küçük lokmalar; çatalla alınabilir.",
      "18": "12 ay biçimi sürer: yumuşak küçük lokmalar."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/kiwi/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "kivi"
    ],
    "imagePath": "assets/serving/core50/kiwi.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/kiwi/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Olgun bütün veya yarım, ezme alternatifi.",
          "conditions": "Çok yumuşak; ağzına bütün yarımı doldurmamalı."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "İnce dilim veya çok yumuşak lokma.",
          "conditions": "Kıskaç kavrama gelişimine göre."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Küçük lokma; çatalla.",
          "conditions": "Olgun ve kolay ezilen."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "dried-plum",
    "name": "Kuru erik",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert veya çekirdekli kuru erik sunmayın.",
    "slug": "dried-plum",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Islatılmış, pişmiş ve ezilmiş"
      },
      {
        "title": "+9 ay",
        "caption": "Islatılmış, pişmiş ve ezilmiş"
      },
      {
        "title": "+12 ay",
        "caption": "Islatılmış, pişmiş ve ezilmiş"
      },
      {
        "title": "+18 ay",
        "caption": "Islatılmış, pişmiş ve ezilmiş"
      }
    ],
    "stages": {
      "6": "Çekirdeği çıkarın; sıcak suda 10–15 dakika, tamamen yumuşayıncaya dek bekletip ezin.",
      "9": "6 ay biçimi sürer: tamamen yumuşamış ve ince kıyılmış/ezilmiş.",
      "12": "Çok ince kıyın; yumuşatmak hâlâ daha düşük riskli alternatiftir.",
      "18": "İyi çiğneyemiyorsa yumuşatılmış biçimi sürdürün; bütün kuru meyve zorunlu değildir."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/prune/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "kuru-erik"
    ],
    "imagePath": "assets/serving/expanded/dried-plum.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/prune/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Sıcak suda yumuşatılmış, kıyılmış/ezilmiş meyve.",
          "conditions": "Çekirdek çıkarılır; küçük miktardan başlanır."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Çok ince kıyılmış kuru veya yumuşatılmış meyve.",
          "conditions": "Yumuşatmak riski azaltır."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Bütün kuru erik yalnız ileri beceriyle.",
          "conditions": "Azı dişleri ve yeterli ısırma/çiğneme; yetişkin model olur."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "nuts-single",
    "name": "Kuruyemiş ezmesi",
    "icon": "🥜",
    "allergens": [
      "Sert kabuklu yemiş"
    ],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 2,
    "avoid": "Bütün kuruyemiş, iri parça ve kalın yapışkan ezme sunma.",
    "slug": "hazelnut",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "İnceltilmiş pürüzsüz ezme"
      },
      {
        "title": "+9 ay",
        "caption": "İyice öğütülmüş, nemli"
      },
      {
        "title": "+12 ay",
        "caption": "İnce sürülmüş ezme"
      },
      {
        "title": "+18 ay",
        "caption": "İnce sürülmüş ezme"
      }
    ],
    "stages": {
      "6": "Badem ezmesi örneği: balsız pürüzsüz ezmeyi suyla akışkanlaştır.",
      "9": "6+ badem ezmesi sunumu sürer; nemli yemeğe karıştır.",
      "12": "Badem ezmesi örneği: çok ince tabaka halinde sür.",
      "18": "12+ pürüzsüz ezme sunumunu sürdür."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/almond-butter/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [],
    "imagePath": "assets/serving/individual/nuts-single.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/almond-butter/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ badem ezmesi örneği",
          "preparation": "Pürüzsüz ezmeyi akışkan inceltip nemli yemeğe karıştır veya ince sür.",
          "conditions": "Bal içermemeli."
        },
        {
          "minMonths": 12,
          "label": "12+ badem ezmesi örneği",
          "preparation": "Pürüzsüz ezmeyi yemeğe karıştır veya ince sür.",
          "conditions": "Kalın topak sunma."
        },
        {
          "minMonths": 18,
          "label": "18+ badem ezmesi örneği",
          "preparation": "Pürüzsüz ezme sürer; kaynak parçalı ezmeyi de içerir.",
          "conditions": "Uygulamada pürüzsüz seçildi."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "Genel kuruyemişte sert parçaları önlemek için pürüzsüz, inceltilmiş veya ince sürülmüş badem ezmesi örneği korunur. Bu örnek badem ezmesidir; tüm kuruyemişlere otomatik genellenmez. Genel kuruyemişte sert parçaları önlemek için pürüzsüz, inceltilmiş veya ince sürülmüş badem ezmesi örneği korunur.",
      "safetySourceUrl": "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    }
  },
  {
    "id": "asparagus",
    "name": "Kuşkonmaz",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Küçük yuvarlak sap kesitlerini sunmayın; odunsu ve lifli sert parçaları ayıklayın.",
    "slug": "asparagus",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Bütün, yumuşak pişmiş"
      },
      {
        "title": "+9 ay",
        "caption": "Boyuna kes, sonra doğra"
      },
      {
        "title": "+12 ay",
        "caption": "Boyuna kesilmiş parçalar"
      },
      {
        "title": "+18 ay",
        "caption": "Pişmiş uzun parçalar"
      }
    ],
    "stages": {
      "6": "Çatalla kolay delinen bütün pişmiş kuşkonmaz sunun.",
      "9": "Önce boyuna kesin; sonra küçük yumuşak parçalara bölün.",
      "12": "9+ sunumu sürdürün: boyuna kesilmiş küçük pişmiş parçalar.",
      "18": "Pişmiş uzun parçalar veya bütün sap sunun; çiğneme becerisine göre uyarlayın."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/asparagus/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "kuskonmaz"
    ],
    "imagePath": "assets/serving/reviewed/asparagus.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/asparagus/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Bütün, yumuşak pişmiş sap.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Boyuna kesildikten sonra doğranmış yumuşak parçalar.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Bütün pişmiş sap veya doğranmış parçalar; çiğ sunum beceriye bağlı.",
          "conditions": "Beceriye göre uyarlayın."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "lamb",
    "name": "Kuzu eti",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Kuru kıyma, sert küp ve iri sert et parçaları verme. Kıyma köftesi içi 71°C olmalı.",
    "slug": "lamb",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Büyük, çok yumuşak köfte"
      },
      {
        "title": "+9 ay",
        "caption": "Küçük, nemli et lifleri"
      },
      {
        "title": "+12 ay",
        "caption": "Soslu lifler; çatal denemesi"
      },
      {
        "title": "+18 ay",
        "caption": "Didiklenmiş, yumuşak et"
      }
    ],
    "stages": {
      "6": "Tam pişmiş kıymayı yumuşak yemeğe karıştır veya en az 5 cm çapında, parmakla kolay ezilen yumuşak köfte sun.",
      "9": "Nemli küçük et liflerini ya da yumuşak köfte parçalarını kıskaç tutuşuna göre sun.",
      "12": "Küçük, yumuşak et liflerini sosla nemlendir; çatal denemesi yapılabilir.",
      "18": "Didiklenmiş veya kıyılmış et ve yumuşak köfteyi sürdür; iri şeritler beceriye göre denenebilir."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/lamb/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "kuzu"
    ],
    "imagePath": "assets/serving/core50/lamb.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/lamb/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Yemeğe karışmış kıyma, büyük yumuşak köfte veya iri şerit.",
          "conditions": "Kıyma köftesi en az 5 cm, içi 71°C."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Küçük nemli lifler; parçalanmış yumuşak köfte.",
          "conditions": "Kıskaç tutuşuna göre."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Sosla nemli lifler veya küçük köfte parçaları.",
          "conditions": "Sert küplerden kaçın."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Kıyma, köfte, lifler; beceriyle büyük şerit.",
          "conditions": "Çiğneme becerisine göre."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "lemon",
    "name": "Limon",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Çekirdekleri ayıklayın; çok asitli tadı zorlamayın.",
    "slug": "lemon",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Yemeğe birkaç damla"
      },
      {
        "title": "+9 ay",
        "caption": "Yemeğe birkaç damla"
      },
      {
        "title": "+12 ay",
        "caption": "Yemeğe birkaç damla"
      },
      {
        "title": "+18 ay",
        "caption": "Yemeğe birkaç damla"
      }
    ],
    "stages": {
      "6": "Yaşa uygun yemeğe az limon suyu veya ince kabuk rendesi eklenebilir.",
      "9": "6 ay biçimi sürer: yemeği tatlandırmak için az limon.",
      "12": "Yemeğe limon; çekirdeksiz büyük dilimi sıkmayı da deneyebilir.",
      "18": "12 ay biçimi sürer: yemeğe az limon veya sıkma pratiği."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/lemon/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "limon"
    ],
    "imagePath": "assets/serving/expanded/lemon.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/lemon/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Suyu veya kabuk rendesi yemeğe.",
          "conditions": "Büyük çekirdeksiz yarım tadım alternatifi."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Yemeğe sıkma pratiği.",
          "conditions": "Büyük dilim ve çekirdeksiz."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "pasta",
    "name": "Makarna",
    "icon": "🍝",
    "allergens": [
      "Buğday",
      "Yumurta"
    ],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 0,
    "avoid": "Sert, kuru makarna sunma; yumurta ve buğday içeriğini kontrol et.",
    "slug": "pasta",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "İri, yumuşak makarna"
      },
      {
        "title": "+9 ay",
        "caption": "Küçük makarna parçaları"
      },
      {
        "title": "+12 ay",
        "caption": "Çatal ile deneme"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak kısa lokmalar"
      }
    ],
    "stages": {
      "6": "Yumuşak pişmiş iri boru makarna sun.",
      "9": "İri makarnayı kısaltarak küçük parçalar sun.",
      "12": "Küçük yumuşak makarnayla çatal denenebilir.",
      "18": "Yumuşak erişteyi yönetilebilir kısa parçalara ayır."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/pasta/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [],
    "imagePath": "assets/serving/core50/pasta.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/pasta/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Büyük boru makarna veya geniş düz erişte.",
          "conditions": "Tutulabilir ve yumuşak pişmiş olmalı."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Büyük boruları kısalt veya küçük makarna kullan.",
          "conditions": "Tutamıyorsa büyük biçime dön."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Çeşitli biçimler; uzun erişteyi gerekirse kısalt.",
          "conditions": "Çatal veya elle yeme olabilir."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "mandarin",
    "name": "Mandalina",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Bütün zarlı mandalina dilimini otomatik sunmayın.",
    "slug": "mandarin",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Zarsız, çekirdeksiz, ince kıyılmış"
      },
      {
        "title": "+9 ay",
        "caption": "Zarsız, çekirdeksiz, ince kıyılmış"
      },
      {
        "title": "+12 ay",
        "caption": "Zarsız, çekirdeksiz, ince kıyılmış"
      },
      {
        "title": "+18 ay",
        "caption": "Zarsız, çekirdeksiz, ince kıyılmış"
      }
    ],
    "stages": {
      "6": "Zarı ve çekirdeği alınmış mandalinayı ezin.",
      "9": "Zarsız ve çekirdeksiz küçük lokmalar.",
      "12": "9 ay biçimi sürer: zarsız küçük lokmalar.",
      "18": "Zarsız küçük parçalar sürer. Zarlı yarım dilim yalnız çiğneme becerisi yeterliyse denenebilir."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/mandarin-orange/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "mandalina"
    ],
    "imagePath": "assets/serving/core50/mandarin.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/mandarin-orange/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Zar ve çekirdeği çıkarılıp ezilmiş.",
          "conditions": "Gerekirse yumuşak gıdayla."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Zarsız küçük lokmalar.",
          "conditions": "Çekirdek çıkarılır."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Zarlı yarım segment koşullu denenebilir.",
          "conditions": "Yeterli çiğneme/yutma varsa; sonra bütün segmente kademeli geçiş."
        }
      ],
      "basis": "text",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "mango",
    "name": "Mango",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Ham/sert küpler sunmayın. Kaju veya Antep fıstığı alerjisinde mango çekirdeğini sunmayın.",
    "slug": "mango",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Soyulmuş, yumuşak uzun şerit"
      },
      {
        "title": "+9 ay",
        "caption": "Yumuşak şerit veya küçük lokma"
      },
      {
        "title": "+12 ay",
        "caption": "Yumuşak küçük lokmalar"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak küçük lokmalar"
      }
    ],
    "stages": {
      "6": "Soyulmuş, olgun ve yumuşak mango, uzun tutulan şeritler halinde.",
      "9": "Uzun şeritler veya kıskaç kavramayla alınabilen küçük yumuşak lokmalar.",
      "12": "Küçük yumuşak parçalar; çatalla tutma denenebilir.",
      "18": "12 ay biçimini sürdürün: yumuşak küçük parçalar ve çatal."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/mango/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "mango"
    ],
    "imagePath": "assets/serving/core50/mango.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/mango/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Kabuksuz uzun şerit; etinin çoğu sıyrılmış büyük çekirdek veya ezme.",
          "conditions": "Meyve hafif basınçla ezilebilir olmalı."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Uzun şerit veya küçük lokma.",
          "conditions": "Küçük parça için kıskaç kavrama."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Küçük lokmalar, çatalla.",
          "conditions": "Yumuşak ve olgun."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "mushroom",
    "name": "Mantar",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Yalnız güvenilir kaynaklı kültür mantarı. Yabani mantar vermeyin; lastiksi iri parçaları küçültün.",
    "slug": "mushroom",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş ince kıyım"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş ince kıyım"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş küçük parçalar"
      },
      {
        "title": "+18 ay",
        "caption": "Pişmiş küçük parçalar"
      }
    ],
    "stages": {
      "6": "Kültür mantarını iyice pişirip ince kıyın; yumuşak bir yemeğe katın.",
      "9": "Pişmiş kıyım veya ince dilimler sunun; sapı çıkarmak riski azaltır.",
      "12": "9+ sunumunu sürdürün: pişmiş kıyım veya ince dilim.",
      "18": "Pişmiş doğranmış parçalar veya ince dilimler sunun; sapı boyuna bölün."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/mushroom-white-button/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "mantar"
    ],
    "imagePath": "assets/serving/expanded/mushroom.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/mushroom-white-button/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Pişmiş ince kıyımı yumuşak yemeğe katın.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Pişmiş kıyım veya ince dilim; sapı çıkarılabilir.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Pişmiş dilim; sap varsa boyuna kesilebilir.",
          "conditions": "Beceriye göre uyarlayın."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "parsley",
    "name": "Maydanoz",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert sapları ayır; bütün yaprak demeti sunma.",
    "slug": "parsley",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "İnce kıyılmış; yemek içinde"
      },
      {
        "title": "+9 ay",
        "caption": "İnce kıyılmış; yemek içinde"
      },
      {
        "title": "+12 ay",
        "caption": "İnce kıyılmış; yemek içinde"
      },
      {
        "title": "+18 ay",
        "caption": "İnce kıyılmış; yemek içinde"
      }
    ],
    "stages": {
      "6": "Maydanoz yaprağını çok ince kıyıp yumuşak yemeğe karıştır.",
      "9": "Küçük kıyılmış parçaları yemeğe karıştır; ince yaprak şeritleri de kaynakta anlatılır.",
      "12": "9 ay hazırlığını sürdür; küçük kıyılmış yapraklar kullan.",
      "18": "Kıyılmış yaprakla devam et. Bütün çiğ yaprak ayrı bir 24+ ay ve beceri önerisidir."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/parsley/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Tek başına tadım öğünü değil; yemeğe çok az aroma olarak.",
    "ingredientIds": [
      "maydanoz"
    ],
    "imagePath": "assets/serving/expanded/parsley.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/parsley/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "İnce kıyılmış yaprağı yemeğe karıştır.",
          "conditions": "Yumuşak yemeğin içinde."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Küçük kıyılmış yaprak veya ince şerit.",
          "conditions": "Ağız içinde yapışabilir."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "Bütün yaprak ancak ısırıp koparabiliyorsa.",
          "conditions": "Uygulamada 18 aya çekilmiyor."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "lentil",
    "name": "Mercimek",
    "icon": "🥣",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 1,
    "avoid": "Sert veya kuru mercimek sunma.",
    "slug": "lentil",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Yumuşak mercimek ezmesi"
      },
      {
        "title": "+9 ay",
        "caption": "Pütürlü mercimek"
      },
      {
        "title": "+12 ay",
        "caption": "Kaşıkla yenilen mercimek"
      },
      {
        "title": "+18 ay",
        "caption": "Kaşık pratiği"
      }
    ],
    "stages": {
      "6": "Mercimeği iyice pişir; kaşıkta duran nemli ezme veya yemek sun.",
      "9": "Yumuşak, nemli ve kaşıkla alınabilir pütürlü mercimek sun.",
      "12": "Kaşıkla alınan mercimek yemeği sun; elle de yiyebilir.",
      "18": "12+ sunumunu sürdür; kaşık denemesinde baskı yapma."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/lentil/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [],
    "imagePath": "assets/serving/core50/lentil.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/lentil/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Kaşıkta duran yumuşak pişmiş mercimek yemeği veya büyük yumuşak köfte.",
          "conditions": "Elle veya doldurulmuş kaşıkla alınabilir."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Nemli mercimek yemeği veya mercimekli yiyecekten lokmalar.",
          "conditions": "Tek taneler tutulamayabilir."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Çorba, ezme veya yemek; kaşık denemesi.",
          "conditions": "Elle yemeye dönmesi normal."
        }
      ],
      "basis": "text",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "corn",
    "name": "Mısır",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "12 ay altında serbest bütün mısır tanesi verme. Bütün taneler daha sonra da risk taşır; patlamış mısır sunma.",
    "slug": "corn",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş, kısa koçan"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş, uzun koçan"
      },
      {
        "title": "+12 ay",
        "caption": "Koçanla devam"
      },
      {
        "title": "+18 ay",
        "caption": "Tutuşa uygun koçan"
      }
    ],
    "stages": {
      "6": "Pişmiş koçanı enine böl: ağızdan büyük, bebeğin taşıyabileceği bir parça olsun. Serbest bütün tane verme.",
      "9": "Pişmiş yarım koçan veya tutabildiği daha uzun koçan sun.",
      "12": "Koçan seçeneğine devam et. Bütün serbest taneler boğulma riski taşır; yaş tek başına yeterli değildir.",
      "18": "Koçanı çocuğun tutuşuna göre sun. Bütün serbest taneler için yaşa bakarak otomatik geçiş yapma."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/corn/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "misir"
    ],
    "imagePath": "assets/serving/reviewed/corn.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/corn/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Pişmiş, enine kesilmiş koçan.",
          "conditions": "Ağızdan büyük, tutabilecek kadar hafif; serbest tane yok."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Yarım veya daha büyük pişmiş koçan.",
          "conditions": "Tutma becerisine göre."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Koçan sürer; kaynak az sayıda serbest taneyi de anlatır.",
          "conditions": "Bütün tanelerde boğulma riski ve bireysel beceri değerlendirmesi."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "Solid Starts 12+ tek tanelere koşullu geçişi destekler; mevcut boğulma önlemleri nedeniyle uygulama koçan alternatifini gösterir.",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "cornmeal",
    "name": "Mısır unu",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert, kıtır polenta veya kuru un sunma.",
    "slug": "cornmeal",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Yumuşak, pişmiş lapa"
      },
      {
        "title": "+9 ay",
        "caption": "Lapa veya yumuşak polenta"
      },
      {
        "title": "+12 ay",
        "caption": "Kaşıkla yumuşak sunum"
      },
      {
        "title": "+18 ay",
        "caption": "Pişmiş aile yemeğinde"
      }
    ],
    "stages": {
      "6": "Mısır ununu iyice pişirerek yumuşak lapa veya polenta yap.",
      "9": "Lapayı sürdür; polenta ince ve parmakla ezilebilir yumuşak parçalara ayrılabilir.",
      "12": "Lapa, çorba veya yumuşak pişmiş yemek içinde sun.",
      "18": "12 ay sunumu sürer; kaşık denemesi yapılabilir."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/cornmeal-polenta/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "misir-unu"
    ],
    "imagePath": "assets/serving/expanded/cornmeal.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/cornmeal-polenta/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Yumuşak polenta/lapa veya ince, ezilebilir polenta şeridi.",
          "conditions": "Sert kızarmış kabuk yok."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Lapa veya küçük yumuşak polenta parçaları.",
          "conditions": "Kıskaç tutuşuna göre."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Lapa, çorba veya yumuşak pişmiş yemekler.",
          "conditions": "Kaşık isteğe bağlı."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "banana",
    "name": "Muz",
    "icon": "🍌",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 0,
    "avoid": "Kabuk sunma; ağzını dolduruyorsa parça boyutunu yeniden değerlendir.",
    "slug": "banana",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Soyulmuş büyük yarım"
      },
      {
        "title": "+9 ay",
        "caption": "Yumuşak dilim ve parçalar"
      },
      {
        "title": "+12 ay",
        "caption": "Yumuşak muz lokmaları"
      },
      {
        "title": "+18 ay",
        "caption": "Soyma pratiği"
      }
    ],
    "stages": {
      "6": "Olgun muzu soyup enine ikiye ayır; büyük soyulmuş yarım sun.",
      "9": "Yumuşak yuvarlak dilimler veya küçük koparılmış parçalar sun.",
      "12": "Yumuşak lokmaları veya büyük şeridi sürdür.",
      "18": "Bütün muzla soyma pratiği yapılabilir; kabuk yenmez."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/banana/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [
      "muz"
    ],
    "imagePath": "assets/serving/core50/banana.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/banana/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Soyulmuş yarım muz, boyuna üç şerit veya ezme.",
          "conditions": "Yapışkan büyük lokmada boyuna şerit tercih edilebilir."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Boyuna şerit, koparılmış küçük parçalar veya dilimler.",
          "conditions": "Kıskaç kavrama gelişimine göre."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Lokmalar, şeritler veya bütün muz.",
          "conditions": "Beceriye göre boyut seçilir."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Bütün muz ve soyma pratiği.",
          "conditions": "Çocuğa soyma gösterilir."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "mint",
    "name": "Nane",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert sapları ayır; bütün yaprak demeti sunma.",
    "slug": "mint",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "İnce kıyılmış; yemek içinde"
      },
      {
        "title": "+9 ay",
        "caption": "İnce kıyılmış; yemek içinde"
      },
      {
        "title": "+12 ay",
        "caption": "İnce kıyılmış; yemek içinde"
      },
      {
        "title": "+18 ay",
        "caption": "İnce kıyılmış; yemek içinde"
      }
    ],
    "stages": {
      "6": "Nane yaprağını çok ince kıyıp yumuşak yemeğe karıştır.",
      "9": "Küçük kıyılmış parçaları yemeğe karıştır; ince yaprak şeritleri de kaynakta anlatılır.",
      "12": "9 ay hazırlığını sürdür; küçük kıyılmış yapraklar kullan.",
      "18": "Kıyılmış yaprakla devam et. Bütün çiğ yaprak ayrı bir 24+ ay ve beceri önerisidir."
    },
    "aliases": [
      "Toz nane"
    ],
    "sourceUrls": [
      "https://solidstarts.com/foods/mint/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Tek başına tadım öğünü değil; yemeğe çok az aroma olarak.",
    "ingredientIds": [
      "nane"
    ],
    "imagePath": "assets/serving/expanded/mint.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/mint/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "İnce kıyılmış yaprağı yemeğe karıştır.",
          "conditions": "Yumuşak yemeğin içinde."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Küçük kıyılmış yaprak veya ince şerit.",
          "conditions": "Ağız içinde yapışabilir."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "Bütün yaprak ancak ısırıp koparabiliyorsa.",
          "conditions": "Uygulamada 18 aya çekilmiyor."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "pomegranate",
    "name": "Nar",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Bütün taneler küçük, sert ve kaygandır; hazır olmayan çocuğa vermeyin.",
    "slug": "pomegranate",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Tam ezilmiş, yemeğe karışmış"
      },
      {
        "title": "+9 ay",
        "caption": "Tamamen yassılaştırılmış"
      },
      {
        "title": "+12 ay",
        "caption": "Beceri uygunsa birkaç tane"
      },
      {
        "title": "+18 ay",
        "caption": "Beceri uygunsa birkaç tane"
      }
    ],
    "stages": {
      "6": "Nar tanelerini tamamen ezin; yoğurt veya yulaf gibi kaşıkla alınan bir gıdaya karıştırın.",
      "9": "Taneleri tamamen yassılaştırın; tek tek alınabilecek şekilde sunun.",
      "12": "Bütün taneler ancak iyi çiğniyor ve ağzını doldurmuyorsa, tek başına birkaç adet. Hazır değilse ezin.",
      "18": "Yeterli çiğneme varsa bütün taneler; karışık yemeğe eklemek de beceriye bağlıdır. Hazır değilse ezin."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/pomegranate/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "nar"
    ],
    "imagePath": "assets/serving/reviewed/pomegranate.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/pomegranate/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Tam ezilmiş taneler, kaşıkla alınabilen gıdada.",
          "conditions": "Bütün tane yok."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Tam yassı ezilmiş taneler.",
          "conditions": "Tek başına veya yumuşak gıdada."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Bütün taneler tek başına, birkaç adet.",
          "conditions": "İyi çiğneme, ağzı doldurmama, gerektiğinde tükürme."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Bütün taneler karışık gıdada düşünülebilir.",
          "conditions": "Tutarlı ve tam çiğneme becerisi."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "chickpea",
    "name": "Nohut",
    "icon": "🥣",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 1,
    "avoid": "Sert, kuru veya kavrulmuş nohut sunma.",
    "slug": "chickpea",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Nohut ezmesi"
      },
      {
        "title": "+9 ay",
        "caption": "Tam yassılaştırılmış nohut"
      },
      {
        "title": "+12 ay",
        "caption": "Yumuşak, ezilmiş nohut"
      },
      {
        "title": "+18 ay",
        "caption": "Yassı nohut lokmaları"
      }
    ],
    "stages": {
      "6": "Tam pişmiş nohudu ez; nemli kıvamda sun.",
      "9": "Yumuşak nohudu çatalla tamamen yassılaştır.",
      "12": "Ezilmiş veya yassılaştırılmış nohudu sürdür.",
      "18": "Yassı nohut lokmalarıyla çatal denenebilir."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/chickpea/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [
      "nohut"
    ],
    "imagePath": "assets/serving/core50/chickpea.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/chickpea/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Tam pişmiş nohut ezmesi veya püre.",
          "conditions": "Humusta susam ayrıca alerjen olarak değerlendirilir."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Yumuşak pişmiş, çatalla yassılaştırılmış nohut.",
          "conditions": "Kıskaç kavrama gelişimine göre."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Yassı nohudu sürdür; bütün için çiğneme becerisini değerlendir.",
          "conditions": "Ağzını doldurmama ve yakın gözetim gerekir."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "Kaynak 12+ bütün nohudu beceriye bağlar. Bütün baklagil tanesi riski nedeniyle yassı nohut sürdürülür.",
      "safetySourceUrl": "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    },
    "coreServing": true
  },
  {
    "id": "potato",
    "name": "Patates",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert, çiğ ve filizlenmiş patates sunmayın.",
    "slug": "potato",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Büyük, yumuşak pişmiş dilim"
      },
      {
        "title": "+9 ay",
        "caption": "Küçük yumuşak parçalar"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş parçalar ve çatal"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak lokmalar"
      }
    ],
    "stages": {
      "6": "İki parmak arasında kolayca ezilecek kadar pişirin; ezme veya iri dilim sunun.",
      "9": "Kıskaç kavraması geliştiyse küçük yumuşak parçalar sunun.",
      "12": "Küçük, yumuşak pişmiş lokmalar sunun; çatal kullanmayı deneyebilirsiniz.",
      "18": "12+ sunumunu sürdürün: yumuşak pişmiş lokmalar."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/potato/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "patates"
    ],
    "imagePath": "assets/serving/core50/potato.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/potato/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Parmak arasında ezilen iri pişmiş dilim veya ezme.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Kıskaç kavramasıyla küçük pişmiş parçalar; iri dilimler de olur.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Yumuşak lokmalar, elle veya çatalla.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "aubergine",
    "name": "Patlıcan",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert çiğ veya az pişmiş patlıcan sunmayın.",
    "slug": "aubergine",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Uzun, yumuşak pişmiş dilim"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş küçük parçalar"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş parçalar ve çatal"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak pişmiş parçalar"
      }
    ],
    "stages": {
      "6": "İyice pişmiş uzun patlıcan dilimi sunun; kabuk tutmayı kolaylaştırabilir.",
      "9": "Kıskaç kavraması geliştiyse küçük yumuşak pişmiş lokmalar sunun.",
      "12": "Yumuşak pişmiş parçalarla çatal denemesi yapın.",
      "18": "12+ sunumunu sürdürün: yumuşak pişmiş lokmalar."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/eggplant/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "patlican"
    ],
    "imagePath": "assets/serving/reviewed/aubergine.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/eggplant/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Yumuşak pişmiş uzun dilim veya ezme.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Yumuşak pişmiş lokmalar; büyük dilimler de olabilir.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Pişmiş lokmalar, uzun dilimler veya doldurulmuş yarım.",
          "conditions": "Beceriye göre uyarlayın."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "chard",
    "name": "Pazı",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert çiğ pazı sapı daha yüksek tıkanma riski taşır.",
    "slug": "chard",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş ince kıyım"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş ince kıyım"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş ince kıyım"
      },
      {
        "title": "+18 ay",
        "caption": "Pişmiş ince kıyım"
      }
    ],
    "stages": {
      "6": "Pişmiş ince kıyılmış pazıyı yumuşak yemeğe karıştırın.",
      "9": "Pişmiş yaprak ve sapı küçük kıyım veya kısa ince şeritler halinde sunun.",
      "12": "9+ sunumunu sürdürün: yumuşak, pişmiş ince kıyım.",
      "18": "9+ sunumunu sürdürün; sert çiğ saplara geçmeyin."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/swiss-chard/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "pazi"
    ],
    "imagePath": "assets/serving/expanded/chard.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/swiss-chard/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Pişmiş ince kıyım yemeğe karışmış; alternatif yumuşak bütün sap.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Pişmiş kısa şerit veya kıyım.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "Daha iri veya çiğ parçalar yalnız çiğneme becerisiyle.",
          "conditions": "Beceriye göre uyarlayın."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "cheese",
    "name": "Peynir",
    "icon": "🧀",
    "allergens": [
      "Süt"
    ],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 2,
    "avoid": "Sert küp, iri erimiş peynir topağı ve pastörize edilmemiş ürün sunma.",
    "slug": "cheddar-cheese",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Uzun, ince peynir dilimi"
      },
      {
        "title": "+9 ay",
        "caption": "İnce rendelenmiş peynir"
      },
      {
        "title": "+12 ay",
        "caption": "Küçük, yassı parçalar"
      },
      {
        "title": "+18 ay",
        "caption": "İnce parçalarla çatal"
      }
    ],
    "stages": {
      "6": "Pastörize, az tuzlu yarı sert peyniri uzun ve ince yassı dilimle; büyük sert küp verme.",
      "9": "Pastörize yarı sert peyniri ince rendele.",
      "12": "Küçük, ince ve yassı peynir parçaları sun.",
      "18": "12+ sunumunu sürdür; küçük yassı parçalarla çatal isteğe bağlı."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/cheese/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [],
    "imagePath": "assets/serving/core50/cheese.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/cheese/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Pastörize yumuşak peynir veya uzun, ince, yassı yarı sert dilim.",
          "conditions": "Büyük erimiş peynir topaklarından kaçın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Rende, ince yassı lokma veya yumuşak peynir.",
          "conditions": "Kıskaç kavramaya göre."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Yumuşak, rendelenmiş veya ince dilim peynir.",
          "conditions": "Küp sunma; pastörize olmalı."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "Küp yalnız ileri çiğneme ve sakin oturma becerisiyle.",
          "conditions": "Uygulama görselinde kullanılmaz."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "Görsel pastörize, az tuzlu yarı sert peynir örneğidir; her peynirin tuzu, sertliği ve pastörizasyonu ayrı değerlendirilir.",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "leek",
    "name": "Pırasa",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Uzun, sert ve lifli parçaları uygun biçimde kısaltıp pişirin.",
    "slug": "leek",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş, ince kıyılmış"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş, ince kıyılmış"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş, ince kıyılmış"
      },
      {
        "title": "+18 ay",
        "caption": "Pişmiş, ince kıyılmış"
      }
    ],
    "stages": {
      "6": "Pişmiş ince kıyılmış pırasayı yumuşak yemeğe karıştırın veya koyu püre sunun.",
      "9": "Pişmiş ince doğranmış pırasa; tek başına veya yemeğin içinde.",
      "12": "9+ sunumunu sürdürün: ince kıyılmış, yumuşak pişmiş pırasa.",
      "18": "Pişmiş ince kıyımı sürdürün; koyu pırasa çorbasıyla kaşık deneyebilirsiniz."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/leek/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "pirasa"
    ],
    "imagePath": "assets/serving/core50/leek.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/leek/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "İnce kıyılıp pişmiş pırasayı yemeğe katın veya koyu püre sunun.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Pişmiş ince dilim veya kıyım; yemeğe karıştırılabilir.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Koyu pırasa çorbasıyla kaşık denemesi; önceki seçenekler sürer.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        }
      ],
      "basis": "text",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "rice",
    "name": "Pirinç",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Kuru tanelerden, yoğun yapışkan pirinç keklerinden kaçın; tahılları çeşitlendir.",
    "slug": "rice",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Nemli pirinç lapası"
      },
      {
        "title": "+9 ay",
        "caption": "Nemli, yumuşak pirinç"
      },
      {
        "title": "+12 ay",
        "caption": "Nemli, yumuşak pirinç"
      },
      {
        "title": "+18 ay",
        "caption": "Kaşık veya çatal denemesi"
      }
    ],
    "stages": {
      "6": "Pişmiş pirinci sıvı veya sosla nemlendirerek lapa yap; büyük, çok yumuşak top da seçilebilir.",
      "9": "Nemli pişmiş pirinci sun; taneleri çatalla yassılaştırmak tutmayı kolaylaştırabilir.",
      "12": "9 ay sunumu sürer: nemli pirinç, lapa veya yemeğin içinde.",
      "18": "Nemli pirinci kaşık veya çatalla deneyebilir; elle yemeye devam etmesi doğaldır."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/rice/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "pirinc"
    ],
    "imagePath": "assets/serving/core50/rice.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/rice/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Nemli lapa veya büyük yumuşak pirinç topu.",
          "conditions": "Sosla nemlendir."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Nemli pirinç, top veya yemeğin içinde.",
          "conditions": "Gerekirse çatalla yassılaştır."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Aile yemeğinde nemli pirinç; gereç denemesi.",
          "conditions": "Elle yemek de kabul edilir."
        },
        {
          "minMonths": 36,
          "label": "36+ ay",
          "preparation": "Yapışkan pirinç kekleri için özel hazırlık.",
          "conditions": "Uygulama 18 aya taşımıyor."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "orange",
    "name": "Portakal",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Küçük zarlı turunçgil dilimleri ve çekirdek bırakmayın.",
    "slug": "orange",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Zarsız, çekirdeksiz büyük dilim"
      },
      {
        "title": "+9 ay",
        "caption": "Zarsız, küçük lokmalar"
      },
      {
        "title": "+12 ay",
        "caption": "Zarsız, küçük lokmalar"
      },
      {
        "title": "+18 ay",
        "caption": "Beceri uygunsa büyük dilim"
      }
    ],
    "stages": {
      "6": "Büyük portakalın zar ve çekirdeği çıkarılmış uzun segmentleri; kabuklu büyük dilim alternatifi de vardır.",
      "9": "Kabuk, zar ve çekirdekleri çıkarılmış küçük lokmalar.",
      "12": "9 ay biçimi sürer: zarsız, çekirdeksiz küçük lokmalar.",
      "18": "Yeterli çiğneme/yutmayla büyük zarlı segment; zarsız küçük parçalar da sürebilir."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/orange/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "portakal"
    ],
    "imagePath": "assets/serving/core50/orange.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/orange/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Çekirdeksiz büyük kabuklu dilim veya zarı alınmış büyük segment.",
          "conditions": "Küçük turunçgilin zarlı dilimi değil."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Kabuk, zar ve çekirdeği alınmış küçük lokmalar.",
          "conditions": "Büyük zarsız segment devam edebilir."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Büyük zarlı dilim denenebilir.",
          "conditions": "Yeterli çiğneme/yutma; küçük mandalina dilimiyle karıştırmayın."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "offal",
    "name": "Sakatat",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Türünü hekimle değerlendir. Ciğer A vitamini bakımından yoğundur; günlük menüye eklenmez. Çiğ/az pişmiş sakatat ve pastörize olmayan ürün sunma.",
    "slug": "offal",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Önce türü belirle"
      },
      {
        "title": "+9 ay",
        "caption": "Önce türü belirle"
      },
      {
        "title": "+12 ay",
        "caption": "Önce türü belirle"
      },
      {
        "title": "+18 ay",
        "caption": "Önce türü belirle"
      }
    ],
    "stages": {
      "6": "Türünü hekimle değerlendir. Ciğer A vitamini bakımından yoğundur; günlük menüye eklenmez. Çiğ/az pişmiş sakatat ve pastörize olmayan ürün sunma.",
      "9": "Türünü hekimle değerlendir. Ciğer A vitamini bakımından yoğundur; günlük menüye eklenmez. Çiğ/az pişmiş sakatat ve pastörize olmayan ürün sunma.",
      "12": "Türünü hekimle değerlendir. Ciğer A vitamini bakımından yoğundur; günlük menüye eklenmez. Çiğ/az pişmiş sakatat ve pastörize olmayan ürün sunma.",
      "18": "Türünü hekimle değerlendir. Ciğer A vitamini bakımından yoğundur; günlük menüye eklenmez. Çiğ/az pişmiş sakatat ve pastörize olmayan ürün sunma."
    },
    "aliases": [],
    "sourceUrls": [
      "https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-a/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/"
    ],
    "reviewedAt": "2026-10-18",
    "requiresReview": true,
    "ageBand": "review",
    "ageLabel": "Önce değerlendir",
    "introNote": "Sakatat tek bir gıda değildir. Türü ve miktarı belirlenmeden başlangıç ayı verilemez.",
    "ingredientIds": [
      "sakatat"
    ],
    "imagePath": "assets/serving/expanded/offal.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "no-direct-source",
      "checkedAt": "2026-10-19",
      "sourceUrl": "",
      "sourceBands": [],
      "basis": "text",
      "imageStatus": "keep",
      "note": "Genel sakatat farklı organları kapsar; tek hazırlama/ay doğrulanamaz.",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "cucumber",
    "name": "Salatalık",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Kalın çiğ küp veya lokmalık sert parçalar sunmayın.",
    "slug": "cucumber",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Kabuklu uzun yarım"
      },
      {
        "title": "+9 ay",
        "caption": "İnce yarım ay dilimler"
      },
      {
        "title": "+12 ay",
        "caption": "İnce düz dilimler"
      },
      {
        "title": "+18 ay",
        "caption": "İnce düz dilimler"
      }
    ],
    "stages": {
      "6": "Kabuklu, boyuna kesilmiş büyük salatalık yarısı sunun.",
      "9": "Kıskaç kavraması geliştiyse ince yarım ay veya çeyrek dilim sunun.",
      "12": "İnce düz dilimler sunun; kalın küp ve çubuklardan kaçının.",
      "18": "İnce dilimleri sürdürün. Uzun parçalar yalnız deneyimli çiğneyen çocukta, sivri uçları kesilerek."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/cucumber/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "salatalik"
    ],
    "imagePath": "assets/serving/core50/cucumber.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/cucumber/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Kabuklu uzun yarım; alternatif rende.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "İnce yarım ay veya çeyrek dilim.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "İnce düz dilimler; kalın küp yok.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "İnce dilimler; beceri varsa uçları alınmış uzun parça.",
          "conditions": "Isırma ve çiğneme becerisi; oturarak gözetim."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "garlic",
    "name": "Sarımsak",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Çiğ sarımsağı bütün diş veya iri parçalar halinde vermeyin.",
    "slug": "garlic",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Yemeğe karışmış pişmiş sarımsak"
      },
      {
        "title": "+9 ay",
        "caption": "Yemeğe karışmış pişmiş sarımsak"
      },
      {
        "title": "+12 ay",
        "caption": "Yemekte ince kıyım"
      },
      {
        "title": "+18 ay",
        "caption": "Yemekte ince kıyım"
      }
    ],
    "stages": {
      "6": "Az miktarda rendelenmiş veya ezilmiş pişmiş sarımsağı yemeğe karıştırın.",
      "9": "İnce pişmiş dilimler veya sarımsak ezmesiyle yemeği çeşnilendirin.",
      "12": "Sarımsakla hazırlanmış yemekler sunun; çiğ iri parça vermeyin.",
      "18": "12+ sunumunu sürdürün: az miktarda sarımsakla çeşnilendirin."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/garlic/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "sarimsak"
    ],
    "imagePath": "assets/serving/expanded/garlic.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/garlic/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Rende veya ezilmiş pişmiş sarımsakla yemeği çeşnilendirin.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Pişmiş ince dilim; rende veya yumuşak ezme.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Sarımsakla çeşnilendirilmiş yemekleri sürdürün.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "purslane",
    "name": "Semizotu",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "İyice yıka; kalın sap, zar ve uzun lifleri ayır. Pişirip kısa ve çok ince kıy; kuru, lifli demet halinde sunma.",
    "slug": "purslane",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş, ince kıyılıp ezilmiş"
      },
      {
        "title": "+9 ay",
        "caption": "Nemli ve çok ince kıyılmış"
      },
      {
        "title": "+12 ay",
        "caption": "Kısa, yumuşak parçalar"
      },
      {
        "title": "+18 ay",
        "caption": "İnce kıyılmış, yumuşak"
      }
    ],
    "stages": {
      "6": "Pişmiş, ince kıyılıp ezilmiş. İyice yıka; kalın sap, zar ve uzun lifleri ayır. Pişirip kısa ve çok ince kıy; kuru, lifli demet halinde sunma.",
      "9": "Nemli ve çok ince kıyılmış. İyice yıka; kalın sap, zar ve uzun lifleri ayır. Pişirip kısa ve çok ince kıy; kuru, lifli demet halinde sunma.",
      "12": "Kısa, yumuşak parçalar. İyice yıka; kalın sap, zar ve uzun lifleri ayır. Pişirip kısa ve çok ince kıy; kuru, lifli demet halinde sunma.",
      "18": "İnce kıyılmış, yumuşak. İyice yıka; kalın sap, zar ve uzun lifleri ayır. Pişirip kısa ve çok ince kıy; kuru, lifli demet halinde sunma."
    },
    "aliases": [],
    "sourceUrls": [
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-18",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "Sunum bilgisi hazırlanıyor",
    "introNote": "Bu gıdanın aya göre sunumu henüz doğrulanamadı. Başka bir gıdanın sunumuyla eşleştirilmedi.",
    "ingredientIds": [
      "semizotu"
    ],
    "imagePath": "assets/serving/expanded/purslane.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "unavailable",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/purslane/",
      "sourceBands": [],
      "basis": "text",
      "imageStatus": "withhold",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "onion",
    "name": "Soğan",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert, kalın çiğ soğan parçaları ve bütün küçük arpacık soğanlar risklidir.",
    "slug": "onion",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Büyük pişmiş dilimler"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş küçük parçalar"
      },
      {
        "title": "+12 ay",
        "caption": "İncecik çiğ dilimler"
      },
      {
        "title": "+18 ay",
        "caption": "İncecik çiğ dilimler"
      }
    ],
    "stages": {
      "6": "İyice pişmiş, ince kıyılmış soğanı yumuşak yemeğe karıştırın.",
      "9": "Pişmiş ince kıyım veya yumuşak ince dilimler sunun.",
      "12": "Pişmiş soğanlı yemek sunun; çiğ kullanılacaksa incecik kıyın.",
      "18": "12+ sunumu sürdürün: pişmiş soğanı aile yemeğine katın."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/onion/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "sogan"
    ],
    "imagePath": "assets/serving/reviewed/onion.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/onion/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Pişmiş ince doğranmış soğanı yemeğe katın; büyük pişmiş dilimler de olur.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Pişmiş küçük parçalar veya ince yumuşak dilimler.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Pişmiş parçalar; çiğse çok ince kıyım veya dilim.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "İyi çiğniyor, ağzını doldurmuyorsa sert olmayan kızarmış soğan.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "sesame",
    "name": "Susam",
    "icon": "",
    "allergens": [
      "Susam"
    ],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Susam alerjendir. Koyu tahin topağı ve kuru tohum kaşığı sunma.",
    "slug": "sesame",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Öğütülmüş; nemli yemeğe karışmış"
      },
      {
        "title": "+9 ay",
        "caption": "Öğütülmüş; nemli yemeğe karışmış"
      },
      {
        "title": "+12 ay",
        "caption": "Öğütülmüş; nemli yemeğe karışmış"
      },
      {
        "title": "+18 ay",
        "caption": "Öğütülmüş; nemli yemeğe karışmış"
      }
    ],
    "stages": {
      "6": "İnce öğütülmüş susamı nemli yemeğe karıştır; tahini yoğurt veya suyla incelt.",
      "9": "6 ay hazırlığını sürdür; yoğun tahini tek kaşık verme.",
      "12": "İnceltilmiş tahin sosuyla batırma denenebilir; öğütülmüş susam yemeğe eklenebilir.",
      "18": "12 ay sunumu sürer; pürüzsüz, inceltilmiş sos kullan."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/sesame/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html",
      "https://www.nhs.uk/baby/weaning-and-feeding/food-allergies-in-babies-and-young-children/"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "susam"
    ],
    "imagePath": "assets/serving/expanded/sesame.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/sesame/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Öğütülmüş susamı yemeğe karıştır; tahini incelt.",
          "conditions": "Yoğun yapışkan topak yok."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "İnceltilmiş tahin sosu ve humusla batırma.",
          "conditions": "Diğer alerjenleri gözet."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "peach",
    "name": "Şeftali",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert/ham meyve ve serbest çekirdek sunmayın.",
    "slug": "peach",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Çekirdeksiz, yumuşak yarım"
      },
      {
        "title": "+9 ay",
        "caption": "Yumuşak, ince dilimler"
      },
      {
        "title": "+12 ay",
        "caption": "Çekirdeksiz küçük lokmalar"
      },
      {
        "title": "+18 ay",
        "caption": "Beceri uygunsa bütün"
      }
    ],
    "stages": {
      "6": "Çok yumuşak şeftali: çekirdeksiz yarım; ezme de mümkün.",
      "9": "Yumuşak ince dilim; tutamıyorsa yarım biçimini sürdürün.",
      "12": "Çekirdeksiz küçük lokmalar; çatala önceden takılabilir.",
      "18": "Çok yumuşak bütün meyve yalnız uygun çiğneme becerisi ve yakın gözetimle; çekirdek görünürse çıkarın."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/peach/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "seftali"
    ],
    "imagePath": "assets/serving/core50/peach.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/peach/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Çekirdeksiz yarım veya ezme.",
          "conditions": "Çok olgun, hafif basınçla ezilebilir; çekirdeği çıkarın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "İnce dilim.",
          "conditions": "Çok olgun, hafif basınçla ezilebilir; çekirdeği çıkarın."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "İnce dilim veya küçük lokma.",
          "conditions": "Çok olgun, hafif basınçla ezilebilir; çekirdeği çıkarın."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Bütün meyve denenebilir.",
          "conditions": "Olgun ve yumuşak; ısırmayı ve çekirdekten kaçınmayı modelleyin; gerekirse çekirdeği çıkarın."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "tahini",
    "name": "Tahin",
    "icon": "🥣",
    "allergens": [
      "Susam"
    ],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 2,
    "avoid": "Kalın tahin topağı verme; 12 aydan önce ballı ürün kullanma.",
    "slug": "sesame",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "İnceltilmiş tahin"
      },
      {
        "title": "+9 ay",
        "caption": "Yemeğe karışmış tahin"
      },
      {
        "title": "+12 ay",
        "caption": "İnceltilmiş tahin sosu"
      },
      {
        "title": "+18 ay",
        "caption": "İnce tahin sosu"
      }
    ],
    "stages": {
      "6": "Tahini suyla akışkanlaştır; nemli yemeğe karıştır veya uygun gıdaya ince sür.",
      "9": "6+ sunumu sürer: inceltilmiş tahini yemeğe karıştır.",
      "12": "İnce tahin sosu veya yemeğe karışmış tahin sun.",
      "18": "12+ sunumunu sürdür; kalın yapışkan topak verme."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/tahini/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [
      "tahin"
    ],
    "imagePath": "assets/serving/core50/tahini.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/tahini/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Tahini su veya uygun sıvıyla akışkanlaştır; yemeğe karıştır veya çok ince sür.",
          "conditions": "Bal içermemeli."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Yemeğe karıştırılan veya ince sürülen tahin.",
          "conditions": "İnceltmek şart değil; büyük topak sunma."
        }
      ],
      "basis": "text",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "whole-wheat-flour",
    "name": "Tam buğday unu",
    "icon": "",
    "allergens": [
      "Buğday"
    ],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Unu çiğ tattırma. Yemeğin her tarafı tamamen pişmiş, içi hamursuz ve yumuşak olmalı; kuru un/toz yedirme.",
    "slug": "whole-wheat-flour",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Tam pişmiş lapa içinde"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş, yumuşak karışım"
      },
      {
        "title": "+12 ay",
        "caption": "Tam pişmiş yumuşak şerit"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak, pişmiş lokma"
      }
    ],
    "stages": {
      "6": "Tam pişmiş lapa içinde. Unu çiğ tattırma. Yemeğin her tarafı tamamen pişmiş, içi hamursuz ve yumuşak olmalı; kuru un/toz yedirme.",
      "9": "Pişmiş, yumuşak karışım. Unu çiğ tattırma. Yemeğin her tarafı tamamen pişmiş, içi hamursuz ve yumuşak olmalı; kuru un/toz yedirme.",
      "12": "Tam pişmiş yumuşak şerit. Unu çiğ tattırma. Yemeğin her tarafı tamamen pişmiş, içi hamursuz ve yumuşak olmalı; kuru un/toz yedirme.",
      "18": "Yumuşak, pişmiş lokma. Unu çiğ tattırma. Yemeğin her tarafı tamamen pişmiş, içi hamursuz ve yumuşak olmalı; kuru un/toz yedirme."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/wheat/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html",
      "https://www.nhs.uk/baby/weaning-and-feeding/food-allergies-in-babies-and-young-children/"
    ],
    "reviewedAt": "2026-10-18",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "tam-bugday-unu"
    ],
    "imagePath": "assets/serving/expanded/whole-wheat-flour.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "no-direct-source",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/wheat/",
      "sourceBands": [],
      "basis": "text",
      "imageStatus": "keep",
      "note": "İlgili buğday kaynağından uyarlama; ayrı un türü için doğrudan yaş rehberi değil.",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "cinnamon",
    "name": "Tarçın",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Tarçın çubuğu, kuru toz kaşığı, takviye ve uçucu yağ sunma.",
    "slug": "cinnamon",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Az miktarda; yemek içinde"
      },
      {
        "title": "+9 ay",
        "caption": "Az miktarda; yemek içinde"
      },
      {
        "title": "+12 ay",
        "caption": "Az miktarda; yemek içinde"
      },
      {
        "title": "+18 ay",
        "caption": "Az miktarda; yemek içinde"
      }
    ],
    "stages": {
      "6": "Az ince öğütülmüş tarçını nemli yemeğe ekle.",
      "9": "6 ay hazırlığını sürdür; kuru toz yığını sunma.",
      "12": "Yemek ve soslarda aroma için kullan; çubuğu çıkar.",
      "18": "12 ay sunumu sürer; ayrı doku aşaması yok."
    },
    "aliases": [
      "Toz tarçın"
    ],
    "sourceUrls": [
      "https://solidstarts.com/foods/cinnamon/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Tek başına tadım öğünü değil; yemeğe çok az aroma olarak.",
    "ingredientIds": [
      "tarcin"
    ],
    "imagePath": "assets/serving/expanded/cinnamon.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/cinnamon/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Öğütülmüş tarçın yemeğe karışmış.",
          "conditions": "Çubukla pişirilirse çıkar."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Yemek ve soslarda öğütülmüş tarçın.",
          "conditions": "Çubuk servis edilmez."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "sweet-potato",
    "name": "Tatlı patates",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert, çiğ veya yeterince pişmemiş parça sunmayın.",
    "slug": "sweet-potato",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Büyük, yumuşak pişmiş dilim"
      },
      {
        "title": "+9 ay",
        "caption": "Küçük yumuşak parçalar"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş parçalar ve çatal"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak lokmalar"
      }
    ],
    "stages": {
      "6": "Tam pişmiş, yumuşak tatlı patatesi ezin veya tutulabilir iri dilim sunun.",
      "9": "Kıskaç kavraması geliştiyse küçük yumuşak parçalar; büyük dilimler de olabilir.",
      "12": "Yumuşak lokmalar veya büyük dilimler; çatal kullanmayı modelleyin.",
      "18": "12+ sunumu sürdürün; yumuşak pişmiş parçalar sunun."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/sweet-potato/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "tatli-patates"
    ],
    "imagePath": "assets/serving/core50/sweet-potato.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/sweet-potato/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Tam pişmiş yumuşak iri dilimler veya ezme.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Kıskaç kavramasıyla küçük yumuşak parçalar; büyük dilimler devam edebilir.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Yumuşak lokmalar veya büyük dilimler; çatal denemesi.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "chicken",
    "name": "Tavuk",
    "icon": "🍗",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 1,
    "avoid": "Kemik, gevşek kıkırdak, deri ve sert kuru et bırakma.",
    "slug": "chicken",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Uzun, yassı tavuk şeridi"
      },
      {
        "title": "+9 ay",
        "caption": "İnce, nemli tavuk lifleri"
      },
      {
        "title": "+12 ay",
        "caption": "Küçük yumuşak parçalar"
      },
      {
        "title": "+18 ay",
        "caption": "Çatal ile deneme"
      }
    ],
    "stages": {
      "6": "Tam pişmiş tavuğu uzun, yassı ve yumuşak şerit sun; kemik, deri ve kıkırdakları çıkar.",
      "9": "İnce didiklenmiş, nemli tavuk lifleri sun.",
      "12": "Küçük yumuşak parçalar sun; sert küp biçimi verme.",
      "18": "12+ sunumunu sürdür; çatal denemesi isteğe bağlı."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/chicken/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [
      "tavuk"
    ],
    "imagePath": "assets/serving/core50/chicken.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/chicken/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "İnce kıyılmış tavuk nemli ezmede; uzun yassı şerit de seçenek.",
          "conditions": "Tam pişmiş olmalı; köfte için 74°C."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "İnce lifler, ince dilimler veya yumuşak köfte lokması.",
          "conditions": "Kıskaç kavrama gelişimine göre."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Küçük tavuk lokmaları, elle veya çatalla.",
          "conditions": "Sert küp ve kalın parça sunma."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "green-beans",
    "name": "Taze fasulye",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert, kılçıklı veya kısa yuvarlak fasulye kesitlerini küçük bebeğe sunmayın.",
    "slug": "green-beans",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Bütün, yumuşak pişmiş"
      },
      {
        "title": "+9 ay",
        "caption": "Bütün, yumuşak pişmiş"
      },
      {
        "title": "+12 ay",
        "caption": "Pişmiş küçük parçalar"
      },
      {
        "title": "+18 ay",
        "caption": "Pişmiş bütün veya parçalı"
      }
    ],
    "stages": {
      "6": "Uç ve kılçıkları ayıklayıp pişirin; bütün fasulyeyi sunun, gerekirse çatalla yassılaştırın.",
      "9": "6+ sunumunu sürdürün: bütün pişmiş fasulye, kısa yuvarlak kesitler değil.",
      "12": "İyice pişmiş fasulyeyi lokmalık parçalar halinde sunun.",
      "18": "Pişmiş bütün veya lokmalık fasulye; çiğneme becerisine göre uyarlayın."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/green-beans/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "taze-fasulye"
    ],
    "imagePath": "assets/serving/core50/green-beans.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/green-beans/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Bütün, pişmiş fasulye; gerekirse çatalla yassılaştırın.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Pişmiş lokmalık parçalar; çatal denemesi.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Bütün veya lokmalık pişmiş fasulye; beceriye göre doku ayarı.",
          "conditions": "Gelişimsel olarak ek gıdaya hazır olmalı."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "persimmon",
    "name": "Trabzon hurması",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert/ham hurma sunmayın. Türün olgunlaşma özelliğini kontrol edin.",
    "slug": "persimmon",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Çok yumuşak büyük dilim"
      },
      {
        "title": "+9 ay",
        "caption": "Çok yumuşak küçük lokma"
      },
      {
        "title": "+12 ay",
        "caption": "Çok yumuşak küçük lokma"
      },
      {
        "title": "+18 ay",
        "caption": "Beceri uygunsa yumuşak bütün"
      }
    ],
    "stages": {
      "6": "Fuyu türü çok yumuşaksa büyük dilim; Hachiya türü tamamen olgun ve kaşıkla alınır kıvamda olmalı.",
      "9": "Çekirdeği çıkarılmış, çok yumuşak küçük lokmalar.",
      "12": "9 ay biçimi sürer: çok yumuşak küçük lokmalar.",
      "18": "Bütün sunum yalnız tamamen yumuşak meyve ve yeterli yeme becerisiyle; kabuk rahatsız ederse soyun."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/persimmon/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "trabzon-hurmasi"
    ],
    "imagePath": "assets/serving/reviewed/persimmon.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/persimmon/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Çok yumuşak büyük dilim; Hachiya içi kaşıkla.",
          "conditions": "Türüne göre tam olgunlaşmalı; çekirdek çıkarılmalı."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Yumuşak küçük parça, ince dilim veya yarım.",
          "conditions": "Hachiya muhallebi kıvamında olmalı."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Bütün çok yumuşak meyve denenebilir.",
          "conditions": "Yeterli yeme becerisi ve yakın gözetim; rahatsız eden kabuk/tohum çıkarılır."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "radish",
    "name": "Turp",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert çiğ kalın dilim ve bütün küçük turp sunmayın.",
    "slug": "radish",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Yumuşak pişmiş ezme"
      },
      {
        "title": "+9 ay",
        "caption": "Pişmiş yumuşak çeyrek"
      },
      {
        "title": "+12 ay",
        "caption": "İncecik dilimler"
      },
      {
        "title": "+18 ay",
        "caption": "İncecik dilimler"
      }
    ],
    "stages": {
      "6": "Turpu çok yumuşayana dek pişirip ezin.",
      "9": "Kıskaç kavraması geliştiyse pişmiş yumuşak çeyrek veya ince dilim sunun.",
      "12": "İnce çiğ dilim veya rende; pişmiş lokmalar da olabilir.",
      "18": "12+ sunumunu sürdürün: ince dilim veya rende."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/radish/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "turp"
    ],
    "imagePath": "assets/serving/reviewed/radish.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/radish/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Çatalla delinecek kadar pişmiş ezme.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Pişmiş çeyrek veya ince dilim; az çiğ rende olabilir.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "İnce çiğ dilim/rende veya pişmiş lokmalar.",
          "conditions": "Beceriye göre uyarlayın."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "grape",
    "name": "Üzüm",
    "icon": "🍇",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 1,
    "avoid": "Bütün üzüm ve enine yuvarlak kesit sunma.",
    "slug": "grape",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş üzüm ezmesi"
      },
      {
        "title": "+9 ay",
        "caption": "Boyuna dört parça"
      },
      {
        "title": "+12 ay",
        "caption": "Boyuna dört parça"
      },
      {
        "title": "+18 ay",
        "caption": "Boyuna dört parça"
      }
    ],
    "stages": {
      "6": "Üzümü iyice pişirip ez veya sos yap; sert çekirdekleri çıkar.",
      "9": "Sapından tabanına boyuna dört parçaya ayır.",
      "12": "Boyuna dört parça sunumunu sürdür.",
      "18": "Boyuna dört parça sunumunu sürdür; bütün üzüm gösterilmez."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/grape/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [
      "uzum"
    ],
    "imagePath": "assets/serving/core50/grape.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/grape/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Patlayana kadar pişmiş üzüm veya sos.",
          "conditions": "İri ve sert çekirdekleri çıkar."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Sapından tabanına boyuna dört parça.",
          "conditions": "Büyük, uzun taneler tercih edilir."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Fotoğrafta boyuna yarım; yazıda boyuna dört parça da seçenek.",
          "conditions": "Boyuna çeyrek alternatif sürdürülebilir."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "Kaynak bütün üzüm denemesini beceri koşuluyla tartışıyor.",
          "conditions": "Genel sağlık önerilerinden daha erken; uygulamada kullanılmadı."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "Kaynak 12+ boyuna yarımı da gösterir. NHS dörde bölmeyi önerdiği için boyuna dört parça korunur.",
      "safetySourceUrl": "https://www.nhs.uk/best-start-in-life/baby/weaning/safe-weaning/preparing-food-safely/"
    },
    "coreServing": true
  },
  {
    "id": "sour-cherry",
    "name": "Vişne",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sap, çekirdek ve bütün yuvarlak meyve sunmayın.",
    "slug": "sour-cherry",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Çekirdeksiz, ezilmiş"
      },
      {
        "title": "+9 ay",
        "caption": "Çekirdeksiz, dörde bölünmüş"
      },
      {
        "title": "+12 ay",
        "caption": "Çekirdeksiz, dörde bölünmüş"
      },
      {
        "title": "+18 ay",
        "caption": "Çekirdeksiz, dörde bölünmüş"
      }
    ],
    "stages": {
      "6": "Çekirdeği ve sapı çıkarılmış vişneyi iyice pişirip ezin veya ince kıyın.",
      "9": "Çekirdeksiz, boyuna dörde bölünmüş ya da yassı ezilmiş vişne.",
      "12": "Çekirdeksiz dörde bölünmüş veya tamamen yassılaştırılmış vişne.",
      "18": "12 ay biçimini sürdürün; bütün yuvarlak meyveye otomatik geçmeyin."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/sour-cherry/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "visne"
    ],
    "imagePath": "assets/serving/expanded/sour-cherry.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/sour-cherry/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Çekirdeksiz iyice pişmiş veya çok ince kıyılmış.",
          "conditions": "Sap ve çekirdek kalmadığını kontrol edin."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Çekirdeksiz dörde bölünmüş veya yassı ezilmiş.",
          "conditions": "Kıskaç kavrama için."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Yassı disk veya dörde bölünmüş.",
          "conditions": "Çocuk hazırsa; gerekirse daha küçük kesilir."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "Kuru bütün vişne yalnız gelişmiş çiğnemeyle.",
          "conditions": "Azı dişleri ve dikkatli yeme."
        },
        {
          "minMonths": 36,
          "label": "36+ ay",
          "preparation": "Bütün meyve için beceri değerlendirmesi.",
          "conditions": "Otomatik güvenli yaş değildir."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "jerusalem-artichoke",
    "name": "Yer elması",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Sert çiğ kalın parçalar vermeyin; ilk sunumlarda küçük miktarla başlayın.",
    "slug": "jerusalem-artichoke",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Pişmiş püre"
      },
      {
        "title": "+9 ay",
        "caption": "Çatalla ezilmiş"
      },
      {
        "title": "+12 ay",
        "caption": "Yumuşak pişmiş parçalar"
      },
      {
        "title": "+18 ay",
        "caption": "Yumuşak pişmiş lokmalar"
      }
    ],
    "stages": {
      "6": "Yumuşak pişmiş iri dilim veya ezme sunun.",
      "9": "Kıskaç kavraması varsa küçük pişmiş lokmalar; ezme de olabilir.",
      "12": "Yumuşak pişmiş lokmalar sunun; çatal denenebilir.",
      "18": "12+ sunumunu sürdürün: pişmiş lokmalar veya ince rende."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/sunchoke-jerusalem-artichoke/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "yer-elmasi"
    ],
    "imagePath": "assets/serving/expanded/jerusalem-artichoke.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/sunchoke-jerusalem-artichoke/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Pişmiş büyük dilim veya ezme.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Pişmiş lokmalar; alternatif ezme.",
          "conditions": "Beceriye göre uyarlayın."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Pişmiş lokmalar veya ince çiğ dilim/rende.",
          "conditions": "Beceriye göre uyarlayın."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "peanut",
    "name": "Yer fıstığı",
    "icon": "🥜",
    "allergens": [
      "Yer fıstığı"
    ],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 2,
    "avoid": "Bütün fıstık, iri parça ve kalın ezme topağı sunma.",
    "slug": "peanut",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "İnceltilmiş pürüzsüz ezme"
      },
      {
        "title": "+9 ay",
        "caption": "Yemeğe karışmış ezme"
      },
      {
        "title": "+12 ay",
        "caption": "İncecik sürülmüş ezme"
      },
      {
        "title": "+18 ay",
        "caption": "İncecik sürülmüş ezme"
      }
    ],
    "stages": {
      "6": "Pürüzsüz, balsız ezmeyi suyla akışkanlaştır; kalın yapışkan kaşık dolusu verme.",
      "9": "İnceltilmiş ezmeyi nemli lapa veya yoğurda karıştır.",
      "12": "Pürüzsüz ezmeyi uygun ekmeğe çok ince sür.",
      "18": "İnce sürülmüş pürüzsüz ezmeyi sürdür."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/peanut/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [
      "yer-fistigi"
    ],
    "imagePath": "assets/serving/individual/peanut.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/peanut/",
      "sourceBands": [
        {
          "minMonths": 4,
          "label": "4+ yalnız özel hekim planı",
          "preparation": "İnceltilmiş pürüzsüz yer fıstığı ezmesi.",
          "conditions": "Yüksek alerji riskinde bireysel hekim planı."
        },
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Akışkan inceltilmiş ezme veya çok ince öğütülmüş fıstık nemli yemeğe.",
          "conditions": "Bal içermemeli."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Pürüzsüz ezme yemeğe karıştırılır veya çok ince sürülür.",
          "conditions": "Kalın topak sunma."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Pürüzsüz ezmeyi sürdür; kaynak ince sürülmüş parçalı ezmeye de izin verir.",
          "conditions": "Uygulamada pürüzsüz tercih edildi."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "Kaynak koşullu bütün fıstık pratiğini tartışır.",
          "conditions": "Uygulamada bütün fıstık kullanılmaz."
        }
      ],
      "basis": "mixed",
      "imageStatus": "keep",
      "note": "Kaynak 18+ parçalı ezmeyi de gösterir; sert parçaları önlemek için pürüzsüz ince sürülmüş ezme sürdürülür.",
      "safetySourceUrl": "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    }
  },
  {
    "id": "yogurt",
    "name": "Yoğurt",
    "icon": "🥛",
    "allergens": [
      "Süt"
    ],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 2,
    "avoid": "Pastörize olmayan süt ürünleri kullanma.",
    "slug": "yogurt",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Doldurulmuş kaşık"
      },
      {
        "title": "+9 ay",
        "caption": "Kaşığı kendi alsın"
      },
      {
        "title": "+12 ay",
        "caption": "Kaşıkla deneme"
      },
      {
        "title": "+18 ay",
        "caption": "Kendi kaşığıyla deneme"
      }
    ],
    "stages": {
      "6": "Pastörize, sade tam yağlı yoğurdu doldurulmuş kaşıkla veya elle sun.",
      "9": "Doldurulmuş kaşığı kendisinin almasına fırsat ver.",
      "12": "Kaşığı kase kenarına bırak; bağımsız alma denemesi yapabilir.",
      "18": "12+ sunumunu sürdür; kaşığı kendi doldurması bir zorunluluk değildir."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/yogurt/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [
      "yogurt"
    ],
    "imagePath": "assets/serving/core50/yogurt.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/yogurt/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Pastörize, sade tam yağlı yoğurt; elle veya dolu kaşıkla.",
          "conditions": "Koyu kıvam kaşıkta daha iyi durur."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Dolu kaşığı kendisi alabilir.",
          "conditions": "Yorulursa destek ver veya elle yemeye izin ver."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Dolu kaşık kase kenarında; bağımsız alma denemesi.",
          "conditions": "Beceri 2 yaştan sonra da gelişebilir."
        }
      ],
      "basis": "text",
      "imageStatus": "replaced",
      "note": "Kaynakta yaşa özel sunum fotoğrafı yok; yaş eşlemesi yazılı açıklamaya dayanır.",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "oats",
    "name": "Yulaf",
    "icon": "🌾",
    "allergens": [
      "Yulaf"
    ],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 0,
    "avoid": "12 aydan önce bal veya ballı yulaf ürünü kullanma.",
    "slug": "oatmeal",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "İyi pişmiş yulaf lapası"
      },
      {
        "title": "+9 ay",
        "caption": "Pütürlü, nemli lapa"
      },
      {
        "title": "+12 ay",
        "caption": "Kaşıkla lapa denemesi"
      },
      {
        "title": "+18 ay",
        "caption": "Kaşık pratiği"
      }
    ],
    "stages": {
      "6": "Yulafı yumuşak pişir; kaşıkta duran nemli lapa sun.",
      "9": "Pütürlü, nemli yulaf lapasını sürdür.",
      "12": "Kaşıkla lapa denemesine fırsat ver; elle yemesi de uygundur.",
      "18": "12+ sunumunu sürdür; kaşık becerisinde baskı yapma."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/oatmeal/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [
      "yulaf"
    ],
    "imagePath": "assets/serving/core50/oats.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/oatmeal/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Su veya uygun sütle pişmiş, kaşıkta duran yulaf lapası.",
          "conditions": "12 aydan önce bal ekleme."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Lapa veya tutulabilir yumuşak yulaf topu.",
          "conditions": "Sert top/kurabiye değil."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Yulaf lapasıyla kaşık pratiği.",
          "conditions": "Elle yemesi de kabul edilir."
        }
      ],
      "basis": "text",
      "imageStatus": "replaced",
      "note": "Kaynakta yaşa özel sunum fotoğrafı yok; yaş eşlemesi yazılı açıklamaya dayanır.",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "egg-single",
    "name": "Yumurta",
    "icon": "🥚",
    "allergens": [
      "Yumurta"
    ],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 2,
    "avoid": "Çiğ veya akışkan yumurta sunma.",
    "slug": "eggs",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Tam pişmiş omlet şeridi"
      },
      {
        "title": "+9 ay",
        "caption": "Küçük omlet parçaları"
      },
      {
        "title": "+12 ay",
        "caption": "Çatal için yumurta"
      },
      {
        "title": "+18 ay",
        "caption": "Tam pişmiş lokmalar"
      }
    ],
    "stages": {
      "6": "İlk tanıtmada az miktar tam pişmiş yumurta ezmesi; ardından kalın omlet şeridi.",
      "9": "Tam pişmiş omleti küçük parçalara ayır.",
      "12": "Küçük tam pişmiş yumurta parçalarıyla çatal denenebilir.",
      "18": "12+ sunumunu sürdür; sarı ve beyaz tamamen pişsin."
    },
    "aliases": [
      "Yumurta sarısı",
      "Yumurta beyazı",
      "İyi pişmiş yumurta"
    ],
    "sourceUrls": [
      "https://solidstarts.com/foods/eggs/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Sarısı ve beyazı iyi pişmiş yumurta yaklaşık 6 aydan itibaren tanıtılabilir; beyazını 12 aya ertelemek gerekmez. Yalnız sarısını denemek beyazını da denemiş olmak değildir.",
    "ingredientIds": [
      "yumurta"
    ],
    "imagePath": "assets/serving/core50/egg-single.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/eggs/",
      "sourceBands": [
        {
          "minMonths": 4,
          "label": "4+ yalnız özel hekim planı",
          "preparation": "Tam pişmiş sarı ve beyazdan az miktar ezme.",
          "conditions": "Yüksek alerji riskinde hekim yönlendirmesi ve hazır oluş."
        },
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "İlk tanıtmada tam pişmiş ezme; sonrasında omlet şeridi.",
          "conditions": "Sarı ve beyaz birlikte tam pişmeli."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "Küçük omlet, çırpılmış veya haşlanmış yumurta parçaları.",
          "conditions": "Kıskaç kavrama; kuru sarıyı nemlendir."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Küçük pişmiş parçalarla çatal veya yumurta muffin.",
          "conditions": "Tam pişmiş olmalı."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "4 ay önerisi genel başlangıç değil; yalnız bireysel hekim planıdır.",
      "safetySourceUrl": ""
    },
    "coreServing": true
  },
  {
    "id": "ginger",
    "name": "Zencefil",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Kalın sert kök parçası verme; takviye veya kür olarak kullanma.",
    "slug": "ginger",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Az miktarda; yemek içinde"
      },
      {
        "title": "+9 ay",
        "caption": "Az miktarda; yemek içinde"
      },
      {
        "title": "+12 ay",
        "caption": "Az miktarda; yemek içinde"
      },
      {
        "title": "+18 ay",
        "caption": "Az miktarda; yemek içinde"
      }
    ],
    "stages": {
      "6": "Çok az rendelenmiş veya toz zencefili yemeğe karıştır.",
      "9": "6 ay hazırlığı sürer; yemeğe az miktarda ekle.",
      "12": "Yemekte rendelenmiş veya toz zencefil sürebilir; kalın sert parça bırakma.",
      "18": "Yemek içinde kullanmaya devam et; miktarı tadına göre az tut."
    },
    "aliases": [
      "Toz zencefil"
    ],
    "sourceUrls": [
      "https://solidstarts.com/foods/ginger/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Tek başına tadım öğünü değil; yemeğe çok az aroma olarak.",
    "ingredientIds": [
      "zencefil"
    ],
    "imagePath": "assets/serving/expanded/ginger.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/ginger/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Az rendelenmiş veya toz zencefil yemeğe karışmış.",
          "conditions": "Keskin tada göre çok az."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "Rendelenmiş/toz; ince dilim de kaynakta mümkün.",
          "conditions": "Kalın sert parça değil."
        },
        {
          "minMonths": 18,
          "label": "18+ ay",
          "preparation": "Yemeklerde zencefile devam.",
          "conditions": "Ayrı bir kesim zorunlu değil."
        }
      ],
      "basis": "text",
      "imageStatus": "keep",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "olive",
    "name": "Zeytin",
    "icon": "",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık 6 ayda, ek gıdaya hazır oluş ve uygun sunumla",
    "source": 0,
    "avoid": "Bütün zeytin ve çekirdek sunmayın; tuzu düşük olanı seçin.",
    "slug": "olive",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Çekirdeksiz, çok ince kıyılmış"
      },
      {
        "title": "+9 ay",
        "caption": "Çekirdeksiz ince halkalar"
      },
      {
        "title": "+12 ay",
        "caption": "Çekirdeksiz, boyuna dörde"
      },
      {
        "title": "+18 ay",
        "caption": "Çekirdeksiz, boyuna dörde"
      }
    ],
    "stages": {
      "6": "Çekirdeksiz çok ince kıyılmış zeytini yumuşak yemeğe karıştırın.",
      "9": "Çekirdeği tamamen çıkarılmış ince zeytin halkaları.",
      "12": "Çekirdeksiz zeytini boyuna dörde bölün veya ince halka yapın.",
      "18": "12 ay biçimi sürer: çekirdeksiz dörtte birler veya ince halkalar."
    },
    "aliases": [],
    "sourceUrls": [
      "https://solidstarts.com/foods/olives/",
      "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Yaklaşık 6 ayda hazır oluşla başlanabilir. 9+ etiketi o döneme ait sunum örneğini anlatır; bu aya kadar bekleme kuralı değildir.",
    "ingredientIds": [
      "zeytin"
    ],
    "imagePath": "assets/serving/reviewed/olive.webp",
    "imageAspect": 0.8002853067047075,
    "servingReview": {
      "status": "verified",
      "checkedAt": "2026-10-19",
      "sourceUrl": "https://solidstarts.com/foods/olives/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Çekirdeksiz çok ince kıyılmış/ezilmiş, yemeğe karışmış.",
          "conditions": "Çekirdek kalmadığını kontrol edin."
        },
        {
          "minMonths": 9,
          "label": "9+ ay",
          "preparation": "İnce halkalar.",
          "conditions": "Çekirdeksiz."
        },
        {
          "minMonths": 12,
          "label": "12+ ay",
          "preparation": "İnce halka veya boyuna yarım/dörtte bir.",
          "conditions": "Çekirdeksiz."
        },
        {
          "minMonths": 24,
          "label": "24+ ay",
          "preparation": "Bütün çekirdeksiz yalnız uygun beceriyle.",
          "conditions": "Ağzı doldurmadan iyi çiğnemeli."
        },
        {
          "minMonths": 36,
          "label": "36+ ay",
          "preparation": "Çekirdekliyle çalışma ancak ileri beceriyle.",
          "conditions": "Otomatik güvenli yaş değildir."
        }
      ],
      "basis": "mixed",
      "imageStatus": "replaced",
      "note": "",
      "safetySourceUrl": ""
    }
  },
  {
    "id": "white-beans",
    "name": "Beyaz fasulye",
    "icon": "🥣",
    "allergens": [],
    "min": 6,
    "start": "Yaklaşık +6 ay ve ek gıdaya hazır oluş",
    "source": 1,
    "avoid": "Çiğ, az pişmiş veya sert bütün fasulye vermeyin.",
    "slug": "cannellini-beans",
    "steps": [
      {
        "title": "+6 ay",
        "caption": "Tam pişmiş, ezilmiş fasulye"
      },
      {
        "title": "+9 ay",
        "caption": "Tam pişmiş, ezilmiş fasulye"
      },
      {
        "title": "+12 ay",
        "caption": "Tam pişmiş, ezilmiş fasulye"
      },
      {
        "title": "+18 ay",
        "caption": "Tam pişmiş, ezilmiş fasulye"
      }
    ],
    "stages": {
      "6": "Tam pişmiş, çok yumuşak fasulyeyi ezin; kuru veya yapışkan kalırsa suyla kıvamını açın.",
      "9": "Tam pişmiş, çok yumuşak fasulyeyi ezin; kuru veya yapışkan kalırsa suyla kıvamını açın.",
      "12": "Tam pişmiş, çok yumuşak fasulyeyi ezin; kuru veya yapışkan kalırsa suyla kıvamını açın.",
      "18": "Tam pişmiş, çok yumuşak fasulyeyi ezin; kuru veya yapışkan kalırsa suyla kıvamını açın."
    },
    "aliases": [
      "Kuru fasulye"
    ],
    "sourceUrls": [
      "https://solidstarts.com/foods/cannellini-beans/"
    ],
    "reviewedAt": "2026-10-19",
    "requiresReview": false,
    "ageBand": "before12",
    "ageLabel": "6+ · uygun sunumla",
    "introNote": "Başlangıç yaklaşık 6 ay ve hazır oluşa göredir. 9, 12 ve 18 ay etiketleri sunum örnekleridir; bir gıdanın o aya kadar yasak olduğu anlamına gelmez.",
    "ingredientIds": [
      "beyaz-fasulye"
    ],
    "imagePath": "assets/serving/core50/white-beans.webp",
    "imageAspect": 0.6666666666666666,
    "servingReview": {
      "status": "verified",
      "sourceUrl": "https://solidstarts.com/foods/cannellini-beans/",
      "sourceBands": [
        {
          "minMonths": 6,
          "label": "6+ ay",
          "preparation": "Tam pişmiş, çok yumuşak fasulyeyi ezin; kuru veya yapışkan kalırsa suyla kıvamını açın.",
          "conditions": "Hazır oluş ve uygun kıvam."
        }
      ],
      "basis": "text",
      "imageStatus": "replaced",
      "checkedAt": "2026-10-24",
      "note": "",
      "safetySourceUrl": ""
    },
    "coreServing": true
  }
];
const SERVING_ATLAS = Object.fromEntries(FOOD_CATALOG.map(f=>[f.name,{id:f.id,steps:f.steps}]));
const FOOD_AGE_GUIDE = Object.fromEntries(FOOD_CATALOG.map(f=>[f.id,{start:f.start,stages:f.stages,sources:f.sourceUrls}]));
