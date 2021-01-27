/*
Main JavaScript for calc page
*/

(function() {
  "use strict";
  var sol;
  var num1;
  var num2;
  var op;
  var canDecimal = true;

  function init() {

    document.getElementById("b7").addEventListener("click", function() {buttonPress("7")});
    document.getElementById("b8").addEventListener("click", function() {buttonPress("8")});
    document.getElementById("b9").addEventListener("click", function() {buttonPress("9")});
    document.getElementById("b+").addEventListener("click", function() {buttonPress("+")});

    document.getElementById("b4").addEventListener("click", function() {buttonPress("4")});
    document.getElementById("b5").addEventListener("click", function() {buttonPress("5")});
    document.getElementById("b6").addEventListener("click", function() {buttonPress("6")});
    document.getElementById("b-").addEventListener("click", function() {buttonPress("-")});

    document.getElementById("b1").addEventListener("click", function() {buttonPress("1")});
    document.getElementById("b2").addEventListener("click", function() {buttonPress("2")});
    document.getElementById("b3").addEventListener("click", function() {buttonPress("3")});
    document.getElementById("bx").addEventListener("click", function() {buttonPress("x")});

    document.getElementById("bc").addEventListener("click", function() {buttonPress("c")});
    document.getElementById("b0").addEventListener("click", function() {buttonPress("0")});
    document.getElementById("b.").addEventListener("click", function() {buttonPress(".")});
    document.getElementById("b/").addEventListener("click", function() {buttonPress("/")});

    sol = document.getElementById("solution");
    sol.innerHTML = 0;

  }

  function buttonPress(button) {
    //clear
    if(button=="c") {
      reset();
    }
    //operators
    else if((button=="+" || button=="-" || button=="x" || button=="/")) {
      operator(button);
    }
    //decimal
    else if(button==".") {
      decimal();
    }
    //numbers
    else if(parseInt(button)!=="NaN") {
      number(button);
    }
    display();
  }

  function calculator() {
    if (op=="+") {
      sol.innerHTML = num1 + num2;
    }
    else {
      sol.innerHTML = "invalid" + "num1: " + num1 + "num2: " + num2 + "op: " + op;
    }
    num1 = null;
    op = null;
    num2 = null;
  }

  function operator(op_) {
    if(num1==null) {
      num1 = "0";
    }
    op = op_;
    canDecimal = true;
  }

  function decimal() {
    if(num1==null) {
      num1 = "0.";
      canDecimal = false;
    }
    else if((op==null && canDecimal)) {
      num1 = num1 + ".";
      canDecimal = false;
    }
    else if(num2==null) {
      num2 = "0.";
      canDecimal = false;
    }
    else if((op!==null && canDecimal)) {
      num2 = num2 + "."
      canDecimal = false;
    }
  }

  function number(button) {
    if(num1==null) {
      num1 = button;
    }
    else if(op==null) {
      num1 = num1 + button;
    }
    else if(num2==null) {
      num2 = button;
    }
    else {
      num2 = num2 + button;
    }
  }

  function display() {
    if(num1==null) {
      sol.innerHTML = "0";
    }
    else {
      if(op==null) {
        sol.innerHTML = num1;
      }
      else {
        if(num2==null) {
          sol.innerHTML = num1 + op;
        }
        else {
          sol.innerHTML = num1 + op + num2;
        }
      }
    }
  }

  function reset() {
    num1 = null;
    op = null;
    num2 = null;
    canDecimal = true;
    display();
  }

  window.addEventListener("load", init, false);

})();
