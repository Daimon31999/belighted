import React from 'react'
import Card from '../components/Card'

import { faChessKnight } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faMobile } from '@fortawesome/free-solid-svg-icons'


export default function WhatWeDo() {
  return (
    <div className="absolute h-screen mx-16 mt-24 m-auto" style={{
      top: "100vh"
    }}>
      <div className="flex flex-col">
        <h2 className="m-auto text-5xl mb-10 font-bold">What we do</h2>
        <p className="text-2xl mb-24 text-center font-light">We deliver custom software, SaaS, marketplace on demand. <br />
Our high-impact custom development provides business value.</p>
        <div className="flex flex-row">
          <Card icon={faChessKnight} title="Product Strategy" text="We create beautiful, fast and reliable web apps tailored for your business goals. Building the next big SaaS or marketplace takes different skills, we got you covered." />
          <Card icon={faCode} style="p-10 border-l-2 border-r-2" title="Web Development" text="Whether you have a new product idea or wish to modernize an existing product, we start with strategy.We believe a firm foundation in strategy is key to your product's future success." />
          <Card icon={faMobile} title="Mobile Development" text="We love building beautiful mobile apps that will delight your customers. We have experience in building native as well as cross-platform apps." />
        </div>
      </div>
    </div>
  )
}
