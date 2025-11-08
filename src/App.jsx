
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './assets/css/App.css'
import Home from './pages/Home.jsx';
import Resume from './pages/Resume.jsx';
import Header from './components/Header.jsx';
import Project from "./pages/Project.jsx";

function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/web-resume/" element={<Home />} />
          <Route path="/web-resume/resume" element={<Resume />} />
          <Route path="*" element={<h1>ไม่พบหน้าที่คุณค้นหา</h1>} />
          <Route path="/web-resume/project" element={<Project/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
