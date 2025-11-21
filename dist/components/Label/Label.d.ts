import './custom.css';
export type Colors = 'neutral' | 'brand' | 'warning' | 'error' | 'info' | 'purple' | 'success';
export type LabelType = 'PILL_GHOST' | 'PILL_OUTLINED' | 'PILL_SOLID' | 'PILL_MODERN' | 'PILL_LIGHT' | 'BADGE_GHOST' | 'BADGE_OUTLINED' | 'BADGE_SOLID' | 'BADGE_MODERN';
export type LabelSize = 'small' | 'middle' | 'large';
export type UniqueLeadingIcon = 'DOT' | 'AVATAR' | 'FLAG';
type LabelVariant = 'outlined' | 'solid' | 'ghost' | 'modern';
type LabelRounding = 'rounded' | 'pill';
type LabelProps = {
    size?: LabelSize;
    rounding?: LabelRounding;
    color?: Colors;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    variant?: LabelVariant;
    noBorder?: boolean;
    text?: string;
};
export declare const Label: React.FC<LabelProps>;
export {};
