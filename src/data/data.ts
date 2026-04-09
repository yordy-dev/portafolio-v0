import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const personalData = {
  name: "Cristian Sosa",
  initials: "CS",
  url: "#",
  location: "América Latina",
  locationLink: "#",
  description:
    "Especialista en Redes y Soporte Técnico, enfocado en mantener la conectividad empresarial segura y eficiente.",
  summary:
    "Soy un profesional especializado en redes y soporte técnico. Cuento con conocimientos en despliegue y mantenimiento de infraestructuras LAN/WAN, servicios de conectividad empresarial y análisis de logs. Constantemente me mantengo aprendiendo y actualizando mis conocimientos. ¡Pronto agregaré un resumen completo de mi CV corporativo aquí!",
  avatarUrl: "/me.png", // Reemplazaremos después con tu foto real
} as const;

export const skillsData = [
  {
    category: "Redes y Conectividad",
    skills: [
      { name: "LAN / WAN", icon: "material-symbols:router" },
      { name: "MPLS y DIA", icon: "material-symbols:settings-input-component" },
      { name: "VPN", icon: "material-symbols:vpn-lock" },
      { name: "Análisis de Logs", icon: "material-symbols:manage-search" },
    ],
  },
  {
    category: "Soporte e Infraestructura",
    skills: [
      { name: "Soporte Técnico", icon: "material-symbols:support-agent" },
      { name: "Documentación Técnica", icon: "material-symbols:description" },
      { name: "Administración IT", icon: "material-symbols:admin-panel-settings" },
    ],
  },
] as const;

export const navbarData = [
  { href: "/", icon: HomeIcon, label: "Inicio" },
] as const;

export const contactData = {
  email: "cristian.sosa.contact@gmail.com",
  tel: "+000000000",
  social: {
    GitHub: {
      name: "GitHub",
      url: "#", // Reemplazaremos luego
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "#", // Reemplazaremos luego
      icon: Icons.linkedin,
      navbar: true,
    },
    Email: {
      name: "Email",
      url: "/#contact",
      icon: Icons.email,
      navbar: false,
    },
  },
} as const;

export const experiencesData = [
  {
    company: "Nombre de tu Empresa Actual / Anterior",
    href: "#",
    location: "Tu Ciudad",
    title: "Especialista en Redes y Soporte",
    logoUrl: "", // Imagen vacía de momento
    start: "Ene 2023",
    end: "Presente",
    description: [
      "Administración y monitoreo de infraestructura de red empresarial.",
      "Análisis de eventos de red y resolución de incidencias.",
      "Elaboración de documentación técnica para procesos de conectividad.",
      "Soporte técnico directo a usuarios y mantenimiento de equipos.",
    ],
    skills: [
      "LAN / WAN",
      "Soporte Técnico",
      "MPLS",
    ],
  },
] as const;

export const educationData = [
  {
    school: "Nombre de tu Universidad o Instituto",
    href: "#",
    degree: "Título Profesional o Certificación",
    logoUrl: "", // Imagen vacía
    start: "2018",
    end: "2023",
    description: [
      "Especialización en administración de redes y telecomunicaciones.",
      "¡Pronto agregaremos más detalles de los logros académicos!",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Migración de Infraestructura de Red",
    href: "#",
    dates: "2023",
    active: true,
    description:
      "Proyecto integrador enfocado en mejorar las métricas de latencia, escalabilidad y la administración de logs empresariales.",
    detailedDescription: "Detalles completos sobre cómo se elaboró la arquitectura. Pronto se actualizará esta sección.",
    keyFeatures: [
      "Implementación de conectividad segura",
      "Gestión y actualización del cableado estructurado",
      "Generación de reportes de análisis de red",
    ],
    technologies: [
      { name: "LAN/WAN", icon: "material-symbols:router" },
      { name: "Soporte Técnico", icon: "material-symbols:support-agent" },
    ],
    links: [
      {
        type: "Más detalles",
        href: "#",
        icon: "globe",
      },
    ],
    image: "", // Placeholder
    images: [],
    video: "",
  },
] as const;
