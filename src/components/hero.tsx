import { Button } from "./button";
import { WorkspaceSetup } from "./workspaceSetup";
import bgGradient2 from "../assets/hero/bgGradient2.svg";

export const Hero = () => {

    return (
        <div className="relative flex flex-col items-center max-sm:mx-3 my-20 max-md:my-10 max-sm:my-7 justify-center vignette-bg-2 overflow-hidden">

            <div className="absolute inset-0 -z-10 pointer-events-none max-md:hidden select-none">
                <img
                    src={bgGradient2}
                    alt="background"
                    className="w-full h-full object-cover object-center opacity-70 scale-115"
                />
            </div>

            <h2 className="text-6xl font-extrabold text-[#24223e] max-md:text-[33px] max-md:leading-[40px] text-center">
                The everything app, for work.
            </h2>
            <p className="text-lg max-md:hidden text-center text-[#24223e] font-medium py-4">
                One app for projects, knowledge, conversations, and more. <br /> Get more done faster—together.
            </p>
            <p className="hidden max-md:block text-center text-[#24223e] font-medium w-full py-4">
                One app to align, collaborate, and work. Designed to boost productivity and save teams a day every week.
            </p>

           <div className="py-3 flex flex-col gap-2 items-center justify-center">
                <div className="max-md:hidden">
                    <Button href="#" text="Get started. It's FREE!" fontSize="18px" />
                </div>
                <div className="max-md:flex hidden">
                    <Button href="#" text="Get started. It's FREE!" fontSize="17px" withArrow />
                </div>
                <span className="text-xs text-gray-500 font-medium">
                    Free Forever. No Credit Card.
                </span>
            </div>

            <WorkspaceSetup />
        </div>
    );
};
