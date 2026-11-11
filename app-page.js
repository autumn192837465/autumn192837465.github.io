/* App pages: language switch, the visitor's store first, and a back button only for visitors who came from the homepage. */
(() => {
  const languages = ["en", "zh-TW", "ja"];
  const shared = {
    en: { skip: "Skip to content", back: "Back", languageLabel: "Language", downloadOn: "Download on the", getItOn: "Get it on",
      screensTitle: "Screens", featuresTitle: "What it does", factsTitle: "Before you download",
      factPrice: "Price", factDevices: "Works on", factLanguages: "Languages", factData: "Your data", factNote: "Good to know",
      qrHint: "On a computer? Scan with your phone's camera.", footer: "Made by Liu Chuan Feng in Tokyo." },
    "zh-TW": { skip: "跳到內容", back: "返回", languageLabel: "語言", downloadOn: "前往下載", getItOn: "前往下載",
      screensTitle: "畫面", featuresTitle: "功能", factsTitle: "下載前須知",
      factPrice: "價格", factDevices: "支援裝置", factLanguages: "語言", factData: "資料", factNote: "注意事項",
      qrHint: "在電腦上看？用手機相機掃描即可下載。", footer: "由 Liu Chuan Feng 在東京製作。" },
    ja: { skip: "本文へ移動", back: "戻る", languageLabel: "言語", downloadOn: "ダウンロード", getItOn: "ダウンロード",
      screensTitle: "画面", featuresTitle: "できること", factsTitle: "ダウンロードの前に",
      factPrice: "価格", factDevices: "対応端末", factLanguages: "言語", factData: "データ", factNote: "ご注意",
      qrHint: "パソコンで見ている方は、スマホのカメラで読み取ってください。", footer: "東京で Liu Chuan Feng が制作しました。" },
  };
  const copy = JSON.parse(document.getElementById("copy").textContent);

  const normalize = (value) => {
    const v = String(value || "").toLowerCase();
    if (v.startsWith("zh")) return "zh-TW";
    if (v.startsWith("ja")) return "ja";
    return "en";
  };
  const initial = () => {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl) return normalize(fromUrl);
    try {
      const saved = localStorage.getItem("portfolio-language");
      if (languages.includes(saved)) return saved;
    } catch { /* storage may be blocked */ }
    return normalize(navigator.languages?.[0] || navigator.language);
  };

  function setLanguage(language) {
    const lang = languages.includes(language) ? language : "en";
    const text = (key) => copy[lang]?.[key] ?? shared[lang][key] ?? copy.en[key] ?? shared.en[key];
    document.documentElement.lang = lang;
    document.title = text("pageTitle");
    document.querySelector('meta[name="description"]')?.setAttribute("content", text("pageDescription"));
    document.querySelectorAll("[data-i18n]").forEach((el) => { const v = text(el.dataset.i18n); if (v) el.textContent = v; });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => { const v = text(el.dataset.i18nAlt); if (v) el.alt = v; });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => { const v = text(el.dataset.i18nAria); if (v) el.setAttribute("aria-label", v); });
    document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    try { localStorage.setItem("portfolio-language", lang); } catch { /* fine without storage */ }
  }

  // Put the visitor's own store first.
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) document.documentElement.classList.add("is-android");
  else if (/iphone|ipad|ipod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) document.documentElement.classList.add("is-ios");

  // The back button exists only for someone who arrived from the homepage; a shared link shows just the app.
  const back = document.querySelector(".ap-back");
  let referrer = null;
  try { referrer = document.referrer ? new URL(document.referrer) : null; } catch { referrer = null; }
  const fromHome = !!referrer && referrer.origin === location.origin && /^\/(index\.html)?$/.test(referrer.pathname);
  if (back && fromHome) {
    back.hidden = false;
    back.addEventListener("click", (event) => {
      if (history.length > 1) { event.preventDefault(); history.back(); }
    });
  }

  document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => setLanguage(b.dataset.lang)));
  setLanguage(initial());
})();
