
export interface FileUploadListData {
    id: number;
    fileIcon?: string;
    fileName: string;
    length: number;
    fileData?: File[];
    file?: File;
    uploadedLength?: number;
    fileStatus: FileUploadStatus;
}

export enum FileUploadStatus {
    PreUpload,
    Uploaded,
    InProgress,
    Failed,
    Completed,
}
