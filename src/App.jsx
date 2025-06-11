import "./App.css";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
      </div>
      <WhyUs />
      <Services />
      <Projects />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
