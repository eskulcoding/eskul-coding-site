import { useRef, useState } from "react";

function Card({object}) {
    const [cardWidth, setCardWidth] = useState(null);
    const cardRef = useRef(null);

    setTimeout(() => {
        const cardWidth = cardRef.current && cardRef.current.clientWidth;
        
        setCardWidth(cardWidth * object.percentage / 100);
    }, [cardRef]);
    

    return (
        <div className="w-full flex items-center space-x-2" ref={cardRef}>
            <div className="bg-[#2E2E2E] p-2 rounded text-white " style={{ width : cardWidth }}>
                {object.name} 
            </div>
            <span>
                {object.percentage}%
            </span>
        </div>
    )
}
export default Card;