import { useState } from "react";
import drone from "../assets/images/Pelican-2.0-Home.png"
import InputText from "../components/InputText";
import ButtonLoader from "../components/ButtonLoader";
import Button2 from "../components/Button2";
import { Link, useNavigate } from "react-router-dom";
import InputPassword from "../components/InputPassword";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleRegistration = ()=>{
    setIsLoading(true);
    navigate('/dashboard');
  };

  return (
    <>
        <div className="w-full h-screen bg-background flex max-md:flex-col">

          {/* Left side */}
          <div className="w-full md:w-[40%] h-fit md:h-full flex flex-col items-center justify-center gap-5 py-10 px-5">

            <h2 className="text-text text-2xl md:text-3xl text-center font-semibold">Welcome back!</h2>
            <img src={drone} alt="" />
            <h2 className="text-text text-2xl md:text-3xl text-center font-semibold">Log in and get started</h2>

          </div>


          {/* Right side */}
          <div className="w-full md:w-[60%] p-5 flex justify-center">
            <div className="w-[500px] max-w-full flex flex-col items-center justify-center gap-10 max-md:pb-14">

              <div className="w-full flex flex-col gap-2">

                <InputText title="Email" placeHolder="Enter email"/>
                
                <InputPassword title="Password" placeHolder="Enter password"/>

              </div>


              <div className="w-full h-11">
                {
                  isLoading?
                  <ButtonLoader/>
                  :
                  <Button2
                    text="Log in"
                    onClick={handleRegistration}
                  />
                }
              </div>


              <div className="w-full flex items-center justify-center gap-2">
                <p className="text-sm text-text/90">
                  Already have an account?
                </p>
                <Link to={'/signup'} className="text-secondary text-sm hover:underline font-medium">
                  Sign up
                </Link>
              </div>

            </div>
          </div>
          
        </div>
    </>
  )
}

export default LoginPage;