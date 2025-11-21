"use strict";
/**
 * Typography Component
 *
 * A comprehensive typography component with multiple variants for headings, paragraphs, labels, and links.
 * Supports ellipsis, copyable text, and custom styling.
 *
 * @example
 * // Display heading
 * <Typography variant="h1">Main Heading</Typography>
 *
 * @example
 * // Paragraph with ellipsis
 * <Typography
 *   variant="paragraph-medium"
 *   ellipsis={true}
 *   ellipsisOptions={{ rows: 2, expandable: true }}
 * >
 *   Long paragraph text that will be truncated...
 * </Typography>
 *
 * @example
 * // Link variant
 * <Typography
 *   variant="link-big"
 *   href="https://example.com"
 *   target="_blank"
 * >
 *   Visit Website
 * </Typography>
 *
 * @example
 * // Page title with custom styling
 * <Typography
 *   variant="page-title"
 *   className="text-center"
 *   style={{ color: '#1890ff' }}
 * >
 *   Dashboard
 * </Typography>
 */
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const react_1 = require("react");
require("./typography.css");
const { Text, Title, Paragraph } = antd_1.Typography;
const CustomTypography = ({ variant, children, style, href, target, onClick, className, ellipsis, ellipsisOptions = {}, copyable = false, }) => {
    const [expanded, setExpanded] = (0, react_1.useState)(false);
    const getElement = () => {
        if (variant === 'h1' ||
            variant === 'display-1' ||
            variant === 'page-title') {
            return ((0, jsx_runtime_1.jsx)(Title, { level: 1, className: `${className} typography-${variant}`, style: style, title: children, children: children }));
        }
        if (variant === 'h2' || variant === 'display-2') {
            return ((0, jsx_runtime_1.jsx)(Title, { level: 2, className: `${className} typography-${variant}`, style: style, title: children, children: children }));
        }
        if (variant === 'h3' || variant === 'display-3') {
            return ((0, jsx_runtime_1.jsx)(Title, { level: 3, className: `${className} typography-${variant}`, style: style, title: children, children: children }));
        }
        if (variant === 'h4' || variant === 'display-4') {
            return ((0, jsx_runtime_1.jsx)(Title, { level: 4, className: `${className} typography-${variant}`, style: style, title: children, copyable: copyable
                    ? {
                        // tooltips: false,
                        icon: [
                            (0, jsx_runtime_1.jsx)("i", { className: "ri-checkbox-multiple-blank-line text-base !text-icon-quinary" }),
                            (0, jsx_runtime_1.jsx)("i", { className: "ri-checkbox-circle-line text-base !text-icon-quinary" }),
                        ],
                    }
                    : false, children: children }));
        }
        if (variant === 'h5' || variant === 'display-5') {
            return ((0, jsx_runtime_1.jsx)(Title, { level: 5, className: `${className} typography-${variant}`, style: style, title: children, children: children }));
        }
        if (variant === 'h6' || variant === 'display-6') {
            return ((0, jsx_runtime_1.jsx)(Title, { level: 5, className: `${className} typography-${variant}`, style: style, title: children, children: children }));
        }
        if (variant.startsWith('paragraph-')) {
            return ((0, jsx_runtime_1.jsx)(Paragraph, { className: `${className} typography-${variant}`, style: style, onClick: onClick, title: children, ellipsis: ellipsis
                    ? {
                        rows: ellipsisOptions.rows || 1,
                        expandable: ellipsisOptions.expandable,
                        symbol: expanded
                            ? ellipsisOptions.symbolExpanded
                            : ellipsisOptions.symbolNotExpanded,
                        onExpand: (_, info) => setExpanded(info.expanded),
                    }
                    : false, children: children }));
        }
        if (variant.startsWith('link-')) {
            return ((0, jsx_runtime_1.jsx)(Text, { className: `${className} typography-${variant}`, style: style, onClick: onClick, title: children, children: href ? ((0, jsx_runtime_1.jsx)("a", { href: href, target: target, children: children })) : (children) }));
        }
        return ((0, jsx_runtime_1.jsx)(Text, { className: `${className} typography-${variant}`, style: style, onClick: onClick, title: children, children: href ? ((0, jsx_runtime_1.jsx)("a", { href: href, target: target, children: children })) : (children) }));
    };
    return getElement();
};
exports.default = CustomTypography;
