import { Outlet } from "react-router-dom";
import { Cabecalho } from "../../Components/Cabecalho";
import { Conteudo } from "../../Components/Conteudo";
import { Rodape } from "../../Components/Rodape"
import { useAppContext } from "../../Hooks/useAppContext";

const LayoutPadrao = () => {
    const {autor} = useAppContext();

    return (
        <>
            <Cabecalho />
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Rodape autor={autor} />
        </>
    )
};

export { LayoutPadrao };
