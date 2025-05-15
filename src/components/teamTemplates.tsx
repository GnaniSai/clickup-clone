import { SectionHighlight } from "./sectionHighlight";
import marketing from "../assets/teamTemplates/marketing.svg";
import pmo from "../assets/teamTemplates/pmo.svg";
import product from "../assets/teamTemplates/product.svg";
import engineering from "../assets/teamTemplates/engineering.svg";
import agencies from "../assets/teamTemplates/agencies.svg";
import seeallteams from "../assets/teamTemplates/seeallteams.svg";
import check from "../assets/teamTemplates/check.svg";
import rating from "../assets/teamTemplates/rating.svg";
import brand1 from "../assets/teamTemplates/brand1.svg";
import brand2 from "../assets/teamTemplates/convene.svg"
import brand3 from "../assets/teamTemplates/lulu.svg"
import brand4 from "../assets/teamTemplates/pressed.svg"
import finstra from "../assets/teamTemplates/finastra-headshot.png"
import convene from "../assets/teamTemplates/convene-headshot.png"
import lulu from "../assets/teamTemplates/lulu-headshot.png"
import pressed from "../assets/teamTemplates/pressed-headshot.png"
import hawkmedia from "../assets/teamTemplates/hawkemedia-headshot.png"
import download from "../assets/teamTemplates/download.svg"
import { Button } from "./button";
import { useState } from "react";

const TeamButtons = ({
    buttonName,
    buttonImage,
    hideBelow,
    isClicked,
    onClick,
    href
}: {
    buttonName: string
    buttonImage: string
    hideBelow?: "sm" | "md" | "lg" | "xl"
    isClicked: boolean
    onClick: () => void
    href?: string
}) => {
    const responsiveClass = `max-${hideBelow}:hidden`;
    const hoverEffect = "transition-all duration-[250ms] ease-[cubic-bezier(0.5,0,0.5,1)] delay-0 transform hover:translate-y-[2px]"
    return href ? (
        <a href={href} className={`bg-white text-[#514b81] font-medium text-[17px] cursor-pointer ${hoverEffect} px-4 py-3 border border-[#6060a34d] flex items-center gap-2 rounded-xl`}>
            <span>
                <img src={buttonImage} alt={buttonName} />
            </span>
            {buttonName}
        </a>
    ) : (
        <button
            className={`${responsiveClass} ${isClicked ? "bg-black text-white" : "bg-white text-[#514b81]"} font-medium text-[17px]  cursor-pointer px-4 py-3 border border-[#6060a34d] ${hoverEffect} flex items-center gap-2 rounded-xl`}
            onClick={onClick}>
            <span>
                <img src={buttonImage} alt={buttonName} />
            </span>
            {buttonName}
        </button>
    )
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

const ReviewCard = ({ title, description, image, brand, review, checkBoxData }: { title: string, description: string, image: string, brand: string, review: string[], checkBoxData: string[] }) => {
    return (
        <div className="pl-15 py-10">
            <div>
                <h3 className="text-[20px] font-bold">
                    {title}
                </h3>
                <p className="mt-2">
                    {description}
                </p>
            </div>
            <div className="mt-4">
                {checkBoxData.map((text) => (
                    <CheckBox key={text} text={text} />
                ))}
            </div>
            <div className="flex gap-4 mt-10">
                <div className="w-[230px] h-full">
                    <img src={image} alt="finstra headshot" className="w-full h-full rounded-full" />
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex gap-5 items-center">
                        <img src={rating} alt="rating" />
                        <img src={brand} alt="brand" />
                    </div>
                    <p>“<span className="font-bold">{review[0]}</span> {review[1]}”</p>
                </div>
            </div>
        </div>
    )
}
export const TeamTemplates = () => {
    const [isClicked, setIsClicked] = useState<number | null>(0);
    const buttonsData = [
        { name: "PMO", image: pmo },
        { name: "Marketing", image: marketing },
        { name: "Product", image: product },
        { name: "Engineering", image: engineering, hideBelow: "md" },
        { name: "Agencies", image: agencies, hideBelow: "lg" },
        { name: "See all teams", image: seeallteams, href: "#" },
    ];

    const reviewData = [
        {
            title: "Deliver projects on time, every time",
            description: "Get teams running more efficiently with a complete project management solution.",
            image: convene,
            brand: brand2,
            review: ["ClickUp brings all of our teams together into one place", "so that they can stay on track, collaborate and communicate."],
            checkBoxData: [
                "Reduce delivery time with custom templates",
                "Track effort to impact with OKR planning",
                "Manage complex projects at scale",
            ]
        },
        {
            title: "The complete marketing solution",
            description: "The all-in-one work hub for modern marketing teams, completely free.",
            image: finstra,
            brand: brand1,
            review: ["ClickUp enables us to optimize resources more effectively", "and align our GTM across the business."],
            checkBoxData: [
                "Build visual plans that keep teams on track",
                "Fast track delivery with templates and calendars",
                "Leverage AI to accelerate content creation",
            ]
        },
        {
            title: "Plan, build, & ship, all in one place",
            description: "The only all-in-one product management toolkit, completely free.",
            image: lulu,
            brand: brand3,
            review: ["With ClickUp, we’ve regained hours of wasted time compared to Jira. ", "Even better, we’ve accelerated our product releases."],
            checkBoxData: [
                "Get flexible agile workflows for fast moving teams",
                "Reduce development time with visual roadmaps",
                "Communicate product updates and priorities",
            ]
        },
        {
            title: "More building, less busy work",
            description: "Your end-to-end product development platform, completely free.",
            image: pressed,
            brand: brand4,
            review: ["ClickUp keeps our engineering department hyper-focused ", "on the right initiatives."],
            checkBoxData: [
                "Get flexible agile workflows for fast moving teams",
                "Track dependencies and resources across squads",
                "Automate and integrate across your tech stack",
            ]
        },
        {
            title: "The complete agency solution",
            description: "Deliver higher quality client work that's more profitable, faster.",
            image: hawkmedia,
            brand: brand1,
            review: ["Our executive team decreased project delay by over 70%", "throughout our first year using ClickUp."],
            checkBoxData: [
                "Visualize projects, progress, and teamwork",
                "Speed up collaboration and feedback cycles",
                "Optimize resources and productivity",
            ]
        }
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

    const review = reviewData[isClicked || 0]

    return (
        <div className="flex flex-col items-center justify-center my-20 max-md:hidden">
            <div className="text-center">
                <SectionHighlight subtitle="Templates for teams" title="Hit the ground running" description="Templates for every team to get started instantly." />
            </div>
            <div className="flex items-center justify-center gap-4 mt-10">
                {buttonsData.map((button, index) => (
                    <TeamButtons
                        key={button.name}
                        buttonName={button.name}
                        buttonImage={button.image}
                        hideBelow={button.hideBelow as "sm" | "md" | "lg" | "xl" | undefined}
                        isClicked={isClicked === index}
                        href={button.href}
                        onClick={() => setIsClicked(index)}
                    />
                ))}
            </div>

            <div className="bg-white rounded-xl border border-[#6060a34d] my-7 md:w-[80%] xl:w-[72%]">
                <div className="flex items-center max-lg:flex-col justify-between">
                    {review && (
                        <ReviewCard title={review.title} description={review.description} image={review.image} brand={review.brand} review={review.review} checkBoxData={review.checkBoxData} />
                    )}
                    <div className="px-10 pt-10 ml-10 max-lg:ml-0">
                        <div className="flex flex-col border border-[#6060a34d] rounded-xl divide-y w-max divide-[#6060a34d] box-border justify-self-end">
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
