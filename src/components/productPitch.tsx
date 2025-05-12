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
      button: <Button href='/' text='Get Started' fontSize='16px' bgColor='white' color='black'  withArrow={true}/>,
      span: <span className='text-xs text-gray-600'>converge over 50+
different apps</span>
    }
  ]
  return (
    <div className="flex items-stretch max-lg:items-center max-md:flex-col justify-center gap-5 max-md:my-10 my-30 mx-5">
    {productPitch.map((item,index)=>{
      return(
        <div className="flex flex-col w-[430px] max-md:w-[380px] rounded-2xl" key={index} style={{backgroundColor: item.bgColor}}>
        <div className="pt-11 px-10 w-full rounded-lg">
            <h2 className="text-4xl mb-2 font-bold" style={{color: item.textColor}}>
            {item.title}
            </h2>
            <p className="text-md  py-2" style={{color: item.textColor}}>
            {item.description}
            </p>
            <div className='flex items-center gap-3 my-5'>
              {item.button}
              {item.span}
            </div>
        </div>
        <div className='rounded-b-2xl w-full h-[400px] max-lg:h-[350px] max-md:h-[300px] overflow-hidden'>
            <video src={item.video} className='w-full h-full object-cover object-center' autoPlay muted loop></video>
        </div>
     </div>
      )
    })}
    </div>
  );
};