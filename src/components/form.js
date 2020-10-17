import React, { useState } from "react";
import styled from "styled-components";

// csv parser package that allows you to select a csv file
// from your computer and parses it in the browser
import Papa from "papaparse";

// import CSVReaderComp from "./csvreader.js";
// const csv = "./test_1.csv";

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
      // with header turned to false, it mimics the data parsed from
      // the python code
      header: false,
      skipEmptyLines: true,
      // complete is needed to return the data from the parser
      complete: function (results) {
        // console.log(results);
        setUnits(results);
        // slice the tasks from the second array in the data
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
