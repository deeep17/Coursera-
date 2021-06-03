(function (window) {
  var helloSpeaker = {};
  //helloSpeaker.speakWord = "Hello";
  helloSpeaker.speak = function (name) {
    console.log("Hello" + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);

