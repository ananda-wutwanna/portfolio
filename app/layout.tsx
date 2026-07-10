import type { Metadata } from 'next';
import './globals.css';

// The <html> and <body> tags live in app/[locale]/layout.tsx so the `lang`
// attribute can follow the active locale. This root layout is a pass-through.
export const metadata: Metadata = {
  metadataBase: new URL('https://your-github.github.io'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
