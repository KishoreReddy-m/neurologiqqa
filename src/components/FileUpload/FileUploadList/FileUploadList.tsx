import React from "react";
import { FileUploadListData } from "src/interface/FileUploadListData";

import FileUploadListItem from "../FileUploadListItem";

interface FileUploadListItemProps {
  files: FileUploadListData[];
  hideDownload?: boolean;
}
export const FileUploadList = ({
  files,
  hideDownload,
}: FileUploadListItemProps) => {
  const downloadAttachments = (file: FileUploadListData) => {
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(
      new Blob([file.file ?? ""], { type: "application/octet-stream" })
    );
    link.download = file.fileName;
    document.body.appendChild(link);
    link.click();
  };
  return (
    <>
      {files.map((file) => {
        return (
          <FileUploadListItem
            key={file.id}
            fileData={file}
            hideRemove
            onDownload={downloadAttachments}
            hideDownload={hideDownload}
          />
        );
      })}
    </>
  );
};
