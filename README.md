# JavaScript Developer Portfolio

A modern, responsive portfolio website built with Astro, React, and Tailwind CSS. This portfolio showcases a developer's skills, projects, and professional journey with interactive elements and 3D visualizations.

![JavaScript Developer Portfolio](public/favicon.svg)

> **Note:** This is a template project. Replace this section with a brief description of your portfolio and add a screenshot or GIF of your site here.

## 🚀 Features

- **Modern Design**: Clean, responsive layout with dark mode support
- **Interactive 3D Elements**: Engaging 3D scene using Three.js and React Three Fiber
- **Developer Story**: Interactive slides showcasing the developer's professional journey
- **Responsive Layout**: Optimized for mobile, tablet, and desktop devices
- **Performance Focused**: Built with Astro for optimal loading speed and performance
- **SEO Ready**: Structured metadata for better search engine visibility
- **Dark Mode Support**: Seamless light/dark theme switching

## 🛠️ Technologies Used

- **[Astro](https://astro.build/)**: Modern static site builder with component islands
- **[React](https://reactjs.org/)**: Library for building interactive UI components
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[Three.js](https://threejs.org/)**: JavaScript 3D library
- **[React Three Fiber](https://github.com/pmndrs/react-three-fiber)**: React renderer for Three.js
- **[Framer Motion](https://www.framer.com/motion/)**: Animation library for React
- **[Swiper](https://swiperjs.com/)**: Modern mobile touch slider

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/naitharll/jsdev-portfolio.git
   cd jsdev-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

## 🚀 Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build:

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
jsdev-portfolio/
├── public/             # Static assets
├── src/
│   ├── components/     # UI components
│   ├── layouts/        # Page layouts
│   └── pages/          # Page components and routes
├── astro.config.mjs    # Astro configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

## 📝 Customization

### Personal Information

Update your personal information in the following files:

- `src/pages/index.astro`: Update the title, description, and keywords
- `src/components/Hero.astro`: Update your name, title, and bio
- `src/components/About.astro`: Update your about information
- `src/components/StorySlides.jsx`: Update your professional journey story
- `src/components/Skills.astro`: Update your skills
- `src/components/Projects.astro`: Update your projects
- `src/components/Contact.astro`: Update your contact information

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`.

### 3D Scene

The 3D scene is implemented in `src/components/Scene3D.jsx`. You can customize it to showcase different 3D models or effects.

## 📱 Responsive Design

The portfolio is designed to be fully responsive:

- **Mobile**: Optimized layout for small screens
- **Tablet**: Enhanced layout for medium-sized screens
- **Desktop**: Full-featured layout for large screens

## 🌙 Dark Mode

The portfolio supports dark mode with Tailwind CSS. It automatically detects the user's system preference and applies the appropriate theme.

## ❓ Troubleshooting

### Common Issues

- **Node.js version conflicts**: Make sure you're using Node.js v16 or higher. You can use [nvm](https://github.com/nvm-sh/nvm) to manage multiple Node.js versions.
- **Build errors with Three.js**: If you encounter issues with Three.js, make sure all dependencies are properly installed and that you're using compatible versions.
- **Styling issues**: If Tailwind styles aren't applying correctly, try running `npm run build` to regenerate the CSS.

### Development Tips

- Use the browser's developer tools to debug layout and styling issues
- Check the console for JavaScript errors
- Use Astro's development server with `--verbose` flag for more detailed logs: `npm run dev -- --verbose`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Three.js](https://threejs.org/) for the 3D library
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) for making Three.js integration with React easier

---

Built with ❤️ by Naithan.