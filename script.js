if (typeof document !== "undefined") document.documentElement.classList.add("js");

const translations = {
  en: {
    pageTitle: "Liu Chuan Feng | Unity Engineer, Tokyo",
    skip: "Skip to content",
    navApps: "Apps",
    navWork: "Work",
    navAbout: "About",
    navContact: "Contact",
    heroLead: "Unity engineer in Tokyo. I build games at Limit Break, and make my own apps on the side.",
    heroCta: "Message me on LinkedIn",
    iconsLabel: "My apps",
    iconsNote: "Bright icons are live on the App Store or Google Play. Tap one to read about it.",
    statusReview: "In review",
    statusDev: "In development",

    appsTitle: "Apps I’ve released",
    appsIntro: "Each one planned, built, published and promoted by me alone.",
    pdKind: "Merge puzzle game for iOS and Android",
    pdText: "Drop planets into the jar and merge matching ones into bigger worlds. Before the board fills up, pick roguelike upgrades that change size, gravity and score.",
    pdDate: "Released 24 August 2026",
    gamePage: "Game page",
    pdVideoAlt: "Planet Drop promotional video: planets falling and merging",
    pdShotAlt: "Planet Drop upgrade choice screen with three roguelike upgrades",
    pdShot2Alt: "Planet Drop result screen with the score and stardust reward",
    osName: "Oshipass",
    osKind: "Organiser for fans, on iOS and Android",
    osText: "Days since you became a fan, ticket lotteries and payment deadlines, a calendar, savings goals and memories of every show, in one app. No account, and the data stays on the phone.",
    osDate: "Released 2 November 2026",
    demoVideo: "Demo video",
    osShot1Alt: "Oshipass home screen counting 837 days as a fan",
    osShot2Alt: "Oshipass ticket screen with the lottery result and payment deadline",
    osShot3Alt: "Oshipass savings goal for a trip to a concert",
    phName: "Paw Hunter",
    phKind: "Touch game for cats, on iPhone and iPad",
    phText: "Mice, butterflies, koi and a dot of light run across the screen for your cat to catch. No ads during the hunt; speed, numbers and playground adjust to each cat.",
    phDate: "Released 8 November 2026",
    phShot1Alt: "Paw Hunter: a mouse running across a wooden floor",
    phShot2Alt: "Paw Hunter: a koi swimming between lily pads",
    phShot3Alt: "Paw Hunter: a butterfly over grass",
    bbName: "Bit by Bit",
    bbKind: "Budget book for Android",
    bbText: "A budget book that lives only on the phone: one-tap entries, monthly and category budgets, what you can still spend today, and a full JSON backup. In 18 languages.",
    bbDate: "Available on Google Play",
    bbShot1Alt: "Bit by Bit overview with this month’s remaining budget",
    bbShot2Alt: "Bit by Bit entry screen with the calculator keypad",
    bbShot3Alt: "Bit by Bit calendar of daily spending",

    nextTitle: "Coming next",
    iqKind: "Spot the odd one out among moving shapes",
    evKind: "Split trip expenses in 12 currencies",
    alName: "AbyssLure",
    alKind: "Idle game set in a deep, dark sea",
    drKind: "Raise and collect sea creatures in a gothic lab",
    phrKind: "2D action with abilities picked by roulette",
    nextNote: "Store status as of 9 November 2026.",

    workTitle: "Games I’ve worked on",
    workIntro: "Mobile games built with teams in Tokyo.",
    ppAlt: "Puzzle Panic store art: a chef heroine above a match puzzle board",
    ppMeta: "Limit Break, soft launch in April 2026",
    ppText: "Client engineer (Unity). Gameplay and boss systems, reward and out-game flows, async code with UniTask, unit tests and debug tools. I work daily with designers, planners and QA in Japan, the US and the Philippines.",
    launchPost: "Launch post",
    blAlt: "Blue Lock Project: World Champion key art",
    blMeta: "Rudel, released 2022",
    kgAlt: "Kingdom Itadaki key art",
    kgMeta: "Rudel, released 2024",
    rudelText: "Gameplay, user interface and live-service features, from launch through live operation.",
    officialSite: "Official site",
    trailer: "Trailer",
    alsoRudel: "Also at Rudel:",
    artCredit: "Game art from each title’s App Store page, © Limit Break Inc. and Rudel Inc.",

    aboutTitle: "About",
    aboutText: "Five years of making mobile games in Tokyo, in teams and on my own.",
    aboutMore: "Core gameplay and boss systems, out-game UI, live events, async code, tests and the tools that keep a team fast. At Rudel I worked on three live titles and became lead engineer; at Limit Break I build Puzzle Panic. Outside work, I take my own apps from idea to store page alone.",
    factBased: "Based in",
    factBasedValue: "Tokyo, Japan",
    factLang: "Works in",
    factLangValue: "Chinese, Japanese and English",
    factTools: "Tools",
    factToolsValue: "Unity, C#, UniTask and Flutter",
    experienceTitle: "Experience",
    present: "now",
    lbRole: "Unity engineer on Puzzle Panic",
    rdRole: "Unity engineer, then lead engineer",
    pgRole: "Software engineer for sensor monitoring",
    educationTitle: "Education",
    kindaiName: "Kindai University",
    kindaiProgram: "Exchange student",
    nctuName: "National Chiao Tung University",
    nctuDegree: "BSc in Computer Science",

    portraitAlt: "Liu Chuan Feng with his white cat",
    contactTitle: "Get in touch",
    contactText: "I’m open to Unity engineering roles, game collaborations and questions about my apps. I reply in English, Chinese or Japanese.",
    privacy: "Privacy policy",
  },

  "zh-TW": {
    pageTitle: "Liu Chuan Feng | Unity 工程師・東京",
    skip: "跳到主要內容",
    navApps: "App",
    navWork: "參與作品",
    navAbout: "關於我",
    navContact: "聯絡",
    heroLead: "東京的 Unity 工程師。在 Limit Break 開發遊戲，也用自己的時間做 App。",
    heroCta: "在 LinkedIn 聯絡我",
    iconsLabel: "我的 App",
    iconsNote: "亮著的圖示代表已在 App Store 或 Google Play 上架。點圖示看介紹。",
    statusReview: "審查中",
    statusDev: "開發中",

    appsTitle: "已上架的 App",
    appsIntro: "每一款都由我一個人企劃、開發、上架與宣傳。",
    pdKind: "合成益智遊戲，支援 iOS 與 Android",
    pdText: "把行星丟進容器，相同的行星會合成更大的星球。在盤面塞滿前，選擇能改變大小、重力與分數的 Roguelike 強化。",
    pdDate: "2026 年 8 月 24 日上架",
    gamePage: "遊戲介紹頁",
    pdVideoAlt: "Planet Drop 宣傳影片：行星落下並合成",
    pdShotAlt: "Planet Drop 的強化選擇畫面，有三個 Roguelike 強化",
    pdShot2Alt: "Planet Drop 的結算畫面，顯示分數與星塵獎勵",
    osName: "追星護照",
    osKind: "追星管理 App，支援 iOS 與 Android",
    osText: "追星天數、門票抽選與付款期限、行事曆、存錢目標和每場演出的回憶，全部整理在一個 App。不需要帳號，資料只存在手機裡。",
    osDate: "2026 年 11 月 2 日上架",
    demoVideo: "示範影片",
    osShot1Alt: "追星護照首頁，顯示追星第 837 天",
    osShot2Alt: "追星護照的門票畫面，顯示抽選結果與付款期限",
    osShot3Alt: "追星護照的遠征存錢目標",
    phName: "肉球獵人",
    phKind: "給貓咪玩的觸控遊戲，支援 iPhone 與 iPad",
    phText: "老鼠、蝴蝶、錦鯉和光點在螢幕上跑動，讓貓咪來抓。狩獵途中不出現廣告，速度、數量和場地都能依每隻貓調整。",
    phDate: "2026 年 11 月 8 日上架",
    phShot1Alt: "肉球獵人：一隻老鼠跑過木地板",
    phShot2Alt: "肉球獵人：錦鯉在睡蓮之間游動",
    phShot3Alt: "肉球獵人：蝴蝶飛過草地",
    bbName: "一點一滴記帳本",
    bbKind: "記帳 App，支援 Android",
    bbText: "只存在手機裡的記帳 App：一鍵記帳、月預算與分類預算、顯示今天還能花多少，並可完整 JSON 備份。支援 18 種語言。",
    bbDate: "已在 Google Play 上架",
    bbShot1Alt: "一點一滴記帳本的總覽，顯示本月剩餘預算",
    bbShot2Alt: "一點一滴記帳本的記帳畫面與計算機鍵盤",
    bbShot3Alt: "一點一滴記帳本的每日支出行事曆",

    nextTitle: "接下來的作品",
    iqKind: "在一群動態圖形中找出不一樣的那個",
    evKind: "旅行分帳，支援 12 種貨幣",
    alName: "深淵餌燈",
    alKind: "以黑暗深海為舞台的放置遊戲",
    drKind: "在哥德風海洋研究室培育、收集海洋生物",
    phrKind: "用輪盤抽能力的 2D 動作遊戲",
    nextNote: "審查狀態以 2026 年 11 月 9 日為準。",

    workTitle: "參與開發的遊戲",
    workIntro: "在東京與團隊一起開發的手機遊戲。",
    ppAlt: "Puzzle Panic 商店圖：廚師女主角與消除盤面",
    ppMeta: "Limit Break，2026 年 4 月測試上線",
    ppText: "用戶端工程師（Unity）。負責玩法與 Boss 系統、獎勵與外圍流程、UniTask 非同步處理、單元測試與除錯工具。每天與日本、美國、菲律賓的設計、企劃和 QA 合作。",
    launchPost: "上線公告",
    blAlt: "藍色監獄 Project: World Champion 主視覺",
    blMeta: "Rudel，2022 年上線",
    kgAlt: "王者天下 頂天 主視覺",
    kgMeta: "Rudel，2024 年上線",
    rudelText: "參與玩法、UI 與營運系統等功能開發，從上線一路到營運。",
    officialSite: "官方網站",
    trailer: "宣傳影片",
    alsoRudel: "在 Rudel 也參與過：",
    artCredit: "遊戲圖片取自各作品的 App Store 頁面，© Limit Break Inc. 與 Rudel Inc.",

    aboutTitle: "關於我",
    aboutText: "在東京開發手機遊戲五年，在團隊裡，也一個人做。",
    aboutMore: "核心玩法與 Boss 系統、外圍 UI、活動、非同步處理、測試，以及讓團隊更快的工具。在 Rudel 參與三款營運中的遊戲並擔任主程式；現在於 Limit Break 開發 Puzzle Panic。工作之外，我一個人把自己的 App 從點子做到上架。",
    factBased: "所在地",
    factBasedValue: "日本東京",
    factLang: "工作語言",
    factLangValue: "中文、日文、英文",
    factTools: "工具",
    factToolsValue: "Unity、C#、UniTask、Flutter",
    experienceTitle: "工作經歷",
    present: "至今",
    lbRole: "Unity 工程師，負責 Puzzle Panic",
    rdRole: "Unity 工程師，後擔任主程式",
    pgRole: "軟體工程師，開發感測器監控系統",
    educationTitle: "學歷",
    kindaiName: "近畿大學",
    kindaiProgram: "交換學生",
    nctuName: "國立交通大學",
    nctuDegree: "資訊工程學士",

    portraitAlt: "Liu Chuan Feng 和他的白貓",
    contactTitle: "聯絡我",
    contactText: "歡迎聊 Unity 工程職缺、遊戲合作，或任何關於我的 App 的問題。可以用中文、日文或英文聯絡我。",
    privacy: "隱私權政策",
  },

  ja: {
    pageTitle: "Liu Chuan Feng | Unity エンジニア・東京",
    skip: "本文へスキップ",
    navApps: "アプリ",
    navWork: "参加タイトル",
    navAbout: "プロフィール",
    navContact: "連絡先",
    heroLead: "東京の Unity エンジニア。Limit Break でゲームを開発しながら、個人でもアプリを作っています。",
    heroCta: "LinkedIn で連絡する",
    iconsLabel: "自作アプリ",
    iconsNote: "明るいアイコンは App Store または Google Play で公開中です。タップすると紹介に移動します。",
    statusReview: "審査中",
    statusDev: "開発中",

    appsTitle: "公開中のアプリ",
    appsIntro: "どれも企画・開発・公開・宣伝まで一人で手がけました。",
    pdKind: "マージパズルゲーム（iOS・Android）",
    pdText: "惑星を落とし、同じ惑星同士を合体させて大きくしていくパズル。盤面が埋まる前に、サイズ・重力・スコアを変えるローグライク強化を選びます。",
    pdDate: "2026 年 8 月 24 日リリース",
    gamePage: "ゲームページ",
    pdVideoAlt: "Planet Drop のプロモーション動画：惑星が落ちて合体する様子",
    pdShotAlt: "Planet Drop の強化選択画面（ローグライク強化 3 種）",
    pdShot2Alt: "Planet Drop のリザルト画面（スコアとスターダスト報酬）",
    osName: "推しパス",
    osKind: "推し活管理アプリ（iOS・Android）",
    osText: "推し日数、チケットの当落と入金期限、カレンダー、推し貯金、参戦の思い出をひとつのアプリで管理。アカウント不要で、データは端末内に保存されます。",
    osDate: "2026 年 11 月 2 日リリース",
    demoVideo: "デモ動画",
    osShot1Alt: "推しパスのホーム画面（推して 837 日目）",
    osShot2Alt: "推しパスのチケット画面（当落と入金期限）",
    osShot3Alt: "推しパスの遠征貯金",
    phName: "肉球ハンター",
    phKind: "猫向けタッチゲーム（iPhone・iPad）",
    phText: "走るネズミ、舞う蝶、泳ぐコイ、光の点を猫がタッチして遊ぶゲーム。狩りの最中は広告なし。速度・数・遊び場を猫ごとに調整できます。",
    phDate: "2026 年 11 月 8 日リリース",
    phShot1Alt: "肉球ハンター：木の床を走るネズミ",
    phShot2Alt: "肉球ハンター：睡蓮の間を泳ぐコイ",
    phShot3Alt: "肉球ハンター：草の上を舞う蝶",
    bbName: "コツコツ家計簿",
    bbKind: "家計簿アプリ（Android）",
    bbText: "端末の中だけで完結する家計簿。よく使う記録はワンタップ、月とカテゴリの予算、今日あといくら使えるかを表示し、JSON で完全バックアップ。18 言語に対応。",
    bbDate: "Google Play で公開中",
    bbShot1Alt: "コツコツ家計簿の概要画面（今月の残り予算）",
    bbShot2Alt: "コツコツ家計簿の入力画面と電卓キー",
    bbShot3Alt: "コツコツ家計簿の日別支出カレンダー",

    nextTitle: "次の作品",
    iqKind: "動く図形の中から仲間はずれを探すパズル",
    evKind: "12 通貨に対応した旅行の割り勘アプリ",
    alName: "深淵餌燈",
    alKind: "暗い深海が舞台の放置ゲーム",
    drKind: "ゴシックな海の研究室で生き物を育てて集める",
    phrKind: "ルーレットで能力を選ぶ 2D アクション",
    nextNote: "審査状況は 2026 年 11 月 9 日時点です。",

    workTitle: "参加したタイトル",
    workIntro: "東京でチームと一緒に開発したモバイルゲームです。",
    ppAlt: "Puzzle Panic のストア画像：シェフのヒロインとパズル盤面",
    ppMeta: "Limit Break、2026 年 4 月ソフトローンチ",
    ppText: "クライアントエンジニア（Unity）。ゲームプレイとボスシステム、報酬・アウトゲームの導線、UniTask による非同期処理、ユニットテストとデバッグツールを担当。日本・アメリカ・フィリピンのデザイナー、プランナー、QA と日々連携しています。",
    launchPost: "リリース告知",
    blAlt: "ブルーロック Project: World Champion のキービジュアル",
    blMeta: "Rudel、2022 年リリース",
    kgAlt: "キングダム 頂天 のキービジュアル",
    kgMeta: "Rudel、2024 年リリース",
    rudelText: "ゲームプレイ、UI、運営系の機能開発を、リリースから運営まで担当しました。",
    officialSite: "公式サイト",
    trailer: "PV",
    alsoRudel: "Rudel ではほかに：",
    artCredit: "ゲーム画像は各タイトルの App Store ページより。© Limit Break Inc.、Rudel Inc.",

    aboutTitle: "プロフィール",
    aboutText: "東京でモバイルゲームを作って 5 年。チームでも、一人でも。",
    aboutMore: "コアゲームプレイとボス、アウトゲーム UI、イベント、非同期処理、テスト、チームを速くするツールまで。Rudel では運営中の 3 タイトルに参加しリードエンジニアを担当、現在は Limit Break で Puzzle Panic を開発しています。仕事の外では、自分のアプリを企画からストア公開まで一人で手がけています。",
    factBased: "拠点",
    factBasedValue: "東京",
    factLang: "使用言語",
    factLangValue: "中国語、日本語、英語",
    factTools: "ツール",
    factToolsValue: "Unity、C#、UniTask、Flutter",
    experienceTitle: "職歴",
    present: "現在",
    lbRole: "Unity エンジニア（Puzzle Panic）",
    rdRole: "Unity エンジニア、のちリードエンジニア",
    pgRole: "ソフトウェアエンジニア（センサー監視）",
    educationTitle: "学歴",
    kindaiName: "近畿大学",
    kindaiProgram: "交換留学",
    nctuName: "国立交通大学（台湾）",
    nctuDegree: "資訊工程学科 学士",

    portraitAlt: "白い猫と一緒の Liu Chuan Feng",
    contactTitle: "お問い合わせ",
    contactText: "Unity エンジニアのお仕事、ゲームの協業、アプリについてのご質問など、お気軽にどうぞ。日本語・中国語・英語で返信できます。",
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
  const text = (key) => dictionary[key] ?? translations.en[key];

  document.documentElement.lang = selected;
  document.title = text("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = text(element.dataset.i18n);
    if (value) element.textContent = value;
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

/* The Planet Drop clip plays only while it is on screen, and never under reduced motion. */
function initializeVideos() {
  const videos = document.querySelectorAll("video");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    videos.forEach((video) => { video.controls = true; });
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.preload = "auto";
        target.play().catch(() => { target.controls = true; });
      } else {
        target.pause();
      }
    });
  }, { threshold: 0.35 });
  videos.forEach((video) => observer.observe(video));
}

function initializePortfolio() {
  if (!document.querySelector(".home")) return;

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  const currentYear = document.getElementById("current-year");
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());

  setLanguage(getInitialLanguage());
  initializeVideos();
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initializePortfolio, { once: true });
  else initializePortfolio();
}
