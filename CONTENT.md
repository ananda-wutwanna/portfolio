# Portfolio Content — TH / EN
เนื้อหาจริงสำหรับใส่ในเว็บ (ดึงจาก resume) — Claude Code เอาไปแตกเป็น `messages/en.json` + `messages/th.json`
> ⚠️ ช่องที่ต้องเติมเอง: LinkedIn/GitHub URL, รูปโปรไฟล์, ปีเกิด (ถ้าจะใส่)

---

## HERO
| | EN | TH |
|---|---|---|
| name | Ananda Wutwanna | ⟨เติมชื่อไทย — ยืนยันการสะกด⟩ |
| role | IoT & Embedded Systems Engineer | วิศวกร IoT และระบบสมองกลฝังตัว |
| tagline | I build the firmware and control platforms that make industrial automation move — from ESP32 devices to the systems that orchestrate them. | ผมสร้างเฟิร์มแวร์และแพลตฟอร์มควบคุมที่ทำให้ระบบอัตโนมัติในอุตสาหกรรมทำงานได้จริง ตั้งแต่อุปกรณ์ ESP32 ไปจนถึงระบบที่สั่งการทั้งหมด |
| cta_primary | View Projects | ดูผลงาน |
| cta_secondary | Download Resume | ดาวน์โหลดเรซูเม่ |
| tech_chips | ESP32 · FreeRTOS · MQTT · Modbus · FastAPI · React | ESP32 · FreeRTOS · MQTT · Modbus · FastAPI · React |

## ABOUT
**EN:** IoT and embedded systems engineer with hands-on experience designing firmware for microcontrollers (ESP32, Arduino) and the full-stack platforms that control them. I've delivered production C/C++ firmware on ESP-IDF and FreeRTOS for industrial vertical-farming automation — motion control, irrigation, and nutrient dosing — alongside FastAPI/React systems that command and monitor them over MQTT. I like taking a system all the way from requirement to firmware, integration, on-site installation, and troubleshooting in the real world.

**TH:** วิศวกร IoT และระบบสมองกลฝังตัว มีประสบการณ์ตรงในการออกแบบเฟิร์มแวร์สำหรับไมโครคอนโทรลเลอร์ (ESP32, Arduino) และแพลตฟอร์มควบคุมแบบ full-stack ที่สั่งการอุปกรณ์เหล่านั้น เคยพัฒนาเฟิร์มแวร์ C/C++ บน ESP-IDF และ FreeRTOS ใช้งานจริงในโรงงานปลูกพืชแนวตั้ง ทั้งการควบคุมการเคลื่อนที่ ระบบน้ำ และการผสมสารอาหาร ควบคู่กับระบบ FastAPI/React ที่สั่งการและมอนิเตอร์ผ่าน MQTT ถนัดงานตั้งแต่วิเคราะห์ความต้องการ เขียนเฟิร์มแวร์ เชื่อมระบบ ติดตั้งหน้างาน จนถึงแก้ปัญหาในสภาพใช้งานจริง

## SKILLS (หมวด + tags)
- **Microcontrollers / MCUs** — ESP32, Arduino; motor/lift/valve control, sensor integration, OTA
- **Embedded OS / RTOS** — FreeRTOS, ESP-IDF, Linux (basic); NVS persistent config
- **Communication & Protocols** — MQTT, I2C, Modbus, RS-485, UART/Serial, ADC, TCP/UDP, WebSocket, REST
- **System Integration & APIs** — REST API design & integration; connecting devices, controllers, and services
- **Backend & Full-stack** — Python (FastAPI), Node.js, Node-RED, React + TypeScript
- **Databases** — PostgreSQL, MongoDB, MySQL
- **Hands-on / Field** — device installation & commissioning, wiring, hardware assembly & servicing, on-site troubleshooting
- **Tooling** — PlatformIO, Arduino IDE, VS Code, Docker, Git/GitLab CI

