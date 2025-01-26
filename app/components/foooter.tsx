const menuItems = [
  "About",
  "How it works",
  "Featured",
  "Partnership",
  "Business Relation",
];

const menuItems2 = [
  "Events",
  "Blog",
  "Podcast",
  "Invite a friend",
];

const menuItems3 = [
  "Discord",
  "Instagram",
  "Twitter",
  "Facebook",
];

export const Footer = () => {
  return (
    <div className="w-full bg-[#ffffff] py-10 px-5 sm:px-10 lg:px-20 text-[#1A202C] ">

      {/* Logo and Vision */}
      <div className="mb-10">
        <h1 className="text-[#3563E9] text-[28px] sm:text-[32px] font-bold">
          MORENT
        </h1>
        <p className="text-[#131313] mt-4 text-sm sm:text-base w-[280px]">
          Our vision is to provide convenience and help increase your sales business.
        </p>
      </div>

      {/* Menu Sections */}
      <div className="flex flex-wrap justify-between lg:justify-start gap-10 relative">
        {/* About Section */}
        <div className="w-full sm:w-auto">
          <h1 className="text-lg sm:text-xl font-bold">About</h1>
          <ul className="mt-5 ">
            {menuItems.map((item, i) => (
              <li className="my-2 text-sm sm:text-base" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Community Section */}
        <div className="w-full sm:w-auto">
          <h1 className="text-lg sm:text-xl font-bold">Community</h1>
          <ul className="mt-5">
            {menuItems2.map((item, i) => (
              <li className="my-2 text-sm sm:text-base" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Socials Section */}
        <div className="w-full sm:w-auto">
          <h1 className="text-lg sm:text-xl font-bold">Socials</h1>
          <ul className="mt-5">
            {menuItems3.map((item, i) => (
              <li className="my-2 text-sm sm:text-base" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-300 my-10"></div>

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-black text-sm sm:text-base">
          ©2022 MORENT. All rights reserved.
        </h1>
        <div className="flex mt-5 sm:mt-0 space-x-5">
          <p className="font-semibold text-sm sm:text-base cursor-pointer">
            Privacy & Policy
          </p>
          <p className="font-semibold text-sm sm:text-base cursor-pointer">
            Terms & Condition
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer