
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Movies from './components/Movies';
import Booking from './components/Booking';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/details' element={<Details />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='/booking' element={<Booking />}></Route>
        </Routes>
      </Router>

     
    </div>
  );
}

export default App;
