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
            <p className="text-3xl font-bold text-red-800 Asparagus">
              DI RESTORANICH
            </p>
            <p className="text-400 pt-5">
              Makanan Korea Ter-enak di Indonesia <br /> Silahkan Coba Disini!{" "}
            </p>
            <br />
            <a
              className="bg-red-800 hover:bg-red-200 text-red-200 hover:text-red-800 font-bold py-2 px-4 rounded-lg transition-colors duration-300"
              href="/menu"
            >
              Lihat Menu!
            </a>
          </div>
          <div className="flex justify-start ml-auto">
            <img
              src={foodImage7}
              alt="Food 7"
              className="w-52 mx-2 rounded-lg"
            />
            <img
              src={foodImage5}
              alt="Food 5"
              className="w-52 mx-2 rounded-lg"
            />
            <img
              src={foodImage6}
              alt="Food 6"
              className="w-52 mx-2 rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="py-5 px-20 bg-red-800 text-white text-left" id="foot">
        <h1 className="text-2xl font-bold">
          <u>Contact Us</u>
        </h1>
        <div className="flex items-center justify-between mb-3">
          <div>
            <p>Anda dapat menghubungi kami melalui media berikut:</p>
            <ul className="list-disc ml-5">
              <li>Email: RestoranichKorean@gmail.com</li>
              <li>Phone: 0825-2016-2017</li>
              <li>Address: Jl.Gangnam No.14, Depok, Indonesia</li>
            </ul>
            <br />
          </div>

          <div className="pl-10 mb-3">
            <p>
              {" "}
              <i>Reservasi</i> <br /> Silahkan isi Form dibawah ini: <br />
            </p>
            <ul className="list-disc ml-5">
              <br />
              <li>
                {" "}
                <a
                  className="bg-red-800 hover:bg-red-200 text-white hover:text-red-800 font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                  href="https://forms.gle/7ra8TEFah4kRnDjQ6"
                >
                  Klik Ini!
                </a>
              </li>
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
