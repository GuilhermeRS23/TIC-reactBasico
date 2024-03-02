import { Link } from "react-router-dom";
import "./Cabecalho.css";

const Cabecalho = () => {
    return (

        <div className="cabecalho">
            <Link to="/">
                <h1><span>ToDo</span> List</h1>
            </Link>
            <Link to="/sobreNos">
                <h1>Sobre Nós</h1>
            </Link>
        </div>
    )
};
//EXPOTAÇÃO NOMEADA
export { Cabecalho };
