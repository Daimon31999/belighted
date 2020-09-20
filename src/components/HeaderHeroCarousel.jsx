import React from 'react'
import './css/Carousel.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';


import img1 from '../assets/img/saas_development_agency.webp'
import img2 from '../assets/img/software_products.webp'
import 'pure-react-carousel/dist/react-carousel.es.css';

import Button from './Button'



export default function MyCarousel() {
  return (

    <div className="absolute top-0 w-full h-screen font-bold">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={2}
        isPlaying={false}
        infinite={true}

      >
        <div className="w-full bg-cover h-screen bg-dark absolute top-0"></div>
        <Slider
          classNameHidden="slider-switch-animation-hidden"
          classNameVisible="slider-switch-animation-visible"
          classNameAnimation="slider-switch-animation"
        >

          <Slide index={0}>
            <div className="flex flex-row items-center justify-between w-full bg-cover h-screen relative">
              <ButtonBack className="z-50">
                <img className=" m-8 w-12 h-12 z-50" src="https://cdn2.hubspot.net/hubfs/273774/mp/themes/Act-Theme/images/act-arrow-prev-white.svg" />
              </ButtonBack>
              <div className="banner-text flex flex-col text-6xl z-50 text-white opacity-100 text-center">
                <h1 style={{ lineHeight: 1.1, marginBottom: "0.35rem", letterSpacing: "-.05em" }}>
                  SaaS Development
                  <br />
                  Agency
                </h1>
                <p className="text-xl">We help Startups, Scale ups & Software Publishers deliver a revolutionary digital product loved by their clients.</p>
                <div className="flex flex-row justify-center">
                  <Button href="#" text="Estimate Project" style="bg-ocean border-ocean mr-4 py-5 px-10 text-base uppercase" />
                  <Button href="#" text="Book a call" style="text-ocean py-5 px-10 text-base hover:text-white hover:bg-ocean border-ocean" />
                </div>

              </div>
              <ButtonNext className="z-50">
                <img className=" m-8 w-12 h-12 z-50" src="https://cdn2.hubspot.net/hubfs/273774/mp/themes/Act-Theme/images/act-arrow-next-white.svg" />
              </ButtonNext>
            </div>
            <img className="slider-img w-full object-cover h-screen opacity-25 absolute top-0" src={img1} alt="" />
          </Slide>
          <Slide index={1}>
            <div className="flex flex-row items-center justify-between w-full bg-cover h-screen relative">
              <ButtonBack className="z-50">
                <img className=" m-8 w-12 h-12 z-50" src="https://cdn2.hubspot.net/hubfs/273774/mp/themes/Act-Theme/images/act-arrow-prev-white.svg" />
              </ButtonBack>
              <div className="banner-text flex flex-col text-6xl z-50 text-white opacity-100 text-center">
                <h1 style={{ lineHeight: 1.1, marginBottom: "0.35rem", letterSpacing: "-.05em" }}>
                  Better Software
                  <br />
                  Products. Faster.
                </h1>
                <p className="text-xl">Let’s build a software product that will grow your business and will delight your users.</p>
                <div className="flex flex-row justify-center">
                  <Button href="#" text="Estimate Project" style="bg-ocean border-ocean mr-4 py-5 px-10 text-base uppercase" />
                  <Button href="#" text="Book a call" style="text-ocean py-5 px-10 text-base hover:text-white hover:bg-ocean border-ocean" />
                </div>

              </div>
              <ButtonNext className="z-50">
                <img className=" m-8 w-12 h-12 z-50" src="https://cdn2.hubspot.net/hubfs/273774/mp/themes/Act-Theme/images/act-arrow-next-white.svg" />
              </ButtonNext>
            </div>
            <img className="slider-img absolute top-0 opacity-50 w-full object-cover h-screen absolute top-0" src={img2} alt="" />
          </Slide>

        </Slider>

      </CarouselProvider>
    </div>
  )
}
