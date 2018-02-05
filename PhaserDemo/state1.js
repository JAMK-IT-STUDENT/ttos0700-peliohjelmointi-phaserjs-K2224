demo.state1 = function (){};

var cursors, vel = 500, rock;

demo.state1.prototype = {
    preload: function(){
        game.load.tilemap('map2', 'assets/tilemaps/map2.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('_11_background', 'assets/tilemaps/_11_background.png');
        game.load.image('rocky01', 'assets/tilemaps/rocky01.png');
        game.load.image('dragon', 'assets/sprites/dragon.png')
    },
    create: function (){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#DDDDDD';
        
        addChangeStateEventListeners();   
        
        var map = game.add.tilemap('map2');
        map.addTilesetImage('_11_background');
        map.addTilesetImage('rocky01');
        
        var sky = map.createLayer('sky');
        rock = map.createLayer('rock');
        
        map.setCollisionBetween(1, 16, true, 'rock');
        
        dragon = game.add.sprite(200, 200, 'dragon');
        dragon.scale.setTo(0.2, 0.2);
        game.physics.enable(dragon);
        
        cursors = game.input.keyboard.createCursorKeys();
        },
    update: function (){
        game.physics.arcade.collide(dragon, rock, function(){ console.log('hitting rocks:')});
        
        if(cursors.up.isDown){
            dragon.body.velocity.y = -vel;
        }
        else if(cursors.down.isDown){
            dragon.body.velocity.y = vel;
        }
        else{
            dragon.body.velocity.y = 0;
        }
        if(cursors.left.isDown){
            dragon.body.velocity.x = -vel;
        }
        else if(cursors.right.isDown){
            dragon.body.velocity.x = vel;
        }
        else{
            dragon.body.velocity.x = 0;
        }
    },
}