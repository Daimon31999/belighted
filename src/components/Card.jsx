import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card({ icon, title, text, style }) {
  return (
    <div className={`${style} flex flex-col justify-center items-center mx-4`}>
      <FontAwesomeIcon icon={icon} className="text-6xl text-ocean" />
      <h3 className="text-2xl mt-4 mb-6 font-bold text-center">{title}</h3>
      <p className="text-center font-light" style={{ color: "#a4abae" }}>{text}</p>
    </div>
  )
}
