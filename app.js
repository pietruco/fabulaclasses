/* ── FÁBULA ULTIMA — LIVRO DE CLASSES ──────────────────────
   app.js — navigation, search, rendering
──────────────────────────────────────────────────────────── */

const $ = id => document.getElementById(id);

let currentClass = null;

/* ── INIT ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildHeroGrid();
  $('classCount').textContent = CLASSES.length;

  // Check URL hash
  const hash = location.hash.replace('#', '');
  if (hash) {
    const cls = CLASSES.find(c => c.id === hash);
    if (cls) { showClass(cls); return; }
  }

  showHome();
  setupSearch();
  setupMobileMenu();
});

/* ── NAVIGATION BUILD ─────────────────────────────────────── */
function buildNav(filter = '') {
  const nav = $('classNav');
  const lf = filter.toLowerCase();
  const filtered = CLASSES.filter(c =>
    !lf ||
    c.nome.toLowerCase().includes(lf) ||
    c.outrosNomes.some(n => n.toLowerCase().includes(lf))
  );

  if (!filtered.length) {
    nav.innerHTML = `<div class="nav-no-results">Nenhuma classe encontrada</div>`;
    return;
  }

  nav.innerHTML = filtered.map(c => `
    <div class="nav-item ${currentClass?.id === c.id ? 'active' : ''}"
         data-id="${c.id}"
         onclick="handleNavClick('${c.id}')">
      <span class="nav-emoji">${c.emoji}</span>
      <span class="nav-label">${c.nome}</span>
      <span class="nav-dot"></span>
    </div>
  `).join('');
}

function buildHeroGrid() {
  const grid = $('heroGrid');
  grid.innerHTML = CLASSES.map(c => `
    <div class="hero-card" onclick="handleNavClick('${c.id}')">
      <span class="hero-card-emoji">${c.emoji}</span>
      <span class="hero-card-name">${c.nome}</span>
    </div>
  `).join('');
}

/* ── ROUTING ──────────────────────────────────────────────── */
function handleNavClick(id) {
  const cls = CLASSES.find(c => c.id === id);
  if (cls) showClass(cls);
  // Close mobile sidebar
  $('sidebar').classList.remove('open');
  $('overlay').classList.remove('open');
}

function showHome() {
  currentClass = null;
  $('home').classList.add('active');
  $('classDetail').classList.remove('active');
  buildNav();
  history.replaceState(null, '', location.pathname);
}

function showClass(cls) {
  currentClass = cls;
  history.replaceState(null, '', `#${cls.id}`);

  $('home').classList.remove('active');
  $('classDetail').classList.add('active');
  $('classDetail').innerHTML = renderClassPage(cls);
  $('classDetail').scrollTop = 0;
  $('main').scrollTo(0, 0);

  buildNav();

  // Scroll nav item into view
  const activeNav = document.querySelector('.nav-item.active');
  if (activeNav) activeNav.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

/* ── CLASS PAGE RENDERER ──────────────────────────────────── */
function renderClassPage(cls) {
  const colorStyle = `style="--class-color: ${cls.cor}"`;

  // Benefits
  const benefits = cls.beneficiosIniciais.map(b =>
    `<div class="benefit-item">${b}</div>`
  ).join('');

  // Questions
  const questions = cls.perguntas.map(q =>
    `<div class="question-item">${q}</div>`
  ).join('');

  // Powers
  const powers = cls.poderes.map(p => `
    <div class="power-card">
      <div class="power-header">
        <span class="power-name">${p.nome}</span>
        ${p.custo && p.custo !== '—' ? `<span class="power-cost">Nível ${p.custo}</span>` : ''}
      </div>
      <p class="power-desc">${p.descricao}</p>
    </div>
  `).join('');

  // Sub-sections (Arcanos, Terioformas, etc.)
  let subSections = '';
  if (cls.subSecoes) {
    subSections = cls.subSecoes.map(sec => `
      <div class="sub-section">
        <h3 class="sub-section-title">${sec.titulo}</h3>
        <div class="sub-items-list">
          ${sec.itens.map(item => `
            <div class="sub-item">
              <div class="sub-item-name">${item.nome}</div>
              <div class="sub-item-desc">${item.descricao}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  return `
    <div class="class-page" ${colorStyle}>

      <div class="class-nav-bar">
        <button class="back-btn" onclick="showHome()">← Início</button>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-current">${cls.nome}</span>
      </div>

      <div class="class-header">
        <div class="class-header-inner">
          <div class="class-big-emoji">${cls.emoji}</div>
          <div class="class-header-text">
            <h2 class="class-name">${cls.nome}</h2>
            <p class="class-alts">Também conhecida como: ${cls.outrosNomes.join(' · ')}</p>
            <blockquote class="class-quote">${cls.citacao}</blockquote>
          </div>
        </div>
      </div>

      <div class="class-body">
        <div class="class-main">

          <p class="section-label">Sobre a Classe</p>
          <p class="class-desc">${cls.descricao}</p>

          <p class="section-label">Poderes</p>
          <div class="powers-list">
            ${powers}
          </div>

          ${subSections}

        </div>

        <div class="class-sidebar">

          <div class="info-card">
            <div class="info-card-title">Benefícios Iniciais</div>
            ${benefits}
          </div>

          <div class="info-card">
            <div class="info-card-title">Perguntas para seu Personagem</div>
            ${questions}
          </div>

        </div>
      </div>
    </div>
  `;
}

/* ── SEARCH ───────────────────────────────────────────────── */
function setupSearch() {
  const input = $('searchInput');

  input.addEventListener('input', () => {
    const q = input.value.trim();
    buildNav(q);

    // If search matches a class precisely, show it
    if (q.length > 2) {
      const exact = CLASSES.find(c =>
        c.nome.toLowerCase() === q.toLowerCase()
      );
      if (exact) showClass(exact);
    }

    // If clearing, don't auto-navigate
    if (!q) buildNav();
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const q = input.value.trim().toLowerCase();
      const match = CLASSES.find(c =>
        c.nome.toLowerCase().includes(q) ||
        c.outrosNomes.some(n => n.toLowerCase().includes(q))
      );
      if (match) showClass(match);
    }
  });
}

/* ── MOBILE MENU ──────────────────────────────────────────── */
function setupMobileMenu() {
  const toggle = $('sidebarToggle');
  const sidebar = $('sidebar');
  const overlay = $('overlay');

  toggle.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    overlay.classList.toggle('open', open);
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
}
