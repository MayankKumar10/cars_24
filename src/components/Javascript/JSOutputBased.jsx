import React from 'react'

export const JSOutputBased = () => {

  console.log("start")  // 1: Synchronous

  setTimeout(()=> console.log("1"))  // Asynchronous (will go to the task queue)
  
  new Promise(()=> console.log("2"))  // 2: No executor, so just logs synchronously
  
  new Promise((res, rej)=> {
    console.log("3")  // 3: Synchronous
    true ? res("res1") : rej("rej1")
  }).then((res)=>console.log(res))  // Microtask queue: res1
  
  let promise1 = Promise((res,rej)=>{
    console.log("4")  // 4: Synchronous
    if(true){
      console.log("res2 log")  // 5: Synchronous
      res("res2")
    } else {
      rej("rej2")
    }
  })
  promise1()
    .then((res)=>console.log(res))  // Microtask queue: res2
    .catch((err)=>console.log(err))
  
  console.log("log 1")  // 6: Synchronous
  
  let promise2 = Promise((res,rej)=>{
    console.log("5")  // 7: Synchronous
    if(true){
      console.log("res3 log")  // 8: Synchronous
      setTimeout(()=>res("res3"),1000)  // Asynchronous (task queue)
    } else {
      rej("rej3")
    }
  })
  console.log("log2")  // 9: Synchronous
  
  promise2()
    .then((res)=>console.log(res))  // Microtask queue: res3 (after 1000ms delay)
    .catch((err)=>console.log(err))
  
  console.log("log 3")  // 10: Synchronous
  
  new Promise((res,rej) => res(setTimeout(()=>console.log("res5"),1000)))
    .then((res)=>console.log(res))  // Microtask queue: undefined
  
  console.log("end")  // 11: Synchronous
  

  //start, 2, 3 , 4 , res2 log , log 1 , 5 res 3 log , log 2 ,  log 3 ,  end , res1 , res2 ,   1 , res3 , res5 , 


  let arr = []
  arr = []
  arr.push(3)
  arr=[...arr, 4]
  [...arr, 4]
  [...arr, 4, ...arr]
  [...arr, [...arr]]


  return (
    <div>JSOutputBased</div>
  )
}
