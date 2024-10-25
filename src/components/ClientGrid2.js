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
        <div className="w-[96%] ml-[2%] p-4">

            <div className={`flex  items-center gap-6 scroller overflow-hidden`}>
                <div className="scroll_in">
                {ourCustomersImagesOne &&
          ourCustomersImagesOne.map((img, index) => (
                    <div key={index} className="w-72 h-60 pt-8 mx-4 rounded-xl flex-shrink-0 shadow-md shadow-[rgba(2, 49, 168, 0.15)] items-center justify-center bg-white">
                        
                        <div className="h-full flex items-center justify-center">
            
                             <img src={img} />
                        </div>
                    </div>
                    ))}
                
                </div>
            </div>


            <div className={`flex items-center gap-6 mt-4 scroller-1 overflow-hidden`} data-direction="left">
                <div className="scroll_in">
                {ourCustomersImagesTwo &&
          ourCustomersImagesTwo.map((img, index) => (
                    <div key={index} className="w-72 h-60 pt-8 mx-4 rounded-xl flex-shrink-0 shadow-md shadow-[rgba(2, 49, 168, 0.15)] items-center justify-center bg-white">
                        
                        <div className="h-full flex items-center justify-center">
            
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