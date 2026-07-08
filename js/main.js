/* ══════════════════════════════════════════
   main.js — all site interactions
══════════════════════════════════════════ */

/* ─── CANVAS PARTICLES ─── */
(function initCanvas() {
  const canv = document.getElementById('canvas');
  if (!canv) return;
  const ctx = canv.getContext('2d');
  let W, H;
  const resize = () => { W = canv.width = innerWidth; H = canv.height = innerHeight; };
  resize();
  window.addEventListener('resize', resize, { passive: true });
  const pts = Array.from({ length: 38 }, () => ({
    x: Math.random() * innerWidth, y: Math.random() * innerHeight,
    vx: (Math.random() - .5) * .16, vy: (Math.random() - .5) * .16,
    r: Math.random() * 1.1 + 0.3, o: Math.random() * .22 + .04
  }));
  function getAccent() {
    return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#00fff2';
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    const ac = getAccent();
    pts.forEach(p => {
      p.x = (p.x + p.vx + W) % W; p.y = (p.y + p.vy + H) % H;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = ac; ctx.globalAlpha = p.o; ctx.fill(); ctx.globalAlpha = 1;
    });
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
        if (d < 95) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = ac; ctx.globalAlpha = .038 * (1 - d / 95);
          ctx.lineWidth = .5; ctx.stroke(); ctx.globalAlpha = 1;
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ─── NAV ─── */
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => navEl.classList.toggle('scrolled', scrollY > 50), { passive: true });
const ham = document.getElementById('nav-ham');
const mobileMenu = document.getElementById('mobile-menu');
ham.addEventListener('click', () => {
  ham.classList.toggle('open'); mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
document.querySelectorAll('#mobile-menu a').forEach(a =>
  a.addEventListener('click', () => { ham.classList.remove('open'); mobileMenu.classList.remove('open'); document.body.style.overflow = ''; })
);

/* ─── PAGE NAV ─── */
document.getElementById('btn-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.getElementById('btn-bot').addEventListener('click', () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));

/* ─── REVEAL ─── */
const ro = new IntersectionObserver(
  es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.06 }
);
function observeReveal() { document.querySelectorAll('.reveal').forEach(el => ro.observe(el)); }
observeReveal();

/* ─── COUNT-UP ─── */
const countObs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting && e.target.dataset.count) {
    const target = +e.target.dataset.count, dur = 1400, suffix = e.target.dataset.suffix || '';
    const start = Date.now();
    const step = () => {
      const p = Math.min((Date.now() - start) / dur, 1), ease = 1 - Math.pow(1 - p, 3);
      e.target.textContent = Math.round(ease * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    step(); countObs.unobserve(e.target);
  }
}), { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => countObs.observe(el));

/* ─── SKILL BARS ─── */
const barObs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { const f = e.target.querySelector('.bar-f'); if (f) f.style.width = f.dataset.w + '%'; }
}), { threshold: 0.5 });
document.querySelectorAll('.bar').forEach(el => barObs.observe(el));

/* ─── TYPEWRITER ─── */
const tgEl = document.getElementById('tagline');
if (tgEl) {
  const txt = tgEl.textContent; tgEl.textContent = ''; let ti = 0;
  setTimeout(() => {
    const type = () => { if (ti < txt.length) { tgEl.textContent += txt[ti++]; setTimeout(type, 13); } };
    type();
  }, 1300);
}

