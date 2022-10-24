import './App.css';
import './components/contact/Contact.css';
import Sidebar from './components/Sidebar';
import About from './components/about/About';
import Work from './components/work/Work';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState, memo} from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from "styled-components";
const Main = styled.main``;
//https://codesandbox.io/s/lqc45?file=/src/App.js:773-790
//https://codesandbox.io/s/animated-routes-demo-react-router-v6-6l1li?fontsize=14&hidenavigation=1&theme=dark&file=/src/index.tsx
const AnimatedSwitch = () =>
{
  const location = useLocation()
  console.log("LOCATION", location);
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div className={`${transitionStage}`}
    onAnimationEnd={() => {
      if (transitionStage === "fadeOut") {
        setTransistionStage("fadeIn");
        setDisplayLocation(location);
      }
    }}>
    <TransitionGroup component={null}>
    <CSSTransition key={location.pathname} classNames = "fade" timeout={300}>
          
          <Routes location={displayLocation}>

            <Route path="*" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
    </CSSTransition>
    </TransitionGroup>
    </div>
  )
}

function App() {

  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";
      document.head.appendChild(stylesheet);
    }
  }, []);


  return (
    <div className='App bg-gray-300'>
      <BrowserRouter>
      <Sidebar/>

        <AnimatedSwitch/>
      </BrowserRouter>
    </div>

  )
}

export default App;
