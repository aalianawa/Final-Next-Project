import React from "react";
import Image from "next/image";
import Design from "../../asets/images/Design.svg";
import line from "../../asets/images/line.svg";
import sceince from "../../asets/images/computer-sceince.svg";
import Bussniess from "../../asets/images/Bussniess.svg";
import Vector from "../../asets/images/Vector.png";






const MainSection = () => {
  return (
    <div className="container ">
      <div className="text-center mt-5 ">
        <h2 className="text-center heading-title">Most popular courses</h2>
        <Image src={line} alt="line" className="line" />
      </div>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div>
          <Image src={Design} width={400} alt="" className="img-fluid" />
          <h4 className="font">User experience design</h4>
          <span className="yellow">SEE COURSE GUIDE</span>
          <Image src={Vector}  width={10} alt="" className="" />
        </div>

        <div>
          <Image
            src={sceince}
            width={400}
            alt="library-img"
            className="img-fluid"
          />
          <h4 className="font">Computer science</h4>
          <span className="yellow">SEE COURSE GUIDE</span>
          <Image src={Vector}  width={10} alt="" className="" />
        </div>
        <div>
          <Image src={Bussniess} width={400} alt="" className="img-fluid" />
          <h4 className="font">Business management</h4>
          <span className="yellow fst-5">SEE COURSE GUIDE</span>
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

export default MainSection;
