import type { Lang } from "../i18n/ui";

export type ExperienceItem = {
    role: Record<Lang, string>;
    company: string;
    period: Record<Lang, string>;
    description: Record<Lang, string>;
    highlights: Record<Lang, string[]>;
    tags: string[];
    link?: string;
    logo?: string;
};

export const experiences: ExperienceItem[] = [
    {
        role: {
            es: "Analista Programador FullStack",
            en: "Full-Stack Developer Analyst",
            pt: "Analista Programador FullStack",
        },
        company: "Camposol",
        logo: "/images/companies/camposol.png",
        period: {
            es: "Enero 2026 - Mayo 2026",
            en: "January 2026 - May 2026",
            pt: "Janeiro 2026 - Maio 2026",
        },
        description: {
            es: "Implementación del frontend del sistema Sayta, desarrollo del backend con microservicios en Java y soporte en despliegues en la nube.",
            en: "Implementation of the frontend for the Sayta system, backend development with Java microservices, and support for cloud deployments.",
            pt: "Implementação do frontend do sistema Sayta, desenvolvimento de backend com microsserviços em Java e suporte em implantações em nuvem.",
        },
        highlights: {
            es: [
                "Realicé la implementación del frontend del sistema Sayta aplicando React y TypeScript.",
                "Desarrollé servicios del backend con Java y arquitectura de microservicios.",
                "Brindé apoyo en despliegues en la nube (Cloud).",
                "Implementé la sincronización de datos en tiempo real utilizando Firebase y Cloud Firestore.",
            ],
            en: [
                "Implemented the frontend of the Sayta system using React and TypeScript.",
                "Developed backend services using Java and a microservices architecture.",
                "Provided support for cloud infrastructure deployments.",
                "Implemented real-time data synchronization using Firebase and Cloud Firestore.",
            ],
            pt: [
                "Realizei a implementação do frontend do sistema Sayta aplicando React e TypeScript.",
                "Desenvolvi serviços de backend com Java e arquitetura de microsserviços.",
                "Prestei apoio em implantações na nuvem (Cloud).",
                "Implementei a sincronização de dados em tempo real utilizando Firebase e Cloud Firestore.",
            ],
        },
        tags: ["React", "TypeScript", "Java", "Microservicios", "Cloud", "Firebase", "Firestore"],
    },
    {
        role: {
            es: "Full-stack Developer",
            en: "Full-stack Developer",
            pt: "Full-stack Developer",
        },
        company: "Poder Judicial - Corte del Santa",
        logo: "/images/companies/cortedelsanta.png",
        period: {
            es: "Marzo 2025 - Diciembre 2025",
            en: "March 2025 - December 2025",
            pt: "Março 2025 - Dezembro 2025",
        },
        description: {
            es: "Desarrollo de soluciones institucionales con IA, automatización, PWAs y sistemas web para optimizar procesos internos.",
            en: "Development of institutional solutions with AI, automation, PWAs and web systems to optimize internal processes.",
            pt: "Desenvolvimento de soluções institucionais com IA, automação, PWAs e sistemas web para otimizar processos internos.",
        },
        highlights: {
            es: [
                "Lideré el desarrollo de IACTAS, software con IA para generación automática de actas judiciales.",
                "Desarrollé SIGETIC, plataforma web para gestión de tickets de soporte técnico.",
                "Desarrollé Olimpiadas PJ, plataforma web para digitalizar y centralizar la inscripción deportiva institucional.",
            ],
            en: [
                "Led the development of IACTAS, AI software for automatic judicial record generation.",
                "Built SIGETIC, a web platform for technical support ticket management.",
                "Developed Olimpiadas PJ, a web platform to digitize and centralize institutional sports registration.",
            ],
            pt: [
                "Liderei o desenvolvimento do IACTAS, software com IA para geração automática de atas judiciais.",
                "Desenvolvi o SIGETIC, plataforma web para gestão de tickets de suporte técnico.",
                "Desenvolvi o Olimpiadas PJ, plataforma web para digitalizar e centralizar a inscrição esportiva institucional.",
            ],
        },
        tags: ["React", "Next.js", "TypeScript", "NestJS", "MySQL", "PWA", "Gemini", "Socket.IO"],
    },
    {
        role: {
            es: "Full-stack Developer",
            en: "Full-stack Developer",
            pt: "Full-stack Developer",
        },
        company: "Xinnux",
        logo: "/images/companies/xinnux.png",
        period: {
            es: "Octubre 2023 - Febrero 2025",
            en: "October 2023 - February 2025",
            pt: "Outubro 2023 - Fevereiro 2025",
        },
        description: {
            es: "Desarrollo de plataformas web internacionales, APIs escalables, dashboards administrativos y soluciones comerciales.",
            en: "Development of international web platforms, scalable APIs, admin dashboards and commercial solutions.",
            pt: "Desenvolvimento de plataformas web internacionais, APIs escaláveis, dashboards administrativos e soluções comerciais.",
        },
        highlights: {
            es: [
                "Desarrollé el sistema SAIZ con React, Next.js y NestJS.",
                "Implementé seguimiento de leads, geolocalización de negocios y gestión de ventas.",
                "Construí APIs modulares aplicando buenas prácticas backend.",
            ],
            en: [
                "Developed the SAIZ system with React, Next.js and NestJS.",
                "Implemented lead tracking, business geolocation and sales management.",
                "Built modular APIs applying backend best practices.",
            ],
            pt: [
                "Desenvolvi o sistema SAIZ com React, Next.js e NestJS.",
                "Implementei acompanhamento de leads, geolocalização de negócios e gestão de vendas.",
                "Construí APIs modulares aplicando boas práticas backend.",
            ],
        },
        tags: ["React", "Next.js", "NestJS", "TypeScript", "Maps", "APIs"],
    },
    {
        role: {
            es: "Developer Android",
            en: "Android Developer",
            pt: "Developer Android",
        },
        company: "Marco MKT",
        logo: "/images/companies/marcomkt.png",
        period: {
            es: "Enero 2023 - Agosto 2023",
            en: "January 2023 - August 2023",
            pt: "Janeiro 2023 - Agosto 2023",
        },
        description: {
            es: "Desarrollo móvil Android aplicando arquitectura MVVM, Firebase y buenas prácticas para aplicaciones sostenibles.",
            en: "Android mobile development using MVVM architecture, Firebase and best practices for maintainable apps.",
            pt: "Desenvolvimento mobile Android usando arquitetura MVVM, Firebase e boas práticas para aplicativos sustentáveis.",
        },
        highlights: {
            es: [
                "Construí vistas Android con RecyclerView y arquitectura MVVM.",
                "Integré Firebase Authentication, Cloud Firestore, Cloud Storage y Crashlytics.",
                "Optimicé carga, recuperación de datos y monitoreo de errores.",
            ],
            en: [
                "Built Android views with RecyclerView and MVVM architecture.",
                "Integrated Firebase Authentication, Cloud Firestore, Cloud Storage and Crashlytics.",
                "Optimized data loading, retrieval and error monitoring.",
            ],
            pt: [
                "Construí telas Android com RecyclerView e arquitetura MVVM.",
                "Integrei Firebase Authentication, Cloud Firestore, Cloud Storage e Crashlytics.",
                "Otimizei carregamento, recuperação de dados e monitoramento de erros.",
            ],
        },
        tags: ["Android", "Kotlin", "Java", "Firebase", "MVVM"],
    },
];