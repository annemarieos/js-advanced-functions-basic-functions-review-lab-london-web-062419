// Your code here    defines saturdayFun function declaration as specified

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = function (one = "*") {
  return function (two = "special") {
    return `You are ${one}${two}${one}!`
  }
}

const Calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  }
}

const actionApplyer = function (start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++) {
    a = ray[i](a)
  }
  return a
}


