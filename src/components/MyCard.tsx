import { Card } from "antd";

export const MyCard = ({ children, ...rest }: any) => {
  return (
    <Card
      style={{ borderRadius: 16, boxShadow: "0 4px 16px #e0e0e0" }}
      {...rest}
    >
      {children}
    </Card>
  );
};
