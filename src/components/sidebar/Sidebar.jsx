// React Hooks

// Material UI
import {
    Drawer,
    Box,
    useTheme,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    Avatar,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

// React Router Dom
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

// Context
import { useDrawerContext } from "./../../context/DrawerContext";
import { useAppThemeContext } from "../../context/ThemeContext";

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
    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();
    const { toggleTheme } = useAppThemeContext();

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
                        height={theme.spacing(20)}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Avatar
                            sx={{
                                height: theme.spacing(12),
                                width: theme.spacing(12),
                            }}
                            src="https://lh3.googleusercontent.com/pw/ABLVV87X2JWkBphNCNqrqFDfQzl-TlZLsB910Pp8O-2VOCaURHbij3F0Jy6nOBG1QuW4p38cF7ZIVED6m9omS3p-Uk-0LxrQCy26qO2RTJQw23CFxhBjTiiNcwXZ2AEayEZtg4OPL_LKYSSRuEKb-Bs8Rndm5VMj7dtbveqxR3OP7DFDupanm9u4uPL2CMicYvCjzPp0TKWcTMtoRlc2UbZkBkur8_3W5_UPf0Df9MAql63ei08kB_SwTuzioD8njWKCt_D3QY2zU0adBHlkOMA5QLWYBR8i7iKWIB1dONks-CcCcwxQOZE9Er1qMxDDk70r7kRE8yVLaAEM_RlkEw-TEbrilNaZUh2rkGAVX9Y92D-pQ7uG43Do4egH-gfx0TuKAA268ugWnNeFbzekRdQa5CBg19CLpayQ0wtEZ_oLVfh_OMO5xg2EZTwRZ6LcrcQuJc6kz75MZLxNEff8OMpPwG6-q1kn7Z_GaGeYzu56UFctFTPYtY6A1EuWwl3LEm7dtYYrO8-MIDOYWSSxvuA0QA6i4WqbMNMaXYaC5IRLqPmnZxhtD8RyTQZrh5osmd2Hhfme28q-5qGNDRo4R68yQYiJKJK_Xh_foC-nD7yqzGQ6p-WMThDLv1id6BngVIngOLUs3n7rBapT_9eC51ZIqYH4np1BwDUprsEeK1zmytASIHWZfK_RWWyHbSjMyBrHHBWPY7cY4FVRvsIxPh97nbtCfafD6BTSF8Fo2ktqjJLk1ElesN-UUL_BPoTrlwThvImT2gjePzOhCSVJYgwBV90ceIEDmkV5bVRLavY2KeVGvzdgyFZIsksrGhzlqco3uhIvoG2cXrKxq-1z__Sn4VvOP9kfbjkgupTnPSKpZ94bZ-UGwygC19WWaIzTrFnQ9A=w484-h645-s-no-gm?authuser=0"
                        />
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

                            <ListItemLink
                                icon={<PeopleIcon />}
                                label="Lista de Funcionários"
                                to="/ListadeProjetos"
                                onClick={lgDown ? toggleDrawerOpen : undefined}
                            />
                        </List>
                    </Box>

                    <Box>
                        <Divider />
                        <List component="nav">
                            <ListItemLink
                                icon={<DarkModeOutlinedIcon />}
                                label="Alternar Tema"
                                onClick={toggleTheme}
                            />

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
