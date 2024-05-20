import bgPerson from "../images/dhoni.png";

const Stall = () => {
  return (
    <div className="flex justify-center w-full min-h-[350px] bg-blue-400">
      <div className="md:flex lg:gap-20 ">
        <div className="container flex flex-col text-white gap-6 mx-auto my-10 xl:w-2/5 lg:w-1/3 md:w-1/2 w-9/12">
          <h1 className="text-3xl font-medium text-justify">
            Have a project on your mind
          </h1>
          <p className="text-justify md:text-sm">
            "Are you pondering a project that needs a guiding hand? Share your
            concept with me! Whether it's a complex construction endeavor, a
            software development initiative, or a creative marketing campaign,
            our project management team is here to turn your ideas into
            actionable plans. Let me know what you're envisioning, and
            together, we'll navigate the path to success."
          </p>
          <a href="#contact"><button className="bg-white text-blue-300 md:w-5/12 lg:w-2/5 xl:w-1/4 w-1/2 p-2 rounded-md">Contact Me</button></a>
        </div>
        <div className="flex justify-center md:items-end md:w-5/12 2xl:w-3/12">
          <img src={bgPerson} className="md:p-1 h-full object-cover" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Stall;
