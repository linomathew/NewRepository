// assignment 1
let x = 2000;
let y = x % 100;
if(x % 4 == 0){
    if(y == 0){
        if(x % 400 == 0){
            console.log(x + "IS A LEAP YEAR");
        }else{
            console.log(x + "IS NOT A LEAP YEAR");
        }  
    }else{
        console.log(x + "IS A LEAP YEAR");
    }
}else{
    console.log(x + "IS NOT A LEAP YEAR");
}

// assignment 2
let i = 1997
console.log("ELIGIBILITY TO VOTE");
console.log("GIVEN YEAR OF BIRTH :",i);
let j = 2022-i;
if(j>=18){
    console.log("YES, ELIGIBLE");
}else{
    console.log("NO, NOT ELIGIBLE");
}

// assignment 3
let k = 'A';
if (k=='a'||'e'||'i'||'o'||'u'){
    console.log("V");
}else{
    console.log("C");
}

// assignment 4
var pin = 6786709;
var l = pin.lenght;
l == 6 ? console.log("VALID") : console.log("INVALID")

// assignment 5
var state = "Jammu Kashmir";
if (state === "Kerala" ||state ==="Tamil Nadu" ||state ==="Telangana" ||state ==="Andhra Pradesh"|| state ==="Karnataka") {
    console.log("South");
}else if(state ==="Jammu Kashmir"||state ==="Uttar Pradesh" ||state ==="Himachal Pradesh" ||state ==="Hariyana"||state ==="Chattisgarh"||state ==="Punjab"||state ==="Madhya Pradesh" ||state ==="Uttarakhand") {
    console.log("North");
}else if (state ==="Sikkim"||state ==="Assam"||state ==="Bihar"||state ==="Jharkhand"||state ==="West Bengal"||state ==="Nagaland"||state ==="Meghalaya"||state ==="Tripura"||state ==="Manipur"||state ==="Mizoram"||state ==="Arunachal Pradesh") {
    console.log("East");
}else if( state === "Goa" ||state ==="Maharashtra" ||state ==="Rajasthan" ||state ==="Gujarat") {
    console.log("West");
}else {
    console.log("Not a valid entry");
}

// assignment 6
let g=7;
g%2 == 0 ? console.log('EVEN') : console.log('ODD')

// assignment 7
let a = 4;
let b = 2;
a == b ? console.log("A = B") : (a > b ? console.log("A > B") : console.log("A < B"))

// assignment 8
x='M';
if(x=='M'){
    console.log("MEDIUM");
}else if(x=='L'){
    console.log("LARGE");
}else if(x=='S'){
    console.log("SMALL");
}else if(x=='XL'){
    console.log("EXTRA LARGE");
}else{
    console.log("NONE");
}