import { useState } from "react";
import drone from "../assets/images/Pelican-2.0-Home.png"
import Button2 from "../components/Button2";
import InputText from "../components/InputText";
import ButtonLoader from "../components/ButtonLoader";
import { Link } from "react-router-dom";
import InputPassword from "../components/InputPassword";

const SignupPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRegistration = ()=>{
    setIsLoading(true);
  };

  return (
    <>
        <div className="w-full h-screen bg-background flex max-md:flex-col">

          {/* Left side */}
          <div className="w-full md:w-[40%] h-fit md:h-full flex flex-col items-center justify-center gap-5 py-10 px-5">

            <h2 className="text-text text-2xl md:text-3xl text-center font-semibold">Your first drone delivery awaits</h2>
            <img src={drone} alt="" />
            <h2 className="text-text text-2xl md:text-3xl text-center font-semibold">Register and get started</h2>

          </div>


          {/* Right side */}
          <div className="w-full md:w-[60%] p-5 flex justify-center">
            <div className="w-[500px] max-w-full flex flex-col items-center justify-center gap-10 max-md:pb-14">

              <div className="w-full flex flex-col gap-2">

                <InputText title="First name" placeHolder="Enter first name"/>
                
                <InputText title="Last name" placeHolder="Enter last name"/>

                <div className="w-full flex items-center justify-between gap-10">

                  <InputText title="Age" placeHolder="eg: 20"/>

                  <InputText title="Phone" placeHolder="eg: 07035229994"/>

                </div>

                <InputText title="Phone" placeHolder="eg: 07035229994"/>

                <InputText title="Email" placeHolder="Enter your email"/>

                <InputPassword title="Password" placeHolder="Enter your password"/>

              </div>

              
              <div className="w-full h-11">
                {
                  isLoading?
                  <ButtonLoader/>
                  :
                  <Button2
                    text="Register"
                    onClick={handleRegistration}
                  />
                }
              </div>

              <div className="w-full flex items-center justify-center gap-2">
                <p className="text-sm text-text/90">
                  Already have an account?
                </p>
                <Link to={'/login'} className="text-secondary text-sm hover:underline font-medium">
                  Log in
                </Link>
              </div>

            </div>
          </div>

        </div>
    </>
  )
}

export default SignupPage;