import React from "react";
import xresto1 from "./xresto1.jpg";
import ceo from "./karwin.jpg";

function about() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-red-500 to-red-200">
        <p className="pt-5 py-0 px-28 text-left">
          <button onClick={goBack} className="mr-2">
            &#x2190; Kembali
          </button>
        </p>

        <div className="py-10 px-20 text-left flex">
          <img
            src={xresto1}
            alt="resto"
            className="w-fit h-fit object-cover mx-2 rounded-lg"
          />
          <div className="pl-10">
            <p className="text-3xl font-bold   Asparagus">RESTORANICH</p>
            <p className="text-400 pt-10 pb-20 text-justify">
              Restoranich merupakan perusahaan swasta yang dibentuk oleh dua
              orang pengusaha. Didirikan pada tanggal 25 Agustus 2020 berlokasi
              di jalan Gangnam No. 14 Depok. Restoranich adalah destinasi
              kuliner yang menyajikan pengalaman makan yang tak terlupakan. Dari
              hidangan lezat hingga minuman segar, kami berkomitmen untuk
              memberikan kepuasan maksimal kepada setiap tamu yang mengunjungi
              restoran kami. Kami berkomitmen untuk menggunakan bahan-bahan
              segar dan berkualitas tinggi dalam setiap hidangan kami. <br />
              <br />
            </p>
          </div>
        </div>
        <div className="py-20 px-20 text-left flex">
          <div className="pr-10">
            <p className="text-3xl font-bold Asparagus">CEO of Restoranich</p>
            <p className="text-400 pt-10 pb-20 text-justify">
              Tarissa dan Naura <br /> Merupakan CEO dari Restauranich berasal
              dari Politeknik negeri Jakarta Jurusan teknik Informatika dan
              Komputer Prodi Teknik Informatika yang sekarang masih dalam
              pembelajaran Semester 2
              <br />
            </p>
          </div>
          <img
            src={ceo}
            alt="ceo"
            className="w-fit h-fit object-cover mx-2 rounded-lg"
          />
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
export default about;
