"use strict";
/**
 * DatePicker Component
 *
 * A flexible date picker component supporting both single date and date range selection.
 * Built on Ant Design DatePicker with Thai locale support and form integration.
 *
 * @example
 * // Basic date picker
 * <DatePicker
 *   placeholder="Select date"
 *   onChange={(date, dateString) => console.log(date)}
 * />
 *
 * @example
 * // Date picker in form with validation
 * <DatePicker
 *   name="birthdate"
 *   label="Birth Date"
 *   required={true}
 *   rules={[{ required: true, message: 'Please select date' }]}
 * />
 *
 * @example
 * // Date range picker
 * <DatePicker
 *   dateRange={true}
 *   placeholder={['Start Date', 'End Date']}
 *   onChange={(dates, dateStrings) => console.log(dates)}
 * />
 *
 * @example
 * // Date picker with disabled dates
 * <DatePicker
 *   label="Appointment Date"
 *   disabledDate={(current) => current && current < dayjs().startOf('day')}
 *   size="large"
 * />
 */
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const dayjs_1 = __importDefault(require("dayjs"));
require("dayjs/locale/th");
const { RangePicker } = antd_1.DatePicker;
const CustomDatePicker = (props) => {
    const { label, name, required = false, requiredMessage, rules = [], tooltip, extra, help, validateStatus, hasFeedback, placeholder, dateRange = false, size = 'large', vertical = false, getValueFormEvent, formItemProps, ...datePickerProps } = props;
    // Set Thai locale
    dayjs_1.default.locale('th');
    const defaultRules = [
        ...(required
            ? [
                {
                    required: true,
                    message: requiredMessage || `กรุณาเลือก${label || 'วันที่'}`,
                },
            ]
            : []),
        ...rules,
    ];
    const commonProps = {
        size,
        style: { width: '100%' },
        format: 'DD/MM/YYYY',
        ...datePickerProps,
    };
    // Detect if any rule is required
    const isRequired = (Array.isArray(rules) && rules.some((rule) => rule.required === true)) ||
        required;
    // Prepare label with asterisk after, using same logic as TextField
    const renderLabel = () => {
        if (label) {
            return ((0, jsx_runtime_1.jsxs)("span", { children: [label, isRequired && (0, jsx_runtime_1.jsx)("span", { className: "text-primary ml-1 text-xs", children: "*" })] }));
        }
        return undefined;
    };
    const datePickerNode = dateRange ? ((0, jsx_runtime_1.jsx)(RangePicker, { ...commonProps, placeholder: placeholder || ['เริ่มต้น', 'สิ้นสุด'], disabledDate: datePickerProps.disabledDate })) : ((0, jsx_runtime_1.jsx)(antd_1.DatePicker, { ...commonProps, placeholder: placeholder || 'เลือกวันที่', disabledDate: datePickerProps.disabledDate }));
    // If name or label or rules provided, wrap with Form.Item (same logic as TextField)
    if (name || label || rules) {
        const labelCol = vertical ? { span: 24 } : undefined;
        const wrapperCol = vertical ? { span: 24 } : undefined;
        return ((0, jsx_runtime_1.jsx)(antd_1.Form.Item, { name: name, label: renderLabel(), rules: defaultRules, required: false, colon: false, labelCol: labelCol, wrapperCol: wrapperCol, tooltip: tooltip, extra: extra, help: help, validateStatus: validateStatus, hasFeedback: hasFeedback, getValueFromEvent: getValueFormEvent, className: "!mb-0", ...formItemProps, children: datePickerNode }));
    }
    return datePickerNode;
};
exports.default = CustomDatePicker;
