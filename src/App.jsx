import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StartPage from './pages/startpage';
import SkillsPage from './pages/skillspage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<StartPage />}></Route>
          <Route path="/skills" element={<SkillsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
