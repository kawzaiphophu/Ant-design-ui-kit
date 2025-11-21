/**
 * CustomButton Component
 *
 * A flexible button component based on Ant Design with custom styling and variants.
 * Supports multiple colors, sizes, variants, and icons.
 *
 * @example
 * // Basic solid button
 * <CustomButton>Click me</CustomButton>
 *
 * @example
 * // Primary outlined button with icon
 * <CustomButton
 *   variant="outlined"
 *   color="primary"
 *   icon={<SearchOutlined />}
 * >
 *   Search
 * </CustomButton>
 *
 * @example
 * // Large error button with loading state
 * <CustomButton
 *   size="large"
 *   color="error"
 *   loading={true}
 *   onClick={handleDelete}
 * >
 *   Delete
 * </CustomButton>
 *
 * @example
 * // Full width button with icon at end
 * <CustomButton
 *   fullWidth
 *   icon={<ArrowRightOutlined />}
 *   iconPosition="end"
 * >
 *   Continue
 * </CustomButton>
 */
import React from 'react';
type Variant = 'outlined' | 'dashed' | 'solid' | 'ghost' | 'link';
type Size = 'small' | 'middle' | 'large';
type Color = 'primary' | 'error' | 'neutral';
type Bold = '400' | '500' | '600' | '700';
interface CustomButtonProps {
    fullWidth?: boolean;
    variant?: Variant;
    size?: Size;
    color?: Color;
    bold?: Bold;
    icon?: React.ReactNode;
    iconPosition?: 'start' | 'end';
    disabled?: boolean;
    loading?: boolean;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    className?: string;
    htmlType?: 'button' | 'submit' | 'reset';
    fitContent?: boolean;
    rounding?: 'full' | 'standard';
}
declare const CustomButton: React.FC<CustomButtonProps>;
export default CustomButton;
