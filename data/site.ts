// Central site config. Fill in the placeholder links marked "TODO".
// TODO: set this to your deployed URL, e.g. https://<user>.github.io/<repo>
export const siteUrl = 'https://your-github.github.io/portfolio';

export const site = {
  name: {
    en: 'Ananda Wutwanna',
    th: 'อนันดา วุฒวรรณะ',
  },
  email: 'anandawwutwanna@gmail.com',
  phone: '082-592-4747',
  phoneHref: '+66825924747',
  linkedin: 'https://www.linkedin.com/in/ananda-wutwanna-156847343/',
  linkedinHandle: 'ananda-wutwanna',
  // Resume files live in public/resume/.
  resume: {
    en: '/resume/Ananda_Wutwanna_Resume.pdf',
    th: '/resume/Ananda_Wutwanna_Resume_TH.pdf',
  },
  // Chips shown in the hero.
  techChips: ['MQTT', 'Modbus', 'FastAPI', 'React', 'Python', 'ESP32'],
  // 3D hero scene (Spline). This default is a public Spline robot template.
  // TODO: create/duplicate your own free scene at https://spline.design,
  // "Export → Public URL", and paste it here for a stable, self-owned asset.
  splineScene: 'https://prod.spline.design/9xuF1oRA5poA131s/scene.splinecode',
} as const;
