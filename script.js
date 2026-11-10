if (typeof document !== "undefined") document.documentElement.classList.add("js");

const translations = {
  en: {
    pageTitle: "Liu Chuan Feng | Unity Engineer, Tokyo",
    skip: "Skip to content",
    navApps: "Apps",
    navCredits: "Games",
    navAbout: "About",
    navContact: "Contact",
    heroFact1: "Unity engineer at Limit Break",
    heroFact2: "Based in Tokyo since 2020",
    heroFact3: "Four apps of my own, live in the stores",
    heroLead: "I build mobile games with a team by day, and plan, build and ship my own apps alone.",
    heroCredit: "Sky from Planet Drop, one of my games",
    heroCta: "See the apps",

    appsTitle: "Apps I’ve<br>shipped",
    appsIndexLabel: "Apps",
    pdShort: "Game",
    pdKind: "Merge puzzle game · iOS and Android",
    pdText: "Drop planets into the jar and merge matching ones into bigger worlds. Before the board fills up, pick roguelike upgrades that change size, gravity and score.",
    pdDate: "Released 24 August 2026",
    gamePage: "Game page",
    pdVideoAlt: "Planet Drop promotional video: planets falling and merging",
    pdShotAlt: "Planet Drop upgrade choice screen with three roguelike upgrades",
    osName: "Oshipass",
    osShort: "Organiser",
    osKind: "Fan-activity organiser · iOS and Android",
    osText: "Days since you became a fan, ticket lotteries and payment deadlines, a calendar, savings goals and memories of every show, in one app. No account, and the data stays on the phone.",
    osDate: "Released 2 November 2026",
    demoVideo: "Demo video",
    osShot1Alt: "Oshipass home screen counting 837 days as a fan",
    osShot2Alt: "Oshipass ticket screen with the lottery result and payment deadline",
    phName: "Paw Hunter",
    phShort: "Game for cats",
    phKind: "Touch game for cats · iPhone and iPad",
    phText: "Mice, butterflies, koi and a dot of light run across the screen for your cat to catch. No ads during the hunt; speed, numbers and playground adjust to each cat.",
    phDate: "Released 8 November 2026",
    phShot1Alt: "Paw Hunter: a mouse running across a wooden floor",
    phShot2Alt: "Paw Hunter: a koi swimming between lily pads",
    bbName: "Bit by Bit",
    bbShort: "Budget book",
    bbKind: "Budget book · Android",
    bbText: "A budget book that lives only on the phone: one-tap entries, monthly and category budgets, what you can still spend today, and a full JSON backup. In 18 languages.",
    bbDate: "On Google Play",
    bbShot1Alt: "Bit by Bit overview with this month’s remaining budget",
    bbShot2Alt: "Bit by Bit entry screen with the calculator keypad",

    worksTitle: "Coming next",
    worksCaption: "Apps in review and in development",
    colName: "Name",
    colKind: "What it is",
    colTech: "Built with",
    colDemo: "Demo",
    groupReview: "In App Store review",
    groupDev: "In development",
    iqKind: "Odd-one-out puzzle",
    evKind: "Trip expense splitter",
    alName: "AbyssLure",
    alKind: "Deep-sea idle game",
    drKind: "Creature collection",
    phrKind: "2D action game",
    demo: "Demo",
    worksNote: "Store status as of 9 November 2026.",

    creditsTitle: "Games I’ve built in teams",
    ppAlt: "Puzzle Panic store art: a chef heroine above a match puzzle board",
    ppBandSub: "Limit Break, 2026",
    blAlt: "Blue Lock Project: World Champion key art",
    kgAlt: "Kingdom Itadaki key art",
    pp2Alt: "Puzzle Panic store art: three chefs on a puzzle board",
    bandCaption: "Store art from each game’s App Store page, © Limit Break Inc. and Rudel Inc.",
    ppMeta: "Limit Break · soft launch April 2026 in New Zealand, Australia and Singapore",
    ppText: "Client engineer (Unity). Gameplay and boss systems, reward and out-game flows, async code with UniTask, unit tests and debug tools, root-cause fixes. Daily work with designers, planners and QA in Japan, the US and the Philippines.",
    launchPost: "Launch post",
    blMeta: "Rudel · released 2022",
    kgMeta: "Rudel · released 2024",
    dsMeta: "Rudel",
    rudelText: "Features across gameplay, user interface and live-service systems, through launch and live operation.",
    officialSite: "Official site",
    trailer: "Trailer",

    aboutTitle: "About",
    factBased: "Based in",
    factBasedValue: "Tokyo, Japan",
    factLang: "Works in",
    factTools: "Tools",
    aboutText: "Five years of making mobile games in Tokyo, in teams and on my own.",
    aboutMore: "Core gameplay and boss systems, out-game UI, live events, async code, tests and the tools that keep a team fast. At Rudel I worked on three live titles and became lead engineer; at Limit Break I build Puzzle Panic. Outside work, I take my own apps from idea to store page alone.",
    recordTitle: "Record",
    experienceTitle: "Experience",
    lbRole: "Unity engineer, Puzzle Panic",
    present: "now",
    rdRole: "Unity engineer, then lead engineer",
    pgRole: "Software engineer, sensor monitoring",
    educationTitle: "Education",
    nctuName: "National Chiao Tung University",
    nctuDegree: "BSc in Computer Science",
    kindaiName: "Kindai University",
    kindaiProgram: "Exchange student",

    contactSentence: "Open to Unity engineering roles, game collaborations and conversations about small apps.",
    portraitAlt: "Liu Chuan Feng with his white cat",
    contactTitle: "Get in touch",
    contactNote: "Tokyo, Japan · I reply in English, 中文 or 日本語",
    footWhat: "Liu Chuan Feng, Unity engineer in Tokyo",
    privacy: "Privacy policy",
  },

  "zh-TW": {
    pageTitle: "Liu Chuan Feng | Unity 工程師・東京",
    skip: "跳到主要內容",
    navApps: "App",
    navCredits: "參與作品",
    navAbout: "關於我",
    navContact: "聯絡",
    heroFact1: "Limit Break 的 Unity 工程師",
    heroFact2: "2020 年起在東京工作",
    heroFact3: "四款個人 App 已上架",
    heroLead: "平常在東京的團隊裡開發手機遊戲，也一個人從企劃、開發到上架自己的 App。",
    heroCredit: "背景：我的遊戲 Planet Drop 的星空",
    heroCta: "看看我的 App",

    appsTitle: "已上架的<br>App",
    appsIndexLabel: "App 列表",
    pdShort: "遊戲",
    pdKind: "合成益智遊戲 · iOS 與 Android",
    pdText: "把行星丟進容器，相同的行星會合成更大的星球。在盤面塞滿前，選擇能改變大小、重力與分數的 Roguelike 強化。",
    pdDate: "2026 年 8 月 24 日上架",
    gamePage: "遊戲介紹頁",
    pdVideoAlt: "Planet Drop 宣傳影片：行星落下並合成",
    pdShotAlt: "Planet Drop 的強化選擇畫面，有三個 Roguelike 強化",
    osName: "追星護照",
    osShort: "追星管理",
    osKind: "追星管理 App · iOS 與 Android",
    osText: "追星天數、門票抽選與付款期限、行事曆、存錢目標和每場演出的回憶，全部整理在一個 App。不需要帳號，資料只存在手機裡。",
    osDate: "2026 年 11 月 2 日上架",
    demoVideo: "示範影片",
    osShot1Alt: "追星護照首頁，顯示追星第 837 天",
    osShot2Alt: "追星護照的門票畫面，顯示抽選結果與付款期限",
    phName: "肉球獵人",
    phShort: "給貓咪的遊戲",
    phKind: "給貓咪玩的觸控遊戲 · iPhone 與 iPad",
    phText: "老鼠、蝴蝶、錦鯉和光點在螢幕上跑動，讓貓咪來抓。狩獵途中不出現廣告，速度、數量和場地都能依每隻貓調整。",
    phDate: "2026 年 11 月 8 日上架",
    phShot1Alt: "肉球獵人：一隻老鼠跑過木地板",
    phShot2Alt: "肉球獵人：錦鯉在睡蓮之間游動",
    bbName: "一點一滴記帳本",
    bbShort: "記帳",
    bbKind: "記帳 App · Android",
    bbText: "只存在手機裡的記帳 App：一鍵記帳、月預算與分類預算、顯示今天還能花多少，並可完整 JSON 備份。支援 18 種語言。",
    bbDate: "已在 Google Play 上架",
    bbShot1Alt: "一點一滴記帳本的總覽，顯示本月剩餘預算",
    bbShot2Alt: "一點一滴記帳本的記帳畫面與計算機鍵盤",

    worksTitle: "接下來的作品",
    worksCaption: "審查中與開發中的作品",
    colName: "名稱",
    colKind: "類型",
    colTech: "開發工具",
    colDemo: "示範",
    groupReview: "App Store 審查中",
    groupDev: "開發中",
    iqKind: "找不同益智遊戲",
    evKind: "旅行分帳 App",
    alName: "深淵餌燈",
    alKind: "深海放置遊戲",
    drKind: "生物養成收集",
    phrKind: "2D 動作遊戲",
    demo: "示範影片",
    worksNote: "審查狀態以 2026 年 11 月 9 日為準。",

    creditsTitle: "在團隊中參與開發的遊戲",
    ppAlt: "Puzzle Panic 商店圖：廚師女主角與消除盤面",
    ppBandSub: "Limit Break，2026",
    blAlt: "藍色監獄 Project: World Champion 主視覺",
    kgAlt: "王者天下 頂天 主視覺",
    pp2Alt: "Puzzle Panic 商店圖：三位廚師與消除盤面",
    bandCaption: "圖片取自各遊戲的 App Store 頁面，© Limit Break Inc. 與 Rudel Inc.",
    ppMeta: "Limit Break · 2026 年 4 月於紐西蘭、澳洲、新加坡測試上線",
    ppText: "用戶端工程師（Unity）。負責玩法與 Boss 系統、獎勵與外圍流程、UniTask 非同步處理、單元測試與除錯工具，以及問題根因分析。每天與日本、美國、菲律賓的設計、企劃和 QA 合作。",
    launchPost: "上線公告",
    blMeta: "Rudel · 2022 年上線",
    kgMeta: "Rudel · 2024 年上線",
    dsMeta: "Rudel",
    rudelText: "參與玩法、UI 與營運系統等功能開發，從上線一路到營運。",
    officialSite: "官方網站",
    trailer: "宣傳影片",

    aboutTitle: "關於我",
    factBased: "所在地",
    factBasedValue: "日本東京",
    factLang: "工作語言",
    factTools: "工具",
    aboutText: "在東京開發手機遊戲五年，在團隊裡，也一個人做。",
    aboutMore: "核心玩法與 Boss 系統、外圍 UI、活動、非同步處理、測試，以及讓團隊更快的工具。在 Rudel 參與三款營運中的遊戲並擔任主程式；現在於 Limit Break 開發 Puzzle Panic。工作之外，我一個人把自己的 App 從點子做到上架。",
    recordTitle: "經歷",
    experienceTitle: "工作經歷",
    lbRole: "Unity 工程師，Puzzle Panic",
    present: "至今",
    rdRole: "Unity 工程師，後擔任主程式",
    pgRole: "軟體工程師，感測器監控系統",
    educationTitle: "學歷",
    nctuName: "國立交通大學",
    nctuDegree: "資訊工程學士",
    kindaiName: "近畿大學",
    kindaiProgram: "交換學生",

    contactSentence: "歡迎與我聊 Unity 工程職缺、遊戲合作，或任何關於小型 App 的想法。",
    portraitAlt: "Liu Chuan Feng 和他的白貓",
    contactTitle: "聯絡我",
    contactNote: "日本東京 · 可用中文、日本語或 English 回覆",
    footWhat: "Liu Chuan Feng，東京的 Unity 工程師",
    privacy: "隱私權政策",
  },

  ja: {
    pageTitle: "Liu Chuan Feng | Unity エンジニア・東京",
    skip: "本文へスキップ",
    navApps: "アプリ",
    navCredits: "参加タイトル",
    navAbout: "プロフィール",
    navContact: "連絡先",
    heroFact1: "Limit Break の Unity エンジニア",
    heroFact2: "2020 年から東京で勤務",
    heroFact3: "個人開発アプリ 4 本を公開中",
    heroLead: "チームでモバイルゲームを開発しながら、個人でも企画から公開までアプリを手がけています。",
    heroCredit: "背景：自作ゲーム Planet Drop の星空",
    heroCta: "アプリを見る",

    appsTitle: "公開中の<br>アプリ",
    appsIndexLabel: "アプリ一覧",
    pdShort: "ゲーム",
    pdKind: "マージパズルゲーム · iOS・Android",
    pdText: "惑星を落とし、同じ惑星同士を合体させて大きくしていくパズル。盤面が埋まる前に、サイズ・重力・スコアを変えるローグライク強化を選びます。",
    pdDate: "2026 年 8 月 24 日リリース",
    gamePage: "ゲームページ",
    pdVideoAlt: "Planet Drop のプロモーション動画：惑星が落ちて合体する様子",
    pdShotAlt: "Planet Drop の強化選択画面（ローグライク強化 3 種）",
    osName: "推しパス",
    osShort: "推し活管理",
    osKind: "推し活管理アプリ · iOS・Android",
    osText: "推し日数、チケットの当落と入金期限、カレンダー、推し貯金、参戦の思い出をひとつのアプリで管理。アカウント不要で、データは端末内に保存されます。",
    osDate: "2026 年 11 月 2 日リリース",
    demoVideo: "デモ動画",
    osShot1Alt: "推しパスのホーム画面（推して 837 日目）",
    osShot2Alt: "推しパスのチケット画面（当落と入金期限）",
    phName: "肉球ハンター",
    phShort: "猫向けゲーム",
    phKind: "猫向けタッチゲーム · iPhone・iPad",
    phText: "走るネズミ、舞う蝶、泳ぐコイ、光の点を猫がタッチして遊ぶゲーム。狩りの最中は広告なし。速度・数・遊び場を猫ごとに調整できます。",
    phDate: "2026 年 11 月 8 日リリース",
    phShot1Alt: "肉球ハンター：木の床を走るネズミ",
    phShot2Alt: "肉球ハンター：睡蓮の間を泳ぐコイ",
    bbName: "コツコツ家計簿",
    bbShort: "家計簿",
    bbKind: "家計簿アプリ · Android",
    bbText: "端末の中だけで完結する家計簿。よく使う記録はワンタップ、月とカテゴリの予算、今日あといくら使えるかを表示し、JSON で完全バックアップ。18 言語に対応。",
    bbDate: "Google Play で公開中",
    bbShot1Alt: "コツコツ家計簿の概要画面（今月の残り予算）",
    bbShot2Alt: "コツコツ家計簿の入力画面と電卓キー",

    worksTitle: "次の作品",
    worksCaption: "審査中・開発中の作品",
    colName: "名前",
    colKind: "ジャンル",
    colTech: "開発環境",
    colDemo: "デモ",
    groupReview: "App Store 審査中",
    groupDev: "開発中",
    iqKind: "仲間はずれ探しパズル",
    evKind: "旅行の割り勘アプリ",
    alName: "深淵餌燈",
    alKind: "深海放置ゲーム",
    drKind: "育成・コレクション",
    phrKind: "2D アクション",
    demo: "デモ動画",
    worksNote: "審査状況は 2026 年 11 月 9 日時点。",

    creditsTitle: "チームで開発したタイトル",
    ppAlt: "Puzzle Panic のストア画像：シェフのヒロインとパズル盤面",
    ppBandSub: "Limit Break、2026",
    blAlt: "ブルーロック Project: World Champion のキービジュアル",
    kgAlt: "キングダム 頂天 のキービジュアル",
    pp2Alt: "Puzzle Panic のストア画像：3 人のシェフとパズル盤面",
    bandCaption: "画像は各タイトルの App Store ページより。© Limit Break Inc.、Rudel Inc.",
    ppMeta: "Limit Break · 2026 年 4 月にニュージーランド・オーストラリア・シンガポールでソフトローンチ",
    ppText: "クライアントエンジニア（Unity）。ゲームプレイとボスシステム、報酬・アウトゲームの導線、UniTask による非同期処理、ユニットテストとデバッグツール、不具合の原因分析を担当。日本・アメリカ・フィリピンのデザイナー、プランナー、QA と日々連携しています。",
    launchPost: "リリース告知",
    blMeta: "Rudel · 2022 年リリース",
    kgMeta: "Rudel · 2024 年リリース",
    dsMeta: "Rudel",
    rudelText: "ゲームプレイ、UI、運営系システムの機能開発を、リリースから運営まで担当。",
    officialSite: "公式サイト",
    trailer: "PV",

    aboutTitle: "プロフィール",
    factBased: "拠点",
    factBasedValue: "東京",
    factLang: "使用言語",
    factTools: "ツール",
    aboutText: "東京でモバイルゲームを作って 5 年。チームでも、一人でも。",
    aboutMore: "コアゲームプレイとボス、アウトゲーム UI、イベント、非同期処理、テスト、チームを速くするツールまで。Rudel では運営中の 3 タイトルに参加しリードエンジニアを担当、現在は Limit Break で Puzzle Panic を開発しています。仕事の外では、自分のアプリを企画からストア公開まで一人で手がけています。",
    recordTitle: "経歴",
    experienceTitle: "職歴",
    lbRole: "Unity エンジニア、Puzzle Panic",
    present: "現在",
    rdRole: "Unity エンジニア、のちリードエンジニア",
    pgRole: "ソフトウェアエンジニア、センサー監視",
    educationTitle: "学歴",
    nctuName: "国立交通大学（台湾）",
    nctuDegree: "資訊工程学科 学士",
    kindaiName: "近畿大学",
    kindaiProgram: "交換留学",

    contactSentence: "Unity エンジニアのお仕事、ゲームの協業、小さなアプリのご相談など、お気軽にご連絡ください。",
    portraitAlt: "白い猫と一緒の Liu Chuan Feng",
    contactTitle: "お問い合わせ",
    contactNote: "東京 · 日本語・中文・English で返信できます",
    footWhat: "Liu Chuan Feng、東京の Unity エンジニア",
    privacy: "プライバシーポリシー",
  },
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
  const fallback = translations.en;
  const text = (key) => dictionary[key] ?? fallback[key];

  document.documentElement.lang = selected;
  if (text("pageTitle")) document.title = text("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = text(element.dataset.i18n);
    if (value) element.textContent = value;
  });
  // Only strings from the dictionary above, never user input.
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = text(element.dataset.i18nHtml);
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = text(element.dataset.i18nAlt);
    if (value) element.alt = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = text(element.dataset.i18nAria);
    if (value) element.setAttribute("aria-label", value);
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
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl) return normalizeLanguage(fromUrl);
  try {
    const saved = window.localStorage.getItem("portfolio-language");
    if (saved && supportedLanguages.includes(saved)) return saved;
  } catch {
    // Fall back to the browser language.
  }
  return normalizeLanguage(navigator.languages?.[0] || navigator.language);
}

