import { useEffect } from "react";
import Slider from "../components/slider/Slider";
import Hero from "../components/hero/Hero";
import AboutHero from "../components/aboutUS/AboutHero";
import Plans from "../components/plans/Plans";
import Footer from "../components/footer/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import "../styles/SVGanimation.css";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // ✅ Lenis setup
    const lenis = new Lenis({
      smooth: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // ✅ SVG animation
    const path = document.getElementById("stroke-path");

    if (!path) return;

    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".spotlight",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // cleanup (importante en React)
    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="spotlight relative w-full overflow-x-hidden z-10">
      <Hero />
      <Slider />
      <AboutHero />
      <Plans />

      <div className="svg-path">
        <svg
          width="296"
          height="801"
          viewBox="0 0 296 801"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="stroke-path"
            d="M142.656 0.537842C142.656 0.537842 173.312 48.4442 151.288 84.5378C129.264 120.632 -55.0159 212.025 212.779 228.472C480.573 244.92 1 479.038 1 374.538C1 270.038 323.147 514.038 233.647 501.485C144.147 488.931 0.999956 582.873 1 615.873C1.00004 648.873 191.244 658.571 181.147 685.538C171.051 712.505 134.647 800.538 134.647 800.538"
            stroke="black"
            stroke-width="2"
          />
        </svg>
      </div>
      <Footer />
    </div>
  );
}
