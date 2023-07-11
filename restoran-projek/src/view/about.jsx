import React from "react";
import menuImage from "./karinwin.jpg";

function about() {
  return (
    <div>
      <div className="bg-red-200 h-screen">
        <div className="py-3 px-5 text-left">
          <p className="text-center text-3xl font-bold">About Us</p>
        </div>
        <hr className="mx-20 border-black" />
        <img src={menuImage} alt="" className="w-52 mt-10 mx-20" />
        <p className="text-center text-gray-400 pt-5"></p>
      </div>

      <div className="py-4 px-11 bg-red-800 text-white text-center" id="foot">
        <h1 className="text-3xl font-bold mb-3"> Contact Us</h1>
        <p className="mb-3">You can reach us through the following channels:</p>
        <ul className="list-disc ml-5">
          <li>Email: contact@example.com</li>
          <li>Phone: 123-456-7890</li>
          <li>Address: 123 Main Street, City</li>
        </ul>
        &copy; {new Date().getFullYear()} RESTORANICH. All rights reserved.
      </div>
    </div>
  );
}

export default about;
