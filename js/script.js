;(function($){

var suivant = document.getElementById("suivant");

var hammerNext = new Hammer(suivant);

var precendent = document.getElementById("precedent");

var hammerPrevious = new Hammer(precendent);


var rotation = 90
var previous =  -90


function rotateNext(){

    $("#quart1").animate({"transform-origin": "bottom right", "rotate":  + rotation + "deg"}, 600)
    $("#quart3").animate({"transform-origin": "top right", "rotate":  + rotation + "deg"}, 600)
    $("#quart4").animate({"transform-origin": "top left", "rotate":  + rotation + "deg"}, 600)
   rotation += 90
   previous += 90 
   console.log("rotation = " + rotation)
   console.log("previous = " + previous)
    
    }
function rotatePrevious(){
    if(previous>0){
    $("#quart1").animate({"transform-origin": "bottom right", "rotate": "+" +  previous  + "deg"}, 600)
    $("#quart3").animate({"transform-origin": "top right", "rotate":  "+" + previous  + "deg"}, 600)
    $("#quart4").animate({"transform-origin": "top left", "rotate": "+" + previous  + "deg"}, 600)
    previous -= 90 
    rotation = previous + 180
    }
    else{
    $("#quart1").animate({"transform-origin": "bottom right", "rotate": +  previous  + "deg"}, 600)
    $("#quart3").animate({"transform-origin": "top right", "rotate":  + previous  + "deg"}, 600)
    $("#quart4").animate({"transform-origin": "top left", "rotate":  + previous  + "deg"}, 600)    
    previous -= 90 
    rotation = previous + 180
    }    
        }    

hammerNext.on("tap", function(ev){
    rotateNext()
})


hammerPrevious.on("tap", function(ev){
    rotatePrevious()
})

})(Zepto)    