function searchFunction() {
  var lolid = document.getElementById("lolid").value;
  var url = "http://fow.kr/find/"+lolid;
window.location =url
}

var str = "링크";
var lolid = document.getElementById("lolid").value;
var url = "http://fow.kr/find/"+lolid;
var result = str.link(url);
document.getElementById("demo").innerHTML = result;
