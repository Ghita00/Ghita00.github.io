/* ══════════════════════════════════════
   GIORGIO BASILE — PORTFOLIO JS
══════════════════════════════════════ */

/* ─── Project Data ─────────────────── */
const projects = [
  {
    title: "Biopizza",
    tag: "Website",
    hue: 210,
    img: "biopizza.png",
    link: "https://www.biopizza.org/",
    desc: "Sito web per la pizzeria BioPizza",
    year: "2024",
    role: "UX Lead & Frontend",
    client: "Biopizza",
    tech: ["Wordpress", "Figma"]
  },
  {
    title: "Maxipizza",
    tag: "Website",
    hue: 210,
    img: "maxipizza.jpg",
    link: "https://www.maxipizzasanmarco.it/",
    desc: "Sito web per la pizzeria Maxipizza",
    year: "2024",
    role: "UX Lead & Frontend",
    client: "Maxipizza",
    tech: ["Wordpress", "Figma"]
  },
  {
    title: "Matteo Bonin",
    tag: "Website",
    hue: 210,
    img: "matteobonin.png",
    link: "https://www.matteobonin.it/",
    desc: "Sito web per il mental coach Matteo Bonin",
    year: "2026",
    role: "UX Lead & Frontend",
    client: "Matteo Bonin",
    tech: ["Wordpress", "Figma"]
  },
  {
    title: "Giocosamente di Irene Gatto",
    tag: "Website",
    hue: 210,
    img: "giocosamente.png",
    link: "https://www.irenegatto.it/",
    desc: "Sito web per la psicomotricista Irene Gatto",
    year: "2026",
    role: "UX Lead & Frontend",
    client: "Irene Gatto",
    tech: ["Wordpress", "Figma"]
  },
  {
    title: "Takana",
    tag: "Website",
    hue: 210,
    img: "takana.jpg",
    link: "https://takanafood.it/",
    desc: "Sito web per il foodtruck Takana",
    year: "2025",
    role: "UX Lead & Frontend",
    client: "Takana",
    tech: ["Wordpress", "Figma"]
  },
  {
    title: "Osteraia",
    tag: "Website",
    hue: 210,
    img: "osteraia.jpg",
    link: "https://osteraia.com/",
    desc: "Sito web per il foodtruck Osteraia",
    year: "2025",
    role: "UX Lead & Frontend",
    client: "Osteraia",
    tech: ["Wordpress", "Figma"]
  },
  {
    title: "SystemCOD",
    tag: "Website",
    hue: 210,
    img: "systemCOD.jpg",
    link: "https://www.systemcod.it/",
    desc: "Sito web per il giocatore competitivo di Call of Duty SystemCOD",
    year: "2025",
    role: "UX Lead & Frontend",
    client: "SystemCOD",
    tech: ["Wordpress", "Figma"]
  },
  
];

/* ─── Navbar Scroll Effect ──────────── */
const nav = document.getElementById('mainNav');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ─── Anchor Smooth + Active ─────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu if open
      const navCollapse = document.getElementById('navMenu');
      const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
      if (bsCollapse) bsCollapse.hide();
    }
  });
});

/* Active nav link on scroll */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* ─── Scroll Reveal ──────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

/* Hero elements reveal on load */
window.addEventListener('load', () => {
  document.querySelectorAll('.hero-section .reveal-up').forEach(el => {
    setTimeout(() => el.classList.add('revealed'), 100);
  });
});

/* ─── Work Modal ─────────────────────── */
const workModal = new bootstrap.Modal(document.getElementById('workModal'));

document.querySelectorAll('.work-card').forEach(card => {
  card.addEventListener('click', () => {
    const idx = parseInt(card.dataset.project, 10);
    const p = projects[idx];
    if (!p) return;

    // Hero
    const hero = document.getElementById('modalHero');
    //hero.style.background = `linear-gradient(135deg, hsl(${p.hue},55%,10%) 0%, hsl(${p.hue},60%,18%) 100%)`;
    console.log('assets/'+p.img)
    hero.style.backgroundImage = `url('./assets/${p.img}')`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
    //const icon = document.getElementById('modalIcon');
    //icon.innerHTML = `<i class="bi ${p.icon}" style="color:hsl(${p.hue},70%,70%)"></i>`;

    // Texts
    document.getElementById('modalTag').textContent = p.tag;
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalTitle').setAttribute('href', p.link);
    document.getElementById('modalTitle').setAttribute('target', "_blank");
    document.getElementById('modalDesc').textContent = p.desc;

    // Meta
    document.getElementById('modalMeta').innerHTML = `
      <div class="col-6 col-md-4">
        <div class="meta-item">
          <div class="meta-label">Anno</div>
          <div class="meta-value">${p.year}</div>
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="meta-item">
          <div class="meta-label">Ruolo</div>
          <div class="meta-value">${p.role}</div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="meta-item">
          <div class="meta-label">Cliente</div>
          <div class="meta-value">${p.client}</div>
        </div>
      </div>
    `;

    // Tech
    const techTags = p.tech.map(t => `<span class="modal-tech-tag">${t}</span>`).join('');
    document.getElementById('modalTech').innerHTML = `
      <h5>Stack tecnologico</h5>
      <div class="modal-tech-tags">${techTags}</div>
    `;

    workModal.show();
  });
});

/* ─── Cursor glow (desktop) ──────────── */
if (window.matchMedia('(pointer: fine)').matches) {
  const glow = document.createElement('div');
  glow.id = 'cursorGlow';
  glow.style.cssText = `
    position: fixed;
    width: 320px; height: 320px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(200,80,10,.08) 0%, transparent 70%);
    pointer-events: none;
    transform: translate(-50%,-50%);
    transition: left .12s, top .12s;
    z-index: 0;
  `;
  document.body.appendChild(glow);

  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });
}
