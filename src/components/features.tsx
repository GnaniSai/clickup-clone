import { SectionHighlight } from "./sectionHighlight"
import { Button } from "./button"
import feature1 from "../assets/features/feature-projects.avif"
import feature2 from "../assets/features/feature-docs.png"
import feature3 from "../assets/features/feature-whiteboards.png"
import feature4 from "../assets/features/feature-chat.png"
import icon1 from "../assets/hero/project-icon.svg"
import gradient1 from "../assets/features/gradientBg1.svg"
import gradient2 from "../assets/features/gradientBg2.svg"
import gradient3 from "../assets/features/gradientBg3.svg"
import gradient4 from "../assets/features/gradientBg4.svg"
import whiteboard from "../assets/hero/whiteboard.svg"
import chat from "../assets/hero/chat.svg"
import docs from "../assets/hero/docs.svg"
import search from "../assets/features/search.svg"
import bag from "../assets/features/bag.svg"
import calendar from "../assets/flexibility/calendar.png"
import tick from "../assets/features/tick.svg"
import bell from "../assets/features/bell.svg"
import dependencies from "../assets/features/dependencies.svg"
import mindMap from "../assets/features/mindmap.svg"
import notes from "../assets/features/notes.svg"
import flag from "../assets/features/flag.svg"
import folder from "../assets/features/folder.svg"
import pie from "../assets/features/pie.svg"
import status from "../assets/features/status.svg"
import link from "../assets/features/link.svg"



const FeatureCardSmall = ({ img, title }: { img: string, title: string }) => {
  return (
    <div className="flex flex-col shadow-feature bg-white w-full aspect-square p-2 text-[#090c1d] transition-all duration-100 ease-in-out cursor-pointer hover:border-[#7612fa] border border-transparent hover:text-[#7612fa] rounded-2xl items-center justify-center gap-2">
      <img src={img} alt="download" className="w-6 h-6 max-md:w-5 max-md:h-5 object-contain" />
      <span className="text-md max-lg:text-[12px] font-medium max-md:text-[10px] text-wrap text-center ">{title}</span>
    </div>
  );
};

