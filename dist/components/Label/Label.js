"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Typography_1 = __importDefault(require("@/components/Typography"));
const label_utils_1 = require("../../utils/Label/label-utils");
require("./custom.css");
const Label = ({ color, size = 'middle', rounding = 'rounded', prefix, suffix, variant = 'outlined', noBorder = false, text = '', }) => {
    const borderRadiusMapStyle = {
        small: {
            rounded: '4px',
            pill: '9999px',
        },
        middle: {
            rounded: '4px',
            pill: '9999px',
        },
        large: {
            rounded: '6px',
            pill: '9999px',
        },
    };
    const resolveBackgroundGhost = (color) => {
        switch (color) {
            case 'neutral':
                return 'var(--color-neutral-p-95)';
            case 'brand':
                return 'var(--color-purple-p-90)';
            case 'purple':
                return 'var(--color-lavender-purple-p-90)';
            case 'warning':
                return 'var(--color-warning-p-90)';
            case 'error':
                return 'var(--color-error-p-90)';
            case 'info':
                return 'var(--color-info-p-90)';
            case 'success':
                return 'var(--color-success-p-90)';
            default:
                return 'none';
        }
    };
    const resolveBorderColor = (color) => {
        switch (color) {
            case 'neutral':
                return 'var(--color-neutral-p-80)';
            case 'brand':
                return 'var(--color-brand-p-60)';
            case 'purple':
                return 'var(--color-lavender-purple-p-60)';
            case 'warning':
                return 'var(--color-warning-p-60)';
            case 'error':
                return 'var(--color-error-p-60)';
            case 'info':
                return 'var(--color-info-p-60)';
            case 'success':
                return 'var(--color-success-p-60)';
            default:
                return 'none';
        }
    };
    const backgroundMapStyle = {
        outlined: 'transparent',
        solid: (0, label_utils_1.colorToVar)(color || 'neutral'),
        ghost: resolveBackgroundGhost(color || 'neutral'),
        modern: 'var(--color-neutral-p-90)',
    };
    const textColorClassName = {
        outlined: {
            neutral: '!text-neutral',
            brand: '!text-brand',
            warning: '!text-warning-p20',
            error: '!text-error',
            info: '!text-info',
            purple: '!text-purple',
            success: '!text-success',
        },
        solid: {
            neutral: '!text-white',
            brand: '!text-white',
            warning: '!text-white',
            error: '!text-white',
            info: '!text-white',
            purple: '!text-white',
            success: '!text-white',
        },
        ghost: {
            neutral: '!text-neutral',
            brand: '!text-brand',
            warning: '!text-warning',
            error: '!text-error',
            info: '!text-info',
            purple: '!text-purple',
            success: '!text-success',
        },
        modern: {
            neutral: '!text-neutral',
            brand: '!text-brand',
            warning: '!text-warning',
            error: '!text-error',
            info: '!text-info',
            purple: '!text-purple',
            success: '!text-success',
        },
    };
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            background: backgroundMapStyle[variant],
            minWidth: (0, label_utils_1.resolveMinWidth)(size),
            flexShrink: 0,
            height: (0, label_utils_1.resolveMinWidth)(size),
            paddingLeft: '8px',
            paddingRight: '8px',
            borderRadius: borderRadiusMapStyle[size][rounding],
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // gap: size === "small" ? "4px" : "8px",
            gap: '4px',
            border: `${noBorder
                ? 'none'
                : `1px solid ${variant === 'modern'
                    ? '#DEE1E6'
                    : resolveBorderColor(color || 'neutral')}`}`,
            cursor: 'pointer',
        }, children: [prefix && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: prefix }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: size == 'small'
                    ? 'paragraph-extra-small-regular'
                    : size == 'middle'
                        ? 'paragraph-small'
                        : 'paragraph-medium', className: `font-regular whitespace-nowrap ${variant === 'modern'
                    ? '!text-neutral-40'
                    : textColorClassName[variant][color || 'neutral']}`, children: text || 'Label' }), suffix && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: suffix })] }));
};
exports.Label = Label;
