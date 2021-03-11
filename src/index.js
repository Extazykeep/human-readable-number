module.exports = function toReadable (number) {
  let numbers = ["zero",'one','two','three','four','five','six','seven','eight','nine',"ten",
                   "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    const digit = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    let str = "";
    if(number < 20){
      lessthantwenty(number)
    }  
    if(number > 19 && number < 100){
       lessthanhundred(number)
    }  
    if(number > 99 && number <1000){
      lessthanthousand(number)
    }
  function lessthantwenty(num) {
       for(let i = 0;i < numbers.length;i++){
       if(i === num){
         str+=numbers[i]
        }
       }
}
  function lessthanhundred(num){
      let splited = num.toString().split("")
      if(splited[1] === "0"){
        for(let i = 0; i < digit.length; i++){
          if(+splited[0] === i){
            str+=digit[i]
          }
        }
      }
      else {
        for(let i = 0; i<digit.length; i++){
          if(+splited[0]===i) {
            str+=digit[i]
          }          
        }
        for(let i = 0;i<numbers.length;i++){
          if(+splited[1]===i){
            str+= " "
            str+=numbers[i]
          }
        }
      }
}
function lessthanthousand(num){
  let splited = num.toString().split("");
  if(splited[1] === "0" && splited[2] === "0") {    
    lessthantwenty(+splited[0])
      str+= " " + "hundred"
    return
  }
  let forlessthanhundred = +(splited[1] + splited[2])
  lessthantwenty(+splited[0]);
  str+= " " + "hundred" + " ";
  if(forlessthanhundred > 19){
      lessthanhundred(forlessthanhundred)
  }
  else lessthantwenty(forlessthanhundred)
}
  return str
}
