// Sushil Vatane — Portfolio Logic, Translations & Routing
var T = {
  hi: {
    backh: "← होम पर वापस",
    backs: "← कौशल पर वापस",
    resume: "रिज़्यूमे",
    dl_pdf: "PDF डाउनलोड करें",
    d4: "डेटा इंजीनियरिंग पाइपलाइन: Kaggle Superstore CSV (लगभग 9,994 पंक्तियाँ) को pandas से साफ़ कर PostgreSQL में लोड किया, फिर Open-Meteo API से महाराष्ट्र के छह शहरों का लाइव मौसम डेटा लाने वाली पाइपलाइन (1,008-पंक्तियों की संयुक्त तालिका)।",
    theme: "थीम",
    home: "होम",
    projects: "प्रोजेक्ट्स",
    experience: "अनुभव",
    education: "शिक्षा",
    skills: "कौशल",
    contact: "संपर्क",
    h_about: "परिचय",
    h_proj: "प्रोजेक्ट्स (स्टेटस)",
    h_exp: "अनुभव",
    h_edu: "शिक्षा",
    h_skills: "कौशल (प्रॉब्लम टैग)",
    about1: "कंप्यूटर साइंस का छात्र, जिसकी विशेषज्ञता <b>डेटा इंजीनियरिंग</b> में है। मैं Python, pandas, SQL और PostgreSQL से ETL पाइपलाइन बनाता हूँ, CSV फ़ाइलों और REST API से डेटा लाता हूँ, और FastAPI पर बने फुल-स्टैक ऐप्स के लिए डेटाबेस स्कीमा डिज़ाइन करता हूँ।",
    about2: "मैंने Infosys Springboard वर्चुअल इंटर्नशिप में टीम का नेतृत्व किया। मुझे मशीन लर्निंग में रुचि है और ML मॉडल के लिए साफ़, संरचित डेटा तैयार करना पसंद है।",
    th_prob: "प्रोजेक्ट",
    th_stack: "भाषा / स्टैक",
    th_verdict: "विवरण",
    view: "देखें",
    back: "← प्रोजेक्ट्स पर वापस",
    core: "मुख्य विचार",
    backx: "← अनुभव पर वापस",
    ov: "सारांश",
    more: "और देखें",
    d3: "इंटरैक्टिव मर्डर-मिस्ट्री गेम जिसमें खिलाड़ी SQL क्वेरी चलाकर हत्यारे को खोजते हैं। धीरे-धीरे कठिन होते सुराग, और हल तक पहुँचने के कई मान्य रास्ते।",
    d2: "सुरक्षित फ़ाइल-शेयरिंग प्लेटफ़ॉर्म: अपलोड पर एन्क्रिप्शन, Supabase क्लाउड स्टोरेज (Amazon S3, 250 MB), लिंक निरस्त और समाप्ति, रिसीवर-ईमेल शेयरिंग, डाउनलोड सीमा, और हर फ़ाइल ऑपरेशन की पूरी गतिविधि लॉगिंग।",
    d1: "ATS-फ्रेंडली रिज़्यूमे बनाने का वेब एप। HOD द्वारा सौंपा गया कॉलेज प्रोजेक्ट; 3 सदस्यों की टीम का नेतृत्व, डेटाबेस और फ्रंटएंड पर फोकस, स्कीमा डिज़ाइन और ऑडिट, कोड वर्ज़निंग और कई रिज़्यूमे वर्ज़न ट्रैक करने की सुविधा।",
    intern: "इंटर्न",
    e1: "\"Intelligent Encrypted File Sharing and Digital Collaboration Management Platform\" (Trustme) प्रोजेक्ट पर टीम 1 (8 सदस्य) का नेतृत्व किया, जिसमें डेटाबेस, स्कीमा, गतिविधि लॉग, वर्ज़न कंट्रोल और फ्रंटएंड पर ध्यान केंद्रित किया।",
    e2: "API कीज़ को इंटीग्रेट और मैनेज किया; पूरे प्रोजेक्ट के दौरान डेटाबेस की सेहत और विश्वसनीयता बनाए रखी।",
    e3: "टीम समन्वय की चुनौतियों को सुलझाने और बदलती प्रोजेक्ट आवश्यकताओं के तहत तेज़ी से ढलने का व्यावहारिक अनुभव प्राप्त किया।",
    th_year: "वर्ष",
    th_prog: "पाठ्यक्रम",
    th_res: "परिणाम",
    y3: "तृतीय वर्ष जारी",
    sgpa: "SGPA 9.0 (वर्ष 2), 8.0 (वर्ष 1)",
    l_lang: "भाषाएँ:",
    l_fw: "फ्रेमवर्क:",
    l_db: "डेटाबेस:",
    l_de: "डेटा इंजीनियरिंग:",
    l_tools: "टूल्स और प्लेटफ़ॉर्म:",
    l_soft: "सॉफ्ट स्किल्स:",
    s1: "समस्या समाधान",
    s2: "टीम सहयोग",
    s3: "संवाद",
    s4: "नेतृत्व",
    rank: "डेटा इंजीनियर (इच्छुक)",
    loc: "B.Sc. CS · लातूर, महाराष्ट्र 413512",
    st_sgpa: "वर्तमान SGPA:",
    st_proj: "प्रोजेक्ट्स:",
    st_int: "इंटर्नशिप:",
    st_focus: "फोकस:",
    focus: "ETL, SQL, ML डेटा",
    st_status: "स्थिति:",
    open: "काम के लिए उपलब्ध",
    notice_h: "ध्यान दें",
    notice: "फ़िलहाल डेटा इंजीनियरिंग रोल और इंटर्नशिप की तलाश में हूँ। ईमेल से संपर्क करें।",
    foot: "© 2026 Sushil Vatane · Codeforces से प्रेरित"
  },
  es: {
    backh: "← Volver al inicio",
    backs: "← Volver a habilidades",
    resume: "Currículum",
    dl_pdf: "Descargar PDF",
    d4: "Pipelines de ingeniería de datos: CSV de Kaggle Superstore (unas 9.994 filas) limpiado con pandas y cargado en PostgreSQL, y luego un pipeline con API en vivo que obtiene datos meteorológicos de Open-Meteo para seis ciudades de Maharashtra (tabla combinada de 1.008 filas).",
    theme: "Tema",
    home: "Inicio",
    projects: "Proyectos",
    experience: "Experiencia",
    education: "Educación",
    skills: "Habilidades",
    contact: "Contacto",
    h_about: "Acerca de mí",
    h_proj: "Proyectos (Estado)",
    h_exp: "Experiencia",
    h_edu: "Educación",
    h_skills: "Habilidades (Etiquetas)",
    about1: "Estudiante de Informática especializado en <b>ingeniería de datos</b>. Construyo pipelines ETL con Python, pandas, SQL y PostgreSQL, ingiero datos desde archivos CSV y APIs REST, y diseño esquemas de bases de datos para apps full-stack hechas con FastAPI.",
    about2: "Lideré un equipo durante la pasantía virtual de Infosys Springboard, y me interesa el aprendizaje automático y la preparación de datos limpios y estructurados para modelos de ML.",
    th_prob: "Proyecto",
    th_stack: "Lenguaje / Stack",
    th_verdict: "Detalles",
    view: "Ver",
    back: "← Volver a proyectos",
    core: "Idea central",
    backx: "← Volver a experiencia",
    ov: "Resumen",
    more: "Ver más",
    d3: "Juego interactivo de misterio y asesinato donde los jugadores ejecutan consultas SQL para encontrar al culpable. Pistas cada vez más difíciles y varios caminos válidos hacia la solución.",
    d2: "Plataforma segura para compartir archivos: cifrado al subir, almacenamiento en la nube con Supabase (Amazon S3, 250 MB), revocación y expiración de enlaces, uso compartido por correo del receptor, límites de descarga y registro completo de actividad.",
    d1: "Aplicación web para crear currículums compatibles con ATS. Proyecto universitario asignado por el jefe de departamento (HOD); líder de un equipo de 3 personas enfocado en base de datos y frontend, diseño/auditoría de esquemas, control de versiones y seguimiento de múltiples versiones.",
    intern: "Pasante",
    e1: "Lideré el Equipo 1 (8 miembros) en el proyecto \"Intelligent Encrypted File Sharing and Digital Collaboration Management Platform\" (Trustme), enfocándome en la base de datos, el esquema, los registros de actividad, el control de versiones y el frontend.",
    e2: "Integré y gestioné claves de API; mantuve la salud y la fiabilidad de la base de datos durante todo el proyecto.",
    e3: "Obtuve experiencia práctica resolviendo desafíos de coordinación del equipo y adaptándome rápidamente a los requisitos cambiantes del proyecto.",
    th_year: "Año",
    th_prog: "Programa",
    th_res: "Resultado",
    y3: "Tercer año en curso",
    sgpa: "SGPA 9.0 (año 2), 8.0 (año 1)",
    l_lang: "Lenguajes:",
    l_fw: "Frameworks:",
    l_db: "Bases de datos:",
    l_de: "Ingeniería de datos:",
    l_tools: "Herramientas y plataformas:",
    l_soft: "Habilidades blandas:",
    s1: "Resolución de problemas",
    s2: "Trabajo en equipo",
    s3: "Comunicación",
    s4: "Liderazgo",
    rank: "Ingeniero de datos (aspirante)",
    loc: "B.Sc. CS · Latur, Maharashtra 413512",
    st_sgpa: "SGPA actual:",
    st_proj: "Proyectos:",
    st_int: "Pasantías:",
    st_focus: "Enfoque:",
    focus: "ETL, SQL, datos para ML",
    st_status: "Estado:",
    open: "Disponible para trabajar",
    notice_h: "Aviso",
    notice: "Busco roles y pasantías de ingeniería de datos. Contáctame por correo.",
    foot: "© 2026 Sushil Vatane · Inspirado en Codeforces"
  }
};

