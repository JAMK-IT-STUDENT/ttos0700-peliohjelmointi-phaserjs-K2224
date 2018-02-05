var cannon, cannonballs, velocity = 1000, nextFire = 0, fireRate = 200, enemy, bullet, enemyGroup;

demo.state2 = function (){};
demo.state2.prototype = {
    preload: function(){
        game.load.image('cannon', 'assets/sprites/cannon.png');
        game.load.image('bullet', 'assets/sprites/cannon_ball2.png');
    },
    create: function (){
        game.stage.backgroundColor = '#567c46';
        addChangeStateEventListeners();
    
        
        cannonballs = game.add.group();
        cannonballs.enableBody = true;
        cannonballs.physicsBodyType = Phaser.Physics.ARCADE;
        cannonballs.createMultiple(50,'bullet');
        cannonballs.setAll('checkWorldBounds', true);
        cannonballs.setAll('outOfBoundsKill', true);
        cannonballs.setAll('anchor.y', 0.5);
        cannonballs.setAll('scale.x', 0.85);
        cannonballs.setAll('scale.y', 0.85);
        
        cannon = game.add.sprite(centerX, centerY, 'cannon');
        cannon.anchor.setTo(0.5);
        cannon.scale.setTo(-0.4);
        
        enemy = game.add.sprite(100, 350, 'dragon');
        enemy.scale.setTo(0.3);
        game.physics.enable(enemy);
        
        enemyGroup = game.add.group();
        enemyGroup.enableBody = true;
        enemyGroup.physicsBodyType = Phaser.Physics.ARCADE;
        
        for (var i=0; i<3; i++){
            enemyGroup.create(1300, 350 * i + 100, 'dragon');
        }
        
        enemyGroup.setAll('anchor.y', 0.4);
        enemyGroup.setAll('anchor.x', 0.5);
        enemyGroup.setAll('scale.y', 0.3);
        enemyGroup.setAll('scale.x', 0.3);
        
    },
    update: function (){
        cannon.rotation = game.physics.arcade.angleToPointer(cannon);
        if (game.input.activePointer.isDown){
            this.fire();
        }
        
        game.physics.arcade.overlap(cannonballs, enemy, this.hitEnemy);
        game.physics.arcade.overlap(cannonballs, enemyGroup, this.hitGroup);
    },
    fire : function(){
        if(game.time.now > nextFire) {
           nextFire = game.time.now + fireRate;
           console.log('firing');
           bullet = cannonballs.getFirstDead();
           bullet.reset(cannon.x, cannon.y);
        
           game.physics.arcade.moveToPointer(bullet, velocity);
           bullet.rotation = game.physics.arcade.angleToPointer(bullet);
           }
    },
    hitEnemy: function() {
        console.log('hit'); 
        enemy.kill();
        bullet.kill();
    },
    hitGroup: function(b, e){
        b.kill();
        e.kill();
    }
};