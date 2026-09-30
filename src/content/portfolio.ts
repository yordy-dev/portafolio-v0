export type NavigationIconName = "home";
export type SocialIconName = "cv" | "email" | "github" | "linkedin";

export interface ProjectLink {
  type: string;
  href: string;
  icon: "github" | "globe";
}
export interface ProjectTechnology {
  name: string;
  icon?: string;
}
export interface Project {
  title: string;
  context: string;
  description: string;
  detailedDescription: string;
  keyFeatures: readonly string[];
  technologies: readonly ProjectTechnology[];
  links: readonly ProjectLink[];
  images: readonly string[];
}

export const personalData = {
  name: "Yordy Kenyi Almerco Solis",
  initials: "YA",
  description:
    "Estudiante de Ingeniería de Sistemas con experiencia en soporte TI y enfoque en redes.",
  summary:
    "Soy estudiante de Ingeniería de Sistemas e Informática con experiencia en soporte TI y enfoque en redes. He brindado asistencia técnica a usuarios y apoyado la configuración de redes LAN/WiFi. Complemento mi experiencia con proyectos de monitoreo, gestión de incidencias y laboratorios de redes. Siempre busco aprender, mejorar y seguir creciendo en el área de redes y ciberseguridad.",
} as const;

export const habilidadesData = [
  "Soporte TI N1/N2",
  "Diagnóstico de incidencias",
  "Mantenimiento de equipos",
  "LAN/WiFi",
  "Routers básicos",
  "Windows",
  "Linux básico",
  "AnyDesk",
  "TeamViewer",
  "GLPI",
  "PowerShell",
  "Git",
  "Java",
  "Python básico",
  "Excel",
] as const;
export const skillsData = [
  {
    category: "Soporte y herramientas TI",
    skills: habilidadesData.map((name) => ({
      name,
      icon: "material-symbols:build-outline",
    })),
  },
];
export const navbarData = [
  { href: "/", icon: "home" satisfies NavigationIconName, label: "Inicio" },
] as const;

export const contactData = {
  email: "yordy.k.almerco@gmail.com",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/yordy-dev",
      icon: "github" satisfies SocialIconName,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yordy-almerco/",
      icon: "linkedin" satisfies SocialIconName,
      navbar: true,
    },
    Curriculum: {
      name: "Ver CV",
      url: "/documents/cv-yordy-almerco.pdf",
      icon: "cv" satisfies SocialIconName,
      navbar: true,
    },
    Email: {
      name: "Correo",
      url: "mailto:yordy.k.almerco@gmail.com",
      icon: "email" satisfies SocialIconName,
      navbar: false,
    },
  },
} as const;

export const experiencesData = [
  {
    company: "Importaciones YyF",
    logo: "/institutions/importaciones-yyf.png",
    href: "#work",
    location: "Lima, Perú",
    title: "Auxiliar de Soporte TI",
    start: "2023",
    end: "2024",
    description: [
      "Diagnóstico y mantenimiento preventivo y correctivo de PC y laptops, contribuyendo a reducir las incidencias en un 25 %.",
      "Instalación, configuración y actualización de software corporativo.",
      "Soporte remoto y presencial de nivel 1 y 2 para más de 20 colaboradores.",
      "Apoyo en la administración de la red LAN/WiFi y configuración básica de routers.",
      "Mejoras de infraestructura TI y optimización de recursos y tiempos de atención.",
    ],
    skills: [
      "Soporte TI N1/N2",
      "Windows",
      "LAN/WiFi",
      "AnyDesk",
      "TeamViewer",
    ],
  },
] as const;

