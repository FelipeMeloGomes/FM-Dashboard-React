// React
import {
    createContext,
    useCallback,
    useMemo,
    useState,
    useContext,
} from "react";

// Themes
import { DarkTheme } from "./../themes/Dark";
import { LightTheme } from "./../themes/Light";

// Material UI
import { Box, ThemeProvider } from "@mui/material";

const ThemeContext = createContext({});

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
};

export const AppThemeProvider = ({ children }) => {
    const [themeName, setThemeName] = useState("Dark");

    const toggleTheme = useCallback(() => {
        setThemeName((oldThemeName) =>
            oldThemeName === "light" ? "dark" : "light"
        );
    }, []);

    const theme = useMemo(() => {
        if (themeName === "light") return LightTheme;
        return DarkTheme;
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box
                    width="100vw"
                    height="100vh"
                    bgcolor={theme.palette.background.default}
                >
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
