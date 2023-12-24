import Cards from "./Cards";
import Carousel from "./Carousel";
import Contributors from "./Contributors";
import Footer from "./Footer";
import Header from "./Header";
import Toggle from "./Toggle";

const Home = () => {
  return (
    <div className="loader lightmode">
      <Header />
      <main>
        <Carousel />
        <Toggle />
        <Cards />
      </main>
      <Contributors />
      <Footer />
      {/* <audio src="./sound/naruto.mp3"></audio> */}
    </div>
  );
};

// setup react router

export default Home;
