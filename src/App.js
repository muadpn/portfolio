
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Contact from './container/contact/Contact';
import Experience from './container/experience/Experience';
import Header from './container/header/Header';
import Projects from './container/projects/Projects';
import Skills from './container/skills/Skills';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Header/>
     <Experience/>  
     <Skills/>
     <Projects/>
    <Contact/>
    </div>
  );
}

export default App;
