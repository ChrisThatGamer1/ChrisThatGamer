var link = document.getElementsByTagName('a'),
    tutVid = document.getElementById('tutVidTitle');

for(var i=0; i < 9; i++ ){
  
    link[i].onclick = function(){
    tutVid.innerHTML = this.innerHTML;
  };
}

  // show alert box, that these videos may contain some sort of adult content, i.e swearing, etc.
  function showAlert() {
    var myText = "WARNING: The videos below contain explicit content. Please be aware that you are about to view, content that some viewers may find offensive. Viewers discretion is advised.";
    var myText2 = "The video(s) highlight ChrisThatGamer's competitive Call of Duty career. How he edited videos, recored videos, and created thumbnails/scripts.";
    alert (myText + "\n\n" + myText2);
  }
  