import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Home />
         <AboutUs />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
