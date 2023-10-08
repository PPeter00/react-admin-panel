import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";


function App() {
    const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="app">
                <Sidebar/>
              <main className="content">
                <Topbar/>
                <Routes>
                    <Route path="/react-admin-panel" element={<Dashboard/>} />
                    <Route path="/react-admin-panel/team" element={<Team/>} />
                    <Route path="/react-admin-panel/contacts" element={<Contacts/>} />
                    <Route path="/react-admin-panel/invoices" element={<Invoices/>} />
                    <Route path="/react-admin-panel/form" element={<Form/>} />
                    <Route path="/react-admin-panel/calendar" element={<Calendar/>} />
                    <Route path="/react-admin-panel/faq" element={<FAQ/>} />
                    <Route path="/react-admin-panel/bar" element={<Bar/>} />
                    <Route path="/react-admin-panel/pie" element={<Pie/>} />
                    <Route path="/react-admin-panel/line" element={<Line/>} />
                    <Route path="/react-admin-panel/geography" element={<Geography/>} />
                </Routes>
              </main>
            </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
   
  );
}

export default App;
