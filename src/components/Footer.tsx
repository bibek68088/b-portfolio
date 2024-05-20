import {
  FacebookOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  SkypeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { SiGooglemaps } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-10 border-b md:flex md:justify-between md:gap-12 xl:gap-44 md:p-4 p-0">
        <div className="flex flex-col items-center md:w-1/3 lg:w-full md:pb-0 pb-10">
          <h2 className="text-2xl mb-4">Bikash Dhungana</h2>
          <p className="lg:text-lg md:text-xs mx-10 md:mx-0">Ready to take your project to the next level? Let's collaborate and bring your vision to life. Contact me today!</p>
        </div>
        <div className="flex flex-col items-center md:w-1/4 lg:w-full pb-10">
          <h2 className="text-xl mb-4">Contact</h2>
          <div className="flex flex-col gap-4 ">
            <div className="flex items-center gap-4">
              <SiGooglemaps />
              <p className="text-sm">Kathmandu, Nepal</p>
            </div>
            <div className="flex items-center gap-4">
              <MailOutlined />
              <a href="mailto:bik-dhu@hotmail.com" className="text-sm">bik-dhu@hotmail.com</a>
            </div>
            <div className="flex items-center gap-4">
              <PhoneOutlined />
              <p className="text-sm">+977 9860920098</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:w-1/6 pb-10">
          <h2 className="text-xl mb-4">Pages</h2>
          <ul className="flex gap-10 text-sm">
            <div className="flex flex-col gap-2">
            <li className="hover:border-b-2 border-blue-500 rounded-sm mx-auto"><a href="#home">Home</a></li>
            <li className="hover:border-b-2 border-blue-500 rounded-sm mx-auto"><a href="#about">About</a></li>
            <li className="hover:border-b-2 border-blue-500 rounded-sm mx-auto"><a href="#skills">Skills</a></li>
            <li className="hover:border-b-2 border-blue-500 rounded-sm mx-auto"><a href="#resume">Resume</a></li>
            </div>
            <div className="flex flex-col gap-2">
            <li className="hover:border-b-2 border-blue-500 rounded-sm mx-auto"><a href="#projects">Projects</a></li>
            <li className="hover:border-b-2 border-blue-500 rounded-sm mx-auto"><a href="#blog">Blog</a></li>
            <li className="hover:border-b-2 border-blue-500 rounded-sm mx-auto"><a href="#contact">Contact</a></li>
            </div>
          </ul>
        </div>
        <div className="flex flex-col md:w-1/4 pb-10 items-center">
          <h2 className="text-xl mb-4">Newsletter</h2>
          <div className="flex items-center gap-4 pt-4">
            <FacebookOutlined className="p-1 rounded-full text-blue-700 bg-gray-200 cursor-pointer" />
            <TwitterOutlined className="p-1 rounded-full text-blue-700 bg-gray-200 cursor-pointer" />
            <SkypeOutlined className="p-1 rounded-full text-blue-700 bg-gray-200 cursor-pointer" />
            <LinkedinOutlined className="p-1 rounded-full text-blue-700 bg-gray-200 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="text-center py-4">
        Copyright &copy; {currentYear} - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
