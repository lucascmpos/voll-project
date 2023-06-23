import './App.css';
import Container from './components/Container';
import Rodape from './components/Rodape';
import Titulo from './components/Titulo';
import Cabecalho from './components/cabecario';

function App() {
  return (
    <>
    <Cabecalho />
    <Container>
      <Titulo>Area Administrativa</Titulo>
    </Container>
    <Rodape />
    </>
  );
}

export default App;
