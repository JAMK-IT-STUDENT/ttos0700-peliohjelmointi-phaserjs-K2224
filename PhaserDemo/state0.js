var demo = {}, centerX = 1500 / 2, centerY = 1000 / 2, dragon, speed = 6;
demo.state0 = function () {};
demo.state0.prototype = {
    preload: function () {
        game.load.spritesheet('dragon', 'assets/spritesheets/dragonSheet.png', 939, 678);
        game.load.image('background', 'assets/backgrounds/res2background.png');
    },
    
    
    create: function (){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#80ff80';
        console.log('state0');
        
        addChangeStateEventListeners();
        game.world.setBounds(0, 0, 3556, 2000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        var background = game.add.sprite(0, 0, 'background');
        
        dragon = game.add.sprite(centerX, centerY, 'dragon');
        dragon.anchor.setTo(0.5, 0.5);
        dragon.scale.setTo(0.3, 0.3);
        game.physics.enable(dragon);
        dragon.body.collideWorldBounds = true;
        dragon.animations.add('fly', [0, 1, 2, 3]);

        
        game.camera.follow(dragon);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, centerY - 200, 600, 400);
        
    },
    
    
    update: function (){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            dragon.x += speed;
            dragon.scale.setTo(0.3, 0.3);
            dragon.animations.play('fly', 14, true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            dragon.x -= speed;
            dragon.scale.setTo(-0.3, 0.3);
            dragon.animations.play('fly', 14, true);
        }
        else{
            dragon.animations.stop('fly');
            dragon.frame = 0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            dragon.y -= speed;
            /* if(dragon.y < 'y-koordinaatti'){
                    dragon.y = 'sama y-koordinaatti' } */
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            dragon.y += speed;
        }
    }
};


function changeState(i, stateNum){
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners(){
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}