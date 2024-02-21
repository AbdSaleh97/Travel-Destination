import './App.css';
import Home from './components/home/Home.js';
import {Routes, Route} from 'react-router-dom'
import Details from './components/TourDetails/TourDetails.js'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/city/:id" element={<Details />}></Route>
      </Routes>
    </div>

  );
}

export default App;
