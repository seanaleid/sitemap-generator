import React from "react";
import { CSVReader } from "react-papaparse";

const CSVReaderComp = ({ setData }) => {
  const handleOnDrop = (data) => {
    setData(data);
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  return (
    <>
      <h5>Click and Drag Upload</h5>
      <CSVReader
        onDrop={handleOnDrop}
        onError={handleOnError}
        addRemoveButton
        onRemoveFile={handleOnRemoveFile}
        style={{
          dropArea: {
            height: 400,
            background: "white",
          },
        }}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
    </>
  );
};

export default CSVReaderComp;
