"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const CustomButton = ({ fullWidth = false, size = 'middle', color = 'primary', variant = 'solid', bold = '600', icon, iconPosition = 'start', disabled = false, loading = false, onClick, children, className, htmlType, fitContent = false, rounding = 'standard', }) => {
    var _a, _b;
    const colorMap = {
        primary: {
            solid: '!text-white !bg-primary hover:!bg-primary !border !border-primary hover:!border-primary',
            outlined: '!text-primary hover:!text-primary-dark !bg-transparent hover:!bg-primary-hover !border !border-primary hover:!border-primary-dark',
            ghost: '!text-primary hover:!text-primary-dark hover:!bg-primary-hover !bg-transparent !border-none',
            dashed: '!text-primary !border !border-dashed !border-primary hover:!bg-primary-hover',
            link: '!text-primary hover:!text-primary-dark !bg-transparent !border-none',
        },
        error: {
            solid: '!text-white !bg-error hover:!bg-error-dark !border !border-error hover:!border-error-dark',
            outlined: '!text-error hover:!text-error-dark !bg-transparent hover:!bg-error-hover !border !border-error hover:!border-error-dark',
            ghost: '!text-error !bg-transparent hover:!bg-error-hover hover:!text-error-dark !border-none',
            dashed: '!text-error !border !border-dashed !border-error hover:!bg-error-hover',
            link: '!text-error !bg-transparent hover:!bg-error-hover !border-none',
        },
        neutral: {
            solid: '!text-white !bg-neutral-text !border !border-neutral-bg',
            outlined: '!text-neutral-text hover:!text-hover-text !bg-transparent hover:!bg-neutral-bg !border !border-neutral-border hover:!border-[#BDC3CD]',
            ghost: '!text-neutral-text hover:!text-hover-text !bg-transparent hover:!bg-neutral-bg !border-0',
            dashed: '!text-neutral-text hover:!text-hover-text hover:!bg-neutral-bg !border !border-dashed !border-neutral-border hover:!border-[#BDC3CD]',
            link: '!text-neutral-text hover:!text-hover-text !bg-transparent !border-0',
        },
    };
    const classNameMapping = (_b = (_a = colorMap[color]) === null || _a === void 0 ? void 0 : _a[variant]) !== null && _b !== void 0 ? _b : '';
    const disabledClass = variant !== 'ghost'
        ? '!bg-disabled-background !text-disabled-text !border-0 cursor-not-allowed'
        : '!bg-transparent !border-0';
    const sizeClass = fitContent
        ? '!h-fit !w-fit !text-base !p-0'
        : size === 'large'
            ? '!text-xl !min-w-[48px] !h-[48px]'
            : size === 'small'
                ? '!text-sm !min-w-[32px] !h-[32px]'
                : '!text-base !min-w-[40px] !h-[40px]';
    const boldClass = bold === '500'
        ? '!font-medium'
        : bold === '600'
            ? '!font-semibold'
            : bold === '700'
                ? '!font-bold'
                : '!font-normal';
    return ((0, jsx_runtime_1.jsx)(antd_1.Button, { ghost: variant === 'ghost', block: fullWidth, size: size, icon: iconPosition === 'start' ? icon : undefined, iconPosition: iconPosition, disabled: disabled, loading: loading, onClick: (e) => onClick === null || onClick === void 0 ? void 0 : onClick(e), htmlType: htmlType, className: `${rounding === 'full' ? '!rounded-full' : '!rounded-lg'} !shadow-none ${disabled ? disabledClass : classNameMapping} ${sizeClass} ${boldClass} ${className !== null && className !== void 0 ? className : ''}`, children: iconPosition === 'end' && icon ? ((0, jsx_runtime_1.jsxs)("span", { className: "flex items-center gap-2", children: [children, icon] })) : (children) }));
};
exports.default = CustomButton;
