<p align="center">
  <img
    width="100%"
    src="https://capsule-render.vercel.app/api?type=waving&color=0:020617,45:0f172a,100:2563eb&height=230&section=header&text=Yordy%20Almerco&fontSize=44&fontColor=F8FAFC&animation=fadeIn&fontAlignY=34&desc=PORTAFOLIO%20WEB%20%E2%80%94%20REDES%20%C2%B7%20SOPORTE%20TI%20%C2%B7%20CIBERSEGURIDAD&descAlignY=55&descSize=15"
    alt="Yordy Almerco - Portafolio Web"
  />
</p>

<p align="center">
  <img
    src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&weight=500&size=18&duration=2800&pause=900&color=3B82F6&center=true&vCenter=true&width=680&lines=Especialista+en+Redes+y+Soporte+T%C3%A9cnico;Experiencia+profesional+%2B+proyectos+reales;Next.js+%C2%B7+TypeScript+%C2%B7+Tailwind+%C2%B7+Framer+Motion"
    alt="Presentación animada"
  />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-Animations-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

<br />

## Sobre este proyecto

Este repositorio contiene mi **portafolio web profesional**, diseñado para presentar de forma clara mi perfil en **Redes, Soporte Técnico y Ciberseguridad**, junto con mi experiencia, formación, habilidades y proyectos.

El objetivo no es funcionar como una plantilla para descargar, sino como una **presentación técnica y visual de mi trabajo**: qué he realizado, qué tecnologías manejo y cómo fue construido el propio portafolio.

> El contenido profesional se mantiene separado de la interfaz para que la información pueda evolucionar sin romper la estructura visual del sitio.

---

## Qué presenta el portafolio

| Sección | Contenido |
| :--- | :--- |
| **Hero** | Presentación principal, especialidad y accesos rápidos. |
| **Sobre mí** | Perfil profesional y enfoque actual. |
| **Experiencia** | Trabajo realizado en soporte TI, mantenimiento y redes. |
| **Formación** | Universidad, cursos y certificaciones técnicas. |
| **Habilidades** | Herramientas y tecnologías relacionadas con soporte, redes y sistemas. |
| **Proyectos** | Casos prácticos con descripción, tecnologías, evidencias e imágenes. |
| **Contacto** | GitHub, LinkedIn, correo y acceso al CV. |

---

## Cómo fue construido

El portafolio se desarrolló con una arquitectura modular para mantener separadas la **presentación**, la **lógica de cada sección** y la **información profesional**.

```text
portafolio-v0/
│
├── src/
│   ├── app/                 → rutas y composición de páginas con Next.js
│   ├── components/
│   │   ├── motion/          → animaciones y componentes interactivos
│   │   ├── shared/          → navegación, tema e iconografía
│   │   └── ui/              → componentes visuales reutilizables
│   │
│   ├── content/
│   │   └── portfolio.ts     → datos del perfil, experiencia y proyectos
│   │
│   ├── features/
│   │   ├── portfolio/       → hero, about, experiencia, educación y skills
│   │   ├── projects/        → tarjetas, enlaces y modal de proyectos
│   │   ├── contact/         → sección de contacto
│   │   └── blog/            → soporte para contenido MDX
│   │
│   └── lib/                 → utilidades compartidas
│
├── public/
│   ├── documents/           → CV
│   ├── institutions/        → recursos visuales de instituciones
│   └── projects/            → capturas y evidencias de proyectos
│
└── content/                 → contenido MDX
```

### Flujo de la aplicación

```mermaid
flowchart LR
    A["src/content/portfolio.ts<br/>Datos profesionales"] --> B["Features<br/>Secciones del portafolio"]
    C["components/ui<br/>Sistema visual"] --> B
    D["components/motion<br/>Interacciones"] --> B
    E["public/<br/>Imágenes y documentos"] --> B
    B --> F["src/app/page.tsx<br/>Composición principal"]
    F --> G["Portafolio Web"]
```

---

## Experiencia visual

El diseño del sitio busca mantener una estética profesional y tecnológica sin sobrecargar la interfaz.

