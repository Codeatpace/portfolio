import './App.css';
import Navbar from './components/Navbar';
import About from './screen/About';
import {Routes, Route} from 'react-router-dom';
import Home from './screen/Home';
import Project from './screen/Project';
import Contact from './screen/Contact';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/project' element={<Project/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
      </Routes>
    </>  
  );
}

export default App;