หมวดภาษาไทย (label):
ไมโครคอนโทรลเลอร์ · ระบบปฏิบัติการฝังตัว/RTOS · การสื่อสาร & โปรโตคอล · การเชื่อมระบบ & API · Backend & Full-stack · ฐานข้อมูล · งานภาคสนาม/ฮาร์ดแวร์ · เครื่องมือ

## PROJECTS (case study — field: title / role / period / problem / built / tech / result)

### ⭐ 1. PFAL — Vertical Farming Automation  (Featured)
- **client/where:** Civic Agrotech · 2025–Present
- **role EN:** IoT & firmware engineer  **TH:** วิศวกร IoT และเฟิร์มแวร์
- **problem EN:** An automated plant factory needed to move and grow crop trays with no manual handling.
- **problem TH:** โรงงานปลูกพืชแนวตั้งต้องขนย้ายและปลูกถาดพืชแบบอัตโนมัติ ไม่ใช้แรงคน
- **built EN:** Tray automation coordinating RGV + lifts over MQTT; ESP32/FreeRTOS firmware for ball-valve irrigation and nutrient-mixing; a React + FastAPI + MongoDB control platform to command and monitor everything in real time.
- **built TH:** ระบบ automation ขนย้ายถาดโดยประสาน RGV + lift ผ่าน MQTT; เฟิร์มแวร์ ESP32/FreeRTOS สำหรับวาล์วรดน้ำและระบบผสมสารอาหาร; แพลตฟอร์มควบคุม React + FastAPI + MongoDB สั่งการและมอนิเตอร์แบบเรียลไทม์
- **tech:** ESP32 · FreeRTOS · MQTT · I2C · React · FastAPI · MongoDB
- **result EN:** Replaced manual tray handling with a reliable, monitored end-to-end workflow.
- **result TH:** แทนการทำงานด้วยมือด้วยกระบวนการอัตโนมัติที่เชื่อถือได้และมอนิเตอร์ได้ตลอดสาย

### 2. Water Bill Management System
- **client/where:** ADC Microsystems
- **problem EN/TH:** Local governments needed to streamline water billing & collection. / หน่วยงานท้องถิ่นต้องการปรับปรุงระบบออกบิลและเก็บค่าน้ำให้มีประสิทธิภาพ
- **built EN:** Multi-platform solution — POS field terminals, web admin portal, Line OA consumer app; RFID/NFC ID, OCR meter reading, real-time payments; PostgreSQL schema & workflows.
- **built TH:** โซลูชันหลายแพลตฟอร์ม — POS หน้างาน, เว็บแอดมิน, Line OA; ระบุตัวตนด้วย RFID/NFC, อ่านมิเตอร์ด้วย OCR, ชำระเงินเรียลไทม์; ออกแบบ schema/workflow บน PostgreSQL
- **tech:** React Native · React JS · Line OA · PostgreSQL · RFID/NFC · OCR

### 3. Air Quality Monitoring System
- **client/where:** ADC Microsystems
- **built EN:** Real-time air-quality platform with an MQTT IoT sensor network (PM2.5, PM10, temp, humidity), AQI calculation, Line OA alerts, and exportable reports for authorities.
- **built TH:** แพลตฟอร์มติดตามคุณภาพอากาศเรียลไทม์ ด้วยเครือข่ายเซ็นเซอร์ IoT ผ่าน MQTT (PM2.5, PM10, อุณหภูมิ, ความชื้น), คำนวณ AQI, แจ้งเตือนผ่าน Line OA และออกรายงานให้หน่วยงาน
- **tech:** React JS · Node.js · MySQL · MQTT · IoT sensors

### 4. Beacon-based Public Announcement System
- **client/where:** ADC Microsystems
- **built EN:** Location-aware BLE beacon system with Line Messaging API integration, role-based access control, and an engagement analytics dashboard.
- **built TH:** ระบบแจ้งข่าวตามตำแหน่งด้วย BLE beacon เชื่อม Line Messaging API, จัดสิทธิ์ผู้ใช้แบบ role-based และแดชบอร์ดวิเคราะห์การมีส่วนร่วม
- **tech:** React JS · Node.js · PostgreSQL · BLE · Line API

