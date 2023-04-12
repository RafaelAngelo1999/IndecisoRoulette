import { FC } from "react";
import { Home } from "./pages/Home";
import Container from "@mui/material/Container";
import ThemeProvider from "./theme";

const App: FC = () => {
  return (
    <ThemeProvider>
      <Container component="main" maxWidth="sm">
        <Home />
      </Container>
    </ThemeProvider>
  );
};

export default App;
