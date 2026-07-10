# Portfolio Website — Design & Build Brief
### Ananda Wutwanna · IoT & Embedded Systems Engineer

เอกสารนี้เป็น **สเปกให้ Claude Code สร้างเว็บ** — วาง design direction, tech, โครงหน้า, และ design tokens ไว้ครบ
ใช้คู่กับ `CONTENT.md` (เนื้อหา 2 ภาษา) และ `CLAUDE_CODE_PROMPT.md` (prompt สำหรับสั่ง Claude Code)

---

## 1. เป้าหมาย
- Portfolio ส่วนตัว **2 ภาษา (TH / EN)** สายงาน IoT / Embedded / Automation
- สไตล์ **Minimal engineer** — สะอาด เน้น typography + whitespace, โทนทางการอ่านง่าย
- ใช้สมัครงาน (แนบ resume) + โชว์โปรเจกต์เป็น case study
- ให้ Claude Code สร้างโดยใช้ skill **UI UX Pro Max** ช่วยเลือก palette/font/spacing

## 2. Tech decisions (สำคัญ — ต้องทำตาม)
- **Next.js (App Router) + TypeScript + Tailwind CSS**
- **Static export**: ตั้ง `output: 'export'` ใน `next.config.js` (เพราะ deploy GitHub Pages)
- **i18n แบบ static-safe**: ใช้ route segment `app/[locale]/...` + `generateStaticParams()` คืน `['en','th']`
  - อย่าใช้ Next built-in `i18n` config (ใช้กับ `output: 'export'` ไม่ได้)
  - แนะนำ `next-intl` (รองรับ App Router + static export) หรือ dictionary JSON ง่าย ๆ (`messages/en.json`, `messages/th.json`)
  - ปุ่มสลับภาษาบน navbar, จำค่าไว้ใน `localStorage`, default = `th` (ผู้ชมส่วนใหญ่ไทย) แต่ให้มี `/en`
- **GitHub Pages** requirements:
  - ตั้ง `basePath` + `assetPrefix` = `/<repo-name>` ใน `next.config.js`
  - เพิ่มไฟล์ `public/.nojekyll`
  - `images: { unoptimized: true }` (static export ไม่มี image optimizer)
  - GitHub Actions workflow: build → `next build` (export ออก `out/`) → deploy `out/` ไป `gh-pages`
- **Animation**: เบา ๆ ด้วย `framer-motion` (fade/slide on scroll) — อย่าเยอะ ให้เข้ากับ minimal
- **Icons**: `lucide-react`
- Accessibility: semantic HTML, alt text, focus ring, contrast ≥ 4.5:1, รองรับ keyboard, `prefers-reduced-motion`

## 3. Sitemap / โครงหน้า (single-page scroll + resume แยก)
```
/[locale]                 (หน้าเดียว scroll ยาว มี anchor nav)
  ├─ Hero          #home
  ├─ About         #about
  ├─ Skills        #skills
  ├─ Projects      #projects   (เด่นสุด — case study cards → รายละเอียด)
  ├─ Experience    #experience (timeline + ปุ่มโหลด resume PDF)
  └─ Contact       #contact
/[locale]/projects/[slug]  (หน้า case study รายโปรเจกต์ — optional เฟส 2)
```
Navbar: sticky, โปร่ง, มี anchor links + language toggle + ปุ่ม "Resume". Mobile = hamburger.

## 4. Design direction — "Minimal Engineer"
แนวคิด: หน้าเว็บเหมือน **spec sheet / technical datasheet** ที่จัดวางเป๊ะ อ่านสบาย ไม่รก
ให้ Claude Code ใช้ UI UX Pro Max เลือกค่าจริง แต่ยึด guideline นี้:

### Color (ยึด light เป็นหลัก, มี dark mode ได้)
- Background: near-white `#FAFAF9` / surface `#FFFFFF`
- Text: near-black `#1A1A1A`, secondary `#5A5A5A`
- **Accent เดียว**: เขียว `#2E7D32` (ผูกกับสาย agri/IoT ที่ทำอยู่) — ใช้กับ link, underline, highlight เท่านั้น
- Borders/hairlines: `#E5E5E5`
- โทนสำคัญ: ใช้สีน้อย (2–3 สี) whitespace เยอะ = ความ "mastery"

### Typography (ต้องรองรับไทยดี)
- Headings: **Space Grotesk** หรือ **Inter** (EN) — ตัวหนา แน่น
- Body: **Inter** (EN) + **IBM Plex Sans Thai** (TH) — คู่นี้เข้ากันเพราะตระกูลใกล้กัน
- Labels/section numbers/meta: **JetBrains Mono** (โมโน) — ให้กลิ่น engineer (เช่น `01 / ABOUT`, tag เทค)
- Scale: ใหญ่–เล็กชัด (hero ~clamp(2.5rem,6vw,4.5rem)), line-height โปร่ง

### Layout & spacing
- Grid 12 คอลัมน์, max-width ~1100–1200px, margin กว้าง
- 8px spacing scale, section padding แนวตั้งเยอะ (py-24+)
- Projects = grid การ์ด (2 คอลัมน์ desktop) แบบ specimen — hover ยกเบา ๆ + accent
- Section header สไตล์: เลขโมโน `01` + ชื่อหมวด + เส้นคั่นบาง

### Micro-interactions
- Fade/translate-up on scroll (stagger เบา)
- Link underline วิ่งจากซ้าย, cursor ปกติ
- respect `prefers-reduced-motion`

## 5. Components ที่ต้องมี
- `Navbar` (sticky, anchor, lang toggle, resume btn)
- `Hero` (ชื่อใหญ่, tagline, ปุ่ม CTA: View Projects / Download Resume, chips เทคหลัก)
- `SectionHeader` (เลขโมโน + title + rule)
- `SkillGroup` (หมวด + tags)
- `ProjectCard` + `ProjectModal`/หน้า detail (title, role, ปัญหา, สิ่งที่ทำ, เทค, ผลลัพธ์)
- `TimelineItem` (บริษัท, ตำแหน่ง, ช่วงเวลา, bullets)
- `LangToggle`, `ThemeToggle` (optional), `Footer` (ลิงก์ GitHub/email/LinkedIn)

## 6. SEO / meta
- `<title>` + description 2 ภาษา, `lang` attr ตาม locale, OpenGraph image, `hreflang` en/th
- favicon, sitemap.xml, robots.txt

## 7. โครงไฟล์ที่แนะนำ
```
portfolio/
├─ app/
│  ├─ [locale]/
│  │  ├─ layout.tsx          # html lang, fonts, nav, footer
│  │  ├─ page.tsx            # ประกอบ section ทั้งหมด
│  │  └─ projects/[slug]/page.tsx   # (เฟส 2)
│  └─ globals.css
├─ components/               # Navbar, Hero, Section*, ProjectCard, Timeline...
├─ messages/ en.json  th.json   # ข้อความ 2 ภาษา (จาก CONTENT.md)
├─ data/ projects.ts  experience.ts  skills.ts
├─ public/ resume/  .nojekyll  og-image.png
├─ next.config.js           # output:'export', basePath, images.unoptimized
├─ .github/workflows/deploy.yml
└─ tailwind.config.ts
```

## 8. Definition of Done
- [ ] เปิดได้ทั้ง `/th` และ `/en`, toggle สลับได้ เนื้อหาครบทั้งสองภาษา
- [ ] responsive (mobile → desktop) เนียน
- [ ] Projects เป็น case study มีรายละเอียด, PFAL เด่นสุด
- [ ] ปุ่ม Download Resume ใช้งานได้ (ไฟล์ใน `public/resume/`)
- [ ] `next build` export เป็น static สำเร็จ, deploy GitHub Pages ขึ้นจริง
- [ ] Lighthouse: Performance/Best practices/SEO/A11y ≥ 90
```
```