var cur = "en";
var D = {
  backh: "← Back to home",
  backs: "← Back to skills",
  resume: "Resume",
  dl_pdf: "Download PDF",
  back: "← Back to projects",
  backx: "← Back to experience",
  ov: "Overview",
  more: "View more",
  core: "Core Idea"
};

var P = {
  "skills-details": {
    b: "#skills",
    bk: "backs",
    k: "ov",
    n: "All Skills & Technical Proficiencies",
    s: "Data Engineering · Backend & Full-Stack · Relational Databases · DevOps & Soft Skills",
    h: "<p>A complete breakdown of my technical stack, data engineering tools, database systems, and soft skills, along with where I have applied them across projects and my Infosys Springboard internship.</p>" +
       "<div class='tw sk-table'><table>" +
       "<tr><th>Category</th><th>Skills &amp; Technologies</th><th>Practical Application &amp; Context</th></tr>" +
       "<tr><td><b>Data Engineering</b></td><td><span class='tag'>ETL pipelines</span> <span class='tag'>pandas</span> <span class='tag'>SQLAlchemy</span> <span class='tag'>psycopg2</span> <span class='tag'>REST APIs</span> <span class='tag'>CSV Ingestion</span> <span class='tag'>Data Cleaning</span> <span class='tag'>ML Data Prep</span></td><td>Cleaned ~9,994 rows in the Kaggle Superstore CSV (imputing missing Burlington postal codes) and built a multi-city Open-Meteo REST API weather pipeline (1,008-row combined DataFrame) loaded into PostgreSQL.</td></tr>" +
       "<tr><td><b>Languages</b></td><td><span class='tag'>Python</span> <span class='tag'>SQL</span> <span class='tag'>Java</span> <span class='tag'>HTML5</span> <span class='tag'>CSS</span> <span class='tag'>JavaScript</span></td><td>Core programming languages used for data transformation scripts, complex relational queries (SELECT, JOIN, GROUP BY, subqueries), backend APIs, and responsive user interfaces.</td></tr>" +
       "<tr><td><b>Databases &amp; ORMs</b></td><td><span class='tag'>PostgreSQL</span> <span class='tag'>MySQL</span> <span class='tag'>pgAdmin</span> <span class='tag'>Drizzle ORM</span> <span class='tag'>Redis</span> <span class='tag'>Schema Design</span> <span class='tag'>Database Auditing</span></td><td>Designed and audited normalized schemas, activity logs, and version tracking for <b>Trustme</b>, <b>mysterySQL</b>, and <b>Resumeit</b>; maintained database health and reliability.</td></tr>" +
       "<tr><td><b>Frameworks &amp; Security</b></td><td><span class='tag'>FastAPI</span> <span class='tag'>ReactJS</span> <span class='tag'>AES-256 Encryption</span> <span class='tag'>Access Control</span></td><td>Built full-stack web apps with FastAPI backends and ReactJS frontends; implemented AES-256 file encryption on upload, link expiry/revocation, and download limits in <b>Trustme</b>.</td></tr>" +
       "<tr><td><b>Tools &amp; Cloud Platforms</b></td><td><span class='tag'>Git</span> <span class='tag'>GitHub</span> <span class='tag'>Supabase</span> <span class='tag'>Amazon S3</span> <span class='tag'>Render</span> <span class='tag'>Open-Meteo API</span> <span class='tag'>API Key Management</span></td><td>Managed version control across multi-person teams, integrated cloud storage (250 MB Amazon S3 bucket via Supabase), managed API keys, and deployed web services on Render.</td></tr>" +
       "<tr><td><b>Soft Skills &amp; Leadership</b></td><td><span class='tag'>Leadership</span> <span class='tag'>Team Collaboration</span> <span class='tag'>Problem Solving</span> <span class='tag'>Communication</span> <span class='tag'>Time Management</span></td><td>Led Team 1 (8 members) during the Infosys Springboard Virtual Internship 7.0 and a 3-member team on <b>Resumeit</b>, resolving coordination bottlenecks and adapting to changing requirements.</td></tr>" +
       "</table></div>" +
       "<b>Project-to-Skill Mapping</b>" +
       "<ul>" +
       "<li><b><a href='#project-etl'>ETL Pipelines</a>:</b> Python, pandas, SQLAlchemy, psycopg2, PostgreSQL (pgAdmin), Open-Meteo REST API</li>" +
       "<li><b><a href='#project-trustme'>Trustme (Infosys Springboard)</a>:</b> ReactJS, Python, FastAPI, PostgreSQL, Supabase (Amazon S3), AES-256 Encryption, Git/GitHub, Team Leadership</li>" +
       "<li><b><a href='#project-mysterysql'>mysterySQL</a>:</b> PostgreSQL, Supabase, Drizzle ORM, Redis, Advanced SQL Querying</li>" +
       "<li><b><a href='#project-resumeit'>Resumeit</a>:</b> HTML5, CSS, JavaScript, PostgreSQL, Database Schema Auditing, Code Versioning</li>" +
       "</ul>"
  },
  "resume": {
    b: "#about",
    bk: "backh",
    k: "resume",
    n: "Resume — Sushil Vatane",
    s: "Data Engineering · B.Sc. Computer Science",
    h: "<p><a href='SushilVatane_Resume.pdf' download='SushilVatane_Resume.pdf' id='dl' class='btn'>Download PDF</a> <span id='dlm' class='stk'></span></p>" +
       "<p><b>Sushil Vatane</b> &middot; +91 9146253761 &middot; <a href='mailto:sushilwatane8698@gmail.com'>sushilwatane8698@gmail.com</a> &middot; Latur, Maharashtra 413512<br>" +
       "<a href='https://www.linkedin.com/in/sushilvatane' target='_blank' rel='noopener'>linkedin.com/in/sushilvatane</a> &middot; <a href='https://github.com/sushilvatane07' target='_blank' rel='noopener'>github.com/sushilvatane07</a></p>" +
       "<b>Professional Summary</b>" +
       "<p>Computer Science student specializing in data engineering, with hands-on experience building ETL pipelines using Python, pandas, SQL, and PostgreSQL. Ingested data from CSV files and REST APIs, and designed database schemas for full-stack applications built with FastAPI. Led a team during the Infosys Springboard virtual internship, managing the codebase, API keys, and database reliability. Interested in machine learning (ML) and preparing clean, structured data for ML models.</p>" +
       "<b>Internship</b>" +
       "<p><b>Infosys Springboard Virtual Internship 7.0</b> &mdash; Intern (15 July 2026 &ndash; 20 Sep 2026)</p>" +
       "<ul>" +
       "<li>Led Team 1 (8 members) on the project &ldquo;Intelligent Encrypted File Sharing and Digital Collaboration Management Platform&rdquo; (Trustme), focusing on the database, schema, activity logs, version control and the frontend.</li>" +
       "<li>Integrated and managed API keys, and maintained database health and reliability throughout the project.</li>" +
       "<li>Gained hands-on experience resolving team coordination challenges and adapting quickly under changing project requirements.</li>" +
       "</ul>" +
       "<b>Education</b>" +
       "<ul>" +
       "<li><b>B.Sc. Computer Science (NEP), SRTM University, Nanded</b> | 2024&ndash;2027 (Pursuing)<br>Third Year &ndash; In Progress | Second Year (2025&ndash;26): 9.0 SGPA | First Year (2024&ndash;25): 8.0 SGPA</li>" +
       "<li><b>HSC, Maharashtra State Board &ndash; DPM Kallam</b> | 2023 &mdash; Score: 61.33%</li>" +
       "<li><b>SSC, Maharashtra State Board &ndash; RSCMV A. Shirpura</b> | 2020 &mdash; Score: 88.80%</li>" +
       "</ul>" +
       "<b>Projects</b>" +
       "<ul>" +
       "<li><b>ETL Pipelines</b> (Python, pandas, SQLAlchemy, PostgreSQL, Open-Meteo API):<ul>" +
       "<li>Built a CSV-to-PostgreSQL ETL pipeline on the Kaggle Superstore dataset (about 9,994 rows): cleaned the data with pandas and loaded it using SQLAlchemy and psycopg2.</li>" +
       "<li>Built a REST API pipeline using Open-Meteo for six Maharashtra cities (Latur, Pune, Mumbai, Nagpur, Nashik, Aurangabad), combining per-city DataFrames into one 1,008-row table.</li></ul></li>" +
       "<li><b>Trustme</b> (ReactJS, Python, PostgreSQL, FastAPI, Supabase) &mdash; <a href='https://github.com/sushilvatane07/tm' target='_blank' rel='noopener'>github.com/sushilvatane07/tm</a>:<ul>" +
       "<li>Developed a secure file-sharing platform focused on data encryption and access control.</li>" +
       "<li>Implemented encryption on upload, with files stored securely in cloud storage (Amazon S3 through Supabase, 250 MB). Added link revoke and expiry, receiver-email sharing, download limits and counts, and full activity logging for every file operation.</li>" +
       "<li>Addressed a common gap in everyday file sharing &ndash; email attachments and generic cloud drives typically offer limited access control and no visibility into who accessed a file.</li></ul></li>" +
       "<li><b>mysterySQL</b> (PostgreSQL, Supabase, Drizzle ORM, Redis) &mdash; <a href='https://github.com/sushilvatane07/sql-mystery' target='_blank' rel='noopener'>github.com/sushilvatane07/sql-mystery</a>:<ul>" +
       "<li>Built an interactive murder-mystery game where players run SQL queries to identify the killer.</li>" +
       "<li>Designed progressively harder clues to teach practical, real-world database querying skills, with multiple valid query paths to the solution.</li></ul></li>" +
       "<li><b>Resumeit</b> (HTML, CSS, JavaScript, PostgreSQL &mdash; college project assigned by the HOD):<ul>" +
       "<li>Served as team leader of a 3-member team, focusing on the database and frontend.</li>" +
       "<li>Built a web application for creating ATS-friendly resumes; designed and audited the database schema, managed code versioning, and let users save and track multiple resume versions.</li></ul></li>" +
       "</ul>" +
       "<b>Skills</b>" +
       "<ul>" +
       "<li><b>Languages:</b> Python, SQL, Java, HTML5, CSS, JavaScript</li>" +
       "<li><b>Frameworks:</b> FastAPI, ReactJS</li>" +
       "<li><b>Databases:</b> PostgreSQL, MySQL</li>" +
       "<li><b>Data Engineering:</b> ETL pipelines, pandas, SQLAlchemy, REST APIs</li>" +
       "<li><b>Tools &amp; Platforms:</b> Git, GitHub, Supabase, Render</li>" +
       "<li><b>Soft Skills:</b> Problem Solving, Team Collaboration, Communication, Leadership</li>" +
       "</ul>"
  },
  "project-trustme": {
    g: "https://github.com/sushilvatane07/tm",
    n: "Trustme (TrustShare)",
    s: "ReactJS · Python · FastAPI · PostgreSQL · Supabase (Amazon S3)",
    h: "<p>The core of Trustme (TrustShare) is secure file sharing: users upload files, the system encrypts them before storage, and only authorized people can access them through controlled sharing links. It addresses a common gap in everyday file sharing where email attachments and generic cloud drives offer limited access control and no visibility into who accessed a file.</p>" +
       "<b>Key Features &amp; Architecture</b>" +
       "<ul>" +
       "<li><b>Encryption on Upload:</b> Files are encrypted with AES-256 and stored securely in cloud storage (Amazon S3 through Supabase, 250 MB).</li>" +
       "<li><b>Granular Access Control:</b> Added link revoke and expiry, receiver-email sharing, and configurable download limits and counts.</li>" +
       "<li><b>Full Activity Logging:</b> Every file operation and access attempt is logged for complete audit visibility.</li>" +
       "</ul>" +
       "<b>Core Workflow</b>" +
       "<ol>" +
       "<li>A user signs in and uploads a file.</li>" +
       "<li>The backend checks the user’s permissions and validates the file.</li>" +
       "<li>The file is encrypted with AES-256 and stored in Supabase / S3.</li>" +
       "<li>The owner shares access with selected users via receiver-email, optionally setting download limits and an expiration time.</li>" +
       "<li>The system records file access, download counts, and sharing activity.</li>" +
       "</ol>"
  },
  "project-etl": {
    n: "ETL Pipelines — CSV and REST API to PostgreSQL",
    s: "Python · pandas · SQLAlchemy · psycopg2 · PostgreSQL (pgAdmin) · Open-Meteo API",
    h: "<p>Hands-on data engineering projects where raw data is ingested from flat files and live REST APIs, cleaned and transformed with pandas, and loaded into PostgreSQL.</p>" +
       "<b>Level 1: Superstore Sales ETL (CSV &rarr; pandas &rarr; PostgreSQL)</b>" +
       "<ul>" +
       "<li><b>Source:</b> Kaggle Superstore sales dataset (train.csv, about 9,994 rows).</li>" +
       "<li><b>Transform:</b> Cleaned with pandas. The 11 missing postal codes were all for Burlington, Vermont, and were filled with 05401 after confirming the data had no other reference.</li>" +
       "<li><b>Load:</b> Loaded into a PostgreSQL database (sales_db, table clean_sales_data) using SQLAlchemy and psycopg2-binary, managed in pgAdmin.</li>" +
       "</ul>" +
       "<b>Level 2: Weather API Pipeline (REST API &rarr; pandas &rarr; PostgreSQL)</b>" +
       "<ul>" +
       "<li><b>Source:</b> Open-Meteo weather REST API for six Maharashtra cities: Latur, Pune, Mumbai, Nagpur, Nashik, and Aurangabad.</li>" +
       "<li><b>Extract:</b> Iterated over a city coordinate dictionary, querying hourly weather metrics and converting each city response into its own DataFrame.</li>" +
       "<li><b>Transform &amp; Combine:</b> Combined the per-city DataFrames with pd.concat into a unified, structured table of 1,008 rows ready for PostgreSQL analysis and ML pipelines.</li>" +
       "</ul>"
  },
  "project-mysterysql": {
    g: "https://github.com/sushilvatane07/sql-mystery",
    n: "mysterySQL — SQL Murder Mystery: The Case of SQL Manor",
    s: "PostgreSQL · Supabase · Drizzle ORM · Redis",
    h: "<p>An interactive, SQL-based investigation game that helps users develop practical SQL querying and data analysis skills through a fictional murder mystery. Players act as detectives, exploring relational databases containing suspects, crime scenes, evidence, witness statements, phone records, and alibis.</p>" +
       "<ul>" +
       "<li>Built an interactive murder-mystery game where players run SQL queries (SELECT, JOIN, GROUP BY, subqueries) to identify the killer.</li>" +
       "<li>Designed progressively harder clues to teach practical, real-world database querying skills, with multiple valid query paths to the solution.</li>" +
       "</ul>"
  },
  "project-resumeit": {
    n: "Resumeit — ATS-Friendly Resume Builder",
    s: "HTML · CSS · JavaScript · PostgreSQL",
    h: "<p>A college project assigned by the Head of Department (HOD) to build a web application for creating and managing ATS-friendly resumes.</p>" +
       "<b>Role &amp; Contributions</b>" +
       "<ul>" +
       "<li><b>Team Leadership:</b> Served as team leader of a 3-member team, coordinating tasks and focusing primarily on the database and frontend architecture.</li>" +
       "<li><b>Database Schema &amp; Auditing:</b> Designed and audited the PostgreSQL database schema to store structured user profiles, education, experience, and project records.</li>" +
       "<li><b>Version Control &amp; Resume Tracking:</b> Managed codebase versioning and built support for users to save, update, and track multiple tailored resume versions.</li>" +
       "</ul>"
  },
  "experience-details": {
    b: "#experience",
    k: "ov",
    n: "Infosys Springboard Virtual Internship 7.0",
    s: "15 July 2026 – 20 Sep 2026 · Team Leader, Team 1",
    h: "<p><a class='btn' href='https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/c74bdaa1-db90-474f-acaf-33a57e15e206/224ed145-804b-41d8-98ab-22e4178db79d.pdf' target='_blank' rel='noopener'>Certificate &rarr;</a></p>" +
       "<p>Official project title: <b>Intelligent Encrypted File Sharing and Digital Collaboration Management Platform</b>, called <b>Trustme</b> for short.</p>" +
       "<p>From 15 July 2026 to 20 September 2026, Infosys gave me the opportunity to join its Springboard virtual internship. The batch had 25 students, and the mentor divided us into 3 teams: Team 1, Team 2 and Team 3.</p>" +
       "<p>I was in <b>Team 1</b> and served as <b>team leader</b>, leading a team of 8 members (including me). My main focus areas were the database, schema design, activity logs, version control, the frontend, and managing the team.</p>" +
       "<p>Through this internship I gained valuable industry skills, mainly <b>database design</b> and <b>time management</b>.</p>" +
       "<b>Project: Trustme</b>" +
       "<p>Trustme solves the problem of link exploits, so that only the users a file is meant for can access the data. What we added:</p>" +
       "<ul>" +
       "<li>Link revoke and link expiry</li>" +
       "<li>Receiver email, so a file is shared directly with the intended person</li>" +
       "<li>Download count and activity logs</li>" +
       "<li>250 MB storage on Amazon S3 through Supabase</li>" +
       "</ul>" +
       "<b>Team Lead</b>" +
       "<p><img src='data:image/jpeg;base64,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' alt='Sushil Vatane, Team Lead and Database Administrator' style='max-width:200px;height:auto;border:1px solid var(--line)'><br><span style='color:var(--muted)'>Sushil Vatane — Team Lead &amp; Database Administrator</span></p>" +
       "<p><a href='#project-trustme'>View the Trustme project &rarr;</a></p>"
  }
};

