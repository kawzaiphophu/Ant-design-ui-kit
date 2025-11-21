import { Form, InputProps } from 'antd';
import { FC } from 'react';
import './custom.css';
export interface CustomTextFieldProps extends Omit<InputProps, 'size'> {
    size?: 'small' | 'middle' | 'large';
    name?: any;
    label?: React.ReactNode;
    rules?: any[];
    vertical?: boolean;
    formItemProps?: Omit<React.ComponentProps<typeof Form.Item>, 'name' | 'label' | 'rules' | 'labelCol' | 'wrapperCol' | 'required' | 'labelAlign' | 'labelWrap'>;
    validateStatus?: '' | 'warning' | 'error' | 'success' | 'validating' | undefined;
    help?: string;
    variant?: 'outlined' | 'borderless' | 'filled' | 'underlined';
    focusRing?: boolean;
    addonBefore?: React.ReactNode;
    addonAfter?: React.ReactNode;
    type?: 'text' | 'password' | 'email' | 'number' | 'textOnly' | 'textWithSymbols' | 'numberOnly' | 'tel';
    getValueProps?: (value: any) => {
        value: any;
    };
}
declare const CustomTextField: FC<CustomTextFieldProps>;
export default CustomTextField;
