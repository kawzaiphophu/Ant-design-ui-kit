/**
 * RadioGroup Component
 *
 * A radio button group component with support for standard radio buttons or button-style radios.
 * Includes form integration, validation, and flexible layout options.
 *
 * @example
 * // Basic radio group
 * <RadioGroup
 *   options={[
 *     { label: 'Option 1', value: '1' },
 *     { label: 'Option 2', value: '2' },
 *     { label: 'Option 3', value: '3' },
 *   ]}
 * />
 *
 * @example
 * // Radio group in form with validation
 * <RadioGroup
 *   name="gender"
 *   label="Gender"
 *   rules={[{ required: true, message: 'Please select gender' }]}
 *   options={[
 *     { label: 'Male', value: 'male' },
 *     { label: 'Female', value: 'female' },
 *     { label: 'Other', value: 'other' },
 *   ]}
 * />
 *
 * @example
 * // Button-style radio group
 * <RadioGroup
 *   useRadioButton={true}
 *   buttonStyle="solid"
 *   options={[
 *     { label: 'Small', value: 'S' },
 *     { label: 'Medium', value: 'M' },
 *     { label: 'Large', value: 'L' },
 *   ]}
 * />
 *
 * @example
 * // Vertical layout with disabled option
 * <RadioGroup
 *   vertical={true}
 *   options={[
 *     { label: 'Available', value: '1' },
 *     { label: 'Sold Out', value: '2', disabled: true },
 *   ]}
 * />
 */
import React from 'react';
import { RadioGroupProps } from 'antd/es/radio';
import { FormItemProps } from 'antd/es/form';
import './custom.css';
interface RadioOption {
    label: React.ReactNode;
    value: string | number;
    disabled?: boolean;
}
interface CustomRadioGroupProps extends Omit<RadioGroupProps, 'options'> {
    name?: any;
    label?: React.ReactNode;
    rules?: any[];
    options: RadioOption[];
    useRadioButton?: boolean;
    formItemProps?: Omit<FormItemProps, 'name' | 'label' | 'rules'>;
    radioGroupProps?: Omit<RadioGroupProps, 'onChange' | 'value' | 'buttonStyle' | 'options'>;
    block?: boolean;
    disabled?: boolean;
    vertical?: boolean;
    validateStatus?: '' | 'warning' | 'error' | 'success' | 'validating' | undefined;
    help?: string;
}
declare const CustomRadioGroup: React.FC<CustomRadioGroupProps>;
export default CustomRadioGroup;