- **Diseño responsive** para escritorio y dispositivos móviles.
- **Tema claro y oscuro** mediante `next-themes`.
- **Animaciones de entrada** y transiciones con Framer Motion.
- **Blur Fade** para revelar contenido de forma progresiva.
- **Dock de navegación flotante** para accesos rápidos.
- **Tarjetas reutilizables** para experiencia, educación y proyectos.
- **Modales de proyectos** con descripción ampliada, tecnologías y evidencias.
- **Iconografía dinámica** con Iconify, Lucide y React Icons.
- **Contenido estructurado** para evitar mezclar datos profesionales con componentes visuales.

---

## Stack tecnológico

<p align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,git,github&theme=dark" alt="Tecnologías principales" />
</p>

| Tecnología | Uso dentro del proyecto |
| :--- | :--- |
| **Next.js** | App Router, rutas y estructura general del portafolio. |
| **React** | Construcción de componentes y composición de la interfaz. |
| **TypeScript** | Tipado de datos, componentes y estructuras del proyecto. |
| **Tailwind CSS** | Sistema de estilos responsive y diseño visual. |
| **Framer Motion / Motion** | Animaciones, transiciones y microinteracciones. |
| **Radix UI** | Base accesible para componentes de interfaz. |
| **Iconify / Lucide / React Icons** | Sistema de iconos para tecnologías y navegación. |
| **next-themes** | Gestión de tema claro y oscuro. |
| **MDX / React Markdown** | Base para contenido técnico y publicaciones. |
| **Shiki / Rehype** | Preparación para renderizado de contenido técnico con código. |

---

## Proyectos presentados

El portafolio no se limita a mostrar tecnologías: incluye proyectos con contexto, problema abordado, implementación y evidencias.

| Proyecto | Enfoque | Tecnologías principales |
| :--- | :--- | :--- |
| **Mesa de ayuda con GLPI** | Gestión de incidencias y soporte TI | GLPI, Ubuntu, Apache, MariaDB, PHP |
| **Monitoreo de Windows y alertas** | Automatización y observabilidad | PowerShell, Windows, CIM, Discord |
| **Red segmentada con VLAN** | Redes empresariales y control de acceso | Cisco IOS, EVE-NG, VLAN, DHCP, ACL, SNMP |
| **Sistema de gestión de inventario** | Aplicación académica de escritorio | Java, Swing, Apache Ant, patrones de diseño |
| **Mundo Electrónico** | Catálogo web comercial | Next.js, React, TypeScript, Tailwind, Vercel |

Las tarjetas de proyectos muestran capturas reales almacenadas en `public/projects` y permiten ampliar la información mediante un modal dedicado.

---

## Organización de la página principal

La página principal se compone de forma secuencial desde `src/app/page.tsx`:

```text
Hero
  ↓
Sobre mí
  ↓
Experiencia
  ↓
Educación
  ↓
Habilidades
  ↓
Proyectos
  ↓
Contacto
```

Cada bloque vive como una característica independiente dentro de `src/features`, lo que permite modificar una sección sin alterar innecesariamente las demás.

---

## Diseño del contenido

La información principal del portafolio se centraliza en:

```text
src/content/portfolio.ts
```

Desde este archivo se administran datos como:

- perfil profesional;
- experiencia laboral;
- educación y cursos;
- habilidades;
- enlaces de contacto;
- proyectos;
- tecnologías;
- imágenes y evidencias.

Este enfoque permite que los componentes se enfoquen en **cómo mostrar la información**, mientras que el archivo de contenido define **qué información mostrar**.

---

## Contacto

<p align="center">
  <a href="https://github.com/yordy-dev">
    <img src="https://img.shields.io/badge/GitHub-yordy--dev-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/yordy-almerco/">
    <img src="https://img.shields.io/badge/LinkedIn-Yordy_Almerco-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:yordy.k.almerco@gmail.com">
    <img src="https://img.shields.io/badge/Email-Contacto-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

<br />

<p align="center">
  <sub>
    Diseñado y desarrollado como representación digital de mi perfil profesional y de los proyectos que forman parte de mi crecimiento en TI.
  </sub>
</p>

<p align="center">
  <img
    width="100%"
    src="https://capsule-render.vercel.app/api?type=waving&color=0:2563eb,50:0f172a,100:020617&height=120&section=footer"
    alt=""
  />
</p>
