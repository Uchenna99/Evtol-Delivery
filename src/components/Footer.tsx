import logo from "../assets/images/logo_white.svg"

const Footer = () => {
  return (
    <div className="w-full flex justify-center bg-primary">
        <div className="w-full xl:w-[1240px] flex flex-col gap-4 py-6 px-5 md:px-10">

            <div className="w-full flex justify-between ">
                <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 relative flex items-center justify-center">
                            <img src={logo} alt="" 
                                className="scale-210"
                            />
                        </div>
                        <h4 className="text-white font-semibold">EVTOL</h4>
                    </div>
                    <p className="text-background text-sm">Aptech, Nigeria</p>
                </div>

                <div className="flex flex-col">
                    <p className="text-white text-right cursor-pointer hover:underline decoration-white">
                        Contact us
                    </p>
                    <p className="text-white text-right cursor-pointer hover:underline decoration-white">
                        Medicines
                    </p>
                    <p className="text-white text-right cursor-pointer hover:underline decoration-white">
                        Blog
                    </p>
                </div>
            </div>

            <div className="w-full h-[1px] bg-white"></div>

            <div className="w-full flex justify-center">
                <p className="text-white text-sm text-center">
                    Copyright © EVTOL INC. All rights reserved.
                </p>
            </div>

        </div>
    </div>
  )
}

export default Footer;