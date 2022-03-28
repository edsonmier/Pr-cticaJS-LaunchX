var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var pokemonEntry = "";

function search(entry) {
  if(event.keyCode == 13) {
    pokemonEntry = (entry.value); 
    pokemonEntry = pokemonEntry.toLowerCase(); 
    sessionStorage.setItem("pokemonEntry", pokemonEntry);
    location.replace("./navigation.html");
  }
}

function searchOnClick(){
  entry = document.getElementById("pokemon-entry");
  pokemonEntry = entry.value;
  pokemonEntry = pokemonEntry.toLowerCase(); 
  sessionStorage.setItem("pokemonEntry", pokemonEntry);
  location.replace("./navigation.html");
}

  document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },1000);
  }
}

function goBack(){
  location.replace("./index.html");
}
