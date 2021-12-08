import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Router>
          <Header ColorModeContext={ColorModeContext} />
          <Route exact path="/" component={Dashboard} />
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
