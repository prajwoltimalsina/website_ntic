// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ['class'],
//   content: [
//     './pages/**/*.{js,jsx}',
//     './components/**/*.{js,jsx}',
//     './app/**/*.{js,jsx}',
//     './src/**/*.{js,jsx}',
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: '2rem',
//       screens: {
//         '2xl': '1400px',
//       },
//     },
//     extend: {
//       colors: {
//         border: '#d1d5db',       // fallback gray
//         input: '#f3f4f6',
//         ring: '#93c5fd',
//         background: '#ffffff',
//         foreground: '#111827',

//         /* PRIMARY & SECONDARY FIXED COLORS */
//         primary: {
//           DEFAULT: '#8c3437',             // your primary color
//           foreground: '#ffffff',          // text on primary (white for contrast)
//         },
//         secondary: {
//           DEFAULT: '#193250',             // your secondary color
//           foreground: '#ffffff',          // text on secondary
//         },

//         destructive: {
//           DEFAULT: '#dc2626',
//           foreground: '#ffffff',
//         },
//         muted: {
//           DEFAULT: '#f3f4f6',
//           foreground: '#6b7280',
//         },
//         accent: {
//           DEFAULT: '#8b5cf6',
//           foreground: '#ffffff',
//         },
//         popover: {
//           DEFAULT: '#ffffff',
//           foreground: '#111827',
//         },
//         card: {
//           DEFAULT: '#ffffff',
//           foreground: '#111827',
//         },
//       },
//       borderRadius: {
//         lg: 'var(--radius)',
//         md: 'calc(var(--radius) - 2px)',
//         sm: 'calc(var(--radius) - 4px)',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: 0 },
//           '100%': { opacity: 1 },
//         },
//         'accordion-down': {
//           from: { height: 0 },
//           to: { height: 'var(--radix-accordion-content-height)' },
//         },
//         'accordion-up': {
//           from: { height: 'var(--radix-accordion-content-height)' },
//           to: { height: 0 },
//         },
//       },
//       animation: {
//         'fade-in': 'fadeIn 1s ease-in-out',
//         'accordion-down': 'accordion-down 0.2s ease-out',
//         'accordion-up': 'accordion-up 0.2s ease-out',
//       },
//     },
//   },
//   plugins: [require('tailwindcss-animate')],
// };




/** @type {import('tailwindcss').Config} */ module.exports = { darkMode: ['class'], content: [ './pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './app/**/*.{js,jsx}', './src/**/*.{js,jsx}', ], theme: { container: { center: true, padding: '2rem', screens: { '2xl': '1400px', }, }, extend: { colors: { border: 'hsl(var(--border))', input: 'hsl(var(--input))', ring: 'hsl(var(--ring))', background: 'hsl(var(--background))', foreground: 'hsl(var(--foreground))', primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))', }, secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))', }, destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))', }, muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))', }, accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))', }, popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))', }, card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))', }, }, borderRadius: { lg: 'var(--radius)', md: 'calc(var(--radius) - 2px)', sm: 'calc(var(--radius) - 4px)', }, keyframes: { fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 }, }, 'accordion-down': { from: { height: 0 }, to: { height: 'var(--radix-accordion-content-height)' }, }, 'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: 0 }, }, }, animation: { 'fade-in': 'fadeIn 1s ease-in-out', 'accordion-down': 'accordion-down 0.2s ease-out', 'accordion-up': 'accordion-up 0.2s ease-out', }, }, }, plugins: [require('tailwindcss-animate')], };