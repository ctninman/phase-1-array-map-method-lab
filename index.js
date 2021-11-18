const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// map(), filter(), etc. always take a callback function as an argument!!!



const titleCased = () => {

  return tutorials.map(tutorial => {
    // .map creates a new array using tutorials array, the callback function will call one individual element (tutorial)
    return tutorial.split(' ').map(word => {
      // split the tutorial into individual parts based upon each 'space', then use map to 
        //  create a new array which contains arrays of each individual word 
      return word[0].toUpperCase() + word.slice(1)
      // Within each element of the new array, every first letter at index[0] is capitalized
        //  And then add the rest of the word from index 1 using slice
    }).join(' ')
    // join all of the individual words of the array back into one array
  })
}

// const titleCased = () => tutorials.map(tutorial => tutorial.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '))

// const titleCased = () => {
//   return tutorials.map(tutorial => tutorial.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '))
// }

// const titleCased = () => {
//   return tutorials.map(tutorial => {
//     return tutorial.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ') 
//   })
// }

// const titleCased = () => {
//   return tutorials.map(tutorial => {
//     return tutorial.split(' ').map(word => {
//       return word[0].toUpperCase() + word.slice(1)
//     }) .join(' ')
//   })
// }






//  const tutorial = 'you can do it'
//  const separate = tutorial.split(' '); 
//  const capitalize = separate.map((element) => {return element.charAt(0).toUpperCase() + element.slice(1)});
//  const youCanDoIt = capitalize.join(' ')









