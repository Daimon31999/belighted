import React from 'react'
import logo from '../assets/img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import ReactTooltip from 'react-tooltip';


export default function Header() {
  return (
    <nav id="myHeader" class={`flex items-center justify-between flex-wrap p-8 uppercase bg-white font-bold`}>
      <div class="flex items-center flex-shrink-0 text-white mr-6 z-40">
        <img src={logo} />
      </div>
      <div class="block lg:hidden z-50">
        <button class="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div class="flex flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="flex justify-end text-sm lg:flex-grow z-40">


          <a data-tip="hi" data-for='myservicies' href="#responsive-header" class="animated-border block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
            Servicies
          </a>
          <a href="#responsive-header" class="animated-border block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
            Clients
          </a>
          <a href="#responsive-header" class="animated-border block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
            About
          </a>
          <a href="#responsive-header" class="animated-border block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
            Resources
          </a>
          <a href="#responsive-header" class="animated-border block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
            Blog
          </a>


        </div>
        <div className="flex justify-center align-center z-40">

          <Button href="#" text="Book a call" style="hover:text-black hover:bg-white mr-4 px-4 py-2" tooltipText="Free Product Development Consultation Call" />
          <Button href="#" text="Estimate Project" style="bg-ocean border-ocean mr-0 px-4 py-2" tooltipText="How much to make an App?" />

          <a data-tip data-for='lang_switcher' data-event='click focus' class="inline-block text-lg px-4 py-2 leading-none text-white mt-4 lg:mt-0 cursor-pointer mr-5">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
          <ReactTooltip place="bottom" textColor='white' backgroundColor='#85ccf6' effect="solid" id='lang_switcher' type='dark' globalEventOff='click' >
            <a className='hover:text-black' href="#">English</a>
            <br />
            <a className='hover:text-black' href="#">Français</a>
          </ReactTooltip>

        </div>

      </div>
    </nav>

  )
}
