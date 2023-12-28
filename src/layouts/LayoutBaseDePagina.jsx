// Material UI
import {
    Box,
    IconButton,
    Typography,
    useTheme,
    useMediaQuery,
    Icon,
} from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";

// Context
import { useDrawerContext } from "../context/DrawerContext";

// Theme
import { tokens } from "./../theme/theme";

const LayoutBaseDePagina = ({ children, titulo, barraDeFerramentas }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
    const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
    const colors = tokens(theme.palette.mode);
    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box
                padding={1}
                display="flex"
                alignItems="center"
                gap={1}
                height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
            >
                {lgDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>
                            <MenuOutlined />
                        </Icon>
                    </IconButton>
                )}

                <Typography
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipses"
                    variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
                    color={colors.grey[100]}
                >
                    {titulo}
                </Typography>
            </Box>

            {barraDeFerramentas && <Box>{barraDeFerramentas}</Box>}

            <Box flex={1} overflow="auto">
                {children}
            </Box>
        </Box>
    );
};

export default LayoutBaseDePagina;
