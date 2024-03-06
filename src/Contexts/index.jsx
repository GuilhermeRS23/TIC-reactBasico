import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
    const [autor, setAutor] = useState("Guilherme RS");

    const [tarefas, setTarefas] = useState([
        { id: 1, nomeTarefa: "Spider-man" },
        { id: 2, nomeTarefa: "Uncharted" },
        { id: 3, nomeTarefa: "F1 23" },
        { id: 4, nomeTarefa: "EA FC 24" }
    ])

    const adicionarTarefa = (nomeTarefa) => {
        setTarefas(estadoAtual => {
            const tarefa = {
              id: estadoAtual.length + 1,
              nomeTarefa: nomeTarefa
            }
      
            return [
              ...estadoAtual,
              tarefa
            ]
          });
    };

    const removerTarefa = (idTarefa) => {
setTarefas(estadoAtual => {
    const tarefasAtualizadas = estadoAtual.filter(tarefa => tarefa.id != idTarefa);

    return [
        ...tarefasAtualizadas,
    ]
})
    };

    const editarTarefa = (idTarefa, nomeTarefa) => {
        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.map(tarefa =>{
                return tarefa.id == idTarefa ? {
                ...tarefa,
                nomeTarefa: nomeTarefa
                } : tarefa;
            })

            return [
                ...tarefasAtualizadas
            ]
        });
    };

    return (
        <AppContext.Provider value={{
            autor,
            tarefas,
            adicionarTarefa,
            removerTarefa,
            editarTarefa
        }}>
            {children}
        </AppContext.Provider>
    )
};
