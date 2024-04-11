import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom"


import Topbar from "./scences/global/Topbar";
import Sidebar from "./scences/global/Sidebar";

import Dashboard from "./scences/dashboard";
import Accounts from "./scences/System/Accounts";
import Screen from "./scences/System/Screen";
import FAQ from "./scences/System/FAQ";
import Customer from "./scences/Function/customer";
import Receipts from "./scences/Function/receipts";
import Report from "./scences/Function/report";
import Debt from "./scences/Function/debt";
import Bill from "./scences/Function/bill";

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
                <Route path="/tai-khoan" element={<Accounts />} />
                <Route path="/man-hinh" element={<Screen />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/hoa-don" element={<Bill />} />
                <Route path="/phieu-thu" element={<Receipts />} />
                <Route path="/cong-no" element={<Debt />} />
                <Route path="/bao-cao" element={<Report />} />
                <Route path="/khach-hang" element={<Customer />} />
              </Routes>

            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>

    </div>
  );
}

export default App;
