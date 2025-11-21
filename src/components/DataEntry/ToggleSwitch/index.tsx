/**
 * ToggleSwitch Component
 * 
 * A customizable toggle switch component with optional labels and supporting text.
 * Supports different colors (success/brand) and sizes.
 * 
 * @example
 * // Basic toggle switch
 * <ToggleSwitch 
 *   isChecked={true}
 *   onChange={(checked) => console.log(checked)}
 * />
 * 
 * @example
 * // Toggle switch with text labels
 * <ToggleSwitch 
 *   showLabel={true}
 *   type="text"
 *   title="Enable notifications"
 *   supportingText="Receive updates via email"
 *   color="success"
 * />
 * 
 * @example
 * // Small toggle without labels
 * <ToggleSwitch 
 *   size="small"
 *   showLabel={false}
 *   color="brand"
 *   isChecked={false}
 * />
 * 
 * @example
 * // Disabled toggle switch
 * <ToggleSwitch 
 *   isChecked={true}
 *   isDisabled={true}
 *   title="Feature locked"
 *   type="text"
 * />
 */
'use client';

import { Switch } from 'antd';
import { useEffect, useState } from 'react';
import CustomTypography from '../../Typography';
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

const getBackgroundColor = (
  isDisabled: boolean,
  isChecked: boolean,
  color: 'success' | 'brand'
) => {
  if (isChecked && !isDisabled && color === 'success') {
    return 'var(--color-success)';
  }
  if (isChecked && !isDisabled && color === 'brand') {
    return 'var(--color-brand-00)';
  }

  return '#D0D0D0';
};

const CustomToggleSwitch = ({
  size = 'large',
  showLabel: showText = true,
  color = 'success',
  isChecked = false,
  isDisabled = false,
  type = 'default',
  title,
  supportingText,
  onChange,
}: CustomToggleSwitchProps) => {
  const [isCheckedState, setIsCheckedState] = useState(isChecked);

  const handleChange = () => {
    const newCheckedState = !isCheckedState;
    setIsCheckedState(newCheckedState);
    onChange?.(newCheckedState);
  };

  useEffect(() => {
    setIsCheckedState(isChecked);
  }, [isChecked]);

  const switchClass = `${color === 'success' ? 'default' : 'brand'} ${size === 'small' ? 'switch-small' : 'switch-default'}`;

  return (
    <div className="toggle-switch-container">
      <Switch
        defaultChecked={isChecked}
        checked={isCheckedState}
        onChange={handleChange}
        checkedChildren={showText ? 'ON' : ''}
        unCheckedChildren={showText ? 'OFF' : ''}
        disabled={isDisabled}
        size={size === 'small' ? 'small' : 'default'}
        className={switchClass}
      />
      {type === 'text' && (
        <div className="toggle-text-container">
          {title && (
            <CustomTypography
              variant="paragraph-small"
              className="toggle-title"
            >
              {title}
            </CustomTypography>
          )}
          {supportingText && (
            <CustomTypography
              variant="paragraph-medium"
              className="toggle-supporting-text"
            >
              {supportingText}
            </CustomTypography>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomToggleSwitch;
