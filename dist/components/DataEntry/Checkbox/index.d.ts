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
import { Form, CheckboxChangeEvent } from 'antd';
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
    formItemProps?: Omit<React.ComponentProps<typeof Form.Item>, 'name' | 'label' | 'rules' | 'labelCol' | 'wrapperCol' | 'help' | 'valuePropName'>;
}
declare const CustomCheckbox: FC<CustomCheckboxProps>;
export default CustomCheckbox;
