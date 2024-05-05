import React from "react";
import  heroimage from '../../assets/heroimage.png'
import Styles from './Hero.module.css'

function Hero(){
    return (

        <div className={Styles.hero}> <img src={heroimage} alt="hero" /></div>  
    );
}

export default Hero