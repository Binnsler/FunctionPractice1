// Problem 1
// var tripleFive = function(){
// 	for(var i = 0 ; i < 3 ; i++){
// 		console.log("Five!");
// 		}
// 	}
// tripleFive();

// Problem 2
// var lastLetter = function(string){
// 	return string[string.length-1];
// }

// console.log(lastLetter('hello'));

// Problem 3
// var square = function(number){
// 	return number * number;
// }
// console.log(square(3));

// Problem 4
// var negate = function(number){
// 	number = 0 - number;
// 	return number;
// }
// console.log(negate(-8));

// Problem 5
// var toArray = function(x,y,z){
// 	var theArray = [];
// 	theArray.push(x,y,z);
// 	return theArray;}

// console.log(toArray(1,4,5));

// Problem 6
// var startsWithA = function(string){
// 	if(string[0].toUpperCase() === 'A')
// 		return true;
// 	else
// 		return false;
// }

// console.log(startsWithA("aardvark"));
// console.log(startsWithA("boobear"));

// Problem 7
// var excite = function(string){
// 	return string + '!!!'
// };

// console.log(excite("no"));

// Problem 8
// var sun = function(string){
// 	if(string.indexOf("sun")=== -1){
// 		return false;
// 	}
// 	else{
// 		return true;
// 	}
// }
// console.log(sun("sundries"));
// console.log(sun("dogpooper"));

// Problem 9
// var tiny = function(number){
// 	if(0 < number && number < 1){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	} 
// }
// console.log(tiny(.3));

// Problem 10
var getSeconds = function(string){
	var hours = Number(string.slice(0,2));
	var minutes = Number(string.slice(3,5));
	var result = (hours*60) + minutes;
	return result;
}

console.log(getSeconds("10:05"));

