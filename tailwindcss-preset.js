
const spacing = {
  'spacing-xxs': '0px',
  'spacing-xs': '2px',
};

const aspectRatio = {
  //Landscape
  '5:3': 5 / 3,
  '16:9': 16 / 9,
  '2:1': 2 / 1,
  '21:9': 21 / 9,

  //Portrait
  '7:5': 7 / 5,
  '4:3': 4 / 3,
  '5:4': 5 / 4,
  default: 1,
};

export default  {
  theme: {
    important: '#root',
    darkMode: 'class',
    content: ['./apps/**/*.{html,js,ts,tsx}', './libs/**/*.{html,js,ts,tsx}'],
    corePlugins: {
      preflight: false,
    },
    extend: {
      zIndex: {
        '1k': '1000',
        '10k': '10000',
      },
      height: {
        0.25: '0.0625rem',
        '4.5/6': '75%',
        12.5: '3.25rem',
        8.5: '33px',
        419: '419px',
        90: '360px',
      },
      lineHeight: {
        7.5: '30px',
      },
      colors: {
        primary: {
          DEFAULT: 'var(--mui-palette-primary-main)',
          light: 'var(--mui-palette-primary-light)',
          dark: 'var(--mui-palette-primary-dark)',
          contrastText: 'var(--mui-palette-primary-contrastText)',
        },

        secondary: {
          DEFAULT: 'var(--mui-palette-secondary-main)',
          light: 'var(--mui-palette-secondary-light)',
          dark: 'var(--mui-palette-secondary-dark)',
          contrastText: 'var(--mui-palette-secondary-contrastText)',
        },

        error: {
          DEFAULT: 'var(--mui-palette-error-main)',
          light: 'var(--mui-palette-error-light)',
          dark: 'var(--mui-palette-error-dark)',
          contrastText: 'var(--mui-palette-error-contrastText)',
        },

        warning: {
          DEFAULT: 'var(--mui-palette-warning-main)',
          light: 'var(--mui-palette-warning-light)',
          dark: 'var(--mui-palette-warning-dark)',
          contrastText: 'var(--mui-palette-warning-contrastText)',
        },

        info: {
          DEFAULT: 'var(--mui-palette-info-main)',
          light: 'var(--mui-palette-info-light)',
          dark: 'var(--mui-palette-info-dark)',
          contrastText: 'var(--mui-palette-info-contrastText)',
        },

        success: {
          DEFAULT: 'var(--mui-palette-success-main)',
          light: 'var(--mui-palette-success-light)',
          dark: 'var(--mui-palette-success-dark)',
          contrastText: 'var(--mui-palette-success-contrastText)',
        },

        action: {
          active: 'var(--mui-palette-action-active)',
          hover: 'var(--mui-palette-action-hover)',
          selected: 'var(--mui-palette-action-selected)',
          disabled: 'var(--mui-palette-action-disabled)',
          disabledBackground: 'var(--mui-palette-action-disabledBackground)',
          focus: 'var(--mui-palette-action-focus)',
        },

        disabled: {
          DEFAULT: 'var(--mui-palette-text-disabled)',
        },
        gradient: {
          primaryStart: '#0082BF',
          primaryEnd: '#385390',
          secondaryStart: '#FFFFFF',
          secondaryEnd: '#F3F4F6',
        },
        statusChip: {
          ongoing: {
            bg: '#DBE1F9',
            text: '#483EC1',
          },
          upcoming: {
            bg: '#DCF6FF',
            text: '#01688B',
          },
          completed: {
            bg: '#E6FFEE',
            darkbg: '#E4FFEC',
            text: '#007044',
            darktext: '#00411D',
          },
          inreview: {
            bg: '#FFF8E8',
            text: '#E1A325',
          },
          next: {
            bg: '#FEEED6',
            text: '#CC3D00',
            darkbg: '#FFEECA',
            darktext: '#883F18',
          },
          'missing-data': {
            bg: '#FFEEEE',
            text: '#9C1010',
          },
        },
        snackbargreen: {
          default: '#59842e',
        },

        customLightBlue: {
          default: '#0D99FF',
        },
        slategray: {
          medium: '#8C8C8C',
        },
        lightgray: '#F0F2F5',
        encounterCard: {
          bg: '#F3F7FF',
          border: '#0058B6',
        },
        productlog: {
          table: {
            bold: '#012856',
            normal: '#484A48',
          },
          action: {
            bg: '#F5FAFF',
            delete: '#A70000',
            edit: '#032A59',
          },
          white: {
            default: '#fff',
            tableHeaderBg: '#FAFAFA',
          },
          black: {
            darkCharcol: '#333',
            lightBlack: '#484A48',
          },
          blue: {
            blueSapphire: '#032A59',
          },
          darkBlue: '#000000d9',
        },

        // custom colors
        layoutContainer: '#fff',
      
        'borders-primary': 'var(--mui-palette-borders-primary)',
        'borders-secondary': 'var(--mui-palette-borders-secondary)',
        'paper-shadow': '0px 2px 10px 0px rgba(0, 0, 0, 0.1)',
       
      },
      backgroundImage: {
        'primary-gradient':
          'linear-gradient(90deg, #0082BF -41.59%, #385390 149.73%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'info-gradient': 'linear-gradient(268deg, #FFF -80%, #FFF6ED 20.96%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cold-gradient': 'linear-gradient(268deg, #FFF -80%, #C2DBFF 160.96%)',
        'scanning-gradient':
          'linear-gradient(268deg, #FFF -80%, #C2DBFF 160.96%)',
        'error-gradient':
          'linear-gradient(271deg, #FFF -52.23%, #FFEFCC 122.58%)',
        'success-gradient':
          'linear-gradient(270deg, #FFF -29.02%, #C4F7D2 182.49%)',
        'rfid-success-gradient':
          'linear-gradient(270deg, #FFF -29.02%, #C4F7D2 182.49%)',
        'invalid-code-gradient':
          'linear-gradient(270deg, #FFF6F6 -29.02%, #FFF6F6 182.49%)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'sf-pro': ['SF Pro', 'sans-serif'],
      },
      fontSize: {
        h1: ['32px', '37.5px'],
        h2: ['22px', '26.4px'],
        h3: ['20px', '24.2px'],
        h4: ['18px', '22px'],
        h5: ['17px', '21.78px'],
        h6: ['16px', '18px'],
        subtitle1: ['15.4px', '19.3px'],
        button: ['28px', '33.6px'],
        'xs+2': ['14px'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      boxShadow: {
        'Drop-Shadow-Elevation-1-x':
          '0px 1px 2px 0px rgba(0, 0, 0, 0.10)' /*  design system */,
        'Drop-Shadow-Elevation-2-x':
          '0px 2px 4px 0px rgba(0, 0, 0, 0.12)' /*  design system */,
        'Drop-Shadow-Elevation-3-x':
          '0px 4px 8px 0px rgba(0, 0, 0, 0.14)' /*  design system */,
        'Drop-Shadow-Elevation-4-x':
          '0px 8px 16px 0px rgba(0, 0, 0, 0.16)' /*  design system */,
        'Drop-Shadow-Elevation-5-x':
          '0px 16px 32px 0px rgba(0, 0, 0, 0.24)' /*  design system */,
        customDark: '0px 2px 16px 0px rgba(0, 0, 0, 0.08)',
        imageShadow:
          '0px 0px 10.465px 0px rgba(0, 0, 0, 0.03), 0px 1.395px 20.93px 0px rgba(0, 0, 0, 0.08), 0px 0px 0.698px 0px rgba(0, 0, 0, 0.30)',
        detailCardShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.04)',
        inverse: '0 -4px 6px rgba(0, 0, 0, 0.1)',
        card: '2px 4px 14px 0px rgba(0, 0, 0, 0.15)',
      },
      backgroundColor: {
        'disable-bg': '#BFBFBF',
        'disable-text': '#FFF',
      },
      width: {
        'fill-available': '-webkit-fill-available',
      },
      gridTemplateColumns: {
        'dynamic-1': 'auto 1fr',
        'dynamic-2': 'auto 1fr 1fr',
        'dynamic-3': 'auto 1fr 1fr 1fr',
        'dynamic-4': 'auto 1fr 1fr 1fr 1fr',
        'dynamic-5': 'auto 1fr 1fr 1fr 1fr auto',
      },
      borderRadius: {
        'radius-xs': '4px',
        'radius-s': '8px',
        'radius-m': '12px',
        'radius-l': '16px',
        'radius-xl': '24px',
        'radius-xxl': '32px',
        'radius-rounded': '9999px',
      },
      margin: spacing,
      padding: spacing,
      aspectRatio: aspectRatio,
    },
  },
  variants: {
    extend: {
      // Extend variants if needed
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.q-footer': {
          display: 'flex',
          justifyContent: 'space-between',
          position: 'fixed',
          bottom: '0',
          padding: '1.25rem', // Equivalent to `p-5`
          borderTop: '1px solid var(--tw-border-lighter-gray)',
          backgroundColor: 'white',
          gap: '1rem', // Equivalent to `gap-4`
          width: '-webkit-fill-available', // For `w-fill-available`
        },
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.flex-col-center': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.button-link-style': {
          fontSize: '1rem', // text-base
          fontWeight: 500, // font-medium
          borderRadius: 0, // rounded-none
          textTransform: 'capitalize', // capitalize
          textDecoration: 'underline', // underline
          textUnderlineOffset: '0.25rem', // underline-offset-4
          '&:hover': {
            backgroundColor: 'transparent', // hover:bg-transparent
            textDecoration: 'underline', // hover:underline
          },
        },
        '.labelTypographyClasses': {
          color: '#6b7280', // text-gray-500
          fontFamily: 'sans-serif', // font-sans
          fontWeight: 400, // font-normal
          fontSize: '0.875rem', // text-sm
        },
        '.valueTypographyClasses': {
          color: '#1f2937', // text-gray-800
          fontFamily: 'sans-serif', // font-sans
          fontWeight: 600, // font-semibold
          fontSize: '0.875rem', // text-sm
        },
        '.skip-documentation-btn': {
          fontSize: '1.125rem', // text-lg
          fontWeight: '600', // font-semibold
          padding: '0.5rem 3rem', // px-12 py-2
          width: '100%', // w-full
          maxWidth: '18rem', // md:w-72
          whiteSpace: 'nowrap', // whitespace-nowrap
          marginTop: '1rem', // mt-4
          '@media (min-width: 768px)': {
            marginTop: '0', // md:mt-0
          },
          borderWidth: '2px', // border-2
        },
      });
    },
  ],
};
