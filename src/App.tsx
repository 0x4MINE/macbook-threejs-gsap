import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductViewer from "./components/ProductViewer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Showcase from "./components/Showcase";
import { useGSAP } from "@gsap/react";
import Performance from "./components/Performance";
import Features from "./components/Features";

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance/>
      <Features />
    </main>
  );
}

export default App;
