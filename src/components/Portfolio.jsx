import React from "react";
import project1 from "../assets/project1.png";
import project3 from "../assets/Weather.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      name: "Restaurant website",
      image: project1,
      demo: "https://github.com/Mdfarhan9304/Restaurant-website",
      live: "https://restaurant-portfolios.netlify.app/",
    },
    {
      id: 4,
      name: "Shopper ecommerce app",
      image: project4,
      demo: "https://github.com/Mdfarhan9304/Shopper",
      live: "https://imaginative-sunshine-4e1440.netlify.app/",
    },
 
    {
      id: 3,
      name: "Weather App",
      image: project3,
      demo: "https://github.com/Mdfarhan9304/Weatherapp",
      live: "https://weather-app-portfolio.netlify.app/",
    },
    {
      id: 4,
      name: "Portfolio website",
      image: project2,
      demo: "/",
      live: "/",
    },
  ];
  return (
    <div name="Projects" className="w-full md:h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold border-b-4 border-orange-300 p-2 inline text-orange-500 ">
            Work
          </p>
          <p className="py-6">Checkout some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {data.map(({ id, name, image, demo, live }) => (
            <div
            style={{backgroundImage: `url(${image})`}}
              className="shadow-lg shadow-orange-500 group container rounded-md  mx-auto content-div  flex justify-center  items-center"
            >
              <div
                key={id}
                className="opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center  duration-300"
              >
          
                <span className="text-2xl font-bold text-orange-500  tracking-wider">
                  {name}
                </span>
                <div className="pt-8 text-center   ">
                  <a href={live}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white shadow-md shadow-black text-black font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href={demo}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white shadow-md shadow-black text-black font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}

    
         
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
