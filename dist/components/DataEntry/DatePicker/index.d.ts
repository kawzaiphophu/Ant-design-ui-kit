import React, { ReactNode } from 'react';
import { Form, FormItemProps } from 'antd';
import { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';
import { Dayjs } from 'dayjs';
import 'dayjs/locale/th';
interface CustomDatePickerProps extends Omit<DatePickerProps, 'value' | 'onChange'> {
    label?: ReactNode;
    name?: any;
    required?: boolean;
    requiredMessage?: string;
    rules?: any[];
    tooltip?: string;
    extra?: ReactNode;
    help?: ReactNode;
    validateStatus?: FormItemProps['validateStatus'];
    hasFeedback?: boolean;
    placeholder?: string;
    dateRange?: false;
    value?: Dayjs | null;
    onChange?: (date: Dayjs | null, dateString: string) => void;
    vertical?: boolean;
    getValueFormEvent?: (date: Dayjs | null, dateString: string) => any;
    formItemProps?: Omit<React.ComponentProps<typeof Form.Item>, 'name' | 'label' | 'rules' | 'labelCol' | 'wrapperCol' | 'required' | 'labelAlign' | 'labelWrap'>;
}
interface CustomRangePickerProps extends Omit<RangePickerProps, 'value' | 'onChange'> {
    label?: ReactNode;
    name?: any;
    required?: boolean;
    requiredMessage?: string;
    rules?: any[];
    tooltip?: string;
    extra?: ReactNode;
    help?: ReactNode;
    validateStatus?: FormItemProps['validateStatus'];
    hasFeedback?: boolean;
    placeholder?: [string, string];
    dateRange: true;
    value?: [Dayjs | null, Dayjs | null] | null;
    onChange?: (dates: [Dayjs | null, Dayjs | null] | null, dateStrings: [string, string]) => void;
    vertical?: boolean;
    getValueFormEvent?: (dates: [Dayjs | null, Dayjs | null] | null, dateStrings: [string, string]) => any;
    formItemProps?: Omit<React.ComponentProps<typeof Form.Item>, 'name' | 'label' | 'rules' | 'labelCol' | 'wrapperCol' | 'required' | 'labelAlign' | 'labelWrap'>;
}
type DatePickerComponentProps = CustomDatePickerProps | CustomRangePickerProps;
declare const CustomDatePicker: React.FC<DatePickerComponentProps>;
export default CustomDatePicker;
