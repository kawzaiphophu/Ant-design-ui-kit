"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TabButton;
const jsx_runtime_1 = require("react/jsx-runtime");
const Typography_1 = __importDefault(require("../../Typography"));
const antd_1 = require("antd");
function TabButton({ active = false, children = '', icon, onClick, }) {
    return ((0, jsx_runtime_1.jsx)(antd_1.Button, { variant: active ? 'solid' : 'outlined', className: `!rounded-full !h-[2rem] md:!h-[2.5rem] ${active
            ? '!bg-primary !text-white !border-none !outline-none'
            : 'border !border-border-primary hover:!border-primary group'}`, onClick: onClick, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-1", children: [icon, (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "paragraph-small", className: `!font-normal ${active ? '!text-white' : 'group-hover:!text-primary '}`, onClick: onClick, children: children })] }) }));
}
