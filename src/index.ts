/***
 * 2 ways for typescript to add type
 * 1.Implicit 
 * 2.Explicit
 */


//Implicit

let fName = "Yaslin" // string

//fName = 1234 //fail

//Explicit
let lName: string | number | boolean | undefined = "Sanchez"

lName = 3445
lName = false
lName = undefined

import { twoSum } from "./typePractice"

twoSum({num1: 5, num2: 9, message: "this is "})