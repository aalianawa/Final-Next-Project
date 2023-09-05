import React from 'react'
import './cardParts.css'
import Image from "next/image";
import search from "../../asets/images/search-icon.svg"
import clander from "../../asets/images/solar-clander.svg"
import House from "../../asets/images/print_house.svg"
import vector from "../../asets/images/Vector.png"




const CardList = () => {

  const cardData = [
    {
      id: 1,
      title: 'Find a resource',
      content: 'Search by subject, course  or region to find the right course for you.',
      ImageUrl : search
    
    
    },
    {
      id:2,
      title: 'Find a university',
      content: 'Search for universities to find out about courses and more. ',
      ImageUrl : clander
     
    },
    {
      id:3,
      title: 'Find an open day',
      content: 'Search and book open days to help you make the right choice.',
      ImageUrl : House
     
    },
  ];

  return (
    <div className='container py-5 '>
      <div className="card-background">
        <div class="row py-5 row-cols-2 row-cols-lg-4 gap-4 justify-content-center ">
          {cardData.map((card) => (
            <div className="bg-color" key={card.id}>

              <div class="col d-flex align-items-start">
                <div class="icon-square   d-inline-flex me-3">
                  <Image className='mt-4' src={card.ImageUrl} alt="" />

               
                <div className='py-4'>
                  <h5 className='fw-bold'>{card.title}</h5>
                  <p className='font-size'>{card.content}</p>
                  <span className='yellow '>GET STARTED  
                  <Image className='' src={vector} width={15} alt="" />
                  </span>
                </div>
              </div>
              </div>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
