# SushilVatane.dev — Personal Portfolio

A fast, lightweight, and fully responsive personal portfolio website  Built with vanilla HTML5, CSS3, and JavaScript with zero external framework dependencies.

---

##  Features

* **Codeforces-Inspired Aesthetic:** Clean, high-density boxed layout featuring problem-status tables, problem tags for skills, and a classic user-profile sidebar with rank styling.
* **Multilingual (`i18n`) Support:** Instant client-side language switching across **English (`en`)**, **Hindi (`hi`)**, **Marathi (`mr`)**, and **Spanish (`es`)**, persisted via `localStorage`.
* **Light & Dark Mode:** Automatic system color-scheme detection (`prefers-color-scheme`) with a manual theme toggle button.
* **Hash-Based SPA Routing & Dedicated Pages:**
  * Dynamic in-page views for `#resume`, `#project-etl`, `#project-trustme`, `#project-mysterysql`, `#project-resumeit`, and `#experience-details`.
  * Dedicated `skills.html` page providing a complete technical proficiency matrix and project-to-skill mapping.
* **Universal Resume PDF Download:** Direct download support for `SushilVatane_Resume.pdf` with an embedded Base64 `Blob` fallback so downloads work both on live web servers and when opened locally via `file://`.
* **Responsive Across All Devices:**
  * **Desktop & Ultra-Wide (`1280px+`):** Two-column layout with main content and profile sidebar.
  * **Tablets (`601px – 860px`):** Full-width main column with a side-by-side 2-column profile/notice footer grid.
  * **Mobile Phones (`≤ 600px`):** Touch-scrollable navigation bar and automatic conversion of wide tables into readable stacked cards.
  * **Print-Ready (`@media print`):** Hides navigation controls and buttons for clean PDF/paper printing.

---

##  Project Structure

```text
├──520.png                    # Profile photo
├── index.html                # Main portfolio page (About, Projects, Experience, Education, Skills, Resume view)
├── skills.html               # Dedicated "All Skills & Technical Proficiencies" page
├── styles.css                # Responsive stylesheet, light/dark theme variables, mobile card tables, print styles
├── script.js                 # i18n translations (EN/HI/ES), hash router, theme toggle, and PDF download handler
├── SushilVatane_Resume.pdf   # Official downloadable PDF resume
└── README.md                 # Project documentation
```

---

##  Highlighted Projects

1. **ETL Pipelines** (`Python`, `pandas`, `SQLAlchemy`, `psycopg2`, `PostgreSQL`, `Open-Meteo API`)
   * **Level 1 (CSV to PostgreSQL):** Cleaned ~9,994 rows from the Kaggle Superstore dataset using `pandas` and loaded them into PostgreSQL via `SQLAlchemy`.
   * **Level 2 (REST API to PostgreSQL):** Built a live weather ingestion pipeline querying the Open-Meteo REST API across six Maharashtra cities into a unified 1,008-row table.
2. **Trustme (TrustShare)** (`ReactJS`, `Python`, `FastAPI`, `PostgreSQL`, `Supabase / Amazon S3`)
   * Secure file-sharing platform featuring AES-256 encryption on upload, link revocation and expiry, receiver-email verification, download limits, and full activity logging.
   * Repository: [github.com/sushilvatane07/tm](https://github.com/sushilvatane07/tm)
3. **mysterySQL** (`PostgreSQL`, `Supabase`, `Drizzle ORM`, `Redis`)
   * Interactive SQL murder-mystery investigation game where players write `SELECT`, `JOIN`, `GROUP BY`, and subquery statements to solve the case.
   * Repository: [github.com/sushilvatane07/sql-mystery](https://github.com/sushilvatane07/sql-mystery)
4. **Resumeit** (`HTML5`, `CSS3`, `JavaScript`, `PostgreSQL`)
   * ATS-friendly resume builder assigned by the HOD; led a 3-member team focusing on PostgreSQL schema design/auditing, frontend architecture, and multi-version resume tracking.
   * Repository: [github.com/sushilvatane07/resumebuilder](https://github.com/sushilvatane07/resumebuilder)

---

## 🛠️ Local Development & Usage

Because this project uses standard HTML, CSS, and vanilla JavaScript, no build step or package manager (`npm`/`node`) is required.

1. **Clone or extract the repository:**
   ```bash
   git clone https://github.com/sushilvatane07/sushilvatane07.github.io.git
   cd sushilvatane07.github.io
   ```
2. **Open locally:**
   * Double-click `index.html` to open it directly in any browser, **or**
   * Serve it with a local static server (e.g., Python or VS Code Live Server):
     ```bash
     python -m http.server 8000
     ```
   * Visit `http://localhost:8000` in your browser.

---

##  Deployment

This portfolio can be hosted for free on any static hosting provider:

* **GitHub Pages:** Push the files to the `main` branch of your repository and enable **Settings → Pages → Deploy from a branch (`main` / `root`)**.
* **Vercel / Netlify / Render:** Import your GitHub repository, leave the build command blank, and set the publish/output directory to `./`.

---

## Contact

* **Name:** Sushil Vatane
* **Location:** Latur, Maharashtra 413512, India
* **Email:** [sushilwatane8698@gmail.com](mailto:sushilwatane8698@gmail.com)
* **GitHub:** [github.com/sushilvatane07](https://github.com/sushilvatane07)
* **LinkedIn:** [linkedin.com/in/sushilvatane](https://www.linkedin.com/in/sushilvatane)
