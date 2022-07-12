import { createStitches } from '@stitches/react';

import type * as Stitches from '@stitches/react';
export type { VariantProps } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  media: {
    bp1: '(min-width: 320px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1200px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  theme: {
    colors: {
      /* ----------------------------- seed / Global ----------------------------- */
      seed: '120 100% 26%',
      Bg: '87 36% 95%',
      seedHue: '95',
      seedSaturation: '58%',
      seedLightness: '26%',
      seedBg: 'hsla(60, 67%, 98%, 1)',
      seedBgUtil: '60 67% 98%',
      seedUtil20: '95 100% 11%',
      seed10: 'hsla(101, 100%, 6%, 1)',
      seed20: 'hsla(95, 100%, 11%, 1)',
      seed30: 'hsla(93, 95%, 16%, 1)',
      seed40: 'hsl(120 100% 26%)',
      seed50: 'hsla(95, 44%, 36%, 1)',
      seed80: 'hsla(205, 100%, 76%, 1)',
      seed90: 'hsl(94, 79%, 76%)',
      seed99: 'hsl(81 100% 96%)',
      seedNeutral10: 'hsl(90, 8%, 10%)',
      seedNeutra20: 'hsl(84, 5%, 18%)',

      /* ----------------------------- seed / Surface ---------------------------- */
      surface0: ('linear-gradient(hsla($seed / 0.0), hsl($seed / 0.00)),linear-gradient(hsla($seedBgUtil / 1), hsla($seedBgUtil / 1))'),
      surface1: ('linear-gradient(hsla($seed / 0.05), hsl($seed / 0.05)),linear-gradient(hsla($seedBgUtil / 1), hsla($seedBgUtil / 1))'),
      surface2: ('linear-gradient(hsla($seed / 0.08), hsl($seed / 0.08)),linear-gradient(hsla($seedBgUtil / 1), hsla($seedBgUtil / 1))'),
      surface3: ('linear-gradient(hsla($seed / 0.11), hsl($seed / 0.11)),linear-gradient(hsla($seedBgUtil / 1), hsla($seedBgUtil / 1))'),
      surface4: ('linear-gradient(hsla($seed / 0.12), hsl($seed / 0.12)),linear-gradient(hsla($seedBgUtil / 1), hsla($seedBgUtil / 1))'),
      surface5: ('linear-gradient(hsla($seed / 0.14), hsl($seed / 0.14)),linear-gradient(hsla($seedBgUtil / 1), hsla($seedBgUtil / 1))'),
      /* ------------------------------ seed / Text ------------------------------ */
      txtPrimary: '$seedNeutral10',
      txtSecondary: '$seedNeutra20',
      txtOnSurface: '$seed10',
      txtColored: '$seed40',
    },
    shadows: {
      sm: '0px 1px 3px 0px hsla($colors$seedUtil20 / 0.1), 0px 4px 8px hsla($colors$seedUtil20 / 0.1)',
      lg: '0px 4px 8px 3px hsla($colors$seedUtil20 / 0.15),  0px 4px 4px hsla($colors$seedUtil20 / 0.15)',
    },
    space: {
      /* -------------------------------------------------------------------------- */
      /*                                 Space Scale                                */
      /* -------------------------------------------------------------------------- */
      sm_2: '2px',
      sm_4: '4px',
      sm_8: '8px',
      sm_12: '12px',
      md_16: '16px',
      md_20: '20px',
      md_24: '24px',
      lg_32: '32px',
      lg_60: '60px',
    },
    fontSizes: {
      /* ------------------------ Type Scale/Interpolation ------------------------ */
      sm_is10: '10px',
      sm_is12: '12px',
      sm_is14: '14px',
      md_is16: '16px', //Base = 16px
      md_is18: '18px',
      md_is20: '20px',
      lg_is24: '24px',
    },
    radii: {
      sm: '4px',
      md: '8px',
      lg: '16px',
      round: '50%',
      pill: '100vw',
    },

    borderStyles: {
      def: '1px solid #D8DBDF',
    }
  },
  /* -------------------------------------------------------------------------- */
  /*                            Propreties Shorthand                            */
  /* -------------------------------------------------------------------------- */
  utils: {
    w: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
    }),
    h: (value: Stitches.PropertyValue<'height'>) => ({
      height: value,
    }),
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({ flexDirection: value }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),
    // Alignement
    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({ alignItems: value }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({ alignContent: value }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({ justifyContent: value }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({ flexShrink: value }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bd: (value: Stitches.PropertyValue<'border'>) => ({
      border: value,
    }),
    bdb: (value: Stitches.PropertyValue<'borderBottom'>) => ({
      borderBottom: value,
    }),
    bdr: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    bdrtr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bdrbr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bdrbl: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    brtl: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),

    sh: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({ lineHeight: value }),

    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({ backgroundColor: value }),

    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({ pointerEvents: value }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  }
})


export const blueTheme = createTheme('blue-theme', {
  colors: {
    /* ----------------------------- seed / Global ----------------------------- */
    seed: '198 100% 28%',
    Bg: '210 50% 95%',
    seedHue: '198',
    seedSaturation: '100%',
    seedLightness: '28%',
    seedBgUtil: '240 100% 99%',
    seedUtil20: '199 100% 15%',
    seed10: 'hsla(201, 100%, 9%, 1)',
    seed20: 'hsla(199, 100%, 15%, 1)',
    seed30: 'hsla(198, 100%, 21%, 1)',
    seed40: 'hsla(198, 100%, 28%, 1)',
    seed50: 'hsla(205, 100%, 76%, 1)',
    seed90: 'hsla(207, 100%, 89%, 1)',
    seed99: 'hsla(225, 100%, 99%, 1)',
    seedNeutral10: 'hsla(204, 58%, 10%, 1)',
    /* ----------------------------- seed / Surface ---------------------------- */
    surface0: ('linear-gradient(hsla($seed / 0.0), hsl($seed / 0.00)),linear-gradient(hsla($seedBgUtil / 1), hsla($seedBgUtil / 1))'),
    surface1: ('linear-gradient(hsla($seed / 0.05), hsl($seed / 0.05)),linear-gradient(hsla($seedBgUtil / 1), hsla($seedBgUtil / 1))'),
    surface2: ('linear-gradient(hsla($seed / 0.08), hsl($seed / 0.08)),linear-gradient(hsla($seedBgUtil / 1), hsla($seedBgUtil / 1))'),
    surface3: ('linear-gradient(hsla($seed / 0.11), hsl($seed / 0.11)),linear-gradient(hsla($seedBgUtil / 1), hsla($seedBgUtil / 1))'),
    surface4: ('linear-gradient(hsla($seed / 0.12), hsl($seed / 0.12)),linear-gradient(hsla($seedBgUtil / 1), hsla($seedBgUtil / 1))'),
    surface5: ('linear-gradient(hsla($seed / 0.14), hsl($seed / 0.14)),linear-gradient(hsla($seedBgUtil / 1), hsla($seedBgUtil / 1))'),
    /* ------------------------------ seed / Text ------------------------------ */
    txtPrimary: '$seedNeutral10',
    txtOnSurface: '$seed10',
    txtColored: '$seed40',
  },
  shadows: {
    sm: '0px 1px 3px 0px hsla($colors$seedUtil20 / 0.1), 0px 4px 8px hsla($colors$seedUtil20 / 0.1)',
    lg: '0px 4px 8px 3px hsla($colors$seedUtil20 / 0.15),  0px 4px 4px hsla($colors$seedUtil20 / 0.15)',
  },
})

export type CSS = Stitches.CSS<typeof config>;

const injectGlobalStyles = globalCss({
  /*   '@font-face': [
      {
        fontFamily: 'monument',
        src: 'local(""), url("fonts/codec-pro-regular.woff2")',
      },
      {
        fontFamily: 'codec-bold',
        src: 'local(""), url("/fonts/codec-pro-bold.woff2")',
      }
    ], */
  "*": {
    fontFamily: "inherit",
    fontWeight: '400',
    margin: '0',
    boxSizing: "border-box",
    accentColor: '$seed40',
    //debug
    /* border: '1px solid #f65350' */
  },
  "*:after": { boxSizing: "border-box" },
  "*:before": { boxSizing: "border-box" },
  'button': { border: 'none', opacity: '1', transition: 'opacity 0.3s ease-out' },
  'button>span': { cursor: 'pointer' },
  /*   'button:hover': { opacity: '0.9', boxShadow: '$md', transition: 'opacity 0.2s ease-in' },
    'button:active': { opacity: '0.7', boxShadow: '$sm', transition: 'opacity 0.1s linear' }, */

})

injectGlobalStyles()


