import { useState } from 'react';
import workspace1 from '../assets/workspace1.avif';
import workspace2 from '../assets/workspace2.png';
import workspace3 from '../assets/workspace3.png';
import workspace4 from '../assets/workspace4.png';
import workspace5 from '../assets/workspace5.png';
import workspace6 from '../assets/workspace6.png';

import bgGradient1 from '../assets/bgGradient1.svg';
import download from '../assets/download.svg';
import tick from '../assets/tick.png';
import { Button } from './button';

const WorkSpaceCards = ({ title, icon, isChecked, onClick }: { title: string, icon: string, isChecked: boolean, onClick: () => void }) => {
  return (
    <button
      className="cursor-pointer rounded-lg border border-[#ceceea] flex flex-col items-center pb-3 justify-center transition-transform duration-200 ease-in-out transform hover:shadow-md active:scale-95"
      onClick={onClick}
    >
      {isChecked ? (
        <img src={tick} alt="tick" className="w-4 m-1 h-4 self-end rounded-lg" />
      ) : (
        <div className="w-4 m-1 h-4 self-end border border-[#ceceea] rounded-sm"></div>
      )}
      <div className="flex flex-col items-center gap-2">
        <img src={icon} alt="icon" className="w-5 h-5" />
        <span className="text-[12px] text-[#5d6485]">{title}</span>
      </div>
    </button>
  );
};

export const WorkspaceSetup = () => {
  const [selectedImage, setSelectedImage] = useState(workspace1);
  const [imageSelected, setImageSelected] = useState(false);
  const [workspaceCards, setWorkspaceCards] = useState([
    { title: "Tasks", icon: download, isChecked: false, image: workspace1 },
    { title: "Chat", icon: download, isChecked: false, image: workspace2 },
    { title: "AI", icon: download, isChecked: false, image: workspace3 },
    { title: "Sprints", icon: download, isChecked: false, image: workspace4 },
    { title: "Time Tracking", icon: download, isChecked: false, image: workspace5 },
    { title: "Calendar", icon: download, isChecked: false, image: workspace6 },
    { title: "Docs", icon: download, isChecked: false, image: workspace1 },
    { title: "Goals", icon: download, isChecked: false, image: workspace2 },
    { title: "Dashboards", icon: download, isChecked: false, image: workspace3 },
    { title: "Whiteboards", icon: download, isChecked: false, image: workspace4 },
    { title: "Forms", icon: download, isChecked: false, image: workspace5 },
    { title: "Automations", icon: download, isChecked: false, image: workspace6 },
  ]);

  const handleCardClick = (index: number) => {
    const updatedCards = [...workspaceCards];
    updatedCards[index].isChecked = !updatedCards[index].isChecked;
    const anyChecked = updatedCards.some(card => card.isChecked);
    setWorkspaceCards(updatedCards);
    setSelectedImage(updatedCards[index].image);
    setImageSelected(anyChecked);
  };


  return (
    <div className="w-full flex my-10 items-start justify-center">
      <div className="relative w-full flex justify-center">

        <div className={`mx-50 max-lg:mx-20 max-xl:mx-20 text-white w-full h-[500px] overflow-hidden ${!imageSelected ? 'blur-[2px]' : ''} p-2 border border-white rounded-xl`}>
          <img src={selectedImage} alt="workspace" className="w-full h-full object-cover object-top" />
        </div>


        <div className="absolute right-20 -top-5 z-10 w-[400px] border-2 border-white p-2 rounded-2xl max-lg:w-[380px]">
        <div className='absolute right-0 top-0 mix-blend-overlay opacity-50 scale-200'>
              <img src={bgGradient1} alt="gradient" className='w-full h-full object-cover object-top' />
            </div>
          <div className="relative px-6 py-4 rounded-xl text-center bg-white">
            <h2 className="text-xl font-bold text-[#24223e] tracking-tight">Set up your Workspace</h2>
            <p className="text-xs text-[#24223e] font-medium mt-1">
              Start with what you need, customize as you go.
            </p>

            <div className="grid grid-cols-3 gap-2 grid-rows-4 my-4">
              {workspaceCards.map((card, index) => (
                <WorkSpaceCards
                  key={index}
                  title={card.title}
                  icon={card.icon}
                  isChecked={card.isChecked}
                  onClick={() => handleCardClick(index)}
                />
              ))}
            </div>

            <div className="flex justify-center w-full">
              <Button href="#" text="Get Started" fontSize="17px" width="full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
