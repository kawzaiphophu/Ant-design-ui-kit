/**
 * Checkbox Component
 * 
 * A customizable checkbox component with support for form integration, custom labels,
 * supporting text, and various sizes.
 * 
 * @example
 * // Basic checkbox
 * <Checkbox label="Accept terms and conditions" />
 * 
 * @example
 * // Checkbox with supporting text
 * <Checkbox 
 *   label="Enable notifications"
 *   supportingText="Receive email updates about your account"
 *   size="large"
 * />
 * 
 * @example
 * // Checkbox in form with validation
 * <Checkbox 
 *   name="agree"
 *   label="I agree to the terms"
 *   rules={[{ required: true, message: 'Please accept terms' }]}
 * />
 * 
 * @example
 * // Controlled checkbox with onChange
 * <Checkbox 
 *   checked={isChecked}
 *   onChange={(e) => setIsChecked(e.target.checked)}
 *   label="Remember me"
 *   disabled={false}
 * />
 */
import { Checkbox as AntCheckbox, Form, CheckboxChangeEvent } from 'antd';
import { FC } from 'react';
import './custom.css';

export interface CustomCheckboxProps {
  name?: string;
  label?: React.ReactNode;
  size?: 'small' | 'default' | 'large';
  supportingText?: React.ReactNode;
  rules?: any[];
  vertical?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
  formItemProps?: Omit<
    React.ComponentProps<typeof Form.Item>,
    | 'name'
    | 'label'
    | 'rules'
    | 'labelCol'
    | 'wrapperCol'
    | 'help'
    | 'valuePropName'
  >;
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({
  name,
  label,
  supportingText,
  rules,
  vertical = false,
  checked,
  defaultChecked,
  disabled = false,
  formItemProps,
  indeterminate = false,
  size = 'default',
  onChange,
}) => {
  const checkboxNode = (
    <AntCheckbox
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      indeterminate={indeterminate}
      onChange={onChange}
      className={`custom-allkons custom-checkbox size-${size}`}
    >
      {vertical ? null : (
        <div
          className={`checkbox-label-container size-${size} ${disabled ? 'disabled' : ''} ${size === 'default' && !supportingText ? 'default-no-supporting' : ''}`}
        >
          {label}
          {supportingText && (
            <div className={`checkbox-supporting-text ${disabled ? 'disabled' : ''}`}>
              {supportingText}
            </div>
          )}
        </div>
      )}
    </AntCheckbox>
  );

  // When used within a Form.Item
  if (name || rules) {
    const labelCol = vertical ? { span: 24 } : undefined;
    const wrapperCol = vertical ? { span: 24 } : undefined;
    return (
      <Form.Item
        name={name}
        valuePropName="checked"
        label={vertical ? label : undefined}
        rules={rules}
        labelCol={labelCol}
        wrapperCol={wrapperCol}
        className="form-item-no-margin"
        {...formItemProps}
      >
        {checkboxNode}
      </Form.Item>
    );
  }

  return <div className="checkbox-wrapper">{checkboxNode}</div>;
};

export default CustomCheckbox;
