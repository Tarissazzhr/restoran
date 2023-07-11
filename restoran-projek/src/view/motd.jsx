import React from "react";

function Motd() {
  return (
    <div>
      <div className="bg-gradient-to-r from-red-200 to-red-500">
        <div className="py-3 px-5 text-left">
          <p className="text-3xl font-bold text-red-800 text-center">MOTD</p>
        </div>
        <hr className="mx-20 border-black" />
        <div className="text-left px-20 py-5">
          <p className="text-400 pt-5 text-center">
            Selamat datang di halaman menu kami! Lihatlah Menu of the day kami
            yang penuh kelezatan dan variasi. Setiap hari kami menghadirkan
            hidangan spesial yang dirancang khusus untuk memanjakan selera Anda.
          </p>
          <p>
            Temukan Menu of the day kami yang menggoda di halaman ini.
            Hidangan-hidangan pilihan kami dirancang untuk memuaskan berbagai
            selera dan keinginan. Dari hidangan laut yang segar hingga hidangan
            daging yang menggugah selera, ada sesuatu untuk setiap pencinta
            makanan di sini.
          </p>
          <p className="text-400 pt-5">Halo</p>
          <br />
          <a
            className="bg-red-800 hover:bg-red-200 font-bold py-2 px-4 rounded-lg transition-colors duration-300 text-white"
            href="/menu"
          >
            Lihat Menu!
          </a>
        </div>
      </div>

      <div className="py-5 px-20 bg-red-800 text-white text-left" id="foot">
        <h1 className="text-2xl font-bold">Contact Us</h1>
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

export default Motd;
