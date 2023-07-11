function menu() {
  return (
    <div>
      <div className="bg-red-200 h-screen">
        <div className="py-10 px-10 rounded-xl">
          <p className="text-center text-3xl font-bold">Haaaaaaaaaaaai!</p>
          <p className="text-center text-gray-400 pt-5">Halo</p>
        </div>
      </div>

      <div className="py-4 px-11 bg-red-800 text-white  ml-5" id="foot">
        <h1 className="text-3xl font-bold mb-3"> Contact Us</h1>
        <p className="mb-3">You can reach us through the following channels:</p>
        Email: contact@example.com <br />
        Phone: 123-456-7890 <br />
        Address: 123 Main Street, City <br />
        <p className="text-center border-t pt-3"></p>
        &copy; {new Date().getFullYear()} RESTORANICH. All rights reserved.
      </div>
    </div>
  );
}
export default menu;
