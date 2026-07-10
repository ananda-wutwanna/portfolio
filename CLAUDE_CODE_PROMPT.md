# Prompt สำหรับสั่ง Claude Code

> วิธีใช้: เปิด Claude Code ในโฟลเดอร์ว่างที่จะเป็น repo เว็บ, ก๊อปเนื้อหาด้านล่างวางเป็นข้อความแรก
> แนบไฟล์ `PORTFOLIO_BRIEF.md` และ `CONTENT.md` ไว้ในโฟลเดอร์นั้นด้วย (Claude Code จะอ่านได้)
> ต้องติดตั้ง skill **UI UX Pro Max** ใน Claude Code ก่อน

---

```
สร้างเว็บ portfolio ส่วนตัวสองภาษา (ไทย/อังกฤษ) ให้ผม

**ก่อนเริ่ม:** ใช้ skill "UI UX Pro Max" เพื่อเลือก color palette, font pairing, spacing
scale และ UX pattern ให้เข้ากับสไตล์ "minimal engineer / technical datasheet" ที่ระบุใน brief
อ่านไฟล์ PORTFOLIO_BRIEF.md (สเปก design + tech) และ CONTENT.md (เนื้อหาจริง 2 ภาษา) ให้ครบก่อนลงมือ

**Stack (ทำตามนี้):**
- Next.js (App Router) + TypeScript + Tailwind CSS
- Static export: output: 'export' (จะ deploy บน GitHub Pages)
- i18n แบบ static-safe: route segment app/[locale]/ + generateStaticParams(['en','th'])
  (ห้ามใช้ Next built-in i18n เพราะใช้กับ export ไม่ได้) — ใช้ next-intl หรือ dictionary JSON
- ปุ่มสลับภาษาบน navbar, จำค่าใน localStorage, default = th, มีทั้ง /th และ /en
- framer-motion (animation เบา ๆ), lucide-react (icons)

**GitHub Pages config:**
- next.config.js: output:'export', basePath+assetPrefix = '/<repo>', images.unoptimized:true
- เพิ่ม public/.nojekyll
- สร้าง .github/workflows/deploy.yml (build → export out/ → deploy gh-pages)

**หน้า/section (single-page scroll + anchor nav):**
Hero → About → Skills → Projects (เด่นสุด, case study, PFAL featured) → Experience (timeline + ปุ่ม Download Resume) → Contact
เอาเนื้อหาทั้งหมดจาก CONTENT.md แตกเป็น messages/en.json + messages/th.json และ data/*.ts

**Design guideline (ยึดตาม brief, ให้ UI UX Pro Max เลือกค่าจริง):**
- Minimal, whitespace เยอะ, สีน้อย, accent เขียว #2E7D32 อันเดียว
- Typography รองรับไทยดี (เช่น Inter/Space Grotesk + IBM Plex Sans Thai + JetBrains Mono สำหรับ label)
- Section header สไตล์เลขโมโน (01 / ABOUT) + เส้นคั่นบาง
- responsive, dark mode ได้ (optional), a11y ครบ, respect prefers-reduced-motion

**Definition of done:** ตามหัวข้อ 8 ใน PORTFOLIO_BRIEF.md — เปิดได้ทั้ง /th /en,
next build export ผ่าน, Lighthouse ≥ 90 ทุกหมวด, ปุ่ม resume ใช้ได้

เริ่มจากวางโครงโปรเจกต์ + config ก่อน แล้วค่อยทำทีละ section ให้ผมรีวิวระหว่างทาง
วางไฟล์ resume PDF ไว้ที่ public/resume/ (ผมจะเอามาใส่เอง)
```

---

## เช็คลิสต์ก่อนส่งให้ Claude Code
- [ ] ติดตั้ง skill UI UX Pro Max ใน Claude Code แล้ว
- [ ] เอา `PORTFOLIO_BRIEF.md` + `CONTENT.md` ไปไว้ในโฟลเดอร์ repo
- [ ] เติมช่องว่างใน CONTENT.md: ชื่อไทย, GitHub, LinkedIn, รูปโปรไฟล์
- [ ] เตรียมไฟล์ resume PDF (มีแล้วในโฟลเดอร์ profile) ไว้ก๊อปเข้า public/resume/
- [ ] ตั้งชื่อ repo (เช่น `ananda-portfolio`) เพื่อใส่ basePath ให้ถูก
- [ ] สร้าง GitHub repo + เปิด GitHub Pages (source = GitHub Actions)

## ไอเดียต่อยอด (เฟส 2)
- หน้า case study แยกต่อโปรเจกต์ (`/[locale]/projects/[slug]`) พร้อมรูป/ไดอะแกรม
- ฝัง VDA5050 simulator เป็น demo interactive (โชว์หุ่นยนต์วิ่งบนแผนที่)
- Blog/บันทึกเทคนิค (MDX)
- Custom domain
