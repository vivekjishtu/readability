var my_awesome_script = document.createElement('script');
my_awesome_script.setAttribute('src','https://vivekjishtu.github.io/readability/Readability.js');
my_awesome_script.onload = main;

document.head.appendChild(my_awesome_script);

function main() {
  var loc = document.location;
  var uri = {
    spec: loc.href,
    host: loc.host,
    prePath: loc.protocol + "//" + loc.host,
    scheme: loc.protocol.substr(0, loc.protocol.indexOf(":")),
    pathBase: loc.protocol + "//" + loc.host + loc.pathname.substr(0, loc.pathname.lastIndexOf("/") + 1)
  };
  var article = new Readability(uri, document).parse();  
  var html = document.getElementsByTagName("html")[0];
  if(!html) html = docment.body;
  var ifr = document.createElement("div");
  html.appendChild(ifr);
  ifr.style.position = "fixed";
  ifr.style.top = "0px";
  ifr.style.left = "0px";
  ifr.style.bottom = "0px";
  ifr.style.right = "0px";
  ifr.style.border = "0px";
  ifr.style.backgroundColor = "black";
  ifr.style.zIndex = 9999999999;  
  ifr.id = "readibility_reader_js";
  
  var bdStyle = html.style;
  bdStyle.overflow = "hidden";
}
