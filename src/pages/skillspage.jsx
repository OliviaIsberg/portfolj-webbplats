import SkillContent from "../components/skillpagecomponents/skillcontent"
import SideMenu from "../components/skillpagecomponents/sideMenu"
import DeveloperPage from "../components/skillpagecomponents/DeveloperPage";
import '../css/skillPage.css'
export default function SkillsPage() {
  return (
    <div className="mainContainer" >
      <SideMenu />
      <DeveloperPage />
      <SkillContent />
    </div>
  );
}
