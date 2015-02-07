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
  oled.setCursor(50, 20);
  oled.writeString(font, 6, 'O', 6, true);
  oled.drawPixel([64, 15, 1]);
  oled.fillRect(64, 5, 3, 10, 1);
  oled.fillRect(56, 5, 3, 10, 1);
  oled.fillRect(48, 5, 3, 10, 1);
  oled.fillRect(64, 32, 5, 5, 1);
});