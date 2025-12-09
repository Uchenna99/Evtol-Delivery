import { PlaneTakeoff } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiRequest } from "../../hooks/Api";



const DispatchSuccess = () => {
    const navigate = useNavigate();
    const [verifying, setVerifying] = useState(true);

    useEffect(()=>{

        const reference = localStorage.getItem("evtol-order-ref");
        if(reference) {
            apiRequest("GET", `/api/v1/payment/verify/${reference}`)
            .then((response)=>{
                console.log(response.data);
                localStorage.removeItem("evtol-order-ref");
            })
            .catch((error)=>{
                console.log(error);
                alert("Payment verification failed");
                navigate("/dashboard");
            })
            .finally(()=>{
                setVerifying(false);
            })
        }else {
            navigate("/dashboard");
        }
    },[]);

    if(verifying) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <p>Verifying payment...</p>
            </div>
        )
    }

  return (
    <motion.div className="w-full flex flex-col items-center justify-center p-5 py-20 gap-6"
        initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{duration:0.5, ease:'easeInOut'}}>

        <motion.div className="w-15 aspect-square rounded-full bg-green-300 grid place-items-center text-green-700"
            initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{duration:0.3, delay:0.4, ease:'easeInOut'}}>
            <PlaneTakeoff />
        </motion.div>

        <h1 className="text-2xl font-semibold text-center">
            Your drone has been dispatched!
        </h1>

        <p className="text-sm ">
            Estimated arrival time: <span className="text-primary font-medium">11 minutes</span>
        </p>

        <motion.button className="w-fit py-2 px-6 bg-primary text-white rounded-md cursor-pointer hover:shadow-lg 
            transition-all duration-200"
            onClick={()=> navigate('/dashboard')}
            initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3, ease:'easeInOut'}}>
            Track Your Delivery
        </motion.button>

        <Link to={'/dashboard'} className="text-primary text-sm font-medium">
            Return to Dashboard
        </Link>
    </motion.div>
  )
}

export default DispatchSuccess;