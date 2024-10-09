import './App.css';
import Portada from './components/Portada/Portada.jsx';
import Footer from './components/Footer/Footer.jsx';
import Bienvenido from './components/Bienvenido/Bienvenido.jsx';
import Experiencia from './components/Experiencia/Experiencia.jsx';
import Educacion from './components/Educacion/Educacion.jsx';
import Laboral from './components/Laboral/Laboral.jsx';
import Proyectos from './components/Proyectos/Proyectos.jsx';
import BtnTraductor from './components/BtnTraductor/BtnTraductor.jsx';

function App() {
  return (
    <>
      <Portada/>

      <Bienvenido/>

      <Experiencia/>

      <Laboral/>
      
      <Educacion/>

      <Proyectos/>

      <BtnTraductor/>

      <Footer/>
    </>
  );
}

export default App;
