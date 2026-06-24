/* ── FÁBULA ULTIMA — app.js ── */
const $ = id => document.getElementById(id);

// Class type tags for filtering
const CLASS_TAGS = {
  "andarilho": "utilidade", "arcanista": "magia", "astrologo": "magia",
  "atirador": "combate", "bandoleiro": "combate", "carteador": "magia",
  "cavaleiro-magico": "combate", "comandante": "suporte", "dançarino": "suporte",
  "elementalista": "magia", "entropista": "magia", "erudito": "utilidade",
  "esper": "suporte", "espiritualista": "suporte", "floralista": "suporte",
  "forjador-de-almas": "utilidade", "furioso": "combate", "gourmet": "suporte",
  "guardião": "combate", "guerreiro-sombrio": "combate", "inventor": "utilidade",
  "invocador": "magia", "ladino": "combate", "lamina-carmesim": "combate",
  "malandro": "utilidade", "mercador": "utilidade", "mestre-de-armas": "combate",
  "mutante": "combate", "necromante": "magia", "orador": "suporte",
  "piloto": "combate", "quimerista": "magia", "simbolista": "magia",
  "virtuoso": "suporte"
};

let currentClass = null;
let currentSection = null;
let activeFilter = 'all';
let activeFeiticoTab = 'elementalista';

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  buildNav();
  setupSearch();
  setupFilters();
  setupMobileMenu();

  const hash = location.hash.replace('#', '');
  if (hash) {
    const cls = CLASSES.find(c => c.id === hash);
    if (cls) { showClass(cls); return; }
    const sections = ['dancas','feiticos','magissementes','terioformas','simbolos','versos','invocacoes','infusoes'];
    if (sections.includes(hash)) { showSection(hash); return; }
  }
  showHome();
});

/* ── HOME ── */
function renderHome() {
  $('home').innerHTML = `
    <div class="hero">
      <div class="hero-emblem">⚔</div>
      <h2 class="hero-title">Livro de Classes</h2>
      <p class="hero-sub">Fábula Ultima RPG</p>
      <p class="hero-desc">Explore todas as <strong>${CLASSES.length} classes</strong> com poderes, feitiços, danças, símbolos e muito mais.</p>
      <div class="home-filter-bar">
        <button class="home-filter-btn active" data-tag="all" onclick="filterHomeGrid(this,'all')">Todas</button>
        <button class="home-filter-btn" data-tag="combate" onclick="filterHomeGrid(this,'combate')">⚔ Combate</button>
        <button class="home-filter-btn" data-tag="magia" onclick="filterHomeGrid(this,'magia')">✨ Magia</button>
        <button class="home-filter-btn" data-tag="suporte" onclick="filterHomeGrid(this,'suporte')">🛡️ Suporte</button>
        <button class="home-filter-btn" data-tag="utilidade" onclick="filterHomeGrid(this,'utilidade')">🔧 Utilidade</button>
      </div>
      <div class="hero-grid" id="heroGrid">
        ${CLASSES.map(c => `
          <div class="hero-card" data-tag="${CLASS_TAGS[c.id]||'all'}" onclick="handleNavClick('${c.id}')">
            <span class="hero-card-emoji">${c.emoji}</span>
            <span class="hero-card-name">${c.nome}</span>
            <span class="hero-card-tag">${tagLabel(CLASS_TAGS[c.id])}</span>
          </div>
        `).join('')}
      </div>
    </div>`;
}

function tagLabel(tag) {
  return {combate:'Combate',magia:'Magia',suporte:'Suporte',utilidade:'Utilidade'}[tag] || '';
}

function filterHomeGrid(btn, tag) {
  document.querySelectorAll('.home-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.hero-card').forEach(card => {
    card.classList.toggle('hidden', tag !== 'all' && card.dataset.tag !== tag);
  });
}

