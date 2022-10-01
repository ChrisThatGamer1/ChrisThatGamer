var link = document.getElementsByTagName('a'),
    tutVid = document.getElementById('tutVidTitle');

for(var i=0; i<5; i++){
  link[i].onclick = function(){
    tutVid.innerHTML = this.innerHTML;
  };
}