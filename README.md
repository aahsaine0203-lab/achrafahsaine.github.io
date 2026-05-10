# Professional Online CV Web App

A modern, responsive, and professional personal CV web application built with HTML5, CSS3, jQuery, and ReactJS.

## Features
- **Modern UI**: Dark-themed, glassmorphism UI elements, and sleek typography using Google Fonts (Inter).
- **Responsive Layout**: Designed with modern CSS (Flexbox/Grid), adapting flawlessly to mobile, tablet, and desktop views.
- **Dynamic Animations (jQuery)**:
  - Smooth scrolling for navigation.
  - Interactive skill progress bars that animate when scrolled into view.
  - Interactive education timeline with accordion functionality.
- **Component-Based Architecture**: Built using React with modular, reusable functional components.
- **Form Validation (jQuery)**: Real-time and form-submission validations for the contact form.

## Technologies Used
- ReactJS (Bootstrapped with Vite)
- jQuery (For DOM interactions, animations, and form validation)
- Custom Vanilla CSS3 (No CSS frameworks)
- FontAwesome (Icons)

## Setup & Local Development
Make sure you have Node.js installed.

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment via GitHub Pages
This project is fully ready to be deployed on GitHub Pages. Follow these steps:

1. Push this repository to GitHub.
2. In your `vite.config.js`, configure the `base` attribute if you are deploying to a subdirectory (e.g. `base: '/repository-name/'`). If deploying to a user site (`username.github.io`), you can leave the configuration as is or set `base: '/'`.
3. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
4. Add the following scripts to your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
5. Run the deployment command:
   ```bash
   npm run deploy
   ```
This will automatically build the React project and push the `dist/` folder to the `gh-pages` branch, making your site live!
