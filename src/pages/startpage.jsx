import Map from '../components/startpagecomponents/map';
import Vision from '../components/startpagecomponents/vision';
import Gallery from '../components/startpagecomponents/gallery';
import '../css/startpage.css';

function StartPage() {
  return (
    <div className='startpage'>
        <Vision />
        <Gallery />
      <Map />
    </div>
  );
}

export default StartPage;
