// velocityfly-project.js
// Everything specific to the VelocityFly entry lives here: traction cards,
// the four platform feature cards (YouTube/Instagram/Facebook/LinkedIn),
// and the demo-video cards. index.html only holds empty containers
// (#vf-traction-cards, #vf-platform-cards, #vf-demo-cards) for these to
// render into — so this one file can be replaced later without touching
// skills, other experience entries, achievements, or certifications.

// ── Traction, as of this month ───────────────────────────────────────────
const TRACTION = [
  { num: "70K+", label: "Organic Views" },
  { num: "600+", label: "Posts Auto-Published" },
  { num: "140+", label: "Affiliate Clicks · 0 Ads" },
  { num: "10",   label: "Active Live Users" },
  { num: "4/6",  label: "Platforms Live" },
];

// ── Per-platform feature sets ─────────────────────────────────────────────
// Instagram / Facebook / LinkedIn share the identical full automation
// stack. YouTube is intentionally scoped down to just three capabilities.
const FULL_FEATURES = ["AI content creation", "Affiliate link embedding", "Automated DMs", "Analytics dashboard", "Post logs"];

const PLATFORMS = [
  {
    key: "yt", name: "▶ YouTube", cssClass: "p-yt",
    features: ["AI content creation", "Analytics dashboard", "Thumbnail generation"],
  },
  {
    key: "ig", name: "📸 Instagram", cssClass: "p-ig",
    features: FULL_FEATURES,
  },
  {
    key: "fb", name: "📘 Facebook", cssClass: "p-fb",
    features: FULL_FEATURES,
  },
  {
    key: "li", name: "🔗 LinkedIn", cssClass: "p-li",
    features: FULL_FEATURES,
  },
];

// ── Demo videos — same three links already on the live portfolio, now
// rendered as thumbnail cards instead of flat buttons. ────────────────────
const DEMOS = [
  { id: "4ekTDazr1xg", title: "Full Platform Demo" },
  { id: "gWOB0PWRI2A", title: "Affiliate Demo" },
  { id: "oaIXvEHIUXE", title: "Image-to-Video" },
];

function ytThumb(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function ytWatchUrl(id) {
  // "gWOB0PWRI2A" / "oaIXvEHIUXE" are Shorts on the live channel; the
  // /shorts/ path resolves fine for both regular and short-form IDs.
  return `https://www.youtube.com/watch?v=${id}`;
}

function renderTractionCards() {
  const el = document.getElementById("vf-traction-cards");
  if (!el) return;
  el.className = "vf-traction-grid";
  el.innerHTML = TRACTION.map(t => `
    <div class="vf-traction-card">
      <div class="vf-t-num">${t.num}</div>
      <div class="vf-t-label">${t.label}</div>
    </div>
  `).join("");
}

function renderPlatformCards() {
  const el = document.getElementById("vf-platform-cards");
  if (!el) return;
  el.innerHTML = PLATFORMS.map(p => `
    <div class="phub-card ${p.cssClass}">
      <div class="phub-top">
        <div class="phub-name">${p.name}</div>
        <div class="phub-status status-live"><span class="dot"></span>Live</div>
      </div>
      <ul class="phub-feats">
        ${p.features.map(f => `<li>${f}</li>`).join("")}
      </ul>
      ${p.key === "yt" ? `<div class="phub-scope">Scoped automation — no affiliate/DMs on YouTube</div>` : ""}
    </div>
  `).join("");
}

function renderDemoCards() {
  const el = document.getElementById("vf-demo-cards");
  if (!el) return;
  el.innerHTML = DEMOS.map(d => `
    <a class="vf-demo-card" href="${ytWatchUrl(d.id)}" target="_blank" rel="noopener">
      <div class="vf-demo-thumb">
        <img src="${ytThumb(d.id)}" alt="${d.title} thumbnail" loading="lazy">
        <div class="vf-demo-play">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
      <div class="vf-demo-caption">${d.title}</div>
    </a>
  `).join("");
}

function init() {
  renderTractionCards();
  renderPlatformCards();
  renderDemoCards();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}