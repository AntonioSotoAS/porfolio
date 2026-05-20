import type { Lang } from "../i18n/ui";

export type Project = {
    id: string; // Identificador único para modales y DOM
    title: Record<Lang, string>;
    description: Record<Lang, string>;
    category: Record<Lang, string>;
    year: string;
    status: Record<Lang, string>;
    tags: string[];
    image: string;
    href?: string;
    github?: string;
    video?: string; // Ruta opcional a video de demostración
    gallery?: string[]; // Rutas opcionales a capturas de pantalla
    longDescription?: Record<Lang, string>; // Descripción larga opcional
    features?: Record<Lang, string[]>; // Lista de características opcional
    demoLabel?: Record<Lang, string>; // Etiqueta personalizada opcional para el enlace de demostración/plataforma
};

export const projects: Project[] = [
    {
        id: "iactas",
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
        image: "/images/projects/iactas/Concepto.png",
        href: "#",
        github: "#",
        video: "/images/projects/iactas/videoiactas.mp4",
        gallery: [
            "/images/projects/iactas/Concepto.png",
            "/images/projects/iactas/paneladmin.png",
            "/images/projects/iactas/subiendoacta.png",
        ],
        longDescription: {
            es: "IACTAS es una solución innovadora con inteligencia artificial diseñada para optimizar y automatizar la transcripción y generación de actas judiciales a partir de las grabaciones de audiencias. Este proyecto obtuvo la Mención Honrosa Nacional en el Premio a las Buenas Prácticas en Gestión Pública 2025, destacando en la categoría de Innovación Pública por transformar radicalmente la velocidad y precisión del sistema legal.",
            en: "IACTAS is an innovative AI-powered solution designed to optimize and automate the transcription and generation of judicial records from hearing recordings. This project won the National Honorable Mention at the 2025 Good Practices in Public Management Award, outstanding in the Public Innovation category for radically transforming the speed and accuracy of the legal system.",
            pt: "O IACTAS é uma solução inovadora baseada em inteligência artificial projetada para otimizar e automatizar a transcrição e geração de atas judiciais a partir de gravações de audiências. Este projeto obteve a Menção Honrosa Nacional no Prêmio de Boas Práticas em Gestão Pública 2025, destacando-se na categoria de Inovação Pública por transformar radicalmente a velocidade e a precisão do sistema jurídico.",
        },
        features: {
            es: [
                "Procesamiento inteligente y transcripción precisa de audiencias judiciales en tiempo real.",
                "Generación automática de resúmenes estructurados y actas formateadas según requerimientos legales.",
                "Panel de administración interactivo para corregir, revisar y validar transcripciones y actas generadas.",
                "Carga de archivos de audio/video y sincronización segura con almacenamiento en la nube."
            ],
            en: [
                "Intelligent processing and accurate transcription of judicial hearings in real-time.",
                "Automatic generation of structured summaries and formatted records based on legal standards.",
                "Interactive admin panel to correct, review, and validate generated transcriptions and records.",
                "Audio/video file upload and secure synchronization with cloud storage."
            ],
            pt: [
                "Processamento inteligente e transcrição precisa de audiências judiciais em tempo real.",
                "Geração automática de resumos estruturados e atas formatadas de acordo com requisitos legais.",
                "Painel de administração interativo para corrigir, revisar e validar transcrições e atas geradas.",
                "Upload de arquivos de áudio/vídeo e sincronização segura com armazenamento em nuvem."
            ],
        },
    },
    {
        id: "sigetic",
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
        image: "/images/projects/sigetic/loginsigetic.png",
        href: "#",
        github: "#",
        gallery: [
            "/images/projects/sigetic/loginsigetic.png",
            "/images/projects/sigetic/ticket.png",
        ],
    },
    {
        id: "sacpj",
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
        image: "/images/projects/sacpj.jpg",
        href: "#",
        github: "#",
    },
    {
        id: "saiz",
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
        image: "/images/projects/saiz/saiz.png",
        href: "https://saiz.app/login",
        github: "#",
        demoLabel: {
            es: "Ver plataforma",
            en: "View platform",
            pt: "Ver plataforma",
        },
    },
    {
        id: "escudo-vecinal",
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
        image: "/images/projects/escudo-vecinal/home.png",
        href: "#",
        github: "#",
        gallery: [
            "/images/projects/escudo-vecinal/login.png",
            "/images/projects/escudo-vecinal/home.png",
            "/images/projects/escudo-vecinal/escudovirtual.png",
            "/images/projects/escudo-vecinal/alerta.png",
            "/images/projects/escudo-vecinal/chat.png",
            "/images/projects/escudo-vecinal/ubicacion.png",
            "/images/projects/escudo-vecinal/contacto.png",
            "/images/projects/escudo-vecinal/vecibot.png",
        ],
    },
    {
        id: "sismo-seguro",
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
        image: "/images/projects/sismo-seguro/home.png",
        href: "#",
        github: "#",
        gallery: [
            "/images/projects/sismo-seguro/login.png",
            "/images/projects/sismo-seguro/home.png",
            "/images/projects/sismo-seguro/familia.png",
            "/images/projects/sismo-seguro/asignarrolesfamilia.png",
            "/images/projects/sismo-seguro/rankingentrefamilias.png",
            "/images/projects/sismo-seguro/armatumochilaemer.png",
            "/images/projects/sismo-seguro/alertasismos.png",
            "/images/projects/sismo-seguro/puntoenceuntro.png",
            "/images/projects/sismo-seguro/mapa.png",
        ],
    },
];