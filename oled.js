var five = require('johnny-five'),
    board = new five.Board(),
    Oled = require('oled-js');

var font = require('oled-font-5x7')

board.on('ready', function() {
  console.log('Connected to Arduino, ready.');

  var opts = {
    width: 128,
    height: 64, 
    slavePin: 12
  };

  var oled = new Oled(board, five, opts);
  oled.clearDisplay();
  oled.setCursor(1, 1);
  oled.writeString(font, 3, 'Hello World!', 3, true);
  
});