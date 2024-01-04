// Components
import LayoutBaseDePagina from "../../layouts/LayoutBaseDePagina";
import BasicAccordion from "../../components/accordion/BasicAccordion";

// animations grapichs number
import CountUp from "react-countup";

// Grapichs
import BarChart from "../../components/charts/BarChart";

// Material UI
import {
    Box,
    useTheme,
    Grid,
    Card,
    CardContent,
    Typography,
    Stack,
} from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Dashboard = () => {
    const theme = useTheme();

    return (
        <LayoutBaseDePagina titulo="Gráficos da Empresa">
            <Box m={1} width="auto">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Stack spacing={2} direction="row">
                                <Card
                                    sx={{
                                        minWidth: 49 + "%",
                                        height: 150,
                                        bgcolor: "red",
                                    }}
                                >
                                    <CardContent>
                                        <Box sx={{ color: "white" }}>
                                            <CreditCardIcon />
                                        </Box>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                            sx={{ color: "#fff" }}
                                        >
                                            $
                                            <CountUp
                                                delay={0.4}
                                                end={50000000000}
                                                duration={0.6}
                                            />
                                        </Typography>
                                        <Typography
                                            gutterBottom
                                            variant="body2"
                                            component="div"
                                            sx={{ color: "#ccd1d1" }}
                                        >
                                            Ganhos Totais
                                        </Typography>
                                    </CardContent>
                                </Card>

                                <Card
                                    sx={{
                                        minWidth: 49 + "%",
                                        height: 150,
                                        bgcolor: "green",
                                    }}
                                >
                                    <CardContent>
                                        <Box sx={{ color: "white" }}>
                                            <ShoppingBagIcon />
                                        </Box>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                            sx={{ color: "#fff" }}
                                        >
                                            $
                                            <CountUp
                                                delay={0.4}
                                                end={10000000}
                                                duration={0.6}
                                            />
                                        </Typography>
                                        <Typography
                                            gutterBottom
                                            variant="body2"
                                            component="div"
                                            sx={{ color: "#ccd1d1" }}
                                        >
                                            Total de Pedidos
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={2}>
                                <Card sx={{ maxWidth: 345, bgcolor: "green" }}>
                                    <CardContent>
                                        <Stack spacing={2} direction="row">
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                sx={{ color: "white" }}
                                            >
                                                <StorefrontIcon />
                                            </Box>
                                            <Box sx={{ color: "#fff" }}>
                                                <Typography fontWeight="bold">
                                                    $
                                                    <CountUp
                                                        delay={0.4}
                                                        end={1000000}
                                                        duration={0.6}
                                                    />
                                                </Typography>
                                                <Typography>
                                                    Renda Total
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                </Card>
                                <Card sx={{ maxWidth: 345, bgcolor: "blue" }}>
                                    <CardContent>
                                        <Stack spacing={2} direction="row">
                                            <Box
                                                sx={{ color: "white" }}
                                                display="flex"
                                                alignItems="center"
                                            >
                                                <StorefrontIcon />
                                            </Box>
                                            <Box sx={{ color: "#fff" }}>
                                                <Typography fontWeight="bold">
                                                    $
                                                    <CountUp
                                                        delay={0.4}
                                                        end={5000000}
                                                        duration={0.6}
                                                    />
                                                </Typography>
                                                <Typography>
                                                    Renda Total
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, py: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Card sx={{ height: 60 + "vh" }}>
                                <CardContent>
                                    <BarChart />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ height: 60 + "vh" }}>
                                <CardContent>
                                    <Box sx={{ py: 1 }}>
                                        <Typography fontWeight="bold">
                                            Produtos Populares
                                        </Typography>
                                    </Box>
                                    <BasicAccordion />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </LayoutBaseDePagina>
    );
};

export default Dashboard;