// Embedded base64 fallback for offline/single-file PDF download if needed
var RES = "JVBERi0xLjQKJZOMi54gUmVwb3J0TGFiIEdlbmVyYXRlZCBQREYgZG9jdW1lbnQgKG9wZW5zb3VyY2UpCjEgMCBvYmoKPDwKL0YxIDIgMCBSIC9GMiAzIDAgUiAvRjMgNiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL0Jhc2VGb250IC9IZWx2ZXRpY2EgL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcgL05hbWUgL0YxIC9TdWJ0eXBlIC9UeXBlMSAvVHlwZSAvRm9udAo+PgplbmRvYmoKMyAwIG9iago8PAovQmFzZUZvbnQgL0hlbHZldGljYS1Cb2xkIC9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIC9OYW1lIC9GMiAvU3VidHlwZSAvVHlwZTEgL1R5cGUgL0ZvbnQKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL0EgPDwKL1MgL1VSSSAvVHlwZSAvQWN0aW9uIC9VUkkgKGh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zdXNoaWx2YXRhbmUpCj4+IC9Cb3JkZXIgWyAwIDAgMCBdIC9SZWN0IFsgMTgyLjE2NzggNzUyLjYzOTQgMjk0LjIwODggNzYzLjQzOTQgXSAvU3VidHlwZSAvTGluayAvVHlwZSAvQW5ub3QKPj4KZW5kb2JqCjUgMCBvYmoKPDwKL0EgPDwKL1MgL1VSSSAvVHlwZSAvQWN0aW9uIC9VUkkgKGh0dHBzOi8vZ2l0aHViLmNvbS9zdXNoaWx2YXRhbmUwNykKPj4gL0JvcmRlciBbIDAgMCAwIF0gL1JlY3QgWyAzMDYuNTU2OCA3NTIuNjM5NCA0MTMuMTA3OCA3NjMuNDM5NCBdIC9TdWJ0eXBlIC9MaW5rIC9UeXBlIC9Bbm5vdAo+PgplbmRvYmoKNiAwIG9iago8PAovQmFzZUZvbnQgL0hlbHZldGljYS1PYmxpcXVlIC9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIC9OYW1lIC9GMyAvU3VidHlwZSAvVHlwZTEgL1R5cGUgL0ZvbnQKPj4KZW5kb2JqCjcgMCBvYmoKPDwKL0EgPDwKL1MgL1VSSSAvVHlwZSAvQWN0aW9uIC9VUkkgKGh0dHBzOi8vZ2l0aHViLmNvbS9zdXNoaWx2YXRhbmUwNy90bSkKPj4gL0JvcmRlciBbIDAgMCAwIF0gL1JlY3QgWyA0MjQuODY5MyAzNzAuMTE0NCA1NDMuOTIxMyAzODEuNzE0NCBdIC9TdWJ0eXBlIC9MaW5rIC9UeXBlIC9Bbm5vdAo+PgplbmRvYmoKOCAwIG9iago8PAovQSA8PAovUyAvVVJJIC9UeXBlIC9BY3Rpb24gL1VSSSAoaHR0cHM6Ly9naXRodWIuY29tL3N1c2hpbHZhdGFuZTA3L3NxbC1teXN0ZXJ5KQo+PiAvQm9yZGVyIFsgMCAwIDAgXSAvUmVjdCBbIDM4OC44NjkzIDI3Ni4zMTQ0IDU0My45MjEzIDI4Ny45MTQ0IF0gL1N1YnR5cGUgL0xpbmsgL1R5cGUgL0Fubm90Cj4+CmVuZG9iago5IDAgb2JqCjw8Ci9Bbm5vdHMgWyA0IDAgUiA1IDAgUiA3IDAgUiA4IDAgUiBdIC9Db250ZW50cyAxMyAwIFIgL01lZGlhQm94IFsgMCAwIDU5NS4yNzU2IDg0MS44ODk4IF0gL1BhcmVudCAxMiAwIFIgL1Jlc291cmNlcyA8PAovRm9udCAxIDAgUiAvUHJvY1NldCBbIC9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDIC9JbWFnZUkgXQo+PiAvUm90YXRlIDAgCiAgL1RyYW5zIDw8Cgo+PiAvVHlwZSAvUGFnZQo+PgplbmRvYmoKMTAgMCBvYmoKPDwKL1BhZ2VNb2RlIC9Vc2VOb25lIC9QYWdlcyAxMiAwIFIgL1R5cGUgL0NhdGFsb2cKPj4KZW5kb2JqCjExIDAgb2JqCjw8Ci9BdXRob3IgKFN1c2hpbCBWYXRhbmUpIC9DcmVhdGlvbkRhdGUgKEQ6MjAyNjExMTQwMzAzNTQrMDAnMDAnKSAvQ3JlYXRvciAoXCh1bnNwZWNpZmllZFwpKSAvS2V5d29yZHMgKCkgL01vZERhdGUgKEQ6MjAyNjExMTQwMzAzNTQrMDAnMDAnKSAvUHJvZHVjZXIgKFJlcG9ydExhYiBQREYgTGlicmFyeSAtIFwob3BlbnNvdXJjZVwpKSAKICAvU3ViamVjdCAoXCh1bnNwZWNpZmllZFwpKSAvVGl0bGUgKFN1c2hpbCBWYXRhbmUgLSBSZXN1bWUpIC9UcmFwcGVkIC9GYWxzZQo+PgplbmRvYmoKMTIgMCBvYmoKPDwKL0NvdW50IDEgL0tpZHMgWyA5IDAgUiBdIC9UeXBlIC9QYWdlcwo+PgplbmRvYmoKMTMgMCBvYmoKPDwKL0ZpbHRlciBbIC9BU0NJSTg1RGVjb2RlIC9GbGF0ZURlY29kZSBdIC9MZW5ndGggMzQyNQo+PgpzdHJlYW0KR2IhI149YGA6aCg0T1Q1My1EOTYkSnVHUUZzLUIzYChUKG0qK0clMGgoJC9yOz9NP0wvX3EkTFdWUSgqXGc7bjVALG8yRicwQSs8SDkoOzhRPlI/RXIlY2dLKzltJ1BMPVs0Z1Fra1hZP29rayRpclBbMj9bWzk0PFsxbUtbcEAlX1UhbiIoX3NUTkUlcSJZIkFcKTFZRk5gci9YcE1bTEZMbUpBSS5kcCExZnJHaUpoXy5PSlJ1blMvQEMmblxVKTwlPyRuakhVI2dkb2hkNmxPQ09iLVMzXjgyY2hfPiRDZzcqX1ZWVSwlRk1fPD8sU0o+RUxScDNIT1wqbEFoa0lFYVo+ZmVoYWR0LU1qLVlfIzJsQzYrbW9yZkUjMicoImBtPmJmXC11ck1rL1VtZVc2SGlTUzdyamQ+WTFOIj1CLDItcmtzNjUrJTM6UENpIzMkR1M4XVw3M0BFYVBbVkslcyVRRVhgTEk7IWhdcEQrODJZPS5UYkEqTmFddWtxLWAwKz1DWjorOVFSTywuMSVNdCFpN0hvUE9bXltsRGdwQCE9am11clU8YzlVLUZPbD8rK1Q8RTpmTSsoP0M0TVc8ZWc+JktuaF0iMS9aJG83PyU5RkZwXGk5Mj04YDBwP1xaSnRvajlSUnBKR0FfaypoLztndTRWMkhjYGdJcEY5JDVgOEw5TCgoXEcmJjpxVDdJMnBVOWhiXk1jUz5vWXI8Mm1AWEdPJSlGWlFjOmVyLiowP1RITmVMVWUpJT9VQilTT3FuXEY1WVFSO0IhUlBBcyZrWS9KZSkxX2QiRVRgWlU3RVZyXk0hPUgvTVNcVidadC5RXDNuN2tNP1pFTydMRnUmL2I9N1ZCWFE+bikobjEtIzYqZTojNUInKldROF9CaW5sZSUtOFIsbClPQSEyM1ZwdCFydFZDXl9ZKiFKbFo3T2FyUiVHaWtDdXM/PV0xNk8mOnMwTkV1R1xtZSEuJkVTLyt1TygtKVw9SlJocCUhZzlsSCZXNiJoQUYiaScqMSwyYUo7WSNcLj5dMyEsaT1eMC5GTChKYERWNVlhW19QWm4uNkBvazY2XT08W2M1cmJyNCNuLTQtKT9QPy1FQ0JoME9lUk5ya2psKjtZTVZPPTNwYUZsdTU/VjFwZ0Vocz1EJFNfdE0tcW9GRmlKQ2g3VkRUQEtTPmM2JFZccj5XIzVDNyw6bUpbISY1Y0whQ1dLbUNKL0lPLEtgODRTSDs7cidJYyQmOVlLI2JXPHNbYFo2aF1xKVRfXU9SQiowPEdeOCQ6TU1FaXJIcj1uODZAKD1oQ1hJQWFQRkwtXzZtNHQzOFEvUHVOJGpTaSkhQjgpJ29rXmghWD1hXTRjZ2AnTFZGOj42a083QGYocHA7TmRQPiwnOmRkcWJdOVhnZ3BMRjl0QnIyclFUUWJKKk1QQUZEImAvOidEY1wzaUFGYS1ZS0piJl1FcmlCXlpWdUg+bV4lZzFlKGUmOUswLWNsJ3IyNHVWJCE0Ti9SPTBINEo/I1FkaWBCc0I/a2J1MltzZyY2T0dvNGZNJzA+R25UVVgtR0FnS18kOWdfa3VsSFxjNTZhNmVDU0NRNzpfUiVLY1YpPGRGRHJpRicjKGs8WzxWSlAsJWNqSWlubyk/QUxfQDJeXU0pQTVJa2U3N2lJPT1wOCxkJFVOJlJMXVwzYjFQQ1NnJmhaKk5kTm4haVVyXFozJkstYCksV3JsMT8pYldxcUluTycwPDhUVFhmWHU3S2ZoX2o4UiteTCdnZ3BDOWRtcGcuRVYrMCc/VEYlNyM5KFhGVFdiS0lAXzRcSCE5OSdBYTgjQlw0N2ViSFp1YzsxX1k6PW8iJD89LDUucV42SCdMTV9hMGAzTjMvciQiYGs7Rjw1cUhUKCh1Y11RUXM2Wy9AXCxFL3M2Ymo0LHVwNCY/OTlJX2BnKiIuOXAkRStUXUUlbTNiVy9jSGo0cHA7YFAjKk88KkdYTFQjaFMqaD1OKmteJiU1X2xIZW0mIm9KNSo/MzE/XVUhMy0iNHNkbzspWG1XK1spNTthPCQyWE9nXS5cNFdlZWdpciRLSj9lPTgyKEgqYWQjcjlBZXNaPFFQX1stVyViNW8lISdgUEI4KUlDbVhPZTw4KTI/cV0wUl1yJy88ImgycTUrXi1Lby9ZPEJDIUIzKVFqZC9qa1pIPjV0LDchSG9MPi85dEZfO2pHYzBbUmNET05oLms2MVlmWDdvcWZxaTBoRVRodDVRKVJxKVclSl43MSY8czFrXm5xNCFdOC0sT0QuQF0zYEFcbUJzPz1dSzxwXyRxJ0tyQCdLNlRQZ19TTCtbLE5gKmkhblZnWUdmVjRjQSVtI00iOmpUKzhWJj9jUGlyblo6WzBCXEdDbz1vMXNsTTwtQ2ZJOGplMEdiIktgLUsuYktbZU9majNxYVgqWUUlcCosUSFbWz0iTkhUbFpkUykpXEFkVSFIRmRPaEpaOm1WYnRfJlFBPkskbkZRK15gYnRoK0lJVWteaV9BNUJKT1Y7ZyszPWlpIjksa1BVOzxhZC1MRHUkQmUmYDkiMTJjJV1ESipnOTVOTGNRM3JhW1JzKEMzZj9BKCdMP2VXdSxGUWVlWXVQMyoucm9fUVEyTSlaQGpvO2ckV0h0cGVqRlYqSDcqNWc8SUc+cVklZj83XUBpPidRPyN0Y0VnMl9gW1NsW3IqT1FaKmZnP0BwK08rTkwhRDBOTzImaUZqUC89Pmo/dSglUl1KW246TWJhb05xWmIlRi84JidGZ3BGKWlvO0czYW5mL0c4S0o4Zy1jOCw0ZiQ6aEYsRDIyKmYoXjYnPygyJz5iPC5kJCEwXCk9UWpnPjFuUltwLUUvaVxdLScuaTxFZTFxMisxUTYyaidhUnBtN0olLU9IZCljM1pVNzJeU2Zccy8lUyxcRjljKyEoQjRLSkZnIlpDUVNaYFsvcD8lbSMiLzUqP0NdOjR1WF9VT1xyLkQyVGkyWy9hPDxINmJjRS09KiF1MS40cXA9VVZpVkpLY0JVISwvaUBBUzwrVDA7TUYnRFZXVDwpZWVQXGg/WlFFSWdZV2BMR3JFYElpIUpaTDJ1Km1MSEAmW29CXic2MFEpOVVuUE8kXDciaVxBSVxZUEs2bGFyUUcyUDZLa1dkPE9BIlhrb2BUVjpxW3UtPWlMKUVuY0w5OkcyOSN1Uj1iXjBDVl1ILGMsbnVLS1VMKi5GcWFiSE4kJVRyJG9oT2dbb0RVXklhOGtPQlsoNlZBWzEqaG5yT0EzZSdUOjNtaC4nN1MvQVRGJHEzSGMsXklyMFAiLS0oYnMnW15PZjQ3L2FkNVdaNCE1QkJbOzgmS0o+Ni9Tbz44VExNR0RhVWIvIllJQF5NKDNhZVtgQC06Ol0lPVxHa0o0QSVvJiomMiovcUdVIW0xUl8uY0skKiI8TlxWRTQwL0ZBT0J0QXQ+M2kwS1JvdCI7U09QP1hqV1lMXjMoLzFzNFgvUCUuaClxZzA9Y2s3TDQlLkA3a0VtVihuUFxFcjQ5WEs4S2UwOzslTFpHIT5MXWg+PjpGISVvIyVgVW8nQWk3b2plcWEsPzFjZ2wmO3FqNUw5QnA+bjhlJEReIWtCMVRdaVk6TzxaOy4kLl5cSk90LlRXJCRhWz5qcjpqVzAwO2k9XFI1My43US0mQFM5Q3RKSlgwZUlHbkJSKXBSUy4uNTYmOGJHSXB0Oj5gPypVQVJtQENnI1IxIysyYW5wYyM2V0g3MC5oIiwlPzwjRU9iKmQyV2dkM0tCNj02Ry9EWTlxcT5lYitsc3JLK3VPLVU2KEoyJjY3ZUxNXlczVCxATmteKDcnU3IoKiouX2deNkohZFxvLD5VSjpLTWZQc1ZTJlE6JSJXdXNpWmNkbWtbNnJdbk5Qa09WR2UoTT11cWA+UCJLZi8sRHF0J15UJjNdaj1hKShBTT1WKmdVL0JhTSNsLDBlY0hlKyo5Wjs6OV9gWWhWcG9PKUFgTkFkPjpqS1tKJFRyIShBczRGUiIsXnFvYTROKUE6WVAzT3AuKEglOWsrcktPIVg3ZVtsPExBU3A9aU1rL2YoMF9GKE4jRGhzM29XLmV0XGApPW9mSztQMGk7TFExai9gWF0yUzowMUg0VktyREZGcFRFdCRGMihWTWZqKVtdMS5AN0xBRyRHT0o9VlxCaEo2cj5DNkBpYkpFK2VgaClGOilQLUFxRHNXbG9cWDpFIWY8S2NnZiw5Wlw8aE9LUCluIiw6Y3MhTDg8NWouaSVbb11sRzctI0VqWTMicixkJDA4QVFROT4wT2lqVW89TSQ4WDg7YGtDYDBvclQkRDJYRl1OZVMlUDlST1tVQ3VINGJUcUQ9LlosPVNYM2pwY0lbOidbXmIpJS4oP2YhXVhtQSQocmoxWkZTXz42SSU3J3JKOkJuNnMoLEU8bWhnZG5yOi5MZzFjK1o7Ll4oSGVMPU07N25gVCI5cCFbVWJePC4yIk5MLVEsTHJTQT4yYFw4OTNtdSVIK1xjOEVMbDgnZEhRITtscjBPbi9wLj4/bHI9O2xcOT1ifj5lbmRzdHJlYW0KZW5kb2JqCnhyZWYKMCAxNAowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwNjEgMDAwMDAgbiAKMDAwMDAwMDExMiAwMDAwMCBuIAowMDAwMDAwMjE5IDAwMDAwIG4gCjAwMDAwMDAzMzEgMDAwMDAgbiAKMDAwMDAwMDUyMyAwMDAwMCBuIAowMDAwMDAwNzA4IDAwMDAwIG4gCjAwMDAwMDA4MjMgMDAwMDAgbiAKMDAwMDAwMTAxMSAwMDAwMCBuIAowMDAwMDAxMjA4IDAwMDAwIG4gCjAwMDAwMDE0NDkgMDAwMDAgbiAKMDAwMDAwMTUxOSAwMDAwMCBuIAowMDAwMDAxODA5IDAwMDAwIG4gCjAwMDAwMDE4NjkgMDAwMDAgbiAKdHJhaWxlcgo8PAovSUQgCls8NzE0ODkxMDhlNDViNzRlMTExNTIxYmE2NTg2MDIzNjc+PDcxNDg5MTA4ZTQ1Yjc0ZTExMTUyMWJhNjU4NjAyMzY3Pl0KJSBSZXBvcnRMYWIgZ2VuZXJhdGVkIFBERiBkb2N1bWVudCAtLSBkaWdlc3QgKG9wZW5zb3VyY2UpCgovSW5mbyAxMSAwIFIKL1Jvb3QgMTAgMCBSCi9TaXplIDE0Cj4+CnN0YXJ0eHJlZgo1Mzg2CiUlRU9GCg==";

