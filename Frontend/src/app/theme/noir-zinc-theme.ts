import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const NoirZincTheme = definePreset(Aura, {
  semantic: {
    // PRIMARY = NOIR (Zinc-900 based)
    primary: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b', // MAIN NOIR COLOR
      950: '#09090b',
    },

    // SECONDARY = Zinc mid tones
    secondary: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a', // MAIN SECONDARY
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
      950: '#09090b',
    },

    colorScheme: {
      light: {
        primary: {
          color: '#18181b',
          contrastColor: '#ffffff',
        },

        highlight: {
          background: '#18181b',
          color: '#ffffff',
        },
      },
    },
  },
});
