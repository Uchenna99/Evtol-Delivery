import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_white.svg";
import { useRef, useState, type FormEvent } from "react";
import { useInView, motion } from "framer-motion";


const FooterSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount:0.3 });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const payload = {
    name: name,
    email: email,
    message: message
  }

  const handleMessage = async(e: FormEvent)=>{
    e.preventDefault();
    setSubmitting(true);

    payload
  };

  return (
    <div className="w-full flex flex-col items-center bg-primary py-5 px-4">
      <div className="w-full max-w-[1200px] text-white">

        <div className="w-full flex flex-col md:flex-row border-b border-white/30 py-10 gap-14 md:gap-5" ref={ref}>

          <motion.div className="flex-1 flex flex-col"
            initial={{opacity:0, y:60}}
            animate={isInView? {opacity:1, y:0}:{}}
            transition={{duration:0.4, ease:'easeInOut'}}>
            <div className="flex items-center">
              <img src={logo} alt="logo" 
                className="w-14 h-14 -translate-x-1"
              />
              <p className="text-xl font-semibold">Evtol</p>
            </div>

            <p className="w-full max-w-[400px] leading-normal text-gray-300">
              Delivering health, one flight at a time. Revolutionizing medical supply delivery with autonomous drone technology.
            </p>

            <div className="w-full flex mt-7">
              <div className="flex-1 ">
                <p className="font-semibold mb-1">Quick Links</p>

                <div className="flex flex-col ">
                  <Link to={''} className="text-gray-300 hover:text-accent transition-all duration-300 w-fit">Home</Link>
                  <Link to={''} className="text-gray-300 hover:text-accent transition-all duration-300 w-fit">Features</Link>
                  <Link to={''} className="text-gray-300 hover:text-accent transition-all duration-300 w-fit">How it Works</Link>
                  <Link to={''} className="text-gray-300 hover:text-accent transition-all duration-300 w-fit">Testimonials</Link>
                </div>
              </div>

              <div className="flex-1 ">
                <p className="font-semibold mb-1">Legal</p>

                <div className="flex flex-col ">
                  <Link to={''} className="text-gray-300 hover:text-accent transition-all duration-300 w-fit">Terms of Service</Link>
                  <Link to={''} className="text-gray-300 hover:text-accent transition-all duration-300 w-fit">Privacy Policy</Link>
                  <Link to={''} className="text-gray-300 hover:text-accent transition-all duration-300 w-fit">FAQ</Link>
                  <Link to={''} className="text-gray-300 hover:text-accent transition-all duration-300 w-fit">About</Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="flex-1 flex flex-col gap-5"
            initial={{opacity:0, y:60}}
            animate={isInView? {opacity:1, y:0}:{}}
            transition={{duration:0.4, delay:0.3, ease:'easeInOut'}}>
            <h4 className="text-2xl font-bold">
              Get in Touch
            </h4>

            <form onSubmit={handleMessage} className="flex flex-col gap-5">
              <input type="text" 
                className="w-full h-11 border-none outline outline-white/50 rounded-lg bg-white/10 px-5 text-lg"
                placeholder="Your Name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                required
              />
              <input type="text" 
                className="w-full h-11 border-none outline outline-white/50 rounded-lg bg-white/10 px-5 text-lg"
                placeholder="Your Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required
              />
              <div className="">
                <textarea 
                  className="w-full h-34 border-none outline outline-white/50 rounded-lg bg-white/10 px-5 py-4 text-lg resize-none" 
                  placeholder="Your Message"
                  value={message}
                  onChange={(e)=> setMessage(e.target.value)}
                  required
                />
                <p className="text-gray-200">
                  {message.length}/500
                </p>
              </div>
              <button className="border-none w-full h-11 bg-white/10 rounded-lg cursor-pointer text-lg font-semibold
                hover:bg-primary active:bg-primary outline outline-white/50 disabled:cursor-not-allowed transition-all duration-300"
                type="submit"
                disabled={submitting}>
                { submitting? 'Sending...' : 'Send Message' }
              </button>
            </form>
          </motion.div>

        </div>


        {/* Bottom */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center py-5">
          <p className="">
            © 2024 Evtol. All rights reserved.
          </p>
          <p>
            Powered by Urch-Tech.
          </p>
        </div>

      </div>
    </div>
  )
}

export default FooterSection;