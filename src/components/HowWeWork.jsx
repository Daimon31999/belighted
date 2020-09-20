import React from 'react'
import ImageCard from './ImageCard'

import howWeWork1 from '../assets/img/howWeWork1.webp'
import howWeWork2 from '../assets/img/howWeWork2.webp'
import howWeWork3 from '../assets/img/howWeWork3.webp'
import howWeWork4 from '../assets/img/howWeWork4.png'

import Button from '../components/Button'
import BlackButton from '../components/BlackButton'

export default function HowWeWork() {
  return (
    <div className="absolute mt-24 m-auto bg-lite" style={{
      top: "200vh"
    }}>
      <div className="mx-16 mt-24 ">
        <div className="flex flex-col mb-48">
          <h2 className="m-auto text-5xl mb-10 font-bold ">How we work</h2>
          <p style={{
            color: "#a4abae"
          }} className="text-2xl mb-16 text-center font-light px-48">Belighted's signature to deliver next-gen software, faster? <br />
Our 4-stage process to build meaningful digital experiences.</p>
          <div className="flex flex-row">
            <ImageCard image={howWeWork1} style="border-l-2 " titleOne="Strategy Workshop" footerOne="Product Roadmap" footerTwo="1 DAY" titleTwo="1. Challenge your idea" text="Let’s discuss your value proposition, target market and business model and come up together with a product plan you need to achieve your goals." >
              <Button href="#" text="Learn more" style="bg-ocean border-ocean uppercase text-xs font-bold mr-4 px-4 py-2" />
            </ImageCard>
            <ImageCard image={howWeWork2} style="border-l-2" titleOne="Design Sprint" footerOne="Clickable Prototype" footerTwo="1 WEEK" titleTwo="2. Test your idea" text="Let’s spend one intense week during which we will define and design (UX) together a customer-validated clickable prototype of your product.">
              <Button href="#" text="Learn more" style="bg-ocean border-ocean uppercase text-xs font-bold mr-4 px-4 py-2" />
            </ImageCard>
            <ImageCard image={howWeWork3} style="border-l-2 " titleOne="MVP Development" footerOne="Minimum Viable Product" footerTwo="1-2 MONTHS" titleTwo="3. Build your idea" text="Let’s build a functional first version of your product over 4-8 weeks of agile development based on the Design Sprint's user stories & user testing.">
              <Button href="#" text="Learn more" style="bg-ocean border-ocean uppercase text-xs font-bold mr-4 px-4 py-2" />
            </ImageCard>
            <ImageCard image={howWeWork4} style="border-l-2 border-r-2" titleOne="Product Management" footerOne="Development Sprints" footerTwo="ON DEMAND" titleTwo="4. Scale your idea" text="We are your product team on demand improving your software with agile development sprints strategically prioritized on your customers’ needs.">
              <BlackButton href="#" text="Get in touch" style="text-xs hover:text-white hover:bg-black font-bold border-black mr-4 px-4 py-2" />
            </ImageCard>
          </div>
        </div>
      </div>
    </div>
  )
}
