// Components
import FerramentasDaListagem from "../../components/ferramentas-da-listagem/FerramentasDaListagem";
import LayoutBaseDePagina from "../../layouts/LayoutBaseDePagina";

const Dashboard = () => {
    return (
        <LayoutBaseDePagina titulo="Projetos">
            <FerramentasDaListagem />
        </LayoutBaseDePagina>
    );
};

export default Dashboard;
