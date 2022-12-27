
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Navebar from './component/Navebar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Project from './pages/Projects/Project';
import Resume from './pages/Resume';
import Sorry from './pages/Sorry';


function App() {
  return (<>
  <div className='mobile' style={{color:'red'}} > <center><h2>Currently working for  mobile web app</h2></center></div>

    <div className="App" >
      
      <BrowserRouter>
      <Navebar/>
      <Routes>
        <Route element={<Home/>} path={'/'}/>
        <Route element={<About/>} path={'/about'}/>
        <Route element={<Project/>} path={'/project'}/>
        <Route element={<Resume/>} path={'/resume'}/>
        <Route element={<Sorry/>} path={'/sorry'}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
    </>
  );
}

export default App;
