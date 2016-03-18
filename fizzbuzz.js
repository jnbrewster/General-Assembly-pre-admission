//'fizz' if the number is divisible by 3 (but not 5)
// 'buzz' if the number is divisible by 5 (but not 3)
// 'fizzbuzz' if the number is divisible by both 3 and 5
// the number itself if it isn't divisible by either 3 or 5

var fizzBuzz = function(num) {
  for (var i = 1; i <= num; i++) {
    if (x % 3 === 0 && x % 5 === 0) {
      result = "fizzbuzz";
    }
    else if (x % 3 === 0) {
      result = "fizz";
    }
    else if (x % 5 === 0) {
      result = "buzz";
    }
    else {
      result = x;
    }
    console.log(result);
 }
};
