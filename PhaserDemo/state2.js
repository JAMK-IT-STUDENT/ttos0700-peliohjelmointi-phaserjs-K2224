demo.state2 = function (){};
demo.state2.prototype = {
    preload: function(){},
    create: function (){
        game.stage.backgroundColor = '#567c46';
        
        addChangeStateEventListeners();
        
    },
    update: function (){},
}