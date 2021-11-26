const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: 'jit',
    purge: [
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            serif: ["Poppins", ...defaultTheme.fontFamily.serif],
            mono: ["Poppins", ...defaultTheme.fontFamily.mono],
        },
        extend: {
            colors: {
                turqoise: {
                    app: "#2CC4A3",
                    light: "#8be5d1"
                },
                background: {
                    app: "#ededed",
                },
            },
            borderWidth: {
                DEFAULT: '1px',
                '3': '3px',
            },
            backgroundImage: {
                // 'ahri': "url(src/assets/RiotX_ChampionList_ahri)",
                // 'akali': "url(src/assets/RiotX_ChampionList_akali.jpg)",
            },
            background: {
                DEFAULT: "#ededed",
            }
        },
    },
    variants: {
        extend: {
            opacity: ["disabled"],
        },
    },
    plugins: [require("@danielfgray/tw-heropatterns")],
};
