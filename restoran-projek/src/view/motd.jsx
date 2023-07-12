import React from "react";
import makanan1 from "./xmakanan1.jpg";
import minuman2 from "./yminuman2.jpg";
import penutup3 from "./zpenutup3.jpg";
import paket1 from "./paket01.png";

function Motd() {
  const imageStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
  };
  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-red-500 to-red-200">
        <div className="pt-5 px-28 text-left flex bg-gradient-to-r from-red-200 to-red-500 ">
          <p>
            <button onClick={goBack} className="mr-2">
              &#x2190; Kembali
            </button>
          </p>{" "}
          <br />
          <p className="py-20 text-6xl Asparagus">
            Nikmati Menu <br /> Pilihan Terbaik!
          </p>
          <img
            src={paket1}
            alt="paket1"
            className="ml-auto object-cover rounded-lg"
          />
        </div>

        <div className="pt-10 pb-3 px-5 text-left">
          <p className="text-4xl font-bold  text-center Asparagus ">MOTD</p>
        </div>
        <div className="text-left px-24 py-5 ">
          <p className="text-400s text-center mx-32 ">
            Selamat datang di halaman menu kami! Lihatlah Menu of the day kami
            yang penuh kelezatan dan variasi. Setiap hari kami menghadirkan
            hidangan spesial yang dirancang khusus untuk memanjakan selera Anda.
          </p>
        </div>

        <div className="flex justify-center py-5">
          <a
            className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
            href="/menu"
          >
            <p className="text-400 pt-5">
              BEST SELLER <br /> MAKANAN
            </p>
            <br />
            <img
              src={makanan1}
              alt=""
              style={imageStyle}
              className=" rounded-lg"
            />
            <p className="text-center">
              Bibimbap <br /> Rp.25.000
            </p>
          </a>

          <a
            className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
            href="/menu"
          >
            <p className="text-400 pt-5">
              BEST SELLER <br /> MINUMAN
            </p>
            <br />
            <img
              src={minuman2}
              alt=""
              style={imageStyle}
              className="rounded-lg"
            />
            <p className="text-center ">
              Iced Americano <br /> Rp.20.000
            </p>
          </a>
          <a
            className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
            href="/menu"
          >
            <p className="text-400 pt-5">
              BEST SELLER <br /> MAKANAN PENUTUP
            </p>
            <br />
            <img
              src={penutup3}
              alt=""
              style={imageStyle}
              className="rounded-lg"
            />
            <p className="text-center ">
              Strawberry Bingsu <br /> Rp.25.000
            </p>
          </a>
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
                  className="bg-red-200 hover:bg-red-800 text-white hover:text-red-800 font-bold py-2 px-4 rounded-lg transition-colors duration-300"
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
export default Motd;
