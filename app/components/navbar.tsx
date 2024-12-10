import { IoSearchOutline, IoSettingsSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import Image from "next/image";
import Man from "../../public/images/man.png";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[124px] w-full bg-[#ffffff] items-center justify-between px-4 md:px-8">
      {/* Logo */}
      <h1 className="text-[#3563E9] font-bold text-[24px] md:text-[32px] my-4 md:my-0">
        MORENT
      </h1>

      {/* Search Bar */}
      <div className="h-[44px] w-full md:w-[492px] border-b shadow-lg flex items-center rounded-3xl mt-4 md:mt-0">
        <IoSearchOutline className="text-2xl mx-4" />
        <input
          type="search"
          placeholder="Search Something Here"
          className="text-[#596780] p-2 "
        />
      </div>

      {/* Icons Section */}
      <div className="flex items-center justify-between mt-4 md:mt-0">
        {/* Heart Icon */}
        <div className="border p-2 rounded-full">
          <FaHeart className="text-2xl cursor-pointer md:text-3xl text-[#596780]" />
        </div>
        
        {/* Bell Icon */}
        <div className="border p-2 rounded-full mx-4 md:mx-8 cursor-pointer">
          <FaBell className="text-2xl md:text-3xl text-[#596780]" />
        </div>
        
        {/* Settings Icon */}
        <div className="border p-2 rounded-full cursor-pointer">
          <IoSettingsSharp className="text-2xl md:text-3xl text-[#596780]" />
        </div>
        
        {/* Profile Image */}
        <div className="ml-4 md:ml-8 rounded-full cursor-pointer">
          <Image
            src={Man}
            alt="manpic"
            className="h-[35px] w-[35px] md:h-[45px] md:w-[44px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
