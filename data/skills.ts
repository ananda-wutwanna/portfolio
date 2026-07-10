import type { Locale } from '@/lib/i18n';

export type SkillGroup = {
  id: string;
  title: Record<Locale, string>;
  tags: string[];
};

// Ordered by what leads the story: protocols, integration, and backend first
// (the control-platform / systems-integration value), then device-level
// firmware, then supporting skills.
export const skillGroups: SkillGroup[] = [
  {
    id: 'protocols',
    title: { en: 'Communication & Protocols', th: 'การสื่อสาร & โปรโตคอล' },
    tags: [
      'MQTT',
      'Modbus',
      'RS-485',
      'I2C',
      'UART / Serial',
      'TCP / UDP',
      'WebSocket',
      'REST',
      'ADC',
    ],
  },
  {
    id: 'backend',
    title: { en: 'Full-stack & Databases', th: 'Full-stack & ฐานข้อมูล' },
    tags: [
      'React',
      'TypeScript',
      'Python (FastAPI)',
      'Node.js',
      'REST API',
      'PostgreSQL',
      'MongoDB',
      'MySQL',
    ],
  },
  {
    id: 'mcu',
    title: { en: 'Microcontrollers / MCUs', th: 'ไมโครคอนโทรลเลอร์' },
    tags: [
      'ESP32',
      'Arduino',
      'Sensor integration',
      'OTA updates',
    ],
  },
  {
    id: 'rtos',
    title: { en: 'Embedded OS / RTOS', th: 'ระบบปฏิบัติการฝังตัว' },
    tags: ['FreeRTOS', 'ESP-IDF', 'Linux (basic)', 'NVS'],
  },
  {
    id: 'tooling',
    title: { en: 'Tooling', th: 'เครื่องมือ' },
    tags: [
      'PlatformIO',
      'Arduino IDE',
      'Node-RED',
      'VS Code',
      'Docker',
      'Git / GitLab CI',
    ],
  },
];
