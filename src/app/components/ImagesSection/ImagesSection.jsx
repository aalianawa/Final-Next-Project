import React from "react";
import "./imagesSection.css";
import Image from "next/image";
import line from "../../asets/images/line.svg";
import girl from "../../asets/images/girl.svg";
import library from "../../asets/images/library.svg";
import istocks from "../../asets/images/istockphoto-1254127323-170667a.svg"

import Vector from "../../asets/images/Vector.png"

const ImagesSection = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="text-center heading-title">Top ranking universities</h2>
        <Image src={line} alt="line" className="line" />
      </div>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div>
          <Image src={girl} width={400} alt="girl-img" className="img-fluid" />
          <h4  className="font">Stanford University</h4>
          <span className="yellow">SEE UNIVERSITY</span>
          <Image src={Vector}  width={10} alt="" className="" />
        </div>

        <div>
          <Image src={library} width={400} alt="library-img" className="img-fluid" />
          <h4 className="font">Stallion University</h4>
          <span className="yellow">SEE UNIVERSITY</span>
          <Image src={Vector}  width={10} alt="" className="" />
        </div>
        <div>
          <Image src={istocks} width={400} alt="" className="img-fluid" />
          <h4  className="font">Covenant University</h4>
          <span className="yellow fst-5">SEE UNIVERSITY</span>
          <Image src={Vector} width={10} alt="" className="" />
        </div>

      </div>

      <div className="text-center">


        <button type="button" class="btn btn-button-color">SEE ALL
          <Image src={Vector} alt="" className="" />
        </button>


      </div>

    </div>
  );
};

export default ImagesSection;