### 5. Smart Watch Services
- **client/where:** ADC Microsystems
- **built EN:** IoT healthcare backend ingesting real-time data from multiple smartwatch models (UDP/MQTT); REST + WebSocket APIs for heart rate, blood pressure, SPO2, temperature; Node-RED pipeline; SOS & location tracking.
- **built TH:** ระบบ backend ด้านสุขภาพ รับข้อมูลเรียลไทม์จากสมาร์ตวอทช์หลายรุ่น (UDP/MQTT); REST + WebSocket API สำหรับชีพจร ความดัน SPO2 อุณหภูมิ; ไปป์ไลน์ Node-RED; ระบบ SOS และติดตามตำแหน่ง
- **tech:** Node.js · WebSocket · MQTT · UDP · Node-RED · PostgreSQL

### 6. VDA5050 Fleet Simulator  (Lab / self-initiated)
- **built EN:** A mini VDA5050 fleet-control simulator (Python + MQTT) — a master dispatches orders to simulated AMRs that report state/battery, with cancelOrder actions. Demonstrates AMR ↔ fleet-manager (RCS) communication.
- **built TH:** ตัวจำลอง fleet control ตามมาตรฐาน VDA5050 (Python + MQTT) — master สั่งงานให้ AMR จำลองที่รายงานสถานะ/แบตเตอรี่ พร้อมคำสั่ง cancelOrder แสดงการสื่อสาร AMR ↔ fleet manager (RCS)
- **tech:** Python · MQTT · VDA5050
- **link:** GitHub (repo vda5050_sim)

## EXPERIENCE (timeline)
1. **Civic Agrotech — IoT Imagineer** · Oct 2025 – Present
   - EN: Design & develop the IoT and firmware stack for an automated Plant Factory with Artificial Lighting (RGV, lift, valve, nutrient-mixing, control platform).
   - TH: ออกแบบและพัฒนาระบบ IoT และเฟิร์มแวร์สำหรับโรงงานปลูกพืชแนวตั้งอัตโนมัติ (RGV, lift, วาล์ว, ระบบผสมสารอาหาร, แพลตฟอร์มควบคุม)
2. **Edvisory — Software Analyst** · 2025 – Oct 2025
   - EN: Evaluated technical feasibility with PO/BA & UX/UI; wrote SRS sections (swimlane, API docs, ER); planning, testing, user training.
   - TH: ประเมินความเป็นไปได้ทางเทคนิคร่วมกับ PO/BA และ UX/UI; เขียน SRS (swimlane, API, ER); วางแผน ทดสอบ และเทรนผู้ใช้
3. **ADC Microsystems** · 2020 – 2025
   - **Software Analyst** (2022–2025) — วิเคราะห์/ออกแบบระบบจาก requirement, ออกแบบ architecture
   - **Project Coordinator** (2021–2022) — ประสานทีมพัฒนา หลายโปรเจกต์พร้อมกัน ส่งงานตรงเวลา
   - **IoT Developer** (2020–2021) — พัฒนา/ติดตั้ง IoT จาก prototype สู่ production, ทดสอบ/แก้ปัญหาหน้างานจริง

## EDUCATION
- **EN:** B.Eng. in Computer Engineering — Naresuan University (2016–2020)
- **TH:** วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์ — มหาวิทยาลัยนเรศวร (2559–2563)

## CONTACT
- Email: anandawwutwanna@gmail.com
- Phone: 082-592-4747
- Location: Samut Sakhon, Thailand
- GitHub: ⟨เติมลิงก์⟩   LinkedIn: ⟨เติมลิงก์⟩
- **CTA EN:** Open to IoT / embedded / automation roles — let's talk.
- **CTA TH:** เปิดรับงานสาย IoT / embedded / automation — ทักมาคุยกันได้เลย
