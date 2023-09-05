import React from 'react'
import './mainSlide.css'
import Image from "next/image";
import Help from "../../asets/images/Help.svg"
import Mail from "../../asets/images/Mailbox.svg"

const MainSlide = () => {
  return (

    <div className='container'>
      <div className="row featurette mt-5 py-5">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">We're here to help</h2>
          <p className="lead">Read through our FAQs and, if you can't find what <br />
            you're looking for, our experts will be happy to <br /> answer your questions.</p>
          <div className='d-flex'>
           
            <button type="button" class="btn btn-warning text-white fst-4">READ FAQS</button>
            <Image src={Mail} alt="" className="img-fluid mail" />
            <p className='mt-3 lead-2'>ASK A QUESTION</p>
          </div>

        </div>
        <div className="col-md-5 order-md-1">
          <Image src={Help}  alt="" className="img-fluid" />

        </div>
      </div>
    </div>
  )
}

export default MainSlide