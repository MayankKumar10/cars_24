import React, { useEffect, useState } from 'react'

export const TraficLight = ({LightJSON}) => {
  const [currentColor, setCurrentColor] = useState("red")

  useEffect(()=>{
    let { next, duration } = LightJSON[currentColor]

    let currentTimer = setTimeout(()=> setCurrentColor(next), duration)

    return () => clearTimeout(currentTimer)

  }, [currentColor])


  return (
    <div style={{ display: "flex", width: "100px" ,background: "black", borderRadius: "12px" }}>
      {Object.keys(LightJSON).map((color)=>( <div key={color} style={{ width: "50px", height: "50px", backgroundColor: currentColor === color ? color : "#555", borderRadius: "50%" }}>
      </div> ))}
    </div>
  )
}
