const translations = {
  en: {
    skip: "Skip to content",
    navAbout: "About",
    navExperience: "Experience",
    navEducation: "Education",
    navContact: "Contact",
    heroEyebrow: "Unity Engineer · Tokyo, Japan",
    heroTitle: "Unity Engineer",
    heroDescription: "Building reliable game systems and polished player experiences for mobile games.",
    viewExperience: "View experience",
    photoLater: "Photo coming later",
    aboutTitle: "About",
    aboutParagraph1: "I am a Unity Engineer based in Japan. I studied Computer Science at National Chiao Tung University and started learning Unity as a personal interest during university.",
    aboutParagraph2: "After graduating, I began my career as a software engineer before moving to Japan to work professionally in game development. I have experience developing both in-game and out-game features for mobile games.",
    aboutParagraph3: "Creating games remains one of my main interests outside of work. I communicate in Chinese, Japanese, and English.",
    locationLabel: "Location",
    skillsLabel: "Core skills",
    languagesLabel: "Languages",
    languagesValue: "Chinese · Japanese · English",
    experienceTitle: "Experience",
    present: "Present",
    projectLabel: "Project",
    limitBreakDescription: "Developing in-game and out-game features, including gameplay systems, user interfaces, and supporting game flows in an international development environment.",
    rudelDescription: "Developed and maintained mobile game features with Unity across gameplay, user interface, and live-service systems.",
    educationTitle: "Education",
    nctuName: "National Chiao Tung University",
    nctuDegree: "Bachelor's Degree in Computer Science",
    kindaiName: "Kindai University",
    kindaiProgram: "Exchange Student",
    contactTitle: "Let's connect",
    contactDescription: "For professional opportunities or collaboration, please reach out through LinkedIn.",
    footerText: "Built as a multilingual personal portfolio."
  },
  "zh-TW": {
    skip: "跳至主要內容",
    navAbout: "關於我",
    navExperience: "工作經歷",
    navEducation: "學歷",
    navContact: "聯絡方式",
    heroEyebrow: "Unity 工程師 · 日本東京",
    heroTitle: "Unity 工程師",
    heroDescription: "專注於打造可靠的遊戲系統與精緻的行動遊戲體驗。",
    viewExperience: "查看工作經歷",
    photoLater: "之後加入照片",
    aboutTitle: "關於我",
    aboutParagraph1: "我是一名在日本工作的 Unity 工程師。我畢業於國立交通大學資訊工程學系，並在大學期間因個人興趣開始學習 Unity。",
    aboutParagraph2: "畢業後，我先以軟體工程師身分開始職涯，之後前往日本投入專業遊戲開發。我具有行動遊戲 In-game 與 Out-game 功能的開發經驗。",
    aboutParagraph3: "工作之外，製作遊戲也是我主要的興趣之一。我能使用中文、日文與英文溝通。",
    locationLabel: "所在地",
    skillsLabel: "核心技能",
    languagesLabel: "語言",
    languagesValue: "中文 · 日文 · 英文",
    experienceTitle: "工作經歷",
    present: "現在",
    projectLabel: "專案",
    limitBreakDescription: "在國際化開發環境中，負責 In-game 與 Out-game 功能，包括遊戲系統、使用者介面及相關遊戲流程的開發。",
    rudelDescription: "使用 Unity 開發與維護行動遊戲功能，涵蓋遊戲玩法、使用者介面及營運中遊戲系統。",
    educationTitle: "學歷",
    nctuName: "國立交通大學",
    nctuDegree: "資訊工程學系 學士",
    kindaiName: "近畿大學",
    kindaiProgram: "交換學生",
    contactTitle: "保持聯絡",
    contactDescription: "如有工作機會或合作需求，歡迎透過 LinkedIn 與我聯絡。",
    footerText: "三語個人品牌與履歷網站。"
  },
  ja: {
    skip: "メインコンテンツへ移動",
    navAbout: "プロフィール",
    navExperience: "職務経歴",
    navEducation: "学歴",
    navContact: "お問い合わせ",
    heroEyebrow: "Unityエンジニア · 東京",
    heroTitle: "Unityエンジニア",
    heroDescription: "信頼性の高いゲームシステムと、完成度の高いモバイルゲーム体験を開発しています。",
    viewExperience: "職務経歴を見る",
    photoLater: "写真は後日追加予定",
    aboutTitle: "プロフィール",
    aboutParagraph1: "日本で働くUnityエンジニアです。国立交通大学でコンピュータサイエンスを学び、大学時代に趣味としてUnityを学び始めました。",
    aboutParagraph2: "卒業後はソフトウェアエンジニアとしてキャリアを開始し、その後日本へ移り、ゲーム開発に携わっています。モバイルゲームのインゲーム・アウトゲーム機能の開発経験があります。",
    aboutParagraph3: "ゲーム制作は仕事以外でも続けている大切な趣味の一つです。中国語、日本語、英語でコミュニケーションができます。",
    locationLabel: "所在地",
    skillsLabel: "主なスキル",
    languagesLabel: "言語",
    languagesValue: "中国語 · 日本語 · 英語",
    experienceTitle: "職務経歴",
    present: "現在",
    projectLabel: "プロジェクト",
    limitBreakDescription: "国際的な開発環境で、ゲームシステム、UI、関連するゲームフローを含むインゲーム・アウトゲーム機能の開発を担当しています。",
    rudelDescription: "Unityを用いたモバイルゲームの機能開発と運用を担当し、ゲームプレイ、UI、運用中のゲームシステムに携わりました。",
    educationTitle: "学歴",
    nctuName: "国立交通大学",
    nctuDegree: "情報工学 学士",
    kindaiName: "近畿大学",
    kindaiProgram: "交換留学生",
    contactTitle: "お問い合わせ",
    contactDescription: "仕事やコラボレーションのご相談は、LinkedInよりご連絡ください。",
    footerText: "多言語対応の個人ポートフォリオサイト。"
  }
};

const supportedLanguages = ["en", "zh-TW", "ja"];

function normalizeLanguage(language) {
  const value = (language || "").toLowerCase();
  if (value.startsWith("zh")) return "zh-TW";
  if (value.startsWith("ja")) return "ja";
  return "en";
}

function setLanguage(language) {
  const selected = supportedLanguages.includes(language) ? language : "en";
  const dictionary = translations[selected];

  document.documentElement.lang = selected;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === selected;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  try {
    window.localStorage.setItem("portfolio-language", selected);
  } catch {
    // Language selection still works when storage is unavailable.
  }
}

function getInitialLanguage() {
  try {
    const saved = window.localStorage.getItem("portfolio-language");
    if (saved && supportedLanguages.includes(saved)) return saved;
  } catch {
    // Fall back to browser language.
  }

  return normalizeLanguage(navigator.languages?.[0] || navigator.language);
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.getElementById("current-year").textContent = new Date().getFullYear();
setLanguage(getInitialLanguage());
