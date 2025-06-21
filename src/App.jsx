import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText);

// should do within the app once. scrolltrigger will allow us the trigger animation based on the scroll, splittext all us to break text into indiviual words for text animation.
const App = () => {
  return (
    <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  )
}

export default App