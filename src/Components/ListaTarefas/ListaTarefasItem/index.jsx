import { Botao } from "../../Botao";
import { TIPO_BOTAO } from "../../Botao/Constantes";
import "./ListaTarefasItem.css"

const ListaTarefasItem = ({nomeTarefa}) => {
    return (
        <li className="listaTarefasItem"> {nomeTarefa}
            <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO} />
        </li>
    )
};

export { ListaTarefasItem };
