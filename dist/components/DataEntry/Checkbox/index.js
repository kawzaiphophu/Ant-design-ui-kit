"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
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
const antd_1 = require("antd");
require("./custom.css");
const CustomCheckbox = ({ name, label, supportingText, rules, vertical = false, checked, defaultChecked, disabled = false, formItemProps, indeterminate = false, size = 'default', onChange, }) => {
    const checkboxNode = ((0, jsx_runtime_1.jsx)(antd_1.Checkbox, { checked: checked, defaultChecked: defaultChecked, disabled: disabled, indeterminate: indeterminate, onChange: onChange, className: `custom-allkons custom-checkbox size-${size}`, children: vertical ? null : ((0, jsx_runtime_1.jsxs)("div", { className: `flex flex-col gap-1 ${size === 'large'
                ? 'text-lg'
                : size === 'small'
                    ? 'text-sm'
                    : 'text-base'} ${disabled ? 'text-disabled' : ''} ${size === 'default' && !supportingText && 'mt-[2px]'}`, children: [label, supportingText && ((0, jsx_runtime_1.jsx)("div", { className: disabled ? 'text-disabled' : 'text-gray', children: supportingText }))] })) }));
    // When used within a Form.Item
    if (name || rules) {
        const labelCol = vertical ? { span: 24 } : undefined;
        const wrapperCol = vertical ? { span: 24 } : undefined;
        return ((0, jsx_runtime_1.jsx)(antd_1.Form.Item, { name: name, valuePropName: "checked", label: vertical ? label : undefined, rules: rules, labelCol: labelCol, wrapperCol: wrapperCol, className: "!mb-0", ...formItemProps, children: checkboxNode }));
    }
    return (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col", children: checkboxNode });
};
exports.default = CustomCheckbox;
