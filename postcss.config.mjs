const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    // Flatten @layer blocks so browsers without cascade-layer support
    // (Chrome < 99, Safari < 15.4, older Android WebViews) still get the styles.
    "@csstools/postcss-cascade-layers": {},
  },
};

export default config;
