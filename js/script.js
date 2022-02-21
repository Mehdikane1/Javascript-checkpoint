// equality of three values
function equal (a,b,c) {
    if (a == b && b ==c) return true;
    else return false;
}
console.log(equal(1,2,3))
console.log(equal("test", "test", "test"))

//Convert Minutes to seconds:
function minuteConvert (a){
    return a*60
   
}
console.log(minuteConvert(120))


//Return the Area of a rectangle:
function area(height,width){
return height*width
}
console.log(area(2,2))


//The next number :
function nextin(a){
    return a+1
}
console.log(nextin(1))

//Football Points:
function Footballpts (wins, draws, defeats){
    return wins + draws + defeats;
}
console.log(Footballpts(4, 2, 1))


//Between 100 AND 200:
function Between(a){
    if ( a >= 100 && a <= 200){
      
        return true
    }
    else {
        return false
    }
}
console.log(Between(20))

//Hours and minutes to seconds:
function convertHourMin(hour, minute){
    return hour * 3600 + minute * 60;
}
console.log(convertHourMin(1,1))


//Equality check:
function equalityCheck(a, b){
    if(a === b){
        return true
    }
    else{
        return false
    }
}
console.log(equalityCheck("10",10))


//Compare Strings by Count of Characters:

function CompareStr(a,b){

     let strlen = a.length;
     let strlen2= b.length;
     if(strlen > strlen2){
          return "the first string is taller"
     }
     else{
         return "the second string is taller"
     }

}
console.log(CompareStr("go my code","test"))


//Concatenate First And Last Name:

function fullName (firstname,secondname){

return firstname + " " + secondname;

}
console.log(fullName("mehdi","kane"))






 

   



 

    







    

    












  


