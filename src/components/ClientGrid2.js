import React from 'react';
import { useEffect } from 'react';
import { ourCustomersImagesOne, ourCustomersImagesTwo } from "../Constants";

const ClientGrid2 = () => {

    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");
        const scrollers1 = document.querySelectorAll(".scroller-1");

        let addAnimation = () => {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);

                const scrollerInner = scroller.querySelector(".scroll_in");

                const contentWidth = scrollerInner.scrollWidth;
                const animationDuration = contentWidth / 150; // Adjust the divisor as needed
                scroller.style.setProperty('--_animation-duration', `${animationDuration}s`);

            });
        };

        if (!window.matchMedia("(prefers-reduced-motion :reduce)").matches) {
            addAnimation();
        }

        let addAnimation1 = () => {
            scrollers1.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);

                const scrollerInner = scroller.querySelector(".scroll_in");
                const scrollerContent = Array.from(scrollerInner.children);

                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        };

        if (!window.matchMedia("(prefers-reduced-motion :reduce)").matches) {
            addAnimation();
            addAnimation1();
        }
    }, []);

    return (
        <div className="w-full md:w-[96%] ml-0 md:ml-[2%] p-2 md:p-4">

            <div className={`flex items-center gap-2 md:gap-6 scroller overflow-hidden`}>
                <div className="scroll_in"> 
                {ourCustomersImagesOne &&
          ourCustomersImagesOne.map((img, index) => (
                    <div key={index} className="w-52 h-40 md:w-72 md:h-60 pt-2 md:pt-2 mx-4 rounded-xl flex-shrink-0 shadow-md shadow-[rgba(2, 49, 168, 0.15)] items-center justify-center bg-white">
                        
                        <div className="h-full scale-75 md:scale-100 flex items-center justify-center">
                             <img src={img} />
                        </div>
                    </div>
                    ))}
                </div>
            </div>


            <div className={`flex items-center gap-2 md:gap-6 mt-4 scroller-1 overflow-hidden`} data-direction="left">
                <div className="scroll_in">
                {ourCustomersImagesTwo &&
          ourCustomersImagesTwo.map((img, index) => (
                    <div key={index} className="w-52 h-40 md:w-72 md:h-60 pt-2 md:pt-2 mx-4 rounded-xl flex-shrink-0 shadow-md shadow-[rgba(2, 49, 168, 0.15)] items-center justify-center bg-white">
                        
                        <div className="h-full scale-75 md:scale-100 flex items-center justify-center">
            
                             <img src={img} />
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ClientGrid2