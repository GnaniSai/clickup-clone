import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import { Button } from './button';
export const ProductPitch = () => {
  const productPitch = [
    {
      title: 'Work is broken.',
      description: 'App-switching fragments work, steals time, and kills productivity.',
      video: video1,
      bgColor: '#f8f8fc',
      textColor: '#1f1f1f'
    },
    {
      title: "Let's fix it.",
      description: 'With all your projects, knowledge, and conversations in one app, everything just clicks.',
      video: video2,
      bgColor: 'black',
      textColor: 'white',
      button: <Button href='/' text='Get Started' fontSize='16px' bgColor='white' color='black' withArrow={true} />,
      span: <span className='text-xs text-gray-600'>converge over 50+ <br /> different apps</span>
    }
  ]
  return (
    <div className="flex flex-wrap justify-center w-full gap-5 max-md:flex-col max-md:items-center my-30 max-md:my-10 max-md:px-5">
      {productPitch.map((item, index) => (
        <div
          key={index}
          className="w-full md:w-[48%] lg:w-[37%] xl:w-[29%] flex flex-col rounded-2xl"
          style={{ backgroundColor: item.bgColor }}
        >
          <div className="pt-11 px-10 max-sm:p-6 w-full rounded-lg">
            <h2 className="text-4xl mb-2 font-bold max-md:text-3xl" style={{ color: item.textColor }}>
              {item.title}
            </h2>
            <p className="text-md py-2" style={{ color: item.textColor }}>
              {item.description}
            </p>
            <div className="flex items-center gap-3 my-5">
              {item.button}
              {item.span}
            </div>
          </div>
          <div className="rounded-b-2xl w-full overflow-hidden">
            <video
              src={item.video}
              className="w-full h-full object-cover object-center"
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
      ))}
    </div>


  );
};