import Image from "next/image";
import CAR1 from "../../public/images/car1.png";
import CAR2 from "../../public/images/car2.png";

export const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around bg-[#F6F7F9] p-5 lg:p-10 space-y-5 lg:space-y-0">
      {/* First Box */}
      <div className="h-auto lg:h-[440px] w-full lg:w-[48%] bg-[#54A6FF] rounded-lg p-2">
        <div className="w-full lg:w-[284px] mx-5">
          <h1 className="text-[#ffffff] text-[24px] lg:text-[32px] p-2 capitalize text-center lg:text-left">
            The best platform for car rent
          </h1>
          <p className="text-[#ffffff] p-3 text-center lg:text-left">
            Ease of doing a car rental safely and reliably. Of course, at a low price.
          </p>
          <div className="flex justify-center lg:justify-start mx-10 mt-1">
            <button className="w-[130px] h-[45px] p-2 bg-[#3563E9] text-white rounded-[4px] capitalize">
              Rental car
            </button>
          </div>
          <Image
            src={CAR1}
            alt="car"
            className="mx-auto lg:mx-36 h-[200px] md:h-[230px] w-auto"
          />
        </div>
      </div>

      {/* Second Box */}
      <div className="h-auto lg:h-[440px] w-full lg:w-[48%] bg-[#3563E9] rounded-lg p-5">
        <div className="w-full lg:w-[280px] ">
          <h1 className="text-[#ffffff] text-[24px] lg:text-[32px] p-2 text-center lg:text-left w-[300px]">
            Easy way to rent a car at a low price
          </h1>
          <p className="text-[#ffffff] p-3 text-center lg:text-left">
            Providing cheap car rental services and safe and comfortable facilities.
          </p>
          <div className="mx-9  flex justify-center lg:justify-start">
            <button className="w-[130px] h-[45px] p-2 bg-[#54A6FF] text-white rounded-[4px] capitalize">
              Rental car
            </button>
          </div>
          <Image
            src={CAR2}
            alt="car2"
            className="mx-auto lg:mx-40 h-[200px] md:h-[250px] w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
