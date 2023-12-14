import React from "react";
//import FakeText from "../../FakeText/FakeText";
import './css/BannerGeral.css';
import { genKey } from "../../../funçoes/genRandomKey";

const BannerGeral = ( props ) => { 
  const 
   className =`${props.BannerName}_Container Banner ${props.className || ""}`,
   id = `${props.BannerName}`;

    return ( 
          <div id={id || "Banner" + genKey(5) } className={className || ""} >
            {props.children}
          </div>
        );
}

export default BannerGeral

/*
onLoad={(e) => {
            console.log(e.target) 
             if(props.event) {

              for ( const event of props.events ) {

                if (event) {
                  e.target.addEventListener(event.typeEvent, event.functionEvent)
                }
  
               }
               
             }
             } }
*/