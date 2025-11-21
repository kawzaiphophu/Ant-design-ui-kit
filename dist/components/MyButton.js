"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const MyButton = ({ children, ...rest }) => {
    return ((0, jsx_runtime_1.jsx)(antd_1.Button, { type: "primary", style: { borderRadius: 12, padding: "0 20px" }, ...rest, children: children }));
};
exports.MyButton = MyButton;
