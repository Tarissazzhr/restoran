import React from "react";
import foodImage8 from "./food08.jpg";
import foodImage5 from "./food05.jpg";
import foodImage6 from "./food06.jpg";
import foodImage7 from "./food07.jpg";
import foodImage11 from "./food11.jpg";

function Home() {
  return (
    <div>
      <div className="bg-gradient-to-r from-red-200 to-red-500">
        <div className="py-20 px-20 text-left flex items-center">
          <div>
            <p className="text-400 pt-5">Halo, Selamat Datang!!!</p>
            <p className="text-3xl font-bold text-red-800">DI RESTORANICH</p>
            <p className="text-400 pt-5">Halo</p>
            <br />
            <a
              className="bg-red-800 hover:bg-red-200 font-bold py-2 px-4 rounded-lg transition-colors duration-300 text-white"
              href="/menu"
            >
              Lihat Menu!
            </a>
          </div>
          <div className="flex justify-start ml-auto">
            <img src={foodImage7} alt="Food 7" className="w-52 mx-2" />
            <img src={foodImage5} alt="Food 5" className="w-52 mx-2" />
            <img src={foodImage6} alt="Food 6" className="w-52 mx-2" />
          </div>
        </div>
      </div>

      <div className="py-5 px-20 bg-red-800 text-white text-left" id="foot">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <div className="flex items-center justify-between">
          <div>
            <p className="mb-3">
              You can reach us through the following channels:
            </p>
            <ul className="list-disc ml-5">
              <li>Email: contact@example.com</li>
              <li>Phone: 123-456-7890</li>
              <li>Address: 123 Main Street, City</li>
            </ul>
          </div>

          <div>
            <p className="mb-3">Reservation</p>
            <ul className="list-disc ml-5">
              <li>Email: contact@example.com</li>
              <li>Phone: 123-456-7890</li>
              <li>Address: 123 Main Street, City</li>
            </ul>
          </div>
        </div>
        <p className="text-center border-t pt-3">
          &copy; {new Date().getFullYear()} RESTORANICH. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Home;
