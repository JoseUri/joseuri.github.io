window.contactDropClick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

    function robloX(){
        var audio = document.createElement("audio");
        audio.src = "Vocaroo_s1H2L099Ym9v.ogg";
        audio.addEventListener("ended", function () {
            document.removeChild(this);
        }, false);
        audio.play();   
    }
