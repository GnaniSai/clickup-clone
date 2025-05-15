import { Button } from './button'
import reviews from '../assets/hero/reviews.svg'
import stars from '../assets/hero/stars.png'
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

export const SmallHeroSection = () => {
  const data = [
    { icon: tasks, title: 'Tasks' },
    { icon: chat, title: 'Chat' },
    { icon: docs, title: 'Docs' },
    { icon: calendar, title: 'Calendar' },
    { icon: ai, title: 'AI' },
    { icon: timeTracking, title: 'Time Tracking' },
    { icon: gantt, title: 'Gantt' },
    { icon: dashboard, title: 'Dashboards' },
    { icon: forms, title: 'Forms' },
    { icon: whiteboard, title: 'Whiteboards' },
    { icon: sprints, title: 'Sprints' },
    { icon: automation, title: 'Automations' }
  ];

  return (
    <>
      <hr className='w-full h-[2px] text-[#b4b4b7e3] hidden max-md:block' />
      <div className="hidden justify-center flex-col items-center max-md:flex px-10 py-7 bg-[#f8f8fc] max-sm:px-5">
        <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full max-sm:grid-cols-3 max-sm:grid-rows-4">
          {data.map((item, index) => (
            <div key={index} className="w-full h-full flex flex-col items-center justify-center p-2 gap-2">
              <div className="w-10.5 h-10.5 flex items-center justify-center">
                <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
              </div>
              <span className="text-xs font-medium text-center">{item.title}</span>
            </div>
          ))}
        </div>

        <p className="text-center w-full text-xs text-[#24223e] font-medium my-4">
          and so much more..
        </p>

        <div className="w-full my-2">
          <Button href="/" text="Get Started" width="full" fontSize="18px" />
        </div>

        <div className="flex items-center gap-2 my-2">
          <img src={stars} alt="stars" className="w-22" />
          <span className="text-xs text-gray-600">25,000+ reviews from</span>
          <img src={reviews} alt="reviews" className="w-22" />
        </div>
      </div>
    </>
  );
};
