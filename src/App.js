import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
    
<nav>
<h1>#VANLIFE</h1>
    <Link to='/'><p>Home</p></Link>
    <Link to='/about'><p>About</p></Link>

    </nav>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
