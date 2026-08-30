if (typeof document !== "undefined") document.documentElement.classList.add("js");

const translations = {
  en: {
    skip: "Skip to content",
    navAbout: "About",
    navWork: "Work",
    navExperience: "Experience",
    navEducation: "Education",
    navContact: "Contact",
    heroEyebrow: "Unity Engineer · Tokyo, Japan",
    heroTitle: "Unity Engineer",
    heroDescription: "Building reliable game systems and polished player experiences for mobile games.",
    viewWork: "View my work",
    portraitAlt: "Liu Chuan Feng with a cat",
    aboutTitle: "About",
    aboutParagraph1: "I’m a Tokyo-based Unity Engineer with more than five years of experience building mobile games across both in-game and out-game systems. I started teaching myself Unity while studying at university.",
    aboutParagraph2: "At Rudel, I worked on the development and live operation of three released titles. I later served as Lead Engineer, establishing reusable UI and scene-management foundations, coding standards, and templates for a new project. I now focus on core gameplay development for Puzzle Panic at Limit Break.",
    aboutParagraph3: "Outside work, I build games independently. Planet Drop is available on Google Play and the App Store, while Pattern Hero is currently in development. I handle the full process myself, from planning and programming through store submission and release.",
    aboutParagraph4: "I collaborate with international teams in Chinese, Japanese, and English.",
    workTitle: "Work",
    workIntro: "Selected professional credits, followed by games built independently.",
    personalKicker: "Personal projects",
    personalTitle: "Built from idea to release",
    personalIntro: "Games I designed, developed, and published independently.",
    soloProject: "Personal project",
    availableNow: "Available now",
    planetDropSubtitle: "Merge Puzzle",
    planetDropDescription: "A physics-based merge game where every drop shapes the board. Combine planets, choose roguelike upgrades, discover powerful builds, and chase a new high score.",
    planetDropAlt: "Planet Drop game icon",
    planetDropVideoTitle: "Planet Drop gameplay preview",
    patternHeroSubtitle: "Action prototype",
    patternHeroDescription: "An in-development personal game exploring responsive action gameplay, combat systems, and a handcrafted pixel-art presentation.",
    patternHeroAlt: "Pattern Hero game icon",
    patternHeroVideoTitle: "Pattern Hero gameplay preview",
    watchDemo: "Watch demo",
    professionalKicker: "Professional credits",
    professionalTitle: "Games I contributed to",
    professionalIntro: "Selected titles I worked on as part of professional development teams.",
    ongoing: "In development",
    softLaunch: "Soft launch",
    released: "Released",
    officialSite: "Official site",
    puzzleWorkDescription: "Developing gameplay systems, user interfaces, and supporting flows for a mobile puzzle game in an international team.",
    puzzleRoleLabel: "Role",
    puzzleRole: "Client Engineer (Unity)",
    puzzleResponsibilitiesLabel: "Responsibilities",
    puzzleResponsibility1: "Gameplay & Boss Systems",
    puzzleResponsibility2: "Reward & Out-game Flows",
    puzzleResponsibility3: "Async Processing with UniTask",
    puzzleResponsibility4: "Unit Testing & Debug Tooling",
    puzzleResponsibility5: "Root Cause Analysis & Quality Improvement",
    puzzleCollaborationLabel: "Collaboration",
    puzzleCollaboration1: "Designers · Planners · QA",
    puzzleCollaboration2: "Japan · US · Philippines",
    puzzleCollaboration3: "Japanese · English · Chinese",
    puzzleTechLabel: "Tech",
    releasedWorkDescription: "Contributed to mobile game features across gameplay, user interface, and live-service systems.",
    locationLabel: "Location",
    skillsLabel: "Core skills",
    skillsValue: "Unity · C# · In-game / Out-game Development · UI Architecture · Async Systems · Unit Testing · Debug Tooling · Performance Optimization",
    languagesLabel: "Languages",
    languagesValue: "Chinese · Japanese · English",
    experienceTitle: "Experience",
    present: "Present",
    projectLabel: "Project",
    limitBreakDescription: "Leading core in-game development for Puzzle Panic, from gameplay and boss logic to reward flows, asynchronous systems, unit tests, and debugging tools. I work directly with designers, planners, and QA across international teams in Japanese, English, and Chinese.",
    limitBreakHighlight1: "Gameplay and boss systems",
    limitBreakHighlight2: "Quality, tests, and debugging tools",
    limitBreakHighlight3: "Multilingual cross-team collaboration",
    rudelRole: "Unity Engineer → Lead Engineer",
    rudelDescription: "Built and operated mobile game features across three titles, focusing on out-game UI, live events, performance, and maintainable architecture. Later led a new project, establishing shared UI and scene-management foundations, coding standards, and reusable templates.",
    rudelHighlight1: "Out-game UI and live events",
    rudelHighlight2: "Performance and refactoring",
    rudelHighlight3: "Shared foundations and team leadership",
    pugnusRole: "Software Engineer",
    pugnusDescription: "Developed industrial monitoring software for vibration sensors, including data processing and storage, real-time visualization, and mobile and email alerts for abnormal readings.",
    pugnusHighlight1: "Sensor data processing and storage",
    pugnusHighlight2: "Real-time visualization",
    pugnusHighlight3: "Mobile and email alerting",
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
    navWork: "作品",
    navExperience: "工作經歷",
    navEducation: "學歷",
    navContact: "聯絡方式",
    heroEyebrow: "Unity 工程師 · 日本東京",
    heroTitle: "Unity 工程師",
    heroDescription: "專注於打造可靠的遊戲系統與精緻的行動遊戲體驗。",
    viewWork: "查看我的作品",
    portraitAlt: "劉川楓與貓的合照",
    aboutTitle: "關於我",
    aboutParagraph1: "我是目前在東京工作的 Unity 工程師，累積超過五年的手機遊戲開發經驗，熟悉遊戲內（in-game）與遊戲外（out-game）功能開發。我從大學時期開始自學 Unity，並透過個人專案累積實作經驗。",
    aboutParagraph2: "在 Rudel 任職期間，我參與過三款已上線遊戲的開發與營運。後期擔任 Lead Engineer，負責為新專案建立共用 UI、場景管理架構、程式撰寫規範與可重複使用的範本。目前我在 Limit Break 負責 Puzzle Panic 的核心玩法開發。",
    aboutParagraph3: "工作之餘，我也持續獨立開發遊戲。Planet Drop 已在 Google Play 與 App Store 上架，Pattern Hero 則仍在開發中。從遊戲企劃、程式開發到送審上架，都是由我一人完成。",
    aboutParagraph4: "工作上，我能使用中文、日文與英文，和不同國家的團隊成員合作。",
    workTitle: "作品",
    workIntro: "先介紹職涯中參與開發的作品，接著是我獨立完成的個人遊戲。",
    personalKicker: "個人作品",
    personalTitle: "從構想到正式發行",
    personalIntro: "由我獨立設計、開發並發行的遊戲。",
    soloProject: "個人獨立作品",
    availableNow: "現已上架",
    planetDropSubtitle: "星球合成益智遊戲",
    planetDropDescription: "每一次投放都會改變盤面的物理合成遊戲。合併星球、選擇 Roguelike 強化、組合不同流派，挑戰更高分數。",
    planetDropAlt: "Planet Drop 遊戲圖示",
    planetDropVideoTitle: "Planet Drop 遊戲預覽",
    patternHeroSubtitle: "動作遊戲原型",
    patternHeroDescription: "開發中的個人動作遊戲原型，聚焦於爽快的操作、戰鬥系統與手工像素風格的呈現。",
    patternHeroAlt: "Pattern Hero 遊戲圖示",
    patternHeroVideoTitle: "Pattern Hero 遊戲預覽",
    watchDemo: "觀看 Demo",
    professionalKicker: "參與作品",
    professionalTitle: "職涯參與開發的遊戲",
    professionalIntro: "我以開發團隊成員身分參與製作的精選商業作品。",
    ongoing: "開發中",
    softLaunch: "限區測試",
    released: "已發行",
    officialSite: "官方網站",
    puzzleWorkDescription: "在國際團隊中，參與行動益智遊戲的遊戲系統、使用者介面與相關流程開發。",
    puzzleRoleLabel: "職位",
    puzzleRole: "客戶端工程師（Unity）",
    puzzleResponsibilitiesLabel: "負責領域",
    puzzleResponsibility1: "遊戲內與 Boss 系統",
    puzzleResponsibility2: "獎勵流程與遊戲外功能",
    puzzleResponsibility3: "使用 UniTask 的非同步處理",
    puzzleResponsibility4: "單元測試與除錯工具開發",
    puzzleResponsibility5: "原因分析與品質改善",
    puzzleCollaborationLabel: "團隊協作",
    puzzleCollaboration1: "與設計師、企劃及 QA 調整規格",
    puzzleCollaboration2: "日本、美國與菲律賓團隊",
    puzzleCollaboration3: "日語、英語與中文",
    puzzleTechLabel: "技術",
    releasedWorkDescription: "參與行動遊戲的遊戲玩法、使用者介面與營運系統功能開發。",
    locationLabel: "所在地",
    skillsLabel: "核心技能",
    skillsValue: "Unity · C# · 遊戲內／遊戲外功能開發 · UI 架構 · 非同步處理 · 單元測試 · 除錯工具 · 效能最佳化",
    languagesLabel: "語言",
    languagesValue: "中文 · 日文 · 英文",
    experienceTitle: "工作經歷",
    present: "現在",
    projectLabel: "專案",
    limitBreakDescription: "目前主要負責 Puzzle Panic 的 In-game 領域，涵蓋遊戲與 Boss 邏輯、獎勵流程、非同步處理、單元測試及除錯工具。並以日文、英文與中文，直接和海外團隊的設計、企劃及 QA 協作。",
    limitBreakHighlight1: "遊戲與 Boss 系統",
    limitBreakHighlight2: "品質、測試與除錯工具",
    limitBreakHighlight3: "多語言跨團隊協作",
    rudelRole: "Unity 工程師 → Lead Engineer",
    rudelDescription: "參與三款行動遊戲的開發與營運，重點涵蓋 Out-game UI、活動功能、效能改善及可維護架構。後期擔任新專案 Lead Engineer，建立共用 UI、場景管理基盤、程式規範與可重用模板。",
    rudelHighlight1: "Out-game UI 與活動功能",
    rudelHighlight2: "效能改善與重構",
    rudelHighlight3: "共用基盤與團隊帶領",
    pugnusRole: "軟體工程師",
    pugnusDescription: "開發振動感測器的工業監控軟體，包含資料處理與儲存、即時視覺化，以及異常數值的行動裝置與電子郵件通知功能。",
    pugnusHighlight1: "感測資料處理與儲存",
    pugnusHighlight2: "即時資料視覺化",
    pugnusHighlight3: "行動裝置與郵件通知",
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
    navWork: "作品",
    navExperience: "職務経歴",
    navEducation: "学歴",
    navContact: "お問い合わせ",
    heroEyebrow: "Unityエンジニア · 東京",
    heroTitle: "Unityエンジニア",
    heroDescription: "信頼性の高いゲームシステムと、完成度の高いモバイルゲーム体験を開発しています。",
    viewWork: "作品を見る",
    portraitAlt: "猫と一緒に写る劉川楓",
    aboutTitle: "プロフィール",
    aboutParagraph1: "東京でUnityエンジニアとして勤務し、5年以上にわたりモバイルゲーム開発に携わっています。インゲーム・アウトゲームの両領域を経験しており、大学在学中に独学でUnityを学び始めました。",
    aboutParagraph2: "Rudelでは、リリース済み3タイトルの開発・運用を担当しました。後半はリードエンジニアとして、新規プロジェクト向けの共通UI・シーン管理基盤、コーディング規約、再利用可能なテンプレートを整備しました。現在はLimit Breakで『Puzzle Panic』のコアゲームプレイ開発を担当しています。",
    aboutParagraph3: "業務外では個人でもゲームを開発しています。『Planet Drop』はGoogle PlayとApp Storeで配信中で、『Pattern Hero』は現在開発中です。企画・プログラミングからストア申請・リリースまで、すべて一人で手がけています。",
    aboutParagraph4: "中国語・日本語・英語を使い、国際的なチームと協働しています。",
    workTitle: "作品",
    workIntro: "プロとして携わった作品に続いて、個人で開発したゲームを紹介します。",
    personalKicker: "個人作品",
    personalTitle: "企画からリリースまで",
    personalIntro: "企画・開発・リリースまで個人で手がけたゲームです。",
    soloProject: "個人開発作品",
    availableNow: "配信中",
    planetDropSubtitle: "マージパズル",
    planetDropDescription: "一手ごとに盤面が変化する物理マージゲーム。惑星を合体し、ローグライク強化でビルドを組み立て、ハイスコアを目指します。",
    planetDropAlt: "Planet Dropのゲームアイコン",
    planetDropVideoTitle: "Planet Drop ゲームプレイ動画",
    patternHeroSubtitle: "アクションゲームのプロトタイプ",
    patternHeroDescription: "操作感のよいアクション、バトルシステム、手作りのピクセルアート表現を追求する、開発中の個人ゲームです。",
    patternHeroAlt: "Pattern Heroのゲームアイコン",
    patternHeroVideoTitle: "Pattern Hero ゲームプレイ動画",
    watchDemo: "デモを見る",
    professionalKicker: "参加作品",
    professionalTitle: "開発に携わったゲーム",
    professionalIntro: "プロの開発チームの一員として制作に携わった主なタイトルです。",
    ongoing: "開発中",
    softLaunch: "ソフトローンチ",
    released: "リリース済み",
    officialSite: "公式サイト",
    puzzleWorkDescription: "国際的なチームで、モバイルパズルゲームのゲームシステム、UI、関連フローを開発しています。",
    puzzleRoleLabel: "担当職種",
    puzzleRole: "クライアントエンジニア（Unity）",
    puzzleResponsibilitiesLabel: "担当領域",
    puzzleResponsibility1: "インゲーム・ボスシステム",
    puzzleResponsibility2: "報酬フロー・アウトゲーム機能",
    puzzleResponsibility3: "UniTaskを用いた非同期処理",
    puzzleResponsibility4: "Unit Test・デバッグツール開発",
    puzzleResponsibility5: "原因分析・品質改善",
    puzzleCollaborationLabel: "チーム連携",
    puzzleCollaboration1: "デザイナー・プランナー・QAとの仕様調整",
    puzzleCollaboration2: "日本・米国・フィリピン拠点との連携",
    puzzleCollaboration3: "日本語・英語・中国語",
    puzzleTechLabel: "技術",
    releasedWorkDescription: "ゲームプレイ、UI、運用システムなど、モバイルゲームの機能開発に携わりました。",
    locationLabel: "所在地",
    skillsLabel: "主なスキル",
    skillsValue: "Unity · C# · インゲーム／アウトゲーム開発 · UIアーキテクチャ · 非同期システム · Unit Test · デバッグツール · パフォーマンス最適化",
    languagesLabel: "言語",
    languagesValue: "中国語 · 日本語 · 英語",
    experienceTitle: "職務経歴",
    present: "現在",
    projectLabel: "プロジェクト",
    limitBreakDescription: "『Puzzle Panic』のインゲーム領域を主担当とし、ゲーム・ボスロジック、報酬フロー、非同期処理、Unit Test、デバッグツールを開発。日本語・英語・中国語で海外拠点のデザイナー、プランナー、QAと直接連携しています。",
    limitBreakHighlight1: "ゲーム・ボスシステム",
    limitBreakHighlight2: "品質、テスト、デバッグツール",
    limitBreakHighlight3: "多言語でのチーム連携",
    rudelRole: "Unityエンジニア → リードエンジニア",
    rudelDescription: "3タイトルの開発・運用に携わり、アウトゲームUI、イベント機能、性能改善、保守性の高い設計を担当。後半は新規プロジェクトのリードエンジニアとして、共通UI・シーン管理基盤、コーディングルール、テンプレートを整備しました。",
    rudelHighlight1: "アウトゲームUI・イベント機能",
    rudelHighlight2: "性能改善・リファクタリング",
    rudelHighlight3: "共通基盤・チームリード",
    pugnusRole: "ソフトウェアエンジニア",
    pugnusDescription: "振動センサーを用いた産業設備向け監視ソフトウェアを開発。データ処理・保存、リアルタイム可視化、異常値のスマートフォン・メール通知機能を担当しました。",
    pugnusHighlight1: "センサーデータの処理・保存",
    pugnusHighlight2: "リアルタイム可視化",
    pugnusHighlight3: "スマートフォン・メール通知",
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

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (dictionary[key]) element.alt = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const key = element.dataset.i18nTitle;
    if (dictionary[key]) element.title = dictionary[key];
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

function initializePortfolio() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  const currentYear = document.getElementById("current-year");
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll(".work-reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => revealObserver.observe(item));
  }

  setLanguage(getInitialLanguage());
}

if (typeof document !== "undefined") initializePortfolio();
