import AboutUs from "./components/AboutUs";
import BrandBar from "./components/BrandBar";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import MachinesSection from "./components/machineSection/MachinesSection";
import Services from "./components/Services";



function App() {
  return (
    <div>
      <Header />
      <Hero />
      <BrandBar />
      <AboutUs />
      <MachinesSection/>
      <Services/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
