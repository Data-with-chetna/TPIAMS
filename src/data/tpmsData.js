export const tpmsData = {
  company: {
    name: "Shroti Telecom Pvt. Ltd.",
    product: "TPMS",
    fullName: "Theft Prevention Management System",
    description: "Smart IoT-based Security & Monitoring Platform for Telecom Infrastructure"
  },
  stats: [
    { label: "Total Sites", value: "9067", icon: "Server" },
    { label: "Active Sites", value: "8319", icon: "Activity" },
    { label: "Non-Communication Sites", value: "748", icon: "WifiOff" }
  ],
  products: [
    {
      name: "TPMS Edge Controller",
      category: "Main Controller",
      description: "Industrial-grade IoT gateway with RL78 Processor, 48V DC, GSM/4G/RS485.",
      image: "./images/tpms-device.png"
    },
    {
      name: "Weatherproof Enclosure",
      category: "Protective Case",
      description: "Rugged IP-rated outdoor enclosure ensuring the safety of TPMS units in harsh climates.",
      image: "/images/tpms-outside.jpg"
    },
    {
      name: "Smoke & Fire Detector",
      category: "Safety Sensor",
      description: "Early warning photoelectric smoke detection system for instant fire alerts.",
      image: "/images/fire-smoke-sensor.jpg"
    }
  ],
  alarms: {
    siteStatusAndHealth: [
      "Total Sites",
      "Active Sites",
      "Non-Communication Sites",
      "Internal Battery Status",
      "Low 48 VDC Fail",
      "System Cover Open",
      "Hooter Status"
    ],
    theftManagement: [
      "Battery Bank Disconnect (BB 1 to BB 4)",
      "BTS Cabinet Open",
      "RRU Disconnect",
      "Solar Panel Disconnect",
      "TPIAMS Cover Open",
      "Door Open",
      "Motion Sensor"
    ],
    alarmManagement: [
      "EB DG Interchanged",
      "Mains Fail",
      "DG On Load",
      "DG Fail to Start",
      "Site on Battery",
      "Battery Low Voltage",
      "Door Open and Fire & Smoke",
      "HRT (High Room Temperature)",
      "Rectifier Fail",
      "Motion Detection",
      "All ports are dynamic and configurable"
    ],
    energyManagement: [
      "EB DG Interchanged",
      "Sites on EB (KWH, RHrs)",
      "Sites on DG (KWH, RHrs)",
      "Sites on Battery (KWH, RHrs)",
      "Daily/Monthly Consumption Report"
    ],
    features: [
      "Dynamic Configuration",
      "WhatsApp Alerts",
      "Robo Call Alerts",
      "Multi-level escalation"
    ]
  },
  features: [
    { title: "Theft Detection", icon: "ShieldAlert" },
    { title: "Real-Time Monitoring", icon: "Activity" },
    { title: "WhatsApp Alerts", icon: "MessageCircle" },
    { title: "Voice Alerts", icon: "Mic" },
    { title: "Self Health Monitoring", icon: "HeartPulse" }
  ],
  architecture: [
    { layer: "L1", name: "Field Layer", desc: "Sensors & Detectors", icon: "Radio" },
    { layer: "L2", name: "Control Layer", desc: "TPIAMS Controller", icon: "Cpu" },
    { layer: "L3", name: "Communication Layer", desc: "GSM / 4G / RS485", icon: "Wifi" },
    { layer: "L4", name: "Cloud Layer", desc: "Data Processing", icon: "Cloud" },
    { layer: "L5", name: "Monitoring Layer", desc: "SOC Dashboard", icon: "Monitor" }
  ],
  hardware: [
    "RL78 Processor",
    "48V DC Supply",
    "24 hr Backup",
    "16 Alarm Ports",
    "GSM / 4G / RS485",
    "125 dB Hooter"
  ],
  energy: [
    "EB / DG / Battery Run Hours",
    "KWH Monitoring",
    "Daily / Monthly Reports",
    "Diesel theft detection"
  ],
  soc: [
    "24x7 monitoring",
    "Live alarm tracking",
    "Instant escalation"
  ],
  clients: [
    "Tata Communication",
    "Tower Vision",
    "Unity Digital",
    "Vodafone",
    "Genius Tele Infra",
    "Husk Power",
    "Indus Towers",
    "Cloud Extel",
    "Crest Digitel",
    "Airtel"
  ],
  achievements: [
    { title: "30,000+", desc: "Sites Deployed" },
    { title: "16,000+", desc: "Telecom Towers" },
    { title: "452+", desc: "Battery Banks Saved" },
    { title: "2000+", desc: "APEC Region" }
  ],
  aboutShroti: "TPIAMS (Theft Prevention & Intelligent Alarm Monitoring System) is a system designed to check the parameter of telecom sites & protect your telecom sites from theft and vandalism.At Shroti Telecom, we take pride in offering cutting-edge solutions to safeguard the active and passive assets of the telecommunications industry.",
  detailedIntro: "TPIAMS is an advanced security solution engineered for the telecom sector to eliminate the risks of theft and unauthorized asset access. Whether protecting physical equipment, site infrastructure, or critical data, TPIAMS delivers continuous, intelligent monitoring to safeguard your assets against tampering and security breaches.",
  detailedFeatures: [
    {
      title: "1. Intelligent Theft Detection",
      description: "TPIAMS uses advanced AI-powered sensors and smart alarm systems to instantly detect theft attempts, tower tampering, vibration, and unauthorized access.."
    },
    {
      title: "2. Real-Time Alerts & Notifications",
      description: "The system sends immediate alerts through SMS, email, dashboard notifications, and sirens, helping security teams respond quickly during emergencies.."
    },
    {
      title: "3. Multi-Sensor Security Protection",
      description: "The platform integrates vibration sensors, motion detectors, smoke sensors, temperature monitoring, and smart cameras for complete site protection.."
    },
    {
      title: "4. Customized Security Solutions",
      description: "We understand that every telecom environment is unique. That's why TPIAMS offers customizable security configurations tailored to your specific needs and requirements, ensuring optimal protection without unnecessary complexity."
    },
    {
      title: "5. Trusted by Industry Leaders",
      description: "TPIAMS has earned the trust of industry leaders, including ATC, Indus, and Airtel, who have chosen our solution to safeguard their critical assets. Our track record of successful implementations and satisfied customers speaks volumes about the reliability and effectiveness of TPIAMS."
    }
  ],
  whyChooseTPMS: [
    {
      title: "1. Proven Performance",
      description: "With 8 years of successful operation and numerous satisfied customers, TPIAMS has consistently delivered results, protecting assets and minimizing losses."
    },
    {
      title: "2. Industry Expertise",
      description: "Backed by our team of telecom industry experts, TPIAMS is built to address the unique security challenges faced by telecom operators, ensuring robust protection and peace of mind."
    },
    {
      title: "3. Scalability and Flexibility",
      description: "Whether you operate a small local network or a nationwide infrastructure, TPIAMS can scale seamlessly to meet your evolving security needs, offering flexibility and versatility without compromising on performance."
    }
  ],
  getStartedQuote: "Protect your telecom assets with the industry-leading security solution – TPIAMS from Shroti Telecom. Join the ranks of satisfied customers and experience peace of mind knowing that your assets are safeguarded against theft and unauthorized access.",
  keyBenefits: [
    "Real-time site status updates",
    "Theft and operation alarms",
    "Detailed alarm reports",
    "Energy consumption analysis",
    "Run hour monitoring"
  ]
};