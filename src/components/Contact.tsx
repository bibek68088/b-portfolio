import img from '../images/thor.jpg'
const Contact = () => {
  return (
    <section className='p-10' id='contact'>
      <div className='flex flex-col items-center gap-6 p-6'>
        <h2 className='font-bold text-3xl text-justify'>Contact Me</h2>
        <p>Lorem ipsum dolor, sitat? Dicta, hic enim autem eum reiciendis tenetur ducimus ut? Ducimus repellat possimus aut totam, labore quasi debitis!</p>
      </div>
      <div className="flex flex-col-reverse gap-4 lg:flex-row items-center lg:w-10/12 mx-auto pt-12">
      <div className='flex justify-center lg:w-8/12'>
        <img src={img} alt="" className='w-full object-contain '/>
      </div>
      <div className='md:w-11/12 lg:w-10/12 w-full mx-auto'>
        <form action="" className='pb-10'>
          <div className="flex flex-col items-center gap-4">
            <input type="text" placeholder="Your Name" className="border-2 border-gray-200 p-3 rounded-md w-10/12"/>
            <input type="email" placeholder="Your Email" className="border-2 border-gray-200 p-3 rounded-md w-10/12"/>
            <input type="text" placeholder="Subject" className="border-2 border-gray-200 p-3 rounded-md w-10/12"/>
            <textarea name="textarea" placeholder="Message" rows={8} className="border-2 border-gray-200 p-3 rounded-md w-10/12"></textarea>
            <button className='text-white bg-blue-600 p-3 rounded-full md:w-10/12 lg:w-4/12 text-sm uppercase'>Send Message</button>
          </div>
        </form>
      </div>
    </div>
    </section>
  );
};

export default Contact;
