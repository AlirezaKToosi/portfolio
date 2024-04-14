import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import About from "./sections/About";
import Contacts from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import "./styles/style.css"
import { useState } from "react";
import Modal from "../src/components/Modal";



export default function App() {
    // Local state
    const [modal, setModal] = useState(null);

  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
      <Projects setModal={setModal}/>
      <Technologies />
      <Contacts />
      <Footer />
      {/* Modal invisible unless someone sents a React component using setModal() */}
      <Modal state={[modal, setModal]} />
    </div>
  );
}
