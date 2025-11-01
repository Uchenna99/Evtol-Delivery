import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import Testimonials from "../components/sections/Testimonials";
import WhyChooseUs from "../components/sections/WhyChooseUs";



const LandingPage = () => {
  return (
    <div className="w-full relative">

        <Hero />

        <WhyChooseUs />

        <HowItWorks />

        <Testimonials />

    </div>
  )
}

export default LandingPage;