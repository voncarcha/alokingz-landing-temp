import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#e6f0ff',
  				'100': '#b3d1ff',
  				'200': '#80b2ff',
  				'300': '#4d93ff',
  				'400': '#1a74ff',
  				'500': '#0140CB',
  				'600': '#0133a2',
  				'700': '#012679',
  				'800': '#011950',
  				'900': '#000c27',
  				'950': '#000614',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			gold: {
  				'50': '#fffbeb',
  				'100': '#fef3c7',
  				'200': '#fde68a',
  				'300': '#fcd34d',
  				'400': '#fbbf24',
  				'500': '#f59e0b',
  				'600': '#d97706',
  				'700': '#b45309',
  				'800': '#92400e',
  				'900': '#78350f'
  			},
  			royal: {
  				'50': '#e6f0ff',
  				'100': '#b3d1ff',
  				'200': '#80b2ff',
  				'300': '#4d93ff',
  				'400': '#1a74ff',
  				'500': '#0140CB',
  				'600': '#0133a2',
  				'700': '#012679',
  				'800': '#011950',
  				'900': '#000c27',
  				'950': '#000614'
  			},
  			crimson: {
  				'50': '#ffe6e6',
  				'100': '#ffb3b3',
  				'200': '#ff8080',
  				'300': '#ff4d4d',
  				'400': '#e61a1a',
  				'500': '#B51018',
  				'600': '#910d13',
  				'700': '#6d0a0e',
  				'800': '#490709',
  				'900': '#250304',
  				'950': '#120102'
  			},
  			dark: {
  				'500': '#262630',
  				'600': '#1f1f28',
  				'700': '#18181f',
  				'800': '#111118',
  				'900': '#0a0a0f'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			display: [
  				'var(--font-display)',
  				'system-ui',
  				'sans-serif'
  			],
  			body: [
  				'var(--font-body)',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  			'hero-gradient': 'linear-gradient(135deg, rgba(10,10,15,0.95) 0%, rgba(17,17,24,0.9) 50%, rgba(10,10,15,0.95) 100%)',
  			'gold-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(1,64,203,0.3) 50%, transparent 100%)',
  			'blue-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(1,64,203,0.3) 50%, transparent 100%)'
  		},
  		animation: {
  			'float': 'float 6s ease-in-out infinite',
  			'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
  			'shimmer': 'shimmer 2s linear infinite',
  			'slide-up': 'slide-up 0.5s ease-out',
  			'fade-in': 'fade-in 0.5s ease-out'
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-20px)'
  				}
  			},
  			'pulse-glow': {
  				'0%, 100%': {
  					boxShadow: '0 0 20px rgba(1, 64, 203, 0.3)'
  				},
  				'50%': {
  					boxShadow: '0 0 40px rgba(1, 64, 203, 0.6)'
  				}
  			},
  			shimmer: {
  				'0%': {
  					backgroundPosition: '-200% 0'
  				},
  				'100%': {
  					backgroundPosition: '200% 0'
  				}
  			},
  			'slide-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

