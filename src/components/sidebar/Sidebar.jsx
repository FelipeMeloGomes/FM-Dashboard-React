// React Hooks
import React, { useContext } from "react";

// Material UI
import {
    Drawer,
    Typography,
    Box,
    IconButton,
    useTheme,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import HandymanIcon from "@mui/icons-material/Handyman";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

// Theme
import { tokens, ColorModeContext } from "../../theme/theme";

// React Router Dom
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

// Context
import { useDrawerContext } from "./../../context/DrawerContext";

// Navegacao
const ListItemLink = ({ to, icon, label, onClick }) => {
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
        navigate(to);
        onClick?.();
    };
    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
};

const Sidebar = ({ children }) => {
    const theme = useTheme();
    const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

    return (
        <>
            <Drawer
                open={isDrawerOpen}
                onClose={toggleDrawerOpen}
                variant={lgDown ? "temporary" : "permanent"}
            >
                <Box
                    display="flex"
                    width={theme.spacing(28)}
                    textAlign="center"
                    height="100%"
                    flexDirection="column"
                >
                    <Box
                        width="100%"
                        height={theme.spacing(10)}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="h4" color={colors.grey[100]}>
                            Fm.AI
                        </Typography>
                    </Box>
                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            <ListItemLink
                                icon={<Home />}
                                label="Dashboard"
                                to="/"
                                onClick={lgDown ? toggleDrawerOpen : undefined}
                            />
                            <Divider />
                            <ListItemLink
                                icon={<HandymanIcon />}
                                label="Lista de Projetos"
                                to="/ListadeProjetos"
                                onClick={lgDown ? toggleDrawerOpen : undefined}
                            />
                            <Divider />
                        </List>
                    </Box>

                    <Box>
                        <Divider />
                        <List component="nav">
                            <ListItemLink
                                icon={
                                    theme.palette.mode === "dark" ? (
                                        <DarkModeOutlinedIcon />
                                    ) : (
                                        <LightModeOutlinedIcon />
                                    )
                                }
                                label="Alternar Tema"
                                onClick={colorMode.toggleColorMode}
                            />
                            <Divider />
                            <ListItemLink
                                icon={<LogoutIcon />}
                                label="Sair"
                                to="/logout"
                                onClick={lgDown ? toggleDrawerOpen : undefined}
                            />
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={lgDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};

export default Sidebar;
