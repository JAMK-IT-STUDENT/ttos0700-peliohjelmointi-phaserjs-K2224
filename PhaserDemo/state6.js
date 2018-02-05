demo.state6 = function (){};
demo.state6.prototype = {
    preload: function(){
        game.load.image('happy', 'assets/sprites/happy.png');
        game.load.image('star', 'assets/sprites/sss2.png');
        game.load.image('heart', 'assets/sprites/heart2.png');
    },
    create: function (){
        game.stage.backgroundColor = '#26128b';
        addChangeStateEventListeners();
        
        game.add.sprite(centerX, 500, 'happy').anchor.setTo(0.5, 1);
        
        
        var emitter = game.add.emitter(centerX, 500, 2000);
        emitter.makeParticles(['star', 'heart'], 0, 5000, false, true);
        emitter.maxParticleSpeed.set(300, -300);
        emitter.minParticleSpeed.set(-300, -100);
        emitter.gravity = 300;
        emitter.start(false, 5000, 20);
        
        game.time.events.add(2000, function(){
            emitter.start(false, 5000, 20);
            game.time.events.loop(500, function(){
                if(emitter.on){
                    emitter.on = false;
                } else {
                    emitter.on = true;
                }
            });
        });
    },
    update: function (){},
}