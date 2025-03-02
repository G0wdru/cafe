import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
				lg: '2rem'
			},
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				café: {
					50: "#FBF8F3",
					100: "#F5EFE6",
					200: "#EAE0D0",
					300: "#DCCDB3",
					400: "#C1AB8A",
					500: "#A68A61",
					600: "#8C7045",
					700: "#6F582F",
					800: "#574624",
					900: "#3D301A",
					950: "#261E10"
				},
				spice: {
					50: "#FEF7ED",
					100: "#FCEDD8",
					200: "#F9DDB0",
					300: "#F5C77C",
					400: "#F1AA48",
					500: "#ED8A1D",
					600: "#CA6B11",
					700: "#A54F11",
					800: "#863F15",
					900: "#703516",
					950: "#421A08"
				},
				dark: {
					DEFAULT: "#121212",
					100: "#1E1E1E",
					200: "#2D2D2D",
					300: "#3D3D3D",
					800: "#1A1A1A",
					900: "#0F0F0F"
				},
				gold: {
					DEFAULT: "#D4B572",
					light: "#E6CFA3",
					dark: "#B39355"
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"fade-out": {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(10px)" }
				},
				"slide-in": {
					"0%": { transform: "translateX(-10px)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" }
				},
				"scale-in": {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" }
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" }
				},
				"wave": {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" }
				},
				"spin-slow": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" }
				},
				"bounce-subtle": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-5px)" }
				},
				"shimmer": {
					"0%": { backgroundPosition: "200% 0" },
					"100%": { backgroundPosition: "-200% 0" }
				},
				"mobile-nav-in": {
					"0%": { transform: "translateY(-100%)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"mobile-nav-out": {
					"0%": { transform: "translateY(0)", opacity: "1" },
					"100%": { transform: "translateY(-100%)", opacity: "0" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.6s ease-out",
				"slide-in": "slide-in 0.4s ease-out",
				"scale-in": "scale-in 0.3s ease-out",
				"float": "float 5s ease-in-out infinite",
				"wave": "wave 15s ease infinite",
				"spin-slow": "spin-slow 20s linear infinite",
				"bounce-subtle": "bounce-subtle 3s ease-in-out infinite",
				"shimmer": "shimmer 3s ease-in-out infinite",
				"mobile-nav-in": "mobile-nav-in 0.3s ease-out",
				"mobile-nav-out": "mobile-nav-out 0.3s ease-in"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
