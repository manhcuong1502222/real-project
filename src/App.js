import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material";

import Topbar from "./scences/global/Topbar";

function App() {

  const [theme, colorMode] = useMode();

  return (
    <div className="app">

      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <main className="content">
              <Topbar />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>

    </div>
  );
}

export default App;
