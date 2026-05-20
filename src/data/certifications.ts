import type { Lang } from "../i18n/ui";

export type CertificationItem = {
    title: Record<Lang, string>;
    issuer: string;
    date: Record<Lang, string>;
    link?: string;
};

export const certifications: CertificationItem[] = [
    {
        title: {
            es: 'Certificación Profesional de Ejemplo',
            en: 'Sample Professional Certification',
            pt: 'Certificação Profissional de Exemplo'
        },
        issuer: 'Institución / Plataforma',
        date: {
            es: 'Marzo 2024',
            en: 'March 2024',
            pt: 'Março de 2024'
        },
        link: '#'
    },
    {
        title: {
            es: 'Diploma en Desarrollo Full-Stack',
            en: 'Full-Stack Development Diploma',
            pt: 'Diploma em Desenvolvimento Full-Stack'
        },
        issuer: 'Universidad de Ejemplo',
        date: {
            es: 'Diciembre 2023',
            en: 'December 2023',
            pt: 'Dezembro de 2023'
        },
        link: '#'
    }
];
