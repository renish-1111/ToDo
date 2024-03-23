import React from "react";

const Navbar = () => {
  return (
    <nav className=" bg-black text-white mb-5">
      <ul className="flex justify-between  gap-11 p-5 items-center">
        <div className="logo">
          <span className="md:text-3xl text-2xl font-bold text-purple-300">itsTodo</span>
        </div>

        <div className="flex md:gap-11 gap-4">
          <span>
            <a href="" className="cursor-pointer md:text-xl hover:text-purple-300 hover:font-semibold transition-all duration-300">Home</a>
          </span>
          <span>
            <a href="" className="cursor-pointer md:text-xl hover:text-purple-300 hover:font-semibold transition-all duration-300">About</a>
          </span>
          <span>
            <a href="" className="cursor-pointer md:text-xl hover:text-purple-300 hover:font-semibold transition-all duration-300">Contact</a>
          </span>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
