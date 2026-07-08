<div align="center">

# ✦ Puteri Azli — Portfolio Website

**Data Scientist · AI Engineer · Fullstack Developer**

[![Live Demo](https://img.shields.io/badge/🎬_Live_Demo-YouTube-red?style=for-the-badge)](https://youtu.be/YOUR_DEMO_LINK)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-puteriazli-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/puteriazli)
[![GitHub](https://img.shields.io/badge/GitHub-puteriazli-181717?style=for-the-badge&logo=github)](https://github.com/puteriazli)
[![Kaggle](https://img.shields.io/badge/Kaggle-puteriameliaazli-20BEFF?style=for-the-badge&logo=kaggle)](https://kaggle.com/puteriameliaazli)

*A high-performance, zero-framework personal portfolio built entirely from scratch*

---

</div>

## 📸 Interface Preview

> *(Replace the placeholder images below with real screenshots of your portfolio)*

| Hero Section | Projects Grid | Project Detail Modal |
|:---:|:---:|:---:|
| ![Hero](assets/screenshots/hero.png) | ![Projects](assets/screenshots/projects.png) | ![Modal](assets/screenshots/modal.png) |

| Experience Section | Leadership Section | Certifications |
|:---:|:---:|:---:|
| ![Experience](assets/screenshots/experience.png) | ![Leadership](assets/screenshots/leadership.png) | ![Certs](assets/screenshots/certs.png) |

> 📁 Place your screenshots in `assets/screenshots/` — recommended size: **1280×720px**

---

## 🎬 Live Demo

[![Watch Demo on YouTube](https://img.shields.io/badge/▶_Watch_Full_Demo-YouTube-FF0000?style=for-the-badge&logo=youtube)](https://youtu.be/YOUR_DEMO_LINK)

---

## ✨ Features at a Glance

| Feature | Description |
|---|---|
| 🎨 **12+ Color Themes** | Neon Cyan, Neon Magenta, Neon Green, Obsidian Gold, Void Silver, Dark Crimson, Noir Emerald, Deep Ocean, Rose Gold, Sunset Purple, Cream & Sienna, Arctic White — switchable live with zero reload |
| ✨ **Particle Canvas** | Animated particle network on `<canvas>`, color-synced to active theme |
| 📁 **20+ Projects** | Filterable by 8 categories: Data Science, AI/ML, Computer Vision, NLP, Fullstack, IoT, Database, Software |
| 🖼️ **Auto Slideshow** | Each project card supports 1–5 images with 3-second auto-slide, dot indicators, and arrow controls |
| 🔍 **Project Detail Modal** | Click any card to open full popup with Problem · Solution · What I Did · Result · Stack & Tools + thumbnail strip |
| ⑂ **Direct Links** | GitHub, Live Demo, and Portfolio buttons on every card — open in new tab |
| 💬 **Tooltip System** | Any element with `data-tip="..."` gets a hover tooltip automatically |
| 🌟 **Scroll Reveals** | Elements animate in as they enter the viewport |
| 📊 **Count-up Stats** | Animated number counters for key metrics |
| 📈 **Skill Bars** | Animated proficiency bars triggered on scroll |
| 💼 **Experience Layout** | Side-by-side: text left, doodle/blob photo mosaic right (mobile: horizontal scroll strip) |
| 🧭 **Leadership Cards** | Photo clusters with blob clip-path shapes, matching font with Experience section |
| 📜 **Certifications Modal** | Filterable grid with category color coding (DS / AI / Soft Skills / Programming / Microsoft / Other) |
| 📧 **Contact Form** | Mailto-based — pre-fills user's email app, no server required |
| 📱 **Fully Responsive** | Desktop · Tablet · Mobile, with hamburger nav and adapted layouts |
| ⚡ **Zero Framework** | No React, no Vue, no jQuery — pure HTML + CSS + Vanilla JS |

---

## 🗂️ Project Structure
''
my portfolio/

│

├── 📄 index.html               # Main HTML — all sections, modals, lightbox

│

├── 📁 css/

│   └── main.css                # All styles — 12 themes, layout, all components

│

├── 📁 js/

│   ├── projects.js             # 20+ project definitions + stackColor map

│   ├── cert-data.js            # All certifications data

│   └── main.js                 # All JS — canvas, slideshow, filter, modals, theme switcher

│

└── 📁 assets/

├── 🖼️  fotoku.png           # Profile photo

├── 📁 cv/

│   └── CV Puteri Azli.pdf  # CV / Resume

├── 📁 screenshots/          # README screenshots (add yours here)

├── 📁 projects/

│   ├── tomato plant disease/

│   ├── house price prediction/

│   ├── sentiment analysis dana/

│   ├── whatsapp time series analysis/

│   ├── road damage detection/

│   ├── breast cancer classification/

│   ├── Emotion Recognition/

│   ├── air quality ancona/

│   ├── eda with r/

│   ├── facemask detection/

│   ├── face recognition/

│   ├── website article/

│   ├── portfolio web/

│   ├── iot air quality/

│   ├── iot distance sensor/

│   ├── iot light sensor/

│   └── ...

├── 📁 exp/

│   ├── exp1/ → files...

│   ├── exp2/ → files...

│   └── exp3/ → files...

├── 📁 leadership/

│   ├── lead1/ → files...

│   ├── lead2/ → files...

│   └── ...

└── 📁 pub & license/

├── thesis1.jpg

├── article1.png

├── haki2.png

└── SuratCiptaan_EC002025143008.pdf
''

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| **Markup** | HTML5 |
| **Styling** | CSS3 — Custom Properties, Grid, Flexbox, clip-path, Animations |
| **Scripting** | Vanilla JavaScript ES6+ |
| **Fonts** | Google Fonts — Cormorant Garamond · JetBrains Mono · Syne |
| **Graphics** | Native Browser Canvas API |
| **Hosting** | GitHub Pages |
| **Build Tools** | None |

---

## 📦 Sections
''
01 — About              Who I Am + domain tags + open to opportunities

02 — Skills & Tools     5 skill categories + animated proficiency bars

02.5 — Education        S1 Teknik Informatika + Bootcamp MSIB Data Science

03 — Projects           20+ filterable projects with slideshow + detail modal

04 — Achievements       5 recognition & award cards (equal height)

05 — Experience         Timeline with side-by-side text + doodle photo mosaic

06 — Leadership         3 leadership cards with photo clusters

07 — Certifications     9+ certs, filterable modal

08 — Publications       Final project · Journal article · IP License

09 — Contact            Social links + mailto contact form
---

## ⚡ Quick Start

```bash
# No build step needed — open directly in any modern browser
open index.html

# Or serve locally to avoid CORS on assets
npx serve .
# then visit http://localhost:3000

# Python alternative
python -m http.server 8000
# then visit http://localhost:8000
```

---

## 🌐 Deploy to GitHub Pages
''
1. Push portfolio folder contents → GitHub repo named: <username>.github.io
2. Settings → Pages → Deploy from branch → main → / (root)
3. Live at: https://<username>.github.io
---

## 🛠️ Customization Guide

### ➕ Add / Edit a Project

Open `js/projects.js`. Each project is an object in `PROJECTS[]`:

```js
{
  num: '01',                             // Display number on card
  emoji: '🍃',                           // Fallback emoji when no image
  tags: ['ai', 'cv', 'fullstack'],       // Filter tags
  date: 'Oct 2024 — Mar 2025',          // Shown in detail modal
  cats: ['Computer Vision', 'AI / ML'], // Category badge labels
  catColors: ['syn-cyan', 'syn-purple'], // Badge colors
  title: 'Your Project Title',
  descShort: 'One-line description shown on card.',
  features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
  problem:  'What problem did this solve?',
  solution: 'What was your technical approach?',
  contribution: [
    'Bullet 1 — what you did',
    'Bullet 2', 'Bullet 3', 'Bullet 4', 'Bullet 5',
  ],
  result: 'Key metric or outcome',
  stack: ['Python', 'TensorFlow', 'Flask'],
  tools: ['Jupyter Notebook', 'VS Code', 'GitHub'],
  github:    'https://github.com/...',    // '' = disabled button
  demo:      'https://youtu.be/...',      // '' = disabled button
  portfolio: 'https://bisa.ai/...',       // '' = disabled button
  slides: [                               // 1–5 images for auto-slideshow
    'assets/projects/myproject/01.jpg',
    'assets/projects/myproject/02.jpg',
  ],
}
```

**Available filter tags:**

| Tag | Category |
|---|---|
| `ds` | Data Science & Analytics |
| `ai` | AI / Machine Learning |
| `cv` | Computer Vision |
| `nlp` | Natural Language Processing |
| `fullstack` | Fullstack Web |
| `iot` | IoT / Hardware |
| `database` | Database |
| `app` | Software / App |
| `timeseries` `eda` `medical` `speech` | Sub-filters |

**Available color classes:**
`syn-cyan` · `syn-orange` · `syn-green` · `syn-red` · `syn-purple` · `syn-yellow` · `syn-blue` · `syn-pink` · `syn-teal`

---

### ➕ Add a Certificate

Open `js/cert-data.js`:

```js
{
  cat:    'cat-ds',         // cat-ds · cat-ai · cat-soft · cat-prog · cat-ms · cat-other
  issuer: 'Issuer Name',
  name:   'Certificate Full Name',
  date:   'Month Year',
  link:   'https://verify-url.com'
}
```

---

### 🖼️ Replace Photo Placeholders

**Experience / Leadership** — replace `<div class="epc-ph">` with a real `<img>`:

```html
<!-- Before -->
<div class="epc-item epc-blob4" style="width:130px;height:95px;"
     onclick="openLightbox('assets/exp/1.jpg','Caption')" data-tip="Click to enlarge">
  <div class="epc-ph">PHOTO HERE</div>
  <div class="epc-overlay">🔍</div>
</div>

<!-- After -->
<div class="epc-item epc-blob4" style="width:130px;height:95px;"
     onclick="openLightbox('assets/exp/1.jpg','Caption')" data-tip="Click to enlarge">
  <img src="assets/exp/1.jpg" alt="Caption">
  <div class="epc-overlay">🔍</div>
</div>
```

Same pattern for Leadership `ldc-item`.

---

## 🌈 Available Themes

| # | Theme | Type |
|---|---|---|
| 1 | 🌊 Neon Cyan *(default)* | Neon Dark |
| 2 | 💜 Neon Magenta | Neon Dark |
| 3 | 💚 Neon Green | Neon Dark |
| 4 | 🥇 Obsidian Gold | Luxury Dark |
| 5 | 🩶 Void Silver | Luxury Dark |
| 6 | ❤️ Dark Crimson | Luxury Dark |
| 7 | 🌿 Noir Emerald | Luxury Dark |
| 8 | 🌊 Deep Ocean | Luxury Dark |
| 9 | 🌸 Rose Gold | Luxury Dark |
| 10 | 💜 Sunset Purple | Luxury Dark |
| 11 | ☕ Cream & Sienna | Light |
| 12 | 🔵 Arctic White | Light |

---

## 🌐 Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| IE | ❌ Not supported |

> `clip-path` polygon and ellipse shapes require a modern browser.

---

## 📄 License
© 2026 Puteri Azli. All rights reserved.
This portfolio's design, code, and content are original work. Feel free to use it as
reference or inspiration — but please do not clone and deploy as your own without
significant modification.

Project-specific code in linked GitHub repositories is individually licensed — refer
to each project's `LICENSE` file.

---

<div align="center">

**Built with 💙 from scratch — no frameworks, no templates**

[![LinkedIn](https://img.shields.io/badge/-puteriazli-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/puteriazli)
[![GitHub](https://img.shields.io/badge/-puteriazli-181717?style=flat&logo=github)](https://github.com/puteriazli)
[![Kaggle](https://img.shields.io/badge/-puteriameliaazli-20BEFF?style=flat&logo=kaggle)](https://kaggle.com/puteriameliaazli)
[![Email](https://img.shields.io/badge/-puteriazli.it@gmail.com-EA4335?style=flat&logo=gmail)](mailto:puteriazli.it@gmail.com)

</div>