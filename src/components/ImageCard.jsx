import React from 'react'

export default function ImageCard({ children, image, titleOne, titleTwo, footerOne, footerTwo, text, style }) {
  return (
    <div className={`${style} flex flex-col bg-white rounded`}>
      <img class="rounded h-20 " src={image} alt="" />
      <h3 className="text-base mt-10 font-bold text-center">{titleOne}</h3>
      <h4 className="text-sm mb-6 text-center">{titleTwo}</h4>
      <p className="text-xs text-center px-4" style={{ color: "#a4abae", lineHeight: "1.7" }}>{text}</p>
      <div className="mt-6 mb-10 text-center">
        {children}
      </div>
      <div className="border-t" style={{ color: "#a4abae", backgroundColor: "rgba(0,0,0,.02)" }}>

        <h3 className="text-sm mt-4 font-bold text-center">{footerOne}</h3>
        <h4 className="text-xs mb-6  text-center" style={{
          fontSize: '0.5rem',
          letterSpacing: ".3em"
        }}>{footerTwo}</h4>

      </div>
    </div>
  )
}
