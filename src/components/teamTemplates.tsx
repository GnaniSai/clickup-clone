import { SectionHighlight } from "./sectionHighlight";
import marketing from "../assets/marketing.svg";
import check from "../assets/check.svg";
import rating from "../assets/rating.svg";
import brand1 from "../assets/brand1.svg";
import finstra from "../assets/finastra-headshot.png"
import download from "../assets/download.svg"
import { Button } from "./button";
import { useState } from "react";
const TeamButtons = ({
    buttonName,
    buttonImage,
    hideBelow,
}: {
    buttonName: string
    buttonImage: string
    hideBelow?: "sm" | "md" | "lg" | "xl"
}) => {
    const responsiveClass = `max-${hideBelow}:hidden`;
    const [isClicked, setIsClicked] = useState(false);
    return (
        <button
            className={`${responsiveClass} ${isClicked ? "bg-black text-white" : "bg-white text-[#514b81]"} font-medium text-[17px] transition-all duration-[250ms] ease-[cubic-bezier(0.5,0,0.5,1)] delay-0 transform hover:translate-y-[2px] cursor-pointer px-4 py-3 border border-[#6060a34d] flex items-center gap-2 rounded-xl`}
            onClick={() => setIsClicked(!isClicked)}
        >
            <span>
                <img src={buttonImage} alt={buttonName} />
            </span>
            {buttonName}
        </button>
    );
};

const CheckBox = ({ text }: { text: string }) => {
    return (
        <div className="flex items-center gap-2 py-1">
            <img src={check} alt="check" />
            <p>{text}</p>
        </div>
    )
}

const WorkflowItem = ({ icon, text }: { icon: string, text: string }) => {
    return (
        <div className="flex items-center gap-5 py-5 px-7">
            <img src={icon} alt="workflow icon" className="w-6 h-6" />
            <p className="font-medium">{text}</p>
        </div>
    );
};


export const TeamTemplates = () => {
    const buttonsData = [
        { name: "PMO", image: marketing },
        { name: "Marketing", image: marketing },
        { name: "Product", image: marketing },
        { name: "Engineering", image: marketing, hideBelow: "md" },
        { name: "Agencies", image: marketing, hideBelow: "lg" },
        { name: "See all teams", image: marketing, hideBelow: "lg" },
    ];


    const checkBoxData = [
        "Build visual plans that keep teams on track",
        "Fast track delivery with templates and calendars",
        "Leverage AI to accelerate content creation",
    ]

    const workflowItemsData = [
        {
            text: "Flexible workflows for every team",
            icon: download,
        },
        {
            text: "Visual roadmaps and calendars",
            icon: download,
        },
        {
            text: "AI-powered writing support",
            icon: download,
        },
        {
            text: "Tasks, docs, spreadsheets, and more",
            icon: download,
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center my-20 max-md:hidden">
            <div className="text-center">
                <SectionHighlight subtitle="Templates for teams" title="Hit the ground running" description="Templates for every team to get started instantly." />
            </div>
            <div className="flex items-center justify-center gap-4 mt-10">
                {buttonsData.map((button) => (
                    <TeamButtons
                        key={button.name}
                        buttonName={button.name}
                        buttonImage={button.image}
                        hideBelow={button.hideBelow as "sm" | "md" | "lg" | "xl" | undefined}
                    />
                ))}
            </div>

            <div className="bg-white rounded-xl border border-[#6060a34d] my-7 md:w-[80%] xl:w-[72%]">
                <div className="flex items-center max-lg:flex-col justify-between">
                    <div className="pl-15 py-10">
                        <div>
                            <h3 className="text-[20px] font-bold">
                                The complete marketing solution
                            </h3>
                            <p className="mt-2">The all-in-one work hub for modern marketing teams, completely free.</p>
                        </div>
                        <div className="mt-4">
                            {checkBoxData.map((text) => (
                                <CheckBox key={text} text={text} />
                            ))}
                        </div>
                        <div className="flex gap-4 mt-10">
                            <div className="w-[180px] max-lg:w-[100px]">
                                <img src={finstra} alt="finstra headshot" className="w-full rounded-full" />
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex gap-5">
                                    <img src={rating} alt="rating" />
                                    <img src={brand1} alt="brand" />
                                </div>
                                <p>“<span className="font-bold">ClickUp enables us to optimize resources more effectively</span> and align our GTM across the business.”</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-10 pt-10 ml-10 max-lg:ml-0">
                        <div className="flex flex-col  border border-[#6060a34d] rounded-xl divide-y w-max divide-[#6060a34d] box-border justify-self-end">
                            {workflowItemsData.map((item) => (
                                <WorkflowItem key={item.text} icon={item.icon} text={item.text} />
                            ))}
                        </div>
                        <div className="max-lg:mt-0 py-10">
                            <Button href="#" text="Use this solution" fontSize="17px" withArrow={true} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
