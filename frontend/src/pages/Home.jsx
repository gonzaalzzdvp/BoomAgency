import Slider from "../components/slider/Slider";
import Hero from '../components/hero/Hero'
import AboutHero from '../components/aboutUS/AboutHero';
import Plans from '../components/plans/Plans'

export default function Home() {
  return (
    <div className="w-full">
      <Hero/>
      <AboutHero />
      <Plans />
    </div>
  );
}
