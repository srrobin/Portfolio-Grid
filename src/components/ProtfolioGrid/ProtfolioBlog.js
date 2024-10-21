
import React from 'react';

const ProtfolioBlog = ({ title, cards }) => {
    console.log("🚀 ~ ProtfolioBlog ~ cards:", cards)
    const placeholderImage = "http://placehold.it/200x200";
    return (
        <>
            <div className='grid__title'>{title}</div>
            <div className='grid__image'>
            {cards.map((card, index) => ( 

                     <div className='single__grid__card' key={index}>
                        <figure> 
                        <img 
                         src={card.imageUrl || placeholderImage}
                         alt={card.alt || 'Portfolio Image'}
                         style={{
                            height: `${card.imageHeight}px`,
                            width: `${card.imageWidth}px`,
                            borderRadius: `${card.borderRadius}px`,
                            objectFit: 'cover',
                            // opacity:`${card.opacity}`,
                            opacity: card.opacity / 100,
                            filter: `grayscale(${card.grayscale})`,
                            transition: 'transform 0.3s ease-in-out', 
                            // transform: `scale(${card.zoom})` 
                           
                         }}
                         />
                       </figure>

                        <div className='grid__card__title'>{card.imageTitle}</div>
                        <div className='grid__card__disc'>{card.description}</div>
                    </div>
            ))}
            </div>
        </>
    );
};

export default ProtfolioBlog;