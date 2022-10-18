import './App.css';
import './components/about/About.css';
import './components/contact/Contact.css';
import Sidebar from './components/Sidebar';
import About from './components/about/About';
import Home from './components/home/Home';
import Work from './components/work/Work';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'> 
      <Sidebar/>
      <BrowserRouter>
        <Routes>
          <Route path = "/about" element ={<About/>}/>
          <Route path = "/work" element ={<Work/>}/>
          <Route path = "/projects" element ={<Projects/>}/>
          <Route path = "/contact" element ={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
    
  )
}

export default App;
