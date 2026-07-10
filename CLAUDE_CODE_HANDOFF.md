# HANDOFF — Ananda Wutwanna Portfolio (self-contained)

> **วิธีใช้:** ก๊อปไฟล์นี้ไฟล์เดียวไปวางในโฟลเดอร์ repo ว่าง ๆ แล้วเปิด Claude Code สั่งว่า
> *"อ่าน CLAUDE_CODE_HANDOFF.md ทั้งไฟล์ แล้วสร้างเว็บตามนั้น ใช้ skill UI UX Pro Max ช่วยออกแบบ"*
> ไฟล์นี้มีครบทั้ง prompt + design spec + เนื้อหา 2 ภาษา ไม่ต้องแนบไฟล์อื่น

---

## ✅ INSTRUCTION (สิ่งที่อยากให้ทำ)

สร้างเว็บ **portfolio ส่วนตัวสองภาษา (ไทย/อังกฤษ)** สาย IoT / Embedded / Automation

**ก่อนเริ่ม:** ใช้ skill **"UI UX Pro Max"** เลือก color palette / font pairing / spacing / UX pattern
ให้เข้าสไตล์ *minimal engineer / technical datasheet* ตาม design spec ด้านล่าง แล้วค่อยลงมือ
เริ่มจากวางโครง + config ก่อน แล้วทำทีละ section ให้รีวิวระหว่างทาง

---

## 1. TECH (ทำตามนี้เป๊ะ)
- **Next.js (App Router) + TypeScript + Tailwind CSS**
- **Static export**: `output: 'export'` ใน `next.config.js` (deploy บน **GitHub Pages**)
- **i18n static-safe**: route `app/[locale]/...` + `generateStaticParams()` คืน `['en','th']`
  - ห้ามใช้ Next built-in `i18n` config (ใช้กับ export ไม่ได้)
  - ใช้ `next-intl` หรือ dictionary JSON (`messages/en.json`, `messages/th.json`)
  - ปุ่มสลับภาษาบน navbar, จำค่าใน `localStorage`, default `th`, มีทั้ง `/th` และ `/en`
- `framer-motion` (animation เบา), `lucide-react` (icons)
- **GitHub Pages**: `basePath` + `assetPrefix` = `/<repo-name>`, `images:{unoptimized:true}`,
  เพิ่ม `public/.nojekyll`, สร้าง `.github/workflows/deploy.yml` (build → export `out/` → deploy `gh-pages`)
- A11y: semantic HTML, alt, focus ring, contrast ≥ 4.5:1, keyboard, `prefers-reduced-motion`
- SEO: title/description 2 ภาษา, `lang` attr, OpenGraph, `hreflang`, favicon, sitemap, robots

## 2. โครงหน้า (single-page scroll + anchor nav)
`Hero → About → Skills → Projects (เด่นสุด, case study, PFAL featured) → Experience (timeline + ปุ่ม Download Resume) → Contact`
Navbar sticky โปร่ง มี anchor + language toggle + ปุ่ม Resume; mobile = hamburger.

## 3. DESIGN — "Minimal Engineer" (ให้ UI UX Pro Max เลือกค่าจริง แต่ยึดแนวนี้)
- **Color:** bg near-white `#FAFAF9`/surface `#FFF`; text `#1A1A1A`, secondary `#5A5A5A`;
  **accent เดียว = เขียว `#2E7D32`** (ใช้กับ link/underline/highlight); hairline `#E5E5E5`. สีน้อย whitespace เยอะ
- **Type (ต้องรองรับไทยดี):** headings Inter/Space Grotesk; body Inter + **IBM Plex Sans Thai**;
  labels/section-number **JetBrains Mono** (เช่น `01 / ABOUT`)
- **Layout:** grid 12 คอลัมน์, max-width ~1100–1200px, 8px scale, section padding แนวตั้งเยอะ
- Projects = grid การ์ด 2 คอลัมน์ (desktop) hover ยกเบา ๆ + accent
- Section header = เลขโมโน + ชื่อ + เส้นคั่นบาง
- Micro-interaction: fade/translate-up on scroll (stagger เบา), respect reduced-motion

