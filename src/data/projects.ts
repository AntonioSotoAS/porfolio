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
            es: "Sistema institucional de gestión de tickets de soporte técnico, seguimiento en tiempo real y control administrativo.",
            en: "Institutional system for technical support ticket management, real-time tracking, and administrative control.",
            pt: "Sistema institucional de gestão de tickets de suporte técnico, acompanhamento em tempo real e controle administrativo.",
        },
        category: {
            es: "Gestión TI",
            en: "IT Management",
            pt: "Gestão de TI",
        },
        year: "2025",
        status: {
            es: "En producción",
            en: "In production",
            pt: "Em produção",
        },
        tags: ["Next.js", "NestJS", "PWA", "RTK Query", "Socket.IO"],
        image: "/images/projects/sigetic/loginsigetic.png",
        href: "#",
        github: "#",
        gallery: [
            "/images/projects/sigetic/loginsigetic.png",
            "/images/projects/sigetic/ticket.png",
        ],
        longDescription: {
            es: "SIGETIC es una plataforma institucional desarrollada para transformar la gestión del soporte técnico mediante un sistema centralizado de tickets, seguimiento en tiempo real y control administrativo. La solución permite digitalizar el proceso de atención de incidencias tecnológicas, reduciendo la informalidad en las solicitudes, mejorando los tiempos de respuesta y fortaleciendo la trazabilidad del servicio.\n\nEl proyecto fue diseñado bajo una arquitectura moderna, escalable y segura, integrando autenticación por roles, notificaciones push, dashboards de control y una experiencia de usuario optimizada para entornos web y móviles.",
            en: "SIGETIC is an institutional platform developed to transform technical support management through a centralized ticket system, real-time tracking, and administrative control. The solution digitizes the technology incident response process, reducing request informalities, improving response times, and strengthening service traceability.\n\nThe project was designed under a modern, scalable, and secure architecture, integrating role-based authentication, push notifications, control dashboards, and a user experience optimized for web and mobile environments.",
            pt: "SIGETIC é uma plataforma institucional desenvolvida para transformar a gestão de suporte técnico por meio de um sistema centralizado de tickets, rastreamento em tempo real e controle administrativo. A solução digitaliza o processo de atendimento de incidentes tecnológicos, reduzindo a informalidade nas solicitações, melhorando os tempos de resposta e fortalecendo a rastreabilidade do serviço.\n\nO projeto foi desenhado sob uma arquitetura moderna, escalável e segura, integrando autenticação por funções (roles), notificações push, painéis de controle e uma experiência do usuário otimizada para ambientes web e móveis.",
        },
        features: {
            es: [
                "Creación, clasificación y seguimiento de tickets de soporte técnico.",
                "Notificaciones push y comunicación en tiempo real con Socket.IO.",
                "Gestión de usuarios, técnicos, coordinadores y administradores mediante roles personalizados.",
                "Panel de control con indicadores sobre el estado y rendimiento del servicio.",
                "Trazabilidad completa de cada incidencia, desde su registro hasta su cierre.",
                "Interfaz moderna, responsive y adaptable como Progressive Web App.",
                "Integración entre frontend en Next.js y backend en NestJS mediante RTK Query.",
                "Sistema preparado para escalar hacia reportes, métricas avanzadas y automatización de procesos internos."
            ],
            en: [
                "Creation, classification, and tracking of technical support tickets.",
                "Push notifications and real-time communication using Socket.IO.",
                "Management of users, technicians, coordinators, and administrators via custom roles.",
                "Control panel with service status and performance indicators.",
                "Full traceability of each incident, from registration to closure.",
                "Modern, responsive, and adaptable interface as a Progressive Web App (PWA).",
                "Integration between Next.js frontend and NestJS backend using RTK Query.",
                "System ready to scale towards reports, advanced metrics, and automation of internal processes."
            ],
            pt: [
                "Criação, classificação e acompanhamento de tickets de suporte técnico.",
                "Notificações push e comunicação em tempo real com Socket.IO.",
                "Gestão de usuários, técnicos, coordenadores e administradores por meio de funções personalizadas.",
                "Painel de controle com indicadores sobre o estado e o desempenho do serviço.",
                "Rastreabilidade completa de cada incidente, desde o registro até o encerramento.",
                "Interface moderna, responsiva e adaptável como Progressive Web App (PWA).",
                "Integração entre frontend em Next.js e backend em NestJS utilizando RTK Query.",
                "Sistema preparado para evoluir para relatórios, métricas avançadas e automatização de processos internos."
            ],
        },
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
            es: "Proyecto empresarial internacional enfocado en gestión de ventas, seguimiento de leads, geolocalización de negocios y administración comercial.",
            en: "International enterprise project focused on sales management, lead tracking, business geolocation, and commercial administration.",
            pt: "Projeto empresarial internacional focado em gestão de vendas, acompanhamento de leads, geolocalização de negócios e administração comercial.",
        },
        category: {
            es: "Gestión comercial internacional",
            en: "International Business Management",
            pt: "Gestão Comercial Internacional",
        },
        year: "2022 - 2025",
        status: {
            es: "Proyecto internacional",
            en: "International project",
            pt: "Projeto internacional",
        },
        tags: ["React", "Next.js", "NestJS", "Firebase", "Maps"],
        image: "/images/projects/saiz/saiz.png",
        href: "https://saiz.app/login",
        github: "#",
        demoLabel: {
            es: "Ver plataforma",
            en: "View platform",
            pt: "Ver plataforma",
        },
        longDescription: {
            es: "SAIZ es una plataforma tecnológica desarrollada para una empresa de Estados Unidos, orientada a la gestión de ventas, seguimiento de leads, geolocalización de negocios y administración comercial. El sistema permitió digitalizar procesos de prospección, registro de clientes, agendamiento de citas y control de actividades comerciales mediante una solución web moderna y escalable.\n\nMi participación estuvo enfocada en el desarrollo frontend y backend, integrando módulos administrativos, formularios dinámicos, autenticación, APIs y funcionalidades orientadas a mejorar la operación comercial y el seguimiento de oportunidades de negocio.",
            en: "SAIZ is a technology platform developed for a United States company, oriented towards sales management, lead tracking, business geolocation, and commercial administration. The system digitized prospection, customer registration, appointment scheduling, and commercial activity control processes through a modern and scalable web solution.\n\nMy participation was focused on frontend and backend development, integrating administrative modules, dynamic forms, authentication, APIs, and features aimed at improving commercial operations and business opportunity tracking.",
            pt: "SAIZ é uma plataforma tecnológica desenvolvida para uma empresa dos Estados Unidos, focada na gestão de vendas, acompanhamento de leads, geolocalização de negócios e administração comercial. O sistema permitiu digitalizar processos de prospecção, registro de clientes, agendamento de consultas e controle de atividades comerciais por meio de uma solução web moderna e escalável.\n\nMinha participação esteve focada no desenvolvimento frontend e backend, integrando módulos administrativos, formulários dinâmicos, autenticação, APIs e funcionalidades voltadas para melhorar a operação comercial e o acompanhamento de oportunidades de negócios.",
        },
        features: {
            es: [
                "Gestión de leads, clientes y oportunidades comerciales.",
                "Registro de ventas, citas y seguimiento de actividades del equipo comercial.",
                "Geolocalización de negocios y visualización de información mediante mapas.",
                "Paneles administrativos para control de usuarios, clientes, líneas de negocio y ventas.",
                "Desarrollo con tecnologías modernas como React, Next.js, NestJS y Firebase.",
                "Implementación de autenticación, validaciones, formularios avanzados y consumo de APIs."
            ],
            en: [
                "Management of leads, clients, and commercial opportunities.",
                "Registration of sales, appointments, and activity tracking of the sales team.",
                "Business geolocation and information visualization using maps.",
                "Administrative dashboards to control users, clients, business lines, and sales.",
                "Development with modern technologies such as React, Next.js, NestJS, and Firebase.",
                "Implementation of authentication, validations, advanced forms, and API consumption."
            ],
            pt: [
                "Gestão de leads, clientes e oportunidades comerciais.",
                "Registro de vendas, compromissos e acompanhamento de atividades da equipe comercial.",
                "Geolocalização de negócios e visualização de informações por meio de mapas.",
                "Painéis administrativos para controle de usuários, clientes, linhas de negócios e vendas.",
                "Desenvolvimento com tecnologias modernas como React, Next.js, NestJS e Firebase.",
                "Implementação de autenticação, validações, formulários avançados e consumo de APIs."
            ],
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