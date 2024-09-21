import React, { useState } from 'react'

export const NestedCheckboxOne = ({carData}) => {
  const[selectCarMap, setSelectedCarMap] = useState({})

  let selectedCar = (brand, car) => {
    let newCarMap = {...selectCarMap }

    if(!newCarMap[brand]){
      newCarMap[brand] = []
    } else if(newCarMap[brand]?.includes(car)) {
      newCarMap[brand] = newCarMap[brand].filter((c)=> c!==car)
    } else {
      newCarMap[brand] = [...newCarMap[brand], car]
    }
    setSelectedCarMap(newCarMap)
  }

  let selectedBrand = (brand) => {
    setSelectedCarMap((prev)=>{
      let allCars = carData?.find((c)=> c.brand === brand)?.cars || []

      let newMap = {...prev }

      if(prev[brand]?.length === allCars?.length){
        delete newMap[brand]
      } else {
        newMap[brand] = allCars
      }

      return newMap
    })
  }

  return (
    <div>
      {carData?.map((data)=>(
        <div key={data}>
          <input 
          type="checkbox" 
          checked={selectCarMap[data?.brand]?.length === data?.cars?.length}
          onChange={()=>selectedBrand(data?.brand)}
           />
           {data?.brand}
           {data.cars.map((car)=>( 
            selectCarMap[data?.brand] && <div key={car} style={{marginLeft:"40px"}}>
              <input 
              type="checkbox" 
              checked={selectCarMap[data.brand]?.includes(car)}
              onChange={()=>selectedCar(data.brand, car)}
              />
              {car}
            </div>
            ))}
        </div>
      ))}
    </div>
  )
}