const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Entrances: the parts of each section rise in order, once. */
function initializeReveals() {
  const hero = [".hero-name span", ".hero-facts li", ".hero-lead", ".hero-foot > *"];
  document.querySelectorAll(hero.join(",")).forEach((element, index) => {
    element.style.setProperty("--i", String(index));
  });

  const parts = [
    ".lineup tr", ".works-note",
    ".band-panel", ".band-caption", ".credit",
    ".facts > div", ".about-text", ".about-more", ".record-word", ".record",
    ".contact-sentence", ".contact-portrait", ".contact-links", ".foot > *",
  ];
  const items = [...document.querySelectorAll(parts.join(","))];
  if (reduceMotion() || !("IntersectionObserver" in window)) return;
  items.forEach((element) => element.setAttribute("data-reveal", ""));

  const observer = new IntersectionObserver((entries) => {
    entries
      .filter((entry) => entry.isIntersecting)
      .map((entry) => entry.target)
      .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
      .forEach((element, index) => {
        element.style.setProperty("--i", String(Math.min(index, 8)));
        element.classList.add("is-in");
        observer.unobserve(element);
      });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
  items.forEach((element) => observer.observe(element));

  // Never leave anything hidden if the observer misses it.
  window.setTimeout(() => {
    items.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) element.classList.add("is-in");
    });
  }, 1600);
}

