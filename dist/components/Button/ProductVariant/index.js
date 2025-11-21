"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const Typography_1 = __importDefault(require("../../Typography"));
const ProductVariantButton = ({ isActive = true, children, onClick, }) => {
    const { sm } = antd_1.Grid.useBreakpoint();
    const isMobile = !sm;
    return ((0, jsx_runtime_1.jsxs)("div", { onClick: onClick, className: `relative px-4 py-2 border rounded-lg overflow-hidden hover:!border-primary cursor-pointer ${isActive ? '!border-primary' : '!border-border-primary'}`, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: isMobile ? 'paragraph-small' : 'paragraph-medium', className: `!line-clamp-1 !text-start ${isActive ? '!text-primary' : '!text-text-secondary'}`, children: children }), isActive && ((0, jsx_runtime_1.jsx)("div", { className: "absolute -top-1 -right-0.5 px-1 bg-primary", style: { borderBottomLeftRadius: '12px' }, children: (0, jsx_runtime_1.jsx)("i", { className: "ri-check-line text-white text-xs" }) }))] }));
};
exports.default = ProductVariantButton;
