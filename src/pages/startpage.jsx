
import Header from '../components/header';
import Map from '../components/startpagecomponents/map';
import Vision from "../components/startpagecomponents/vision";
import Gallery from "../components/startpagecomponents/gallery";
import Footer from "../components/footer";

function StartPage() {
  return (
    <div>
      <Header />
      <Vision />
      <Gallery />

      <Map />
      <Footer />
    </div>
  );
}

export default StartPage;
