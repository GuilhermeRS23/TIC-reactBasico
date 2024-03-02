import { Botao } from "../Botao";
import { CampoText } from "../CampoText";
import { TIPO_BOTAO } from "../Botao/Constantes";
import "./FormCriarTarefa.css"

const FormCriarTarefa = () => {
  return (
    <form className="formulario">
    <CampoText />
    <Botao texto="+"/>
    </form>
  )
};

export { FormCriarTarefa };
