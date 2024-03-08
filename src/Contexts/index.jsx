import { createContext, useEffect, useState } from "react";
import { api } from "../Services/api";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
    const [autor, setAutor] = useState("Guilherme RS");

    const [tarefas, setTarefas] = useState([]);

    const carregarTarefas = async () => {
        const { data = [] } = await api.get('/tarefas')

        setTarefas([
            ...data]);
    };

    const adicionarTarefa = async (nomeTarefa) => {
        const { data: tarefa } = await api.post('/tarefas', {
            nomeTarefa: nomeTarefa,
        })

        setTarefas(estadoAtual => {

            return [
                ...estadoAtual,
                tarefa,
            ]
        });
    };

    const removerTarefa = async (idTarefa) => {
        await api.delete(`tarefas/${idTarefa}`);

        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.filter(tarefa => tarefa.id != idTarefa);

            return [
                ...tarefasAtualizadas,
            ]
        })
    };

    const editarTarefa = async (idTarefa, nomeTarefa) => {
        const { data: tarefaAtualizada } = await api.put(`tarefas/${idTarefa}`, {
            nomeTarefa: nomeTarefa,
        })

        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.map(tarefa => {
                return tarefa.id == idTarefa ? {
                    ...tarefa,
                    nomeTarefa: tarefaAtualizada.nomeTarefa,
                } : tarefa;
            })

            return [
                ...tarefasAtualizadas
            ]
        });
    };

    useEffect(() => {
        carregarTarefas()
    },
        []);

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
