import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from './App.module.css';
import { ScrollToTop } from "./ScrollToTop";
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

import { WebDev } from "./components/ProjectPages/WebDev";

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
            <>
              <Navbar/>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </>
          } />
        <Route path="/projects/freelance-web-dev" element={<WebDev/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
