function addtoZero (arrayNums) {
    for(let i = 0; i < arrayNums.length - 1; i++) {
       for (let z = i + 1; z <arrayNums.length; z++) {
        if (arrayNums[i] + arrayNums[z] === 0)
            return true
       }
    }
    return false
}
// console.log(addtoZero([1,2,3,-2]))

// O(n^2)

function hasUniqueChars(str) {
    for (let i=0; i < str.length -1 ; i++) {
        for (let z=0; z < str.length; z++) {
            if(str[i] === str[z])
            return false
        } 
    } return true
  }

//   console.log(hasUniqueChars("moonday"))

// O(n^2)

function isPangram(str) {
    for (let i=0; i < str.length -1 ; i++) {
        for (let z=0; z < str.length; z++) {
            if(str[i] === str[z])
            return true
        } 
    } return false
  }

//   console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

  // O(n^2)


function findLongest(array) {
    let longestWord = 0
   for(let i=0; array.length; i++){
        if (array[i].length > longestWord) {
           longestWord = array[i].length
        }
   } return longestWord
}

  console.log(findLongest(["hi", "hello"])) 

//   O(n)