export const educationData = [
  {
    id: "utp",
    school: "Universidad Tecnológica del Perú (UTP)",
    initials: "UTP",
    logo: "/institutions/utp.png",
    degree: "Ingeniería de Sistemas e Informática",
    period: "2022 - Actualidad",
    description: [
      "Lima, Perú · 7.º ciclo · 70 % completado.",
      "Idiomas: español nativo e inglés básico para lectura técnica.",
    ],
  },
  {
    id: "cisco",
    school: "Cisco Networking Academy",
    initials: "Cisco",
    icon: "simple-icons:cisco",
    degree: "Formación en redes y ciberseguridad · 3 cursos",
    period: "2026 - 2026",
    courses: [
      {
        id: "cisco-redes",
        title: "CCNA: Introducción a las redes",
        issued: "Emitido el 9 de julio de 2026",
        description: [
          "Configuración de switches y routers, direccionamiento IPv4 e IPv6, Ethernet, modelo OSI y diagnóstico de conectividad en redes pequeñas.",
          "Acredita la finalización del curso CCNA: Introduction to Networks, no la certificación profesional CCNA.",
        ],
      },
      {
        id: "cisco-ciberseguridad",
        title: "Introducción a la ciberseguridad",
        issued: "Emitido el 25 de agosto de 2026",
        description: [
          "Fundamentos de seguridad en línea, amenazas, ataques y vulnerabilidades; protección de personas y organizaciones.",
          "Acredita la finalización del curso Introduction to Cybersecurity.",
        ],
      },
      {
        id: "cisco-seguridad-terminales",
        title: "Seguridad de Terminales",
        issued: "Emitido el 30 de septiembre de 2026",
        description: [
          "Fundamentos para proteger equipos finales frente a amenazas, vulnerabilidades y ataques comunes.",
          "Curso ofrecido por la UTP Virtual a través de Cisco Networking Academy.",
        ],
      },
    ],
  },
  {
    id: "uni",
    school: "Universidad Nacional de Ingeniería (UNI)",
    initials: "UNI",
    logo: "/institutions/uni.png",
    degree:
      "Formación en computación en la nube y análisis de datos · 2 cursos",
    period: "2025 - 2025",
    courses: [
      {
        id: "uni-cloud",
        title: "Cloud Computing: AWS, Azure y Google Cloud",
        issued: "Emitido en septiembre de 2025 · 24 horas",
        description: [
          "Oficina de Tecnologías de la Información · Programa de Iniciación Tecnológica PIT 2025.",
          "Realizado del 31 de julio al 26 de agosto de 2025.",
          "Servicios de cómputo, redes y almacenamiento en la nube; identidad, seguridad, administración de costos y laboratorio de despliegue.",
        ],
      },
      {
        id: "uni-excel",
        title: "Análisis de datos con Excel",
        issued: "Emitido en agosto de 2025 · 16 horas",
        description: [
          "Oficina de Tecnologías de la Información · Programa de Iniciación Tecnológica PIT 2025.",
          "Realizado del 30 de julio al 8 de agosto de 2025.",
        ],
      },
    ],
  },
  {
    id: "forge",
    school: "Fundación Forge",
    initials: "Forge",
    logo: "/institutions/forge.png",
    degree: "Formación en habilidades personales y laborales · 4 certificados",
    period: "2024 - 2024",
    courses: [
      {
        id: "forge-liderazgo",
        title: "Liderazgo personal",
        issued: "Certificación 2024",
        description: [
          "Autoconocimiento, reconocimiento de fortalezas, autoeficacia y determinación.",
        ],
      },
      {
        id: "forge-logro",
        title: "Orientación al logro",
        issued: "Certificación 2024",
        description: [
          "Organización de tareas, planificación de entregas y autorregulación emocional.",
        ],
      },
      {
        id: "forge-equipo",
        title: "Trabajo en equipo",
        issued: "Certificación 2024",
        description: [
          "Cooperación, empatía, autoevaluación y mejora continua.",
        ],
      },
      {
        id: "forge-aprendizaje",
        title: "Compromiso con el aprendizaje",
        issued: "Certificación 2024",
        description: [
          "Identificación de aspectos de mejora, acciones concretas y presentación de evidencias.",
        ],
      },
    ],
  },
] as const;

