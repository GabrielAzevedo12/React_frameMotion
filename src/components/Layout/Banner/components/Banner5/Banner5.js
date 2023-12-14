import React from "react";
import './css/Banner5.css';
import SubBanner from "../../subBanner/subBanner";
import BannerGeral from "../../BannerGeral/BannerGeral";

const Banner5 = () => { 
  /*
  <div className="Banner5_Container Banner Banner5">
            <SubBanner BannerPai="Banner5" indexItem={1} className=""/>
            <SubBanner BannerPai="Banner5" indexItem={2} className=""/>
            <SubBanner BannerPai="Banner5" indexItem={3} className=""/>
          </div>
  */
    return ( 
      <BannerGeral BannerName="Banner5">
        <SubBanner BannerPai="Banner5" indexItem={1} className=""/>
        <SubBanner BannerPai="Banner5" indexItem={2} className=""/>
        <SubBanner BannerPai="Banner5" indexItem={3} className=""/>
      </BannerGeral>
        );
}

export default Banner5