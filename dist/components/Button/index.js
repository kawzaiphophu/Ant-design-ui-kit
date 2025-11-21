"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
require("./button.css");
const CustomButton = ({ fullWidth = false, size = 'middle', color = 'primary', variant = 'solid', bold = '600', icon, iconPosition = 'start', disabled = false, loading = false, onClick, children, className, htmlType, fitContent = false, rounding = 'standard', }) => {
    const classes = [
        'custom-button',
        `rounding-${rounding}`,
        fitContent ? 'size-fit-content' : `size-${size}`,
        `bold-${bold}`,
        `color-${color}`,
        `variant-${variant}`,
        className
    ].filter(Boolean).join(' ');
    return ((0, jsx_runtime_1.jsx)(antd_1.Button, { ghost: variant === 'ghost', block: fullWidth, size: size, icon: iconPosition === 'start' ? icon : undefined, iconPosition: iconPosition, disabled: disabled, loading: loading, onClick: (e) => onClick === null || onClick === void 0 ? void 0 : onClick(e), htmlType: htmlType, className: classes, children: iconPosition === 'end' && icon ? ((0, jsx_runtime_1.jsxs)("span", { className: "icon-end-wrapper", children: [children, icon] })) : (children) }));
};
exports.default = CustomButton;
