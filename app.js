const skills = [
  { name: "HTML & Semantik Web", category: "Frontend", level: 87, description: "Struktur web modern, aksesibilitas, dan fondasi antarmuka." },
  { name: "Git & Version Control", category: "Tools", level: 85, description: "Branch, commit, dan alur kerja proyek bersama GitHub." },
  { name: "CSS & Tailwind", category: "Frontend", level: 78, description: "Layout responsif dengan Flexbox, Grid, dan utility styling." },
  { name: "JavaScript (ES6+)", category: "Frontend", level: 76, description: "Logika interaktif, manipulasi DOM, dan pengolahan data." },
  { name: "PHP Logic", category: "Backend", level: 75, description: "Pemrosesan formulir, sesi, dan logika aplikasi." },
  { name: "Database MySQL", category: "Data", level: 73, description: "Query dasar, relasi tabel, dan pengelolaan data." },
];

const projects = [
  {
    number: "01",
    icon: "$",
    type: "Sistem Transaksi Kasir",
    name: "Kasir Warung Makan",
    description: "Aplikasi kasir digital untuk mencatat pesanan, menghitung total dan diskon, mengelola riwayat pembayaran, serta mencetak struk transaksi harian.",
    tools: ["Python", "Algoritma Kasir", "Manajemen Data"],
    accent: "mint",
  },
  {
    number: "02",
    icon: "</>",
    type: "Aplikasi Web Interaktif",
    name: "Portofolio Interactive CV",
    description: "Portofolio pribadi dengan pilihan tema, ringkasan keahlian, riwayat pendidikan, dan akses kontak dalam satu halaman responsif.",
    tools: ["JavaScript", "CSS", "HTML"],
    accent: "coral",
  },
];

const email = "satfio566@gmail.com";
const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
const photoPath = "profile-preview.jpg";
const root = document.querySelector("#root");

const skillMarkup = skills.map((skill, index) => `
  <article class="skill-item">
    <div class="skill-topline"><span>${String(index + 1).padStart(2, "0")}</span><span>${skill.category}</span></div>
    <h3>${skill.name}</h3>
    <p>${skill.description}</p>
    <div class="skill-meter" role="meter" aria-label="Tingkat ${skill.name}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${skill.level}"><span style="width:${skill.level}%"></span></div>
    <span class="skill-level">${skill.level}% <small>terus berkembang</small></span>
  </article>
`).join("");

const projectMarkup = projects.map((project) => `
  <article class="project-item project-${project.accent}">
    <div class="project-mark"><span>${project.number}</span><strong aria-hidden="true">${project.icon}</strong></div>
    <div class="project-content">
      <p class="eyebrow">${project.type}</p>
      <h3>${project.name}</h3>
      <p class="project-description">${project.description}</p>
      <ul class="tag-list" aria-label="Teknologi yang digunakan">${project.tools.map((tool) => `<li>${tool}</li>`).join("")}</ul>
    </div>
    <span class="project-arrow" aria-hidden="true">↗</span>
  </article>
`).join("");

