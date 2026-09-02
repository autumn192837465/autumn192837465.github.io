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
    heroDescription: "More than five years of mobile game development experience across core gameplay, game systems, and mobile UI.",
    viewWork: "View my work",
    portraitAlt: "Liu Chuan Feng with a cat",
    aboutTitle: "About",
    aboutParagraph1: "I’m a Tokyo-based Unity Engineer with more than five years of experience in mobile game development, covering in-game and out-game features, UI architecture, asynchronous systems, testing, and performance.",
    aboutParagraph2: "At Limit Break, I develop core gameplay and boss systems for Puzzle Panic. Previously at Rudel, I contributed to the development and live operation of three mobile games and later served as Lead Engineer.",
    aboutParagraph3: "My games include Planet Drop, available on Google Play and the App Store, and Pattern Hero, currently in development.",
    aboutParagraph4: "I use Chinese, Japanese, and English to communicate with team members in my day-to-day work.",
    workTitle: "Work",
    workIntro: "Professional game credits and original games.",
    personalKicker: "Games",
    personalTitle: "Personal games",
    personalIntro: "Gameplay, availability, and current development status.",
    soloProject: "Game",
    availableNow: "Available now",
    planetDropSubtitle: "Merge Puzzle",
    planetDropDescription: "Drop planets into the container and merge matching ones into larger planets. Anticipate each bounce, manage the limited space, and choose roguelike upgrades that change planet size, gravity, scoring, and special effects before the board fills up.",
    planetDropAlt: "Planet Drop game icon",
    planetDropVideoTitle: "Planet Drop gameplay preview",
    planetDropGamePage: "Game Page",
    patternHeroSubtitle: "2D Action Game",
    patternHeroDescription: "Choose combat abilities through a roulette system, then take them into real-time action stages. Adapt movement and attacks to the abilities you receive and fight through pixel-art encounters.",
    gameplayTagsLabel: "Gameplay features",
    planetTag1: "Physics merging",
    planetTag2: "Space management",
    planetTag3: "Roguelike upgrades",
    planetTag4: "High-score challenge",
    patternTag1: "Real-time combat",
    patternTag2: "Roulette choices",
    patternTag3: "Ability combinations",
    patternTag4: "Pixel-art stages",
    patternHeroAlt: "Pattern Hero game icon",
    patternHeroVideoTitle: "Pattern Hero gameplay preview",
    watchDemo: "Watch demo",
    professionalKicker: "Professional credits",
    professionalTitle: "Games I contributed to",
    professionalIntro: "Selected games and the areas I contributed to within their development teams.",
    ongoing: "In development",
    softLaunch: "Soft launch",
    released: "Released",
    officialSite: "Official site",
    watchVideo: "Watch video",
    blueLockVideoTitle: "Blue Lock Project: World Champion video",
    kingdomVideoTitle: "Kingdom Itadaki video",
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
    contactTitle: "Contact",
    contactDescription: "For professional opportunities or collaboration, please reach out through LinkedIn.",
    footerText: "Unity Engineer · Tokyo, Japan"
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
    heroDescription: "具五年以上行動遊戲開發經驗，主要負責核心玩法、遊戲系統與行動裝置 UI。",
    viewWork: "查看我的作品",
    portraitAlt: "劉川楓與貓的合照",
    aboutTitle: "關於我",
    aboutParagraph1: "目前於東京從事行動遊戲開發，具五年以上經驗，工作範圍涵蓋 In-game、Out-game、UI 架構、非同步處理、測試與效能改善。",
    aboutParagraph2: "現於 Limit Break 負責 Puzzle Panic 的核心玩法與 Boss 系統。過去於 Rudel 參與三款行動遊戲的開發與營運，並曾擔任 Lead Engineer。",
    aboutParagraph3: "個人遊戲包括已於 Google Play 與 App Store 上架的 Planet Drop，以及目前開發中的 Pattern Hero。",
    aboutParagraph4: "平時使用中文、日文與英文和團隊成員溝通。",
    workTitle: "作品",
    workIntro: "商業遊戲開發經歷與個人遊戲作品。",
    personalKicker: "遊戲",
    personalTitle: "個人遊戲",
    personalIntro: "遊戲玩法、上架狀態與目前開發進度。",
    soloProject: "遊戲",
    availableNow: "現已上架",
    planetDropSubtitle: "星球合成益智遊戲",
    planetDropDescription: "讓行星落入容器，相同行星接觸後會合成為更大的行星。玩家需要預判落點與彈跳，在有限空間內安排合成順序，並選擇改變尺寸、重力、得分與特殊效果的 Roguelike 強化，在盤面堆滿前取得更高分數。",
    planetDropAlt: "Planet Drop 遊戲圖示",
    planetDropVideoTitle: "Planet Drop 遊戲預覽",
    planetDropGamePage: "遊戲專頁",
    patternHeroSubtitle: "2D 動作遊戲",
    patternHeroDescription: "透過輪盤選擇本局的戰鬥能力，再進入即時動作關卡。玩家需要配合取得的能力調整移動與攻擊，在像素風格的戰鬥中應對敵人。",
    gameplayTagsLabel: "玩法特色",
    planetTag1: "物理合成",
    planetTag2: "空間管理",
    planetTag3: "Roguelike 強化",
    planetTag4: "高分挑戰",
    patternTag1: "即時戰鬥",
    patternTag2: "輪盤選擇",
    patternTag3: "能力組合",
    patternTag4: "像素風格關卡",
    patternHeroAlt: "Pattern Hero 遊戲圖示",
    patternHeroVideoTitle: "Pattern Hero 遊戲預覽",
    watchDemo: "觀看 Demo",
    professionalKicker: "參與作品",
    professionalTitle: "參與開發的遊戲",
    professionalIntro: "負責領域包含核心玩法、UI、營運功能與開發工具。",
    ongoing: "開發中",
    softLaunch: "限區測試",
    released: "已發行",
    officialSite: "官方網站",
    watchVideo: "觀看影片",
    blueLockVideoTitle: "Blue Lock Project: World Champion 影片",
    kingdomVideoTitle: "Kingdom Itadaki 影片",
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
    contactTitle: "聯絡方式",
    contactDescription: "工作機會與合作相關聯絡，請透過 LinkedIn。",
    footerText: "Unity 工程師 · 日本東京"
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
    heroDescription: "モバイルゲーム開発5年以上。コアゲームプレイ、ゲームシステム、モバイルUIを担当しています。",
    viewWork: "作品を見る",
    portraitAlt: "猫と一緒に写る劉川楓",
    aboutTitle: "プロフィール",
    aboutParagraph1: "東京でモバイルゲーム開発に携わり、5年以上の経験があります。インゲーム、アウトゲーム、UI設計、非同期処理、テスト、パフォーマンス改善を担当してきました。",
    aboutParagraph2: "現在はLimit Breakで『Puzzle Panic』のコアゲームプレイとボスシステムを担当しています。以前はRudelで3タイトルの開発・運用に携わり、リードエンジニアも務めました。",
    aboutParagraph3: "個人ゲームとして、Google PlayとApp Storeで配信中の『Planet Drop』と、開発中の『Pattern Hero』があります。",
    aboutParagraph4: "普段の業務では、中国語・日本語・英語を使ってチームメンバーとコミュニケーションを取っています。",
    workTitle: "作品",
    workIntro: "商業ゲームの開発実績と個人ゲーム作品。",
    personalKicker: "ゲーム",
    personalTitle: "個人ゲーム",
    personalIntro: "ゲームプレイ、配信状況、現在の開発状況。",
    soloProject: "ゲーム",
    availableNow: "配信中",
    planetDropSubtitle: "マージパズル",
    planetDropDescription: "惑星を容器へ落とし、同じ惑星を接触させてより大きな惑星へマージします。落下位置と跳ね方を予測し、限られた空間を管理しながら、サイズ、重力、スコア、特殊効果を変えるローグライク強化を選び、盤面が埋まる前にハイスコアを目指します。",
    planetDropAlt: "Planet Dropのゲームアイコン",
    planetDropVideoTitle: "Planet Drop ゲームプレイ動画",
    planetDropGamePage: "ゲーム紹介",
    patternHeroSubtitle: "2Dアクションゲーム",
    patternHeroDescription: "ルーレットでそのランの戦闘能力を選び、リアルタイムのアクションステージへ進みます。獲得した能力に合わせて移動と攻撃を調整し、ピクセルアートの戦闘で敵に対応します。",
    gameplayTagsLabel: "ゲームプレイの特徴",
    planetTag1: "物理マージ",
    planetTag2: "スペース管理",
    planetTag3: "ローグライク強化",
    planetTag4: "ハイスコア挑戦",
    patternTag1: "リアルタイム戦闘",
    patternTag2: "ルーレット選択",
    patternTag3: "能力の組み合わせ",
    patternTag4: "ピクセルアートステージ",
    patternHeroAlt: "Pattern Heroのゲームアイコン",
    patternHeroVideoTitle: "Pattern Hero ゲームプレイ動画",
    watchDemo: "デモを見る",
    professionalKicker: "参加作品",
    professionalTitle: "開発に携わったゲーム",
    professionalIntro: "コアゲームプレイ、UI、運用機能、開発ツールなどの担当領域を紹介します。",
    ongoing: "開発中",
    softLaunch: "ソフトローンチ",
    released: "リリース済み",
    officialSite: "公式サイト",
    watchVideo: "動画を見る",
    blueLockVideoTitle: "ブルーロック Project: World Champion 動画",
    kingdomVideoTitle: "キングダム 頂天 動画",
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
    footerText: "Unityエンジニア · 東京"
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

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    if (dictionary[key]) element.setAttribute("aria-label", dictionary[key]);
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

