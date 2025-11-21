import { SelectProps, Form } from 'antd';
import { FC } from 'react';
import './custom.css';
export interface CustomSelectFieldProps extends Omit<SelectProps, 'size'> {
    size?: 'small' | 'middle' | 'large';
    name?: string | (string | number)[];
    label?: React.ReactNode;
    rules?: any[];
    vertical?: boolean;
    formItemProps?: Omit<React.ComponentProps<typeof Form.Item>, 'name' | 'label' | 'rules' | 'labelCol' | 'wrapperCol' | 'required' | 'labelAlign' | 'labelWrap'>;
    validateStatus?: '' | 'warning' | 'error' | 'success' | 'validating' | undefined;
    help?: string;
    variant?: 'outlined' | 'borderless' | 'filled';
    required?: boolean;
}
declare const CustomSelectField: FC<CustomSelectFieldProps>;
export default CustomSelectField;
