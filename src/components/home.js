import React from "react";
import styled from "styled-components";
import Form from "./form.js";
// import CSVReaderComp from "./csvreader.js";

const fs = require("fs");
const csv = "./src/components/test_1.csv";

const Box = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid black;
  background: dodgerblue;
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
