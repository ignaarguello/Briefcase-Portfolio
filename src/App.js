import './App.css';
import Layout from './Layout/Layout'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
