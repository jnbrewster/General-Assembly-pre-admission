// 5.1.1

// sayHello, which accepts one parameter, called name; it should return a greeting to a person with that name, i.e. "Hello, name".
var sayHello = function(name) {
  return "Hello, " name + ".";
};


// areBothEven, which accepts two parameters, a and b; it should return true if a and b are both even, but false otherwise.
var areBothEven = function(a, b) {
  if (a % 2 === 0 && b % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
};

// Refactored
var areBothEven = function(a, b) {
  return a%2 === 0 && b%2 === 0;
}


// hotOrNot, which accepts one parameter, temp; it should return "hot" if temp is above 75, but should return "not hot" otherwise.
var hotOrNot = function(temp) {
  if (temp > 75) {
    return "Hot";
  }
  else {
    return "not hot";
  }
};

// Refactored
// TODO


// threeIfNull, which accepts one parameter,num. If num is null, it should return 3, but otherwise, it should return the value of num.
var threeIfNull = function(num) {
  if (num == null) {
    return 3;
  }
  else {
    return num;
  }
};

//refactored
var threeIfNull = function(num) {
  return num || 3;
}

// greatest, which accepts three parameters (x, y, and z), and returns the one with the greatest value. For example, greatest(5, 10, 1) would evaluate to 10.
var greatest = function(x, y, z) {
  greatest = x;

  if (greatest < y) {
    greatest = y;
  }
  else if (greatest < z) {
    greatest = z;
  }
  else {
    return greatest;
  }
};

var bigValue = function(w, x, y, z) {
  biggestNum = w;

  if (biggestNum < x) {
    biggestNum = x;
  }
  else if (biggestNum < y) {
    biggestNum = y;
  }
  else if (biggestNum < z) {
    biggestNum = z
  }
  else biggestNum;
};

var getLargest = function(a,b,c,d) {
  if (a > b && a > c && a > d) {
    return a;
  }
  else if (b > a && b > c && b > d) {
    return b
  }
  else if (c > a && c > b && c > d) {
    return c;
  }
  return d;
}