function loadTwitterWidgets() {
  const embed = document.querySelector(".puzzle-social-embed");
  if (!embed) return;

  const loadEmbed = () => window.twttr?.widgets?.load(embed);
  const existingScript = document.querySelector('script[src="https://platform.x.com/widgets.js"]');
  if (existingScript) {
    if (window.twttr?.widgets) loadEmbed();
    else existingScript.addEventListener("load", loadEmbed, { once: true });
    return;
  }

  const script = document.createElement("script");
  script.src = "https://platform.x.com/widgets.js";
  script.async = true;
  script.charset = "utf-8";
  script.addEventListener("load", loadEmbed, { once: true });
  document.head.appendChild(script);
}

function initializePortfolio() {
  if (!document.querySelector(".site-header")) return;

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  const currentYear = document.getElementById("current-year");
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll(".section-reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    try {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.12) {
            entry.target.classList.add("is-visible");
            return;
          }

          if (!entry.isIntersecting) {
            entry.target.classList.remove("is-visible");
          }
        });
      }, { threshold: [0, 0.12], rootMargin: "0px 0px -8% 0px" });
      revealItems.forEach((item) => revealObserver.observe(item));
    } catch {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }
  }

  setLanguage(getInitialLanguage());
  loadTwitterWidgets();
}

if (typeof document !== "undefined") initializePortfolio();
