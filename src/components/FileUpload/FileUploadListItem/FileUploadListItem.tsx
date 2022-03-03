import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinearProgress from "@mui/material/LinearProgress";
import {
  FileUploadListData,
  FileUploadStatus,
} from "src/interface/FileUploadListData";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";

interface FileUploadListItemProps {
  fileData: FileUploadListData;
  hideRemove?: boolean;
  hideDownload?: boolean;
  downloadUrl?: string;
  onRemove?: () => void;
  onDownload?: (fileData: FileUploadListData) => void;
  onRetryUpload?: () => void;
}
export const FileUploadListItem = ({
  fileData,
  onRemove,
  onDownload,
  onRetryUpload,
  hideRemove,
  hideDownload,
}: FileUploadListItemProps) => {
  const progress = fileData.uploadedLength
    ? (fileData.uploadedLength / fileData.length) * 100
    : 0;
  const fileSizeFormatted = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1000,
      sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="file-upload-list">
      <span>
        <AttachFileIcon />
      </span>
      <span>{fileData.fileName}</span>
      <span> | </span>
      <span>{fileSizeFormatted(fileData.length)}</span>
      {!hideDownload && (
        <>
          <span> | </span>
          <span
            onClick={() => {
              onDownload?.(fileData);
            }}
            className="file-upload-list-item-action"
          >
            <FileDownloadIcon />
          </span>
        </>
      )}
      {fileData.fileStatus === FileUploadStatus.Failed && (
        <>
          <span> | </span>
          <span
            onClick={() => onRetryUpload?.()}
            className="file-upload-list-item-action"
          >
            <DeleteOutlineIcon />
          </span>
        </>
      )}
      {!hideRemove && (
        <>
          <span> | </span>
          <span
            onClick={() => onRemove?.()}
            className="file-upload-list-item-action"
          >
            <DeleteOutlineIcon />
          </span>
        </>
      )}
      {(fileData.fileStatus === FileUploadStatus.InProgress ||
        fileData.fileStatus === FileUploadStatus.Failed) && (
        <LinearProgress variant="determinate" value={progress} />
      )}

      {fileData.fileStatus === FileUploadStatus.Failed && (
        <p className="file-upload-failed">AttachmentsUploadFailed</p>
      )}
      <br />
    </div>
  );
};
