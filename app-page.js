/* App pages: language switch, store order, the back button for visitors from the homepage,
   and the effects — a particle field in the hero, the pointer-tilted stage, the live demo of each app,
   the scroll-driven marquee and coverflow, and section reveals. All motion stops under reduced motion. */
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
  const motion = matchMedia("(prefers-reduced-motion: no-preference)");
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
  const moves = () => motion.matches;
  let lang = "en";
  const text = (key) => copy[lang]?.[key] ?? shared[lang]?.[key] ?? copy.en[key] ?? shared.en[key] ?? "";
  const fill = (template, values) => template.replace(/\{(\w+)\}/g, (_, k) => values[k] ?? "");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const yen = (n) => "¥" + new Intl.NumberFormat("ja-JP").format(Math.round(n));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const onLanguage = [];

  /* ── Language ─────────────────────────────────────────── */
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

  // The name rises in letter by letter. Latin words stay whole; Chinese and Japanese may wrap between characters.
  const cjk = /[぀-ヿ㐀-鿿豈-﫿＀-￯]/;
  function splitTitle(el) {
    const value = el.textContent;
    el.setAttribute("aria-label", value);
    let i = 0;
    const group = (chars) => `<span style="display:inline-block;white-space:nowrap" aria-hidden="true">${chars.map((c) => `<span class="ch" style="--i:${i++}">${esc(c)}</span>`).join("")}</span>`;
    el.innerHTML = value.split(" ").map((word) => {
      const chars = Array.from(word);
      return cjk.test(word) ? chars.map((c) => group([c])).join("") : group(chars);
    }).join(" ");
  }
  // Long single-word names (Oshipass in a wide display face) shrink to fit their column instead of overflowing.
  function fitText(el) {
    el.style.fontSize = "";
    let size = parseFloat(getComputedStyle(el).fontSize);
    for (let n = 0; n < 24 && el.scrollWidth > el.clientWidth + 1; n++) {
      size *= 0.94; el.style.fontSize = `${size}px`;
    }
  }
  const fitAll = () => document.querySelectorAll(".ap-hero h1, .dl-name").forEach(fitText);
  addEventListener("resize", fitAll);
  document.fonts?.ready.then(fitAll);

  function setLanguage(language) {
    lang = languages.includes(language) ? language : "en";
    document.documentElement.lang = lang;
    document.title = text("pageTitle");
    document.querySelector('meta[name="description"]')?.setAttribute("content", text("pageDescription"));
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = text(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => { const v = text(el.dataset.i18nAlt); if (v) el.alt = v; });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => { const v = text(el.dataset.i18nAria); if (v) el.setAttribute("aria-label", v); });
    document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    document.querySelectorAll("[data-split]").forEach(splitTitle);
    fitAll();
    onLanguage.forEach((fn) => fn());
    try { localStorage.setItem("portfolio-language", lang); } catch { /* fine without storage */ }
  }

  /* ── Store order and the back button ──────────────────── */
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) document.documentElement.classList.add("is-android");
  else if (/iphone|ipad|ipod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) document.documentElement.classList.add("is-ios");

  // Only someone who arrived from the homepage sees a way back; a shared link shows just the app.
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

  /* ── Count-up for the live numbers ────────────────────── */
  function countTo(el, to, format) {
    const from = Number(el.dataset.value || 0);
    el.dataset.value = String(to);
    if (!moves() || !Number.isFinite(from)) { el.textContent = format(to); return; }
    const start = performance.now(), dur = 700;
    cancelAnimationFrame(Number(el.dataset.raf || 0));
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur), k = 1 - Math.pow(1 - t, 3);
      el.textContent = format(from + (to - from) * k);
      if (t < 1) el.dataset.raf = String(requestAnimationFrame(step));
    };
    el.dataset.raf = String(requestAnimationFrame(step));
  }

  /* ── Hero: particle field ─────────────────────────────── */
  const hero = document.querySelector(".ap-hero");
  const canvas = hero?.querySelector(".fx-field");
  const pointer = { x: -9999, y: -9999, inside: false };
  const caughtEl = document.querySelector("[data-caught]");
  let caught = 0;
  const showCaught = () => {
    if (!caughtEl) return;
    caughtEl.hidden = caught === 0;
    caughtEl.textContent = fill(text("caught"), { n: caught });
  };
  onLanguage.push(showCaught);

  if (hero && canvas) {
    const ctx = canvas.getContext("2d");
    const kind = canvas.dataset.fx;
    let w = 0, h = 0, dpr = 1, running = false, visible = true, last = 0, textBox = null;
    const behindText = (x, y) => textBox && x > textBox.l && x < textBox.r && y > textBox.t && y < textBox.b;
    const parts = [], bursts = [];
    const rand = (a, b) => a + Math.random() * (b - a);

    const palettes = {
      hearts: ["#ff5fa2", "#ff8cc0", "#ffffff", "#c2185b", "#ffd1e3"],
      coins: ["#ffc23d", "#ffd86b", "#f5a524"],
      discs: [["#fbf3e6", "#f47c66"]],
    };
    function spawn(initial) {
      const p = { x: rand(0, w), y: initial ? rand(0, h) : (kind === "coins" ? -40 : h + 40), vx: 0, vy: 0,
        s: rand(10, kind === "discs" ? 34 : 26), r: rand(0, Math.PI * 2), vr: rand(-0.02, 0.02),
        sway: rand(0, Math.PI * 2), a: rand(0.55, 1) };
      p.c = kind === "discs" ? palettes.discs[0] : palettes[kind]?.[Math.floor(Math.random() * palettes[kind].length)];
      return p;
    }
    const laser = { x: 0, y: 0, tx: 0, ty: 0, t: 0, trail: [] };
    function resize() {
      const r = hero.getBoundingClientRect();
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Particles fade while they pass behind the words, so the text stays readable.
      const tr = hero.querySelector(".ap-hero-text")?.getBoundingClientRect();
      textBox = tr ? { l: tr.left - r.left - 16, t: tr.top - r.top - 16, r: tr.right - r.left + 16, b: tr.bottom - r.top + 16 } : null;
      if (kind !== "laser") {
        const count = Math.round(clamp(w * h / (w < 900 ? 52000 : 26000), 8, 46));
        parts.length = 0;
        for (let i = 0; i < count; i++) parts.push(spawn(true));
      } else if (!laser.x) {
        laser.x = w * 0.72; laser.y = h * 0.4; pickTarget();
      }
      if (!running) draw(0);
    }
    function pickTarget() {
      laser.tx = rand(w * 0.08, w * 0.92); laser.ty = rand(h * 0.15, h * 0.88);
    }

    function heart(x, y, s, r, c, a) {
      ctx.save(); ctx.translate(x, y); ctx.rotate(r); ctx.scale(s / 30, s / 30); ctx.globalAlpha = a;
      ctx.beginPath(); ctx.moveTo(0, 8);
      ctx.bezierCurveTo(-18, -6, -10, -22, 0, -12); ctx.bezierCurveTo(10, -22, 18, -6, 0, 8);
      ctx.fillStyle = c; ctx.fill(); ctx.restore();
    }
    function coin(x, y, s, r, c, a) {
      const flip = Math.cos(r);
      ctx.save(); ctx.translate(x, y); ctx.scale(Math.max(0.12, Math.abs(flip)), 1); ctx.globalAlpha = a;
      const g = ctx.createRadialGradient(-s * 0.3, -s * 0.3, 1, 0, 0, s);
      g.addColorStop(0, "#fff3c4"); g.addColorStop(0.5, c); g.addColorStop(1, "#c77d0a");
      ctx.beginPath(); ctx.arc(0, 0, s, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill();
      ctx.lineWidth = s * 0.12; ctx.strokeStyle = "rgba(150, 90, 0, 0.55)"; ctx.stroke();
      if (flip > 0) { ctx.fillStyle = "rgba(120, 70, 0, 0.75)"; ctx.font = `900 ${s * 1.1}px sans-serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText("¥", 0, s * 0.06); }
      ctx.restore();
    }
    function disc(x, y, s, r, c, a, gap = 0) {
      ctx.save(); ctx.translate(x, y); ctx.rotate(r); ctx.globalAlpha = a;
      ctx.beginPath(); ctx.arc(-gap, 0, s, Math.PI / 2, Math.PI * 1.5); ctx.closePath(); ctx.fillStyle = c[0]; ctx.fill();
      ctx.beginPath(); ctx.arc(gap, 0, s, -Math.PI / 2, Math.PI / 2); ctx.closePath(); ctx.fillStyle = c[1]; ctx.fill();
      ctx.restore();
    }
    const drawShape = { hearts: heart, coins: coin, discs: disc };

    function burst(x, y, n = 14) {
      for (let i = 0; i < n; i++) {
        const ang = rand(0, Math.PI * 2), sp = rand(2, 7);
        const c = kind === "laser" ? (Math.random() < 0.5 ? "#ff2a2a" : "#ffb199") : kind === "discs" ? palettes.discs[0] : palettes[kind][i % palettes[kind].length];
        bursts.push({ x, y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp - (kind === "coins" ? 3 : 1), s: rand(5, 13), r: rand(0, 6), vr: rand(-0.2, 0.2), life: 1, c });
      }
    }

    function draw(dt) {
      ctx.clearRect(0, 0, w, h);
      const f = dt / 16.7;
      if (kind === "laser") {
        laser.t += dt;
        const dx = laser.x - pointer.x, dy = laser.y - pointer.y, d = Math.hypot(dx, dy);
        if (d < 120 && pointer.inside) {            // flee the paw
          laser.x += (dx / (d || 1)) * 9 * f; laser.y += (dy / (d || 1)) * 9 * f;
          laser.x = clamp(laser.x, 20, w - 20); laser.y = clamp(laser.y, 20, h - 20);
          if (d < 60) pickTarget();
        } else {
          laser.x += (laser.tx - laser.x) * 0.045 * f; laser.y += (laser.ty - laser.y) * 0.045 * f;
          if (Math.hypot(laser.tx - laser.x, laser.ty - laser.y) < 8 && Math.random() < 0.05 * f) pickTarget();
        }
        laser.trail.push({ x: laser.x, y: laser.y }); if (laser.trail.length > 18) laser.trail.shift();
        laser.trail.forEach((p, i) => { ctx.beginPath(); ctx.arc(p.x, p.y, 2 + i * 0.35, 0, Math.PI * 2); ctx.fillStyle = `rgba(255, 40, 40, ${i / 60})`; ctx.fill(); });
        const pulse = 1 + Math.sin(laser.t / 160) * 0.15;
        const g = ctx.createRadialGradient(laser.x, laser.y, 0, laser.x, laser.y, 34 * pulse);
        g.addColorStop(0, "rgba(255, 255, 255, 1)"); g.addColorStop(0.18, "rgba(255, 40, 40, 1)"); g.addColorStop(0.5, "rgba(255, 30, 30, 0.35)"); g.addColorStop(1, "rgba(255, 0, 0, 0)");
        ctx.beginPath(); ctx.arc(laser.x, laser.y, 34 * pulse, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill();
      } else {
        for (const p of parts) {
          p.sway += 0.02 * f; p.r += p.vr * f;
          const drift = kind === "coins" ? 0.9 : -0.55;
          p.vy += ((drift * (p.s / 22)) - p.vy) * 0.03 * f;
          p.vx += (Math.sin(p.sway) * 0.4 - p.vx) * 0.03 * f;
          if (pointer.inside) {
            const dx = p.x - pointer.x, dy = p.y - pointer.y, d = Math.hypot(dx, dy);
            if (d < 150) { const k = (1 - d / 150) * 1.6; p.vx += (dx / (d || 1)) * k * f; p.vy += (dy / (d || 1)) * k * f; p.vr += 0.004; }
          }
          p.vr *= 0.99;
          p.x += p.vx * f; p.y += p.vy * f;
          if (p.y < -60 || p.y > h + 60 || p.x < -60 || p.x > w + 60) Object.assign(p, spawn(false), { x: rand(0, w) });
          drawShape[kind](p.x, p.y, p.s, p.r, p.c, behindText(p.x, p.y) ? p.a * 0.18 : p.a, kind === "discs" ? Math.max(0, Math.sin(p.sway) * p.s * 0.25) : 0);
        }
      }
      for (let i = bursts.length - 1; i >= 0; i--) {
        const b = bursts[i];
        b.vy += 0.18 * f; b.x += b.vx * f; b.y += b.vy * f; b.r += b.vr * f; b.life -= 0.018 * f;
        if (b.life <= 0) { bursts.splice(i, 1); continue; }
        if (kind === "laser") { ctx.globalAlpha = b.life; ctx.beginPath(); ctx.arc(b.x, b.y, b.s * 0.4, 0, Math.PI * 2); ctx.fillStyle = b.c; ctx.fill(); ctx.globalAlpha = 1; }
        else drawShape[kind](b.x, b.y, b.s, b.r, b.c, b.life);
      }
    }
    function loop(now) {
      if (!running) return;
      const dt = last ? Math.min(now - last, 50) : 16.7; last = now;
      draw(dt);
      requestAnimationFrame(loop);
    }
    function sync() {
      const should = visible && moves() && !document.hidden;
      if (should && !running) { running = true; last = 0; requestAnimationFrame(loop); }
      if (!should) { running = false; draw(0); }
    }
    new ResizeObserver(resize).observe(hero);
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }).observe(hero);
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener?.("change", sync);

    // Pointer: glow, tilt, and the particles' reaction.
    const glowHost = hero;
    const tilt = hero.querySelector(".stage-tilt");
    hero.addEventListener("pointermove", (event) => {
      const r = hero.getBoundingClientRect();
      pointer.x = event.clientX - r.left; pointer.y = event.clientY - r.top; pointer.inside = true;
      glowHost.style.setProperty("--mx", `${pointer.x}px`); glowHost.style.setProperty("--my", `${pointer.y}px`);
      if (tilt && finePointer.matches && moves()) {
        const nx = pointer.x / r.width - 0.5, ny = pointer.y / r.height - 0.5;
        tilt.style.setProperty("--ry", `${(nx * 22).toFixed(2)}deg`); tilt.style.setProperty("--rx", `${(-ny * 16).toFixed(2)}deg`);
      }
    });
    hero.addEventListener("pointerleave", () => {
      pointer.inside = false; pointer.x = pointer.y = -9999;
      tilt?.style.setProperty("--ry", "0deg"); tilt?.style.setProperty("--rx", "0deg");
    });
    hero.addEventListener("pointerdown", (event) => {
      if (event.target.closest("a, button, input, img")) return;
      const r = hero.getBoundingClientRect();
      const x = event.clientX - r.left, y = event.clientY - r.top;
      if (kind === "laser") {
        if (Math.hypot(laser.x - x, laser.y - y) < 46) {
          caught += 1; showCaught(); burst(laser.x, laser.y, 26);
          laser.x = rand(w * 0.1, w * 0.9); laser.y = rand(h * 0.15, h * 0.85); laser.trail.length = 0; pickTarget();
          if (!running) draw(0);
        }
      } else {
        burst(x, y, 16);
        if (!running) draw(0);
      }
    });
    resize(); sync();
  }

  /* ── Evenli: a live settle-up ─────────────────────────── */
  const settle = document.querySelector("[data-settle]");
  if (settle) {
    const inputs = [...settle.querySelectorAll("[data-paid]")];
    const shareEl = settle.querySelector("[data-share]");
    const list = settle.querySelector("[data-transfers]");
    const arrow = '<svg class="flow-arrow" viewBox="0 0 54 14" aria-hidden="true"><path d="M2 7h44" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M42 2l8 5-8 5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    let lastKey = "";
    const render = () => {
      const people = inputs.map((el) => ({ name: el.dataset.name, paid: Math.max(0, Number(el.value) || 0) }));
      const total = people.reduce((s, p) => s + p.paid, 0), share = total / people.length;
      countTo(shareEl, share, yen);
      // Fewest transfers: the one who owes most pays the one who is owed most, until everyone is even.
      const bal = people.map((p) => ({ name: p.name, b: p.paid - share }));
      const transfers = [];
      for (let guard = 0; guard < 10; guard++) {
        bal.sort((a, b) => a.b - b.b);
        const debtor = bal[0], creditor = bal[bal.length - 1];
        const amt = Math.min(-debtor.b, creditor.b);
        if (amt < 0.5) break;
        transfers.push({ from: debtor.name, to: creditor.name, amt });
        debtor.b += amt; creditor.b -= amt;
      }
      const key = lang + transfers.map((t) => t.from + t.to + Math.round(t.amt)).join("|");
      if (key === lastKey) return;
      lastKey = key;
      list.innerHTML = transfers.length
        ? transfers.map((t, i) => `<li style="--i:${i}"><span class="sr-only" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">${esc(fill(text("tPays"), { from: t.from, to: t.to }))} ${yen(t.amt)}</span>`
            + `<span class="who" aria-hidden="true"><span class="tag">${esc(t.from)}</span>${arrow}<span class="tag">${esc(t.to)}</span></span><span class="amt" aria-hidden="true">${yen(t.amt)}</span></li>`).join("")
        : `<li class="even">${esc(text("even"))}</li>`;
    };
    inputs.forEach((el) => el.addEventListener("input", render));
    onLanguage.push(() => { lastKey = ""; render(); });
  }

  /* ── Oshipass: days as a fan ──────────────────────────── */
  const days = document.querySelector("[data-days]");
  if (days) {
    const input = days.querySelector("[data-fan-date]");
    const nEl = days.querySelector("[data-days-n]");
    const next100 = days.querySelector("[data-next-100]"), nextYear = days.querySelector("[data-next-year]");
    const today = new Date(); today.setHours(0, 0, 0, 0);
    input.max = today.toISOString().slice(0, 10);
    const dayMs = 86400000;
    const render = () => {
      const [y, m, d] = (input.value || "").split("-").map(Number);
      const start = new Date(y, (m || 1) - 1, d || 1);
      const n = Math.round((today - start) / dayMs) + 1;  // the first day counts as day 1
      if (!input.value || !Number.isFinite(n) || n < 1) { nEl.textContent = "–"; nEl.dataset.value = "0"; next100.textContent = nextYear.textContent = ""; return; }
      countTo(nEl, n, (v) => new Intl.NumberFormat("en-US").format(Math.round(v)));
      const fmt = new Intl.DateTimeFormat(lang === "en" ? "en-GB" : lang, { month: "long", day: "numeric" });
      const m100 = n % 100 === 0 ? n : (Math.floor(n / 100) + 1) * 100;
      const d100 = m100 - n;
      next100.textContent = d100 === 0 ? fill(text("today100"), { m: m100 })
        : fill(text("next100"), { m: m100, d: d100, date: fmt.format(new Date(today.getTime() + d100 * dayMs)) });
      let years = today.getFullYear() - start.getFullYear();
      const anniv = (k) => new Date(start.getFullYear() + k, start.getMonth(), start.getDate());
      if (anniv(years) > today) years -= 1;
      if (years >= 1 && anniv(years).getTime() === today.getTime()) nextYear.textContent = fill(text("todayYear"), { y: years });
      else {
        const nextDate = anniv(years + 1);
        nextYear.textContent = fill(text("nextYear"), { y: years + 1, d: Math.round((nextDate - today) / dayMs), date: fmt.format(nextDate) });
      }
    };
    input.addEventListener("input", render);
    onLanguage.push(render);
  }

  /* ── Bit by Bit: what you can still spend today ───────── */
  const allow = document.querySelector("[data-allow]");
  if (allow) {
    const budget = allow.querySelector("[data-budget]"), spent = allow.querySelector("[data-spent]");
    const out = allow.querySelector(".allow-out"), nEl = allow.querySelector("[data-allow-n]"), note = allow.querySelector("[data-allow-note]");
    const render = () => {
      const now = new Date();
      const daysLeft = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate() - now.getDate() + 1;
      const left = (Number(budget.value) || 0) - (Number(spent.value) || 0);
      out.classList.toggle("is-over", left < 0);
      countTo(nEl, Math.max(0, Math.floor(left / daysLeft)), yen);
      note.textContent = left < 0 ? fill(text("over"), { x: new Intl.NumberFormat("ja-JP").format(-left) }) : fill(text("daysLeft"), { d: daysLeft });
    };
    [budget, spent].forEach((el) => el.addEventListener("input", render));
    onLanguage.push(render);
  }

  /* ── Marquee pushed by the scroll ─────────────────────── */
  const track = document.querySelector("[data-marquee]");
  if (track) {
    let half = 0, offset = 0, lastY = scrollY, skew = 0, running = false, visible = false;
    const build = () => {
      const unit = `<span>${esc(text("name"))}</span><i></i><span>${esc(text("name"))}</span><i></i>`;
      track.innerHTML = unit.repeat(6);
      half = track.scrollWidth / 2;
    };
    const tick = () => {
      if (!running) return;
      const dy = scrollY - lastY; lastY = scrollY;
      offset -= 1.2 + Math.abs(dy) * 0.9;
      skew += (clamp(-dy * 0.35, -14, 14) - skew) * 0.15;
      if (half) offset = ((offset % half) + half) % half - half;
      track.style.setProperty("--mq", `${offset.toFixed(1)}px`);
      track.style.setProperty("--skew", `${skew.toFixed(2)}deg`);
      requestAnimationFrame(tick);
    };
    const sync = () => {
      const should = visible && moves();
      if (should && !running) { running = true; lastY = scrollY; requestAnimationFrame(tick); }
      if (!should) running = false;
    };
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; sync(); }).observe(track.parentElement);
    onLanguage.push(build);
    addEventListener("resize", () => { half = track.scrollWidth / 2; });
  }

  /* ── Screens: coverflow, pinned on wide screens ───────── */
  const flowSection = document.querySelector("[data-flow]");
  if (flowSection) {
    const flow = flowSection.querySelector("[data-flow-track]");
    const cards = [...flow.querySelectorAll("img")];
    const wide = matchMedia("(min-width: 901px)");
    let overflow = 0;
    const cover = () => {
      const mid = innerWidth / 2;
      cards.forEach((img) => {
        const r = img.getBoundingClientRect();
        const off = clamp(((r.left + r.width / 2) - mid) / (r.width + 40), -2.2, 2.2);
        img.style.setProperty("--cy", `${(-off * 32).toFixed(1)}deg`);
        img.style.setProperty("--cs", (1.08 - Math.min(Math.abs(off), 1.6) * 0.14).toFixed(3));
        img.style.setProperty("--cz", `${(-Math.abs(off) * 140).toFixed(0)}px`);
        img.style.setProperty("--cb", (1 - Math.min(Math.abs(off), 1.6) * 0.28).toFixed(2));
      });
    };
    const layout = () => {
      const pin = wide.matches && moves();
      flowSection.classList.toggle("is-pinned", pin);
      if (pin) {
        flow.style.setProperty("--fx", "0px");
        overflow = Math.max(0, flow.scrollWidth - innerWidth);
        flowSection.style.setProperty("--flow-h", `${innerHeight + overflow * 1.1}px`);
      } else {
        flowSection.style.removeProperty("--flow-h"); flow.style.removeProperty("--fx");
      }
      onScroll();
    };
    const onScroll = () => {
      if (!moves()) { cards.forEach((c) => ["--cy", "--cs", "--cz", "--cb"].forEach((p) => c.style.removeProperty(p))); return; }
      if (flowSection.classList.contains("is-pinned")) {
        const r = flowSection.getBoundingClientRect();
        const p = clamp(-r.top / Math.max(1, r.height - innerHeight), 0, 1);
        flow.style.setProperty("--fx", `${(-p * overflow).toFixed(1)}px`);
      }
      cover();
    };
    addEventListener("scroll", onScroll, { passive: true });
    flow.addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", layout);
    wide.addEventListener?.("change", layout);
    motion.addEventListener?.("change", layout);
    window.addEventListener("load", layout);
    layout();
  }

  /* ── Reveals, spotlights and tilting codes ────────────── */
  const reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && moves()) {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    }), { threshold: 0.14, rootMargin: "0px 0px -6% 0px" });
    reveals.forEach((el) => io.observe(el));
  } else reveals.forEach((el) => el.classList.add("is-in"));

  document.querySelectorAll(".ap-feature").forEach((el) => el.addEventListener("pointermove", (event) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty("--sx", `${event.clientX - r.left}px`); el.style.setProperty("--sy", `${event.clientY - r.top}px`);
  }));
  document.querySelectorAll("[data-tilt]").forEach((el) => {
    el.addEventListener("pointermove", (event) => {
      if (!moves()) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--ry", `${((event.clientX - r.left) / r.width - 0.5) * 30}deg`);
      el.style.setProperty("--rx", `${-((event.clientY - r.top) / r.height - 0.5) * 30}deg`);
    });
    el.addEventListener("pointerleave", () => { el.style.setProperty("--ry", "0deg"); el.style.setProperty("--rx", "0deg"); });
  });

  document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => setLanguage(b.dataset.lang)));
  setLanguage(initial());
})();
