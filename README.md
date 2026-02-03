## SaaS Portfolio – React + Vite + Tailwind

Modern, dark-first personal portfolio designed in a SaaS style (inspired by Stripe, Vercel, and Linear). Built with React, Vite, Tailwind CSS, Framer Motion, and Lucide icons.

### Tech stack

- **React + Vite**: Fast dev experience and production build.
- **Tailwind CSS**: Utility-first styling, dark mode via `class`.
- **Framer Motion**: Page transitions, scroll reveals, hover and modal animations.
- **Lucide React**: Icon set for services, navigation, and UI.

### Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

   Then open the printed local URL in your browser (usually `http://localhost:5173`).

3. **Create a production build**

   ```bash
   npm run build
   ```

4. **Preview the production build**

   ```bash
   npm run preview
   ```

### Folder structure (relevant parts)

- **`src/main.jsx`** – React entry, mounts the app.
- **`src/App.jsx`** – Renders the main `Layout`.
- **`src/components/Layout.jsx`** – App shell with navigation, dark/light toggle, footer, and section composition.
- **`src/sections/*`** – Individual content sections (`HeroSection`, `AboutSection`, `ServicesSection`, `ProjectsSection`, `ExperienceSection`, `TestimonialsSection`, `ContactSection`).
- **`src/theme.js`** – Small helper for theme persistence and `dark` class handling.
- **`src/index.css`** – Tailwind base import and global styles (dark background, smooth scrolling).
- **`tailwind.config.js`** – Tailwind configuration with `darkMode: 'class'` and a few custom tokens.

### Features

- **SaaS-style hero** with gradient background, KPI cards, and Framer Motion entrance animations.
- **About & Services** sections showcasing stack and SaaS-oriented offerings.
- **Projects grid** with hover states and an accessible Framer Motion modal for details.
- **Experience timeline** with a vertical, animated timeline layout.
- **Testimonials carousel** using Framer Motion + simple controls.
- **Contact form** with floating labels, a fake async submit, and success animation.
- **Dark/light mode toggle** persisted in `localStorage`.
- **Smooth scrolling** between sections from the navigation and hero CTAs.

### Customisation

- Update copy and content in the `src/sections/*` files (headlines, bullets, project data, testimonials, etc.).
- Adjust colors, gradients, and shadows via Tailwind utility classes and `tailwind.config.js`.
- Wire the contact form to your backend or service by replacing the fake timeout in `ContactSection`.

