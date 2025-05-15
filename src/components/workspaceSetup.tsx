import { useState } from "react";
import workspace1 from "../assets/hero/workspace1.avif";
import workspace2 from "../assets/hero/workspace2.png";
import workspace3 from "../assets/hero/workspace3.png";
import workspace4 from "../assets/hero/workspace4.png";
import workspace5 from "../assets/hero/workspace5.png";
import workspace6 from "../assets/hero/workspace6.png";
import bgGradient1 from "../assets/hero/bgGradient1.svg";
import chat from "../assets/hero/chat.svg"
import docs from "../assets/hero/docs.svg"
import whiteboard from "../assets/hero/whiteboard.svg"
import sprints from "../assets/hero/project-icon.svg"
import tasks from "../assets/hero/tasks.svg"
import dashboard from "../assets/hero/dashboards.svg"
import forms from "../assets/hero/forms.svg"
import gantt from "../assets/hero/gantt.svg"
import timeTracking from "../assets/hero/time-tracking.svg"
import ai from "../assets/hero/ai.svg"
import automation from "../assets/hero/automations.svg"
import calendar from "../assets/hero/calendar.svg"
import tick from "../assets/hero/tick.png";
import { Button } from "./button";

const WorkSpaceCards = ({
  title,
  icon,
  isChecked,
  onClick,
}: {
  title: string;
  icon: string;
  isChecked: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className="cursor-pointer rounded-lg border border-[#ceceea] flex flex-col items-center pb-3 justify-center transition-transform duration-200 ease-in-out transform hover:shadow-md active:scale-95"
      onClick={onClick}
    >
      {isChecked ? (
        <img
          src={tick}
          alt="tick"
          className="w-4 m-1 h-4 self-end rounded-lg"
        />
      ) : (
        <div className="w-4 m-1 h-4 self-end border border-[#ceceea] rounded-sm"></div>
      )}
      <div className="flex flex-col items-center gap-2">
        <img src={icon} alt="icon" className="w-6 h-6" />
        <span className="text-[12px] text-[#5d6485]">{title}</span>
      </div>
    </button>
  );
};

export const WorkspaceSetup = () => {
  const [imageSelected, setImageSelected] = useState(workspace1);
  const [isBlurred, setIsBlurred] = useState(false);
  const [workspaceCard, setWorkspaceCard] = useState([
    { title: "Tasks", icon: tasks, image: workspace1, isChecked: false },
    { title: "Chat", icon: chat, image: workspace2, isChecked: false },
    { title: "AI", icon: ai, image: workspace3, isChecked: false },
    { title: "Sprints", icon: sprints, image: workspace4, isChecked: false },
    {
      title: "Time Tracking",
      icon: timeTracking,
      image: workspace5,
      isChecked: false,
    },
    { title: "Calendar", icon: calendar, image: workspace6, isChecked: false },
    { title: "Docs", icon: docs, image: workspace1, isChecked: false },
    { title: "Goals", icon: gantt, image: workspace2, isChecked: false },
    {
      title: "Dashboards",
      icon: dashboard,
      image: workspace3,
      isChecked: false,
    },
    {
      title: "Whiteboards",
      icon: whiteboard,
      image: workspace4,
      isChecked: false,
    },
    { title: "Forms", icon: forms, image: workspace5, isChecked: false },
    {
      title: "Automations",
      icon: automation,
      image: workspace6,
      isChecked: false,
    },
  ]);

  const hanldeClick = (index: number) => {
    const updateIsChecked = [...workspaceCard];
    updateIsChecked[index].isChecked = !updateIsChecked[index].isChecked;
    const checkTrue = updateIsChecked.some((card) => card.isChecked);
    setWorkspaceCard(updateIsChecked);
    setImageSelected(updateIsChecked[index].image);
    setIsBlurred(checkTrue);
  };

  return (
    <div className="w-full flex my-10 items-start justify-center max-md:hidden">
      <div className="relative w-[80%] max-xl:w-[90%] flex justify-center mb-10 max-xl:ml-0 ml-30">
        <div
          className={`text-white w-full h-[500px] overflow-hidden ${isBlurred ? "" : "blur-[2px]"
            } p-2 border border-white rounded-xl`}
        >
          <img
            src={imageSelected}
            alt="workspace"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="absolute right-0 -top-6 z-10 w-[400px] border-2 border-white p-2 rounded-2xl">
          <div className="absolute right-0 top-0 mix-blend-overlay opacity-70 scale-200">
            <img
              src={bgGradient1}
              alt="gradient"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="relative p-6 rounded-xl text-center bg-white">
            <h2 className="text-xl font-bold text-[#24223e] tracking-tight">
              Set up your Workspace
            </h2>
            <p className="text-xs text-[#24223e] font-medium mt-1">
              Start with what you need, customize as you go.
            </p>

            <div className="grid grid-cols-3 gap-2 grid-rows-4 my-4">
              {workspaceCard.map((card, index) => (
                <WorkSpaceCards
                  key={index}
                  title={card.title}
                  icon={card.icon}
                  isChecked={card.isChecked}
                  onClick={() => hanldeClick(index)}
                />
              ))}
            </div>

            <div className="flex justify-center w-full">
              <Button
                href="#"
                text="Get Started"
                fontSize="18px"
                width="full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
