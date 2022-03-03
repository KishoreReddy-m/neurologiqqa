import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import FileUploadDropzone from "../FileUploadDropzone";
import FileUploadList from "../FileUploadList";

import {
  FileUploadListData,
  FileUploadStatus,
} from "src/interface/FileUploadListData";
import React from "react";

export type FileUploadContainerProps = {
  handleChange?: (data: FileUploadListData[]) => void;
  uploadUrl: string;
  files?: FileUploadListData[];
};

export const FileUploadContainer = () => {
  const [fileUploadListData, setFileUploadListData] = useState<
    FileUploadListData[]
  >([]);

  const getNewlyUploadedFiles = (
    uploadedFiles: File[],
    previouslyUploadedFilesLength: number
  ): FileUploadListData[] => {
    const newFiles: FileUploadListData[] = [];
    for (let i = 0; i < uploadedFiles.length; i++) {
      const cancelTokenSource = axios.CancelToken.source();
      const fileItem = {
        id: previouslyUploadedFilesLength + i + 1,
        length: uploadedFiles[i].size,
        fileIcon: "file pdf",
        fileName: uploadedFiles[i].name,
        cancelToken: cancelTokenSource,
        uploadedLength: 0,
        file: uploadedFiles[0],
        fileStatus: FileUploadStatus.PreUpload,
      };

      newFiles.push(fileItem);
    }
    return newFiles;
  };
  const handleUploadedFiles = (uploadedFiles: File[]) => {
    setFileUploadListData((prev) => [
      ...prev,
      ...getNewlyUploadedFiles(uploadedFiles, prev.length),
    ]);
  };

  return (
    <div className="file-upload-container">
      <FileUploadDropzone getUploadedFiles={handleUploadedFiles} />
      <FileUploadList files={fileUploadListData} />
    </div>
  );
};
