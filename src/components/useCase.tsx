import { SectionHighlight } from "./sectionHighlight";
import launchCover1 from "../assets/launch-cover.avif";
import launchCover2 from "../assets/launch-cover2.avif";
import launchCover3 from "../assets/launch-cover3.avif";
import { useState } from "react";
import { Button } from "./button";
const UseCaseCard = ({
  title,
  description,
  isOpen,
  onClick,
}: {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`border-l-2 ${
        isOpen ? "border-[#7612fa]" : "border-gray-200"
      } duration-300 ease-in-out cursor-pointer pl-5`}
    >
      <h3
        className={`text-lg ${
          isOpen ? "text-[#7612fa]" : "text-gray-400 hover:text-black"
        } font-bold pt-2`}
        onClick={onClick}
      >
        {title}
      </h3>
      {isOpen && (
        <p className="text-sm mt-1 text-[#090c1d] pb-2 w-65 max-lg:w-full animate-slide-down">
          {description}
        </p>
      )}
    </div>
  );
};

export const UseCase = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  const useCaseCards = [
    {
      title: "Launch any campaign",
      description:
        "From idea to execution, effortlessly plan, organize, and track campaigns that deliver results.",
      image: launchCover1,
    },
    {
      title: "Triage product issues",
      description:
        "Quickly identify, prioritize, and resolve critical issues to keep your team, and users, on track.",
      image: launchCover2,
    },
    {
      title: "Maintain flawless operations",
      description:
        "Streamline key processes to ensure your team operates at peak efficiency.",
      image: launchCover3,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-10 my-20">
      <div className="text-center">
        <SectionHighlight
          subtitle="The all-in-one workspace"
          title="Do your most important work, faster"
          description="From campaigns to operations and more, this is just the tip of the iceberg."
          children={
              <div className="flex justify-center mt-5">
              <Button href='/' text='See all use cases' fontSize='16px' bgColor='black' color='white'  withArrow={true}/>
            </div>
          }
        />
      </div>

      <div className="flex max-lg:flex-col justify-center gap-10 max-xl:mx-25 mx-55">
        <div className="flex flex-col flex-1 gap-4 my-2 ">
          {useCaseCards.map((card, index) => (
            <UseCaseCard
              key={index}
              title={card.title}
              description={card.description}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
        <div className="w-full hover:brightness-95 transition-all duration-500 cursor-pointer">
          <img
            src={useCaseCards[openIndex ?? 0]?.image}
            alt="launch cover"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
