import "./Botao.css"
import { TIPO_BOTAO } from "./Constantes";

const Botao = (props) => {
    const {texto, tipo = TIPO_BOTAO.PRIMARIO, ...outrasPrpos} = props;

    return (
        <button tipo={tipo} {...outrasPrpos} className="botao">
            {texto}
        </button>
    )
}

export {Botao};
