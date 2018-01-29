demo.state5 = function (){};
demo.state5.prototype = {
    preload: function(){},
    create: function (){
        game.stage.backgroundColor = '#7156f5';
        console.log('state5');
        
        addChangeStateEventListeners();
        
    },
    update: function (){},
}