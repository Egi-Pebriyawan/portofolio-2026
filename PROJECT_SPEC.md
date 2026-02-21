# 🚀 Portfolio Website Specification

## 👤 Developer Information

Name: Egi Pebriyawan  
Role: Web Developer & Professional Teacher  
Focus: Development & Education

---

## 🎯 Objective

Create a modern, clean, and professional portfolio website using Vue.js that showcases skills, projects, experience, and educational background clearly for recruiters and clients.

The website must be visually appealing, responsive, and easy to scan within 5–10 seconds.

---

## 🧱 Tech Stack

- Vue 3 (Composition API)
- Vite
- Tailwind CSS (via PostCSS)
- JavaScript (ES6+)
- HTML5

---

## 📁 Project Structure

Use the following structure:

/src  
 /assets  
 /images  
 /icons  
 /pdf (cv.pdf must be here)  
 /components  
 Navbar.vue  
 Hero.vue  
 About.vue  
 Education.vue  
 Skills.vue  
 Projects.vue  
 Experience.vue  
 Contact.vue  
 Footer.vue  
 /views  
 Home.vue  
 /styles  
 main.css  
 App.vue  
 main.js

/public  
 favicon.ico

index.html  
tailwind.config.js  
vite.config.js

---

## ⚙️ Framework Rules

- Use Vue 3 Composition API
- Each section MUST be a separate component
- Use reusable components when possible
- Use proper import/export
- Ensure project runs with:
  npm install  
  npm run dev

---

## 🎨 Design Style

- Clean & minimal
- Professional developer portfolio
- Smooth and subtle animations
- Responsive (mobile-first)

---

## 🎨 Theme & UI Rules

### Light Mode (Default)

- Background: white
- Text: slate-800
- Accent: sky-400 / blue-400

### Dark Mode

- Background: slate-900
- Text: slate-300

- Use Tailwind dark mode (class strategy)

---

## 🌗 Dark Mode

- Provide toggle button
- Save preference in localStorage
- Apply class-based dark mode

---

## 🎯 Icons

- Use colored icons (Devicon or similar)
- Consistent sizing
- No grayscale icons

---

## 🧩 Website Structure

The website MUST include the following sections in order:

1. Navbar (sticky)
2. Hero Section
3. About Section
4. Education Section
5. Skills Section (Marquee + Grid)
6. Experience Section
7. Projects Section
8. Contact Section
9. Footer

---

## 🧭 Navbar

- Sticky at top
- Smooth scroll navigation
- Active link highlight
- Mobile responsive (hamburger menu)

---

## 🦸 Hero Section

Content:

- Name: Egi Pebriyawan
- Role: Teacher & Web Developer
- Tagline:
  "S1 Graduate | Postgraduate PPG Professional Teacher | Web Developer"

CTA Buttons:

- View Projects
- Contact Me
- Download CV (IMPORTANT)

Design:

- Clean layout (centered or split)
- Strong typography

---

## 📄 CV Download

- File location:
  /src/assets/pdf/cv.pdf

- Must include:
  - About
  - Skills
  - Experience
  - Education

- Use anchor download attribute

---

## 👨‍💻 About Section

- Intro:
  Hi, I'm Egi Pebriyawan, a passionate Web Developer focusing on building intuitive and scalable web applications.

- Background:
  A graduate (S1 - Information Technology) and currently pursuing the Professional Teacher Education Program (PPG) at Universitas Pendidikan Indonesia.

- Goals:
  Professional Secondary & Primary High School teacher dedicated to mastering new tech and writing clean, efficient, maintainable code. Empowering the next generation through technical excellence and modern pedagogy

---

## 🎓 Education Section

Content:

- S1 Degree — [Information Technology & Universitas Bina Sarana Informatika ]
- Professional Teacher Education (PPG) — Postgraduate Program At Universitas Pendidikan Indonesia Bandung (Ongoing)

Description:
Currently pursuing PPG to become a certified professional teacher while continuing to develop skills in web development.

---

## 🛠 Skills Section

### Marquee

- Skill icons + names
- Move left to right
- Infinite loop
- Duration: 20–25 seconds
- Pause on hover
- Duplicate content for seamless loop
- Use Devicon icons
- Default: color
- Hover: full color
- Use overflow-hidden container

### Grid

- Responsive grid:
  - Mobile: 2 columns
  - Desktop: 4 columns
- Each card:
  - Icon
  - Skill name
  - Skill level
- Hover effects:
  - scale-105
  - soft shadow

---

## 📦 Skills Data

- HTML — Advanced
- CSS — Advanced
- Tailwind CSS — Advanced
- JavaScript — Intermediate
- Laravel — Intermediate
- Filament — Intermediate
- Vue — Intermediate
- Vite — Intermediate
- AI Agent — Intermediate
- Git & GitHub — Intermediate
- Network & Security — Intermediate
- IT Support — Advanced

---

## 💼 Projects Section

Each project must include:

- Project name
- Image
- Description
- Tech stack
- Demo link
- GitHub link

### Projects Data

1. Project Name: E-Commerce Dashboard  
   Tech Stack: Laravel, Tailwind CSS, JavaScript  
   Description: Admin panel for monitoring sales and managing products.  
   Links: Demo: # | GitHub: #  
   Image: https://placehold.co/600x400/1e293b/ffffff?text=Project+1

2. Project Name: Portfolio Website  
   Tech Stack: HTML, Tailwind CSS, JavaScript  
   Description: Personal responsive portfolio website.  
   Links: Demo: # | GitHub: #  
   Image: https://placehold.co/600x400/1e293b/ffffff?text=Project+2

---

## 🧳 Experience Section

Title: Operations & Technical Support

Organization: PT Indomarco Prismatama (Indomaret)

Duration: 2020 – 2026

Description:
IT Support & Network Security: Responsible for hardware maintenance, network troubleshooting, and ensuring system security protocols within the office environment.

Data Analysis & Administration: Managed high-volume data analysis for operational efficiency and oversaw the administration of corporate asset lending.

Training & Organizing: Acted as a Technical Trainer and Organizer, developing and delivering training modules for staff to improve internal workflows.

---

## 📞 Contact Section

### Contact & Social Links

- Email: egipcp@email.com
- GitHub: https://github.com/Egi-Pebriyawan
- LinkedIn: https://linkedin.com/in/egi-pebriyawan-38624a291
- Instagram : https://www.instagram.com/egipebriyawan/

Design:

- Simple and clear
- Strong call-to-action

---

## 🦶 Footer

- Name
- Copyright
- Social links

---

## ⚙️ Development Constraints

- Do NOT use Tailwind CDN
- Use Vite build system
- Use semantic HTML
- No inline CSS
- All assets properly imported

---

## ⚙️ Animation Rules

- Use @keyframes marquee
- Smooth and seamless animation
- No excessive motion
- Optimize performance

## 🧠 UX Rules

- Easy to scan quickly (5–10 seconds)
- Clean layout (no clutter)
- Clear hierarchy
- Professional appearance

---

## 🚫 Critical Rules

- Do NOT ignore folder structure
- Do NOT mix Vue with plain HTML
- Ensure imports are valid
- Ensure project runs without errors

---

## ▶️ Run Instructions

npm install  
npm run dev  
npm run build

---

## 📤 Output Requirements

- Full Vue project structure
- All components included
- Tailwind configured
- Dark mode working
- CV download working
- Production-ready code
- include explanations

## Git Ignore

- make file git ignore