/* ─── SLIDESHOW ─── */
function initSlideshows(scope) {
  const root = scope || document;
  root.querySelectorAll('.pc-img[data-slideshow]').forEach(wrapper => {
    if (wrapper._ssInit) return;
    wrapper._ssInit = true;
    const slidesEl = wrapper.querySelector('.pc-slides');
    const dotsEl   = wrapper.querySelector('.pc-dots');
    const arrL     = wrapper.querySelector('.pc-arr-l');
    const arrR     = wrapper.querySelector('.pc-arr-r');
    const countBadge = wrapper.querySelector('.pc-slide-count');
    if (!slidesEl) return;
    const slides = Array.from(slidesEl.querySelectorAll('.pc-slide'));
    if (slides.length <= 1) {
      if (arrL) arrL.style.display = 'none';
      if (arrR) arrR.style.display = 'none';
      if (dotsEl) dotsEl.style.display = 'none';
      if (countBadge) countBadge.style.display = 'none';
      return;
    }
    let cur = 0, paused = false;
    if (dotsEl) {
      dotsEl.innerHTML = '';
      slides.forEach((_, i) => {
        const d = document.createElement('div');
        d.className = 'pc-dot' + (i === 0 ? ' active' : '');
        d.addEventListener('click', e => { e.stopPropagation(); goTo(i); });
        dotsEl.appendChild(d);
      });
    }
    function goTo(n) {
      cur = (n + slides.length) % slides.length;
      slidesEl.style.transform = 'translateX(-' + (cur * 100) + '%)';
      if (dotsEl) dotsEl.querySelectorAll('.pc-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
      if (countBadge) countBadge.textContent = (cur + 1) + '/' + slides.length;
    }
    if (countBadge) countBadge.textContent = '1/' + slides.length;
    arrL && arrL.addEventListener('click', e => { e.stopPropagation(); goTo(cur - 1); });
    arrR && arrR.addEventListener('click', e => { e.stopPropagation(); goTo(cur + 1); });
    wrapper.addEventListener('mouseenter', () => paused = true);
    wrapper.addEventListener('mouseleave', () => paused = false);
    setInterval(() => { if (!paused) goTo(cur + 1); }, 3000);
  });
}

/* ─── RENDER PROJECTS ─── */
function renderProjects() {
  const grid = document.getElementById('project-grid');
  if (!grid || typeof PROJECTS === 'undefined') return;

  grid.innerHTML = PROJECTS.map((p, i) => {
    // category tags
    const catTags = p.cats.map((c, ci) =>
      '<span class="pc-tag ' + (p.catColors[ci] || 'syn-cyan') + '">' + c + '</span>'
    ).join('');

    // stack: ALL items, no limit
    const stackHTML = p.stack.map(s =>
      '<span class="sp ' + stackColor(s) + '">' + s + '</span>'
    ).join('');

    // tools: ALL items
    const toolsHTML = (p.tools || []).map(t =>
      '<span class="sp syn-yellow">' + t + '</span>'
    ).join('');

    // slides
    let slidesInner = '';
    if (p.slides && p.slides.length > 0) {
      slidesInner = p.slides.map(src =>
        '<div class="pc-slide">' +
          '<img src="' + src + '" alt="' + p.title.replace(/"/g, '') + '" ' +
          'onerror="this.parentElement.innerHTML=\'<div class=&quot;pc-ph&quot;><span>' + p.emoji + '</span></div>\'">' +
        '</div>'
      ).join('');
    } else {
      slidesInner = '<div class="pc-slide"><div class="pc-ph"><span>' + p.emoji + '</span></div></div>';
    }

    // link buttons — stopPropagation so they don't open modal
    const ghBtn = p.github
      ? '<a href="' + p.github + '" class="pl" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="View on GitHub"><span class="pl-icon">⑂</span>GitHub</a>'
      : '<span class="pl disabled" title="Coming soon"><span class="pl-icon">⑂</span>GitHub</span>';
    const dmBtn = p.demo
      ? '<a href="' + p.demo + '" class="pl" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Live demo"><span class="pl-icon">▶</span>Demo</a>'
      : '<span class="pl disabled" title="Coming soon"><span class="pl-icon">▶</span>Demo</span>';
    const ptBtn = p.portfolio
      ? '<a href="' + p.portfolio + '" class="pl" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Portfolio page"><span class="pl-icon">🔗</span>Portfolio</a>'
      : '<span class="pl disabled" title="Coming soon"><span class="pl-icon">🔗</span>Portfolio</span>';

    const delay = ['', 'rd1', 'rd2'][i % 3];

    return (
      '<div class="pc reveal ' + delay + '" data-tags="' + p.tags.join(' ') + '" data-proj="' + i + '" tabindex="0" role="article">' +
        // THUMBNAIL SLIDESHOW
        '<div class="pc-img" data-slideshow>' +
          '<div class="pc-slides">' + slidesInner + '</div>' +
          '<div class="pc-dots"></div>' +
          '<button class="pc-arr pc-arr-l" aria-label="Previous" onclick="event.stopPropagation()">&#8249;</button>' +
          '<button class="pc-arr pc-arr-r" aria-label="Next" onclick="event.stopPropagation()">&#8250;</button>' +
          '<span class="pc-num">' + p.num + '</span>' +
          '<span class="pc-slide-count"></span>' +
          '<div class="pc-hover-hint">Click for details</div>' +
        '</div>' +
        // CARD BODY — compact: tags + title + stack + links only
        '<div class="pc-body">' +
          '<div class="pc-tags">' + catTags + '</div>' +
          '<h3 class="pc-title">' + p.title + '</h3>' +
          '<div class="pc-stack-section">' +
            '<div class="pc-stack-label">Stack</div>' +
            '<div class="pc-stack">' + stackHTML + '</div>' +
          '</div>' +
          (toolsHTML ? (
            '<div class="pc-stack-section" style="margin-top:6px">' +
              '<div class="pc-stack-label">Tools</div>' +
              '<div class="pc-stack">' + toolsHTML + '</div>' +
            '</div>'
          ) : '') +
          '<div class="pc-links">' + ghBtn + dmBtn + ptBtn + '</div>' +
        '</div>' +
      '</div>'
    );
  }).join('');

  observeReveal();
  initSlideshows(grid);
  buildFilterCounts();
}

/* ─── FILTER ─── */
const SUB_PANELS = { ds: 'pf-sub-ds', ai: 'pf-sub-ai', other: 'pf-sub-other' };

function buildFilterCounts() {
  const cards = document.querySelectorAll('.pc');
  const counts = { all: cards.length };
  cards.forEach(c => {
    (c.dataset.tags || '').split(/\s+/).filter(Boolean).forEach(tag => { counts[tag] = (counts[tag] || 0) + 1; });
  });
  document.querySelectorAll('.pf-main .fb').forEach(btn => {
    const f = btn.dataset.f;
    const label = btn.dataset.label || btn.textContent.replace(/\d+/g, '').replace('▾', '').trim();
    btn.dataset.label = label;
    const n = counts[f] || 0;
    const arrow = btn.dataset.hasSub ? ' <span style="font-size:.55em;opacity:.7">▾</span>' : '';
    btn.innerHTML = label + arrow + ' <span class="fb-count">' + n + '</span>';
  });
}

function filterCards(tag) {
  document.querySelectorAll('.pc').forEach(c => {
    const show = tag === 'all' || (c.dataset.tags || '').split(/\s+/).includes(tag);
    if (show) { c.style.display = ''; requestAnimationFrame(() => { c.style.opacity = '1'; c.style.transform = ''; }); }
    else { c.style.opacity = '0'; c.style.transform = 'scale(0.96)'; setTimeout(() => { if (c.style.opacity === '0') c.style.display = 'none'; }, 280); }
  });
}

function closeAllSubs() {
  Object.values(SUB_PANELS).forEach(id => { const el = document.getElementById(id); if (el) el.classList.remove('open'); });
}

function initProjectFilter() {
  document.querySelectorAll('.pf-main .fb').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.pf-main .fb').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.fb-sub').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      closeAllSubs();
      const panelId = SUB_PANELS[this.dataset.hasSub];
      if (panelId) { const el = document.getElementById(panelId); if (el) el.classList.add('open'); }
      filterCards(this.dataset.f);
    });
  });
  document.addEventListener('click', e => {
    const sub = e.target.closest('.fb-sub');
    if (sub && sub.dataset.f && sub.closest('.pf-sub')) {
      document.querySelectorAll('.fb-sub').forEach(b => b.classList.remove('active'));
      sub.classList.add('active');
      filterCards(sub.dataset.f);
    }
  });
}

