import './custom.css';
export interface CustomToggleSwitchProps {
    size?: 'small' | 'large';
    showLabel?: boolean;
    color?: 'success' | 'brand';
    isChecked?: boolean;
    isDisabled?: boolean;
    type?: 'default' | 'text';
    title?: string;
    supportingText?: string;
    onChange?: (checked: boolean) => void;
}
declare const CustomToggleSwitch: ({ size, showLabel: showText, color, isChecked, isDisabled, type, title, supportingText, onChange, }: CustomToggleSwitchProps) => import("react/jsx-runtime").JSX.Element;
export default CustomToggleSwitch;
