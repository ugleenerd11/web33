
      var myVar;

      var i = 0;
      function move() {
        myVar = setTimeout(showPage, 5000);
        if (i == 0) {
          i = 1;
          var elem = document.getElementById("myBar");
          var width = 10;
          var id = setInterval(frame, 50);
          function frame() {
            if (width >= 100) {
              clearInterval(id);
              i = 0;
            } else {
              width++;
              elem.style.width = width + "%";
              elem.innerHTML = width + "%";
            }
          }
        }
      }

      function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "inline";
      }