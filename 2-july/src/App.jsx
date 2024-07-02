import Hero from "./components/hero/Hero";
import HomeCard from "./components/homeCard/HomeCard";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="grid grid-cols-12 gap-4 mx-32 mt-20 ">
        <HomeCard col_size={6} />
        <HomeCard col_size={3} />
        <HomeCard col_size={3} />
      </div>
    </div>
  );
};

export default App;
