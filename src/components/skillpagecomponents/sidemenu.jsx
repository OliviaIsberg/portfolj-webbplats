import { Link } from 'react-router-dom';
import '../../css/Skills/sideMenu.css';

export default function SideMenu() {
  return (
    <div className="container">
      <div className="buttons">
        <Link to="/skills/ScrumPage" style={{ textDecoration:'none' }}>
          <button className="scrumMaster">Scrummästare</button>
        </Link>
        <Link to="/skills/DeveloperPage" style={{ textDecoration:'none' }}>
          <button className="Developer">Utvecklare </button>
        </Link>
        <Link to="/skills/DesignPage" style={{ textDecoration:'none' }}>
          <button className="Designer">Designer</button>
        </Link>
      </div>
    </div>
  );
}
