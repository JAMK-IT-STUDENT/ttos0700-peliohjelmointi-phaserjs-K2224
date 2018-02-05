demo.state3 = function (){};
demo.state3.prototype = {
    preload: function(){},
    create: function (){
        game.stage.backgroundColor = '#ab6259';
        
        addChangeStateEventListeners();
        
    },
    update: function (){},
}