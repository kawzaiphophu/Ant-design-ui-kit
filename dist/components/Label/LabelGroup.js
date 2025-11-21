"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Typography_1 = __importDefault(require("@/components/Typography"));
const antd_1 = require("antd");
const label_group_utils_1 = require("../../utils/Label/label-group.utils");
const LabelGroup = ({ theme = 'default', context = 'Context', label = 'Label', }) => {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(antd_1.Button, { variant: "filled", style: {
                background: (0, label_group_utils_1.resolveBackground)(theme),
                borderRadius: 24,
                border: (0, label_group_utils_1.resolveTextColor)(theme).border,
                padding: '0px 8px',
            }, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-1", children: [(0, jsx_runtime_1.jsx)("div", { className: "px-2 rounded-2xl", style: {
                            background: (0, label_group_utils_1.resolveContextBackground)(theme),
                        }, children: (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "paragraph-small", className: "font-regular", style: { color: (0, label_group_utils_1.resolveTextColor)(theme).context }, children: context }) }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "paragraph-small", className: "font-regular", style: { color: (0, label_group_utils_1.resolveTextColor)(theme).label }, children: label }), (0, jsx_runtime_1.jsx)("div", { className: "text-base", style: { color: (0, label_group_utils_1.resolveTextColor)(theme).icon }, children: (0, jsx_runtime_1.jsx)("i", { className: "ri-arrow-right-line" }) })] }) }) }));
};
exports.LabelGroup = LabelGroup;