export const projectsData: readonly Project[] = [
  {
    title: "Mesa de ayuda con GLPI",
    context: "Laboratorio de soporte TI",
    description:
      "Mesa de ayuda sobre Ubuntu Server con perfiles, categorías de incidencias, grupos de soporte y acuerdos de nivel de servicio. Incluye diez tickets simulados documentados.",
    detailedDescription:
      "Implementé un laboratorio de mesa de ayuda con GLPI sobre Ubuntu Server y un entorno Apache, MariaDB y PHP. Configuré una organización de tres sedes simuladas, grupos de soporte y perfiles de usuario. Documenté el ciclo de atención de diez tickets simulados, desde su clasificación hasta el cierre con evidencias.",
    keyFeatures: [
      "Organización de tres sedes simuladas: Lima, Arequipa y Trujillo.",
      "Grupos de mesa de ayuda, soporte N2 e infraestructura.",
      "Clasificación y asignación de incidencias por categoría.",
      "Acuerdos de nivel de servicio y seguimiento de tickets.",
      "Documentación de instalación y configuración con capturas.",
    ],
    technologies: [
      { name: "GLPI", icon: "material-symbols:confirmation-number-outline" },
      { name: "Ubuntu", icon: "logos:ubuntu" },
      { name: "Apache", icon: "logos:apache" },
      { name: "MariaDB", icon: "logos:mariadb-icon" },
      { name: "PHP", icon: "logos:php" },
    ],
    links: [
      {
        type: "GitHub",
        href: "https://github.com/yordy-dev/GLPI-HelpDesk-Projecto",
        icon: "github",
      },
    ],
    images: [
      "/projects/glpi-categorias.png",
      "/projects/glpi-grupos.png",
      "/projects/glpi-slas.png",
    ],
  },
  {
    title: "Monitoreo de Windows y alertas a Discord",
    context: "Automatización de soporte TI",
    description:
      "Sistema en PowerShell que supervisa CPU, memoria, disco y servicios de Windows, genera registros diarios y envía alertas según umbrales configurados.",
    detailedDescription:
      "Desarrollé un sistema de monitoreo para Windows que consulta recursos del equipo y el estado de servicios. El script registra las métricas y envía notificaciones a Discord mediante webhooks. Incluye configuración de umbrales, control del intervalo entre alertas y un script para programar su ejecución.",
    keyFeatures: [
      "Consulta de CPU, RAM y espacio libre en disco.",
      "Comprobación de servicios de Windows.",
      "Alertas a Discord según umbrales configurables.",
      "Registro diario de métricas y eventos.",
      "Ejecución automatizada mediante el Programador de tareas.",
    ],
    technologies: [
      { name: "PowerShell", icon: "logos:powershell" },
      { name: "Windows", icon: "logos:microsoft-windows-icon" },
      { name: "CIM", icon: "material-symbols:monitoring" },
      { name: "Discord", icon: "logos:discord-icon" },
    ],
    links: [
      {
        type: "GitHub",
        href: "https://github.com/yordy-dev/MonitoreoSistema-TI",
        icon: "github",
      },
    ],
    images: ["/projects/monitor-cpu.png", "/projects/monitor-servicios.png"],
  },
  {
    title: "Red segmentada con VLAN y control de acceso",
    context: "Laboratorio de redes en EVE-NG",
    description:
      "Red simulada para cuatro áreas, con enrutamiento entre VLAN, asignación DHCP y políticas de acceso mediante ACL. Incluye documentación de VPN y monitoreo SNMP.",
    detailedDescription:
      "Diseñé y configuré una red simulada en EVE-NG con imágenes Cisco IOS. La topología separa Administración, Ventas, Invitados y TI mediante VLAN, con enrutamiento entre segmentos y DHCP. El repositorio incluye configuraciones de router y switch, documentación de VPN y SNMP, y un registro de las pruebas realizadas en el laboratorio.",
    keyFeatures: [
      "Segmentación de cuatro áreas mediante VLAN.",
      "Enrutamiento inter-VLAN con Router-on-a-Stick.",
      "Pools DHCP para asignación de direcciones.",
      "ACL para controlar el acceso entre segmentos.",
      "Documentación de VPN, SNMP y pruebas de conectividad.",
    ],
    technologies: [
      { name: "Cisco IOS", icon: "simple-icons:cisco" },
      { name: "EVE-NG", icon: "material-symbols:lan-outline" },
      { name: "VLAN" },
      { name: "DHCP" },
      { name: "ACL" },
      { name: "SNMP" },
    ],
    links: [
      {
        type: "GitHub",
        href: "https://github.com/yordy-dev/Proyecto-Red-Corporativa",
        icon: "github",
      },
    ],
    images: [
      "/projects/red-topologia.png",
      "/projects/red-vlans.png",
      "/projects/red-acls.png",
    ],
  },
  {
    title: "Sistema de gestión de inventario",
    context: "Proyecto académico en equipo · UTP, 2026",
    description:
      "Aplicación de escritorio en Java para gestionar productos, categorías y movimientos de stock, aplicando patrones de diseño y separación de responsabilidades.",
    detailedDescription:
      "Participé en un proyecto académico en equipo de la UTP para desarrollar un sistema de inventario en Java Swing. La aplicación organiza la interfaz, la lógica de negocio y los repositorios mediante patrones de diseño. Permite gestionar productos y movimientos, con alertas de stock y roles de usuario. La persistencia actual utiliza repositorios en memoria.",
    keyFeatures: [
      "Gestión de productos y categorías.",
      "Registro de entradas y salidas de inventario.",
      "Alertas de stock mínimo.",
      "Roles de administrador y almacenero.",
      "Aplicación de Command, Observer, Facade, Factory y Proxy.",
    ],
    technologies: [
      { name: "Java", icon: "logos:java" },
      { name: "Swing" },
      { name: "Apache Ant" },
      { name: "Patrones de diseño" },
    ],
    links: [
      {
        type: "GitHub",
        href: "https://github.com/yordy-dev/Sistema_de_Inventario",
        icon: "github",
      },
    ],
    images: ["/projects/inventario-clases.png"],
  },
  {
    title: "Mundo Electrónico",
    context: "Catálogo web comercial",
    description:
      "Catálogo de electrónica y electrodomésticos con búsqueda, filtros, fichas de producto y consultas por WhatsApp.",
    detailedDescription:
      "Desarrollé una web comercial para presentar el catálogo de una tienda de electrónica y electrodomésticos. El proyecto organiza datos de producto, búsqueda y filtros, fichas con información técnica y acceso a consultas por WhatsApp. Incluye diseño adaptable, SEO y un flujo de procesamiento y revisión de imágenes. El código fuente se mantiene en un repositorio privado.",
    keyFeatures: [
      "Búsqueda y filtros de productos.",
      "Fichas individuales y galerías de imágenes.",
      "Consultas directas por WhatsApp.",
      "Diseño adaptable a escritorio y móvil.",
      "SEO y procesamiento de imágenes del catálogo.",
    ],
    technologies: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "React", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "Vercel", icon: "simple-icons:vercel" },
    ],
    links: [
      {
        type: "Ver sitio",
        href: "https://mundoelectronico.vercel.app/",
        icon: "globe",
      },
    ],
    images: [
      "/projects/mundo-electronico-inicio.png",
      "/projects/mundo-electronico-catalogo.png",
    ],
  },
];
