import { useState, type FormEvent } from "react";
import drone from "../assets/images/Pelican-2.0-Home.png"
import Button2 from "../components/Button2";
import InputText from "../components/InputText";
import ButtonLoader from "../components/ButtonLoader";
import { Link, useNavigate } from "react-router-dom";
import InputPassword from "../components/InputPassword";
import axios from "axios";
import { HOST } from "../hooks/Api";

const SignupPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const payload = {
    firstName:firstName.trim(),
    lastName: lastName.trim(),
    phoneNumber: phone.trim(),
    age: age,
    email:email.trim(), 
    password:password.trim()
  };

  const handleRegistration = async (e: FormEvent)=>{
    e.preventDefault();
    setIsLoading(true);

    axios.post(`${HOST}/api/v1/auth/login`, payload)
    .then((response)=>{
      console.log(response.data);
      navigate('/login');
    })
    .catch((error)=>{
      alert(error.message);
    })
    .finally(()=> setIsLoading(false));
  };

  return (
    <>
        <div className="w-full md:h-screen bg-background flex max-md:flex-col">

          {/* Left side */}
          <div className="w-full md:w-[40%] h-fit md:h-full flex flex-col items-center justify-center gap-5 py-10 px-5">

            <h2 className="text-text text-2xl md:text-3xl text-center font-semibold">Your first drone delivery awaits</h2>
            <img src={drone} alt="" />
            <h2 className="text-text text-2xl md:text-3xl text-center font-semibold">Register and get started</h2>

          </div>


          {/* Right side */}
          <div className="w-full md:w-[60%] p-5 flex justify-center">
            <div className="w-[500px] max-w-full flex flex-col items-center justify-center gap-10 max-md:pb-14">

              <form  className="w-full flex flex-col gap-2"
                onSubmit={handleRegistration}>

                <InputText title="First name" placeHolder="Enter first name" value={firstName} onInputChange={setFirstName} require/>
                
                <InputText title="Last name" placeHolder="Enter last name" value={lastName} onInputChange={setLastName} require/>

                <div className="w-full flex items-center justify-between gap-10">

                  <InputText title="Age" placeHolder="eg: 20" value={age} onInputChange={setAge} require/>

                  <InputText title="Phone" placeHolder="eg: 07035229994" value={phone} onInputChange={setPhone} require/>

                </div>

                <InputText title="Occupation" placeHolder="eg: Medical Officer, Rivers Clinic" value={occupation} 
                  onInputChange={setOccupation} require
                />

                <InputText title="Email" placeHolder="Enter your email" value={email} onInputChange={setEmail} require/>

                <InputPassword title="Password" placeHolder="Enter your password" value={password} onInputChange={setPassword} require/>

                <div className="w-full h-11 mt-8">
                  {
                    isLoading?
                    <ButtonLoader/>
                    :
                    <Button2
                      text="Register"
                      // onClick={handleRegistration}
                    />
                  }
                </div>
              </form>

              

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