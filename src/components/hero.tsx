import { Button } from "./button"
export const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-90">
            <h2 className="text-6xl font-extrabold text-[#24223e]">The everything app, for work.</h2>
            <p className="text-lg text-center text-[#24223e] font-medium w-[35%] py-4">One app for projects, knowledge, conversations, and more. Get more done faster—together.</p>
            <div className="py-3">
            <Button href="#" text="Get Started. It's FREE!" fontSize="20px" />
            </div>
            <span className="text-xs text-gray-500 font-medium">Free Forever. No Credit Card.</span>
        </div>
    )
}

