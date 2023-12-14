import React, { Fragment } from "react";
import './css/subBanner.css';
import { $ } from "../../../funçoes/funçoes";

const SubBanner = ( props ) => { 
   const 
   className =`${props.BannerPai}_subBanner subBanner ${props.className}`,
   id = `${props.BannerPai}_subBanner${props.indexItem}`;

    return ( 
          <div 
          id={id}
          className={className}
          onClick={props.events ? props.events.onClick : undefined}
          onMouseOver={props ? props.onMouseOver : undefined }
          onMouseOut={props ? props.onMouseOut : undefined } >
            {props.children}
          </div>
        );
}

export default SubBanner

 /*
    const
    className = props.BannerPai + "Container_SubBanner1 " + 
    props.BannerPai + "SubBanner1 SubBanner " + props.className;

    (() => {

     if(document.body.getAttribute("permissao_event_banner") === "true") {

     const element = $(`#${id}`);
     console.log(element)
     if(props.events) {
  
      for ( const event of props.events ) {
  
        if (event) {
          element.addEventListener(event.typeEvent, event.functionEvent)
        }
  
       }
       
     }

     }

    })()
    */