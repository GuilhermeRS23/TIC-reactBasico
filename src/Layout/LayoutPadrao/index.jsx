import { Outlet } from "react-router-dom";
import { Cabecalho } from "../../Components/Cabecalho";
import { Conteudo } from "../../Components/Conteudo";
import { Rodape } from "../../Components/Rodape"

const LayoutPadrao = () => {
    return (
        <>
            <Cabecalho />
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Rodape autor="Guilherme" />
        </>
    )
};

export { LayoutPadrao };
