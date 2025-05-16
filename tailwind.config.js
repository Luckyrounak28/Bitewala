/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FEF3E7',
          100: '#FDEAD0',
          200: '#FBD5A1',
          300: '#F9C072',
          400: '#F7AB43',
          500: '#F59614',
          600: '#E85D04',
          700: '#C14C03',
          800: '#9A3C02',
          900: '#732C02'
        },
        secondary: {
          50: '#FFFAEB',
          100: '#FFF5D6',
          200: '#FFEBAE',
          300: '#FFE185',
          400: '#FFD75C',
          500: '#FFCD33',
          600: '#FFBA08',
          700: '#CC9406',
          800: '#996E05',
          900: '#664903'
        },
        neutral: {
          50: '#F7F7F7',
          100: '#E6E6E6',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A'
        },
        success: {
          50: '#ECFDF5',
          500: '#10B981',
          900: '#064E3B'
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          900: '#78350F'
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          900: '#7F1D1D'
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
};