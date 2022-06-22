// This is the link to this JavaScript Coding Challenge
// https://discord.com/channels/949141893508399175/949141893999128678

function vowelIndices(word){
  let vowels = 'aeiou'
  word = word.toLowerCase()
  let arr = []
  for(i=0; i<=word.length-1; i++){
    for(j=0; j<=vowels.length-1; j++){
        // console.log(word[i], vowels[j])
        if(word[i] == vowels[j]){
            arr.push(i+1)
            // console.log(word[i], i+1)
        }
    }
   
  }
  console.log(word)
  console.log(arr)
}
vowelIndices('Mmmm')
console.log('========')
vowelIndices('super')
console.log('========')
vowelIndices('super')
console.log('========')
vowelIndices('Apple')
console.log('========')
vowelIndices('YoMama')
console.log('========')
vowelIndices("orange")
console.log('========')
vowelIndices("supercalifragilisticexpialidocious")