/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			rotate:{
				'12': '13deg',
			},
			boxShadow:{
				'card': '0 6px 16px 0px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);'
			},
			backgroundImage: {
				gradient:
					"linear-gradient(135deg, rgba(1, 149, 218, 0.67) 0%, #0195DA 16.29%, #1B4BA8 99.89%)",
				"ufalBackground":
					"url('/src/assets/ufal-sigla-branca-fundo-transparente-40por-cento.png')",
			},
		},
	},
	plugins: [],
};
