# Reactfolio V1.2 👨‍💻

Reactfolio is a modern and customizable personal portfolio web template built with React.
This version is customized by **Vishnu Vardhan Vemula** to showcase his projects, skills, and experience as a **Full-Stack Developer & AI/ML Enthusiast**.

With its responsive design and clean code, Reactfolio can be easily tailored to suit individual needs, making it an ideal choice for developers, designers, and creatives who want to present their work professionally.

<center>
<img src="https://cdn.tharindu.dev/reactfolio.jpg" alt="Reactfolio" />
</center>

🚀 **Live Demo**: [Portfolio Website](https://github.com/Vishnu122101)

---

- [Reactfolio V1.2 👨‍💻](#reactfolio-v12-)
  - [📙 Features](#-features)
  - [📚 Getting Started](#-getting-started)
  - [🛠 Installation and Setup Instructions](#-installation-and-setup-instructions)
  - [📁 Folder Structure](#-folder-structure)
  - [⚙️ Configurations](#️-configurations)
  - [📈 Google Analytics](#-google-analytics)
  - [🚀 Building the React App](#-building-the-react-app)
  - [🤔 FAQ](#-faq)
  - [🌱 Contribution](#-contribution)

---

## 📙 Features

* 📖 Multi-Page Layout

  * Home
  * About
  * Projects
  * Articles
  * Contact
* 📱 Fully Responsive
* 🛠 Easy Configurations

---

## 📚 Getting Started

Clone down this repository.
You will need **NodeJS** and **git** installed globally on your machine.

---

## 🛠 Installation and Setup Instructions

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the project in development mode:

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.
   The app will reload automatically if you make edits.

---

## 📁 Folder Structure

* `/public`: Publicly accessible assets (images, media).
* `/src`: Core application code.

  * `/src/components/`: Reusable UI components.
  * `/src/data`: Configurations (user data, SEO, analytics).
  * `/src/pages`: Page layouts (Home, About, Projects, etc.).

---

## ⚙️ Configurations

All your portfolio content can be managed from `/src/data/`.

* `INFO.js` → Contains personal details, socials, and project data (already customized for Vishnu).
* `articles.js` → Add your blogs/articles here.
* `seo.js` → Manage SEO metadata (titles, keywords, descriptions).
* `styles.css` → Customize colors, fonts, and UI theme.

💡 Even if you are a beginner, you can easily update these files to personalize your portfolio.

---

## 📈 Google Analytics

Add your **Google Analytics 4 MEASUREMENT ID** to `/src/data/tracking.js`.
[Find your Measurement ID here](https://support.google.com/analytics/answer/9539598?hl=en).

---

## 🚀 Building the React App

To create a production build:

```bash
npm run build
```

This generates an optimized production bundle inside the `build/` folder.
Deploy the contents of `build/` to your hosting service (Vercel, Netlify, or your own server).

For manual server deployment (example with Apache):

```bash
scp -r build/* user@example.com:/var/www/html
```

---

## 🤔 FAQ

**Q1. Why are subpages only accessible via navigation but not direct URLs?**

If you’re hosting with Apache, add this to your `.htaccess` file:

```c
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🌱 Contribution

This is **Vishnu’s personal portfolio**, but Reactfolio is open-source.
If you’d like to improve this template or add features, feel free to fork the project and experiment!

💡 Built with ❤️ by [Vishnu Vardhan Vemula](https://www.linkedin.com/in/vishnu-vardhan-vemula/)

