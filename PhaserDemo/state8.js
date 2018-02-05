var text;

demo.state8 = function (){};
demo.state8.prototype = {
    preload: function(){},
    create: function (){
        game.stage.backgroundColor = '#4f3361';
        addChangeStateEventListeners();
        
        text = 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        
        this.spellOutText(100, 100, 1000, text, 30, 40, '#fff');
    },
    spellOutText: function (x, y, width, text, fontSize, speed, fill, font){
        var sentence = game.add.text(x, y, '', {fontSize: fontSize + 'px', fill: fill, font: font});
        var loop = game.time.events.loop(speed, addChar);
        
        var index = 0;
        
        function addChar() {
            sentence.text += text(index);
            index++;
        }
    }
};