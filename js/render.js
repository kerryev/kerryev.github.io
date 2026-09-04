/* =========================================================================
   RENDER LOGIC
   You shouldn't need to edit this file for normal content updates —
   see js/data.js instead. This file just turns that data into HTML.
   ========================================================================= */

function renderHeader(activePage) {
  const mount = document.getElementById("site-header-mount");
  if (!mount) return;
  const nav = [
    { href: "index.html", icon: "", label: "Home", key: "home" },
    { href: "portfolio.html", icon: "", label: "Project Portfolio", key: "portfolio" },
    { href: "experience.html", icon: "", label: "Work Experience", key: "experience" },
    { href: "resume.html", icon: "", label: "Resume", key: "resume" },
    { href: SITE.meta.linkedin, icon: "", label: "LinkedIn", key: "linkedin", plain: true },
    { href: "mailto:" + SITE.meta.email, icon: "", label: "Email Me", key: "email", plain: true },
  ];

  mount.innerHTML = `
    <header class="site-header">
      <h1 class="site-title">⚙ ${SITE.meta.name} <span class="wip">| ${SITE.meta.role} ${SITE.meta.wip}</span></h1>
      <nav class="site-nav" aria-label="Primary">
        ${nav.map(item => `
          <a href="${item.href}"
             class="${item.key === activePage ? "active" : ""} ${item.plain ? "plain-link" : ""}"
             ${item.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>
            ${item.icon ? item.icon + " " : ""}${item.label}
          </a>
        `).join("")}
      </nav>
      <span class="last-updated">Last Updated: ${SITE.meta.lastUpdated}</span>
    </header>
  `;
}

function renderFooter() {
  const mount = document.getElementById("site-footer-mount");
  if (!mount) return;
  mount.innerHTML = `
    <footer class="site-footer">
      Made by ${SITE.meta.name}, ${new Date().getFullYear()}
    </footer>
  `;
}

/* ----------------------------- HOME PAGE ----------------------------- */

function renderHome() {
  const a = SITE.about;

  document.getElementById("intro-quote").textContent = a.intro;
  const photoEl = document.getElementById("profile-photo");
  photoEl.src = a.photo;
  photoEl.alt = a.photoCaption;
  photoEl.addEventListener("error", () => {
    photoEl.outerHTML = `<div class="thumb" style="height:220px;border:1px solid var(--panel-border);border-radius:var(--radius);">
      <span class="thumb-tag">photo not found</span>
    </div>`;
  });
  document.getElementById("photo-caption").textContent = a.photoCaption;
  document.getElementById("note-box").textContent = a.note;

  document.getElementById("about-bullets").innerHTML = a.bullets.map(b => `
    <li class="${b.icon ? "has-icon" : ""}">
      ${b.icon ? `<span class="item-icon">${b.icon}</span>` : ""}${b.html}
    </li>
  `).join("");

  document.getElementById("fun-bullets").innerHTML = a.funFacts.map(b => `
    <li class="${b.icon ? "has-icon" : ""}">
      ${b.icon ? `<span class="item-icon">${b.icon}</span>` : ""}${b.html}
    </li>
  `).join("");

  document.getElementById("skills-mount").innerHTML = SITE.skills.map(group => `
    <div class="skill-group">
      <div class="skill-group-title">${group.title}</div>
      <ul class="bullet-list">
        ${group.lines.map(line => `
          <li>${line.label ? `<span class="inline-label">${line.label}:</span> ` : ""}${line.value}</li>
          ${line.sub ? `<li class="sub-bullet"><span class="inline-label">${line.sub.label}:</span> ${line.sub.value}</li>` : ""}
        `).join("")}
      </ul>
    </div>
  `).join("");
}

/* --------------------------- BLUEPRINT THUMB --------------------------- */

function thumbHtml(project) {
  if (project.image) {
    return `<img src="${project.image}" alt="${project.title}">`;
  }
  return `<span class="thumb-icon" aria-hidden="true">${project.icon}</span>
          <span class="thumb-tag">render pending</span>`;
}

function tagPillsHtml(tags) {
  return `<div class="tag-row">${tags.map(t => {
    const c = colorForTag(t);
    return `<span class="tag-pill" style="background:${c.bg};color:${c.fg}">${t}</span>`;
  }).join("")}</div>`;
}

/* ------------------------------ PORTFOLIO ------------------------------ */

function renderPortfolio() {
  const grid = document.getElementById("gallery-grid");

  function cardEl(p) {
    const card = document.createElement("button");
    card.className = "project-card";
    card.innerHTML = `
      <div class="thumb">${thumbHtml(p)}</div>
      <div class="card-body">
        <div class="card-title">${p.icon ? p.icon + " " : ""}${p.title}</div>
        ${tagPillsHtml(p.tags)}
      </div>
    `;
    card.addEventListener("click", () => openProject(p));
    return card;
  }

  function openProject(p) {
    window.location.href = `project-detail.html?id=${p.id}`;
  }

  grid.innerHTML = "";
  SITE.projects.forEach(p => grid.appendChild(cardEl(p)));
}

/* ------------------------------ EXPERIENCE ------------------------------ */

function escapePlaceholders(text) {
  // wraps [bracketed placeholders] in a muted span so unfilled template
  // text is visually distinct from real content
  return text.replace(/(\[[^\]]+\])/g, '<span class="placeholder-token">$1</span>');
}

function renderExperience() {
  const mount = document.getElementById("experience-mount");
  mount.innerHTML = SITE.experience.map(job => `
    <div class="timeline-item">
      <div class="timeline-date">${job.dateRange}</div>
      <div class="timeline-content">
        <span class="timeline-dot"></span>
        <div class="entry-company">${escapePlaceholders(job.company)}</div>
        <div class="entry-role">${escapePlaceholders(job.role)}</div>
        ${job.skills ? `
          <div class="entry-skills tag-row">
            ${job.skills.map(skill => {
              const c = colorForTag(skill);
              return `<span class="tag-pill" style="background-color: ${c.bg}; color: ${c.fg}">${skill}</span>`;
            }).join("")}
          </div>
        ` : ""}
        <ul class="entry-bullets">
          ${job.bullets.map(b => `<li>${escapePlaceholders(b)}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}
