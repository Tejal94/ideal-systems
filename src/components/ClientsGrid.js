// import React from "react";
// import { ourCustomersImagesOne, ourCustomersImagesTwo } from "../Constants";

// const ClientsGrid = () => {
//   return (
//     <>
//       <div className="carousel flex rounded-box">
//         {ourCustomersImagesOne &&
//           ourCustomersImagesOne.map((img) => (
//             <div className="carousel-item shadow-md shadow-[rgba(2, 49, 168, 0.15)] rounded-[30px] p-5 justify-center bg-white m-3 w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]">
//               <img src={img} className="self-center" />
//             </div>
//           ))}
//       </div>
//       <div className="carousel flex flex-row-reverse rounded-box">
//         {ourCustomersImagesTwo &&
//           ourCustomersImagesTwo.map((img) => (
//             <div className="carousel-item shadow-md shadow-[rgba(2, 49, 168, 0.15)] rounded-[30px] p-5 justify-center bg-white m-3 w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]">
//               <img src={img} className="self-center" />
//             </div>
//           ))}
//       </div>
//     </>
//   );
// };

// export default ClientsGrid;

import React, { useEffect, useRef } from "react";
import { ourCustomersImagesOne, ourCustomersImagesTwo } from "../Constants";
import "./ClientGrid.css"; // Assuming this contains necessary styles

const ClientsGrid = () => {
  const carouselOneRef = useRef(null);
  const carouselTwoRef = useRef(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (carouselOneRef.current && carouselTwoRef.current) {
        // Slide for carousel one
        carouselOneRef.current.style.transition = "transform 1s ease";
        carouselOneRef.current.style.transform = "translateX(-100%)";

        setTimeout(() => {
          // Move the first item to the end
          carouselOneRef.current.appendChild(carouselOneRef.current.firstElementChild.cloneNode(true));
          carouselOneRef.current.firstElementChild.remove();
          carouselOneRef.current.style.transition = "none";
          carouselOneRef.current.style.transform = "translateX(0)";
        }, 1000);

        // Slide for carousel two
        carouselTwoRef.current.style.transition = "transform 1s ease";
        carouselTwoRef.current.style.transform = "translateX(100%)";

        setTimeout(() => {
          // Move the last item to the beginning
          const lastItem = carouselTwoRef.current.lastElementChild.cloneNode(true);
          carouselTwoRef.current.insertBefore(lastItem, carouselTwoRef.current.firstElementChild);
          carouselTwoRef.current.lastElementChild.remove();
          carouselTwoRef.current.style.transition = "none";
          carouselTwoRef.current.style.transform = "translateX(0)";
        }, 1000);
      }
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <div ref={carouselOneRef} className="carousel carousel-one flex rounded-box overflow-hidden">
        {ourCustomersImagesOne &&
          ourCustomersImagesOne.map((img, index) => (
            <div
              key={index}
              className="carousel-item shadow-md shadow-[rgba(2, 49, 168, 0.15)] rounded-[30px] p-5 justify-center bg-white m-3 w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]"
            >
              <img src={img} className="self-center" alt="customer-logo" />
            </div>
          ))}
      </div>
      <div ref={carouselTwoRef} className="carousel carousel-two flex flex-row-reverse rounded-box overflow-hidden">
        {ourCustomersImagesTwo &&
          ourCustomersImagesTwo.map((img, index) => (
            <div
              key={index}
              className="carousel-item shadow-md shadow-[rgba(2, 49, 168, 0.15)] rounded-[30px] p-5 justify-center bg-white m-3 w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]"
            >
              <img src={img} className="self-center" alt="customer-logo" />
            </div>
          ))}
      </div>
    </>
  );
};

export default ClientsGrid;


