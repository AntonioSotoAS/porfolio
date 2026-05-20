import type { Lang } from "../i18n/ui";

export type Project = {
    title: Record<Lang, string>;
    description: Record<Lang, string>;
    category: Record<Lang, string>;
    year: string;
    status: Record<Lang, string>;
    tags: string[];
    image: string;
    href?: string;
    github?: string;
};

export const projects: Project[] = [
    {
        title: {
            es: "IACTAS",
            en: "IACTAS",
            pt: "IACTAS",
        },
        description: {
            es: "Plataforma con inteligencia artificial para generar actas judiciales automatizadas a partir de transcripciones de audiencias.",
            en: "AI-powered platform for automatically generating judicial records from hearing transcriptions.",
            pt: "Plataforma com inteligência artificial para gerar atas judiciais automaticamente a partir de transcrições de audiências.",
        },
        category: {
            es: "IA aplicada",
            en: "Applied AI",
            pt: "IA aplicada",
        },
        year: "2025",
        status: {
            es: "Proyecto institucional",
            en: "Institutional project",
            pt: "Projeto institucional",
        },
        tags: ["Next.js", "React", "Gemini", "PWA", "IA"],
        image: "/projects/iactas.jpg",
        href: "#",
        github: "#",
    },
    {
        title: {
            es: "SIGETIC",
            en: "SIGETIC",
            pt: "SIGETIC",
        },
        description: {
            es: "Sistema web para la gestión de tickets de soporte técnico, seguimiento de incidencias y atención institucional.",
            en: "Web system for managing technical support tickets, incident tracking and institutional assistance.",
            pt: "Sistema web para gestão de tickets de suporte técnico, acompanhamento de incidentes e atendimento institucional.",
        },
        category: {
            es: "Sistema web",
            en: "Web system",
            pt: "Sistema web",
        },
        year: "2025",
        status: {
            es: "En producción",
            en: "In production",
            pt: "Em produção",
        },
        tags: ["Python", "Django", "PWA", "Tickets", "Soporte"],
        image: "/projects/sigetic.jpg",
        href: "#",
        github: "#",
    },
    {
        title: {
            es: "SACPJ",
            en: "SACPJ",
            pt: "SACPJ",
        },
        description: {
            es: "Solución para automatizar corrección de exámenes y control de asistencia usando visión por computadora.",
            en: "Solution for automating exam grading and attendance control using computer vision.",
            pt: "Solução para automatizar correção de provas e controle de presença usando visão computacional.",
        },
        category: {
            es: "Visión por computadora",
            en: "Computer vision",
            pt: "Visão computacional",
        },
        year: "2025",
        status: {
            es: "Prototipo funcional",
            en: "Functional prototype",
            pt: "Protótipo funcional",
        },
        tags: ["Python", "OpenCV", "Django", "Automatización"],
        image: "/projects/sacpj.jpg",
        href: "#",
        github: "#",
    },
    {
        title: {
            es: "SAIZ",
            en: "SAIZ",
            pt: "SAIZ",
        },
        description: {
            es: "Plataforma comercial para seguimiento de leads, geolocalización de negocios, gestión de ventas y paneles administrativos.",
            en: "Commercial platform for lead tracking, business geolocation, sales management and admin dashboards.",
            pt: "Plataforma comercial para acompanhamento de leads, geolocalização de negócios, gestão de vendas e painéis administrativos.",
        },
        category: {
            es: "Full-stack",
            en: "Full-stack",
            pt: "Full-stack",
        },
        year: "2024",
        status: {
            es: "Proyecto internacional",
            en: "International project",
            pt: "Projeto internacional",
        },
        tags: ["React", "Next.js", "NestJS", "Maps", "APIs"],
        image: "/projects/saiz.jpg",
        href: "#",
        github: "#",
    },
    {
        title: {
            es: "Escudo Vecinal",
            en: "Neighborhood Shield",
            pt: "Escudo Comunitário",
        },
        description: {
            es: "Aplicación desarrollada en hackathon para combatir la inseguridad ciudadana mediante botón de pánico, chats vecinales y alertas.",
            en: "Hackathon app designed to fight urban insecurity through panic button, neighborhood chats and alerts.",
            pt: "Aplicativo desenvolvido em hackathon para combater a insegurança urbana com botão de pânico, chats comunitários e alertas.",
        },
        category: {
            es: "Hackathon",
            en: "Hackathon",
            pt: "Hackathon",
        },
        year: "2024",
        status: {
            es: "Proyecto ganador",
            en: "Winning project",
            pt: "Projeto vencedor",
        },
        tags: ["Mobile", "Firebase", "UX", "Seguridad"],
        image: "/projects/escudo-vecinal.jpg",
        href: "#",
        github: "#",
    },
    {
        title: {
            es: "Sismo Seguro",
            en: "Safe Quake",
            pt: "Terremoto Seguro",
        },
        description: {
            es: "Aplicación ganadora orientada a la prevención, respuesta y comunicación ciudadana frente a emergencias por sismos.",
            en: "Winning application focused on prevention, response and citizen communication during earthquake emergencies.",
            pt: "Aplicativo vencedor focado em prevenção, resposta e comunicação cidadã diante de emergências por terremotos.",
        },
        category: {
            es: "Hackathon",
            en: "Hackathon",
            pt: "Hackathon",
        },
        year: "2023",
        status: {
            es: "Proyecto ganador",
            en: "Winning project",
            pt: "Projeto vencedor",
        },
        tags: ["Mobile", "Emergencias", "Firebase", "Impacto social"],
        image: "/projects/sismo-seguro.jpg",
        href: "#",
        github: "#",
    },
];