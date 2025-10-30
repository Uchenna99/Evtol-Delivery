import Hero from "../components/sections/Hero";



const LandingPage = () => {
  return (
    <div className="w-full relative">

        <Hero />

        <div className="w-full bg-white px-4 py-20">

            <div className="w-full flex flex-col gap-7 items-center">
                <h1 className="text-primary text-5xl font-semibold">
                    Why Choose Evtol
                </h1>
                <p className="w-[800px] text-text text-xl text-center leading-normal">
                    Our cutting edge drone technology transforms medical supply delivery, ensuring faster, 
                    safer and more reliable service for healthcare providers.
                </p>
            </div>
        </div>

    </div>
  )
}

export default LandingPage;