## 4. โครงไฟล์ที่แนะนำ
```
app/[locale]/{layout.tsx,page.tsx}   globals.css
components/  (Navbar, Hero, SectionHeader, SkillGroup, ProjectCard, TimelineItem, LangToggle, Footer)
messages/ en.json th.json
data/ projects.ts experience.ts skills.ts
public/ resume/ .nojekyll og-image.png
next.config.js  tailwind.config.ts  .github/workflows/deploy.yml
```

## 5. DEFINITION OF DONE
- [ ] เปิดได้ทั้ง `/th` และ `/en`, toggle สลับได้, เนื้อหาครบสองภาษา
- [ ] responsive mobile→desktop เนียน
- [ ] Projects เป็น case study, PFAL เด่นสุด
- [ ] ปุ่ม Download Resume ใช้ได้ (ไฟล์ใน `public/resume/`)
- [ ] `next build` export static สำเร็จ + deploy GitHub Pages ขึ้นจริง
- [ ] Lighthouse ≥ 90 ทุกหมวด

---

# 📄 CONTENT (เนื้อหาจริง 2 ภาษา — แตกเป็น messages/*.json + data/*.ts)

> ⚠️ ช่องที่เจ้าของต้องเติม: ชื่อไทย, GitHub URL, LinkedIn URL, รูปโปรไฟล์

## HERO
- **name:** EN `Ananda Wutwanna` | TH `⟨เติมชื่อไทย⟩`
- **role:** EN `IoT & Embedded Systems Engineer` | TH `วิศวกร IoT และระบบสมองกลฝังตัว`
- **tagline EN:** I build the firmware and control platforms that make industrial automation move — from ESP32 devices to the systems that orchestrate them.
- **tagline TH:** ผมสร้างเฟิร์มแวร์และแพลตฟอร์มควบคุมที่ทำให้ระบบอัตโนมัติในอุตสาหกรรมทำงานได้จริง ตั้งแต่อุปกรณ์ ESP32 ไปจนถึงระบบที่สั่งการทั้งหมด
- **CTA:** EN `View Projects` / `Download Resume` — TH `ดูผลงาน` / `ดาวน์โหลดเรซูเม่`
- **tech chips:** ESP32 · FreeRTOS · MQTT · Modbus · FastAPI · React

## ABOUT
- **EN:** IoT and embedded systems engineer with hands-on experience designing firmware for microcontrollers (ESP32, Arduino) and the full-stack platforms that control them. I've delivered production C/C++ firmware on ESP-IDF and FreeRTOS for industrial vertical-farming automation — motion control, irrigation, and nutrient dosing — alongside FastAPI/React systems that command and monitor them over MQTT. I like taking a system all the way from requirement to firmware, integration, on-site installation, and troubleshooting in the real world.
- **TH:** วิศวกร IoT และระบบสมองกลฝังตัว มีประสบการณ์ตรงในการออกแบบเฟิร์มแวร์สำหรับไมโครคอนโทรลเลอร์ (ESP32, Arduino) และแพลตฟอร์มควบคุมแบบ full-stack ที่สั่งการอุปกรณ์เหล่านั้น เคยพัฒนาเฟิร์มแวร์ C/C++ บน ESP-IDF และ FreeRTOS ใช้งานจริงในโรงงานปลูกพืชแนวตั้ง ทั้งการควบคุมการเคลื่อนที่ ระบบน้ำ และการผสมสารอาหาร ควบคู่กับระบบ FastAPI/React ที่สั่งการและมอนิเตอร์ผ่าน MQTT ถนัดงานตั้งแต่วิเคราะห์ความต้องการ เขียนเฟิร์มแวร์ เชื่อมระบบ ติดตั้งหน้างาน จนถึงแก้ปัญหาในสภาพใช้งานจริง

