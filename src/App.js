
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Navebar from './component/Navebar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Project from './pages/Projects/Project';
import Resume from './pages/Resume';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navebar/>
      <Routes>
        <Route element={<Home/>} path={'/'}/>
        <Route element={<About/>} path={'/about'}/>
        <Route element={<Project/>} path={'/project'}/>
        <Route element={<Resume/>} path={'/resume'}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
