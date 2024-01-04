// React Hooks
import { useEffect, useMemo, useState } from "react";

// Axios
import Axios from "axios";

// React Router Dom
import { useSearchParams } from "react-router-dom";

// Material Ui
import { Box, CircularProgress, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// Components
import LayoutBaseDePagina from "../../layouts/LayoutBaseDePagina";

const ListaDeProjetos = () => {
    const theme = useTheme();
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
    ];

    // busca nas colunas
    const busca = useMemo(() => {
        return searchParams.get("busca") || "";
    }, [searchParams]);

    return (
        <LayoutBaseDePagina titulo="Base de Funcionários">
            <Box m={1} width="auto">
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
