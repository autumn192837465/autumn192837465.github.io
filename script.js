if (typeof document !== "undefined") document.documentElement.classList.add("js");

const translations = {
  en: {
    pageTitle: "Liu Chuan Feng | Unity Engineer, Tokyo",
    skip: "Skip to content",
    navWork: "Work",
    navAbout: "About",
    navContact: "Contact",
    heroLead: "Unity engineer in Tokyo. I build games at Limit Break, and make my own apps on the side.",
    heroCta: "Message me on LinkedIn",

    appsTitle: "Apps I’ve released",
    appsIntro: "Four apps, each planned, built, published and promoted by me alone.",
    navGames: "Games",
    navTools: "Tools",
    phoneLabel: "My phone with the apps I’ve released",
    phoneHint: "Tap an app on the phone to open it.",
    phoneHome: "Back to the home screen",
    widgetCity: "Tokyo",
    moreAbout: "Read about it",
    phCatchHint: "Catch the light, like a cat would.",
    phCaught: "Caught",
    catGames: "Games",
    catGamesText: "One for people, one for cats.",
    catTools: "Tools",
    catToolsText: "For everyday life. No account, and the data stays on the phone.",
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
    aboutText: "I’m a Unity engineer with more than five years of mobile game development in Tokyo, on four titles that have launched.",
    aboutMore: "My focus is gameplay and boss systems, out-game UI and live events, backed by async code with UniTask, unit tests and debug tools that keep a live game easy to update. At Rudel I worked on three live titles and became lead engineer. At Limit Break I’m a client engineer on Puzzle Panic, working every day with designers, planners and QA in Japan, the US and the Philippines.",
    aboutIndie: "Outside work I also make apps independently, handling planning, development, release and promotion myself. Four are live on the App Store and Google Play.",
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
    navWork: "參與作品",
    navAbout: "關於我",
    navContact: "聯絡",
    heroLead: "東京的 Unity 工程師。在 Limit Break 開發遊戲，也用自己的時間做 App。",
    heroCta: "在 LinkedIn 聯絡我",

    appsTitle: "已上架的 App",
    appsIntro: "四款 App，每一款都由我一個人企劃、開發、上架與宣傳。",
    navGames: "遊戲",
    navTools: "工具",
    phoneLabel: "我的手機，裡面是已上架的 App",
    phoneHint: "點手機上的 App，打開看看。",
    phoneHome: "回到主畫面",
    widgetCity: "東京",
    moreAbout: "看介紹",
    phCatchHint: "像貓一樣，抓住那個光點。",
    phCaught: "抓到",
    catGames: "遊戲",
    catGamesText: "一款給人玩，一款給貓玩。",
    catTools: "工具",
    catToolsText: "日常用的小工具。不用註冊，資料只存在手機裡。",
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
    aboutText: "我是 Unity 遊戲工程師，在東京從事手機遊戲開發五年以上，參與過四款已上線的作品。",
    aboutMore: "專長是遊戲玩法與 Boss 系統、外圍 UI 與活動功能，並以 UniTask 非同步架構、單元測試和除錯工具，讓營運中的遊戲能穩定地持續更新。在 Rudel 參與三款營運中的作品，並擔任主程式；現在於 Limit Break 擔任 Puzzle Panic 的客戶端工程師，每天與日本、美國、菲律賓的設計師、企劃和 QA 協作。",
    aboutIndie: "工作之外，我也獨立開發 App，從企劃、開發到上架與宣傳都由自己完成，目前已在 App Store 與 Google Play 上架四款。",
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
    navWork: "参加タイトル",
    navAbout: "プロフィール",
    navContact: "連絡先",
    heroLead: "東京の Unity エンジニア。Limit Break でゲームを開発しながら、個人でもアプリを作っています。",
    heroCta: "LinkedIn で連絡する",

    appsTitle: "公開中のアプリ",
    appsIntro: "4 本のアプリ。どれも企画・開発・公開・宣伝まで一人で手がけました。",
    navGames: "ゲーム",
    navTools: "ツール",
    phoneLabel: "公開中のアプリが入った私のスマホ",
    phoneHint: "スマホのアプリをタップして開いてみてください。",
    phoneHome: "ホーム画面に戻る",
    widgetCity: "東京",
    moreAbout: "紹介を見る",
    phCatchHint: "猫になったつもりで、光をつかまえて。",
    phCaught: "キャッチ",
    catGames: "ゲーム",
    catGamesText: "人が遊ぶものと、猫が遊ぶもの。",
    catTools: "ツール",
    catToolsText: "毎日の暮らしに。登録不要で、データはスマホの中だけに残ります。",
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
    aboutText: "東京でモバイルゲーム開発に 5 年以上携わる Unity エンジニアです。これまでにリリースされた 4 タイトルの開発に参加してきました。",
    aboutMore: "得意分野はゲームプレイとボスのシステム、アウトゲーム UI、イベント機能です。UniTask による非同期処理、ユニットテスト、デバッグツールなど、運営タイトルを安定して更新し続けるための基盤づくりも重視しています。Rudel では運営中の 3 タイトルに携わり、リードエンジニアを担当しました。現在は Limit Break で Puzzle Panic のクライアントエンジニアとして、日本・アメリカ・フィリピンのデザイナー、プランナー、QA と日々協業しています。",
    aboutIndie: "業務外では個人でもアプリを開発し、企画・開発・リリース・宣伝まで一人で行っています。現在、App Store と Google Play で 4 本を公開中です。",
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

const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* The Planet Drop clip in its band plays only while it is on screen, and never under reduced motion. */
function initializeVideos() {
  const videos = document.querySelectorAll("video[data-autoplay]");
  if (reduceMotion() || !("IntersectionObserver" in window)) {
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

/* Tokyo time on the phone's status bar and clock widget. */
function initializeClock() {
  const tick = () => {
    const now = new Date();
    const lang = document.documentElement.lang || "en";
    const time = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Tokyo", hour: "numeric", minute: "2-digit", hour12: false }).format(now);
    const date = new Intl.DateTimeFormat(lang, { timeZone: "Asia/Tokyo", weekday: "long", month: "long", day: "numeric" }).format(now);
    document.querySelectorAll("[data-clock]").forEach((el) => { el.textContent = time; });
    document.querySelectorAll("[data-date]").forEach((el) => { el.textContent = date; });
  };
  tick();
  setInterval(tick, 15000);
  return tick;
}

/* Paw Hunter's laser dot: it wanders, darts away from a finger, and can be caught. */
function createLaser(canvas, counter) {
  const ctx = canvas.getContext("2d");
  let w = 0, h = 0, raf = 0, last = 0, caught = 0;
  const dot = { x: 0, y: 0, vx: 0, vy: 0, tx: 0, ty: 0 };
  const pointer = { x: -999, y: -999 };
  const bursts = [];
  const pick = () => { dot.tx = w * (0.12 + Math.random() * 0.76); dot.ty = h * (0.3 + Math.random() * 0.55); };
  function size() {
    const r = Math.min(devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = Math.round(w * r); canvas.height = Math.round(h * r);
    ctx.setTransform(r, 0, 0, r, 0, 0);
    if (!dot.x) { dot.x = w / 2; dot.y = h * 0.6; pick(); }
  }
  function frame(now) {
    const dt = Math.min((now - (last || now)) / 16.7, 3); last = now;
    let ax = (dot.tx - dot.x) * 0.004, ay = (dot.ty - dot.y) * 0.004;
    const dx = dot.x - pointer.x, dy = dot.y - pointer.y, d = Math.hypot(dx, dy);
    if (d < 80 && d > 0) { ax += (dx / d) * 1.1 * (1 - d / 80); ay += (dy / d) * 1.1 * (1 - d / 80); }
    dot.vx = (dot.vx + ax * dt) * 0.9; dot.vy = (dot.vy + ay * dt) * 0.9;
    dot.x = Math.max(14, Math.min(w - 14, dot.x + dot.vx * dt));
    dot.y = Math.max(h * 0.25, Math.min(h - 70, dot.y + dot.vy * dt));
    if (Math.hypot(dot.tx - dot.x, dot.ty - dot.y) < 16 || Math.random() < 0.006) pick();
    ctx.clearRect(0, 0, w, h);
    for (let i = bursts.length - 1; i >= 0; i--) {
      const b = bursts[i]; b.t += dt;
      const k = b.t / 40; if (k >= 1) { bursts.splice(i, 1); continue; }
      ctx.strokeStyle = `rgba(255,120,150,${1 - k})`; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(b.x, b.y, 8 + k * 46, 0, Math.PI * 2); ctx.stroke();
    }
    const g = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, 22);
    g.addColorStop(0, "rgba(255,255,255,1)"); g.addColorStop(0.18, "rgba(255,40,60,1)"); g.addColorStop(1, "rgba(255,0,40,0)");
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(dot.x, dot.y, 22, 0, Math.PI * 2); ctx.fill();
    raf = requestAnimationFrame(frame);
  }
  const local = (e) => { const r = canvas.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  canvas.addEventListener("pointermove", (e) => { [pointer.x, pointer.y] = local(e); });
  canvas.addEventListener("pointerleave", () => { pointer.x = pointer.y = -999; });
  canvas.addEventListener("pointerdown", (e) => {
    const [x, y] = local(e);
    if (Math.hypot(dot.x - x, dot.y - y) < 34) {
      caught += 1; counter.textContent = String(caught);
      bursts.push({ x: dot.x, y: dot.y, t: 0 });
      dot.x = w * (0.15 + Math.random() * 0.7); dot.y = h * (0.35 + Math.random() * 0.45); pick();
      navigator.vibrate?.(15);
    } else {
      [pointer.x, pointer.y] = [x, y];
    }
  });
  return {
    start() { size(); last = 0; cancelAnimationFrame(raf); raf = requestAnimationFrame(frame); },
    stop() { cancelAnimationFrame(raf); raf = 0; },
  };
}

/* The phone in the hero: tap an icon and the app opens out of it, iOS-style. */
function initializePhone() {
  const phone = document.querySelector(".phone");
  if (!phone) return;
  const screen = phone.querySelector(".phone-screen");
  const homebar = phone.querySelector(".phone-homebar");
  const stage = phone.closest(".screen");
  const laserView = phone.querySelector('[data-view="paw-hunter"]');
  const laser = createLaser(laserView.querySelector("canvas"), laserView.querySelector("[data-caught]"));
  let open = null, slideTimer = 0, launcher = null;

  const animate = (el, frames, ms) => (reduceMotion() || !el.animate ? Promise.resolve() : el.animate(frames, { duration: ms, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }).finished.catch(() => {}));
  const originOf = (icon) => {
    const a = icon.getBoundingClientRect(), b = screen.getBoundingClientRect();
    return `${a.left + a.width / 2 - b.left}px ${a.top + a.height / 2 - b.top}px`;
  };
  const scale = (icon) => icon.getBoundingClientRect().width / screen.getBoundingClientRect().width;

  function startView(view) {
    const video = view.querySelector("video");
    if (video) { video.preload = "auto"; video.currentTime = 0; video.play().catch(() => { video.controls = true; }); }
    const slides = [...view.querySelectorAll(".slides img")];
    if (slides.length) {
      let i = 0;
      slides.forEach((img, n) => { img.loading = "eager"; img.classList.toggle("is-current", n === 0); });
      if (!reduceMotion()) slideTimer = setInterval(() => {
        slides[i].classList.remove("is-current"); i = (i + 1) % slides.length; slides[i].classList.add("is-current");
      }, 2400);
    }
    if (view === laserView) laser.start();
  }
  function stopView(view) {
    view.querySelector("video")?.pause();
    clearInterval(slideTimer);
    if (view === laserView) laser.stop();
  }

  async function openApp(name, icon) {
    if (open) return;
    const view = phone.querySelector(`[data-view="${name}"]`);
    if (!view) return;
    open = view; launcher = icon;
    phone.classList.remove("is-tracking");
    ["--ry", "--rx", "--gx"].forEach((p) => phone.style.removeProperty(p));
    phone.classList.add("is-open");
    view.hidden = false; homebar.hidden = false;
    startView(view);
    view.style.transformOrigin = originOf(icon);
    await animate(view, [
      { transform: `scale(${scale(icon)})`, borderRadius: "40%", opacity: 0.4 },
      { transform: "scale(1)", borderRadius: "0%", opacity: 1 },
    ], 520);
    homebar.focus({ preventScroll: true });
  }
  async function closeApp(focusIcon = true) {
    if (!open) return;
    const view = open; open = null;
    phone.classList.remove("is-open");
    await animate(view, [
      { transform: "scale(1)", borderRadius: "0%", opacity: 1 },
      { transform: `scale(${scale(launcher)})`, borderRadius: "40%", opacity: 0 },
    ], 380);
    stopView(view);
    view.hidden = true; homebar.hidden = true;
    if (focusIcon) launcher?.focus({ preventScroll: true });
  }

  phone.querySelectorAll(".launch").forEach((icon) => {
    icon.setAttribute("role", "button");
    icon.addEventListener("click", (event) => { event.preventDefault(); openApp(icon.dataset.app, icon); });
  });
  homebar.addEventListener("click", () => closeApp());
  phone.querySelectorAll(".phone-sheet a").forEach((link) => link.addEventListener("click", () => closeApp(false)));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeApp(); });
  // Swipe up from the bottom edge goes home, as on a real phone.
  let startY = null;
  screen.addEventListener("pointerdown", (e) => { const r = screen.getBoundingClientRect(); startY = e.clientY > r.bottom - 48 ? e.clientY : null; });
  screen.addEventListener("pointerup", (e) => { if (startY !== null && startY - e.clientY > 40) closeApp(); startY = null; });

  // The phone leans toward the pointer.
  if (!reduceMotion() && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let frame = 0;
    stage.addEventListener("pointermove", (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (phone.classList.contains("is-open")) return;
        const r = stage.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        phone.classList.add("is-tracking");
        phone.style.setProperty("--ry", `${-14 + x * 22}deg`);
        phone.style.setProperty("--rx", `${6 - y * 14}deg`);
        phone.style.setProperty("--gx", `${30 + x * 60}%`);
      });
    });
    stage.addEventListener("pointerleave", () => {
      phone.classList.remove("is-tracking");
      ["--ry", "--rx", "--gx"].forEach((p) => phone.style.removeProperty(p));
    });
  }
}

function initializePortfolio() {
  if (!document.querySelector(".home")) return;
  const refreshClock = initializeClock();

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => { setLanguage(button.dataset.lang); refreshClock(); });
  });

  const currentYear = document.getElementById("current-year");
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());

  setLanguage(getInitialLanguage());
  refreshClock();
  initializeVideos();
  initializePhone();
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initializePortfolio, { once: true });
  else initializePortfolio();
}
