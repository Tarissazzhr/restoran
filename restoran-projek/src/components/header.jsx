import Home from ".././view/home";
import about from ".././view/about";
import contact from ".././view/contact";

function header() {
  return (
    <div>
      <div className="flex justify-between items-center top-0 left-0 right-0 py-4 px-11 Poppins">
        <a className="text-3xl ml-2 bg-red ">RESTORANICH</a>
        <div className="inline-block text-2xl">
          <a
            className="mx-4 hover:text-pink-500 transition-colors duration-300"
            href="/"
          >
            Home
          </a>
          <a
            className="mx-4 hover:text-blue-700 transition-colors duration-300"
            href="/about"
          >
             Menu
          </a>
          <a
            className="mx-4 hover:text-blue-700 transition-colors duration-300"
            href="/about"
          >
            About
          </a>
          <a
            className="mx-4 hover:text-pink-500 transition-colors duration-300"
            href="/contact"
          >
            Contact
          </a>
        </div>
      </div>
      <hr className="border-black mt-1 mx-20" />
    </div>
  );
}

export default header;
