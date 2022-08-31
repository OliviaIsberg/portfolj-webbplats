import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StartPage from './pages/startpage';
import SkillsPage from './pages/skillspage';
import Layout from './components/layout';
import ContactPage from './pages/contactpage';
import DeveloperPage from './pages/DeveloperPage';
import DesignPage from './pages/DesignPage';
import ScrumPage from './pages/ScrumPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<StartPage />}></Route>
            <Route path="contact" element={<ContactPage />}></Route>
            <Route path="contact/:name" element={<ContactPage />}></Route>
            <Route path="skills">
              <Route index element={<SkillsPage />}></Route>
              <Route path="DeveloperPage" element={<DeveloperPage />}></Route>
              <Route path="DesignPage" element={<DesignPage />}></Route>
              <Route path="ScrumPage" element={<ScrumPage />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
