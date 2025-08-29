// getIconSVG: Inline SVGs for all icons used in the portfolio
function getIconSVG(name) {
  switch (name) {
    case "mail":
      return '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>';
    case "download":
      return '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H4a2 2 0 01-2-2v-8a2 2 0 012-2h16a2 2 0 012 2v8a2 2 0 01-2 2z"/></svg>';
    case "phone":
      return '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>';
    case "map":
      return '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>';
    case "globe":
      return '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c2.5 0 4.5 4.5 4.5 10S14.5 22 12 22 7.5 17.5 7.5 12 9.5 2 12 2zm0 0c5.25 0 9.5 4.03 9.5 10s-4.25 10-9.5 10m-9.5-10h19" /></svg>';
    case "linkedin":
      return '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>';
    case "github":
      return '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>';
    case "twitter":
      return '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>';
    case "instagram":
      return '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>';
    case "document":
      return '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25m-9-3H9M12 10.5H9m6.75 4.5H9m5.25 4.5H9"/></svg>';
    default:
      return "";
  }
}

// Font mapping for CSS classes
function getFontClass(fontName) {
  switch (fontName) {
    case "ovo":
      return "font-Ovo";
    case "playfair":
      return "font-Playfair";
    case "poppins":
      return "font-Poppins";
    case "inter":
      return "font-Inter";
    case "montserrat":
      return "font-Montserrat";
    case "raleway":
      return "font-Raleway";
    case "schibsted":
      return "font-Schibsted";
    case "outfit":
      return "font-Outfit";
    default:
      return "font-Ovo";
  }
}

// Theme functions
function setThemeIcon() {
  const iconSpan = document.getElementById("theme-toggle-icon");
  if (!iconSpan) return;
  if (document.documentElement.classList.contains("dark")) {
    iconSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>';
  } else {
    iconSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>';
  }
}

window.toggleTheme = function () {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
  setThemeIcon();
};

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
setThemeIcon();

