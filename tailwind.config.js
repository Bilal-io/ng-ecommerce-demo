const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {
        backgroundColor: ['active, disabled'],
        opacity: ['disabled'],
        cursor: ['disabled'],
      },
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
