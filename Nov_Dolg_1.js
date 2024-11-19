//1.
function createArrayOfTiers(num) {
    
    let array= [];
    for(let i = 0; i < num.lenght; i++){
      array.push(num(i));
      array.push(",")
    }
    
    return array;
  
}
console.log(createArrayOfTiers("420"));

//2.
function disemvowel(str) {
    let vowels = []
    vowels.push('i','e','o','O','!')
    for(let i = 0; i < str.lenght; i++){
      if (vowels.concat(i)){
    //nem tudom tovább
      }
    }
    
    
    return str;
  }
  console.log(disemvowel("This website is for losers LOL!"));

//3.
  function myParseInt(str) {
    let array = []
    for (let index = 0; index < str.length; index++) {
        array.push()   
    }
    if (str.lenght == 1 && str == parseInt) {
        myParseInt(str)
    }
    if (str.lenght > 1) {
        for (let index = 0; index < str.length; index++) {
            
        }
    }
    
   
    return 0;
  }
  console.log(myParseInt("10 apples"));
