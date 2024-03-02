import "./Rodape.css";

const Rodape = ({autor}) => {
    const anoAtual = (new Date().getFullYear());
  return (
    <footer className="rodape">
      React Basico - {anoAtual} - {autor} 
    </footer>
  );
};

export { Rodape };
