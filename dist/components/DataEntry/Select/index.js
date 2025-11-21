"use strict";
/**
 * SelectField Component
 *
 * A customizable select dropdown component with form integration, validation,
 * and multiple size options.
 *
 * @example
 * // Basic select
 * <SelectField
 *   placeholder="Select an option"
 *   options={[
 *     { label: 'Option 1', value: '1' },
 *     { label: 'Option 2', value: '2' },
 *   ]}
 * />
 *
 * @example
 * // Select in form with validation
 * <SelectField
 *   name="country"
 *   label="Country"
 *   required={true}
 *   rules={[{ required: true, message: 'Please select country' }]}
 *   options={[
 *     { label: 'Thailand', value: 'TH' },
 *     { label: 'United States', value: 'US' },
 *   ]}
 * />
 *
 * @example
 * // Multi-select with search
 * <SelectField
 *   mode="multiple"
 *   label="Skills"
 *   placeholder="Select skills"
 *   allowClear
 *   showSearch
 *   options={[
 *     { label: 'JavaScript', value: 'js' },
 *     { label: 'TypeScript', value: 'ts' },
 *     { label: 'React', value: 'react' },
 *   ]}
 * />
 *
 * @example
 * // Large select with custom variant
 * <SelectField
 *   size="large"
 *   variant="filled"
 *   placeholder="Choose category"
 *   options={categories}
 * />
 */
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
require("./custom.css");
const CustomSelectField = ({ size = 'middle', placeholder = '', disabled = false, allowClear = false, className = '', name, label, rules, vertical = false, formItemProps, validateStatus, help, variant, required, options, children, ...rest }) => {
    // Determine select size classes
    let sizeClass = '';
    if (size === 'large') {
        sizeClass =
            '!h-[48px] !text-base [&_.ant-select-selector]:!h-[48px] [&_.ant-select-selector]:!py-3 [&_.ant-select-selector]:!px-4';
    }
    else if (size === 'middle') {
        sizeClass =
            '!h-[40px] !text-base [&_.ant-select-selector]:!h-[40px] [&_.ant-select-selector]:!py-2 [&_.ant-select-selector]:!px-4 &_.ant-select-selector]:!text-base';
    }
    else if (size === 'small') {
        sizeClass =
            '!h-[32px] !text-sm [&_.ant-select-selector]:!h-[32px] [&_.ant-select-selector]:!py-1 [&_.ant-select-selector]:!px-3';
    }
    const selectNode = ((0, jsx_runtime_1.jsx)(antd_1.Select, { className: `${sizeClass} ${className}`, placeholder: placeholder, disabled: disabled, allowClear: allowClear, variant: variant, options: options, ...rest, children: children }));
    // Detect if any rule is required
    const isRequired = (Array.isArray(rules) && rules.some((rule) => rule.required === true)) ||
        required;
    // Prepare label with asterisk after
    const renderLabel = () => {
        if (label) {
            return ((0, jsx_runtime_1.jsxs)("span", { children: [label, isRequired && (0, jsx_runtime_1.jsx)("span", { className: "required-asterisk", children: "*" })] }));
        }
        return undefined;
    };
    // If name or label or rules provided, wrap with Form.Item
    if (name || label || rules) {
        const labelCol = vertical ? { span: 24 } : undefined;
        const wrapperCol = vertical ? { span: 24 } : undefined;
        return ((0, jsx_runtime_1.jsx)(antd_1.Form.Item, { name: name, label: renderLabel(), rules: rules, required: false, colon: false, labelCol: labelCol, wrapperCol: wrapperCol, validateStatus: validateStatus, help: help, className: "form-item-no-margin", ...formItemProps, children: selectNode }));
    }
    return selectNode;
};
exports.default = CustomSelectField;
