import background1 from '../assets/background1.svg';
import workspace1 from '../assets/workspace1.avif';

export const WorkspaceSetup = () => {
  return (
    <div className=" w-full flex items-center justify-center overflow-hidden">
      <div className='blur-xl absolute inset-0 pointer-events-none select-none'>
        <img
          src={background1}
          alt="background"
          className="w-full h-full object-cover object-center "
        />
      </div>
      <div className=" p-8 text-white w-[50%] h-[50%]">
        <img src={workspace1} alt="workspace1" className='w-full h-full object-cover' />
      </div>
    </div>

  );
};
