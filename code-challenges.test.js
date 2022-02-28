// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("div3", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes a number as an argument and decides if the number is evenly divisble by three or not.", () => {
    const num1 = 15
    // Expected output: "15 is divisible by three"
    const num2 = 0
    // Expected output: "0 is divisible by three"
    const num3 = -7
    // Expected output: "-7 is not divisible by three"

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(div3(num1)).toEqual("15 is divisible by three")
    expect(div3(num2)).toEqual("0 is divisible by three")
    expect(div3(num3)).toEqual("-7 is not divisible by three")
  })
})
// Got RED.
// ReferenceError: div3 is not defined

// b) Create the function that makes the test pass.
// Pseudo Code:
// Create a function named div3
// Takes a number as an argument
// Use a conditional
// return the number and decide if the number is evenly divisble by three or not.

const div3 = (number) => {
 if(number % 3 === 0){
     return `${number} is divisible by three`
 }else {
    return `${number} is not divisible by three`
 }
}

// Got Green!

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// // a describe method that lists the name of the function OR naming of the particular test.
describe("toCapital", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in an array of strings and returns an array with all the words capitalized.", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(toCapital(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(toCapital(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})
// // Got RED!
// ReferenceError: toCapital is not defined

// b) Create the function that makes the test pass.
// Pseudo Code:
// Create a function named toCapital.
// Take in array of WORDS
// Use .map as a way to return a whole array
// Likely use something to make the first letter of the string toUpperCase
// Might have to seperate the first letter of the strings and the rest
// Might have to join the words back together.
// Returns an array with all the words capitalized.

const toCapital = (string) => {
  // const words = array.split(",")
  // return string.chartAt(0).toUpperCase() + string.slice(1)
  return string.map(string => string.charAt(0).toUpperCase() + string.slice(1))
}
// const word.map(capitalize.join(" ")

// Got Green!
//Thought Process:
// Initially, I beleived that I might have to use.split but after some more studying it did not seem necessary. Furthermore, .map was not present in Pseudo Code at first but was revised afterwards. Latly, I was unsure if .join was necessary thus was experimenting until I received a pass.


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("vowelLetter", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in a string and logs the index of the first vowel", () => {
    const vowelTester1 = "learn"
    // Expected output: 1
    const vowelTester2 = "academy"
    // Expected output: 0
    const vowelTester3 = "challenges"
    // Expected output: 2

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(vowelLetter(vowelTester1)).toEqual(1)
    expect(vowelLetter(vowelTester2)).toEqual(0)
    expect(vowelLetter(vowelTester3)).toEqual(2)
  })
})
// Got Red!
// vowelLetter is not defined.

// b) Create the function that makes the test pass.
//Pseudo Code:
// Create a function named vowelLetter
// Take in a string
// Potentially use .length to go through each string. [Only for arrays?]
// Will need to find the index of the first vowel
// Likely need to list vowels
// Return the first index of the first vowel

const vowelLetter = (string) => {
  // if(string = ("aeuouAEIOU"))
  const strings = ("aeiouAEIOU")
  return string.indexOf("0") !== -1
  // (string[" "]) !== -1
}

// Did not get Green.
// Unfortunately, I was not able to figure out this problem. I keep getting back out -1 or false for the received value.
// Expected: 1
//     Received: -1
// Additionally, if I would set it to not equal -1 it will return
// Expected: 1
//    Received: false
