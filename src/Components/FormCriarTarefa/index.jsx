import { Botao } from "../Botao";
import { CampoText } from "../CampoText";
import { TIPO_BOTAO } from "../Botao/Constantes";
import { useState } from "react";
import { useAppContext } from "../../Hooks/useAppContext";

import "./FormCriarTarefa.css"

const FormCriarTarefa = ( ) => {
  const { adicionarTarefa } = useAppContext();
  const [nomeTarefa, setNomeTarefa] = useState('');

  const onChangeNomeUpdate = (e) => {
    setNomeTarefa(e.currentTarget.value);
  };

  const envioFormulario = (e) => {
    e.preventDefault();

    if (!nomeTarefa) {
      return;
    }

    adicionarTarefa(nomeTarefa);

    setNomeTarefa('');
  };

  return (
    <form className="formulario" onSubmit={envioFormulario}>
      <CampoText value={nomeTarefa} onChange={onChangeNomeUpdate} />
      <Botao texto="+" />
    </form>
  )
};

export { FormCriarTarefa };
