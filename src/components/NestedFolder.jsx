import React, { useState } from 'react'

export const NestedFolder = ({explorer}) => {
  const [isClicked, setIsClicked] = useState(false)

  if(explorer?.isFolder){
    return (
      <div style={{ cursor: "pointer" }}>
        <span onClick={()=>setIsClicked(!isClicked)}>{explorer?.name}</span>
        <br />
        <div style={{ display: isClicked ? "block" : "none", marginLeft: "40px" }}>
          { explorer?.items.map((files)=> <NestedFolder key={files} explorer={files} /> ) }
        </div>
      </div>
    )
  } else {
    return <div key={explorer?.name}>{explorer.name}</div>
  }


}
