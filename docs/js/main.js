window.onload = function() {
    // With options
    let b = baffle('.baffle', {
        characters: '<$ДГФѾЛѮС▒░/',
        speed: 75
    });

    b.reveal(1500)

}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
