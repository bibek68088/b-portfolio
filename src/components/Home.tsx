import background from '../images/image1.jpg';
import { news } from './data';

const Home = () => {
  return (
    <div id='home'>
      <div className="flex justify-center">
        <div
          className="w-screen h-[750px] bg-center bg-cover"
          style={{ backgroundImage: `url(${background})` }}
        >
          <h1 className="md:text-4xl text-3xl lg:text-5xl font-medium text-center text-white my-64">
              Creative Project Developer
          </h1>
          <div className='flex justify-center gap-4'>
            <button className='cursor-pointer p-1 text-white border border-blue-500 bg-blue-500 rounded-sm '>Hire Me</button>
            <button className='cursor-pointer p-1 text-blue-500 border border-blue-500 rounded-sm '>Download CV</button>
          </div>
        </div>
      </div>
      <div className='md:flex justify-center lg:gap-12 md:gap-4 md:my-24 my-16 mx-10 md:mx-0'>
        {news.map((item) => (
          <div className='flex gap-4 md:pb-0 pb-10'>
              <div className='flex justify-center lg:w-20 w-14 md:w-16 h-full md:h-16 lg:h-full border bg-blue-500 rounded-full'>
                <img className='lg:p-4 md:p-3 p-2' src={item.icon} alt="" />
              </div>
              <div className='w-24'>
                <div className='text-2xl font-bold'>{item.count}</div>
                <div className='text-blue-400 font-medium md:text-sm text-md'>{item.desc}</div>
              </div>
          </div>
        ))}
      
      </div>
    </div>
  )
}

export default Home