// Export AntD default under a namespace
export * as Antd from "./antd";

// Export custom UI components with named exports
export { default as CustomButton } from "./components/Button";
export { default as CustomTypography } from "./components/Typography";
export { default as CustomCheckbox } from "./components/DataEntry/Checkbox";
export { default as CustomDatePicker } from "./components/DataEntry/DatePicker";
export { default as CustomRadioGroup } from "./components/DataEntry/RadioGroup";
export { default as CustomSelectField } from "./components/DataEntry/Select";
export { default as CustomTextField } from "./components/DataEntry/TextField";
export { default as CustomToggleSwitch } from "./components/DataEntry/ToggleSwitch";

// Export types
export type { CustomButtonProps } from "./components/Button";
export type { CustomTypographyProps, TypographyVariant } from "./components/Typography";
export type { CustomCheckboxProps } from "./components/DataEntry/Checkbox";
export type { CustomRadioGroupProps } from "./components/DataEntry/RadioGroup";
export type { CustomSelectFieldProps } from "./components/DataEntry/Select";
export type { CustomTextFieldProps } from "./components/DataEntry/TextField";
export type { CustomToggleSwitchProps } from "./components/DataEntry/ToggleSwitch";

// Optional theme
export * from "./theme";
