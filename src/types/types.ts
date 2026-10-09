export interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    cn?: string;
}

export interface FeatureCardProps {
    title: string;
    description: string;
    cn?: string;
    icon?: React.ReactNode;
    bridge?: string;
}

export interface SectionHeadingProps {
    text: string;
    spanText?: string;
    cn?: string;
    spanCn?: string;
}

export interface MobileMenuProps {
    items: string[];
    cn?: string;
}

export interface Doctor {
    doctorName: string;
    study: string;
    image: string;
}

export interface GalleryProps {
    items: Doctor[];
    cn?: string;
}
