// Router Dom
import { Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/dashboard/Dashboard";
import ListaDeProjetos from "./pages/projetos/ListaDeProjetos";

// Components
import Sidebar from "./components/sidebar/Sidebar";

// Context
import DrawerProvider from "./context/DrawerContext";

// Material UI
import { CssBaseline, ThemeProvider } from "@mui/material";

// Theme
import { ColorModeContext, useMode } from "./theme/theme";

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <DrawerProvider>
                    <CssBaseline />
                    <Sidebar>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route
                                path="/ListaDeProjetos"
                                element={<ListaDeProjetos />}
                            />
                        </Routes>
                    </Sidebar>
                </DrawerProvider>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
