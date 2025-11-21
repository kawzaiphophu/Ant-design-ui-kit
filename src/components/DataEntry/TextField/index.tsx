/**
 * TextField Component
 * 
 * A versatile text input component with form integration, validation, various input types,
 * and built-in input restrictions (text-only, numbers-only, etc.).
 * 
 * @example
 * // Basic text field
 * <TextField 
 *   placeholder="Enter your name"
 * />
 * 
 * @example
 * // Text field in form with validation
 * <TextField 
 *   name="email"
 *   label="Email Address"
 *   type="email"
 *   required={true}
 *   rules={[
 *     { required: true, message: 'Please enter email' },
 *     { type: 'email', message: 'Please enter valid email' }
 *   ]}
 * />
 * 
 * @example
 * // Password field with visibility toggle
 * <TextField 
 *   name="password"
 *   label="Password"
 *   type="password"
 *   placeholder="Enter password"
 *   required={true}
 * />
 * 
 * @example
 * // Number-only input with prefix
 * <TextField 
 *   type="numberOnly"
 *   label="Phone Number"
 *   prefix={<PhoneOutlined />}
 *   placeholder="Enter phone number"
 *   size="large"
 * />
 * 
 * @example
 * // Text field with addons
 * <TextField 
 *   label="Website"
 *   addonBefore="https://"
 *   addonAfter=".com"
 *   placeholder="domain"
 * />
 */
'use client';

import { Form, Input, InputProps } from 'antd';
import { FC, useState } from 'react';
import './custom.css';

export interface CustomTextFieldProps extends Omit<InputProps, 'size'> {
  size?: 'small' | 'middle' | 'large';
  name?: any;
  label?: React.ReactNode;
  rules?: any[];
  vertical?: boolean;
  formItemProps?: Omit<
    React.ComponentProps<typeof Form.Item>,
    | 'name'
    | 'label'
    | 'rules'
    | 'labelCol'
    | 'wrapperCol'
    | 'required'
    | 'labelAlign'
    | 'labelWrap'
  >;
  validateStatus?:
    | ''
    | 'warning'
    | 'error'
    | 'success'
    | 'validating'
    | undefined;
  help?: string;
  variant?: 'outlined' | 'borderless' | 'filled' | 'underlined';
  focusRing?: boolean;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'textOnly'
    | 'textWithSymbols'
    | 'numberOnly'
    | 'tel';
  getValueProps?: (value: any) => { value: any };
}

