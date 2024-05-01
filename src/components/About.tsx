import personImg from "../images/msdhoni_2.jpg";
import { hobbies } from "./data";

const About = () => {
  return (
    <div id="about" className="flex justify-center gap-6">
      <div
        className="hidden md:block w-1/3 h-[750px] bg-center bg-cover"
        style={{ backgroundImage: `url(${personImg})` }}
      ></div>
      <div className="container flex flex-col md:w-2/5 w-10/12 gap-8">
        <div className="flex flex-col gap-4 pt-20">
          <h2 className="font-medium text-gray-500">MY INTRO</h2>
          <h1 className="text-3xl font-bold">About Me</h1>
        </div>
        <p className="text-gray-500 text-justify">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
        <div className="flex gap-8">
          <div className="flex flex-col gap-3 font-medium md:text-lg text-sm">
            <label htmlFor="name">Name:</label>
            <label htmlFor="date-of-birth">Date of birth:</label>
            <label htmlFor="address">Address:</label>
            <label htmlFor="zip-code">Zip Code:</label>
            <label htmlFor="email">Email:</label>
            <label htmlFor="phone">Phone:</label>
          </div>
          <div className="flex flex-col gap-3 text-blue-500 font-medium md:text-lg text-sm">
            <p>Bikash Dhungana</p>
            <p>July 07, 1981</p>
            <p>Kathmandu, Nepal</p>
            <p>1000</p>
            <p>bik-dhu@hotmail.com</p>
            <p>+977 9860920098</p>
          </div>
        </div>
        <div className="flex gap-2">
          {hobbies.map((hobby) => (
            <div className="flex flex-wrap gap-2 ">
              <div className="border rounded-full bg-blue-400">
                <img src={hobby.icon} className="w-6" alt="icons" />
              </div>
              <div className="font-medium">
                {hobby.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
