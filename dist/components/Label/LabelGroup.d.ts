export type Themes = 'default' | 'destructive' | 'warning' | 'primary' | 'gray' | 'success' | 'info' | 'white';
interface Props {
    theme?: Themes;
    context?: string;
    label?: string;
}
export declare const LabelGroup: ({ theme, context, label, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
