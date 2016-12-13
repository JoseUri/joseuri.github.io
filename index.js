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

var sound = new Audio("Vocaroo_s1H2L099Ym9v.ogg");
sound.preload = 'auto';
sound.load();

function playSound(volume) {
  var click=sound.cloneNode();
  click.volume=volume;
  click.play();
}
