
import Header from '../components/header';
import Map from '../components/startpagecomponents/map';
import Vision from "../components/startpagecomponents/vision";
import Gallery from "../components/startpagecomponents/gallery";
import Header from "../components/header";
import Footer from "../components/footer";
import Gallery from '../components/startpagecomponents/gallery';
import Vision from '../components/startpagecomponents/vision';

function StartPage() {
  return (
    <div>
      <Header />
      <Vision />
      <Gallery />
      <Footer />
      <Map />
      <Vision />
      <Gallery />
    </div>
  );
}

export default StartPage;
