import './App.css';
import './index.css';
import Navigation from "./componentes/Navbar";
import Contacto from "./componentes/Contacto";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import Contactos from './views/Contactos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contactos />} /> 
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
