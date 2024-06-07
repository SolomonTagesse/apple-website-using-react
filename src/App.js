import Header from "./Header/Header";
import Mainhighlight from "./Body/Mainhighlight";
import First from "./Body/First";
import "./css/bootstrap.css";
import "./css/styles.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/carousel";
import Second from "./Body/Second";
import Third from "./Body/Third";
import Fourth from "./Body/Fourth";
import Fifth from "./Body/Fifth";
import Carousel from "./Body/Carousel";
import Footer from "./Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Mainhighlight />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
