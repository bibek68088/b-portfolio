import { useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { navItems } from "./data";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="flex justify-around items-center md:sticky top-0 z-10 p-6 border bg-white">
      <div className="">
        <h1 className="text-2xl text-blue-600 font-bold ">Portfolio</h1>
      </div>
      <nav id="nav">
        <ul className="hidden lg:block lg:flex justify-center lg:gap-16 text-lg">
          <li>
            <a
              href="#home"
              className="hover:border-b-4 border-blue-300 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:border-b-4 border-blue-300 ease-in-out"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="hover:border-b-4 border-blue-300 ease-in-out"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:border-b-4 border-blue-300 ease-in-out"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="hover:border-b-4 border-blue-300 ease-in-out"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:border-b-4 border-blue-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="lg:hidden cursor-pointer">
        <div
          className={isNavOpen ? "hidden" : "block"}
          onClick={() => setIsNavOpen(true)}
        >
          <MenuOutlined />
        </div>
        <div
          className={
            isNavOpen ? "block absolute my-12 left-0 w-full rounded" : "hidden"
          }
        >
          {navItems.map((item) => (
            <ul className="flex p-3 bg-gray-400 text-white">
              <li className="border-blue-300 ease-in-out hover:border-b-2" key={item.id}>{item.text}</li>
            </ul>
          ))}
        </div>
        <div
          className={isNavOpen ? "block" : "hidden"}
          onClick={() => setIsNavOpen(false)}
        >
          <CloseOutlined />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
