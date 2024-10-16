/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
  	transparent: 'transparent',
  	current: 'currentColor',
  	extend: {
  		colors: {
			event:{
				activity:'#6535BB',
				scaleup:'#006971',
				workshop:'#00639B'
			},
  			ftcpallete: {
  				'10': '#24005B',
  				'20': '#3E0090',
  				'30': '#5723AD',
  				'40': '#6F41C5',
  				'50': '#895CE1',
  				'60': '#A477FD',
  				'70': '#BC99FF',
  				'80': '#D4BBFF',
  				'90': '#EBDCFF',
  				'95': '#F7EDFF'
  			},
  			ftc: {
  				socailbg: '#517fdb80',
  				socailborder: '#ffffff33',
  				primary: '#6535BB',
  				secondary: '#00639B',
  				tertiary: '#006971',
  				onSurface: '#191C1D',
  				surface: '#FBFDFD',
  				gray: '#F2F6FA',
  				coal: '#191C1D',
				divider:'#E0E0E0',
  				smoke: '#56606D',
  				green: '#12CA9E',
  				lightgreen: '#DEFFF9',
  				yellow: '#F3B410',
  				lightyellow: '#FFF6DE',
  				red: '#ED1B1B',
  				lightred: '#FFDEDE'
  			},
  			btncolor: {
  				primary: '#6535BB',
  				secondary: '#2A9EEA',
  				surface: '#FBFDFD'
  			},
  			tremor: {
  				brand: {
  					faint: '#eff6ff',
  					muted: '#bfdbfe',
  					subtle: '#60a5fa',
  					DEFAULT: '#3b82f6',
  					emphasis: '#1d4ed8',
  					inverted: '#ffffff'
  				},
  				background: {
  					muted: '#f9fafb',
  					subtle: '#f3f4f6',
  					DEFAULT: '#ffffff',
  					emphasis: '#374151'
  				},
  				border: {
  					DEFAULT: '#e5e7eb'
  				},
  				ring: {
  					DEFAULT: '#e5e7eb'
  				},
  				content: {
  					subtle: '#9ca3af',
  					DEFAULT: '#6b7280',
  					emphasis: '#374151',
  					strong: '#111827',
  					inverted: '#ffffff'
  				}
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
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
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
  		boxShadow: {
  			'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  			'tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  			'tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  			'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  			'dark-tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  			'dark-tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
  		},
  		borderRadius: {
  			'tremor-small': '0.375rem',
  			'tremor-default': '0.5rem',
  			'tremor-full': '9999px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontSize: {
  			'tremor-label': ["0.75rem"],
  			'tremor-default': ["0.875rem", { lineHeight: "1.25rem" }],
  			'tremor-title': ["1.125rem", { lineHeight: "1.75rem" }],
  			'tremor-metric': ["1.875rem", { lineHeight: "2.25rem" }]
  		},
  		fontFamily: {
  			Cairo: ['Cairo', 'sans-serif']
  		}
  	}
  },

  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],

  plugins: [
    require("@headlessui/tailwindcss"),
    require('tailwindcss-animated'),
    require('flowbite/plugin'),
      require("tailwindcss-animate")
],
};