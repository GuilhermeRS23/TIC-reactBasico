import { Routes,Route } from "react-router-dom";
import { Inicial } from "./pages/Inicial";
import { SobreNos } from "./pages/SobreNos";
import { LayoutPadrao } from "./Layout/LayoutPadrao";
import { Erro404 } from "./pages/Erro404";

const Router = () => {
    return (
        <Routes >
            <Route path='/' element={<LayoutPadrao />}>
                <Route path='/' element={<Inicial />} />
                <Route path='/sobreNos' element={<SobreNos />} />
                <Route path='*' element={<Erro404 />} />
            </Route>
        </Routes>
    )
};

export { Router };
