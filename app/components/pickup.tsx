import { FaDotCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSwapVertical } from "react-icons/io5";

export const Pickup = () => {
  return (
    <div className="bg-[#F6F7F9]  h-auto py-10 flex flex-col lg:flex-row justify-center items-center -mt-10 mx-5" >
      {/* Pickup Box */}
      <div className="bg-white h-auto w-[80%] lg:w-[45%]  lg:mx-10 my-5 lg:my-0 p-5 lg:p-7 rounded-lg shadow-md">
        <div className="text-md flex items-center">
          <FaDotCircle className="text-[#3563E9]" />
          <h1 className="text-lg lg:text-xl mx-3 text-black">Pick - up</h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-around mt-5">
          <div className="mb-4 lg:mb-0">
            <h1 className="font-bold text-black">LOCATION</h1>
            <div className="flex items-center">
              <p className="my-2 text-[#90A3BF]">see your city</p>
              <MdKeyboardArrowDown className="text-2xl mx-3 cursor-pointer" />
            </div>
          </div>
          <div className="mb-4 lg:mb-0">
            <h1 className="font-bold text-black">DATE</h1>
            <div className="flex items-center">
              <p className="my-2 text-[#90A3BF]">see your date</p>
              <MdKeyboardArrowDown className="text-2xl mx-3 cursor-pointer" />
            </div>
          </div>
          <div>
            <h1 className="font-bold text-black">TIME</h1>
            <div className="flex items-center">
              <p className="my-2 text-[#90A3BF]">see your time</p>
              <MdKeyboardArrowDown className="text-2xl mx-3 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Swap Icon */}
      <div className="h-[60px] w-[60px] bg-[#3563E9] rounded-lg flex justify-center items-center mx-5 my-5 lg:my-0">
        <IoSwapVertical className="text-2xl text-white" />
      </div>

      {/* Drop-off Box */}
      <div className="bg-white h-auto w-[90%] lg:w-[45%] mx-5 lg:mx-10 my-5 lg:my-0 p-5 lg:p-7 rounded-lg shadow-md">
        <div className="text-md flex items-center">
          <FaDotCircle className="text-[#3563E9]" />
          <h1 className="text-lg lg:text-xl mx-3 text-black">Drop - Off</h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-around mt-5">
          <div className="mb-4 lg:mb-0">
            <h1 className="font-bold text-black">LOCATION</h1>
            <div className="flex items-center">
              <p className="my-2 text-[#90A3BF]">see your city</p>
              <MdKeyboardArrowDown className="text-2xl mx-3 cursor-pointer" />
            </div>
          </div>
          <div className="mb-4 lg:mb-0">
            <h1 className="font-bold text-black">DATE</h1>
            <div className="flex items-center">
              <p className="my-2 text-[#90A3BF]">see your date</p>
              <MdKeyboardArrowDown className="text-2xl mx-3 cursor-pointer" />
            </div>
          </div>
          <div>
            <h1 className="font-bold text-black">TIME</h1>
            <div className="flex items-center">
              <p className="my-2 text-[#90A3BF]">see your time</p>
              <MdKeyboardArrowDown className="text-2xl mx-3 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pickup