import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

// should do within the app once. scrolltrigger will allow us the trigger animation based on the scroll, splittext all us to break text into indiviual words for text animation.
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"/>
    </main>
  )
}

export default App