import type { Locale } from '@/lib/i18n';

type L = Record<Locale, string>;

export type Project = {
  id: string;
  featured?: boolean;
  title: string;
  org: L;
  period: L;
  role: L;
  // Featured project (PFAL) uses problem/built/systems. Résumé-sourced
  // projects use a one-line summary plus verbatim highlight bullets.
  problem?: L;
  built?: L;
  summary?: L;
  highlights?: L[];
  systems?: { label: L; desc: L }[];
  result?: L;
  tech: string[];
  repo?: { label: string; url: string };
};

export const projects: Project[] = [
  {
    id: 'pfal',
    featured: true,
    title: 'PFAL — Vertical Farming Automation',
    org: { en: 'Civic Agrotech', th: 'Civic Agrotech' },
    period: { en: '2025 – Present', th: '2568 – ปัจจุบัน' },
    role: {
      en: 'IoT & firmware engineer',
      th: 'วิศวกร IoT และเฟิร์มแวร์',
    },
    problem: {
      en: 'An automated plant factory needed to move and grow crop trays with no manual handling.',
      th: 'โรงงานปลูกพืชแนวตั้งต้องขนย้ายและปลูกถาดพืชแบบอัตโนมัติ ไม่ใช้แรงคน',
    },
    built: {
      en: 'End-to-end automation for a vertical-farming plant factory — from moving crop trays (coordinating the RGV and lift to move trays in and out and shuttle them between floors), to the nutrient-water refill and the nutrient mixing / dosing systems, to grow-light and fan control for each growing tray. Every subsystem is tied together and commanded and monitored in real time from one central control platform.',
      th: 'ระบบอัตโนมัติครบวงจรของโรงงานปลูกพืชแนวตั้ง — ตั้งแต่การขนย้ายถาดพืช (ประสานการทำงานรถ RGV กับลิฟต์ให้นำถาดเข้า-ออกและย้ายถาดระหว่างชั้น) ระบบเติมน้ำสารอาหารพืช และระบบผสมและจ่ายสารอาหาร ไปจนถึงการควบคุมไฟปลูกและพัดลมของแต่ละถาดปลูก ทุกระบบย่อยถูกผูกเข้าด้วยกัน สั่งการและมอนิเตอร์แบบเรียลไทม์จากแพลตฟอร์มควบคุมกลางเพียงหน้าเดียว',
    },
    systems: [
      {
        label: { en: 'Tray automation (core)', th: 'ระบบขนย้ายถาด (แกนหลัก)' },
        desc: {
          en: 'Moves crop trays in and out and repositions them within the growing racks by coordinating the RGV and lift, with real-time monitoring that tracks where the RGV and lift are at every step.',
          th: 'ขนย้ายถาดพืชเข้า-ออกและย้ายถาดในชั้นปลูก โดยประสานการทำงานระหว่าง RGV กับลิฟต์ พร้อมมอนิเตอร์แบบเรียลไทม์ที่ติดตามได้ทุกสเต็ปว่า RGV และลิฟต์ทำงานอยู่ตรงไหน',
        },
      },
      {
        label: { en: 'RGV (rail vehicle)', th: 'RGV (รถบนราง)' },
        desc: {
          en: "A tray vehicle that runs on each growing layer's rail to move trays in and out of the storage slots.",
          th: 'รถขนถาดที่วิ่งบนรางประจำแต่ละชั้นปลูก ขนถาดเข้า-ออกช่องเก็บ',
        },
      },
      {
        label: { en: 'Lift', th: 'ลิฟต์' },
        desc: {
          en: 'Raises and lowers trays between the floors of each tower.',
          th: 'ยก-ลดถาดขึ้น-ลงระหว่างชั้นในแต่ละทาวเวอร์',
        },
      },
      {
        label: { en: 'Valve (water refill)', th: 'วาล์วเติมน้ำ' },
        desc: {
          en: 'A controller that automatically opens and closes the water-refill valves and reports its status in real time.',
          th: 'ชุดควบคุมที่เปิด-ปิดวาล์วเติมน้ำอัตโนมัติ พร้อมรายงานสถานะแบบเรียลไทม์',
        },
      },
      {
        label: { en: 'Nutrient mixing', th: 'ระบบผสมสารอาหาร' },
        desc: {
          en: 'A controller that mixes and dispenses nutrient solution to the target concentration, with precise pump control.',
          th: 'ชุดควบคุมที่ผสมและจ่ายสารอาหารให้ได้ความเข้มข้นตามที่ต้องการ พร้อมควบคุมปั๊มให้จ่ายอย่างแม่นยำ',
        },
      },
      {
        label: { en: 'Light (LED grow lighting)', th: 'ไฟปลูก (LED)' },
        desc: {
          en: 'Per-tray control of the white/red LED grow-lights and fans, with automatic scheduling.',
          th: 'ควบคุมไฟปลูก LED (สเปกตรัม ขาว/แดง) และพัดลมเป็นรายถาด พร้อมตั้งเวลาอัตโนมัติ',
        },
      },
      {
        label: { en: 'Control platform', th: 'แพลตฟอร์มควบคุม' },
        desc: {
          en: 'The central app that acts as the brain of the whole system — commanding and coordinating every subsystem, running the pick / place / move tray workflows from the crop plan, tracking where each tray is, and monitoring device status and the growing environment in real time from one place.',
          th: 'แอปศูนย์กลางที่เป็นสมองของทั้งระบบ — สั่งการและประสานทุกระบบย่อยให้ทำงานร่วมกัน สั่งหยิบ-วาง-ย้ายถาดตามแผนปลูก ติดตามตำแหน่งถาดทุกใบ และมอนิเตอร์สถานะอุปกรณ์กับสภาพแวดล้อมแบบเรียลไทม์ในหน้าเดียว',
        },
      },
    ],
    tech: [
      'ESP32',
      'ESP-IDF',
      'FreeRTOS',
      'C / C++',
      'Stepper motor control',
      'Modbus / RS-485',
      'I2C',
      'PWM',
      'OTA',
      'MQTT',
      'React',
      'FastAPI',
      'MongoDB',
    ],
  },
  {
    id: 'water-bill',
    title: 'Water Bill Management System',
    org: { en: 'ADC Microsystems', th: 'ADC Microsystems' },
    period: { en: '2022 – 2025', th: '2565 – 2568' },
    role: { en: 'System analyst', th: 'นักวิเคราะห์ระบบ' },
    summary: {
      en: 'Analyzed the requirements and designed a comprehensive water-utility management platform for local government agencies (municipalities and local administrative organizations) to streamline billing and improve collection efficiency.',
      th: 'วิเคราะห์ความต้องการและออกแบบแพลตฟอร์มบริหารจัดการงานประปาแบบครบวงจร สำหรับหน่วยงานราชการส่วนท้องถิ่น (เทศบาลและองค์กรปกครองส่วนท้องถิ่น) เพื่อปรับปรุงกระบวนการออกบิลและเพิ่มประสิทธิภาพการจัดเก็บ',
    },
    highlights: [
      {
        en: 'Analyzed business requirements and designed a multi-platform solution comprising POS terminals for field agents, a web administration portal, and a Line OA consumer interface.',
        th: 'วิเคราะห์ความต้องการทางธุรกิจและออกแบบโซลูชันหลายแพลตฟอร์ม ประกอบด้วยเครื่อง POS สำหรับเจ้าหน้าที่ภาคสนาม เว็บพอร์ทัลสำหรับผู้ดูแลระบบ และอินเทอร์เฟซผู้ใช้บน Line OA',
      },
      {
        en: 'Architected an integrated system leveraging RFID/NFC for customer identification, OCR for automated meter reading, and real-time payment processing.',
        th: 'ออกแบบสถาปัตยกรรมระบบแบบบูรณาการ โดยใช้ RFID/NFC ในการระบุตัวตนลูกค้า, OCR สำหรับการอ่านค่ามิเตอร์อัตโนมัติ และการประมวลผลการชำระเงินแบบเรียลไทม์',
      },
      {
        en: 'Designed the database schema and system workflows to manage customer data, billing records, and payment transactions.',
        th: 'ออกแบบโครงสร้างฐานข้อมูลและกระบวนการทำงานของระบบ เพื่อจัดการข้อมูลลูกค้า ประวัติการออกบิล และรายการชำระเงิน',
      },
      {
        en: 'Developed the functional specifications for three interconnected modules: a mobile field-collection system, an administrative back office, and a consumer-facing platform on Line OA.',
        th: 'จัดทำข้อกำหนดการทำงานของสามโมดูลที่เชื่อมโยงกัน ได้แก่ ระบบเก็บเงินบนมือถือ ระบบหลังบ้านสำหรับผู้ดูแล และแพลตฟอร์มฝั่งผู้ใช้บน Line OA',
      },
      {
        en: 'Created comprehensive documentation — system requirements specifications, flowcharts, and use-case diagrams — to guide the development team.',
        th: 'จัดทำเอกสารประกอบอย่างครบถ้วน ทั้งข้อกำหนดความต้องการของระบบ ผังงาน และ use-case diagram เพื่อเป็นแนวทางให้ทีมพัฒนา',
      },
      {
        en: 'Coordinated between stakeholders and developers to ensure alignment with municipal water-utility requirements and regulations.',
        th: 'ประสานงานระหว่างผู้มีส่วนได้ส่วนเสียและทีมพัฒนา เพื่อให้สอดคล้องกับความต้องการและระเบียบของงานประปาส่วนท้องถิ่น',
      },
    ],
    tech: ['React Native', 'React JS', 'Line OA', 'PostgreSQL', 'RFID / NFC', 'OCR'],
  },
  {
    id: 'air-quality',
    title: 'Air Quality Monitoring System',
    org: { en: 'ADC Microsystems', th: 'ADC Microsystems' },
    period: { en: '2022 – 2025', th: '2565 – 2568' },
    role: { en: 'System analyst', th: 'นักวิเคราะห์ระบบ' },
    summary: {
      en: 'Analyzed the requirements and designed a comprehensive air-quality monitoring platform for local government agencies, municipalities, universities, and provincial authorities to track, analyze, and respond to air-quality concerns.',
      th: 'วิเคราะห์ความต้องการและออกแบบแพลตฟอร์มติดตามคุณภาพอากาศแบบครบวงจร สำหรับหน่วยงานราชการส่วนท้องถิ่น เทศบาล มหาวิทยาลัย และหน่วยงานระดับจังหวัด เพื่อติดตาม วิเคราะห์ และรับมือปัญหาคุณภาพอากาศ',
    },
    highlights: [
      {
        en: 'Designed a web-based monitoring dashboard for real-time visualization of air-quality data.',
        th: 'ออกแบบแดชบอร์ดติดตามบนเว็บ สำหรับแสดงผลข้อมูลคุณภาพอากาศแบบเรียลไทม์',
      },
      {
        en: 'Designed an IoT system using the MQTT protocol for efficient, stable data transmission from the monitoring devices to the server.',
        th: 'ออกแบบระบบ IoT ที่ใช้โปรโตคอล MQTT สำหรับส่งข้อมูลจากอุปกรณ์ตรวจวัดมายังเซิร์ฟเวอร์อย่างมีประสิทธิภาพและเสถียร',
      },
      {
        en: 'Integrated multiple environmental sensors (PM2.5, PM10, temperature, and humidity) for comprehensive air-quality measurement.',
        th: 'เชื่อมต่อเซ็นเซอร์สิ่งแวดล้อมหลายชนิด (PM2.5, PM10, อุณหภูมิ และความชื้น) เพื่อการวัดคุณภาพอากาศอย่างครอบคลุม',
      },
      {
        en: 'Implemented AQI (Air Quality Index) calculation and Line OA alerts to notify stakeholders of hazardous conditions.',
        th: 'จัดทำการคำนวณดัชนีคุณภาพอากาศ (AQI) และการแจ้งเตือนผ่าน Line OA เพื่อเตือนผู้เกี่ยวข้องเมื่อเกิดสภาวะอันตราย',
      },
      {
        en: 'Developed exportable reporting features enabling authorities to generate documentation for environmental planning and policy decisions.',
        th: 'พัฒนาฟีเจอร์ออกรายงานที่ส่งออกได้ เพื่อให้หน่วยงานจัดทำเอกสารประกอบการวางแผนและการตัดสินใจเชิงนโยบายด้านสิ่งแวดล้อม',
      },
      {
        en: 'Delivered a system that bridges environmental-monitoring technology and practical community use, enabling data-driven responses to local air-quality issues.',
        th: 'ส่งมอบระบบที่เชื่อมเทคโนโลยีการตรวจวัดสิ่งแวดล้อมเข้ากับการใช้งานจริงในชุมชน เปิดทางให้แก้ปัญหาคุณภาพอากาศท้องถิ่นด้วยข้อมูล',
      },
    ],
    tech: ['React JS', 'Node.js', 'MySQL', 'MQTT', 'IoT sensors'],
  },
  {
    id: 'beacon',
    title: 'Beacon-based Public Announcement System',
    org: { en: 'ADC Microsystems', th: 'ADC Microsystems' },
    period: { en: '2022 – 2025', th: '2565 – 2568' },
    role: { en: 'System analyst', th: 'นักวิเคราะห์ระบบ' },
    summary: {
      en: 'Designed and developed a location-aware announcement system using Bluetooth beacon technology to deliver targeted information to users based on their physical location within facilities.',
      th: 'ออกแบบและพัฒนาระบบแจ้งประกาศตามตำแหน่ง โดยใช้เทคโนโลยี Bluetooth beacon เพื่อส่งข้อมูลที่ตรงกลุ่มถึงผู้ใช้ตามตำแหน่งจริงภายในอาคารสถานที่',
    },
    highlights: [
      {
        en: 'Architected a comprehensive web application for creating, managing, and analyzing location-based announcements.',
        th: 'ออกแบบสถาปัตยกรรมเว็บแอปพลิเคชันแบบครบวงจร สำหรับการสร้าง จัดการ และวิเคราะห์การแจ้งประกาศตามตำแหน่ง',
      },
      {
        en: 'Integrated Bluetooth Low Energy (BLE) beacon infrastructure across multiple locations (buildings, classrooms, canteens) for precise indoor positioning.',
        th: 'ติดตั้งโครงสร้าง Bluetooth Low Energy (BLE) beacon ครอบคลุมหลายพื้นที่ (อาคาร ห้องเรียน โรงอาหาร) เพื่อระบุตำแหน่งภายในอาคารได้อย่างแม่นยำ',
      },
      {
        en: 'Developed a seamless integration with the Line Messaging API and Line OA to automatically send customized notifications to users as they approach specific beacons.',
        th: 'พัฒนาการเชื่อมต่อกับ Line Messaging API และ Line OA เพื่อส่งการแจ้งเตือนเฉพาะบุคคลโดยอัตโนมัติเมื่อผู้ใช้เข้าใกล้ beacon ที่กำหนด',
      },
      {
        en: 'Created an analytics dashboard showing message effectiveness, user-engagement metrics, and traffic patterns across locations.',
        th: 'จัดทำแดชบอร์ดวิเคราะห์ที่แสดงประสิทธิภาพของข้อความ ตัวชี้วัดการมีส่วนร่วมของผู้ใช้ และรูปแบบการสัญจรในแต่ละพื้นที่',
      },
      {
        en: 'Built an intuitive interface for creating time-based and location-specific announcements, improving communication efficiency in institutional settings.',
        th: 'พัฒนาอินเทอร์เฟซที่ใช้งานง่ายสำหรับสร้างประกาศตามเวลาและตามตำแหน่ง ช่วยเพิ่มประสิทธิภาพการสื่อสารในองค์กร',
      },
    ],
    tech: ['React JS', 'Node.js', 'PostgreSQL', 'BLE', 'Line API'],
  },
  {
    id: 'smartwatch',
    title: 'Smart Watch Services',
    org: { en: 'ADC Microsystems', th: 'ADC Microsystems' },
    period: { en: '2022 – 2025', th: '2565 – 2568' },
    role: { en: 'Backend / IoT engineer', th: 'Backend / วิศวกร IoT' },
    summary: {
      en: 'Led the development of a comprehensive IoT healthcare monitoring system integrating smartwatches with backend services, focused on real-time health-data collection and analysis for medical monitoring.',
      th: 'นำการพัฒนาระบบติดตามสุขภาพ IoT แบบครบวงจรที่เชื่อมสมาร์ตวอทช์เข้ากับบริการฝั่งเซิร์ฟเวอร์ โดยเน้นการเก็บและวิเคราะห์ข้อมูลสุขภาพแบบเรียลไทม์เพื่อการติดตามด้านการแพทย์',
    },
    highlights: [
      {
        en: 'Architected and implemented a scalable backend supporting real-time data transmission from multiple smartwatch models over UDP and MQTT.',
        th: 'ออกแบบและพัฒนาระบบหลังบ้านที่รองรับการขยายตัว สำหรับรับส่งข้อมูลแบบเรียลไทม์จากสมาร์ตวอทช์หลายรุ่น ผ่าน UDP และ MQTT',
      },
      {
        en: 'Developed real-time APIs for monitoring health metrics, including heart rate, blood pressure, SpO2, and temperature.',
        th: 'พัฒนา API แบบเรียลไทม์สำหรับติดตามค่าสุขภาพ ได้แก่ ชีพจร ความดันโลหิต SpO2 และอุณหภูมิ',
      },
      {
        en: 'Designed and implemented a database schema for efficient storage and retrieval of health data, emergency alerts, and location information.',
        th: 'ออกแบบและจัดทำโครงสร้างฐานข้อมูล สำหรับจัดเก็บและเรียกใช้ข้อมูลสุขภาพ การแจ้งเตือนฉุกเฉิน และข้อมูลตำแหน่งอย่างมีประสิทธิภาพ',
      },
      {
        en: 'Created a data-processing pipeline for transforming and routing the IoT sensor data.',
        th: 'จัดทำไปป์ไลน์ประมวลผลข้อมูล สำหรับแปลงและกำหนดเส้นทางข้อมูลจากเซ็นเซอร์ IoT',
      },
      {
        en: 'Implemented an emergency alert system with SOS functionality and real-time location tracking via GPS and Wi-Fi positioning.',
        th: 'จัดทำระบบแจ้งเตือนฉุกเฉินพร้อมฟังก์ชัน SOS และการติดตามตำแหน่งแบบเรียลไทม์ด้วย GPS และ Wi-Fi',
      },
      {
        en: 'Built secure API endpoints for device management, health-data retrieval, and emergency-response coordination.',
        th: 'พัฒนา API endpoint ที่ปลอดภัย สำหรับการจัดการอุปกรณ์ การเรียกดูข้อมูลสุขภาพ และการประสานการตอบสนองเหตุฉุกเฉิน',
      },
    ],
    tech: ['Node.js', 'WebSocket', 'MQTT', 'UDP', 'Node-RED', 'PostgreSQL'],
  },
  {
    id: 'energy-management',
    title: 'Energy Management System',
    org: { en: 'ADC Microsystems', th: 'ADC Microsystems' },
    period: { en: '2022 – 2025', th: '2565 – 2568' },
    role: { en: 'System analyst', th: 'นักวิเคราะห์ระบบ' },
    highlights: [
      {
        en: 'Designed a system to collect and analyze energy-consumption data, ingesting real-time readings from energy meters and smart devices.',
        th: 'ออกแบบระบบเก็บและวิเคราะห์ข้อมูลการใช้พลังงาน โดยรับค่าจากมิเตอร์วัดพลังงานและอุปกรณ์อัจฉริยะแบบเรียลไทม์',
      },
      {
        en: 'Built a dashboard to view and analyze energy use down to the individual device.',
        th: 'พัฒนาแดชบอร์ดสำหรับดูและวิเคราะห์การใช้พลังงานลงลึกถึงรายอุปกรณ์',
      },
    ],
    tech: ['React JS', 'Node.js', 'PostgreSQL', 'MQTT', 'Energy meters', 'Smart plug / switch'],
  },
];
