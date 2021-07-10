//FUNCTIONS, SWITCH STATEMENTS, WHILE DO- WHILE LOOPS

/* Q1 . Write a custom function power ( a, b ), to calculate the value of
a raised to b */



/* function power(){
    var  b =prompt("Enter here")
    var  c =prompt("Enter here")
   b= parseInt(b);
    c= parseInt(c);
    var result=1
    for(i=0;i<c;i++){
        result*=b
    }
    document.write(result);

}
power() */


/* 
Q 2. Any year is entered through the keyboard. Write a function to
determine whether the year is a leap year or not. */




/* Q 3. If the lengths of the sides of a triangle are denoted by a, b, and
c, then area of triangle is given by
area = S(S − a)(S − b)(S − c)
where, S = ( a + b + c ) / 2 */



/* function area(){
var a=+prompt("ente a value ");
var b=+prompt("enter b value");
var c=+prompt("enter c value");
var s=(a+b+c)/2;
var  area=s*(s-a)*(s-b)*(s-c);
{
   document.write(area);
}


}
area();  */


/* Q 4. Write a function that receives marks received by a student in 3
subjects and returns the average and percentage of these
marks. there should be 3 functions one is the mainFunction
and other are for average and percentage. Call those functions
from mainFunction and display result in mainFunction. */


/* function average(a,b,c){
var avg= (a+b+c)/3

return avg;

}

function perc(a,b,c){
    var per= (average(a,b,c)*100/75)
    
    return per
    
    }

function main(){

    var a=+prompt("Enter Urdu Marks");
var b=+prompt("Enter Math Marks");
var c=+prompt("Enter English Marks");

document.write("Your percentge is "+perc(a,b,c)+"% and your averge i "+average(a,b,c));
}
main() */








/* Q 5. You have learned the function indexOf. Code your own custom
function that will perform the same functionality. You can code
for single character as of now. */



/*  function myindexof(chr,str){

    for(i=0;i<str.length;i++){
        if(chr==str[i])
        return i
    }
}

var chr='i'
var str="my name is ali abbas  "
document.write(myindexof(chr,str))   */




/* Q 6. Write a function to delete all vowels from a sentence. Assume
that the sentence is not more than 25 characters long. */



/* function vowels(){
var str = ("my name is zubaida kanwal i live in karachi");                          

 result = str.replace( /[aeiou]/g, '' ); 
{
    document.write(result);
}


}

vowels(); */





/* Q 7. Write a function with switch statement to count the number of
occurrences of any two vowels in succession in a line of text.
For example, in the sentence

“Pleases read this application and give me gratuity”
Such occurrences are ea, ea, ui.  */




/* 
Q8. The distance between two cities (in km.) is input through the
keyboard. Write four functions to convert and print this
distance in meters, feet, inches and centimeters. */


/* function tom(a) {
    var b = a * 100000
    return b
}


function tofeet(c) {
    var d = c * 3280.84

    return d
}


function toinch(e) {
    var f = e * 39370.1
    return f
}


function tocentimeters(g) {
    var h = g * 100000
    return h
}





document.write("distance in feet " + tofeet(700) + "distance in meter" + tom(700) + "distance in inch" + toinch (700)+ "distance in centimeter" + tocentimeters(700) );
*/

/* Q9. Write a program to calculate overtime pay of employees.
Overtime is paid at the rate of Rs. 12.00 per hour for every hour
worked above 40 hours. Assume that employees do not work
for fractional part of an hour. */





/* Q 10. A cashier has currency notes of denominations 10, 50 and
100. If the amount to be withdrawn is input through the
keyboard in hundreds, find the total number of currency notes
of each denomination the cashier will have to give to the
withdrawer. */




                       //Event

// 1. Show an alert box on click on a link.  


//thi chapter done in html file




/* 2. Display some Mobile images in browser. On click on an
image Show the message in alert to user. */



/* 4. Display an image in browser. Change the picture on mouseover and set the
first picture on mouseout. */