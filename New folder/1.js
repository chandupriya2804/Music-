
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  var m = document.querySelectorAll("button")
    [i].addEventListener("click", function () {
      var key = this.textContent;
  
      call(key);

    });
}
function call(m){

   var tom = new Audio(`sounds/${m}.mp3`);
        tom.play();
}

