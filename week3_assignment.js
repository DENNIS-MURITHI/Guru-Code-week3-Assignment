//question 1 week 3
const number = "45";
console.log(Number(number));//45


//question 2 week 3
const printSum = Number("20")+ 40; // printSum is a constant, but you can convert the string 20 to a number and then add it to 40 , thus sum of 60*
console.log(Number(printSum));//60

const sentence = "I am " + (23 + 4) + " years old"; //for the code to print 27, the code should be altered this way.
console.log(sentence);//I am 27 years old

//question 3 week 3
Const myValue = "May"; 
myValue =86;
console.log(myValue);//throws an error because myValue has been declared as a constant, redeclaring it value is immutable hence throws an error. Unless you initialize it with let keyword.

//question 4 week 3
const firstName = "Dennis";// Names do not change hence use const
const lastName ="Muthuri";
const guruCodingCourse ="Guru coding JavaScript";
let testScore =40;//It is a score, changes should be allowed.

/*question 5
 Switch or if-else statement*/
 let score = 100.5;
 if(score>=0 && score<30){
    console.log("Failed");
 }else if(score>=30 && score<=40){
    console.log("E");
 }else if(score>=40 && score<=49){
    console.log("D");
 }else if(score >=50 && score<+59){
    console.log("C");
 }else if(score >=60 && score<69){
    console.log("B");
 }else if(score >=70 && score<=100){
    console.log("A");
 }else if(score>100){
    console.log("Score out of range");
 }else{
    console.log("No test score")
 }
// since my score is at 100.5 , output is score out of range due to implementation on code line 40.
 
 //question 6(last question here !!)
//  let count = 0;
 for(count=1;count<=20;count++){
    console.log(count);
 }/* 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20.
 count start from 1 and is updated to a new value each iteration till it is on value 20,
 which is the condition set in the for loop*/

 /*End of assigment week-3*/
 
