import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

// should do within the app once. scrolltrigger will allow us the trigger animation based on the scroll, splittext all us to break text into indiviual words for text animation.
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art/>
      <Menu/>
      <Contact />
    </main>
  )
}

export default App