// add solution here
let array = []

let theBeatlesPlay = (musicians, instruments) => {
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  } return array
}

const facts = ["He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"];

let i = 0

let johnLennonFacts = facts => {
  while (i < facts.length) {
    return facts(){`${facts[i]}!!!`}
    i += 1
  } return facts
}
