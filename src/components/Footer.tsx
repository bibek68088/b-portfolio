import {
  FacebookOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  SkypeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { FaArrowRight } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-10 border-b md:flex md:justify-between md:gap-12 xl:gap-52 md:p-4 p-0">
        <div className="md:w-1/3 md:pb-0 pb-10">
          <h2 className="text-2xl mb-4">Bikash Dhungana</h2>
          <p className="text-md">Ready to take your project to the next level? Let's collaborate and bring your vision to life. Contact me today!</p>
        </div>
        <div className="md:w-1/4 pb-10">
          <h2 className="text-xl mb-4">Contact</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <SiGooglemaps />
              <p>Kathmandu, Nepal</p>
            </div>
            <div className="flex items-center gap-4">
              <MailOutlined />
              <a href="mailto:bik-dhu@hotmail.com">bik-dhu@hotmail.com</a>
            </div>
            <div className="flex items-center gap-4">
              <PhoneOutlined />
              <p>+977 9860920098</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/6 pb-10">
          <h2 className="text-xl mb-4">Pages</h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="md:w-1/4 pb-10">
          <h2 className="text-xl mb-4">Newsletter</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 border-b border-blue-gray-200">
              <MailOutlined />
              <input type="text" placeholder="Enter your email" className="w-full text-sm bg-transparent border-none pb-1.5 text-blue-gray-700 placeholder-blue-gray-500 focus:outline-none focus:border-gray-900" required />
            </div>
            <textarea placeholder="Enter your message here..." className="w-full text-sm min-h-20 bg-transparent border-b border-blue-gray-200 pb-1.5 text-blue-gray-700 placeholder-blue-gray-500 focus:outline-none focus:border-gray-900" required></textarea>
            <FaArrowRight className="text-xl cursor-pointer" />
          </div>
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
