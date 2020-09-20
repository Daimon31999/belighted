import React from 'react'
import Button from './Button'


export default function FooterForm() {
  return (
    <div>
      <form class="w-full max-w-md">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
              First Name*
            </label>
            <input class="text-xs appearance-none block w-full bg-white text-gray-700 border rounded-md py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Dima" />
            <p class="text-gray-400 text-xs italic">Please fill out this field.</p>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block  tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
              Last Name*
      </label>
            <input class="text-xs appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Hinev" />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
              Email*
            </label>
            <input class="text-xs appearance-none block w-full bg-white text-gray-700 border rounded-md py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="dimahinev31999@gmail.com" />
            <p class="text-gray-400 text-xs italic">Please fill out this field.</p>
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
              Phone number*
            </label>
            <input class="text-xs appearance-none block w-full bg-white text-gray-700 border rounded-md py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="tel" placeholder="06712446" />
            <p class="text-gray-400 text-xs italic">Please fill out this field.</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-white text-xs font-bold mb-2" for="grid-state">
              Country*
      </label>
            <select class="text-xs block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2" id="grid-state">
              <option disabled="true">Please Select</option>
              <option>Belgium</option>
              <option>Texas</option>
              Brazil
              <option>
                Burundi
</option>
              <option>
                Canada
</option>
              <option>
                Central African Republic
</option>
              <option>
                Chad
</option>
              <option>
                Chile
</option>
              <option>
                China
</option>
              <option>
                Cuba
</option>
              <option>
                Czech Republic
</option>
              <option>
                Democratic Republic of the Congo
</option>
              <option>
                Denmark
</option>
              <option>
                Egypt
</option>
              <option>
                Estonia
</option>
              <option>
                Eswatini
</option>
              <option>
                Ethiopia
</option>
              <option>
                Finland
</option>
              <option>
                France
</option>
              <option>
                Germany
</option>
              <option>
                Greece
</option>
              <option>
                Iceland
</option>
              <option>
                India
</option>
              <option>
                Indonesia
</option>
              <option>
                Iran
</option>
              <option>
                Iraq
</option>
              <option>
                Ireland
</option>
              <option>
                Israel
</option>
              <option>
                Italy
</option>
              <option>
                Japan
</option>
              <option>
                Kazakhstan
</option>
              <option>
                Kenya
</option>
              <option>
                North Korea
</option>
              <option>
                South Korea
</option>
              <option>
                Lebanon
</option>
              <option>
                Lesotho
</option>
              <option>
                Libya
</option>
              <option>
                Liechtenstein
</option>
              <option>
                Luxembourg
</option>
              <option>
                Madagascar
</option>
              <option>
                Malaysia
</option>
              <option>
                Mexico
</option>
              <option>
                Moldova
</option>
              <option>
                Monaco
</option>
              <option>
                Myanmar
</option>
              <option>
                Netherlands
</option>
              <option>
                New Zealand
</option>
              <option>
                Niger
</option>
              <option>
                Nigeria
</option>
              <option>
                Northern Cyprus
</option>
              <option>
                Norway
</option>
              <option>
                Pakistan
</option>
              <option>
                Papua New Guinea
</option>
              <option>
                Peru
</option>
              <option>
                Philippines
</option>
              <option>
                Poland
</option>
              <option>
                Portugal
</option>
              <option>
                Qatar
</option>
              <option>
                Republic of Congo
</option>
              <option>
                Romania
</option>
              <option>
                Russia
</option>
              <option>
                Saudi Arabia
</option>
              <option>
                Serbia
</option>
              <option>
                Singapore
</option>
              <option>
                Somalia
</option>
              <option>
                South Africa
</option>
              <option>
                South Sudan
</option>
              <option>
                Spain
</option>
              <option>
                Sri Lanka
</option>
              <option>
                Sweden
</option>
              <option>
                Switzerland
</option>
              <option>
                Syria
</option>
              <option>
                Thailand
</option>
              <option>
                Timor-Leste
</option>
              <option>
                Turkey
</option>
              <option>
                Tuvalu
</option>
              <option>
                United Arab Emirates
</option>
              <option>
                United Kingdom
</option>












































































1.87	United States of America
1.88	Vatican City
1.89	Venezuela
            </select>
            <p class="text-gray-400 text-xs italic">Please select an option from the dropdown menu.</p>

            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>

          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-white text-xs font-bold mb-2" for="grid-state">
              Please provide a brief description of your project*
            </label>
            <textarea rows="10" cols="45" name="text" class="text-xs appearance-none block w-full bg-white text-gray-700 border rounded-md py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></textarea>
            <p class="text-gray-400 text-xs italic mb-6">Please complete this required field.</p>
            <Button href="#" text="Submit" style="flex justify-center bg-ocean border-ocean py-5 px-10 text-base uppercase" />

          </div>
        </div>
      </form>
    </div >
  )
}
