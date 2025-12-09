// import PaystackPop from "@paystack/inline-js";
import { useOutletContext } from "react-router-dom";
import type { InitializationResponse, LayoutContext } from "../assets/Interfaces";
import axios from "axios";
import { useAppContext } from "../hooks/AppContext";
import { BASE_URL } from "../hooks/Api";

interface Props {
    total: number;
    initPaystack: ()=>void;
}

const PaystackButton = ({ total, initPaystack }:Props) => {
    const { user } = useOutletContext<LayoutContext>();
    const { address, selectedItems } = useAppContext();
    const payload = {
        email: user!.email,
        amount: total,
        userId: user!.id,
        destination: address,
        orderItem: selectedItems
    }

    const initializePayment = async ()=>{
        if(user) {
            initPaystack();

            axios.post(`${BASE_URL}/api/v1/payment/initialize`, payload)
            .then((response)=>{
                const res = response.data as InitializationResponse;
                localStorage.setItem("evtol-order-ref", res.reference);
                window.location.href = res.authorization_url; // redirect to Paystack
            })
        }else{
            alert("No user found");
        }
    };

    // const payWithPaystack = () => {
    //     if(user) {
    //         const paystack = new PaystackPop();
    //         paystack.newTransaction({
    //         key: "pk_test_6dc94e804ae7eac633359b017fe977d4fd84d2cb",
    //         email: user?.email,
    //         amount: total * 100, // amount in kobo
    //         reference:"",
    //         onSuccess: (transaction) => {
    //             console.log("Payment successful:", transaction);
    //             // send reference to your backend for verification
    //         },
    //         onCancel: () => {
    //             console.log("Payment cancelled");
    //         },
    //         });
    //     }
    // };

  return (
    <button className="w-full py-2 bg-primary rounded-md text-white cursor-pointer hover:shadow-lg 
        transition-all duration-200 active:scale-x-99"
        onClick={initializePayment}>
        Pay ₦{total.toLocaleString()}
    </button>
  )
}

export default PaystackButton;