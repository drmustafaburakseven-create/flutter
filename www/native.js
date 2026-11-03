/* iPhone uygulamasına özel köprü.
 * - Verileri iOS'un kalıcı deposunda (Preferences) da saklar; iOS tarayıcı
 *   önbelleğini temizlese bile profiller ve kayıtlar geri yüklenir.
 * - Pişirme sayacı bitince telefon kilitliyken de bildirim gösterir.
 * Web'de (Capacitor yokken) hiçbir şey yapmaz, yalnız uygulama dosyalarını yükler. */
(function () {
  "use strict";
  const APP_SCRIPTS = [
    "profile-logic.js",
    "food-catalog.js",
    "meal-logic.js",
    "game-logic.js",
    "portion-logic.js",
    "tasting-logic.js",
    "serving-frame.js",
    "tasting-ui.js",
    "journey.js",
    "flow-logic.js",
    "swipe.js",
    "meal-rail.js",
    "story-share.js",
    "app.js",
  ];
  const PREFIX = "mm-preview-";
  const TIMER_NOTIFICATION_ID = 4101;
  const cap = window.Capacitor;
  const native = !!(cap && cap.isNativePlatform && cap.isNativePlatform() && cap.nativePromise);
  const call = (plugin, method, options = {}) => cap.nativePromise(plugin, method, options);

  function loadScripts() {
    for (const src of APP_SCRIPTS) {
      const s = document.createElement("script");
      s.src = src;
      s.async = false; // sırayla çalıştır
      document.body.appendChild(s);
    }
  }

  let notificationsAllowed = null;
  async function canNotify() {
    if (notificationsAllowed !== null) return notificationsAllowed;
    try {
      let { display } = await call("LocalNotifications", "checkPermissions");
      if (display === "prompt" || display === "prompt-with-rationale")
        ({ display } = await call("LocalNotifications", "requestPermissions"));
      notificationsAllowed = display === "granted";
    } catch {
      notificationsAllowed = false;
    }
    return notificationsAllowed;
  }

  window.MMNative = {
    native,
    // Sayaç durumu her değiştiğinde çağrılır: çalışıyorsa bitiş anına
    // bildirim kurar, değilse kurulu bildirimi siler.
    async syncTimer(timer, title) {
      if (!native) return;
      try {
        await call("LocalNotifications", "cancel", { notifications: [{ id: TIMER_NOTIFICATION_ID }] });
        if (!timer || !timer.running || timer.endAt <= Date.now() + 1000) return;
        if (!(await canNotify())) return;
        await call("LocalNotifications", "schedule", {
          notifications: [
            {
              id: TIMER_NOTIFICATION_ID,
              title: "Süre doldu",
              body: (title ? title + " · " : "") + "Yemeğin pişmesini kontrol et.",
              schedule: { at: new Date(timer.endAt).toISOString(), allowWhileIdle: true },
            },
          ],
        });
      } catch {
        /* Bildirim kurulamazsa sayaç uygulama içinde çalışmaya devam eder. */
      }
    },
  };

  if (!native) {
    loadScripts();
    return;
  }

  document.documentElement.classList.add("native-app");

  const setItem = Storage.prototype.setItem;
  const removeItem = Storage.prototype.removeItem;
  Storage.prototype.setItem = function (key, value) {
    setItem.call(this, key, value);
    if (this === window.localStorage && String(key).startsWith(PREFIX))
      call("Preferences", "set", { key: String(key), value: String(value) }).catch(() => {});
  };
  Storage.prototype.removeItem = function (key) {
    removeItem.call(this, key);
    if (this === window.localStorage && String(key).startsWith(PREFIX))
      call("Preferences", "remove", { key: String(key) }).catch(() => {});
  };

  // Uygulama açılırken kalıcı depodaki kayıtları geri yükle, sonra ekranları başlat.
  (async () => {
    try {
      const { keys = [] } = await call("Preferences", "keys");
      const saved = keys.filter((k) => k.startsWith(PREFIX));
      if (saved.length) {
        for (const key of saved) {
          const { value } = await call("Preferences", "get", { key });
          if (value !== null && value !== undefined) setItem.call(localStorage, key, value);
        }
      } else {
        // İlk açılış: önceki sürümün tarayıcı deposundaki kayıtları kalıcı depoya taşı.
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith(PREFIX))
            await call("Preferences", "set", { key, value: localStorage.getItem(key) });
        }
      }
    } catch {
      /* Kalıcı depo okunamazsa tarayıcı deposuyla devam edilir. */
    }
    loadScripts();
  })();
})();
