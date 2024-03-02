import { FormCriarTarefa } from "../../Components/FormCriarTarefa";
import { ListaTarefas } from "../../Components/ListaTarefas";
import "./Inicial.css"

const Inicial = () => {
  return (
    <div className="inicial">
      <FormCriarTarefa />
      <ListaTarefas />
    </div>
  )
};

export { Inicial };
