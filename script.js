var calcul = function (a,b,operator) {

 if(operator== "+") {
    return a + b;
  }

 if(operator== "-") {
    return a - b;
  }

 if(operator== "*") {
    return a * b;
  }

 if(operator== "/") {
    return a / b;
  }
}
calcul(5,15,"*")