/* ── NAV ── */
function buildNav(filter = '') {
  const nav = $('classNav');
  const lf = filter.toLowerCase();
  const filtered = CLASSES.filter(c => {
    const matchSearch = !lf || c.nome.toLowerCase().includes(lf) || c.outrosNomes.some(n => n.toLowerCase().includes(lf));
    const matchFilter = activeFilter === 'all' || CLASS_TAGS[c.id] === activeFilter;
    return matchSearch && matchFilter;
  });

  if (!filtered.length) {
    nav.innerHTML = `<div class="nav-no-results">Nenhuma classe encontrada</div>`;
    return;
  }

  nav.innerHTML = filtered.map(c => `
    <div class="nav-item ${currentClass?.id === c.id ? 'active' : ''}" data-id="${c.id}" onclick="handleNavClick('${c.id}')">
      <span class="nav-emoji">${c.emoji}</span>
      <span class="nav-label">${c.nome}</span>
      <span class="nav-dot"></span>
    </div>
  `).join('');

  // Mark active extra nav
  document.querySelectorAll('.extra-nav .nav-item').forEach(el => {
    el.classList.toggle('active', el.getAttribute('onclick')?.includes(`'${currentSection}'`));
  });
}

/* ── ROUTING ── */
function handleNavClick(id) {
  const cls = CLASSES.find(c => c.id === id);
  if (cls) showClass(cls);
  closeMobileMenu();
}

function showHome() {
  currentClass = null; currentSection = null;
  $('home').classList.add('active');
  $('classDetail').classList.remove('active');
  $('sectionDetail').classList.remove('active');
  buildNav();
  history.replaceState(null, '', location.pathname);
}

function showClass(cls) {
  currentClass = cls; currentSection = null;
  history.replaceState(null, '', `#${cls.id}`);
  $('home').classList.remove('active');
  $('classDetail').classList.add('active');
  $('sectionDetail').classList.remove('active');
  $('classDetail').innerHTML = renderClassPage(cls);
  $('main').scrollTo(0, 0);
  buildNav();
  const active = document.querySelector('.nav-item.active');
  if (active) active.scrollIntoView({block:'nearest',behavior:'smooth'});
}

function showSection(sec, tab) {
  currentClass = null; currentSection = sec;
  if (tab) activeFeiticoTab = tab;
  history.replaceState(null, '', `#${sec}`);
  $('home').classList.remove('active');
  $('classDetail').classList.remove('active');
  $('sectionDetail').classList.add('active');
  $('sectionDetail').innerHTML = renderSection(sec);
  $('main').scrollTo(0, 0);
  buildNav();
  closeMobileMenu();
}

/* ── POWER → SECTION LINK MAP ──
   Maps "ClasseId::NomeDoPoder" to { section, label, emoji }
   so a "Ver →" button appears inline inside that power card.
─────────────────────────────────────────────────────────── */
const POWER_LINKS = {
  // Dançarino
  'dançarino::Dança':                   { section: 'dancas',        tab: null,               label: 'Ver Danças',        emoji: '💃' },
  // Elementalista
  'elementalista::Magia Elemental':     { section: 'feiticos',      tab: 'elementalista',    label: 'Ver Feitiços',      emoji: '✨' },
  // Entropista
  'entropista::Magia Entrópica':        { section: 'feiticos',      tab: 'entropista',       label: 'Ver Feitiços',      emoji: '✨' },
  // Espiritualista
  'espiritualista::Magia Espiritual':   { section: 'feiticos',      tab: 'espiritualista',   label: 'Ver Feitiços',      emoji: '✨' },
  // Quimerista (aprende feitiços de monstros)
  'quimerista::Imitação Mágica':        { section: 'feiticos',      tab: 'elementalista',    label: 'Ver Feitiços base', emoji: '✨' },
  // Floralista
  'floralista::Cloromancia':            { section: 'magissementes', tab: null,               label: 'Ver Magissementes', emoji: '🌸' },
  // Mutante
  'mutante::Teriomorfose':              { section: 'terioformas',   tab: null,               label: 'Ver Terioformas',   emoji: '🧬' },
  // Simbolista
  'simbolista::Simbolismo':             { section: 'simbolos',      tab: null,               label: 'Ver Símbolos',      emoji: '🎨' },
  // Virtuoso
  'virtuoso::Magicanto':                { section: 'versos',        tab: null,               label: 'Ver Versos',        emoji: '🎵' },
  // Invocador
  'invocador::Invocação':               { section: 'invocacoes',    tab: null,               label: 'Ver Invocações',    emoji: '🌊' },
  // Inventor
  'inventor::Engenhocas':               { section: 'infusoes',      tab: null,               label: 'Ver Infusões',      emoji: '⚒️' },
};

