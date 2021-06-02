(function (){
    var names = ["john",  "michael", "johnny","ramesh", "jonnathan","suresh" ];
    for(var i=0; i<names.length; i++){
        var firsLetter = names[i].charAt(0).toLowerCase();
        if(firsLetter == "j") {
            saygoodbye.display (names[i]);
        }
        else{
            sayHello.display(names[i]);
        }
    }
})();
