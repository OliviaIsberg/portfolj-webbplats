import "../../css/Skills/sideMenu.css";
import { useState, useEffect, useRef } from "react";
import ScrumMaster from "./Skills/ScrumMaster";
import Designers from "./Skills/Designers";
import Developers from "./Skills/Developers";

export default function SideMenu() {
  const [isShowDesign, setIsShowDesign] = useState(false);
  const [isShowDeve, setIsShowDeve] = useState(false);
  const [isShowScrum, setIsShowScrum] = useState(false);

  const handleClickDeveloper = (event) => {
    setIsShowDeve((current) => !current);
  };
  const handleClickDesign = (event) => {
    setIsShowDesign((current) => !current);
  };
  const handleClickScrum = (event) => {
    setIsShowScrum((current) => !current);
  };
  let menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setIsShowDesign(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setIsShowDeve(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setIsShowScrum(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="container">
      <div className="buttons">
        <button onClick={handleClickDesign} className="Designer">
          Designer{" "}
        </button>
        <button onClick={handleClickScrum} className="scrumMaster">
          Scrummästare
        </button>
        <button onClick={handleClickDeveloper} className="Developer">
          Utvecklare{" "}
        </button>
      </div>

      {isShowDesign && (
        <div ref={menuRef} className="skill">
          <Designers />
        </div>
      )}
      {isShowDeve && (
        <div ref={menuRef} className="skill">
          <Developers />
        </div>
      )}
      {isShowScrum && (
        <div ref={menuRef} className="skill">
          <ScrumMaster />
        </div>
      )}
    </div>
  );
}
