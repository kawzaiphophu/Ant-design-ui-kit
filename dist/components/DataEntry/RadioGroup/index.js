"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
require("./custom.css");
const CustomRadioGroup = ({ name, label, rules, options = [], onChange, value, buttonStyle, useRadioButton = false, formItemProps = {}, radioGroupProps = {}, block = false, vertical = false, disabled = false, validateStatus, help, }) => {
    const radioGroup = ((0, jsx_runtime_1.jsx)(antd_1.Radio.Group, { size: "large", onChange: onChange, value: value, buttonStyle: buttonStyle, block: block, disabled: disabled, className: "custom-allkons custom-radio-group", style: {
            display: 'flex',
            flexDirection: vertical ? 'column' : 'row',
            gap: '12px',
        }, ...radioGroupProps, children: options.map((option) => useRadioButton ? ((0, jsx_runtime_1.jsx)(antd_1.Radio.Button, { value: option.value, disabled: option.disabled, children: option.label }, option.value)) : ((0, jsx_runtime_1.jsx)(antd_1.Radio, { value: option.value, disabled: option.disabled, children: option.label }, option.value))) }));
    const isRequired = Array.isArray(rules) && rules.some((rule) => rule.required === true);
    const renderLabel = () => {
        if (label) {
            return ((0, jsx_runtime_1.jsxs)("span", { children: [label, isRequired && (0, jsx_runtime_1.jsx)("span", { className: "required-asterisk", children: "*" })] }));
        }
        return null;
    };
    if (name || label || rules || Object.keys(formItemProps).length > 0) {
        const labelCol = vertical ? { span: 24 } : undefined;
        const wrapperCol = vertical ? { span: 24 } : undefined;
        return ((0, jsx_runtime_1.jsx)(antd_1.Form.Item, { name: name, label: renderLabel(), rules: rules, required: false, colon: false, labelCol: labelCol, wrapperCol: wrapperCol, layout: "vertical", validateStatus: validateStatus, help: help, className: "form-item-no-margin", ...formItemProps, children: radioGroup }));
    }
    return radioGroup;
};
exports.default = CustomRadioGroup;