## SKILLS (หมวด + tags)
- **Microcontrollers / MCUs** (ไมโครคอนโทรลเลอร์) — ESP32, Arduino; motor/lift/valve control, sensor integration, OTA
- **Embedded OS / RTOS** (ระบบปฏิบัติการฝังตัว) — FreeRTOS, ESP-IDF, Linux (basic), NVS
- **Communication & Protocols** (การสื่อสาร & โปรโตคอล) — MQTT, I2C, Modbus, RS-485, UART/Serial, ADC, TCP/UDP, WebSocket, REST
- **System Integration & APIs** (การเชื่อมระบบ & API) — REST API design & integration; connecting devices, controllers, services
- **Backend & Full-stack** — Python (FastAPI), Node.js, Node-RED, React + TypeScript
- **Databases** (ฐานข้อมูล) — PostgreSQL, MongoDB, MySQL
- **Hands-on / Field** (งานภาคสนาม) — device installation & commissioning, wiring, hardware assembly & servicing, on-site troubleshooting
- **Tooling** (เครื่องมือ) — PlatformIO, Arduino IDE, VS Code, Docker, Git/GitLab CI

## PROJECTS (case study: title / role / period / problem / built / tech / result)

### ⭐ PFAL — Vertical Farming Automation  (FEATURED)
- Civic Agrotech · 2025–Present · role: IoT & firmware engineer / วิศวกร IoT และเฟิร์มแวร์
- **problem** EN: An automated plant factory needed to move and grow crop trays with no manual handling. — TH: โรงงานปลูกพืชแนวตั้งต้องขนย้ายและปลูกถาดพืชแบบอัตโนมัติ ไม่ใช้แรงคน
- **built** EN: Tray automation coordinating RGV + lifts over MQTT; ESP32/FreeRTOS firmware for ball-valve irrigation and nutrient-mixing; a React + FastAPI + MongoDB control platform to command and monitor everything in real time. — TH: ระบบ automation ขนย้ายถาดโดยประสาน RGV + lift ผ่าน MQTT; เฟิร์มแวร์ ESP32/FreeRTOS สำหรับวาล์วรดน้ำและระบบผสมสารอาหาร; แพลตฟอร์มควบคุม React + FastAPI + MongoDB สั่งการและมอนิเตอร์แบบเรียลไทม์
- **tech:** ESP32 · FreeRTOS · MQTT · I2C · React · FastAPI · MongoDB
- **result** EN: Replaced manual tray handling with a reliable, monitored end-to-end workflow. — TH: แทนการทำงานด้วยมือด้วยกระบวนการอัตโนมัติที่เชื่อถือได้และมอนิเตอร์ได้ตลอดสาย

### Water Bill Management System — ADC Microsystems
- EN: Multi-platform utility billing — POS field terminals, web admin portal, Line OA app; RFID/NFC ID, OCR meter reading, real-time payments; PostgreSQL schema & workflows. — TH: ระบบออกบิลค่าน้ำหลายแพลตฟอร์ม — POS หน้างาน, เว็บแอดมิน, Line OA; RFID/NFC, อ่านมิเตอร์ด้วย OCR, ชำระเงินเรียลไทม์; schema/workflow บน PostgreSQL
- tech: React Native · React JS · Line OA · PostgreSQL · RFID/NFC · OCR

### Air Quality Monitoring System — ADC Microsystems
- EN: Real-time air-quality platform with an MQTT IoT sensor network (PM2.5, PM10, temp, humidity), AQI calculation, Line OA alerts, exportable reports. — TH: แพลตฟอร์มติดตามคุณภาพอากาศเรียลไทม์ ด้วยเซ็นเซอร์ IoT ผ่าน MQTT (PM2.5, PM10, อุณหภูมิ, ความชื้น), คำนวณ AQI, แจ้งเตือน Line OA, ออกรายงาน
- tech: React JS · Node.js · MySQL · MQTT · IoT sensors

### Beacon-based Public Announcement System — ADC Microsystems
- EN: Location-aware BLE beacon system with Line Messaging API integration, role-based access control, engagement analytics dashboard. — TH: ระบบแจ้งข่าวตามตำแหน่งด้วย BLE beacon เชื่อม Line Messaging API, จัดสิทธิ์ผู้ใช้แบบ role-based, แดชบอร์ดวิเคราะห์การมีส่วนร่วม
- tech: React JS · Node.js · PostgreSQL · BLE · Line API

