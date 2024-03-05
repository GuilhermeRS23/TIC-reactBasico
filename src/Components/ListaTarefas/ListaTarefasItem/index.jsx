import { useAppContext } from "../../../Hooks/useAppContext";
import { Botao } from "../../Botao";
import { TIPO_BOTAO } from "../../Botao/Constantes";
import "./ListaTarefasItem.css"

const ListaTarefasItem = ({id , nomeTarefa}) => {
    const {removerTarefa} = useAppContext();

    return (
        <li className="listaTarefasItem"> {nomeTarefa}
            <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO}  
            onClick={()=> removerTarefa(id)}/>
        </li>
    )
};

export { ListaTarefasItem };
