import React from "react";

function Brands() {
  return (
    <div className="flex min-h-screen relative">
      <div className="absolute -right-63 top-1/2 -translate-y-1/2 rotate-90 origin-center text-black font-extrabold text-[80px] whitespace-nowrap">
        WORKED WITH
      </div>
      <main className="flex-1 bg-white text-black py-[10vh]  mr-30 relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 ">
          {logo.map((brand, i) => (
            <div key={i} className=" flex items-center justify-center">
              <div className="bg-gray-300 rounded-2xl shadow-lg shadow-gray-400/50 transition-transform duration-300 ease-in-out hover:scale-105 ">
                <img
                  src={brand.img}
                  alt={`brand-${i}`}
                  className={`w-60 h-60  object-contain transition-transform duration-300 ease-in-out hover:scale-120 ${brand.style}`}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

const logo = [
  { name: "1ClubNepal", img: "/Clients/1cn.png" },
  { name: "Benny", img: "/Clients/bennys.png" },
  {
    name: "Asian Geographical",
    img: "/Clients/asian-geo.png",
  },
  {
    name: "Everest Mortgages & Wealth Management",
    img: "/Clients/everest-mort.jpg",
    style: "h-60 w-60 rounded-2xl",
  },
  { name: "Invade Marketing", img: "/Clients/invade.png" },
  { name: "KTM-Zone", img: "/Clients/ktm-zone.png" },
  { name: "Drop of Everest", img: "/Clients/DROP OF EVEREST.png" },
  { name: "ET Recruitment", img: "/Clients/ET Rec Logo.png" },
  { name: "Gurkha", img: "/Clients/gs.png" },
  { name: "Hamro Mortgages", img: "/Clients/hamro.png" },
  { name: "Gurkha", img: "/Clients/hari buda magar.png" },
  { name: "Gurkha", img: "/Clients/harley.png" },
  { name: "Gurkha", img: "/Clients/simba.png", style: "h-60 w-60 rounded-2xl" },
  { name: "Gurkha", img: "/Clients/nbd.png" },
  { name: "Gurkha", img: "/Clients/NEPAL FOOD.png" },
  { name: "Gurkha", img: "/Clients/okksk.jpg", style: "h-60 w-60 rounded-2xl" },
  { name: "Gurkha", img: "/Clients/Nepali-Beer-Logo.png" },
  { name: "Gurkha", img: "/Clients/spark.png" },
  { name: "Gurkha", img: "/Clients/sushiisii.png" },
];

export default Brands;
