import Home from ".././view/home";
import menu from ".././view/menu";
import about from ".././view/about";
import contact from ".././view/contact";
import motd from ".././view/motd";
import menuImage from "./logo.png";

function header() {
  return (
    <div className="sticky top-0">
      <div className="flex justify-between items-center top-0 left-0 right-0 bottom-0 py-4 px-20 bg-red-800 mb-0 mt-0">
        <div className="flex items-center">
          <img src={menuImage} alt="menu" className="mt-5 w-16 " />
          <a className=" text-white mt-5 ">RESTORANICH</a>
        </div>
        <div className="inline-block text-red-800 mt-5 ">
          <a
            className="mx-4 bg-red-200 hover:bg-pink-700 font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            href="/home"
          >
            Home
          </a>
          <a
            className="mx-4 bg-red-200 hover:bg-pink-700 font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            href="/menu"
          >
            Menu
          </a>
          <a
            className="mx-4 bg-red-200 hover:bg-pink-700 font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            href="/motd"
          >
            MOTD
          </a>
          <a
            className="mx-4 bg-red-200 hover:bg-pink-700 font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            href="/about"
          >
            About
          </a>
          <a
            className="mx-4  bg-red-200 hover:bg-pink-700 font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            href="#foot"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default header;
