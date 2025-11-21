import { Button } from "antd";

export const MyButton = ({ children, ...rest }: any) => {
  return (
    <Button
      type="primary"
      style={{ borderRadius: 12, padding: "0 20px" }}
      {...rest}
    >
      {children}
    </Button>
  );
};
