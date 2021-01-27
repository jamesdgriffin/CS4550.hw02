/*
Main JavaScript for calc page
*/

(function() {
  "use strict";
  var sol;
  var num1;
  var num2;
  var op;

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

  }

  function buttonPress(button) {
    if(button=="c") {
      sol.innerHTML = null;
      reset();
    }

    if(num1==null) {
      num1 = button;
    }
    else if (op==null) {
      op = button;
    }
    else if (num2==null) {
      num2 = button;
    }

    if((num1!==null && op!==null && num2!==null)) {
      calculator();
    }
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

  function reset() {
    num1 = null;
    op = null;
    num2 = null;
    sol.innerHTML = null;
  }

  window.addEventListener("load", init, false);

})();
