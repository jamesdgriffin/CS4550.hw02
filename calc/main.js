(function() {
  "use strict";

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

  }

  function buttonPress(button) {
    document.getElementById("solution").innerHTML = button;
  }

  window.addEventListener("load", init, false);

})();
