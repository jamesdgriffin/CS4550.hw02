/*
JavaScript
*/

(function() {
  "use strict";

  function buttonPress(button) {
    var sol = document.getElementById("solution");
    sol.innerHTML = button;
  }

  function init() {
    document.getElementById("b7").addEventListener("click", buttonPress("7"));
    document.getElementById("b8").addEventListener("click", buttonPress("8"));
    document.getElementById("b9").addEventListener("click", buttonPress("9"));
    document.getElementById("b+").addEventListener("click", buttonPress("+"));

/*
    document.getElementById("b4").addEventListener("click", buttonPress("4"));
    document.getElementById("b5").addEventListener("click", buttonPress("5"));
    document.getElementById("b6").addEventListener("click", buttonPress("6"));
    document.getElementById("b-").addEventListener("click", buttonPress("-"));

    document.getElementById("b1").addEventListener("click", buttonPress("1"));
    document.getElementById("b2").addEventListener("click", buttonPress("2"));
    document.getElementById("b3").addEventListener("click", buttonPress("3"));
    document.getElementById("bx").addEventListener("click", buttonPress("x"));

    document.getElementById("bc").addEventListener("click", buttonPress("c"));
    document.getElementById("b0").addEventListener("click", buttonPress("0"));
    document.getElementById("b.").addEventListener("click", buttonPress("."));
    document.getElementById("b/").addEventListener("click", buttonPress("/"));
*/
  }

  window.addEventListener("load", init(), false);

})();
