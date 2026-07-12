// Central site config.
export const siteUrl = 'https://ananda-wutwanna.github.io/portfolio';

export const site = {
  name: {
    en: 'Ananda Wutwanna',
    th: 'อนันดา วุฒวรรณะ',
  },
  email: 'anandawwutwanna@gmail.com',
  phone: '082-592-4747',
  phoneHref: '+66825924747',
  // Resume files live in public/resume/. Bump resumeVersion whenever the
  // PDFs are replaced so browsers fetch the new files instead of a cached copy.
  resumeVersion: '2026-07-12.6',
  resume: {
    en: '/resume/Ananda_Wutwanna_Resume.pdf',
    th: '/resume/Ananda_Wutwanna_Resume_TH.pdf',
  },
  // 3D hero scene (Spline). This default is a public Spline robot template.
  // TODO: create/duplicate your own free scene at https://spline.design,
  // "Export → Public URL", and paste it here for a stable, self-owned asset.
  splineScene: 'https://prod.spline.design/9xuF1oRA5poA131s/scene.splinecode',
} as const;
