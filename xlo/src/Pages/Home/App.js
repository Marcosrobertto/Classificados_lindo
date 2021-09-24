import { Link } from 'react-router-dom';

import "../../Assets/css/flexbox.css";
import "../../Assets/css/reset.css";
import "../../Assets/css/style.css";

import logo from "../../Assets/img/Logo-Branca.png";

import Rodape from '../../Components/Rodape/rodape';

function App() {
  return (
    <div>
      <header className="cabecalhoPrincipal">
      <div className="container">
          <Link to="/"><img src={logo} alt="logo dos Classificados" /></Link>

          <nav className="cabecalhoPrincipal-nav">
            <Link to="/">Home</Link>
            <Link to="/Anunciar">Anunciar</Link>
            <Link className="cabecalhoPrincipal-nav-login" to="login" >Login</Link>
            {/* <a className="cabecalhoPrincipal-nav-login" href="login">Login</a> */}
          </nav>
        </div>
      </header>

      <section>
        <div>
          <h1>Anuncios</h1>
        </div>
      </section>
      
      <Rodape />
    </div>
  );
}

export default App;
