import React from "react";
import latar from "./wlatar.png";
import makanan1 from "./xmakanan1.jpg";
import makanan2 from "./xmakanan2.jpg";
import makanan3 from "./xmakanan3.jpg";
import makanan4 from "./xmakanan4.jpg";
import makanan5 from "./xmakanan5.jpg";
import makanan6 from "./xmakanan6.jpg";
import makanan7 from "./xmakanan7.jpg";
import makanan8 from "./xmakanan8.jpg";
import makanan9 from "./xmakanan9.jpg";
import makanan10 from "./xmakanan10.jpg";
import minuman1 from "./yminuman1.jpg";
import minuman2 from "./yminuman2.jpg";
import minuman3 from "./yminuman3.jpg";
import minuman4 from "./yminuman4.jpg";
import minuman5 from "./yminuman5.jpg";
import minuman6 from "./yminuman6.jpg";
import minuman7 from "./yminuman7.jpg";
import penutup1 from "./zpenutup1.jpg";
import penutup2 from "./zpenutup2.jpg";
import penutup3 from "./zpenutup3.jpg";
import penutup4 from "./zpenutup4.jpg";
import penutup5 from "./zpenutup5.jpg";
function Menu() {
  const imageStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
  };

  return (
    <div className="bg-gradient-to-r from-red-500 to-red-200">
      <div className="py-3 px-5 text-left">
        <p className="text-4xl font-bold  text-center Asparagus">MENU</p>
      </div>
      <hr className="mx-20 border-black" />
      <div className="text-center text-3xl font-bold ">
        <br />
        Makanan
      </div>

      <div className="flex justify-center py-5 ">
        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={makanan1}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            Bibimbap <br /> Rp.25.000
          </div>{" "}
        </a>

        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={makanan2}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center">
            Budae Jjigae <br /> Rp.35.000
          </div>
        </a>

        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={makanan3}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            {" "}
            Kimchi Ramen <br /> Rp.25.000{" "}
          </div>
        </a>

        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={makanan4}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            Korean Bulgogi Sauce <br /> Rp.45.000
          </div>
        </a>
        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={makanan5}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            Kimbap <br /> Rp.20.000
          </div>
        </a>
      </div>

      <div className="flex justify-center py-5 ">
        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          {" "}
          <img
            src={makanan6}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center  ">
            Spicy Beef Bulgogi <br /> Rp.55.000
          </div>
        </a>
        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={makanan7}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            Tteokbokki <br /> Rp.25.000
          </div>
        </a>
        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={makanan8}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            Vegan Bulgogi Mandu <br /> Rp.35.000
          </div>
        </a>
        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={makanan9}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            Vegan Japchae <br /> Rp.25.000
          </div>
        </a>
        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={makanan10}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            Yukgaejang <br /> Rp.35.000
          </div>
        </a>
      </div>

      <div className="text-center text-3xl font-bold ">
        <br />
        Minuman
      </div>

      <div className="flex justify-center py-5 ">
        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={minuman1}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            Green Tea Matcha Smoothie <br /> Rp.30.000
          </div>
        </a>
        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={minuman2}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            Iced Americano <br /> Rp.20.000
          </div>
        </a>
        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={minuman3}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            Iced Caramel Macchiato <br /> Rp.25.000
          </div>
        </a>
        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={minuman4}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            Iced Matcha Latte <br /> Rp.30.000
          </div>
        </a>
        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={minuman5}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            Korean Banana Milk <br /> Rp.25.000
          </div>
        </a>
      </div>

      <div className="flex justify-center py-5 ">
        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={minuman6}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            Korean Strawberry Milk <br /> Rp.30.000
          </div>
        </a>
        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={minuman7}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            Vanilla Chai Tea Latte <br /> Rp.30.000
          </div>
        </a>
      </div>

      <p className="text-center text-3xl font-bold">
        <br />
        Makanan Penutup
      </p>

      <div className="flex justify-center py-5 ">
        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={penutup1}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            Brownie Pudding <br /> Rp.30.000
          </div>
        </a>
        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={penutup2}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            Kkwabaegi <br /> Rp.25.000
          </div>
        </a>
        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={penutup3}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            Strawberry Bingsu <br /> Rp.25.000
          </div>
        </a>
        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={penutup4}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            Hotteok <br /> Rp.20.000
          </div>
        </a>
        <a
          className="mr-5 ml-5 w-52 rounded-lg flex items-center flex-col  mx-4 bg-red-300 hover:bg-red-800  text-black hover:text-white font-semibold py-2 px-4 max-w-max transition-colors duration-300"
          href="/menu"
        >
          <img
            src={penutup5}
            alt=""
            style={imageStyle}
            className="rounded-lg"
          />
          <div className="text-center ">
            Strawberry Shortcake Triffle <br /> Rp.35.000
          </div>
        </a>
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

export default Menu;
