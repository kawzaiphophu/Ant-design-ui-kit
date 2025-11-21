"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelStatus = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Typography_1 = __importDefault(require("@/components/Typography"));
const label_status_utils_1 = require("@/utils/Label/label-status.utils");
const antd_1 = require("antd");
const LabelStatus = ({ status }) => {
    return ((0, jsx_runtime_1.jsx)(antd_1.ConfigProvider, { children: (0, jsx_runtime_1.jsx)(antd_1.Button, { variant: "filled", size: "middle", style: {
                borderRadius: 24,
                paddingRight: 8,
                paddingLeft: 4,
                minWidth: 24,
                background: (0, label_status_utils_1.resolveBackground)(status),
                borderColor: (0, label_status_utils_1.resolveColor)(status),
            }, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-1", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-base", style: { color: (0, label_status_utils_1.resolveColor)(status) }, children: (0, jsx_runtime_1.jsx)("i", { className: (0, label_status_utils_1.resolveLeadingIcon)(status) }) }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "paragraph-extra-small", className: `font-regular`, style: { color: 'var(--color-text-primary)' }, children: (0, label_status_utils_1.resolveText)(status) }), true && ((0, jsx_runtime_1.jsx)("div", { className: "text-base", style: { color: (0, label_status_utils_1.resolveColor)(status) }, children: (0, jsx_runtime_1.jsx)("i", { className: `${'ri-close-line'}` }) }))] }) }) }));
};
exports.LabelStatus = LabelStatus;
