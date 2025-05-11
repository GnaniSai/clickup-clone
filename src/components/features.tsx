import { SectionHighlight } from "./sectionHighlight"
import download from "../assets/download.svg"
import feature1 from "../assets/feature-projects.avif"
import feature2 from "../assets/feature-docs.png"
import feature3 from "../assets/feature-whiteboards.png"
import feature4 from "../assets/feature-chat.png"
import icon1 from "../assets/project-icon.svg"
import gradient1 from "../assets/gradientBg1.svg"
import gradient2 from "../assets/gradientBg2.svg"
import gradient3 from "../assets/gradientBg3.svg"
import gradient4 from "../assets/gradientBg4.svg"
import whiteboard from "../assets/whiteboard.svg"
import chat from "../assets/chat.svg"
import docs from "../assets/docs.svg"

const FeatureCardSmall = () => {
    return (
        <div className="flex flex-col shadow-feature bg-white w-full min-h-31 text-[#090c1d] transition-all duration-100 ease-in-out cursor-pointer hover:border-[#7612fa] border border-transparent hover:text-[#7612fa] rounded-2xl items-center justify-center gap-3">
            <img src={download} alt="download" />
            <span className="text-md font-medium">Download</span>
        </div>
    )
}
const FeatureCardLarge = ({ gradientImg, bannerImg, title, icon }: { gradientImg: string, bannerImg: string, title: string, icon: string }) => {
    return (
        <div className="relative col-span-2 row-span-2 flex flex-col shadow-feature bg-white text-[#090c1d] shadow-lg rounded-2xl pb-4  items-center justify-center text-xl font-bold hover:border-[#7612fa] border border-transparent hover:text-[#7612fa] cursor-pointer text-center">
            <img src={bannerImg} alt="download" className="w-full h-50 object-contain" />
            <p className="flex items-center gap-2"><img src={icon} alt="" /> <span className="text-2xl font-extrabold">{title}</span></p>
            <div className="w-full h-full absolute top-0 left-0">
                <img src={gradientImg} alt="download" />
            </div>
        </div>
    );
};

export const Features = () => {
    const largeCards = [
        {
            gradientImg: gradient1,
            bannerImg: feature1,
            title: "Projects",
            icon: icon1
        },
        {
            gradientImg: gradient2,
            bannerImg: feature2,
            title: "Docs",
            icon: docs
        },
        {
            gradientImg: gradient4,
            bannerImg: feature3,
            title: "Whiteboards",
            icon: whiteboard
        },
        {
            gradientImg: gradient3,
            bannerImg: feature4,
            title: "Chat",
            icon: chat
        },


    ]
    let largeCardIndex = 0;
    return (
        <div className="flex flex-col items-center justify-center my-20 bg-[#f8f2ff] relative">
            <div className="text-center mx-80 mt-15">
                <SectionHighlight subtitle="Features" title="Every feature your team needs to complete work faster" description="100+ features to take productivity to the next level." children={<button className="text-white bg-black font-bold px-4 py-2 my-3 text-lg rounded-lg">
                    Discover all features
                </button>} />
            </div>
            <div className="w-full px-10 my-10">
                <div className="grid grid-cols-10 grid-rows-6 gap-4">
                    {Array.from({ length: 48 }).map((_, index) => {
                        if ([13, 14, 27, 28].includes(index)) {
                            const card = largeCards[largeCardIndex++];
                            return <FeatureCardLarge key={`large-${index}`} {...card} />;
                        }

                        return <FeatureCardSmall key={`small-${index}`} />;
                    })}
                </div>

            </div>
        </div>
    )
}