### Smart Watch Services — ADC Microsystems
- EN: IoT healthcare backend ingesting real-time data from multiple smartwatch models (UDP/MQTT); REST + WebSocket APIs (heart rate, blood pressure, SPO2, temperature); Node-RED pipeline; SOS & location tracking. — TH: ระบบ backend สุขภาพ รับข้อมูลเรียลไทม์จากสมาร์ตวอทช์หลายรุ่น (UDP/MQTT); REST + WebSocket API (ชีพจร, ความดัน, SPO2, อุณหภูมิ); ไปป์ไลน์ Node-RED; SOS + ติดตามตำแหน่ง
- tech: Node.js · WebSocket · MQTT · UDP · Node-RED · PostgreSQL

### VDA5050 Fleet Simulator  (Lab / self-initiated)
- EN: A mini VDA5050 fleet-control simulator (Python + MQTT) — a master dispatches orders to simulated AMRs that report state/battery, with cancelOrder actions; demonstrates AMR ↔ fleet-manager (RCS) communication. — TH: ตัวจำลอง fleet control ตามมาตรฐาน VDA5050 (Python + MQTT) — master สั่งงานให้ AMR จำลองที่รายงานสถานะ/แบตเตอรี่ พร้อม cancelOrder; แสดงการสื่อสาร AMR ↔ fleet manager (RCS)
- tech: Python · MQTT · VDA5050 · link: GitHub (repo vda5050_sim)

## EXPERIENCE (timeline)
1. **Civic Agrotech — IoT Imagineer** · Oct 2025 – Present
   - EN: Design & develop the IoT and firmware stack for an automated Plant Factory with Artificial Lighting (RGV, lift, valve, nutrient-mixing, control platform).
   - TH: ออกแบบและพัฒนาระบบ IoT และเฟิร์มแวร์สำหรับโรงงานปลูกพืชแนวตั้งอัตโนมัติ (RGV, lift, วาล์ว, ระบบผสมสารอาหาร, แพลตฟอร์มควบคุม)
2. **Edvisory — Software Analyst** · 2025 – Oct 2025
   - EN: Evaluated technical feasibility with PO/BA & UX/UI; wrote SRS sections (swimlane, API docs, ER); planning, testing, user training.
   - TH: ประเมินความเป็นไปได้ทางเทคนิคร่วมกับ PO/BA และ UX/UI; เขียน SRS (swimlane, API, ER); วางแผน ทดสอบ เทรนผู้ใช้
3. **ADC Microsystems** · 2020 – 2025
   - **Software Analyst** (2022–2025) — analyze/design systems from requirements, design architecture / วิเคราะห์-ออกแบบระบบจาก requirement, ออกแบบ architecture
   - **Project Coordinator** (2021–2022) — coordinate dev team across concurrent projects, on-time delivery / ประสานทีมพัฒนา หลายโปรเจกต์ ส่งงานตรงเวลา
   - **IoT Developer** (2020–2021) — IoT from prototype to production, on-site testing & troubleshooting / พัฒนา-ติดตั้ง IoT จาก prototype สู่ production, ทดสอบ-แก้ปัญหาหน้างานจริง

## EDUCATION
- EN: B.Eng. in Computer Engineering — Naresuan University (2016–2020)
- TH: วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์ — มหาวิทยาลัยนเรศวร (2559–2563)

## CONTACT
- Email: anandawwutwanna@gmail.com · Phone: 082-592-4747 · Location: Samut Sakhon, Thailand
- GitHub: ⟨เติมลิงก์⟩ · LinkedIn: ⟨เติมลิงก์⟩
- **CTA** EN: Open to IoT / embedded / automation roles — let's talk. — TH: เปิดรับงานสาย IoT / embedded / automation — ทักมาคุยกันได้เลย
```
```
