import { withBase } from '@/lib/i18n';

// Landing entry: send visitors to their remembered locale, defaulting to Thai.
// Rendered as a standalone document because the pass-through root layout does
// not emit <html>/<body>.
export default function RootRedirect() {
  const th = withBase('/th/');
  const en = withBase('/en/');
  const redirect = `(function(){try{var l=localStorage.getItem('locale');location.replace(l==='en'?${JSON.stringify(
    en,
  )}:${JSON.stringify(th)});}catch(e){location.replace(${JSON.stringify(
    th,
  )});}})();`;

  return (
    <html lang="th">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="refresh" content={`0; url=${th}`} />
        <title>Ananda Wutwanna</title>
        <script dangerouslySetInnerHTML={{ __html: redirect }} />
      </head>
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
        <p>
          Redirecting… <a href={th}>ภาษาไทย</a> · <a href={en}>English</a>
        </p>
      </body>
    </html>
  );
}
