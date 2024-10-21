import React, { useState } from 'react';
import ProtfolioBlog from './ProtfolioBlog';
import CustomBlog from './CustomBlog';

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
        <CustomBlog 
          title={title} 
          setTitle={setTitle} 
          cards={cards} 
          setCards={setCards}
        />
      </div>
      
      <div className='protfolio_grid'>
        <ProtfolioBlog 
          title={title} 
          cards={cards} 
        />
      </div>
    </div>
  );
};

export default MainGrid;
