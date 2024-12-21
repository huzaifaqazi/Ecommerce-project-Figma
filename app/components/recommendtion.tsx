import { FaHeart } from "react-icons/fa";
import recommendationcar1 from "../../public/images/car4.png";
import Image from "next/image";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { FaCircleRadiation } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";
import recommendationcar2 from "../../public/images/car5.png"
import car11 from "../../public/images/car11.png"
import recommendation3 from "../../public/images/car6.png"
import recommendation4 from "../../public/images/car7.png"
import car10 from "../../public/images/car10.png"

const Recommendtion = () => {
  return (
    <div className="h-full -mt-16 bg-[#F6F7F9] p-14">
      <div className="">
        <h1 className="text-[#90A3BF]">Recommendation</h1>

        {/* container */}
        <div className="flex justify-between items-center my-4 gap-6">
          {/* card 1 */}
          <div className="w-full sm:w-[48%] lg:w-[350px] h-auto bg-[#ffffff] rounded-lg shadow-md">

            <div className="flex justify-between items-center">
              <h1 className="p-6 text-xl sm:text-2xl  font-bold">All new Rush</h1>
              <CiHeart className="mx-5 text-3xl" />
            </div>
            <p className="-my-6 mx-10 text-[#90A3BF]">SUV</p>
            <Image src={recommendationcar1} alt="car" className="h-[250px]" />
            <div className="flex items-center justify-around mx-2">
              <div className="flex items-center">
                <BsFillFuelPumpDieselFill className="text-[#90A3BF] " />
                <p className="text-[#90A3BF] mx-1">70L</p>
              </div>
              <div className="flex items-center">
                <FaCircleRadiation className="text-[#90A3BF] mx-2" />
                <p className="text-[#90A3BF] ">Manual</p>
              </div>
              <div className="flex items-center">
                <IoPeopleSharp className="text-[#90A3BF] " />
                <p className="text-[#90A3BF] mx-1">6 people</p>
              </div>
            </div>
            <div className="flex justify-between mx-5] items-center">
              <div className="flex mt-3 items-center" >
                <h1 className="text-black font-semibold text-3xl mx-5">$72.00/</h1>
                <p className="text-[#90A3BF] -mx-4">day</p>
              </div>
              <div className="bg-[#3563E9] p-3 rounded mt-4 text-white mx-4 w-[120px] text-center">
                <button className="">Rent Now</button>
              </div>
            </div>
          </div>

          {/* caed 2 */}
          <div className="w-full sm:w-[48%] lg:w-[350px] h-auto bg-[#ffffff] rounded-lg shadow-md">

            <div className="flex justify-between items-center">
              <h1 className="p-6 text-2xl font-bold">CR-R</h1>
              <  FaHeart className="mx-5 text-[#ED3F3F] text-2xl" />
            </div>
            <p className="-my-6 mx-10 text-[#90A3BF]">SUV</p>
            <Image src={recommendationcar2} alt="car" className="h-[130px] w-[348px] my-16" />
            <div className="flex items-center justify-around mx-2 -mt-3">
              <div className="flex items-center">
                <BsFillFuelPumpDieselFill className="text-[#90A3BF] " />
                <p className="text-[#90A3BF] mx-1 ">80L</p>
              </div>
              <div className="flex items-center">
                <FaCircleRadiation className="text-[#90A3BF] mx-2" />
                <p className="text-[#90A3BF] ">Manual</p>
              </div>
              <div className="flex items-center">
                <IoPeopleSharp className="text-[#90A3BF] " />
                <p className="text-[#90A3BF] mx-1">6 people</p>
              </div>
            </div>
            <div className="flex justify-between mx-5] items-center">
              <div className="flex mt-3 items-center" >
                <h1 className="text-black font-semibold text-3xl mx-5">$80.00/</h1>
                <p className="text-[#90A3BF] -mx-4">day</p>
              </div>
              <div className="bg-[#3563E9] p-3 rounded mt-4  text-white mx-4 w-[120px] text-center">
                <button className="">Rent Now</button>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="w-full sm:w-[48%] lg:w-[350px] h-auto bg-[#ffffff] rounded-lg shadow-md">

            <div className="flex justify-between items-center">
              <h1 className="p-6 text-2xl font-bold">AllNewTerioes</h1>
              < CiHeart className="mx-5 text-3xl" />
            </div>
            <p className="-my-6 mx-10 text-[#90A3BF]">SUV</p>
            <Image src={recommendation3} alt="car" className="h-[250px] my-2 w-[300px] mx-auto" />
            <div className="flex items-center justify-around mx-2 -my-3">
              <div className="flex items-center">
                <BsFillFuelPumpDieselFill className="text-[#90A3BF] " />
                <p className="text-[#90A3BF] mx-1 ">90L</p>
              </div>
              <div className="flex items-center">
                <FaCircleRadiation className="text-[#90A3BF] mx-2" />
                <p className="text-[#90A3BF] ">Manual</p>
              </div>
              <div className="flex items-center">
                <IoPeopleSharp className="text-[#90A3BF] " />
                <p className="text-[#90A3BF] mx-1">6 people</p>
              </div>
            </div>
            <div className="flex justify-between mx-5] items-center">
              <div className="flex mt-3 items-center" >
                <h1 className="text-black font-semibold text-3xl mx-5">$74.00/</h1>
                <p className="text-[#90A3BF] -mx-4">day</p>
              </div>
              <div className="bg-[#3563E9] p-3 rounded mt-6 text-white mx-4 w-[120px] text-center">
                <button className="">Rent Now</button>
              </div>
            </div>
          </div>

          {/* card 4 */}

          <div className="w-full sm:w-[48%] lg:w-[350px] h-auto bg-[#ffffff] rounded-lg shadow-md">

            <div className="flex justify-between items-center">
              <h1 className="p-6 text-2xl font-bold">CR - V</h1>
              < FaHeart className="mx-5 text-[#ED3F3F] text-2xl" />
            </div>
            <p className="-my-6 mx-10 text-[#90A3BF]">SUV</p>
            <Image src={recommendation4} alt="car" className="my-10 h-[170px]" />
            <div className="flex items-center justify-around mx-2">
              <div className="flex items-center">
                <BsFillFuelPumpDieselFill className="text-[#90A3BF] " />
                <p className="text-[#90A3BF] mx-1">80L</p>
              </div>
              <div className="flex items-center">
                <FaCircleRadiation className="text-[#90A3BF] mx-2" />
                <p className="text-[#90A3BF] ">Manual</p>
              </div>
              <div className="flex items-center">
                <IoPeopleSharp className="text-[#90A3BF] " />
                <p className="text-[#90A3BF] mx-1">6 people</p>
              </div>
            </div>
            <div className="flex justify-between mx-5] items-center">
              <div className="flex mt-3 items-center" >
                <h1 className="text-black font-semibold text-3xl mx-5">$80.00/</h1>
                <p className="text-[#90A3BF] -mx-4">day</p>
              </div>
              <div className="bg-[#3563E9] p-3 rounded mt-4 text-white mx-4 w-[120px] text-center">
                <button className="">Rent Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* container 2 */}
      <div className="my-14 bg-[#F6F7F9] flex justify-between items-center gap-6">

        {/* card 1 */}
        <div className="w-full sm:w-[48%] lg:w-[350px] h-auto  bg-[#ffffff] rounded-lg shadow-md">

          <div className="flex justify-between items-center">
            <h1 className="p-6 text-2xl font-bold">MGZX - Exclusive</h1>
            <FaHeart className="mx-5 text-2xl text-[#ED3F3F] " />
          </div>
          <p className="-my-6 mx-10 text-[#90A3BF]">HatchBack</p>
          <Image src={car10} alt="car" className="h-[180px] my-8" />
          <div className="flex items-center justify-around mx-2">
            <div className="flex items-center">
              <BsFillFuelPumpDieselFill className="text-[#90A3BF] " />
              <p className="text-[#90A3BF] mx-1">70L</p>
            </div>
            <div className="flex items-center">
              <FaCircleRadiation className="text-[#90A3BF] mx-2" />
              <p className="text-[#90A3BF] ">Manual</p>
            </div>
            <div className="flex items-center">
              <IoPeopleSharp className="text-[#90A3BF] " />
              <p className="text-[#90A3BF] mx-1">4 people</p>
            </div>
          </div>
          <div className="flex justify-between mx-5] items-center">
            <div className="flex mt-3 items-center" >
              <h1 className="text-black font-semibold text-3xl mx-5">$76.00/</h1>
              <p className="text-[#90A3BF] -mx-4">day</p>
            </div>
            <div className="bg-[#3563E9] p-3 rounded mt-4 text-white mx-4 w-[120px] text-center">
              <button className="">Rent Now</button>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="w-full sm:w-[48%] lg:w-[350px] h-auto bg-[#ffffff] rounded-lg shadow-md">

          <div className="flex justify-between items-center">
            <h1 className="p-6 text-2xl font-bold">New MGZS</h1>
            <  CiHeart className="mx-5 text-3xl" />
          </div>
          <p className="-my-6 mx-10 text-[#90A3BF]">SUV</p>
          <Image src={car11} alt="car" className="  my-12" />
          <div className="flex items-center justify-around mx-2 -mt-3">
            <div className="flex items-center">
              <BsFillFuelPumpDieselFill className="text-[#90A3BF] " />
              <p className="text-[#90A3BF] mx-1 ">80L</p>
            </div>
            <div className="flex items-center">
              <FaCircleRadiation className="text-[#90A3BF] mx-2" />
              <p className="text-[#90A3BF] ">Manual</p>
            </div>
            <div className="flex items-center">
              <IoPeopleSharp className="text-[#90A3BF] " />
              <p className="text-[#90A3BF] mx-1">6 people</p>
            </div>
          </div>
          <div className="flex justify-between mx-5] items-center">
            <div className="flex mt-3 items-center" >
              <h1 className="text-black font-semibold text-3xl mx-5">$80.00/</h1>
              <p className="text-[#90A3BF] -mx-4">day</p>
            </div>
            <div className="bg-[#3563E9] p-3 rounded text-white mx-4 w-[120px] text-center my-2">
              <button className="">Rent Now</button>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="w-full sm:w-[48%] lg:w-[350px] h-auto bg-[#ffffff] rounded-lg shadow-md">

          <div className="flex justify-between items-center">
            <h1 className="p-6 text-xl font-bold">MGZX-Excite</h1>
            < FaHeart className="mx-5 text-2xl text-[#ED3F3F]" />
          </div>
          <p className="-my-6 mx-10 text-[#90A3BF]">SUV</p>
          <Image src={car10} alt="car" className="h-[180px] my-10  mx-auto" />
          <div className="flex items-center justify-around mx-2 -my-3">
            <div className="flex items-center">
              <BsFillFuelPumpDieselFill className="text-[#90A3BF] " />
              <p className="text-[#90A3BF] mx-1 ">90L</p>
            </div>
            <div className="flex items-center">
              <FaCircleRadiation className="text-[#90A3BF] mx-2" />
              <p className="text-[#90A3BF] ">Manual</p>
            </div>
            <div className="flex items-center">
              <IoPeopleSharp className="text-[#90A3BF] " />
              <p className="text-[#90A3BF] mx-1">4 people</p>
            </div>
          </div>
          <div className="flex justify-between mx-5] items-center">
            <div className="flex  items-center" >
              <h1 className="text-black font-semibold text-3xl mx-5">$74.00/</h1>
              <p className="text-[#90A3BF] -mx-4">day</p>
            </div>
            <div className="bg-[#3563E9] p-3 rounded my-7 text-white mx-4 w-[120px] text-center">
              <button className="">Rent Now</button>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="w-full sm:w-[48%] lg:w-[350px] h-auto bg-[#ffffff] rounded-lg shadow-md">

          <div className="flex justify-between items-center">
            <h1 className="p-6 text-2xl font-bold">CR - V</h1>
            <CiHeart className="mx-5 text-3xl" />
          </div>
          <p className="-my-6 mx-10 text-[#90A3BF]">SUV</p>
          <Image src={car11} alt="car" className="my-10 h-[170px] w-[580px]" />
          <div className="flex items-center justify-around mx-2">
            <div className="flex items-center">
              <BsFillFuelPumpDieselFill className="text-[#90A3BF] " />
              <p className="text-[#90A3BF] mx-1">80L</p>
            </div>
            <div className="flex items-center">
              <FaCircleRadiation className="text-[#90A3BF] mx-2" />
              <p className="text-[#90A3BF] ">Manual</p>
            </div>
            <div className="flex items-center">
              <IoPeopleSharp className="text-[#90A3BF] " />
              <p className="text-[#90A3BF] mx-1">6 people</p>
            </div>
          </div>
          <div className="flex justify-between mx-5] items-center">
            <div className="flex mt-3 items-center" >
              <h1 className="text-black font-semibold text-3xl mx-5">$80.00/</h1>
              <p className="text-[#90A3BF] -mx-4">day</p>
            </div>
            <div className="bg-[#3563E9] p-3 rounded my-3 text-white mx-4 w-[120px] text-center">
              <button className="">Rent Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* button */}
      <div className="h-[44px] w-[156px] bg-[#3563E9] mx-auto flex justify-center rounded-[4px] items-center">
        <button className=" text-white">Show more car</button>
      </div>
    </div>
  )
}

export default Recommendtion