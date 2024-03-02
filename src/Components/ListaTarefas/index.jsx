import "./ListaTarefas.css"
import { ListaTarefasItem } from "./ListaTarefasItem";

const ListaTarefas = () => {
    const tarefas = [
        { id: 1, nomeTarefa: "Spider-man" },
        { id: 2, nomeTarefa: "Uncharted" },
        { id: 3, nomeTarefa: "F1 23" },
        { id: 4, nomeTarefa: "EA FC 24" }
    ]
    return (
        <ul className="listaTarefas">
            {tarefas.map(item => <ListaTarefasItem key={item.id} nomeTarefa={item.nomeTarefa} />)}
        </ul>
    )
};

export { ListaTarefas };
