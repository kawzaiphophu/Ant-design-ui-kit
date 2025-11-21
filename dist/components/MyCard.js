import { jsx as _jsx } from "react/jsx-runtime";
import { Card } from "antd";
export const MyCard = ({ children, ...rest }) => {
    return (_jsx(Card, { style: { borderRadius: 16, boxShadow: "0 4px 16px #e0e0e0" }, ...rest, children: children }));
};
