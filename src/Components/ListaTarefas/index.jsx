import { useAppContext } from "../../Hooks/useAppContext";
import { ListaTarefasItem } from "./ListaTarefasItem";
import "./ListaTarefas.css"

const ListaTarefas = () => {
const { tarefas } = useAppContext();

    return (
        <ul className="listaTarefas">
            {!tarefas.length && (
                <p>Não há tarefas cadastradas no momento...</p>
            )}
            {tarefas.map(item => 
            <ListaTarefasItem 
            key={item.id} id={item.id} nomeTarefa={item.nomeTarefa} />)}
        </ul>
    )
};

export { ListaTarefas };