const FeatureCardLarge = ({ gradientImg, bannerImg, title, icon }: { gradientImg: string, bannerImg: string, title: string, icon: string }) => {
  return (
    <div className="relative col-span-2 row-span-2 w-full aspect-square flex flex-col shadow-feature bg-white text-[#090c1d] shadow-lg rounded-2xl border border-transparent hover:border-[#7612fa] hover:text-[#7612fa] cursor-pointer text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={gradientImg} alt="gradient" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full p-4 gap-4">
        <img src={bannerImg} alt="feature" className="w-full h-34 object-contain max-md:h-20" />
        <p className="flex items-center gap-2 text-xl font-extrabold max-md:text-lg">
          <img src={icon} alt="icon" className="w-6 h-6 max-md:w-5 max-md:h-5" />
          <span className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-[13px]">{title}</span>
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

const gridData = [
    {
      title: "Dependencies",
      icon: dependencies
    },
    {
      title: "Connected Search",
      icon: search
    },
    {
      title: "Tasks",
      icon: tick
    },
    {
      title: "Mind Maps",
      icon: mindMap
    },
    {
      title: "Wikis",
      icon: link
    },
    {
      title: "AI Notetaker",
      icon: notes
    },
    {
      title: "Calendar",
      icon: calendar
    },
    {
      title: "Proofing",
      icon: flag
    },
    {
      title: "Portfolio",
      icon: folder
    },
    {
      title: "Templates",
      icon: bag
    },
    {
      title: "Remainders",
      icon: bell
    },
    {
      title: "Reporting",
      icon: pie
    },
    {
      title: "Custom Status",
      icon: status
    },
    {
      title: "AI Writer",
      icon: notes
    },
    {
      title: "Dependencies",
      icon: dependencies
    },
    {
      title: "Connected Search",
      icon: search
    },
    {
      title: "Tasks",
      icon: tick
    },
    {
      title: "Mind Maps",
      icon: mindMap
    },
    {
      title: "Wikis",
      icon: link
    },
    {
      title: "AI Notetaker",
      icon: notes
    },
    {
      title: "Calendar",
      icon: calendar
    },
    {
      title: "Proofing",
      icon: flag
    },
    {
      title: "Portfolio",
      icon: folder
    },
    {
      title: "Templates",
      icon: bag
    },
    {
      title: "Remainders",
      icon: bell
    },
    {
      title: "Reporting",
      icon: pie
    },
    {
      title: "Custom Status",
      icon: status
    },
    {
      title: "AI Writer",
      icon: notes
    },
    {
      title: "Dependencies",
      icon: dependencies
    },
    {
      title: "Connected Search",
      icon: search
    },
    {
      title: "Tasks",
      icon: tick
    },
    {
      title: "Mind Maps",
      icon: mindMap
    },
    {
      title: "Wikis",
      icon: link
    },
    {
      title: "AI Notetaker",
      icon: notes
    },
    {
      title: "Calendar",
      icon: calendar
    },
    {
      title: "Proofing",
      icon: flag
    },
    {
      title: "Portfolio",
      icon: folder
    },
    {
      title: "Templates",
      icon: bag
    },
    {
      title: "Remainders",
      icon: bell
    },
    {
      title: "Reporting",
      icon: pie
    },
    {
      title: "Custom Status",
      icon: status
    },
    {
      title: "AI Writer",
      icon: notes
    },
    {
      title: "Dependencies",
      icon: dependencies
    },
    {
      title: "AI Writer",
      icon: notes
    },
    {
      title: "Dependencies",
      icon: dependencies
    },
    {
      title: "Mind Maps",
      icon: mindMap
    },
    {
      title: "Wikis",
      icon: link
    },
    {
      title: "AI Notetaker",
      icon: notes
    },
    {
      title: "Calendar",
      icon: calendar
    },
    {
      title: "Proofing",
      icon: flag
    },
    {
      title: "Portfolio",
      icon: folder
    },
    {
      title: "Templates",
      icon: bag
    },
    {
      title: "Dependencies",
      icon: dependencies
    },
    {
      title: "Connected Search",
      icon: search
    },
    {
      title: "Tasks",
      icon: tick
    },
    {
      title: "Mind Maps",
      icon: mindMap
    },
    {
      title: "Wikis",
      icon: link
    },
    {
      title: "AI Notetaker",
      icon: notes
    },
    {
      title: "Calendar",
      icon: calendar
    },
    {
      title: "Portfolio",
      icon: folder
    },
    {
      title: "Templates",
      icon: bag
    },
    {
      title: "Remainders",
      icon: bell
    },
    {
      title: "Reporting",
      icon: pie
    },
    {
      title: "Custom Status",
      icon: status
    },
    {
      title: "AI Writer",
      icon: notes
    },
    {
      title: "Dependencies",
      icon: dependencies
    },
    {
      title: "AI Writer",
      icon: notes
    },
    {
      title: "Wikis",
      icon: link
    },
  ]
  let largeCardIndex = 0;
  return (
    <div className="flex flex-col items-center justify-center my-20 bg-[rgb(248,242,255)] relative overflow-hidden">
      <div className="text-center mx-80 max-xl:mx-20 max-sm:mx-5 mt-15">
        <SectionHighlight subtitle="Features" title="Every feature your team needs to complete work faster" description="100+ features to take productivity to the next level." children={<div className="flex justify-center mt-5">
          <Button href='/' text='Discover all features' fontSize='18px' bgColor='black' color='white' />
        </div>} />
      </div>
      <div className="relative px-5 mb-10 h-[63vw] max-lg:h-[70vw] max-md:h-[90vw] max-lg:w-[1300px] max-md:w-[1000px] w-full max-sm:h-[120vw] max-sm:w-[900px] flex justify-center  whitespace-nowrap items-center overflow-hidden mt-4">
        <div className="absolute inset-0 z-10 pointer-events-none vignette-bg" />

        <div className="grid grid-cols-10 grid-rows-8 gap-4 max-md:gap-2 w-full" style={{ boxShadow: "inset 0 0 150px 50px rgb(248,242,255)" }}>
          {gridData.map((item, index) => {
            if ([23, 24, 37, 38].includes(index)) {
              const card = largeCards[largeCardIndex++];
              return <FeatureCardLarge key={`large-${index}`} {...card} />;
            }
            return <FeatureCardSmall key={`small-${index}`} img={item.icon} title={item.title} />;
          })}
        </div>

      </div>
    </div>
  )
}