module.exports = {
  content: ["./src/**/*.{html,liquid}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      magenta: {
        50: "#feedf1",
        100: "#fddbe3",
        200: "#fbb7c7",
        300: "#fa94aa",
        400: "#f8708e",
        500: "#f64c72",
      },
      blue: {
        50: "#eaeaf6",
        100: "#d5d5ec",
        200: "#acacda",
        300: "#8282c7",
        400: "#5959b5",
        500: "#2f2fa2",
      },
      gray: {
        25: "#f5f5f7",
        50: "#ebebef",
        100: "#d7d8df",
        200: "#b0b0bf",
        300: "#8889a0",
        400: "#616180",
        500: "#393a60",
        600: "#2e2e4d",
        700: "#22233a",
        500: "#171726",
        900: "#0b0c13",
      },
      white: "#fff",
    },
    fontFamily: {
      sans: [
        "National Regular",
        "Calibri",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    extend: {
      typography: ({ theme }) => ({
        gray: {
          'css': {
            '--tw-prose-body': theme('colors.blue[500]'),
            '--tw-prose-headings': theme('colors.blue[500]'),
            '--tw-prose-lead': theme('colors.blue[400]'),
            '--tw-prose-links': theme('colors.magenta[500]'),
            '--tw-prose-bold': theme('colors.blue[500]'),
            '--tw-prose-counters': theme('colors.magenta[500]'),
            '--tw-prose-bullets': theme('colors.blue[100]'),
            '--tw-prose-hr': theme('colors.blue[100]'),
            '--tw-prose-quotes': theme('colors.blue[100]'),
            '--tw-prose-quote-borders': theme('colors.blue[50]'),
            '--tw-prose-captions': theme('colors.blue[500]'),
            '--tw-prose-code': theme('colors.blue[500]'),
            '--tw-prose-pre-code': theme('colors.blue[500]'),
            '--tw-prose-pre-bg': theme('colors.blue[25]'),
            '--tw-prose-th-borders': theme('colors.blue[50]'),
            '--tw-prose-td-borders': theme('colors.blue[50]'),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
