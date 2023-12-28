// React
import { useState, useRef } from "react";

// Material Ui
import {
    Box,
    Button,
    Paper,
    TextField,
    useTheme,
    Menu,
    MenuItem,
    ListItemIcon,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Axios
import Axios from "axios";

const FerramentasDaListagem = ({
    textoDaBusca = "",
    mostrarInputBusca = false,
    mostrarBotao = false,
    aoMudarTextoDeBusca,
}) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const fileInputRef = useRef(null);
    const open = Boolean(anchorEl);

    const handleMenu = (e) => {
        setAnchorEl((prevAnchorEl) => (prevAnchorEl ? null : e.currentTarget));
    };

    const handleExcelClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
        handleMenu();
    };

    const closeModal = () => {
        setOpenModal(false);
    };

    const handleFileUpload = async (selectedFile) => {
        try {
            const formData = new FormData();
            formData.append("file", selectedFile);

            const res = await Axios.post(
                "http://localhost:8000/obras/upload_excel/",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log("Arquivo selecionado:", selectedFile.name);
            setOpenModal(true);
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    const handleFileChange = async (e) => {
        try {
            const selectedFile = e.target.files[0];

            if (!selectedFile) {
                console.log("Nenhum arquivo foi selecionado.");
                return;
            }

            await handleFileUpload(selectedFile);
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    const handlePost = async (selectedFile) => {
        try {
            if (!selectedFile) {
                console.error("Nenhum arquivo selecionado.");
                return;
            }

            const formData = new FormData();
            formData.append("file", selectedFile);

            const res = await Axios.post(
                "http://localhost:8000/obras/cadastro_projeto/",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log("Arquivo selecionado:", selectedFile.name);
            setOpenModal(false);
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    return (
        <Box
            height={theme.spacing(5)}
            marginX={1}
            padding={1}
            paddingX={2}
            gap={1}
            alignItems="center"
            display="flex"
            component={Paper}
        >
            <Box flex={1} display="flex">
                {mostrarBotao && (
                    <Button
                        disableElevation
                        aria-controls={open ? "menu" : undefined}
                        onClick={handleMenu}
                        variant="contained"
                        color="primary"
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        <Typography
                            variant="button"
                            noWrap
                            textOverflow="ellipsis"
                            overflow="hidden"
                        >
                            Adicionar Projeto
                        </Typography>
                    </Button>
                )}
                <Menu
                    open={open}
                    onClose={handleMenu}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                >
                    <MenuItem onClick={handleExcelClick}>
                        <ListItemIcon>
                            <i className="ri-file-excel-2-line"></i>
                        </ListItemIcon>
                        <Typography
                            variant="button"
                            noWrap
                            textOverflow="ellipsis"
                            overflow="hidden"
                        >
                            Enviar Excel
                        </Typography>
                    </MenuItem>
                </Menu>
                <input
                    type="file"
                    accept=".xlsx, .xls"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    ref={fileInputRef}
                />

                <Dialog open={openModal} onClose={closeModal}>
                    <DialogTitle>Cadastrar Município</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Cadastre o município do projeto
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="normal"
                            type="text"
                            label="Município"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeModal}>Fechar</Button>
                        <Button onClick={handlePost}>Cadastrar</Button>
                    </DialogActions>
                </Dialog>
            </Box>

            {mostrarInputBusca && (
                <TextField
                    size="small"
                    placeholder="Pesquisar.."
                    value={textoDaBusca}
                    onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
                />
            )}
        </Box>
    );
};

export default FerramentasDaListagem;
