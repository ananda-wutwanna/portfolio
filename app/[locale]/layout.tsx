import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fontVariables } from '@/lib/fonts';
import { getDictionary, isLocale, locales, withBase, type Locale } from '@/lib/i18n';
import { siteUrl } from '@/data/site';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : 'th';
  const t = getDictionary(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: t.meta.title,
    description: t.meta.description,
    icons: {
      icon: withBase('/favicon.png'),
      apple: withBase('/apple-icon.png'),
    },
    alternates: {
      languages: {
        th: withBase('/th/'),
        en: withBase('/en/'),
      },
    },
    openGraph: {
      type: 'website',
      title: t.meta.title,
      description: t.meta.description,
      locale: locale === 'th' ? 'th_TH' : 'en_US',
      images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.title,
      description: t.meta.description,
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = getDictionary(locale);

  return (
    <html lang={locale} className={fontVariables}>
      <head>
        {/* Set the theme before paint to avoid a flash of the wrong colors. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();",
          }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          {locale === 'th' ? 'ข้ามไปเนื้อหาหลัก' : 'Skip to content'}
        </a>
        <Navbar locale={locale} t={t} />
        <main id="main">{children}</main>
        <Footer locale={locale} t={t} />
      </body>
    </html>
  );
}