/* ─── PROJECT DETAIL MODAL ─── */
function openProjectModal(idx) {
  const p = PROJECTS[idx];
  if (!p) return;
  const overlay = document.getElementById('proj-modal-overlay');
  const modalImg = document.getElementById('modal-main-img');
  const modalThumbsRow = document.getElementById('modal-thumbs');

  const firstSlide = (p.slides && p.slides.length > 0) ? p.slides[0] : null;
  if (firstSlide) {
    modalImg.innerHTML = '<img src="' + firstSlide + '" alt="' + p.title.replace(/"/g,'') + '" onerror="this.parentElement.innerHTML=\'<div class=&quot;pc-ph&quot; style=&quot;font-size:5rem&quot;>' + p.emoji + '</div>\'">';
  } else {
    modalImg.innerHTML = '<div class="pc-ph" style="font-size:5rem;height:100%;">' + p.emoji + '</div>';
  }

if (p.slides && p.slides.length > 1) {
    modalThumbsRow.innerHTML = p.slides.map((src, i) =>
      '<div class="proj-modal-thumb ' + (i === 0 ? 'active' : '') + '" onclick="switchModalImg(this,\'' + src.replace(/'/g,"\\'") + '\')">' +
        '<img src="' + src + '" alt="slide ' + (i+1) + '" onerror="this.parentElement.style.display=\'none\'">' +
      '</div>'
    ).join('');
    modalThumbsRow.style.display = 'flex';
} else {
    modalThumbsRow.style.display = 'none';
}

  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-date').textContent  = p.date || '';
  document.getElementById('modal-tags').innerHTML    = p.cats.map((c, ci) =>
    '<span class="pc-tag ' + (p.catColors[ci] || 'syn-cyan') + '">' + c + '</span>'
  ).join('');
  document.getElementById('modal-problem').textContent  = p.problem  || '—';
  document.getElementById('modal-solution').textContent = p.solution || '—';
  document.getElementById('modal-contrib').innerHTML    = (p.contribution || []).map(b => '<li>' + b + '</li>').join('');
  document.getElementById('modal-result').textContent   = p.result   || '—';

  const stackH = p.stack.map(s => '<span class="sp ' + stackColor(s) + '">' + s + '</span>').join('');
  const toolsH = p.tools.map(t => '<span class="sp syn-yellow">' + t + '</span>').join('');
  document.getElementById('modal-stack').innerHTML =
    '<div style="margin-bottom:8px"><span style="font-family:var(--mono-f);font-size:.54rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--text-d)">Stack</span><div class="proj-modal-stacks" style="margin-top:5px">' + stackH + '</div></div>' +
    '<div><span style="font-family:var(--mono-f);font-size:.54rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--text-d)">Tools</span><div class="proj-modal-stacks" style="margin-top:5px">' + toolsH + '</div></div>';

  const ghBtn = p.github    ? '<a href="' + p.github    + '" class="pl" target="_blank" rel="noopener">GitHub →</a>' : '';
  const dmBtn = p.demo      ? '<a href="' + p.demo      + '" class="pl" target="_blank" rel="noopener">Live Demo →</a>' : '';
  const ptBtn = p.portfolio ? '<a href="' + p.portfolio + '" class="pl" target="_blank" rel="noopener">Portfolio →</a>' : '';
  document.getElementById('modal-links').innerHTML = ghBtn + dmBtn + ptBtn || '<span style="font-family:var(--mono-f);font-size:.65rem;color:var(--text-d)">No links yet</span>';

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function switchModalImg(el, src) {
  document.getElementById('modal-main-img').innerHTML = '<img src="' + src + '" alt="">';
  document.querySelectorAll('.proj-modal-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function closeProjectModal() {
  document.getElementById('proj-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('click', e => {
  const card = e.target.closest('.pc');
  if (!card) return;
  if (e.target.closest('.pl') || e.target.closest('.pc-arr') || e.target.closest('.pc-dot')) return;
  const idx = card.dataset.proj;
  if (idx !== undefined) openProjectModal(+idx);
});

document.getElementById('proj-modal-overlay').addEventListener('click', function (e) {
  if (e.target === this) closeProjectModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeProjectModal(); closeCertModal(); closeLightbox(); }
});

/* ─── CERT MODAL ─── */
function openCertModal() {
  const overlay = document.getElementById('cert-modal');
  document.getElementById('cert-modal-grid').innerHTML = ALL_CERTS.map(buildCertCard).join('');
  document.getElementById('modal-cert-count').textContent = ALL_CERTS.length + ' total';
  document.getElementById('cert-total-label').textContent = 'Total: ' + ALL_CERTS.length + ' certificates';
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.querySelectorAll('.cert-modal-filters .fb-sub').forEach(b => b.classList.remove('active'));
  const allBtn = document.querySelector('.cert-modal-filters .fb-sub[data-mf="all"]');
  if (allBtn) allBtn.classList.add('active');
}
function closeCertModal() {
  document.getElementById('cert-modal').classList.remove('open');
  document.body.style.overflow = '';
}
function filterModal(btn, cat) {
  document.querySelectorAll('.cert-modal-filters .fb-sub').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filtered = cat === 'all' ? ALL_CERTS : ALL_CERTS.filter(c => c.cat === cat);
  document.getElementById('cert-modal-grid').innerHTML = filtered.map(buildCertCard).join('');
}
function buildCertCard(c) {
  return '<div class="cc ' + c.cat + '"><div class="cc-issuer">' + c.issuer + '</div><div class="cc-name">' + c.name + '</div><div class="cc-date">Issued: ' + c.date + '</div><a href="' + c.link + '" class="cc-link">Verify →</a></div>';
}
document.getElementById('cert-modal').addEventListener('click', function (e) { if (e.target === this) closeCertModal(); });

/* ─── LIGHTBOX ─── */
function openLightbox(src, caption) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-caption').textContent = caption || '';
  lb.classList.add('open'); document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── CONTACT FORM ─── */
function sendMsg(btn) {
  const name    = document.getElementById('f-name').value.trim()    || '(no name)';
  const email   = document.getElementById('f-email').value.trim()   || '(no email)';
  const subject = document.getElementById('f-subject').value        || 'General Inquiry';
  const msg     = document.getElementById('f-msg').value.trim()     || '(no message)';
  const body = 'Hi Puteri,\n\nName: ' + name + '\nEmail: ' + email + '\n\n' + msg + '\n\n---\nSent from Portfolio Website';
  window.location.href = 'mailto:puteriazli.it@gmail.com?subject=' + encodeURIComponent('[Portfolio] ' + subject) + '&body=' + encodeURIComponent(body);
  btn.textContent = '✓ Opening email app...'; btn.style.background = 'var(--syn-green)'; btn.style.color = '#000';
  setTimeout(() => { btn.textContent = 'Send via Email →'; btn.style.background = ''; btn.style.color = ''; }, 3000);
}

/* ─── THEME SWITCHER ─── */
(function initTheme() {
  const tsBtn = document.getElementById('ts-btn');
  const tsPanel = document.getElementById('ts-panel');
  const lightThemes = ['cream-light', 'arctic-white'];
  tsBtn.addEventListener('click', e => { e.stopPropagation(); tsPanel.classList.toggle('open'); });
  document.addEventListener('click', e => { if (!document.getElementById('ts').contains(e.target)) tsPanel.classList.remove('open'); });
  document.querySelectorAll('.ts-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.ts-opt').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      const t = opt.dataset.t;
      if (t === 'neon-cyan') document.documentElement.removeAttribute('data-theme');
      else document.documentElement.setAttribute('data-theme', t);
      navEl.style.background = lightThemes.includes(t) ? 'rgba(255,255,255,0.88)' : 'rgba(0,0,0,0.6)';
      tsPanel.classList.remove('open');
    });
  });
})();

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initProjectFilter();
  const lbl = document.getElementById('cert-total-label');
  if (lbl && typeof ALL_CERTS !== 'undefined') lbl.textContent = 'Total: ' + ALL_CERTS.length + ' certificates';
});
