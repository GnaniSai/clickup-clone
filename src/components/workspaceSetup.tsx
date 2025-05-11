import workspace1 from '../assets/workspace1.avif';
import workspace2 from '../assets/workspace2.svg';
import download from '../assets/download.svg';
import check from '../assets/check.svg';
import { Button } from './button';

const WorkSpaceCards = () => {
  return (
    <button className='cursor-pointer rounded-lg border border-[#ceceea] flex flex-col items-center pb-4 justify-center transition-transform duration-100 ease-in-out [transform:translateZ(1px)] transform-origin-center hover:shadow-md'>
      <img src={check} alt="check" className='w-3 m-1 h-3 self-end' />
      <div className='flex flex-col items-center gap-2'>
        <img src={download} alt="download" className='w-5 h-5 object-cover object-top' />
        <span>Tasks</span>
      </div>
    </button>
  )
}
export const WorkspaceSetup = () => {
  return (
    <div className="w-full flex my-10 items-start justify-center">
      <div className="relative w-full flex justify-center">
        <div className=" mx-50 max-lg:mx-20 max-xl:mx-20 text-white w-full h-[500px] overflow-hidden blur-[2px] shadow-[inset_0_0_60px_rgba(107,114,128,0.5)]' p-2 border border-white rounded-xl">
          <img src={workspace1} alt="workspace1" className="w-full h-full object-cover object-top" />
        </div>

        <div className="absolute right-18 -top-7 z-10 w-[430px] border-2 border-white p-2 rounded-2xl max-lg:w-[380px]">
          <div className="relative px-6 py-4 rounded-xl text-center bg-white">
            <div className='absolute right-0 top-0 -z-10 opacity-50 scale-200'>
              <img src={workspace2} alt="workspace2" className='w-full h-full object-cover object-top' />
            </div>
            <h2 className="text-xl font-bold text-[#24223e]">Set up your Workspace</h2>
            <p className="text-xs text-[#24223e] mt-1">
              Start with what you need, customize as you go.
            </p>

            <div className="grid grid-cols-3 gap-2 grid-rows-4 my-4 ">
              {Array.from({ length: 12 }).map((_, index) => (
                <WorkSpaceCards key={index} />
              ))}
            </div>

            <div className="flex justify-center w-full">
              <Button href="#" text="Get Started" fontSize="17px" width="full"/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};


