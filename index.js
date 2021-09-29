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


const titleCased = (tutorials) => {
  tutorials.map((arrayStrings) => {
     const words = arrayStrings.split(' ');
     debugger
     console.log(arraystrings)
      words.map((element) => {
        return element.charAt(0).toUpperCase() + element.slice(1)});
  }) .join(' ')
}


//  const tutorial = 'you can do it'
//  const separate = tutorial.split(' '); 
//  const capitalize = separate.map((element) => {return element.charAt(0).toUpperCase() + element.slice(1)});
//  const youCanDoIt = capitalize.join(' ')


// const titleCased = (str) =>{
//   return tutorials.toLowerCase().split(' ').map(function(word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
// }
// titleCased(tutorials);

//tutorials.map
  //make a new array after iterating through tutorials array and perfoming function on it
    //const titleCased = map(tutorials.split(' '), function (...)) {
      //
    //}

//     titleCased.






