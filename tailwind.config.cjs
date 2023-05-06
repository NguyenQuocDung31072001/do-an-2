/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/assets/hero-unit.jpg')",
        'about-hero': "url('../src/assets/about//hero-unit.jpg')",
        'product-hero': "url('../src/assets/product/hero-unit.jpg')",
        'handbook-hero': "url('../src/assets/handbook/hero-unit.jpg')",
        'intro1': "url('../src/assets/intro-1.jpg')",
        'intro2': "url('../src/assets/intro-2.jpg')",
        'pattern': "url('../src/assets/pattern.png')",
      },
  }  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}