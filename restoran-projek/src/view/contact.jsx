import React from "react";

function contact() {
  return (
    <div className="top-0 left-0 right-0 bg-red-200 h-screen">
      <h1 className="text-3xl font-bold mb-3">
        {" "}
        <br />
        Contact Us
      </h1>
      <hr className="border-black mt-1 mx-20" />
      <p className="mb-3">You can reach us through the following channels:</p>
      <ul className="list-disc ml-5">
        <li>Email: contact@example.com</li>
        <li>Phone: 123-456-7890</li>
        <li>Address: 123 Main Street, City</li>
      </ul>
    </div>
  );
}

export default contact;
