demo.state7 = function (){};
demo.state7.prototype = {
    preload: function(){},
    create: function (){
        game.stage.backgroundColor = '#7bbd8a';
        console.log('state7');
        
        addChangeStateEventListeners();
        
    },
    update: function (){},
}