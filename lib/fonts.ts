import {
  Inter,
  Space_Grotesk,
  JetBrains_Mono,
  IBM_Plex_Sans_Thai,
} from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const ibmPlexThai = IBM_Plex_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-thai',
  display: 'swap',
});

export const fontVariables = [
  inter.variable,
  spaceGrotesk.variable,
  jetbrainsMono.variable,
  ibmPlexThai.variable,
].join(' ');
