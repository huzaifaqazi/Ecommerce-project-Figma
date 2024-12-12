import { FaHeart } from "react-icons/fa";
import categorycar from "../../public/images/car1.png";
import Image from "next/image";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { FaCircleRadiation } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";
import Categorycar2 from "../../public/images/car2.png";
import Categorycar3 from "../../public/images/car3.png";

const Catalouge = () => {
  return (
    <div className="bg-[#F6F7F9] p-6 sm:p-8 md:p-10 lg:p-14">
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className="text-[#90A3BF] text-sm sm:text-base">Popular Car</p>
        <p className="text-[#3563E9] cursor-pointer text-sm sm:text-base">View All</p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-between gap-4 md:gap-6 lg:gap-8 my-6">
        {/* Card 1 */}
        <div className="w-full sm:w-[48%] lg:w-[350px] h-auto bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold">Koenigsegg</h1>
            <FaHeart className="text-[#ED3F3F] text-xl sm:text-2xl" />
          </div>
          <p className="text-[#90A3BF] text-sm sm:text-base">Sport</p>
          <Image src={categorycar} alt="car" className="my-14" />
          <div className="flex items-center justify-between my-4">
            <div className="flex items-center">
              <BsFillFuelPumpDieselFill className="text-[#90A3BF]" />
              <p className="text-[#90A3BF] text-sm mx-1">90L</p>
            </div>
            <div className="flex items-center">
              <FaCircleRadiation className="text-[#90A3BF]" />
              <p className="text-[#90A3BF] text-sm mx-1">Manual</p>
            </div>
            <div className="flex items-center">
              <IoPeopleSharp className="text-[#90A3BF]" />
              <p className="text-[#90A3BF] text-sm mx-1">2 people</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-black font-semibold text-xl sm:text-2xl">$99.00/</h1>
              <p className="text-[#90A3BF] text-sm mx-1">day</p>
            </div>
            <button className="bg-[#3563E9] text-white px-4 py-2 rounded text-sm sm:text-base">Rent Now</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[48%] lg:w-[350px] h-auto bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl sm:text-2xl font-bold">Nissan GT-R</h1>
            <CiHeart className="text-[#90A3BF] text-2xl sm:text-2xl" />
          </div>
          <p className="text-[#90A3BF] text-sm sm:text-base">Sport</p>
          <Image src={Categorycar2} alt="car" className="my-4" />
          <div className="flex items-center justify-between my-4">
            <div className="flex items-center">
              <BsFillFuelPumpDieselFill className="text-[#90A3BF]" />
              <p className="text-[#90A3BF] text-sm mx-1">80L</p>
            </div>
            <div className="flex items-center">
              <FaCircleRadiation className="text-[#90A3BF]" />
              <p className="text-[#90A3BF] text-sm mx-1">Manual</p>
            </div>
            <div className="flex items-center">
              <IoPeopleSharp className="text-[#90A3BF]" />
              <p className="text-[#90A3BF] text-sm mx-1">2 people</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-black font-semibold text-xl sm:text-2xl">$80.00/</h1>
              <p className="text-[#90A3BF] text-sm mx-1">day</p>
            </div>
            <button className="bg-[#3563E9] text-white px-4 py-2 rounded text-sm sm:text-base">Rent Now</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[48%] lg:w-[350px] h-auto bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold">Rolls-Royce</h1>
            <FaHeart className="text-[#ED3F3F] text-xl sm:text-2xl" />
          </div>
          <p className="text-[#90A3BF] text-sm sm:text-base">Sport</p>
          <Image src={Categorycar3} alt="car" className="my-20" />
          <div className="flex items-center justify-between my-4">
            <div className="flex items-center my-3">
              <BsFillFuelPumpDieselFill className="text-[#90A3BF]" />
              <p className="text-[#90A3BF] text-sm mx-1">70L</p>
            </div>
            <div className="flex items-center">
              <FaCircleRadiation className="text-[#90A3BF]" />
              <p className="text-[#90A3BF] text-sm mx-1">Manual</p>
            </div>
            <div className="flex items-center">
              <IoPeopleSharp className="text-[#90A3BF]" />
              <p className="text-[#90A3BF] text-sm mx-1">2 people</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-black font-semibold text-xl sm:text-2xl">$96.00/</h1>
              <p className="text-[#90A3BF] text-sm mx-1">day</p>
            </div>
            <button className="bg-[#3563E9] text-white px-4 py-2 rounded -mt-4 text-sm sm:text-base">Rent Now</button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full sm:w-[48%] lg:w-[350px] h-auto bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold">Nissan GT-R</h1>
            <CiHeart className=" text-3xl sm:text-2xl" />
          </div>
          <p className="text-[#90A3BF] text-sm sm:text-base">Sport</p>
          <Image src={categorycar} alt="car" className="my-14" />
          <div className="flex items-center justify-between my-4">
            <div className="flex items-center">
              <BsFillFuelPumpDieselFill className="text-[#90A3BF]" />
              <p className="text-[#90A3BF] text-sm mx-1">80L</p>
            </div>
            <div className="flex items-center">
              <FaCircleRadiation className="text-[#90A3BF]" />
              <p className="text-[#90A3BF] text-sm mx-1">Manual</p>
            </div>
            <div className="flex items-center">
              <IoPeopleSharp className="text-[#90A3BF]" />
              <p className="text-[#90A3BF] text-sm mx-1">2 people</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-black font-semibold text-xl sm:text-2xl">$80.00/</h1>
              <p className="text-[#90A3BF] text-sm mx-1">day</p>
            </div>
            <button className="bg-[#3563E9] text-white px-4 py-2 rounded text-sm sm:text-base">Rent Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalouge;
