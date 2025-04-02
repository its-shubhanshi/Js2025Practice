"use strict";

/*let str="banana";
        if((str[0]=='a') && (str.length>3) ){
            console.log("good string");
            
        }
        else{
            console.log("bad string");
            
        }

        let dayVal;
        const checkDay =(dayVal)=>{
            switch (dayVal) {
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break;
                
            default:
                console.error("Invalid value");
                
                break;
        }
    
        }
        checkDay(dayVal=4)
        checkDay(dayVal=88)
    
        if(true){
            console.log("This is true Prachi !!");
            
        }
        else{
            console.log("This false");
            
        }
        let num=prompt("Enter any value")
        if(num%2==0){
            alert("even number")
        }
        else{
            alert("odd number")
        }*/

// let fname=prompt("Enter you first name");
// let lname=prompt("Enter you last name");

// let msg=` Welcome ${fname} ${lname} !!! `;
// console.log(msg);

let digit = 36844442;
let checkn = String(digit).lastIndexOf(2);

console.log(checkn);
let str = "ILoveCodingLove";
let msg = str.replace("Love", "do");
console.log(str, msg);

let help = "help!";
console.log(help.trim().toUpperCase());
console.log(help.trim().toLocaleUpperCase());

let string = "ApnaCollage";
console.log(string.slice(4, 9));
console.log(string.indexOf("na"));
console.log(string.replace("Apna", "Mera"));
console.log(string);

let seprate = string
  .slice(4, string.length)
  .replace("l", "T")
  .replace("l", "T");
console.log(seprate);
