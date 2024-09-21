import React, { useState } from 'react'

export const NestedCheckbox = ({carData}) => {
  const [selectedCar, setSelectedCar] = useState({})

  let selectCar = (brand, car) => {
    let newCarMap = {...selectedCar}

    if(!newCarMap[brand]){
      newCarMap[brand] = []
    } else if(newCarMap[brand]?.includes(car)){
      newCarMap[brand] = newCarMap[brand].filter((c)=> c !== car)
    } else {
      newCarMap[brand] = [...newCarMap[brand], car]
    }
    setSelectedCar(newCarMap)
  }

  let selectBrand = (brand) => {
    setSelectedCar((prev)=>{
      let allCars = carData?.find((c)=> c.brand === brand)?.cars || []

      let newMap = { ...prev }

      if(prev[brand]?.length === allCars?.length){
        delete newMap[brand]
      } else {
        newMap[brand] = [...allCars]
      }
      return newMap
    })
  }

  console.log("selectedCarsData", {selectedCar, carData})

  return (
    <div style={{color: "white"}}>
        {
          carData?.length > 0 && carData?.map((data, index)=>(
            <div key={data}  style={{color: "white"}}>
              <input 
              type="checkbox" 
              checked={selectedCar[data?.brand]?.length === data?.cars?.length }
              onChange={()=>selectBrand(data?.brand)}
               />
               <span>{data?.brand}</span>
               {data.cars.map((car, i)=>(
                selectedCar[data?.brand] && <div key={i} style={{marginLeft: "40px"}}>
                  <input 
                  type="checkbox" 
                  checked={selectedCar[data?.brand]?.includes(car)}
                  onChange={()=>selectCar(data?.brand, car)}
                   />
                   {car}
                </div> 
               ))}
            </div>
          ))
        }
    </div>
  )
}
