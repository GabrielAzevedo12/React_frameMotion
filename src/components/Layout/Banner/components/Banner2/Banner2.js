import React from "react";
import './css/Banner2.css';
import SubBanner from "../../subBanner/subBanner";
import BannerGeral from "../../BannerGeral/BannerGeral";

const Banner2 = () => { 
  /*
  <div className="Banner2_Container Banner Banner2">
            <SubBanner BannerPai="Banner2" indexItem={1} className=""/>
            <SubBanner BannerPai="Banner2" indexItem={2} className=""/>
            <SubBanner BannerPai="Banner2" indexItem={3} className=""/>
          </div>
   */
    return ( 
          <BannerGeral BannerName="Banner2">
            <SubBanner BannerPai="Banner2" indexItem={1} className=""/>
            <SubBanner BannerPai="Banner2" indexItem={2} className=""/>
            <SubBanner BannerPai="Banner2" indexItem={3} className=""/>
          </BannerGeral>
        );
}

export default Banner2