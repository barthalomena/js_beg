window.alert();
alert("Hello world!");

function check() {
  area = document.getElementById("mydiv");
  box = area.getElementsByTagName("input");
  data = document.getElementsByTagName("p");

  //data[0].innerHTML = box[0].value;
  //data[1].innerHTML = box[1].value;
  //data[2].innerHTML = box[2].value;
  for (i = 0; i < box.length; i++) {
    data[i].innerHTML = box[i].value;
    // data[i].style.color = "red";
    // data[i].style.backgroundColor = "blue";
    data[i].className = "myclass1";
  }
}
