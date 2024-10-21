import React, { useState } from 'react';
import ProtfolioBlock from './ProtfolioBlock';
import CustomBlock from './CustomBlock';

const MainGrid = () => {
  const [title, setTitle] = useState("Page Title Here"); 
  const [cards, setCards] = useState([ 
    {
      imageUrl: 'http://placehold.it/200x200',
      alt: 'image alt ',
      imageTitle: 'Image title',  
      description: ' Here Image Short Description', 
      imageHeight: 140,
      imageWidth: 250,
      borderRadius: 0,
      opacity: 100,
      zoom: 0,
      grayscale: 0
    }
  ]);

  return (
    <div className='protfoli__grid'>
      <div className='custom_grid'>
        <CustomBlock 
          title={title} 
          setTitle={setTitle} 
          cards={cards} 
          setCards={setCards}
        />
      </div>
      
      <div className='protfolio_grid'>
        <ProtfolioBlock 
          title={title} 
          cards={cards} 
        />
      </div>
    </div>
  );
};

export default MainGrid;