// Render portfolio from JSON
fetch("./portfolio-data.json")
  .then((response) => response.json())
  .then((data) => {
    // HERO
    let hero = "";
    if (data.hero.enabled) {
      hero = `
        <section id="hero" class="hero-bg py-20 px-6 md:px-16 lg:px-32 relative z-10 text-center md:text-left">
          <div class="container mx-auto">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 hero-title-spaced ${getFontClass(
              data.hero.font
            )}">
              ${data.hero.title}
            </h1>
            <p class="text-lg md:text-xl mb-8">${data.hero.description}</p>
            <div class="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              ${
                data.hero.resume.enabled
                  ? `<a href="${data.hero.resume.file}" target="_blank" class="bg-dynamic-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 inline-flex items-center justify-center">${getIconSVG(
                      "document"
                    )} Resume</a>`
                  : ""
              }
              ${
                data.hero.contact.enabled
                  ? `<a href="${data.hero.contact.link}" class="border border-dynamic-primary text-dynamic-primary px-6 py-3 rounded-lg font-semibold hover:bg-dynamic-primary hover:text-white inline-flex items-center justify-center">${getIconSVG(
                      "mail"
                    )} Contact</a>`
                  : ""
              }
            </div>
          </div>
        </section>`;
    }

    // ABOUT
    let about = "";
    if (data.about.enabled) {
      about = `
        <section id="about" class="py-16 px-6 md:px-16 lg:px-32">
          <div class="container mx-auto max-w-4xl">
            <h2 class="text-3xl font-bold mb-6 ${getFontClass(
              data.about.font
            )}">About Me</h2>
            <p class="text-lg leading-relaxed">${data.about.description}</p>
          </div>
        </section>`;
    }

    // SKILLS
    let skills = "";
    if (data.skills.enabled) {
      skills = `
        <section id="skills" class="py-16 px-6 md:px-16 lg:px-32">
          <div class="container mx-auto max-w-4xl">
            <h2 class="text-3xl font-bold mb-6 ${getFontClass(
              data.skills.font
            )}">Skills</h2>
            <ul class="grid grid-cols-auto gap-4">
              ${data.skills.items
                .map(
                  (skill) =>
                    `<li class="modern-card p-4 rounded-lg shadow text-center">${skill}</li>`
                )
                .join("")}
            </ul>
          </div>
        </section>`;
    }

    // EDUCATION
    let education = "";
    if (data.education.enabled) {
      education = `
        <section id="education" class="py-16 px-6 md:px-16 lg:px-32">
          <div class="container mx-auto max-w-4xl">
            <h2 class="text-3xl font-bold mb-6 ${getFontClass(
              data.education.font
            )}">Education</h2>
            <div class="space-y-6">
              ${data.education.items
                .map(
                  (edu) => `
                <div class="modern-card p-6 rounded-lg shadow">
                  <h3 class="text-xl font-semibold">${edu.degree}</h3>
                  <p class="text-gray-600 dark:text-gray-400">${edu.institution}</p>
                  <p class="text-gray-500 dark:text-gray-400 text-sm">${edu.duration}</p>
                </div>`
                )
                .join("")}
            </div>
          </div>
        </section>`;
    }

    // PROJECTS
    let projects = "";
    if (data.projects.enabled) {
      projects = `
        <section id="projects" class="py-16 px-6 md:px-16 lg:px-32">
          <div class="container mx-auto max-w-4xl">
            <h2 class="text-3xl font-bold mb-6 ${getFontClass(
              data.projects.font
            )}">Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              ${data.projects.items
                .map(
                  (project) => `
                <div class="modern-card p-6 rounded-lg shadow">
                  <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
                  <p class="text-gray-600 dark:text-gray-400 mb-4">${project.description}</p>
                  ${
                    project.link
                      ? `<a href="${project.link}" target="_blank" class="text-dynamic-primary font-semibold hover:underline">View Project</a>`
                      : ""
                  }
                </div>`
                )
                .join("")}
            </div>
          </div>
        </section>`;
    }

    // CONTACT
    let contact = "";
    if (data.contact.enabled) {
      contact = `
        <section id="contact" class="py-16 px-6 md:px-16 lg:px-32">
          <div class="container mx-auto max-w-4xl">
            <h2 class="text-3xl font-bold mb-6 ${getFontClass(
              data.contact.font
            )}">Contact</h2>
            <ul class="space-y-4">
              ${
                data.contact.email
                  ? `<li class="flex items-center">${getIconSVG("mail")} <a href="mailto:${data.contact.email}" class="hover:underline">${data.contact.email}</a></li>`
                  : ""
              }
              ${
                data.contact.phone
                  ? `<li class="flex items-center">${getIconSVG("phone")} <a href="tel:${data.contact.phone}" class="hover:underline">${data.contact.phone}</a></li>`
                  : ""
              }
              ${
                data.contact.location
                  ? `<li class="flex items-center">${getIconSVG("map")} ${data.contact.location}</li>`
                  : ""
              }
              ${
                data.contact.website
                  ? `<li class="flex items-center">${getIconSVG("globe")} <a href="${data.contact.website}" target="_blank" class="hover:underline">${data.contact.website}</a></li>`
                  : ""
              }
            </ul>
          </div>
        </section>`;
    }

    // SOCIAL LINKS
    let social = "";
    if (data.social.enabled) {
      social = `
        <section id="social" class="py-16 px-6 md:px-16 lg:px-32">
          <div class="container mx-auto max-w-4xl">
            <h2 class="text-3xl font-bold mb-6 ${getFontClass(
              data.social.font
            )}">Social</h2>
            <ul class="flex flex-wrap gap-4">
              ${Object.keys(data.social.links)
                .map(
                  (platform) =>
                    `<li><a href="${data.social.links[platform]}" target="_blank" class="inline-flex items-center px-4 py-2 rounded-lg bg-dynamic-primary text-white hover:opacity-90">${getIconSVG(
                      platform
                    )} ${platform}</a></li>`
                )
                .join("")}
            </ul>
          </div>
        </section>`;
    }

    // FOOTER (CLEANED — FrameCV removed)
    let footer = "";
    if (data.footer && data.footer.enabled) {
      footer =
        '<footer class="footer-bg-smoke py-8 text-center text-sm text-gray-600 dark:text-gray-400 mt-auto w-full">' +
        '<div class="footer-content max-w-2xl mx-auto px-4">' +
        data.footer.copyright +
        "</div>" +
        "</footer>";
    } else {
      footer =
        '<footer class="bg-white dark:bg-darkTheme py-4 mt-auto w-full"></footer>';
    }

    // Append all sections
    document.getElementById("app").innerHTML =
      hero + about + skills + education + projects + contact + social + footer;
  })
  .catch((error) => console.error("Error loading portfolio data:", error));