function triggerPdfDownload(e) {
  // Works in any standard browser using Blob URL fallback if direct file link isn't served
  try {
    var bin = atob(RES);
    var u = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
    var blob = new Blob([u], { type: "application/pdf" });
    if (window.claude && claude.use) {
      e.preventDefault();
      claude.use("downloads").then(function (dn) {
        if (dn) dn.save({ filename: "SushilVatane_Resume.pdf", data: blob });
      });
      return;
    }
    var url = URL.createObjectURL(blob);
    var a = e.currentTarget;
    a.href = url;
    setTimeout(function () { URL.revokeObjectURL(url); }, 10000);
  } catch (err) {}
}

function initDl() {
  var b = document.getElementById("dl");
  if (b) {
    b.textContent = lbl("dl_pdf");
    b.onclick = triggerPdfDownload;
  }
}

var sideDl = document.getElementById("side-dl");
if (sideDl) {
  sideDl.onclick = triggerPdfDownload;
}

function lbl(k) {
  var t = T[cur];
  return (t && t[k]) || D[k];
}

function route(sc) {
  var h = location.hash.slice(1),
      p = P[h],
      d = document.getElementById("detail");
  document.querySelectorAll("main>.box").forEach(function (b) {
    if (b !== d) b.style.display = p ? "none" : "";
  });
  if (p) {
    d.style.display = "";
    d.innerHTML =
      "<h2>&rarr; " + p.n + "</h2><div class=\"in\">" +
      "<p class=\"stk\">" + p.s + "</p>" +
      (p.g ? "<p><a class=\"btn\" href=\"" + p.g + "\" target=\"_blank\" rel=\"_noopener\">GitHub &rarr;</a></p>" : "") +
      "<h3>" + lbl(p.k || "core") + "</h3>" +
      p.h +
      "<p><a href=\"" + (p.b || "#projects") + "\">" + lbl(p.bk || (p.b ? "backx" : "back")) + "</a></p></div>";
    if (h === "resume") initDl();
    if (sc !== false) window.scrollTo(0, 0);
  } else {
    d.style.display = "none";
    if (sc !== false && h) {
      var e = document.getElementById(h);
      if (e) e.scrollIntoView();
    }
  }
}

var els = document.querySelectorAll("[data-k]");
els.forEach(function (e) {
  e.setAttribute("data-o", e.innerHTML);
});

function setLang(c) {
  els.forEach(function (e) {
    var v = T[c] && T[c][e.getAttribute("data-k")];
    e.innerHTML = v !== undefined ? v : e.getAttribute("data-o");
  });
  document.documentElement.lang = c;
  cur = c;
  route(false);
  try {
    localStorage.setItem("lang", c);
  } catch (x) {}
}

var sel = document.getElementById("l");
sel.onchange = function () {
  setLang(sel.value);
};

try {
  var s = localStorage.getItem("lang");
  if (s && (s === "en" || T[s])) {
    sel.value = s;
    setLang(s);
  }
} catch (x) {}

window.addEventListener("hashchange", function () {
  route();
});
route();

document.getElementById("t").onclick = function () {
  var r = document.documentElement,
      d = matchMedia("(prefers-color-scheme: dark)").matches;
  var curTheme = r.getAttribute("data-theme") || (d ? "dark" : "light");
  r.setAttribute("data-theme", curTheme === "dark" ? "light" : "dark");
};
