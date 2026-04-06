import ReactLenis from "lenis/react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "motion/react";
import { useRef } from "react";
import HeroPage from "./Pages/HeroPage";

const App = () => {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end end"],
  // });
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });
  // const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1]);
  // const scaleMiddle = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  return (
    <ReactLenis root options={{ smoothWheel: true }}>
      <motion.div className="relative h-[300vh] bg-white">
        <motion.div className="">
          <HeroPage />
        </motion.div>
      </motion.div>
    </ReactLenis>
  );
};

export default App;
