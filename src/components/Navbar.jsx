import logo from "../assets/shafinhossainLogo.png";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaGoogleDrive,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 max-w-32 bg-transparent rounded-3xl"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/Shafin047"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-purple-600 transition duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.linkedin.com/in/shafinhossain/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-purple-600 transition duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/shafin.hossain47"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-purple-600 transition duration-200"
        >
          <FaFacebook />
        </a>
        <a
          href="https://drive.google.com/file/d/1fy7lGHWqze_4ilsqd5vzBMrF5iuXF8qg/view"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-purple-600 transition duration-200"
        >
          <FaGoogleDrive />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
