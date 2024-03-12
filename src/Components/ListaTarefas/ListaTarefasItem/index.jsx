import { useState } from "react";
import { useAppContext } from "../../../Hooks/useAppContext";
import { Botao } from "../../Botao";
import { TIPO_BOTAO } from "../../Botao/Constantes";
import { CampoText } from "../../CampoText"
import "./ListaTarefasItem.css"

const ListaTarefasItem = ({ id, nomeTarefa }) => {
    const { removerTarefa, editarTarefa } = useAppContext();
    const [editando, setEditando] = useState(false);

    const onBlurTarefa = (event) => {
        const nomeTarefa = event.currentTarget.value;
        editarTarefa(id, nomeTarefa);
        setEditando(false);
    };

    return (
        <li className="listaTarefasItem">
            {editando && (
                <CampoText defaultValue={nomeTarefa}
                    onBlur={onBlurTarefa}
                    autoFocus />
            )}

            {!editando && (
                <span onDoubleClick={() => setEditando(true)} >{nomeTarefa}</span>
            )}

            <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO}
                onClick={() => removerTarefa(id)} />
        </li>
    )
};

export { ListaTarefasItem };
