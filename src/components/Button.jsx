import React from 'react'
import moduleStyle from './css/Button.module.css'
import ReactTooltip from 'react-tooltip';


function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default function Button({ href, text, style, tooltipText }) {

  const id = makeid(5)

  let resultClass

  resultClass = `${style} inline-block text-white text-sm leading-none border-2 rounded-md hover:border-transparent mt-4 lg:mt-0`
  return (
    <div class={moduleStyle.button}>
      <a href={href} class={resultClass} data-tip={tooltipText} data-for={id}>
        {text}
      </a>
      <ReactTooltip id={id} className="custom-color-no-arrow normal-case" textColor='white' backgroundColor='#85ccf6' effect='solid' />

    </div>
  )
}
