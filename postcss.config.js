/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {}, // 중첩 규칙. node_modules/nesting
    tailwindcss: {},
    autoprefixer: {},
  },
};
