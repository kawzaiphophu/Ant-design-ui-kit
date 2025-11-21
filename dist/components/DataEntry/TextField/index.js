"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const react_1 = require("react");
require("./custom.css");
const CustomTextField = ({ size = 'middle', placeholder = '', prefix, suffix, disabled = false, allowClear = false, className = '', name, label, rules, vertical = false, formItemProps, validateStatus, help, variant, required, type, focusRing = false, addonBefore, addonAfter, getValueProps, ...rest }) => {
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    // Determine input size classes
    let sizeClass = '';
    if (size === 'large') {
        sizeClass = `h-[48px] ${addonBefore || addonAfter ? '' : '!py-3 !px-4'}  !text-base`;
    }
    else if (size === 'middle') {
        sizeClass = `h-[40px] ${addonBefore || addonAfter ? '' : '!py-2 !px-4'} !text-base`;
    }
    else if (size === 'small') {
        sizeClass = `h-[32px] ${addonBefore || addonAfter ? '' : '!py-1 !px-3'}  !text-sm`;
    }
    // Prepare prefix wrapper with Tailwind margin
    const defaultPrefix = prefix ? ((0, jsx_runtime_1.jsx)("span", { className: "mr-1", children: prefix })) : undefined;
    // Handle password visibility toggle
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    // Handle input restriction based on type
    const handleKeyPress = (e) => {
        if (type === 'textOnly') {
            // Allow only letters and spaces (no numbers or symbols)
            const regex = /^[a-zA-Z\s\u0E00-\u0E7F]*$/;
            if (!regex.test(e.key) &&
                e.key !== 'Backspace' &&
                e.key !== 'Delete' &&
                e.key !== 'Tab') {
                e.preventDefault();
            }
        }
        else if (type === 'numberOnly') {
            // Allow only numbers
            const regex = /^[0-9]*$/;
            if (!regex.test(e.key) &&
                e.key !== 'Backspace' &&
                e.key !== 'Delete' &&
                e.key !== 'Tab') {
                e.preventDefault();
            }
        }
        else if (type === 'textWithSymbols') {
            // Allow letters, numbers, spaces, and common symbols
            const regex = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
            if (!regex.test(e.key) &&
                e.key !== 'Backspace' &&
                e.key !== 'Delete' &&
                e.key !== 'Tab') {
                e.preventDefault();
            }
        }
        else if (type === 'tel') {
            // Allow numbers, spaces, dashes, parentheses, and plus sign
            const regex = /^[0-9\s\-()+]*$/;
            const currentLength = e.target.value.length;
            if ((!regex.test(e.key) ||
                (currentLength >= 10 &&
                    e.key !== 'Backspace' &&
                    e.key !== 'Delete' &&
                    e.key !== 'Tab')) &&
                e.key !== 'Backspace' &&
                e.key !== 'Delete' &&
                e.key !== 'Tab') {
                e.preventDefault();
            }
        }
    };
    // Handle paste events for input restriction
    const handlePaste = (e) => {
        const pastedText = e.clipboardData.getData('text');
        if (type === 'textOnly') {
            const regex = /^[a-zA-Z\s]*$/;
            if (!regex.test(pastedText)) {
                e.preventDefault();
            }
        }
        else if (type === 'numberOnly') {
            const regex = /^[0-9]*$/;
            if (!regex.test(pastedText)) {
                e.preventDefault();
            }
        }
        else if (type === 'textWithSymbols') {
            const regex = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
            if (!regex.test(pastedText)) {
                e.preventDefault();
            }
        }
    };
    // Prepare suffix for password type
    const getSuffix = () => {
        if (type === 'password') {
            return ((0, jsx_runtime_1.jsx)("span", { className: "cursor-pointer select-none hover:opacity-70 transition-opacity", onClick: togglePasswordVisibility, children: showPassword ? ((0, jsx_runtime_1.jsx)("i", { className: "ri-eye-line text-gray-500" })) : ((0, jsx_runtime_1.jsx)("i", { className: "ri-eye-off-line text-gray-500" })) }));
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
    const inputNode = ((0, jsx_runtime_1.jsx)(antd_1.Input, { className: `custom-allkons-input ${sizeClass} ${className} [&.ant-input]:!rounded-lg ${focusRing
            ? '[&.ant-input-outlined:focus-within]:!border [&.ant-input-outlined:focus-within]:!border-primary [&.ant-input-outlined:focus-within]:!ring-2 [&.ant-input-outlined:focus-within]:!ring-primary-hover'
            : ''}`, placeholder: placeholder, prefix: defaultPrefix, suffix: getSuffix(), disabled: disabled, allowClear: allowClear, variant: variant, type: getInputType(), addonBefore: addonBefore, addonAfter: addonAfter, onKeyPress: handleKeyPress, onPaste: handlePaste, ...rest }));
    // Detect if any rule is required
    const isRequired = (Array.isArray(rules) && rules.some((rule) => rule.required === true)) ||
        required;
    // Prepare label with asterisk after, using Tailwind for error color and margin
    const renderLabel = () => {
        if (label) {
            return ((0, jsx_runtime_1.jsxs)("span", { children: [label, isRequired && (0, jsx_runtime_1.jsx)("span", { className: "text-primary ml-1 text-xs", children: "*" })] }));
        }
        return undefined;
    };
    // If name or label or rules provided, wrap with Form.Item
    if (name || label || rules) {
        const labelCol = vertical ? { span: 24 } : undefined;
        const wrapperCol = vertical ? { span: 24 } : undefined;
        return ((0, jsx_runtime_1.jsx)(antd_1.Form.Item, { name: name, label: renderLabel(), rules: rules, required: false, colon: false, labelCol: labelCol, wrapperCol: wrapperCol, validateStatus: validateStatus, help: help, className: "!mb-0", getValueProps: getValueProps, ...formItemProps, children: inputNode }));
    }
    return inputNode;
};
exports.default = CustomTextField;
