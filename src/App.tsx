import React, { FC } from "react";
import { Home } from "./pages/Home";
import Container from "@mui/material/Container";
import ThemeProvider from "./theme";

const App: FC = () => {
  return (
    <Container component="main" maxWidth="sm">
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </Container>
  );
};

export default App;
