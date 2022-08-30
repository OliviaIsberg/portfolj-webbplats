import { Link } from "react-router-dom";
import "../../css/Skills/sideMenu.css"


export default function SideMenu() {

    return (
        <div className="container" >
            <div className="buttons">

                <Link to="ScrumPage" >
                    <button className="scrumMaster" >Scrum Master</button>
                </Link>
                <button className="Developer" >Developer </button>
                <button className="Designer" >Designer </button>
            </div>
        </div>

    )

}





