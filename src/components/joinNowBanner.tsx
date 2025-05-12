import supercharge from "../assets/supercharge-your-productivity.avif"
import { Button } from "./button"
import logo from "../assets/logo-v3-clickup-dark.svg"
import glowvector from "../assets/glow-vector.png"
import warmvector from "../assets/warm-vector.png"
import noisewide from "../assets/noise-wide.png"
export const JoinNowBanner = () => {
    return (
        <div className="relative mx-50 max-xl:mx-20 my-20 max-sm:mx-5 max-md:mx-10">
        <img
          src={noisewide}
          alt="noise bg"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay rounded-2xl z-0"
        />
      
        <div className="bg-black relative rounded-2xl  flex flex-col md:flex-row justify-between overflow-hidden">
          <div className="px-13 py-16 max-lg:px-5 max-lg:py-10 flex flex-col gap-5 z-10 w-full">
            <div className="w-[180px] max-lg:w-[100px]">
              <img src={logo} alt="logo" className="w-full" />
            </div>
            <h3 className="text-white text-[40px] leading-[48px] font-extrabold">
              Supercharge your productivity
            </h3>
            <p className="text-white text-[18px] leading-[25px] font-medium">
              Organize tasks, collaborate on docs, track goals, and streamline team
              communication—all in one place, enhanced by AI.
            </p>
            <div className="mt-10">
              <Button
                href="#"
                text="Get started. It’s FREE"
                fontSize="18px"
                bgColor="white"
                color="black"
                withArrow={true}
              />
            </div>
          </div>

          <img
              src={glowvector}
              alt="glowvector"
              className="absolute right-0 top-0  h-full object-cover z-0"
            />
      
          <div className="relative w-full flex items-end justify-center rounded-br-2xl overflow-hidden z-10">
            
       
            <img
              src={warmvector}
              alt="warmvector"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
      
  
            <div className="relative z-10 pl-2 pt-2 mt-10 ml-10 border-t border-l border-white rounded-tl-3xl rounded-br-2xl">
              <img
                src={supercharge}
                alt="supercharge"
                className="w-full h-auto rounded-br-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
    );
};