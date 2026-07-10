import type { Locale } from '@/lib/i18n';

type L = Record<Locale, string>;

export type Role = {
  title: L;
  period: L;
  detail: L;
};

export type ExperienceEntry = {
  id: string;
  org: L;
  period: L;
  current?: boolean;
  roles: Role[];
};

export const experience: ExperienceEntry[] = [
  {
    id: 'civic-agrotech',
    org: { en: 'Civic Agrotech', th: 'Civic Agrotech' },
    period: { en: 'Oct 2025 – Present', th: 'ต.ค. 2568 – ปัจจุบัน' },
    current: true,
    roles: [
      {
        title: { en: 'IoT Imagineer', th: 'IoT Imagineer' },
        period: { en: 'Oct 2025 – Present', th: 'ต.ค. 2568 – ปัจจุบัน' },
        detail: {
          en: 'Design and develop the IoT and firmware stack for an automated Plant Factory with Artificial Lighting — RGV, lifts, valves, nutrient-mixing, and the control platform.',
          th: 'ออกแบบและพัฒนาระบบ IoT และเฟิร์มแวร์สำหรับโรงงานปลูกพืชแนวตั้งอัตโนมัติ — RGV, lift, วาล์ว, ระบบผสมสารอาหาร และแพลตฟอร์มควบคุม',
        },
      },
    ],
  },
  {
    id: 'edvisory',
    org: { en: 'Edvisory', th: 'Edvisory' },
    period: { en: '2025 – Oct 2025', th: '2568 – ต.ค. 2568' },
    roles: [
      {
        title: { en: 'Software Analyst', th: 'Software Analyst' },
        period: { en: '2025 – Oct 2025', th: '2568 – ต.ค. 2568' },
        detail: {
          en: 'Evaluated technical feasibility with PO/BA and UX/UI; wrote SRS sections (swimlane, API docs, ER); handled planning, testing, and user training.',
          th: 'ประเมินความเป็นไปได้ทางเทคนิคร่วมกับ PO/BA และ UX/UI; เขียน SRS (swimlane, API, ER); วางแผน ทดสอบ และเทรนผู้ใช้',
        },
      },
    ],
  },
  {
    id: 'adc',
    org: { en: 'ADC Microsystems', th: 'ADC Microsystems' },
    period: { en: '2020 – 2025', th: '2563 – 2568' },
    roles: [
      {
        title: { en: 'Software Analyst', th: 'Software Analyst' },
        period: { en: '2022 – 2025', th: '2565 – 2568' },
        detail: {
          en: 'Analyzed and designed systems from requirements and designed their architecture.',
          th: 'วิเคราะห์และออกแบบระบบจาก requirement พร้อมออกแบบ architecture',
        },
      },
      {
        title: { en: 'Project Coordinator', th: 'Project Coordinator' },
        period: { en: '2021 – 2022', th: '2564 – 2565' },
        detail: {
          en: 'Coordinated the dev team across concurrent projects for on-time delivery.',
          th: 'ประสานทีมพัฒนาในหลายโปรเจกต์พร้อมกัน เพื่อส่งงานตรงเวลา',
        },
      },
      {
        title: { en: 'IoT Developer', th: 'IoT Developer' },
        period: { en: '2020 – 2021', th: '2563 – 2564' },
        detail: {
          en: 'Built IoT systems from prototype to production, with on-site testing and troubleshooting.',
          th: 'พัฒนาและติดตั้งระบบ IoT จาก prototype สู่ production พร้อมทดสอบและแก้ปัญหาหน้างานจริง',
        },
      },
    ],
  },
];
