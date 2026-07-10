import { getDictionary, isLocale, type Locale } from '@/lib/i18n';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'th';
  const t = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} t={t} />
      <About t={t} />
      <Skills locale={locale} t={t} />
      <Projects locale={locale} t={t} />
      <Experience locale={locale} t={t} />
      <Contact locale={locale} t={t} />
    </>
  );
}
