import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StartPage from './pages/startpage';
import SkillsPage from './pages/skillspage';
import Layout from './components/layout';
import ContactPage from './pages/contactpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<StartPage />}></Route>
            <Route path="/skills" element={<SkillsPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