/* ── CLASS PAGE ── */
function renderClassPage(cls) {
  const colorStyle = `style="--class-color:${cls.cor}"`;
  const benefits = cls.beneficiosIniciais.map(b => `<div class="benefit-item">${b}</div>`).join('');
  const questions = cls.perguntas.map(q => `<div class="question-item">${q}</div>`).join('');

  const powers = cls.poderes.map(p => {
    const key = `${cls.id}::${p.nome}`;
    const link = POWER_LINKS[key];
    const linkBtn = link
      ? `<button class="power-link-btn" onclick="showSection('${link.section}'${link.tab ? `,'${link.tab}'` : ''})">
           ${link.emoji} ${link.label} →
         </button>`
      : '';
    return `
    <div class="power-card">
      <div class="power-header">
        <span class="power-name">${p.nome}</span>
        ${p.custo && p.custo !== '—' ? `<span class="power-cost">${p.custo}</span>` : ''}
      </div>
      <p class="power-desc">${p.descricao}</p>
      ${linkBtn}
    </div>`;
  }).join('');

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
            </div>`).join('')}
        </div>
      </div>`).join('');
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
            <p class="class-alts">Também: ${cls.outrosNomes.join(' · ')}</p>
            <blockquote class="class-quote">${cls.citacao}</blockquote>
          </div>
        </div>
      </div>
      <div class="class-body">
        <div class="class-main">
          <p class="section-label">Sobre a Classe</p>
          <p class="class-desc">${cls.descricao}</p>
          <p class="section-label">Poderes</p>
          <div class="powers-list">${powers}</div>
          ${subSections}
          ${renderPoderesHeroicos(cls.id)}
        </div>
        <div class="class-sidebar-col">
          <div class="info-card">
            <div class="info-card-title">Benefícios Iniciais</div>
            ${benefits}
          </div>
          <div class="info-card">
            <div class="info-card-title">Perguntas para o Personagem</div>
            ${questions}
          </div>
        </div>
      </div>
    </div>`;
}

/* ── SECTION RENDERERS ── */
function renderSection(sec) {
  switch(sec) {
    case 'poderes-heroicos': return renderPoderesHeroicos();
    case 'dancas': return renderDancas();
    case 'feiticos': return renderFeiticos();
    case 'magissementes': return renderMagissementes();
    case 'terioformas': return renderTerioformas();
    case 'simbolos': return renderSimbolos();
    case 'versos': return renderVersos();
    case 'invocacoes': return renderInvocacoes();
    case 'infusoes': return renderInfusoes();
    default: return '';
  }
}

function refNavBar(title) {
  return `<div class="class-nav-bar">
    <button class="back-btn" onclick="showHome()">← Início</button>
    <span class="breadcrumb-sep">/</span>
    <span class="breadcrumb-current">${title}</span>
  </div>`;
}

function tagBadge(tipo) {
  return `<span class="ref-card-tag tag-${tipo}">${tipo}</span>`;
}

/* PODERES HEROICOS — seção global */
function renderPoderesHeroicos(filtroClasse) {
  const todos = PODERES_HEROICOS.filter(p => p.todosPersonagens);
  const comRequisito = PODERES_HEROICOS.filter(p => !p.todosPersonagens);
  const filtrados = filtroClasse
    ? comRequisito.filter(p => p.classes.includes(filtroClasse))
    : comRequisito;

  const navBar = filtroClasse ? '' : refNavBar('Poderes Heroicos');

  const renderCard = (p) => `
    <div class="ref-card ph-card">
      <div class="ref-card-header">
        <span class="ref-card-name">${p.nome}</span>
        ${p.todosPersonagens ? `<span class="ref-card-tag tag-suporte">Todos</span>` : ''}
      </div>
      <div class="ref-card-meta" style="font-style:italic;color:var(--text3);font-size:13px">${p.requisito}</div>
      <p class="ref-card-desc">${p.descricao}</p>
    </div>`;

  if (filtroClasse) {
    // Inline dentro da página de classe
    const todos = PODERES_HEROICOS.filter(p => p.todosPersonagens);
    if (!filtrados.length && !todos.length) return '';
    return `
      <div class="ph-inline-section">
        <p class="section-label">Poderes Heroicos Disponíveis</p>
        <div class="ph-inline-grid">
          ${todos.map(renderCard).join('')}
          ${filtrados.map(renderCard).join('')}
        </div>
      </div>`;
  }

  // Página completa
  return `${navBar}
  <div class="ref-page">
    <h2 class="ref-title">⭐ Poderes Heroicos</h2>
    <p class="ref-subtitle">Adquiridos ao dominar uma classe · Cada um pode ser escolhido uma vez (salvo exceções)</p>

    <p class="section-label">Disponíveis a Todos os Personagens</p>
    <div class="ref-grid" style="margin-bottom:40px">
      ${todos.map(renderCard).join('')}
    </div>

    <p class="section-label">Com Requisito de Domínio de Classe</p>
    <div class="ref-filter-bar">
      <button class="ref-filter-btn active" onclick="filterPHCards(this,'all')">Todos</button>
      ${[...new Set(PODERES_HEROICOS.filter(p=>!p.todosPersonagens).flatMap(p=>p.classes))].sort().map(cls => {
        const c = CLASSES.find(x => x.id === cls);
        return c ? `<button class="ref-filter-btn" data-cls="${cls}" onclick="filterPHCards(this,'${cls}')">${c.emoji} ${c.nome}</button>` : '';
      }).join('')}
    </div>
    <div class="ref-grid" id="phGrid">
      ${comRequisito.map(p => `
        <div class="ref-card ph-card" data-classes="${p.classes.join(',')}">
          <div class="ref-card-header">
            <span class="ref-card-name">${p.nome}</span>
          </div>
          <div class="ref-card-meta" style="margin-bottom:6px">
            ${p.classes.map(cls => {
              const c = CLASSES.find(x=>x.id===cls);
              return c ? `<span class="ph-class-pill" onclick="handleNavClick('${cls}')" title="Ver ${c.nome}">${c.emoji} ${c.nome}</span>` : '';
            }).join('')}
          </div>
          <div class="ref-card-meta" style="font-style:italic;color:var(--text3);font-size:13px">${p.requisito}</div>
          <p class="ref-card-desc">${p.descricao}</p>
        </div>`).join('')}
    </div>
  </div>`;
}

function filterPHCards(btn, cls) {
  document.querySelectorAll('.ref-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#phGrid .ph-card').forEach(card => {
    if (cls === 'all') { card.classList.remove('hidden'); return; }
    const classes = card.dataset.classes ? card.dataset.classes.split(',') : [];
    card.classList.toggle('hidden', !classes.includes(cls));
  });
}

/* DANÇAS */
function renderDancas() {
  const tipos = ['all',...new Set(DANCAS.map(d=>d.tipo))];
  return `${refNavBar('Danças')}
  <div class="ref-page">
    <h2 class="ref-title">💃 Danças</h2>
    <p class="ref-subtitle">Classe: Dançarino</p>
    <div class="ref-filter-bar">
      ${tipos.map(t=>`<button class="ref-filter-btn ${t==='all'?'active':''}" onclick="filterRefCards(this,'${t}')">${t==='all'?'Todas':t.charAt(0).toUpperCase()+t.slice(1)}</button>`).join('')}
    </div>
    <div class="ref-grid" id="refGrid">
      ${DANCAS.map(d=>`
        <div class="ref-card" data-tipo="${d.tipo}">
          <div class="ref-card-header">
            <span class="ref-card-name">${d.nome}</span>
            ${tagBadge(d.tipo)}
          </div>
          <div class="ref-card-meta"><span>⏱ ${d.duracao}</span></div>
          <p class="ref-card-desc">${d.descricao}</p>
        </div>`).join('')}
    </div>
  </div>`;
}

/* FEITIÇOS */
function renderFeiticos() {
  const tab = activeFeiticoTab; // may have been preset by showSection(sec, tab)
  return `${refNavBar('Feitiços')}
  <div class="ref-page">
    <h2 class="ref-title">✨ Feitiços</h2>
    <p class="ref-subtitle">Elementalista · Entropista · Espiritualista</p>
    <div class="feitico-class-tabs">
      <button class="feitico-tab ${tab==='elementalista'?'active':''}" onclick="switchFeiticoTab(this,'elementalista')">Elementalista</button>
      <button class="feitico-tab ${tab==='entropista'?'active':''}" onclick="switchFeiticoTab(this,'entropista')">Entropista</button>
      <button class="feitico-tab ${tab==='espiritualista'?'active':''}" onclick="switchFeiticoTab(this,'espiritualista')">Espiritualista</button>
    </div>
    <div class="ref-filter-bar">
      <button class="ref-filter-btn active" onclick="filterRefCards(this,'all')">Todos</button>
      <button class="ref-filter-btn" onclick="filterRefCards(this,'ofensivo')">⚔ Ofensivo</button>
      <button class="ref-filter-btn" onclick="filterRefCards(this,'suporte')">🛡️ Suporte</button>
    </div>
    <div class="ref-grid" id="refGrid">
      ${renderFeiticoCards(tab)}
    </div>
  </div>`;
}

function renderFeiticoCards(cls) {
  return FEITICOS[cls].map(f => `
    <div class="ref-card" data-tipo="${f.ofensivo?'ofensivo':'suporte'}">
      <div class="ref-card-header">
        <span class="ref-card-name">${f.nome}${f.ofensivo?' ⚔':''}</span>
        ${tagBadge(f.ofensivo?'ofensivo':'suporte')}
      </div>
      <div class="ref-card-meta">
        <span>⚡ ${f.pm} PM</span>
        <span>🎯 ${f.alvo}</span>
        <span>⏱ ${f.duracao}</span>
      </div>
      <p class="ref-card-desc">${f.descricao}</p>
    </div>`).join('');
}

function switchFeiticoTab(btn, cls) {
  document.querySelectorAll('.feitico-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeFeiticoTab = cls;
  $('refGrid').innerHTML = renderFeiticoCards(cls);
  // reset filters
  document.querySelectorAll('.ref-filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.ref-filter-btn').classList.add('active');
}

/* MAGISSEMENTES */
function renderMagissementes() {
  const tipos = ['all',...new Set(MAGISSEMENTES.map(m=>m.tipo))];
  return `${refNavBar('Magissementes')}
  <div class="ref-page">
    <h2 class="ref-title">🌸 Magissementes</h2>
    <p class="ref-subtitle">Classe: Floralista</p>
    <div class="ref-filter-bar">
      ${tipos.map(t=>`<button class="ref-filter-btn ${t==='all'?'active':''}" onclick="filterRefCards(this,'${t}')">${t==='all'?'Todas':t.charAt(0).toUpperCase()+t.slice(1)}</button>`).join('')}
    </div>
    <div class="ref-grid" id="refGrid">
      ${MAGISSEMENTES.map(m=>`
        <div class="ref-card" data-tipo="${m.tipo}">
          <div class="ref-card-header">
            <span class="ref-card-name">${m.nome}</span>
            ${tagBadge(m.tipo)}
          </div>
          <p class="ref-card-desc" style="margin-bottom:10px;font-style:italic;font-size:14px">${m.descricao}</p>
          <div class="efeitos-table">
            ${m.efeitos.map(e=>`
              <div class="efeito-row">
                <div class="efeito-sec">🌿 ${e.secoes}</div>
                <div class="efeito-desc">${e.desc}</div>
              </div>`).join('')}
          </div>
        </div>`).join('')}
    </div>
  </div>`;
}

/* TERIOFORMAS */
function renderTerioformas() {
  return `${refNavBar('Terioformas')}
  <div class="ref-page">
    <h2 class="ref-title">🧬 Terioformas</h2>
    <p class="ref-subtitle">Classe: Mutante (poder Teriomorfose)</p>
    <div class="ref-grid" id="refGrid">
      ${TERIOFORMAS.map(t=>`
        <div class="ref-card">
          <div class="ref-card-header">
            <span class="ref-card-name">${t.nome}</span>
          </div>
          <div class="ref-card-meta"><span>🐾 ${t.sugestoes}</span></div>
          <p class="ref-card-desc">${t.descricao}</p>
        </div>`).join('')}
    </div>
  </div>`;
}

/* SÍMBOLOS */
function renderSimbolos() {
  const tipos = ['all',...new Set(SIMBOLOS.map(s=>s.tipo))];
  return `${refNavBar('Símbolos')}
  <div class="ref-page">
    <h2 class="ref-title">🎨 Símbolos</h2>
    <p class="ref-subtitle">Classe: Simbolista</p>
    <div class="ref-filter-bar">
      ${tipos.map(t=>`<button class="ref-filter-btn ${t==='all'?'active':''}" onclick="filterRefCards(this,'${t}')">${t==='all'?'Todos':t.charAt(0).toUpperCase()+t.slice(1)}</button>`).join('')}
    </div>
    <div class="ref-grid" id="refGrid">
      ${SIMBOLOS.map(s=>`
        <div class="ref-card" data-tipo="${s.tipo}">
          <div class="ref-card-header">
            <span class="ref-card-name">${s.nome}</span>
            ${tagBadge(s.tipo)}
          </div>
          <p class="ref-card-desc">${s.descricao}</p>
        </div>`).join('')}
    </div>
  </div>`;
}

/* VERSOS */
function renderVersos() {
  const { volumes, escalas, tons } = VERSOS;
  return `${refNavBar('Versos')}
  <div class="ref-page">
    <h2 class="ref-title">🎵 Versos</h2>
    <p class="ref-subtitle">Classe: Virtuoso — combine Volume + Escala + Tom</p>
    <div class="versos-tables">
      <div class="verso-table">
        <div class="verso-table-title">Volumes</div>
        <div class="verso-row volumes">
          <div class="verso-cell-h">Volume</div><div class="verso-cell-h">PM</div><div class="verso-cell-h">Alvos</div>
        </div>
        ${volumes.map(v=>`
          <div class="verso-row volumes">
            <div class="verso-cell-gold">${v.nome}</div>
            <div class="verso-cell">${v.pm}</div>
            <div class="verso-cell">${v.alvos}</div>
          </div>`).join('')}
      </div>
      <div class="verso-table">
        <div class="verso-table-title">Tons</div>
        ${tons.map(t=>`
          <div style="padding:8px 14px;border-bottom:1px solid var(--border);font-size:14px;">
            <div style="color:var(--gold2);font-family:'Cinzel',serif;font-size:12px;margin-bottom:4px;">${t.nome}</div>
            <div style="color:var(--text2)">${t.descricao}</div>
          </div>`).join('')}
      </div>
    </div>
    <p class="section-label">Escalas</p>
    <div style="overflow-x:auto">
      <div class="verso-table" style="min-width:500px">
        <div class="verso-table-title">Escalas</div>
        <div class="verso-row escalas">
          <div class="verso-cell-h">Escala</div>
          <div class="verso-cell-h">Tipo</div>
          <div class="verso-cell-h">Condição</div>
          <div class="verso-cell-h">Atributo</div>
          <div class="verso-cell-h">Recuperação</div>
        </div>
        ${escalas.map(e=>`
          <div class="verso-row escalas">
            <div class="verso-cell-gold">${e.nome}</div>
            <div class="verso-cell">${e.tipo}</div>
            <div class="verso-cell">${e.condicao}</div>
            <div class="verso-cell">${e.atributo}</div>
            <div class="verso-cell">${e.recuperacao}</div>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
}

/* INVOCAÇÕES */
function renderInvocacoes() {
  const mananciais = [...new Set(INVOCACOES.map(i=>i.manancial))];
  const manancialEmoji = {Ar:'💨',Terra:'🪨',Fogo:'🔥',Raio:'⚡',Água:'🌊'};
  return `${refNavBar('Invocações')}
  <div class="ref-page">
    <h2 class="ref-title">🌊 Invocações</h2>
    <p class="ref-subtitle">Classe: Invocador — acesse os mananciais presentes na cena</p>
    ${mananciais.map(m=>`
      <div class="inv-manancial-block">
        <div class="inv-manancial-title">${manancialEmoji[m]||'🔮'} Manancial de ${m}</div>
        <div class="inv-grid">
          ${INVOCACOES.filter(i=>i.manancial===m).map(inv=>`
            <div class="inv-card">
              <div class="inv-card-name">${inv.nome} ${tagBadge(inv.tipo)}</div>
              <div class="inv-card-desc">${inv.descricao}</div>
            </div>`).join('')}
        </div>
      </div>`).join('')}
  </div>`;
}

/* INFUSÕES */
function renderInfusoes() {
  const niveis = ['Básica','Avançada','Superior'];
  return `${refNavBar('Infusões')}
  <div class="ref-page">
    <h2 class="ref-title">⚒️ Infusões</h2>
    <p class="ref-subtitle">Classe: Inventor — gaste 2 PI ao atingir um alvo com um ataque</p>
    ${niveis.map(n=>`
      <div class="inf-group">
        <div class="inf-group-title">Infusões ${n}s</div>
        <div class="inf-grid">
          ${INFUSOES.filter(i=>i.nivel===n).map(inf=>`
            <div class="inf-card">
              <div class="inf-card-name">${inf.nome}</div>
              <div class="inf-card-desc">${inf.descricao}</div>
            </div>`).join('')}
        </div>
      </div>`).join('')}
  </div>`;
}

/* ── SHARED FILTER FUNCTION ── */
function filterRefCards(btn, tipo) {
  document.querySelectorAll('.ref-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#refGrid .ref-card').forEach(card => {
    card.classList.toggle('hidden', tipo !== 'all' && card.dataset.tipo !== tipo);
  });
}

/* ── SEARCH ── */
function setupSearch() {
  const input = $('searchInput');
  input.addEventListener('input', () => {
    buildNav(input.value.trim());
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

/* ── SIDEBAR FILTERS ── */
function setupFilters() {
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      buildNav($('searchInput').value.trim());
    });
  });
}

/* ── MOBILE ── */
function setupMobileMenu() {
  $('sidebarToggle').addEventListener('click', () => {
    const open = $('sidebar').classList.toggle('open');
    $('overlay').classList.toggle('open', open);
  });
  $('overlay').addEventListener('click', closeMobileMenu);
}

function closeMobileMenu() {
  $('sidebar').classList.remove('open');
  $('overlay').classList.remove('open');
}
