"use client";
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () =>{

  }
  
  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x" > 
        <h1 className='hero__title'>
          Aluguel de carros em um click.
        </h1>
        <p className='hero__subtitle'>
          Um novo conceito, mais pratico, mais economico, feito pra você.
        </p>  

        <CustomButton 
          btnType='button'
          title = "Explorar Carros"
          containerStyles = "bg-primary-blue text-white rounded-full mt-10" 
          handleClick = {handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image  src="/hero.png" alt ="hero" fill className ="object-contain"/>
        </div>
          <div className="hero__image-overlay"></div>
      </div>

    </div>
  )
}

export default Hero