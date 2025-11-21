import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "antd";
export const MyButton = ({ children, ...rest }) => {
    return (_jsx(Button, { type: "primary", style: { borderRadius: 12, padding: "0 20px" }, ...rest, children: children }));
};
