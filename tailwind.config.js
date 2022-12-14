const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./root/index.html', './src/**/*.{html,ts,tsx}'],
  theme: {
    fontFamily: {
      serif: ['fontFamilyName', ...defaultTheme.fontFamily.serif],
      sans: ['fontFamilyName', ...defaultTheme.fontFamily.sans],
      mono: ['"f0nt f4m11y n@m3"', ...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  variants: {
    display: [],
  },
  plugins: [require('@tailwindcss/forms')],
};
