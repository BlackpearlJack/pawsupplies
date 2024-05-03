import {ColorModeContext, useMode} from "./theme.js";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./scenes/dashboard/Dashboard";
import Team from "./scenes/team";
import ListProduct from "./scenes/listproduct";
import AddProduct from "./scenes/addproduct";



function App() {
    const [theme, colorMode] = useMode();

  return (
      <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                  <Sidebar />
                  <main className="content">
                      <Topbar />
                      <Routes>
                            {/* Add routes here */}
                          <Route path="/" element={<Dashboard />} />
                          <Route path="/team" element={<Team />} />
                          <Route path='/addproduct' element={<AddProduct />} />
                          <Route path='/listproduct' element={<ListProduct />} />
                      </Routes>
                  </main>
              </div>
          </ThemeProvider>
      </ColorModeContext.Provider>
  )
}

export default App
