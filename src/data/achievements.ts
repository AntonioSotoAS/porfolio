import type { Lang } from "../i18n/ui";

export type AchievementItem = {
    title: Record<Lang, string>;
    period: Record<Lang, string>;
    description: Record<Lang, string[]>;
    tags: string[];
    image?: string;
    link?: string;
};

export const achievements: AchievementItem[] = [
    {
        title: {
            es: 'Mención Honrosa Nacional – Premio a las Buenas Prácticas en Gestión Pública (Ley Servir)',
            en: 'National Honorable Mention – Good Practices in Public Management Award (Ley Servir)',
            pt: 'Menção Honrosa Nacional – Prêmio de Boas Práticas em Gestão Pública (Ley Servir)'
        },
        period: {
            es: 'Noviembre 2025',
            en: 'November 2025',
            pt: 'Novembro de 2025'
        },
        description: {
            es: [
                'El proyecto IACTAS obtuvo segundo puesto a nivel nacional en la categoría Innovación, destacando entre las mejores iniciativas del Estado Peruano (2025).'
            ],
            en: [
                'The IACTAS project achieved second place nationally in the Innovation category, standing out among the best initiatives of the Peruvian State (2025).'
            ],
            pt: [
                'O projeto IACTAS obteve o segundo lugar nacional na categoria Inovação, destacando-se entre las melhores iniciativas del Estado Peruano (2025).'
            ]
        },
        tags: ['Innovación', 'IACTAS', 'Gestión Pública'],
        image: '/images/achievements/iactas.png',
        link: 'https://www.facebook.com/share/v/16SSEVM3Qs/'
    },
    {
        title: {
            es: 'Campeón Nacional de la Hackathon Diario El Comercio, Proyecto "Escudo Vecinal"',
            en: 'National Champion of the Diario El Comercio Hackathon, "Escudo Vecinal" Project',
            pt: 'Campeão Nacional do Hackathon Diario El Comercio, Projeto "Escudo Vecinal"'
        },
        period: {
            es: 'Noviembre 2024',
            en: 'November 2024',
            pt: 'Novembro de 2024'
        },
        description: {
            es: [
                'Integrante del equipo ganador del primer puesto en la Hackathon organizada por Diario El Comercio y UTP con la creación de la aplicación "Escudo Vecinal".',
                'Colaboré activamente en el diseño, desarrollo técnico y coordinación del proyecto, logrando una solución de alto impacto social.'
            ],
            en: [
                'Member of the first-place winning team in the Hackathon organized by Diario El Comercio and UTP with the creation of the "Escudo Vecinal" application.',
                'Collaborated actively in the design, technical development, and project coordination, achieving a high social impact solution.'
            ],
            pt: [
                'Membro da equipe vencedora do primeiro lugar no Hackathon organizado pelo Diario El Comercio e UTP com a criação do aplicativo "Escudo Vecinal".',
                'Colaborei ativamente no design, desenvolvimento técnico e coordenação do projeto, alcançando uma solução de grande impacto social.'
            ]
        },
        tags: ['Hackathon', 'Trabajo en Equipo', 'Mobile App'],
        image: '/images/achievements/fotogrupal.png',
        link: 'https://elcomercio.pe/publirreportaje/hackathon-utp-el-comercio-estudiantes-utp-proponen-soluciones-tecnologicas-para-combatir-la-inseguridad-ciudadana-noticia/'
    },
    {
        title: {
            es: 'Campeón Nacional de la Hackathon Diario El Comercio, Proyecto "Sismo Seguro"',
            en: 'National Champion of the Diario El Comercio Hackathon, "Sismo Seguro" Project',
            pt: 'Campeão Nacional do Hackathon Diario El Comercio, Projeto "Sismo Seguro"'
        },
        period: {
            es: 'Abril 2023',
            en: 'April 2023',
            pt: 'Abril de 2023'
        },
        description: {
            es: [
                'Integrante del equipo ganador del primer puesto en la Hackathon organizada por Diario El Comercio y UTP con la creación de la aplicación "Sismo Seguro".',
                'Aporté en el desarrollo de software y en la adaptabilidad del equipo para construir y consolidar una propuesta tecnológica exitosa en corto tiempo.'
            ],
            en: [
                'Member of the first-place winning team in the Hackathon organized by Diario El Comercio and UTP with the creation of the "Sismo Seguro" application.',
                'Contributed to the software development and team adaptability to build and consolidate a successful technological proposal in a short timeframe.'
            ],
            pt: [
                'Membro da equipe vencedora do primeiro lugar no Hackathon organizado pelo Diario El Comercio e UTP com a criação do aplicativo "Sismo Seguro".',
                'Contribui no desenvolvimento de software e na adaptabilidade da equipe para construir e consolidar uma proposta tecnológica de sucesso em curto espaço de tempo.'
            ]
        },
        tags: ['Hackathon', 'Trabajo en Equipo', 'Mobile App'],
        image: '/images/achievements/sismosegurofotogrupal.png',
        link: 'https://elcomercio.pe/peru/ancash/jovenes-chimbotanos-crean-app-que-ayudara-a-la-poblacion-a-estar-preparada-ante-desastres-hackaton-unicef-hombro-a-hombro-chimbote-startup-noticia/'
    }
];
