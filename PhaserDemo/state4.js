demo.state4 = function (){};
demo.state4.prototype = {
    preload: function(){},
    create: function (){
        game.stage.backgroundColor = '#a26837';
        console.log('state4');
        
        addChangeStateEventListeners();
        
    },
    update: function (){},
}