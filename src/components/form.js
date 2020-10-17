import React, { useState } from "react";
import styled from "styled-components";
// import CSVReaderComp from "./csvreader.js";
import Papa from "papaparse";
const csv = "./test_1.csv";

const Box = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid black;
  background: white;
  border-radius: 20px;
`;

const DragAndDrop = styled.div`
  border: 3px solid black;
  width: 80%;
  height: 50vh;
  margin: 0 auto;
  border-radius: 20px;
  :hover {
    border: 3px dashed black;
    background: rgba(149, 165, 166, 0.8);
  }
`;

const Form = () => {
  const [units, setUnits] = useState();
  const [taskName, setTaskName] = useState();
  // const [unitTaskNames, setUnitTaskNames] = useState([]);
  const unitTaskNames = [];

  const handleFile = (file) => {
    // console.log("Clicked me");
    Papa.parse(document.getElementById("csv-input").files[0], {
      delimiter: ",",
      header: false,
      skipEmptyLines: true,
      complete: function (results) {
        // console.log(results);
        setUnits(results);
        setTaskName(results.data[1].slice(3, 8));
      },
    });
  };

  console.log("*".repeat(80));
  console.log("unitTaskNames", unitTaskNames);
  console.log("*".repeat(80));
  return (
    <Box>
      <DragAndDrop drop={handleFile}>
        <h3>Drag and drop here</h3>
        <input type="file" id="csv-input" name="csv-input" accept=".csv" />
        <button onClick={handleFile}>Submit</button>
      </DragAndDrop>
    </Box>
  );
};

export default Form;
