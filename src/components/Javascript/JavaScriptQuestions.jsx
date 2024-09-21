import React from 'react'

export const JavaScriptQuestions = () => {

  /*

  
  2 sums array

  Array sorting
  count the duplicate in array
  consecutive character in array

  flatten array with depth

  bind, filter, reduce, map

  curring

  prime number

  flatten object


  */



  let TwoSum = (arr, num) => {
    let arrNew = new Map()
    
    for(let i=0; i< arr.length; i++){
      let remaining = num - arr[i]

      if(arrNew.has(remaining)){
        return [arrNew.get(remaining), i]
      } else {
        arrNew.set(arr[i], i)
      }
      return []
    }
  }

  console.log("TwoSum", TwoSum([1,2,3,4,5,6,7,8,9,10], 10))


  let ArrOfTwoSum = (arr, num) => {
    let newArr = []

    for(let i=0; i< arr.length; i++){
      for(let j=i+1; j< arr.length; j++){
        if(num === arr[i] + arr[j]){
          newArr.push([arr[i], arr[j]])
        }
      }
    }
    return newArr
  }

  console.log("ArrOfTwoSum", ArrOfTwoSum([1,2,3,4,5,6,7,8,9,10], 10))

  let newFunctionOperation = {
    total: 0,

    add: function(num){
      this.total += num
      return this
    },

    multi: function(num){
      this.total *= num
      return this
    },

    subtract: function(num){
      this.total -= num
      return this
    },

    division: function(num){
      this.total /= num
      return this
    },

    print: function(){
      return this.total
    }
  }

  console.log("newFunctionOperation", newFunctionOperation.add(5).multi(10).subtract(10).division(4).print())





  return (
    <div>
      <h4>JavaScriptQuestions</h4>
    </div>
  )
}
