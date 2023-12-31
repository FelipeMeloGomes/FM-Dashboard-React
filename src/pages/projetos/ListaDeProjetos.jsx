// React Hooks
import { useEffect, useMemo, useState } from "react";

// Axios
import Axios from "axios";

// React Router Dom
import { useSearchParams } from "react-router-dom";

// Material Ui
import { Box, CircularProgress, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// Theme
import { tokens } from "../../theme/theme";

// Components
import LayoutBaseDePagina from "../../layouts/LayoutBaseDePagina";
import FerramentasDaListagem from "../../components/ferramentas-da-listagem/FerramentasDaListagem";

const ListaDeProjetos = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Erro ao buscar dados da API:", error);
            }
        };

        fetchData();
    }, []);

    const columns = [
        { field: "id" },

        {
            field: "name",
            flex: 1,
        },
        {
            field: "username",
            flex: 1,
        },
        {
            field: "email",
            flex: 1,
        },
        {
            field: "phone",
            flex: 1,
        },
        {
            field: "website",
            flex: 1,
        },
    ];

    // busca nas colunas
    const busca = useMemo(() => {
        return searchParams.get("busca") || "";
    }, [searchParams]);

    return (
        <LayoutBaseDePagina titulo="Lista de Projetos">
            <FerramentasDaListagem
                mostrarInputBusca
                mostrarBotao
                textoDaBusca={busca}
                aoMudarTextoDeBusca={(texto) =>
                    setSearchParams({ busca: texto }, { replace: true })
                }
            />

            <Box
                m={1}
                width="auto"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                {isLoading ? (
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        m={1}
                        height="75vh"
                    >
                        <CircularProgress size={50} />
                    </Box>
                ) : (
                    <DataGrid
                        rows={data}
                        columns={columns}
                        disableRowSelectionOnClick
                        disableColumnFilter
                        disableColumnMenu
                        disableColumnSelector
                        disableDensitySelector
                        disableEval
                        disableVirtualization
                        checkboxSelection
                    />
                )}
            </Box>
        </LayoutBaseDePagina>
    );
};

export default ListaDeProjetos;