/* The app stage: 0.7 of a viewport of scroll per app on wide screens; tap a name to jump.
   Keep STEP in sync with the .apps height in home.css. */
const STEP = 0.7;

function initializeApps() {
  const section = document.querySelector(".apps");
  if (!section) return;
  const apps = [...section.querySelectorAll(".app")];
  const buttons = [...section.querySelectorAll("[data-go]")];
  const wide = window.matchMedia("(min-width: 900px)");
  let current = 0;
  let previousTimer = 0;
  let ticking = false;

  const videos = [...section.querySelectorAll("video")];
  if (reduceMotion()) videos.forEach((video) => { video.controls = true; });

  function syncVideos() {
    videos.forEach((video) => {
      const app = video.closest(".app");
      const rect = video.getBoundingClientRect();
      const visible = rect.bottom > 0 && rect.top < window.innerHeight;
      const shouldPlay = !reduceMotion() && visible && (!wide.matches || app.classList.contains("is-current"));
      if (shouldPlay && video.paused) {
        video.preload = "auto";
        video.play().catch(() => {});
      } else if (!shouldPlay && !video.paused) {
        video.pause();
      }
    });
  }

  function show(index) {
    if (index === current && apps[index].classList.contains("is-current")) return;
    apps.forEach((app) => app.classList.remove("is-prev"));
    apps[current].classList.add("is-prev");
    apps.forEach((app, i) => app.classList.toggle("is-current", i === index));
    buttons.forEach((button, i) => {
      if (i === index) button.setAttribute("aria-current", "true");
      else button.removeAttribute("aria-current");
    });
    current = index;
    window.clearTimeout(previousTimer);
    previousTimer = window.setTimeout(() => apps.forEach((app) => app.classList.remove("is-prev")), 950);
  }

  function update() {
    ticking = false;
    if (wide.matches) {
      const top = section.getBoundingClientRect().top;
      const step = window.innerHeight * STEP;
      const index = Math.max(0, Math.min(apps.length - 1, Math.floor((-top + step * 0.5) / step)));
      show(index);
    }
    syncVideos();
  }

  function request() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.go);
      const top = section.getBoundingClientRect().top + window.scrollY + index * window.innerHeight * STEP;
      window.scrollTo({ top: top + 2, behavior: reduceMotion() ? "auto" : "smooth" });
    });
  });

  window.addEventListener("scroll", request, { passive: true });
  window.addEventListener("resize", request, { passive: true });
  wide.addEventListener("change", request);
  update();
}

function initializePortfolio() {
  if (!document.querySelector(".home")) return;

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  const currentYear = document.getElementById("current-year");
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());

  setLanguage(getInitialLanguage());
  initializeReveals();
  initializeApps();
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initializePortfolio, { once: true });
  else initializePortfolio();
}
