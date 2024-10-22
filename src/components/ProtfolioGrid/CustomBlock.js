import React, { useState } from 'react';
import { Accordion, Button, Form } from 'react-bootstrap';
import { AiOutlineDeleteRow , AiFillEdit} from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";

const CustomBlog = ({ title, setTitle, cards, setCards }) => {
    const [hover, setHover] = useState(false);
    const handleImageUpload = (index, e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newCards = [...cards];
                newCards[index].imageUrl = reader.result;
                setCards(newCards);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (index, field, value) => {
        const newCards = [...cards];
        newCards[index][field] = value;
        setCards(newCards);
    };

    const addNewCard = () => {
        setCards([
            ...cards,
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
    };

    return (
        <div>
            <div className='heading__title'>
                <Form.Label>Top Title Address</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Top title"
                    name='title'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </div>

            <div className='add__image__area'>
                <Accordion defaultActiveKey="0">
                    {cards.map((card, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header>
                                <span 
                                     style={{
                                        display:"flex",
                                        alignItems:"center",
                                        gap:"10px"
                                      }}
                                >

                                <> 
                                Image Card {index + 1}  
                                </>
                                <BiSolidEdit  size={24}  style={{
                                    color: "#0244a5"
                                    
                                }} 
                                /> 
                                <AiOutlineDeleteRow size={24} style={{
                                    color: "#f00"
                                    
                                }} 
                                />
                                {/* <AiOutlineDeleteRow size={24} style={{
                                    color: hover ? 'blue' : 'red',
                                    transition:"all .50s ease"
                                    
                                }} 
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                                />  */}
                                </span>
                                </Accordion.Header>
                            <Accordion.Body>
                                <Form.Group controlId="imageUpload">
                                    <Form.Label>Upload Image or Use Image URL</Form.Label>

                                    <Form.Control
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageUpload(index, e)}
                                    />

                                    <div className="my-3 text-center">OR</div>

                                    <Form.Control
                                        type="text"
                                        placeholder="Enter image URL"
                                        value={card.imageUrl}
                                        onChange={(e) => handleInputChange(index, 'imageUrl', e.target.value)}
                                    />

                                    <Form.Control
                                        className='mt-5'
                                        type="text"
                                        placeholder="Enter image alt"
                                        value={card.alt}
                                        onChange={(e) => handleInputChange(index, 'alt', e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="imageTitle" className="mt-3">
                                    <Form.Label>Image Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter image title"
                                        value={card.imageTitle}
                                        onChange={(e) => handleInputChange(index, 'imageTitle', e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="description" className="mt-3">
                                    <Form.Label>Image Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Enter image description"
                                        value={card.description}
                                        onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="imageHeight" className="mt-3">
                                    <Form.Label>Image Height ({Math.round((card.imageHeight))} px)</Form.Label>
                                    <Form.Range
                                        min={140}
                                        max={500}
                                        value={card.imageHeight}
                                        onChange={(e) => handleInputChange(index, 'imageHeight', e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="imageWidth" className="mt-3">
                                    <Form.Label>Image Width ({Math.round((card.imageWidth) )} px)</Form.Label>
                                    <Form.Range
                                        min={250}
                                        max={500}
                                        value={card.imageWidth}
                                        onChange={(e) => handleInputChange(index, 'imageWidth', e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="borderRadius" className="mt-3">
                                    <Form.Label>Border Radius ({card.borderRadius} px)</Form.Label>
                                    <Form.Range
                                        min={0}
                                        max={100}
                                        value={card.borderRadius}
                                        onChange={(e) => handleInputChange(index, 'borderRadius', e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="opacity" className="mt-3">
                                    <Form.Label>Opacity ({card.opacity}% )</Form.Label>
                                    <Form.Range
                                        min={0}
                                        max={100}  // Adjusted range to 0-100%
                                        value={card.opacity}
                                        onChange={(e) => handleInputChange(index, 'opacity', e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="grayscale" className="mt-3">
                                    <Form.Label>Grayscale ({card.grayscale}% )</Form.Label>
                                    <Form.Range
                                        min={0}
                                        max={100}
                                        value={card.grayscale}
                                        onChange={(e) => handleInputChange(index, 'grayscale', e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="zoom" className="mt-3">
                                    <Form.Label>Zoom ({card.zoom}% )</Form.Label>
                                    <Form.Range
                                        min={0}
                                        max={100}
                                        value={card.zoom}
                                        onChange={(e) => handleInputChange(index, 'zoom', e.target.value)}
                                    />
                                </Form.Group>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="d-grid gap-2 mt-5">
                    <Button variant="primary" size="lg" onClick={addNewCard}>
                        Add more Image Card
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CustomBlog;
