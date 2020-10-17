import React from "react";
import "./App.css";
import styled from "styled-components";

// components
import Home from "./components/home";

const Box = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

function App() {
  return (
    <Box className="App">
      <Home />
    </Box>
  );
}

export default App;
