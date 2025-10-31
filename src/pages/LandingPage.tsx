import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import WhyChooseUs from "../components/sections/WhyChooseUs";



const LandingPage = () => {
  return (
    <div className="w-full relative">

        <Hero />

        <WhyChooseUs />

        <HowItWorks />

    </div>
  )
}

export default LandingPage;