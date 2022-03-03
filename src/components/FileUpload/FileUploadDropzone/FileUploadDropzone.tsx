import { useCallback } from "react";
import { FileError, FileRejection, useDropzone } from "react-dropzone";
import clsx from "clsx";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import UploadImage from "../../../assets/images/UploadImage.svg";

interface FileUploadDropzoneProps {
  getUploadedFiles(uploadedFiles: File[]): void;
}

export const FileUploadDropzone = ({
  getUploadedFiles,
}: FileUploadDropzoneProps) => {
  const supportedMimeTypes: string[] = [
    "application/msword", // Microsoft Word - .doc
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // Microsoft Word (OpenXML) - .docx,
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template", // Microsoft Word (OpenXML) - .dotx,
    "application/vnd.ms-word.document.macroEnabled.12", // Microsoft Word (OpenXML) - .docm,
    "application/vnd.ms-word.template.macroEnabled.12", // Microsoft Word (OpenXML) - .dotm,
    "application/vnd.ms-excel", // Microsoft Excel - .xls, .xlt, .xla
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // Microsoft Excel - .xlsx
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template", // Microsoft Excel - .xltx
    "application/vnd.ms-excel.sheet.macroEnabled.12", // Microsoft Excel - .xlsm
    "application/vnd.ms-excel.template.macroEnabled.12", // Microsoft Excel - .xltm
    "application/vnd.ms-excel.addin.macroEnabled.12", // Microsoft Excel - .xlam
    "application/vnd.ms-excel.sheet.binary.macroEnabled.12", // Microsoft Excel - .xlsb
    "application/vnd.ms-powerpoint", // Microsoft PowerPoint - .ppt, .pot, .pps, .ppa
    "application/vnd.openxmlformats-officedocument.presentationml.presentation", // Microsoft PowerPoint (OpenXML) - .pptx
    "application/vnd.openxmlformats-officedocument.presentationml.template", // Microsoft PowerPoint - .potx
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow", // Microsoft PowerPoint - .ppsx
    "application/vnd.ms-powerpoint.addin.macroEnabled.12", // Microsoft PowerPoint - .ppam
    "application/vnd.ms-powerpoint.presentation.macroEnabled.12", // Microsoft PowerPoint - .pptm
    "application/vnd.ms-powerpoint.template.macroEnabled.12", // Microsoft PowerPoint - .potm
    "application/vnd.ms-powerpoint.slideshow.macroEnabled.12", // Microsoft PowerPoint - .ppsm
    "application/vnd.visio", // Microsoft Visio - .vsd
    "application/pdf", // Portable document format - .pdf
    "application/postscript ", // Postscript - .ai,.eps,.ps
    "audio/mpeg", // MP3 Audio - .mp3
    "audio/aac", // AAC Audio - .aac
    "audio/wav", // Waveform Audio Format - .wav
    "audio/flac", // Free Lossless Audio Codec - .FLAC
    "image/tiff", // Tagged Image File Format (TIFF) - .tif,.tiff
    "image/gif", // Graphics Interchange Format (GIF) - .gif
    "image/png", // Portable Network Graphics - .png
    "image/x-panasonic-raw", // RAW - .RAW
    "video/mp4", // MP4 video - .mp4
    "video/x-msvideo", // AVI: Audio Video Interleave - .avi
    "video/quicktime ", // Quicktime - .mov,.qt
    "video/x-ms-wmv ", // Windows Media Video - .wmv
  ];

  const onDrop = useCallback(
    (acceptedFiles) => {
      getUploadedFiles(acceptedFiles);
    },
    [getUploadedFiles]
  );
  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      accept: supportedMimeTypes.join(", "),
      maxSize: 1073741824,
    });

  return (
    <>
      <div
        {...getRootProps()}
        className={clsx(
          "drop-zone-styles",
          isDragActive && "drop-zone-active",
          fileRejections.length > 0 && "error"
        )}
      >
        <input {...getInputProps()} />
        <div className="file-upload-block">
          <Typography>
            <img src={UploadImage} style={{ cursor: "pointer" }} />
          </Typography>
          <Typography className="ml-1">Drag & drop or select file</Typography>
        </div>
      </div>
    </>
  );
};
