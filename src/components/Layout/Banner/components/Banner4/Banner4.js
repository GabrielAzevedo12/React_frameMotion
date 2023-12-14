import React from "react";
import './css/Banner4.css';
import SubBanner from "../../subBanner/subBanner";
import BannerGeral from "../../BannerGeral/BannerGeral";

const Banner4 = () => { 
    return ( 
          <BannerGeral BannerName="Banner4">
            <SubBanner BannerPai="Banner4" indexItem={1} className=""/>
            <SubBanner BannerPai="Banner4" indexItem={2} className=""/>
            <SubBanner BannerPai="Banner4" indexItem={3} className=""/>
          </BannerGeral>
        );
}

export default Banner4