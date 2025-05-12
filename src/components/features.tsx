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
import { Button } from "./button"

const FeatureCardSmall = () => {
    return (
        <div className="flex flex-col shadow-feature bg-white p-5 w-34 h-33 max-lg:w-26 max-lg:h-26 max-md:w-21 max-md:h-21 text-[#090c1d] transition-all duration-100 ease-in-out cursor-pointer hover:border-[#7612fa] border border-transparent hover:text-[#7612fa] rounded-2xl items-center justify-center gap-3">
            <img src={download} alt="download" className="w-7 h-7 max-lg:w-5 max-lg:h-5 max-md:w-4 max-md:h-4 object-contain" />
            <span className="text-md font-medium max-lg:text-sm max-md:text-xs">Download</span>
        </div>
    )
}
const FeatureCardLarge = ({ gradientImg, bannerImg, title, icon }: { gradientImg: string, bannerImg: string, title: string, icon: string }) => {
    return (
        <div className="relative col-span-2 row-span-2 w-70 h-70 max-lg:w-58 max-lg:h-58 max-md:w-45 max-md:h-45 flex flex-col shadow-feature bg-white text-[#090c1d] shadow-lg rounded-2xl border border-transparent hover:border-[#7612fa] hover:text-[#7612fa] cursor-pointer text-center overflow-hidden">
            <div className="absolute inset-0 z-0">
          <img src={gradientImg} alt="gradient" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full p-5 gap-4">
          <img src={bannerImg} alt="feature" className="w-full h-32 object-contain" />
          <p className="flex items-center gap-2 text-2xl font-extrabold max-md:text-xl">
            <img src={icon} alt="icon" className="w-6 h-6" />
            <span>{title}</span>
          </p>
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
        <div className="flex flex-col items-center justify-center my-20 bg-[rgb(248,242,255)] relative overflow-hidden">
            <div className="text-center mx-80 max-xl:mx-20 mt-15">
                <SectionHighlight subtitle="Features" title="Every feature your team needs to complete work faster" description="100+ features to take productivity to the next level." children={<div className="flex justify-center mt-5">
                    <Button href='/' text='Discover all features' fontSize='18px' bgColor='black' color='white' />
                </div>} />
            </div>
            <div className="relative px-5 mb-10 h-[63vw] max-lg:h-[70vw] max-md:h-[100vw] max-lg:w-[1300px] max-md:w-[1000px] w-[1500px]  flex justify-center whitespace-nowrap items-center overflow-hidden mt-4">
                <div className="absolute inset-0 z-10 pointer-events-none vignette-bg"/>

                <div className="grid grid-cols-10 grid-rows-6 gap-4 " style={{ boxShadow: "inset 0 0 150px 50px rgb(248,242,255)" }}>
                    {Array.from({ length: 68 }).map((_, index) => {
                        if ([23, 24, 37, 38].includes(index)) {
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