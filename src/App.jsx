// Router Dom
import { Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/dashboard/Dashboard";
import ListaDeProjetos from "./pages/projetos/ListaDeProjetos";

// Components
import Sidebar from "./components/sidebar/Sidebar";

// Context
import DrawerProvider from "./context/DrawerContext";
import { AppThemeProvider } from "./context/ThemeContext";

function App() {
    return (
        <AppThemeProvider>
            <DrawerProvider>
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
        </AppThemeProvider>
    );
}

export default App;
