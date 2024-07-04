import Hero from "./components/hero/Hero";
import HomeCard from "./components/homeCard/HomeCard";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="grid grid-cols-12 gap-4 px-32 mt-20 ">
        <HomeCard col_size={6} />
        <HomeCard col_size={6} />
        <HomeCard col_size={6} />
        <HomeCard col_size={6} />

      </div>
    </div>
  );
};

export default App;
