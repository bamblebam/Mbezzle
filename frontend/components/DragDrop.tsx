// drag drop file component
import React, { useState } from "react";
import { firebaseFileUpload, enqueueFileUpload } from "../utils";

const DragDropFile = () => {
  const userId = "safhskdjgfkjb"; // TODO: Take value from store
  // drag state
  const [dragActive, setDragActive] = React.useState(false);

  const [files, setFiles] = useState<File>();
  // ref
  const inputRef = React.useRef<HTMLInputElement>(null);

  // handle drag events
  const handleDrag = function (e: any) {
    console.log("DRAG");
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e: any) {
    console.log("DROP");

    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
      const files = e.dataTransfer.files;
      handleFiles(files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e: any) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
      const files = e.dataTransfer.files;
      handleFiles(files);
    } else {
      setFiles(false);
    }
  };

  const handleFiles = async (file: File) => {
    setFiles(true);
    const objId = await firebaseFileUpload(file);
    enqueueFileUpload(userId, objId);
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    console.log("HEHE");
    inputRef.current?.click();
  };

  return (
    <>
      {!files && (
        <form
          id='form-file-upload'
          onDragEnter={handleDrag}
          onSubmit={e => e.preventDefault()}
        >
          <input
            style={{ width: "100%", height: "100%" }}
            ref={inputRef}
            type='file'
            id='input-file-upload'
            multiple={true}
            onChange={handleChange}
          />
          <label
            id='label-file-upload'
            htmlFor='input-file-upload'
            className={dragActive ? "drag-active" : ""}
          >
            <div>
              <p>Drag and drop your file here or</p>
              <button className='upload-button' onClick={onButtonClick}>
                Upload a file
              </button>
            </div>
          </label>
          {dragActive && (
            <div
              id='drag-file-element'
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            ></div>
          )}
        </form>
      )}
      {files && (
        <div>
          <p style={{ color: "white" }}>File name: </p>
          <button className='upload-button' onClick={onButtonClick}>
            Upload a file
          </button>
        </div>
      )}
    </>
  );
};

export default DragDropFile;
