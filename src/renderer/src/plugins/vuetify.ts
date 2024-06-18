// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#39E162',
          'on-primary': '#000',
          secondary: '#8592A3',
          'on-secondary': '#fff',
          success: '#198038',
          'on-success': '#fff',
          info: '#0043ce',
          'on-info': '#fff',
          warning: '#f1c21b',
          'on-warning': '#fff',
          error: '#da1e28',
          background: '#F5F5F5',
          'on-background': '#32475C',
          'nav-background': '#EAFCEE',
          // 'nav-background': 'rgb(190, 196, 207)',
          surface: '#fff',
          'on-surface': '#32475C',
          'skin-bordered-background': '#000',
          'skin-bordered-surface': '#000'
        },

        variables: {
          'code-color': '#d400ff',
          'overlay-scrim-background': '#32475C',
          'overlay-scrim-opacity': 0.5,
          'border-color': '#32475C',
          'snackbar-background': '#32475C',
          'snackbar-color': '#ffffff',
          'tooltip-background': '#262732',
          'tooltip-opacity': 0.9,
          'table-header-background': '#F5F5F7',

          // Shadows
          'shadow-key-umbra-opacity': 'rgba(var(--v-theme-on-surface), 0.06)',
          'shadow-key-penumbra-opacity': 'rgba(var(--v-theme-on-surface), 0.04)',
          'shadow-key-ambient-opacity': 'rgba(var(--v-theme-on-surface), 0.02)'
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: '#b3f604',
          'on-primary': 'rgb(31, 51, 0)',
          'text-primary': '#f4f4f4',
          'text-secondary': 'rgb(1, 207, 194)',
          secondary: '#3a3f50',
          'on-secondary': '#fff',
          success: '#42be65',
          'on-success': '#fff',
          info: '#4589ff',
          'on-info': '#fff',
          warning: '#f1c21b',
          'on-warning': '#fff',
          error: '#FF5252',
          background: '#101423',
          'on-background': '#9da3ae',
          'nav-background': '#000',
          'on-nav-background': '#9da3ae',
          surface: '#232734',
          'on-surface': '#DBDBEB',
          'skin-bordered-background': '#2b2c40',
          'skin-bordered-surface': '#2b2c40'
        },
        variables: {
          'code-color': '#d400ff',
          'overlay-scrim-background': '#0D0E24',
          'overlay-scrim-opacity': 0.6,
          'border-color': '#DBDBEB',
          'snackbar-background': '#DBDBEB',
          'snackbar-color': '#2B2C40',
          'tooltip-background': '#464A65',
          'tooltip-opacity': 0.9,
          'table-header-background': '#3A3E5B',

          // Shadows
          'shadow-key-umbra-opacity': 'rgba(20, 21, 33, 0.06)',
          'shadow-key-penumbra-opacity': 'rgba(20, 21, 33, 0.04)',
          'shadow-key-ambient-opacity': 'rgba(20, 21, 33, 0.02)'
        }
      }
    }
  }
})
