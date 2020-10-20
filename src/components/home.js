import React from "react";
import styled from "styled-components";
import Form from "./form.js";
// import CSVReaderComp from "./csvreader.js";

const fs = require("fs");
const csv = "./src/components/test_1.csv";

const Box = styled.div`
  width: 100%;
  height: 900;
  border: 3px solid black;
  background: dodgerblue;
  padding: 10px;
  border-radius: 10px;
`;

const Home = () => {
  return (
    <Box>
      <h1>This is the Home component</h1>
      <Form />
    </Box>
  );
};

export default Home;
