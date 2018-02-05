demo.state8 = function (){};
demo.state8.prototype = {
    preload: function(){},
    create: function (){
        game.stage.backgroundColor = '#4f3361';
        
        addChangeStateEventListeners();
        
    },
    update: function (){},
}