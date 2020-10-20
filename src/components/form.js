import React, { useState } from "react";
import styled from "styled-components";

// csv parser package that allows you to select a csv file
// from your computer and parses it in the browser
// import Papa from "papaparse";

// import CSVReaderComp from "./csvreader.js";
// const csv = "./test_1.csv";

const Box = styled.div`
  width: 90%;
  height: 700px;
  border: 3px solid black;
  background: white;
  border-radius: 20px;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DragAndDrop = styled.div`
  border: 3px solid black;
  width: 80%;
  height: 50vh;
  margin: 0 auto;
  border-radius: 20px;
  padding-top: 50px;
  :hover {
    border: 3px dashed black;
    background: rgba(149, 165, 166, 0.8);
  }
`;

const Form = () => {
  // const [units, setUnits] = useState();
  // const [taskName, setTaskName] = useState([]);
  // const [unitTaskNames, setUnitTaskNames] = useState([]);
  // const unitTaskNames = [];

  // const handleFile = (file) => {
  // console.log("Clicked me");
  // Papa.parse(document.getElementById("csv-input").files[0], {
  //   delimiter: ",",
  //   // with header turned to false, it mimics the data parsed from
  //   // the python code
  //   header: false,
  //   skipEmptyLines: true,
  //   // complete is needed to return the data from the parser
  //   complete: function (results) {
  //     // slice the tasks from the second array in the data
  //     setTaskName(results.data[1].slice(3, 8));
  //     // console.log(results);
  //     setUnits(results.data.slice(2));
  //     const unitTaskNamesArr = results.data[1].slice(3, 8);
  //     for (let i = 0; i < unitTaskNamesArr.length; i++) {
  //       unitTaskNames.push({
  //         unitTaskNameId: i,
  //         taskName: unitTaskNamesArr[i],
  //       });
  //       // setUnitTaskNames([
  //       //   ...unitTaskNames,
  //       //   {
  //       //     unitTaskNameId: i,
  //       //     taskName: unitTaskNamesArr[i],
  //       //   },
  //       // ]);
  //     }
  //   },
  // });
  // };

  // console.log("*".repeat(80));
  // console.log("units", units);
  // console.log("taskName", taskName);
  // console.log("unitTaskNames", unitTaskNames);
  // console.log("*".repeat(80));
  return (
    <Box>
      <DragAndDrop>
        {/* drop={handleFile} */}
        {/* <input type="file" id="csv-input" name="csv-input" accept=".csv" />
        <button onClick={handleFile}>Submit</button> */}
        <h1>HI!</h1>
      </DragAndDrop>
    </Box>
  );
};

export default Form;
