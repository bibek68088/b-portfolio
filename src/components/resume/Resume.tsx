import { educations, experiences } from "../data";

const Resume = () => {
  return (
    <section
      id="resume"
      className="container px-14 py-10 mx-auto flex flex-col justify-center pb-5 "
    >
      <div className="flex flex-col gap-3 pb-12">
        <h2 className="lg:text-2xl text-white bg-blue-500 p-2 2xl:w-[10%] lg:w-[10%] xl:w-[12%] md:w-[15%] w-1/2 rounded-sm">
          Know More
        </h2>
        <h1 className="text-4xl">My Resume</h1>
        <p className="lg:text-2xl lg:w-4/3 w-11/12 font-roboto ">
          I enjoy every step of the design process, from discussion and
          collaboration to concept and execution
        </p>
      </div>
      <div className="flex justify-center items-start gap-24">
        <div className="hidden md:block relative flex flex-col font-bold text-lg">
          <div className="pb-2">
            <a href="#education">Education</a>
          </div>
          <div className="pb-2">
            <a href="#experience">Experience</a>
          </div>
          <div className="pb-2">
            <a href="#">Skills</a>
          </div>
        </div>
        <div className="flex flex-col gap-32">
          <div className="flex flex-col gap-5" id="education">
            <h2 className="font-bold text-3xl text-blue-600">Education</h2>
            {educations.map((education) => (
              <div className="flex gap-5 border-b pb-6 w-full">
                <div className="flex justify-center lg:w-12 md:w-10 h-full bg-blue-500 rounded-full">
                  <img src={education.icon} className=" p-2" alt="" />
                </div>
                <div className="flex flex-col w-full gap-1">
                  <div className="">
                    <p className="text-blue-600 font-bold">
                      {education.duration}
                    </p>
                    <h2 className="text-2xl font-bold">{education.title}</h2>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-justify font-medium">{education.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5" id="experience">
            <h2 className="font-bold text-3xl text-blue-600">Experience</h2>
            {experiences.map((experience) => (
              <div className="flex gap-5 border-b pb-6 w-full">
                <div className="flex justify-center lg:w-12 md:w-10 h-full bg-blue-500 rounded-full">
                  <img src={experience.icon} className=" p-2" alt="" />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <div className="">
                    <p className="text-blue-600 font-bold">
                      {experience.duration}
                    </p>
                    <h2 className="text-2xl font-bold">{experience.title}</h2>
                  </div>
                  <div className="flex flex-wrap gap-5">
                    <p className="text-justified font-medium">
                      {experience.sub}
                    </p>
                    <p className="text-sm text-justify">{experience.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
