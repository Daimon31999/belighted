import React from "react"
import '../assets/css/style.css'
import Header from "../components/Header"
import HeaderHeroCarousel from "../components/HeaderHeroCarousel"
import WhatWeDo from "../components/WhatWeDo"
import HowWeWork from "../components/HowWeWork"
import FooterTop from "../components/FooterTop"


export default function Home() {
  return (
    <div className="box-border flex flex-col justify-center">
      <Header />
      <HeaderHeroCarousel />
      <WhatWeDo />
      <HowWeWork />
      <FooterTop />
    </div>
  )
}
