function rotateNext(){

if (rotation == 0){
    $("#quart1").animate({"transform-origin": "bottom right", "rotate": "+90deg"}, 600)
    $("#quart3").animate({"transform-origin": "top right", "rotate": "+90deg"}, 600)
    $("#quart4").animate({"transform-origin": "top left", "rotate": "+90deg"}, 600)
    rotation += 1
}    



else 
     if (rotation==1){
        $("#quart1").animate({"transform-origin": "bottom right", "rotate": "+180deg"}, 600)
        $("#quart3").animate({"transform-origin": "top right", "rotate": "+180deg"}, 600)
        $("#quart4").animate({"transform-origin": "top left", "rotate": "+180deg"}, 600)
        rotation += 1
        console.log(rotation)
        }
       


else 
     if (rotation==2){
        $("#quart1").animate({"transform-origin": "bottom right", "rotate": "+270deg"}, 600)
        $("#quart3").animate({"transform-origin": "top right", "rotate": "+270deg"}, 600)
        $("#quart4").animate({"transform-origin": "top left", "rotate": "+270deg"}, 600)
        rotation += 1
        console.log(rotation)
        }
    

else 
    if (rotation==3){
       $("#quart1").animate({"transform-origin": "bottom right", "rotate": "+1960deg"}, 600)
       $("#quart3").animate({"transform-origin": "top right", "rotate": "+1960deg"}, 600)
       $("#quart4").animate({"transform-origin": "top left", "rotate": "+1960deg"}, 600)
       rotation = 0
       setTimeout(back, 10);
       console.log(rotation)
       }
      

    }

/*
function rotate(){
    
        $("#quart1").animate({"transform-origin": "bottom right", "rotate": "+90deg"}, 600)
        $("#quart3").animate({"transform-origin": "top right", "rotate": "+90deg"}, 600)
        $("#quart4").animate({"transform-origin": "top left", "rotate": "+90deg"}, 600)
        
        
        

    
    }
*/