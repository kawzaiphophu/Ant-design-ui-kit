"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Typography_1 = __importDefault(require("@/components/Typography"));
const antd_1 = require("antd");
const react_1 = require("react");
require("./custom.css");
const Button_1 = __importDefault(require("@/components/Button"));
const image_1 = __importDefault(require("next/image"));
const file_upload_1 = require("@/common/api/file-upload");
const notification_hook_1 = require("@/hooks/notification.hook");
const { Dragger } = antd_1.Upload;
const UploadFileDragger = ({ file, setFile, form, label, maxCount = 5, maxSize = 10, acceptedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/jpeg',
    'image/jpg',
    'image/png',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
], acceptedExtensions = '.pdf,.doc,.docx,.jpg,.jpeg,.png,.xlsx,.xls', description = 'PDF, DOC, DOCX, JPG, PNG, XLS, XLSX', required = false, className = '', showUploadList = false, customFileList = true, }) => {
    const { notification } = (0, notification_hook_1.useNotification)();
    const [pendingFiles, setPendingFiles] = (0, react_1.useState)([]);
    // Check if any file is currently uploading
    const isUploading = file.some((f) => f.status === 'uploading');
    const getFileIcon = (fileName) => {
        var _a;
        const ext = (_a = fileName.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        switch (ext) {
            case 'pdf':
                return 'ri-file-pdf-line text-red-500';
            case 'doc':
            case 'docx':
                return 'ri-file-word-line text-blue-600';
            case 'xls':
            case 'xlsx':
                return 'ri-file-excel-line text-green-600';
            case 'jpg':
            case 'jpeg':
            case 'png':
                return 'ri-image-line text-purple-500';
            default:
                return 'ri-file-line text-gray-500';
        }
    };
    const formatFileSize = (bytes) => {
        if (bytes === 0)
            return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };
    const CustomFileList = ({ fileList }) => {
        const [isOpenModal, setIsOpenModal] = (0, react_1.useState)(false);
        const [filePreview, setFilePreview] = (0, react_1.useState)(null);
        return ((0, jsx_runtime_1.jsxs)("div", { className: "mt-4", children: [(0, jsx_runtime_1.jsx)(antd_1.Modal, { open: isOpenModal, onCancel: () => setIsOpenModal(false), footer: null, width: 480, children: filePreview && ((0, jsx_runtime_1.jsx)("div", { className: "flex flex-col items-center", children: filePreview.url ? ((0, jsx_runtime_1.jsx)("img", { src: filePreview.url, alt: "preview", className: "w-full h-auto rounded-lg" })) : ((0, jsx_runtime_1.jsx)(image_1.default, { src: "/assets/icons/file-type-img.svg", alt: "img-icon", width: 200, height: 200 })) })) }), fileList.map((file) => {
                    var _a, _b, _c;
                    const fileType = (_a = file.name.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
                    return ((0, jsx_runtime_1.jsxs)("div", { className: `flex justify-between p-3 border ${file.status === 'error'
                            ? 'border-error'
                            : 'border-border-primary'}  rounded-lg mb-2 bg-background-secondary`, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex w-[calc(100%_-_100px)] items-center", onClick: () => {
                                    var _a;
                                    const isImage = fileType === 'jpg' ||
                                        fileType === 'jpeg' ||
                                        fileType === 'png';
                                    if (file.originFileObj) {
                                        if (isImage) {
                                            setIsOpenModal(true);
                                            setFilePreview({
                                                ...file,
                                                url: URL.createObjectURL(file.originFileObj),
                                            });
                                        }
                                        else {
                                            if ((_a = file.response) === null || _a === void 0 ? void 0 : _a.url) {
                                                window.open(file.response.url, '_blank');
                                            }
                                        }
                                    }
                                }, children: [(0, jsx_runtime_1.jsx)("div", { className: "w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3", children: fileType === 'pdf' ? ((0, jsx_runtime_1.jsx)(image_1.default, { src: "/assets/icons/file-type-pdf.svg", alt: "pdf-icon", className: "mx-auto", width: 24, height: 24 })) : fileType === 'jpg' || fileType === 'jpeg' ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: ((_b = file === null || file === void 0 ? void 0 : file.response) === null || _b === void 0 ? void 0 : _b.url) ? ((0, jsx_runtime_1.jsx)(image_1.default, { src: file.response.url, alt: "img-preview", className: "mx-auto w-10 h-10 object-cover rounded", width: 24, height: 24 })) : ((0, jsx_runtime_1.jsx)(image_1.default, { src: "/assets/icons/file-type-img.svg", alt: "img-icon", className: "mx-auto", width: 24, height: 24 })) })) : fileType === 'png' ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: ((_c = file === null || file === void 0 ? void 0 : file.response) === null || _c === void 0 ? void 0 : _c.url) ? ((0, jsx_runtime_1.jsx)(image_1.default, { src: file.response.url, alt: "img-preview", className: "mx-auto w-10 h-10 object-cover rounded", width: 24, height: 24 })) : ((0, jsx_runtime_1.jsx)(image_1.default, { src: "/assets/icons/file-type-png.svg", alt: "img-icon", className: "mx-auto", width: 24, height: 24 })) })) : ((0, jsx_runtime_1.jsx)("i", { className: `${getFileIcon(file.name || '')} text-lg` })) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 min-w-0", children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "paragraph-small", className: "!text-text-secondary !font-medium truncate", children: file.name }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2 mt-1", children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "paragraph-small", className: "!text-text-quarternary", children: formatFileSize(file.size || 0) }), (0, jsx_runtime_1.jsx)(antd_1.Divider, { type: "vertical", className: "!mr-0" }), file.status === 'done' && ((0, jsx_runtime_1.jsxs)(Typography_1.default, { variant: "paragraph-small", className: "!text-success", children: [(0, jsx_runtime_1.jsx)("i", { className: "ri-checkbox-circle-line mr-1" }), "\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08"] })), file.status === 'error' && ((0, jsx_runtime_1.jsxs)(Typography_1.default, { variant: "paragraph-small", className: "!text-error", children: [(0, jsx_runtime_1.jsx)("i", { className: "ri-error-warning-line mr-1" }), "\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27"] })), file.status === 'uploading' && ((0, jsx_runtime_1.jsxs)(Typography_1.default, { variant: "paragraph-small", className: "!text-text-quinary text-xs", children: [(0, jsx_runtime_1.jsx)("i", { className: "ri-upload-cloud-2-line mr-1" }), "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14"] }))] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-end", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "ghost", color: "neutral", size: "small", disabled: file.status === 'uploading', icon: (0, jsx_runtime_1.jsx)("i", { className: "ri-delete-bin-6-line text-neutral-60" }), onClick: () => {
                                            const currentFiles = fileList || [];
                                            const updatedFiles = currentFiles.filter((f) => f.uid !== file.uid);
                                            const finalFiles = updatedFiles.length > 0 ? updatedFiles : [];
                                            setFile(finalFiles);
                                            if (form) {
                                                const { key, formInstance } = form;
                                                formInstance.setFieldValue(key, finalFiles);
                                                if (!finalFiles || finalFiles.length === 0) {
                                                    formInstance.setFields([
                                                        {
                                                            name: key,
                                                            errors: [],
                                                        },
                                                    ]);
                                                }
                                            }
                                        } }), file.status === 'error' && ((0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "paragraph-small", className: "!text-error !font-medium", children: "\u0E25\u0E2D\u0E07\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07" }))] })] }, file.uid));
                })] }));
    };
    // Handle multiple files upload in parallel
    const handleMultipleFileUpload = async (filesToUpload) => {
        const currentFiles = file || [];
        // Create UploadFile objects for all files
        const uploadFiles = filesToUpload.map((fileToUpload) => ({
            uid: fileToUpload.uid || Date.now().toString() + Math.random().toString(),
            name: fileToUpload.name,
            size: fileToUpload.size,
            type: fileToUpload.type,
            status: 'uploading',
            originFileObj: fileToUpload,
            lastModified: fileToUpload.lastModified,
            lastModifiedDate: fileToUpload.lastModifiedDate,
        }));
        const updatedFiles = [...currentFiles, ...uploadFiles];
        setFile(updatedFiles);
        if (form) {
            const { key, formInstance } = form;
            formInstance.setFieldValue(key, updatedFiles);
            formInstance.setFields([
                {
                    name: key,
                    errors: [],
                },
            ]);
        }
        // Upload all files in parallel using Promise.all
        const uploadPromises = uploadFiles.map(async (fileUpload) => {
            try {
                const formData = new FormData();
                formData.append('file', fileUpload.originFileObj, 'test');
                formData.append('folderName', 'test');
                formData.append('isPublic', 'true');
                const response = await (0, file_upload_1.uploadFile)(formData);
                return {
                    uid: fileUpload.uid,
                    status: 'done',
                    response: response,
                    url: (response === null || response === void 0 ? void 0 : response.url) || undefined,
                };
            }
            catch (error) {
                console.error('Upload failed for:', fileUpload.name, error);
                return {
                    uid: fileUpload.uid,
                    status: 'error',
                    error: error,
                };
            }
        });
        try {
            const results = await Promise.all(uploadPromises);
            // Update all files with their final status
            const updatedFilesWithResults = updatedFiles.map((f) => {
                const result = results.find((r) => r.uid === f.uid);
                if (result) {
                    return {
                        ...f,
                        status: result.status,
                        response: result.response,
                        url: result.url,
                        error: result.error,
                    };
                }
                return f;
            });
            setFile(updatedFilesWithResults);
            if (form) {
                const { key, formInstance } = form;
                formInstance.setFieldValue(key, updatedFilesWithResults);
            }
        }
        catch (error) {
            console.error('Promise.all failed:', error);
        }
    };
    // Handle single file upload (fallback)
    const handleFileUpload = async (fileToUpload) => {
        await handleMultipleFileUpload([fileToUpload]);
    };
    const onChange = ({ file: newFile, fileList }) => {
        if (newFile.status === 'removed') {
            const currentFiles = file || [];
            const updatedFiles = currentFiles.filter((f) => f.uid !== newFile.uid);
            const finalFiles = updatedFiles.length > 0 ? updatedFiles : [];
            setFile(finalFiles);
            if (form) {
                const { key, formInstance } = form;
                formInstance.setFieldValue(key, finalFiles);
                if (!finalFiles || finalFiles.length === 0) {
                    formInstance.setFields([
                        {
                            name: key,
                            errors: [],
                        },
                    ]);
                }
            }
        }
    };
    const uploadProps = {
        multiple: true,
        maxCount,
        accept: acceptedExtensions,
        showUploadList,
        fileList: file || [],
        disabled: isUploading, // Disable upload area when files are uploading
        beforeUpload: (uploadFile, fileList) => {
            // Check if any file is currently uploading
            if (isUploading) {
                notification.error({
                    message: 'กรุณารอให้การอัปโหลดปัจจุบันเสร็จสิ้นก่อน',
                    duration: 3,
                    icon: (0, jsx_runtime_1.jsx)("i", { className: "ri-information-line text-error" }),
                });
                return antd_1.Upload.LIST_IGNORE;
            }
            // Check total count including current batch
            const totalFilesAfterUpload = file.length + fileList.length;
            if (totalFilesAfterUpload > maxCount) {
                notification.error({
                    message: `สามารถอัปโหลดได้สูงสุด ${maxCount} ไฟล์! กำลังพยายามอัปโหลด ${fileList.length} ไฟล์ แต่เหลือที่ว่างเพียง ${maxCount - file.length} ไฟล์`,
                    duration: 4,
                    icon: (0, jsx_runtime_1.jsx)("i", { className: "ri-information-line text-error" }),
                });
                return antd_1.Upload.LIST_IGNORE;
            }
            const isDuplicate = file.some((existingFile) => existingFile.name === uploadFile.name);
            if (isDuplicate) {
                notification.error({
                    message: `ไฟล์ "${uploadFile.name}" มีอยู่แล้ว กรุณาเลือกไฟล์อื่น`,
                    duration: 3,
                    icon: (0, jsx_runtime_1.jsx)("i", { className: "ri-information-line text-error" }),
                });
                return antd_1.Upload.LIST_IGNORE;
            }
            const isValidType = acceptedTypes.includes(uploadFile.type);
            if (!isValidType) {
                notification.error({
                    message: `รองรับเฉพาะไฟล์ ${description} เท่านั้น!`,
                    duration: 3,
                    icon: (0, jsx_runtime_1.jsx)("i", { className: "ri-information-line text-error" }),
                });
                return antd_1.Upload.LIST_IGNORE;
            }
            const isValidSize = uploadFile.size / 1024 / 1024 < maxSize;
            if (!isValidSize) {
                notification.error({
                    message: `ไม่รองรับไฟล์ขนาดเกิน ${maxSize} MB`,
                    duration: 3,
                    icon: (0, jsx_runtime_1.jsx)("i", { className: "ri-information-line text-error" }),
                });
                return antd_1.Upload.LIST_IGNORE;
            }
            // Individual maxCount check is now handled above with batch validation
            // Check if this is the last file in the current batch
            const currentIndex = fileList.findIndex((f) => f.uid === uploadFile.uid);
            const isLastFile = currentIndex === fileList.length - 1;
            if (isLastFile && fileList.length > 1) {
                // Process all files in parallel
                handleMultipleFileUpload(fileList);
            }
            else if (fileList.length === 1) {
                // Single file upload
                handleFileUpload(uploadFile);
            }
            return false;
        },
        onChange,
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: className, children: [label && ((0, jsx_runtime_1.jsxs)("div", { className: "mb-2", children: [label, required && (0, jsx_runtime_1.jsx)("span", { className: "text-primary ml-1 text-xs", children: "*" })] })), (0, jsx_runtime_1.jsx)(Dragger, { ...uploadProps, className: `custom-allkons-upload-file-dragger ${isUploading ? 'pointer-events-none opacity-60' : ''}`, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-12 h-12 bg-white border border-border-primary rounded-lg flex items-center justify-center", children: isUploading ? ((0, jsx_runtime_1.jsx)("i", { className: "ri-loader-4-line text-2xl text-icon-tertiary animate-spin" })) : ((0, jsx_runtime_1.jsx)("i", { className: "ri-upload-cloud-2-line text-2xl text-icon-tertiary" })) }), (0, jsx_runtime_1.jsxs)(Typography_1.default, { variant: "paragraph-small", className: "!mb-1 !mt-3", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-button-tertiary font-semibold mr-2", children: isUploading ? 'กำลังอัปโหลด...' : 'คลิกเพื่ออัพโหลด' }), !isUploading && ((0, jsx_runtime_1.jsx)("span", { className: "text-text-tertiary", children: "\u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E41\u0E25\u0E49\u0E27\u0E27\u0E32\u0E07\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48" }))] }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "paragraph-small", className: "!text-text-placeholder", children: isUploading
                                ? 'กรุณารอให้การอัปโหลดเสร็จสิ้น'
                                : `${description} (สูงสุด ${maxSize}MB)` })] }) }), customFileList && file && file.length > 0 && ((0, jsx_runtime_1.jsx)(CustomFileList, { fileList: file }))] }));
};
exports.default = UploadFileDragger;
