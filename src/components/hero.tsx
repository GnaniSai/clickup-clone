import { Button } from "./button";
import { WorkspaceSetup } from "./workspaceSetup";
import workspace3 from "../assets/workspace3.svg";

export const Hero = () => {
    return (
        <div
            className="relative flex flex-col items-center my-20 justify-center overflow-hidden"
        >

            <div className="absolute inset-0 -z-10 top-40 pointer-events-none select-none">
                <img
                    src={workspace3}
                    alt="background"
                    className="w-full h-full object-cover object-center opacity-60 scale-125"
                />
            </div>

            <h2 className="text-6xl font-extrabold text-[#24223e] text-center">
                The everything app, for work.
            </h2>
            <p className="text-lg text-center text-[#24223e] font-medium w-full sm:w-3/4 md:w-2/3 lg:w-[35%] py-4">
                One app for projects, knowledge, conversations, and more. Get more done faster—together.
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
