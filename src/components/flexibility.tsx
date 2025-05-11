import { useState } from "react";
import { SectionHighlight } from "./sectionHighlight";
import viewWork from "../assets/view-work.png";
import clock from "../assets/clock.svg";
import separator from "../assets/separator.png";
import clickupIntegration1 from "../assets/clickup-integrations.svg";
import clickupIntegration2 from "../assets/clickup-integration-replaces.svg";

const Toggle = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <button
            onClick={() => setIsEnabled(!isEnabled)}
            className={`w-14 h-7 rounded-full p-1 flex items-center cursor-pointer transition-all duration-300 ${isEnabled ? "bg-[#7612fa]" : "bg-[#9e9ebb]"
                }`}>
            <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isEnabled ? "translate-x-7" : "translate-x-0"
                }`} />
        </button>
    );
};

const FlexibilityCards = ({ title, description, children }: { title: string, description: string, children: React.ReactNode }) => {
    return (
        <div className="bg-[#f8f8fc]  rounded-2xl border border-[#6060a34d]">
            <div className="px-8 py-7">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <span className="text-[16px]">
                    {description}
                </span>
            </div>
            <div className="mt-2">
                {children}
            </div>
        </div>
    )
}

export const Flexibility = () => {
    const customizeClickData = [
        {
            icon: clock,
            title: "Time Tracking",
        },
        {
            icon: clock,
            title: "Sprints",
        },
        {
            icon: clock,
            title: "Custom Fields",
        }
    ]

    const flexibilityCardsData = [
        {
            title: "View work your way",
            description: "Instantly switch between 15 views including list, board, gantt, and more.",
            children: <img src={viewWork} alt="viewWork" className="w-full h-full object-cover rounded-2xl" />
        },
        {
            title: "Customize in a click",
            description: "Configuring ClickUp for different types of work is as easy as flipping a switch.",
            children: (
                customizeClickData.map((item) => (
                    <div className="mt-6 px-8 pb-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img src={item.icon} alt="clock" className="w-9 h-9" />
                                <span className="text-md font-medium text-[#5d5d85]">{item.title}</span>
                            </div>
                            <Toggle />
                        </div>
                    </div>
                ))
            )
        }
    ]
    return (
        <div className="flex flex-col items-center justify-center mx-50 max-lg:mx-20 my-20">
            <div className="text-center mt-15">
                <SectionHighlight
                    title="Everything your team is looking for"
                    description="ClickUp’s exceptional flexibility can handle any type of work. And we never stop innovating."
                />
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-7 mx-50 max-lg:mx-0  my-10">
                {flexibilityCardsData.map((item) => (
                    <FlexibilityCards title={item.title} description={item.description} children={item.children} />
                ))}

                <div className="col-span-2 rounded-2xl">
                    <div className="bg-[linear-gradient(351deg,_#5037E7_12.36%,_#EB00FF_124.69%)] px-10 pt-10 pb-5 relative flex gap-20 rounded-2xl">
                        <div className="w-[350px] max-lg:w-[500px] text-white rounded-2xl">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Plays well with others</h3>
                                <span className="text-[16px] my-5">
                                    Easily integrates with the tools you already use.
                                </span>
                            </div>
                            <div className="mt-8">
                                <img src={clickupIntegration1} alt="clickupIntegration1" className="w-full h-full object-cover rounded-2xl" />
                            </div>
                        </div>
                        <div className="absolute top-0 left-49 h-full">
                            <img src={separator} alt="separator" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div className="w-[350px] max-lg:w-[500px] text-white rounded-2xl">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Replaces them entirely</h3>
                                <span className="text-[16px] my-5">
                                    Eliminate app sprawl and reduce software spend.
                                </span>
                            </div>
                            <div className="mt-8">
                                <img src={clickupIntegration2} alt="clickupIntegration1" className="w-full h-full object-cover rounded-2xl" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};