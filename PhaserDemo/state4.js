var i;

demo.state4 = function (){};
demo.state4.prototype = {
    preload: function(){},
    create: function (){
        game.stage.backgroundColor = '#a26837';
        addChangeStateEventListeners();
        
        d1 = game.add.sprite(50, 100, 'dragon');
        d2 = game.add.sprite(350, 100, 'dragon');
        d3 = game.add.sprite(650, 100, 'dragon');
        d4 = game.add.sprite(950, 100, 'dragon');
        d5 = game.add.sprite(1250, 100, 'dragon');
        
        d1.scale.setTo(0.2, 0.2);
        d2.scale.setTo(0.2, 0.2);
        d3.scale.setTo(0.2, 0.2);
        d4.scale.setTo(0.2, 0.2);
        d5.scale.setTo(0.2, 0.2);
        
        game.add.tween(d1).to({y:400}, 2000, 'Linear', true);
        i = game.add.tween(d2).to({x: 100, y: 0}, 1000, 'Elastis.easeOut');
        game.add.tween(d3).from({y: 1000}, 1500, 'Circ.easeOut', true);
        game.add.tween(d4.anchor).to({x: 1}, 1000, 'Linear', true, 1000, 2, true);
        game.add.tween(d5).to({alpha: 0}, 1000, 'Bounce', true);
        
    },
    update: function (){},
};