import React from "react";
//import FakeText from "../../FakeText/FakeText";
import './css/Banner.css';
import './css/BannerBlank.css'
import Banner1 from "./components/Banner1/Banner1";
import Banner2 from "./components/Banner2/Banner2";
import Banner3 from "./components/Banner3/Banner3";
import Banner4 from "./components/Banner4/Banner4";
import Banner5 from "./components/Banner5/Banner5";
import BannerGeral from "./BannerGeral/BannerGeral";
import styled, {css} from "styled-components";
import { flexColumn as displayColumn } from "../../../propsGerais.css.js";

const BannerContainer = styled.div`
    display: grid;
    grid-template-areas:
    ${ props => css`
    "${props.ItemNull} ${props.ItemNull} ${props.ItemNull} ${props.ItemNull} ${props.ItemNull} ${props.ItemNull}"
    "${props.Item1} ${props.Item1} ${props.Item1} ${props.Item1} ${props.Item1} ${props.Item1}"
    "${props.Item3} ${props.Item2} ${props.Item2} ${props.Item2} ${props.Item2} ${props.Item2}"
    "${props.Item3} ${props.Item4} ${props.Item4} ${props.Item4} ${props.Item4} ${props.Item4}"
    "${props.Item5} ${props.Item4} ${props.Item4} ${props.Item4} ${props.Item4} ${props.Item4}"` };
    gap: 10px;

    @media (max-width: 760px) {
    display: grid;
    grid-template-areas:
    ${ props => css`
    "${props.ItemNull}"
    "${props.Item1}"
    "${props.Item2}"
    "${props.Item3}"
    "${props.Item4}"
    "${props.Item5}"` };
    grid-template-columns: 1fr;
    }
    
    @media (max-width: 425px) {
      ${displayColumn}
      }`

const Banner = ( props ) => { 

    return ( 
      <BannerContainer ItemNull="BannerBlank" Item1="Banner1" Item2="Banner2" Item3="Banner3" Item4="Banner4" Item5="Banner5">
            <BannerGeral BannerName="BannerBlank" />
            <Banner1/>
            <Banner2/>
            <Banner3/>
            <Banner4/>
            <Banner5/>
      </BannerContainer>
        );
}

/*

<div className="Banner_Container Banner">
            <BannerGeral BannerName="BannerBlank" />
            <Banner1/>
            <Banner2/>
            <Banner3/>
            <Banner4/>
            <Banner5/>
          </div>

<BannerGeral className="Banner_Container Banner">
  <BannerGeral className="Banner1_Container Banner1">
  <BannerGeral className="Banner2_Container Banner2">
  <BannerGeral className="Banner3_Container Banner3">
  <BannerGeral className="Banner4_Container Banner4">
</BannerGeral>

<div className="Banner_Container Banner">
            <BannerGeral className="BannerBlank_Container BannerBlank"/>
            <Banner1/>
            <Banner2/>
            <Banner3/>
            <Banner4/>
            <Banner5/>
          </div>
 */

export default Banner