import { Button } from "./button";
import { WorkspaceSetup } from "./workspaceSetup";
import bgGradient2 from "../assets/bgGradient2.svg";
export const Hero = () => {
    return (
        <div
            className="relative flex flex-col items-center  my-20 max-md:my-10 justify-center overflow-hidden"
        >

            <div className="absolute inset-9 z-10 top-40 mix-blend-overlay pointer-events-none max-md:hidden select-none">
                <img
                    src={bgGradient2} 
                    alt="background"
                    className="w-full h-full object-cover object-center opacity-50 scale-125"
                />
            </div>

            <h2 className="text-6xl font-extrabold text-[#24223e] max-md:text-3xl text-center">
                The everything app, for work.
            </h2>
            <p className="text-lg max-md:hidden text-center text-[#24223e] font-medium w-full py-4">
                One app for projects, knowledge, conversations, and more. Get more done faster—together.
            </p>
            <p className="hidden max-md:block text-center text-[#24223e] font-medium w-full py-4">
            One app to align, collaborate, and work. Designed to boost productivity and save teams a day every week.
            </p>

            <div className="py-3 flex flex-col gap-2 items-center justify-center">
                <Button href="#" text="Get started. It's FREE!" fontSize="18px"/>
                <span className="text-xs text-gray-500 font-medium">
                    Free Forever. No Credit Card.
                </span>
            </div>

            <WorkspaceSetup />
        </div>
    );
};
