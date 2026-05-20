import type { Lang } from "../i18n/ui";

export type AchievementItem = {
    title: Record<Lang, string>;
    period: Record<Lang, string>;
    description: Record<Lang, string[]>;
    tags: string[];
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
                'O projeto IACTAS obteve o segundo lugar nacional na categoria Inovação, destacando-se entre as melhores iniciativas do Estado Peruano (2025).'
            ]
        },
        tags: ['Innovación', 'IACTAS', 'Gestión Pública']
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
                'Líder del grupo ganador del primer puesto en la Hackathon organizada por Diario El Comercio y UTP con la creación de la aplicación "Escudo Vecinal".',
                'Implementé habilidades de liderazgo, adaptabilidad y trabajo bajo presión para llevar a cabo un proyecto exitoso.'
            ],
            en: [
                'Leader of the first-place winning group in the Hackathon organized by Diario El Comercio and UTP with the creation of the application "Escudo Vecinal".',
                'Implemented leadership, adaptability, and ability to work under pressure to deliver a successful project.'
            ],
            pt: [
                'Líder do grupo vencedor do primeiro lugar no Hackathon organizado pelo Diario El Comercio e UTP com a criação do aplicativo "Escudo Vecinal".',
                'Implementei habilidades de liderança, adaptabilidade e trabalho sob pressão para realizar um projeto de sucesso.'
            ]
        },
        tags: ['Hackathon', 'Liderazgo', 'Mobile App']
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
                'Líder del grupo ganador del primer puesto en la Hackathon organizada por Diario El Comercio y UTP con la creación de la aplicación "Sismo Seguro".',
                'Implementé habilidades de liderazgo, adaptabilidad y trabajo bajo presión para llevar a cabo un proyecto exitoso.'
            ],
            en: [
                'Leader of the first-place winning group in the Hackathon organized by Diario El Comercio and UTP with the creation of the application "Sismo Seguro".',
                'Implemented leadership, adaptability, and ability to work under pressure to deliver a successful project.'
            ],
            pt: [
                'Líder do grupo vencedor do primeiro lugar no Hackathon organizado pelo Diario El Comercio e UTP com a criação do aplicativo "Sismo Seguro".',
                'Implementei habilidades de liderança, adaptabilidade e trabalho sob pressão para realizar um projeto de sucesso.'
            ]
        },
        tags: ['Hackathon', 'Liderazgo', 'Mobile App']
    }
];
