import '../../css/DeveloperPage.css'
import "./sideMenu"
import { useEffect, useRef, useState } from 'react'

export default function DeveloperPage() {
    const [isShownDesign, setIsShownDesign] = useState(false)
    const [isShownDeve, setIsShownDeve] = useState(false)
    const [isShoweSrum, setIsShowSrum] = useState(false)


    const handleClickDeveloper = event => {
        setIsShownDeve(current => !current)
    }
    const handleClickDesign = event => {
        setIsShownDesign(current => !current)
    }
    const handleClickScrum = event => {
        setIsShowSrum(current => !current)
    }
    let menuRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            if (!menuRef.current.contains(event.target)) {
                setIsShownDesign(false)
            }
        }
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    useEffect(() => {
        let handler = (event) => {
            if (!menuRef.current.contains(event.target)) {
                setIsShownDeve(false)
            }
        }
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    useEffect(() => {
        let handler = (event) => {
            if (!menuRef.current.contains(event.target)) {
                setIsShowSrum(false)
            }
        }
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });






    return (
        <div>
            <div className="container">

                <button onClick={handleClickScrum} className="scrumMaster" >Scrum master</button>
                <button onClick={handleClickDeveloper} className="Developer" >Developer </button>
                <button onClick={handleClickDesign} className="Designer" >Designer </button>
            </div>

            {isShownDesign && (
                <div ref={menuRef} className="BorderDesignerPage" > Designer kommer att finnas här </div>
            )}


            {isShownDeve && (
                <div ref={menuRef} className="BorderDeveloperPage" >
                    Developer kommer att finans här
                </div>

            )
            }

            {isShoweSrum && (
                <div ref={menuRef} className="BorderScrumPage">
                    här kommer scrum att finnas
                </div>
            )}




        </div>
    );
}





