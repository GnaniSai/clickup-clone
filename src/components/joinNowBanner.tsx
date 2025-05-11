import supercharge from "../assets/supercharge-your-productivity.avif"
import { Button } from "./button"
import logo from "../assets/logo-v3-clickup-dark.svg"
import glowvector from "../assets/glow-vector.png"
import warmvector from "../assets/warm-vector.png"
import noisewide from "../assets/noise-wide.png"
export const JoinNowBanner = () => {
    return (
        <div className="mx-50 max-lg:mx-20 my-20 relative" >
            <img
                src={noisewide}
                alt="noise bg"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay rounded-2xl"
            />
            <div className="bg-black rounded-2xl border flex justify-between gap-3 items-end border-[#6060a34d]">
                <div className="px-13 py-16 max-lg:px-5 max-lg:py-10 flex flex-col gap-5">
                    <div className="w-[180px] max-lg:w-[100px]">
                        <img src={logo} alt="logo" className="w-full" />
                    </div>
                    <h3 className="text-white text-[40px] leading-[48px] font-extrabold">Supercharge your productivity</h3>
                    <p className="text-white text-[18px] leading-[25px] font-medium">Organize tasks, collaborate on docs, track goals, and streamline team communication—all in one place, enhanced by AI.</p>
                    <div className="mt-10">
                        <Button href="#" text="Get started. It’s FREE" fontSize="17px" />
                    </div>
                </div>
                <div className="absolute top-0 right-0 h-full rounded-br-2xl rounded-tr-2xl">
                    <img src={glowvector} alt="glowvector" className="w-full h-full rounded-br-2xl rounded-tr-2xl" />
                </div>

                <div className="relative rounded-br-2xl">
                    <div className="absolute top-0 right-0 w-full h-full  rounded-br-2xl ">
                        <img src={warmvector} alt="warmvector" className="w-full h-full rounded-br-2xl" />
                    </div>
                    <div className="pl-2.5 pt-2.5 bg-transparent rounded-tl-4xl border-t-2 border-l-2 border-white rounded-br-2xl">
                        <div className="z-10 opacity-90">
                            <img src={supercharge} alt="supercharge" className="w-full rounded-br-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};