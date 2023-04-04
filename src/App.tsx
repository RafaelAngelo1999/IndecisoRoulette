import React, { FC } from "react";
import { Home } from "./pages/Home";
import Container from "@mui/material/Container";
import { CssBaseline } from "@mui/material";

const App: FC = () => {
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Home />
    </Container>
  );
};

export default App;
