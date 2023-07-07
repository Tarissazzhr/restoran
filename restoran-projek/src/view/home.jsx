import React from "react";
import menuImage from "./bagweb.jpg";

function home() {
  return (
    <div>
      <div className="bg-red-200 h-screen ">
        <div className="py-20 px-20 text-left">
          <p className="text-400 pt-5">Halo, Selamat Datang!!!</p>
          <p className="text-3xl font-bold text-red-800">DI RESTORANICH</p>
          <p className="text-400 pt-5">Halo</p> <br />
          <a
            className=" bg-red-800  hover:bg-red-200   font-bold py-2 px-4 rounded-lg transition-colors duration-300 text-white"
            href="/menu"
          >
            {" "}
            Lihat Menu!{" "}
          </a>
        </div>
      </div>

      <div className="py-5 px-20 bg-red-800 text-white text-left" id="foot">
        <h1 className="text-2xl font-bold"> Contact Us</h1>
        <p className="mb-3">You can reach us through the following channels:</p>
        <ul className="list-disc ml-5">
          <li>Email: contact@example.com</li>
          <li>Phone: 123-456-7890</li>
          <li>Address: 123 Main Street, City</li>
        </ul>
        <p className="text-center">
          &copy; {new Date().getFullYear()} RESTORANICH. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default home;
