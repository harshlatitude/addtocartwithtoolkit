import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/Headers';
import Cards from './components/Cards';
import CardsDetails from './components/CardsDetails';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Headers />
     <Routes>
      <Route path='/' element={<Cards />} />
      <Route path='/cart' element={<CardsDetails />} />
     </Routes>
    </div>
  );
}

export default App;
