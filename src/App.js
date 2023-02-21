
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Experience from './container/experience/Experience';
import Header from './container/header/Header';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Header/>
     <Experience/>
    </div>
  );
}

export default App;
