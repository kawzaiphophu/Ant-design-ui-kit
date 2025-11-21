"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const react_1 = require("react");
const Typography_1 = __importDefault(require("../../Typography"));
require("./custom.css");
const getBackgroundColor = (isDisabled, isChecked, color) => {
    if (isChecked && !isDisabled && color === 'success') {
        return 'var(--color-success)';
    }
    if (isChecked && !isDisabled && color === 'brand') {
        return 'var(--color-brand-00)';
    }
    return '#D0D0D0';
};
const CustomToggleSwitch = ({ size = 'large', showLabel: showText = true, color = 'success', isChecked = false, isDisabled = false, type = 'default', title, supportingText, onChange, }) => {
    const [isCheckedState, setIsCheckedState] = (0, react_1.useState)(isChecked);
    const handleChange = () => {
        const newCheckedState = !isCheckedState;
        setIsCheckedState(newCheckedState);
        onChange === null || onChange === void 0 ? void 0 : onChange(newCheckedState);
    };
    (0, react_1.useEffect)(() => {
        setIsCheckedState(isChecked);
    }, [isChecked]);
    const switchClass = `${color === 'success' ? 'default' : 'brand'} ${size === 'small' ? 'switch-small' : 'switch-default'}`;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "toggle-switch-container", children: [(0, jsx_runtime_1.jsx)(antd_1.Switch, { defaultChecked: isChecked, checked: isCheckedState, onChange: handleChange, checkedChildren: showText ? 'ON' : '', unCheckedChildren: showText ? 'OFF' : '', disabled: isDisabled, size: size === 'small' ? 'small' : 'default', className: switchClass }), type === 'text' && ((0, jsx_runtime_1.jsxs)("div", { className: "toggle-text-container", children: [title && ((0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "paragraph-small", className: "toggle-title", children: title })), supportingText && ((0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "paragraph-medium", className: "toggle-supporting-text", children: supportingText }))] }))] }));
};
exports.default = CustomToggleSwitch;
