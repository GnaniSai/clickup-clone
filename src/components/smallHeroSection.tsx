import download from '../assets/download.svg'
import { Button } from './button'
import reviews from '../assets/reviews.svg'
import stars from '../assets/stars.png'
export const SmallHeroSection = () =>{
    const data = [
        {
            icon: download,
            title: 'Tasks'
        },
        {
            icon: download,
            title: 'Tasks'
        },
        {
            icon: download,
            title: 'Tasks'
        },
        {
            icon: download,
            title: 'Tasks'
        },
        {
            icon: download,
            title: 'Tasks'
        },
        {
            icon: download,
            title: 'Tasks'
        },
        {
            icon: download,
            title: 'Tasks'
        },
        {
            icon: download,
            title: 'Tasks'
        },
        {
            icon: download,
            title: 'Tasks'
        },
        {
            icon: download,
            title: 'Tasks'
        },
        {
            icon: download,
            title: 'Tasks'
        },
        {
            icon: download,
            title: 'Tasks'
        }
    ]
    return(
        <div className="hidden justify-center flex-col items-center max-md:flex mx-10 max-sm:mx-5">
          <div className='grid-cols-4 grid-rows-3 w-full max-md:grid max-sm:grid-cols-3 max-sm:grid-rows-4'>
          {data.map((item, index) => (
            <div key={index} className="p-5 flex flex-col items-center justify-center gap-2">
                <img src={item.icon} alt="icon" />
                <span>{item.title}</span>
            </div>
           ))}
           </div>
           <p className='text-center w-full text-sm text-[#24223e] font-medium my-2'>and so much more..</p>
           <div className='w-full my-2'>
           <Button href='/' text='Get Started' width='full' fontSize='18px' />
           </div>
           <div className='flex items-center gap-2 my-2'>
            <img src={stars} alt="stars" className='h-5'/>
            <span className='text-xs text-gray-600'>25, 000+ reviews from</span>
            <img src={reviews} alt="reviews" className='h-3'/>
           </div>
        </div>
    )
}