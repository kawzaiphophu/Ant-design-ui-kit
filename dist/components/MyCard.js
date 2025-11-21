"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const MyCard = ({ children, ...rest }) => {
    return ((0, jsx_runtime_1.jsx)(antd_1.Card, { style: { borderRadius: 16, boxShadow: "0 4px 16px #e0e0e0" }, ...rest, children: children }));
};
exports.MyCard = MyCard;
