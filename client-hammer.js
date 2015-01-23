// hammerjs gesture events example
var hammerelement = document.getElementById('hammerdiv');
Hammer(hammerelement).on('swipe', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('swipeleft', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('hold', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('tap', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('doubletap', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('drag', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('dragstart', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('dragend', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('dragup', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('dragdown', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('dragleft', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('dragright', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('dragleft', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('transform', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('transformstart', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('transformend', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('rotate', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('pinch', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('pinchin', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('pinchout', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('touch', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('relese', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
Hammer(hammerelement).on('gesture', function(ev) {
  hammerelement.textContent += ev.type + ' ';
  ioSocket.emit('hammerevent', {type: 'hammerevent',
                                message: 'Hammerevent: '+ ev.type});
});
