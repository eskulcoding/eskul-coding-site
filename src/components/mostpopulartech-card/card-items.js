import { useEffect, useRef, useState } from "react";

import Aos from "aos";

function Card({object, parentRef}) {
    const [cardWidth, setCardWidth] = useState(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const cardWidth = cardRef.current && cardRef.current.clientWidth;
        setCardWidth(cardWidth * object.percentage / 100);
    }, [cardRef]);
    
    useEffect(() => {
        Aos.init({duration : 2000})
    }, [])


    // percentage animation
    const [percentageAnimation, setPercentageAnimation] = useState(0);
    let eventTaskEnd = false;

    useEffect(() => {
        const scrollHandler = () => {
            if(window.scrollY >= parentRef.current.offsetTop - 200) {
                let count = 0;
                if(!eventTaskEnd) {
                    const intervalId = setInterval(() => {
                        eventTaskEnd = true;
                        count += 1.1
                        setPercentageAnimation(count.toFixed(2));
            
                        if(count > object.percentage) {
                            setPercentageAnimation(object.percentage)
                            clearInterval(intervalId)
                        }
                    }, 20)
                }
            } else if(window.scrollY < parentRef.current.offsetTop - 300) {
                setPercentageAnimation(0)
                eventTaskEnd = false 
            }
        }

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler)
        }
    }, [])

    return (
        <div className="w-full flex items-center space-x-2 overflow-hidden" ref={cardRef}>
            <div className="p-2 text-white relative" style={{ width : cardWidth && cardWidth }}>
                <div className="w-full h-full bg-[#FA264D] absolute p-2 top-0 right-0 rounded-lg" data-aos='fade-right'></div>
                <span className="z-10 relative">
                    {object.name} 
                </span>
            </div>
            <span>
                {percentageAnimation}%
            </span>
        </div>
    )
}
export default Card;