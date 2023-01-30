import './App.css';
import Layout from './Layout/Layout'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import About from './pages/About/About'
import More from './pages/More/More'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/more" element={<More />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
