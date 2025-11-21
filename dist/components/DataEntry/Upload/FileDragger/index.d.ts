import { UploadFile, FormInstance } from 'antd';
import { FC } from 'react';
import './custom.css';
type FormType = {
    key: any;
    formInstance: FormInstance<any>;
};
interface UploadFileDraggerProps {
    file: UploadFile[];
    setFile: (file: UploadFile[]) => void;
    form?: FormType;
    label?: string;
    maxCount?: number;
    maxSize?: number;
    acceptedTypes?: string[];
    acceptedExtensions?: string;
    description?: string;
    required?: boolean;
    className?: string;
    showUploadList?: boolean;
    customFileList?: boolean;
}
declare const UploadFileDragger: FC<UploadFileDraggerProps>;
export default UploadFileDragger;
