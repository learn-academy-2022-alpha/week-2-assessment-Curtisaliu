// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Alpha 2022"
// console.log(cohort.split(""))

// // a) Your answer:
// Alpha 2022 will be split into different strings such as "A", "l", "p", "h", "a" and so on.

// b) Verify and explain:
// .split is taking the defined variable and splitting it up into different strings. A', 'l', 'p', 'h',
//   'a', ' ', '2', '0',
//   '2', '2'.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer:
// It will likely log undefined.

// b) Verify and explain:
// It logged undefined because it is a function without a return, thus the declared variable has no assigned value. When you add return before line 25, it will log back the intended code "Hello, LEARN Student".


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer:
// I believe it will log an array of [8, 10, 12, 14, 16].

// b) Verify and explain:
// My prediction was correct. By using a higher-order function such as .map it means that the developer wanted the code to iterate through the array and multiple the values by 2. The multiplication of 2 is denoted by (value * 2).


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:
// I believe it will create a new array with only odd numbers. The array will look like this [11, 13, 15].

// b) Verify and explain:
// My prediction was correct. By using the higher-order function .filter, the function will loop through the array and filter out any value that is not divisble by 2. The process of division of 2 is denoted by (value % 2 !== 0).

// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer:
// I believe that this will log just JavaScript. I believe Ruby is the next index which is 1.

// b) Verify and explain:
// My prediction was correct. This code is an object which holds many different keys and values which held many different strings. The developer invoke myCodingSkills but specified what what key which was myCodingskills and the value of JavaScript but with the index of 0.

// Just testing to see if this code will give me back just React.
// console.log(myCodingSkills.frameworks[0]) --> React


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Alpha",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:
// I believe that this will log "George".

// b) Verify and explain:
// What was logged was Learn { student: 'George', cohort: 'Alpha', year: 2022 }.
// I believe what has happened is that this.student is not assigned to anything. Thus, "George" is assigned to it. Additionally, I believe that var learnStudent was created as an instance of the class, which allowed access to Learn and its values. That is why when console loging (learnStudent) it gave back all three key-values. 