root.innerHTML = `
  <div class="portfolio-shell theme-dark">
    <header class="site-header">
      <div class="header-inner page-width">
        <a class="brand" href="#home" aria-label="Raka Raditya, kembali ke beranda">
          <span class="brand-mark">RR</span>
          <span class="brand-copy"><strong>Raka Raditya<span>.</span></strong><small>PORTOFOLIO / 2026</small></span>
        </a>
        <nav class="main-nav" aria-label="Navigasi utama">
          <a href="#expertise">Keahlian</a><a href="#projects">Proyek</a><a href="#journey">Pendidikan</a>
        </nav>
        <div class="header-actions">
          <div class="theme-switch" role="group" aria-label="Pilih tema">
            <button type="button" data-theme="auto" aria-label="Tema otomatis" title="Ikuti tema perangkat">A</button>
            <button type="button" data-theme="light" aria-label="Tema terang" title="Tema terang">☼</button>
            <button type="button" data-theme="dark" aria-label="Tema gelap" title="Tema gelap">◐</button>
          </div>
          <button class="button button-compact button-accent" type="button" data-open-contact>Hubungi <span aria-hidden="true">↗</span></button>
        </div>
      </div>
    </header>

    <main>
      <section class="hero page-width" id="home" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow hero-status"><span class="status-dot"></span> SISWA PPLG <i>/</i> SURAKARTA, ID</p>
          <p class="hero-intro">Halo, saya</p>
          <h1 id="hero-title">Raka Raditya <span>Denendra Kenzie</span></h1>
          <p class="hero-description">Pelajar dan calon pengembang web yang senang merancang antarmuka rapi, memahami cara kerja aplikasi, lalu mengubah ide menjadi sesuatu yang bisa digunakan.</p>
          <div class="hero-actions">
            <a class="button button-accent" href="#projects">Lihat karya <span aria-hidden="true">↓</span></a>
            <button class="button button-outline" type="button" data-open-contact>Hubungi saya <span aria-hidden="true">↗</span></button>
          </div>
          <div class="hero-meta">
            <div><span class="meta-label">SEKOLAH</span><strong>SMKN 2 Surakarta</strong></div>
            <div><span class="meta-label">PROGRAM</span><strong>PPLG · Kelas XI</strong></div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="portrait-frame">
            <img class="portrait-image profile-photo-protected" src="${photoPath}" alt="Foto Raka Raditya Denendra Kenzie" draggable="false" />
            <div class="portrait-caption"><span>01 — PROFILE</span><span>RAKA / PPLG</span></div>
          </div>
          <div class="portrait-stamp" aria-hidden="true"><strong>17</strong><small>TAHUN</small></div>
          <p class="portrait-side-note">BELAJAR · MEMBANGUN · BERTUMBUH</p>
        </div>
      </section>

      <section class="content-section page-width" id="expertise" aria-labelledby="expertise-title">
        <div class="section-heading">
          <div><p class="eyebrow section-kicker"><span>01</span> / KOMPETENSI</p><h2 id="expertise-title">Hal yang sedang <em>saya kuasai.</em></h2></div>
          <p class="section-summary">Fondasi yang saya latih lewat tugas sekolah dan proyek kecil, satu langkah setiap hari.</p>
        </div>
        <div class="skill-grid">${skillMarkup}</div>
      </section>

      <section class="content-section page-width" id="projects" aria-labelledby="projects-title">
        <div class="section-heading">
          <div><p class="eyebrow section-kicker"><span>02</span> / KARYA PILIHAN</p><h2 id="projects-title">Dari latihan jadi <em>karya.</em></h2></div>
          <p class="section-summary">Eksperimen sederhana yang membantu saya belajar membangun produk dari awal.</p>
        </div>
        <div class="project-list">${projectMarkup}</div>
      </section>

      <section class="content-section page-width journey-section" id="journey" aria-labelledby="journey-title">
        <div class="section-heading">
          <div><p class="eyebrow section-kicker"><span>03</span> / PERJALANAN</p><h2 id="journey-title">Sedang membangun <em>fondasi.</em></h2></div>
          <p class="section-summary">Perjalanan belajar saya di bidang pengembangan perangkat lunak.</p>
        </div>
        <article class="journey-entry">
          <div class="journey-date"><span class="journey-dot"></span><span>2025 — SEKARANG</span></div>
          <div class="journey-copy">
            <p class="eyebrow">PENDIDIKAN MENENGAH KEJURUAN</p>
            <h3>SMK Negeri 2 Surakarta</h3>
            <p class="journey-program">Pengembangan Perangkat Lunak dan Gim <span>(PPLG)</span></p>
            <p>Mendalami pemrograman web, perancangan antarmuka, dan logika aplikasi. Sambil belajar, saya mempraktikkan materi lewat aplikasi kasir dan portofolio interaktif.</p>
          </div>
        </article>
      </section>

      <section class="contact-section page-width" id="contact" aria-labelledby="contact-title">
        <div class="contact-panel">
          <div><p class="eyebrow"><span class="status-dot"></span> TERBUKA UNTUK TERHUBUNG</p><h2 id="contact-title">Punya ide? <em>Mari ngobrol.</em></h2><p>Saya terbuka untuk berbagi cerita, belajar bersama, dan kesempatan kolaborasi.</p></div>
          <div class="contact-actions">
            <a class="button button-accent" href="${gmailCompose}" target="_blank" rel="noreferrer">Kirim email <span aria-hidden="true">↗</span></a>
            <a class="button button-outline" href="https://wa.me/6281215136621" target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer"><div class="footer-inner page-width">
      <a class="footer-brand" href="#home">RR<span>.</span></a>
      <p>© ${new Date().getFullYear()} Raka Raditya Denendra Kenzie · Dibuat sambil terus belajar.</p>
      <a href="${gmailCompose}" target="_blank" rel="noreferrer">${email.toUpperCase()} <span aria-hidden="true">↗</span></a>
    </div></footer>

    <div class="modal-backdrop" data-contact-modal hidden>
      <section class="contact-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-topline"><span class="eyebrow">KONTAK LANGSUNG</span><button class="modal-close" type="button" data-close-contact aria-label="Tutup dialog">×</button></div>
        <h2 id="modal-title">Mari mulai <em>percakapan.</em></h2>
        <p>Kirim pesan untuk permintaan CV, diskusi proyek, atau sekadar menyapa.</p>
        <a class="modal-email" href="${gmailCompose}" target="_blank" rel="noreferrer">${email} <span aria-hidden="true">✉</span></a>
        <div class="modal-actions">
          <a class="button button-accent" href="${gmailCompose}" target="_blank" rel="noreferrer">Buka Gmail <span aria-hidden="true">↗</span></a>
          <a class="button button-outline" href="https://wa.me/6281215136621" target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </div>
  </div>
`;

const portfolio = document.querySelector(".portfolio-shell");
const themeButtons = document.querySelectorAll("[data-theme]");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
const modal = document.querySelector("[data-contact-modal]");
const closeModalButton = document.querySelector("[data-close-contact]");
let themeOption = "auto";
let previousFocus = null;

function applyTheme(option) {
  themeOption = option;
  const isDark = option === "auto" ? systemTheme.matches : option === "dark";
  portfolio.classList.toggle("theme-dark", isDark);
  portfolio.classList.toggle("theme-light", !isDark);
  themeButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.theme === option)));
}

themeButtons.forEach((button) => button.addEventListener("click", () => applyTheme(button.dataset.theme)));
systemTheme.addEventListener("change", () => {
  if (themeOption === "auto") applyTheme("auto");
});
applyTheme("auto");

function openContact() {
  previousFocus = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  closeModalButton.focus();
}

function closeContact() {
  modal.hidden = true;
  document.body.style.overflow = "";
  previousFocus?.focus();
}

document.querySelectorAll("[data-open-contact]").forEach((button) => button.addEventListener("click", openContact));
closeModalButton.addEventListener("click", closeContact);
modal.addEventListener("mousedown", (event) => {
  if (event.target === modal) closeContact();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeContact();
});

const portrait = document.querySelector(".portrait-frame");
portrait.addEventListener("contextmenu", (event) => event.preventDefault());
portrait.addEventListener("dragstart", (event) => event.preventDefault());
portrait.addEventListener("copy", (event) => event.preventDefault());
portrait.addEventListener("cut", (event) => event.preventDefault());
