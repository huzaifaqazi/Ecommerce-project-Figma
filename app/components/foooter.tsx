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
  "Invite a friend"
];
const menuItems3 = [
  "Discord",
  "Instagram",
  "Twitter",
  "Facebook"
]

export const Foooter = () => {
  return (
    <div className='w-[1440px] h-[480px] bg-[#ffffff] py-[80px] px-[60px]'>

      <div className="w-[292px] h-[108px]">
        <h1 className='text-[#3563E9] text-[32px] font-bold'>MORENT</h1>
        <p className='text-[#131313] py-4'>Our vision is to provide convenience and help increase your sales business.</p>
      </div>

      {/* list 1 */}
      <div className=" w-[152px] h-[244px] relative left-[890px] -top-[90px]">
        <h1 className='text-xl font-bold '>About</h1>
        <ul className='my-7'>
          {
            menuItems.map((items, i) => {
              return (
                <li className='my-4' key={i}>{items}</li>
              )
            })
          }
        </ul>
      </div>


      {/* list 2 */}
      <div className=" w-[152px] h-[244px] relative left-[1120px] -top-[335px]">
        <h1 className='text-xl font-bold '>Community</h1>
        <ul className='my-3'>
          {
            menuItems2.map((items, i) => {
              return (
                <li className='my-7' key={i}>{items}</li>
              )
            })
          }
        </ul>
      </div>

      {/* list 3 */}
      <div className="w-[152px] h-[244px] relative left-[1340px] -top-[581px]">
        <h1 className='text-xl font-bold '>Socials</h1>
        <ul className='my-3'>
          {
            menuItems3.map((items, i) => {
              return (
                <li className='my-7' key={i}>{items}</li>
              )
            })
          }
        </ul>
      </div>


      <div className="w-[1460px] -mt-[540px] mx-[40px] bg-gray-400  border ">
      </div>

      <div className="my-7 mx-11 flex">
        <h1 className='text-black text-[18px]'>©2022 MORENT. All rights reserved</h1>
        <div className=" flex justify-end absolute top-[396px ] left-[1170px] ">
          <p className='font-semibold'>Privacy & Policy</p>
          <p className='mx-28 font-semibold'>Terms & Condition</p>
        </div>
      </div>
    </div>


  )
}
