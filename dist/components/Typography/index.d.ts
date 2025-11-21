import React from 'react';
import './typography.css';
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'display-1' | 'display-2' | 'display-3' | 'display-4' | 'display-5' | 'display-6' | 'page-title' | 'paragraph-big' | 'paragraph-big-regular' | 'paragraph-big-medium' | 'paragraph-big-semibold' | 'paragraph-big-strikethrough' | 'paragraph-medium' | 'paragraph-middle-regular' | 'paragraph-middle-medium' | 'paragraph-middle-semibold' | 'paragraph-middle-strikethrough' | 'paragraph-small' | 'paragraph-small-regular' | 'paragraph-small-medium' | 'paragraph-small-semibold' | 'paragraph-small-strikethrough' | 'paragraph-extra-small' | 'paragraph-extra-small-regular' | 'paragraph-extra-small-medium' | 'paragraph-extra-small-semibold' | 'paragraph-extra-small-strikethrough' | 'subtitle' | 'label-selection' | 'label-list' | 'label-input-small' | 'label-input-middle' | 'clickable-label' | 'value-list' | 'placeholder' | 'button-big' | 'button-middle' | 'button-small' | 'link-big' | 'link-middle' | 'link-small' | 'all-cap' | 'error';
export interface CustomTypographyProps {
    variant: TypographyVariant;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    href?: string;
    target?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    ellipsis?: boolean;
    ellipsisOptions?: {
        rows?: number;
        expandable?: boolean | 'collapsible';
        symbolNotExpanded?: string;
        symbolExpanded?: string;
    };
    copyable?: boolean;
}
declare const CustomTypography: React.FC<CustomTypographyProps>;
export default CustomTypography;
