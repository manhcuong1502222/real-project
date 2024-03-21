import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom"


import Topbar from "./scences/global/Topbar";
import Sidebar from "./scences/global/Sidebar";

import Dashboard from "./scences/dashboard";
// import Acounts from "./scences/global/accounts";
// import Team from "./scences/global/team";
// import A from "./scences/global/a";
// import B from "./scences/global/b";
// import C from "./scences/global/c";


function App() {

  const [theme, colorMode] = useMode();

  return (
    <div className="app">

      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />

              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/accounts" element={<Acounts />} />
                <Route path="/team" element={<Team />} />
                <Route path="/a" element={<A />} />
                <Route path="/b" element={<B />} />
                <Route path="/c" element={<C />} /> */}
              </Routes>

            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>

    </div>
  );
}

export default App;
