(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.MMGame = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  const avatars = [
    {
      id: "spoon",
      name: "Minik Kaşık",
      xp: 0,
      src: "assets/avatars-2d/spoon.webp",
    },
    {
      id: "carrot-baby",
      name: "Havuç Dostu",
      xp: 0,
      src: "assets/avatars-2d/carrot-baby.webp",
    },
    {
      id: "yogurt-baby",
      name: "Yoğurt Neşesi",
      xp: 0,
      src: "assets/avatars-2d/yogurt-baby.webp",
    },
    {
      id: "banana-baby",
      name: "Muz Kaşifi",
      xp: 0,
      src: "assets/avatars-2d/banana-baby.webp",
    },
    {
      id: "broccoli-baby",
      name: "Brokoli Dostu",
      xp: 40,
      src: "assets/avatars-2d/broccoli-baby.webp",
    },
    {
      id: "avocado-baby",
      name: "Avokado Kaşifi",
      xp: 80,
      src: "assets/avatars-2d/avocado-baby.webp",
    },
    {
      id: "blue-baby",
      name: "Mavi Önlük",
      xp: 140,
      src: "assets/avatars-2d/blue-baby.webp",
    },
    {
      id: "pink-baby",
      name: "Pembe Kaşık",
      xp: 220,
      src: "assets/avatars-2d/pink-baby.webp",
    },
    {
      id: "rainbow-baby",
      name: "Renkli Sofra",
      xp: 320,
      src: "assets/avatars-2d/rainbow-baby.webp",
    },
    {
      id: "gold-baby",
      name: "Altın Kaşık",
      xp: 450,
      src: "assets/avatars-2d/gold-baby.webp",
    },
  ];
  const rewards = [
    { id: "mola-omlet", xp: 60, title: "Renkli omlet şeritleri" },
    { id: "mola-mucver", xp: 160, title: "Havuçlu lorlu mücver" },
    { id: "mola-pankek", xp: 300, title: "Armutlu muzlu mini pankek" },
  ];
  const chapters = [
    { id: "hello", xp: 0, title: "Sofraya merhaba", icon: "☀", section: 0 },
    { id: "explore", xp: 40, title: "Küçük keşifler", icon: "✦", section: 1 },
    { id: "colors", xp: 100, title: "Renkli tatlar", icon: "✿", section: 2 },
    { id: "spoon", xp: 200, title: "Kaşık macerası", icon: "🥄", section: 3 },
    {
      id: "together",
      xp: 350,
      title: "Birlikte sofrada",
      icon: "♥",
      section: 4,
    },
    { id: "explorer", xp: 500, title: "Sofra kaşifi", icon: "★", section: 5 },
  ];

  const skillBadges = [
    ["hand", "Minik Eller", "✋"],
    ["lumps", "Yumuşak Lokma", "☁"],
    ["pincer", "İki Parmak", "✌"],
    ["spoon", "Kaşık Dostu", "🥄"],
    ["cup", "Bardak Dostu", "🥛"],
  ];
  const outcomes = ["Dokundu", "Kokladı", "Tattı", "Bugün istemedi"];
  const decorations = [
    {
      id: "sun",
      name: "Güneş çıkartması",
      xp: 100,
      kind: "sticker",
      symbol: "☀",
      color: "#fff0b9",
    },
    {
      id: "garden",
      name: "Minik bahçe",
      xp: 200,
      kind: "background",
      symbol: "✿",
      color: "#e7f1ed",
    },
  ];
  function day(now = new Date()) {
    return [now.getFullYear(), now.getMonth() + 1, now.getDate()]
      .map((x, i) => (i ? String(x).padStart(2, "0") : x))
      .join("-");
  }
  function weekStart(now = new Date()) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
    return day(d);
  }
  function foodRecord(g, t) {
    if (t.kind !== "food") return;
    const f = g.foods[t.item] || (g.foods[t.item] = {});
    if (t.outcome === "Tattı") {
      f.firstTasted =
        f.firstTasted && f.firstTasted < t.date ? f.firstTasted : t.date;
      f.lastTasted =
        !f.lastTasted || f.lastTasted < t.date ? t.date : f.lastTasted;
    }
    if (!f.lastDate || f.lastDate <= t.date) {
      f.lastDate = t.date;
      f.outcome = t.outcome;
      f.note = t.note || "";
      f.stage = t.stage || null;
    }
  }
  function ensure(p) {
    if (!p.game || typeof p.game !== "object" || Array.isArray(p.game))
      p.game = {};
    const g = p.game;
    g.xp = Number.isFinite(g.xp) ? Math.max(0, Math.floor(g.xp)) : 0;
    for (const k of ["claimed", "skillBadges", "lessons", "foods"])
      if (!g[k] || typeof g[k] !== "object" || Array.isArray(g[k])) g[k] = {};
    for (const k of ["days", "trials", "observationDays"])
      if (!Array.isArray(g[k])) g[k] = [];
    if (g.version !== 2) {
      for (const t of g.trials) {
        if (!t || !outcomes.includes(t.outcome)) continue;
        foodRecord(g, t);
        if (g.claimed["firstTrial:" + t.date])
          g.claimed["observation:" + t.date] = t.date;
        if (!g.observationDays.includes(t.date)) g.observationDays.push(t.date);
      }
      g.version = 2;
    }
    return g;
  }
  function award(g, key, points, date) {
    if (g.claimed[key]) return false;
    g.claimed[key] = date;
    g.xp += points;
    if (!g.days.includes(date)) g.days.push(date);
    return true;
  }
  // Opening the app or reporting faster development never earns points.
  function visit(p) {
    const changed = p.game?.version !== 2;
    ensure(p);
    return changed;
  }
  function syncSkills(p) {
    return visit(p);
  }
  function act(p, type, now = new Date()) {
    if (type !== "review") return false;
    const date = day(now);
    return award(ensure(p), "review-month:" + date.slice(0, 7), 10, date);
  }
  function readFood(p, id, now = new Date()) {
    if (typeof id !== "string" || !id) return false;
    return award(ensure(p), "food-guide:" + id, 5, day(now));
  }
  function lesson(p, id, now = new Date()) {
    const g = ensure(p);
    if (!chapters.some((x) => x.id === id) || g.lessons[id]) return false;
    const date = day(now);
    g.lessons[id] = date;
    return award(g, "lesson:" + id, 5, date);
  }
  function trial(p, kind, item, outcome, now = new Date(), options = {}) {
    if (
      !["food", "recipe"].includes(kind) ||
      typeof item !== "string" ||
      !item ||
      item.length > 100 ||
      !outcomes.includes(outcome)
    )
      return { status: "invalid", points: 0 };
    const g = ensure(p),
      date = day(now),
      before = JSON.parse(JSON.stringify(g));
    const existing = g.trials.find(
      (x) => x.date === date && x.kind === kind && x.item === item,
    );
    const record = {
      date,
      kind,
      item,
      outcome,
      note: typeof options.note === "string" ? options.note.slice(0, 300) : "",
      stage: options.stage || null,
    };
    if (existing) Object.assign(existing, record);
    else g.trials.push(record);
    foodRecord(g, record);
    g.trials = g.trials.slice(-300);
    if (!g.observationDays.includes(date)) g.observationDays.push(date);
    award(g, "observation:" + date, 10, date);
    const start = weekStart(now),
      count = new Set(g.observationDays.filter((d) => d >= start && d <= date))
        .size;
    if (count >= 3) award(g, "week-observations:" + start, 10, date);
    return {
      status: existing ? "updated" : "added",
      points: g.xp - before.xp,
      undo: { before, after: JSON.stringify(g) },
    };
  }
  function undoTrial(p, receipt) {
    if (!receipt || JSON.stringify(ensure(p)) !== receipt.after) return false;
    p.game = JSON.parse(JSON.stringify(receipt.before));
    return true;
  }
  function tasted(p, id) {
    return !!p && !!ensure(p).foods[id]?.firstTasted;
  }
  function avatar(id, xp = 0) {
    return avatars.find((a) => a.id === id && a.xp <= xp) || avatars[0];
  }
  function unlocked(recipe, p) {
    return !recipe.unlockAt || (!!p && ensure(p).xp >= recipe.unlockAt);
  }
  function streak(p, now = new Date()) {
    if (!p) return 0;
    const dates = new Set(ensure(p).observationDays),
      cursor = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (!dates.has(day(cursor))) cursor.setDate(cursor.getDate() - 1);
    let n = 0;
    while (dates.has(day(cursor)) && n < 366) {
      n++;
      cursor.setDate(cursor.getDate() - 1);
    }
    return n;
  }
  function week(p, now = new Date()) {
    const dates = new Set(p ? ensure(p).observationDays : []),
      start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      return {
        date: day(d),
        label: ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"][i],
        done: dates.has(day(d)),
        today: day(d) === day(now),
      };
    });
  }
  function badges(p) {
    if (!p) return [];
    const g = ensure(p),
      out = [];
    if (g.observationDays.length)
      out.push({
        id: "first-note",
        name: "İlk sofra notumuz",
        icon: "✦",
        kind: "Birlikte gözlemledik",
      });
    if (g.observationDays.length >= 3)
      out.push({
        id: "three-days",
        name: "Üç küçük mola",
        icon: "☀",
        kind: "Üç ayrı günde gözlem",
      });
    const seen = new Set();
    let repeat = false;
    for (const t of g.trials) {
      const k = t.kind + ":" + t.item;
      if (seen.has(k)) repeat = true;
      seen.add(k);
    }
    if (repeat)
      out.push({
        id: "again",
        name: "Yeniden keşfettik",
        icon: "↶",
        kind: "Aynı tada başka gün döndük",
      });
    if (
      Object.keys(g.lessons).length ||
      Object.keys(g.claimed).some((k) => k.startsWith("food-guide:"))
    )
      out.push({
        id: "learned",
        name: "Birlikte öğrendik",
        icon: "✿",
        kind: "Bir sunum bilgisi keşfi",
      });
    for (const [id, name, icon] of skillBadges)
      if (g.skillBadges[id])
        out.push({ id, name, icon, kind: "Önceden kazanılan rozet" });
    return out;
  }
  function nextReward(p) {
    const xp = p ? ensure(p).xp : 0;
    return (
      [
        ...avatars
          .filter((a) => a.xp > 0)
          .map((a) => ({ ...a, kind: "avatar" })),
        ...decorations,
      ]
        .filter((a) => a.xp > xp)
        .sort((a, b) => a.xp - b.xp)[0] || null
    );
  }
  return {
    avatars,
    rewards,
    chapters,
    skillBadges,
    outcomes,
    decorations,
    day,
    ensure,
    visit,
    act,
    readFood,
    syncSkills,
    lesson,
    trial,
    undoTrial,
    tasted,
    avatar,
    unlocked,
    streak,
    week,
    badges,
    nextReward,
  };
});
