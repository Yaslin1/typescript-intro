interface TtwoSum {
  num1: number
  num2: number
  message?: string
}

// export const twoSum = (num1: number , num2: number, message?: string) => { //? makes it optional. Too long and will condense
//   return console.log(`this is the sum = ${num1 + num2} here is the message ${message}`)

// }



export const twoSum = (obj: TtwoSum) => { //? makes it optional
  return console.log(`this is the sum = ${obj.num1 + obj.num2} here is the message ${obj.message}`)

}

