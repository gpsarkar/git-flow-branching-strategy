window.addEventListener('load', function() {
  var elem = document.getElementById("js");
  var date = new Date();
  elem.innerText = date.toDateString() + " " + date.toTimeString();
})