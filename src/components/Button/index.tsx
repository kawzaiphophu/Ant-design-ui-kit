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
import { Button } from 'antd';
import './button.css';

type Variant = 'outlined' | 'dashed' | 'solid' | 'ghost' | 'link';
type Size = 'small' | 'middle' | 'large';
type Color = 'primary' | 'error' | 'neutral';
type Bold = '400' | '500' | '600' | '700';

export interface CustomButtonProps {
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

const CustomButton: React.FC<CustomButtonProps> = ({
  fullWidth = false,
  size = 'middle',
  color = 'primary',
  variant = 'solid',
  bold = '600',
  icon,
  iconPosition = 'start',
  disabled = false,
  loading = false,
  onClick,
  children,
  className,
  htmlType,
  fitContent = false,
  rounding = 'standard',
}) => {
  const classes = [
    'custom-button',
    `rounding-${rounding}`,
    fitContent ? 'size-fit-content' : `size-${size}`,
    `bold-${bold}`,
    `color-${color}`,
    `variant-${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <Button
      ghost={variant === 'ghost'}
      block={fullWidth}
      size={size}
      icon={iconPosition === 'start' ? icon : undefined}
      iconPosition={iconPosition}
      disabled={disabled}
      loading={loading}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClick?.(e)}
      htmlType={htmlType}
      className={classes}
    >
      {iconPosition === 'end' && icon ? (
        <span className="icon-end-wrapper">
          {children}
          {icon}
        </span>
      ) : (
        children
      )}
    </Button>
  );
};

export default CustomButton;
