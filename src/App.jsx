import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Cabecalho } from "./Components/Cabecalho";
import { Conteudo } from "./Components/Conteudo";
import { Rodape } from "./Components/Rodape";
import { Inicial } from "./pages/Inicial";
import { Router } from "./Router";

const App = () => {
  return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
  );
};

export { App };