const CustomTextField: FC<CustomTextFieldProps> = ({
  size = 'middle',
  placeholder = '',
  prefix,
  suffix,
  disabled = false,
  allowClear = false,
  className = '',
  name,
  label,
  rules,
  vertical = false,
  formItemProps,
  validateStatus,
  help,
  variant,
  required,
  type,
  focusRing = false,
  addonBefore,
  addonAfter,
  getValueProps,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Determine input size classes
  let sizeClass = 'custom-allkons-input';
  if (size === 'large') {
    sizeClass += addonBefore || addonAfter ? ' size-large' : ' size-large with-padding';
  } else if (size === 'middle') {
    sizeClass += addonBefore || addonAfter ? ' size-middle' : ' size-middle with-padding';
  } else if (size === 'small') {
    sizeClass += addonBefore || addonAfter ? ' size-small' : ' size-small with-padding';
  }

  // Prepare prefix wrapper
  const defaultPrefix = prefix ? (
    <span className="prefix-wrapper">{prefix}</span>
  ) : undefined;

  // Handle password visibility toggle
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle input restriction based on type
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === 'textOnly') {
      // Allow only letters and spaces (no numbers or symbols)
      const regex = /^[a-zA-Z\s\u0E00-\u0E7F]*$/;
      if (
        !regex.test(e.key) &&
        e.key !== 'Backspace' &&
        e.key !== 'Delete' &&
        e.key !== 'Tab'
      ) {
        e.preventDefault();
      }
    } else if (type === 'numberOnly') {
      // Allow only numbers
      const regex = /^[0-9]*$/;
      if (
        !regex.test(e.key) &&
        e.key !== 'Backspace' &&
        e.key !== 'Delete' &&
        e.key !== 'Tab'
      ) {
        e.preventDefault();
      }
    } else if (type === 'textWithSymbols') {
      // Allow letters, numbers, spaces, and common symbols
      const regex = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
      if (
        !regex.test(e.key) &&
        e.key !== 'Backspace' &&
        e.key !== 'Delete' &&
        e.key !== 'Tab'
      ) {
        e.preventDefault();
      }
    } else if (type === 'tel') {
      // Allow numbers, spaces, dashes, parentheses, and plus sign
      const regex = /^[0-9\s\-()+]*$/;
      const currentLength = (e.target as HTMLInputElement).value.length;
      if (
        (!regex.test(e.key) ||
          (currentLength >= 10 &&
            e.key !== 'Backspace' &&
            e.key !== 'Delete' &&
            e.key !== 'Tab')) &&
        e.key !== 'Backspace' &&
        e.key !== 'Delete' &&
        e.key !== 'Tab'
      ) {
        e.preventDefault();
      }
    }
  };

  // Handle paste events for input restriction
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedText = e.clipboardData.getData('text');

    if (type === 'textOnly') {
      const regex = /^[a-zA-Z\s]*$/;
      if (!regex.test(pastedText)) {
        e.preventDefault();
      }
    } else if (type === 'numberOnly') {
      const regex = /^[0-9]*$/;
      if (!regex.test(pastedText)) {
        e.preventDefault();
      }
    } else if (type === 'textWithSymbols') {
      const regex = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
      if (!regex.test(pastedText)) {
        e.preventDefault();
      }
    }
  };

  // Prepare suffix for password type
  const getSuffix = () => {
    if (type === 'password') {
      return (
        <span
          className="password-toggle"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <i className="ri-eye-line eye-icon"></i>
          ) : (
            <i className="ri-eye-off-line eye-icon"></i>
          )}
        </span>
      );
    }
    return suffix;
  };

  // Determine actual input type
  const getInputType = () => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password';
    }
    if (type === 'textOnly' || type === 'textWithSymbols') {
      return 'text';
    }
    if (type === 'numberOnly') {
      return 'text'; // Use text type to have full control over input
    }
    return type;
  };

  const inputNode = (
    <Input
      className={`${sizeClass} ${className} input-rounded ${focusRing ? 'with-focus-ring' : ''}`}
      placeholder={placeholder}
      prefix={defaultPrefix}
      suffix={getSuffix()}
      disabled={disabled}
      allowClear={allowClear}
      variant={variant}
      type={getInputType()}
      addonBefore={addonBefore}
      addonAfter={addonAfter}
      onKeyPress={handleKeyPress}
      onPaste={handlePaste}
      {...rest}
    />
  );

  // Detect if any rule is required
  const isRequired =
    (Array.isArray(rules) && rules.some((rule) => rule.required === true)) ||
    required;

  // Prepare label with asterisk after
  const renderLabel = () => {
    if (label) {
      return (
        <span>
          {label}
          {isRequired && <span className="required-asterisk">*</span>}
        </span>
      );
    }
    return undefined;
  };

  // If name or label or rules provided, wrap with Form.Item
  if (name || label || rules) {
    const labelCol = vertical ? { span: 24 } : undefined;
    const wrapperCol = vertical ? { span: 24 } : undefined;
    return (
      <Form.Item
        name={name}
        label={renderLabel()}
        rules={rules}
        required={false} // managed in custom label
        colon={false} // remove default colon
        labelCol={labelCol}
        wrapperCol={wrapperCol}
        validateStatus={validateStatus}
        help={help}
        className="form-item-no-margin"
        getValueProps={getValueProps}
        {...formItemProps}
      >
        {inputNode}
      </Form.Item>
    );
  }

  return inputNode;
};

export default CustomTextField;
