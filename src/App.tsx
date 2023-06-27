import './App.css';
import Container from './components/Container';
import Rodape from './components/Rodape';
import Tabela from './components/Tabela';
import Titulo from './components/Titulo';
import Cabecalho from './components/cabecario';
import useDadosConsulta from './useDadosConsulta';

function App() {
  const {dados, erro} = useDadosConsulta();
  return (
    <>
    <Cabecalho />
    <Container>
      <Titulo>Area Administrativa</Titulo>
      <Tabela consultas={dados}></Tabela>
    </Container>
    <Rodape />
    </>
  );
}

export default App;
