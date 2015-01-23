// acceleration
window.ondevicemotion = function(event) {
  ax = event.accelerationIncludingGravity.x;
  ay = event.accelerationIncludingGravity.y;
  az = event.accelerationIncludingGravity.z;
  rotation = event.rotationRate;
  if (rotation !== null) {
    arAlpha = Math.round(rotation.alpha);
    arBeta = Math.round(rotation.bata);
    arGamma = Math.round(rotation.Gamma);
  }
  var acc = document.getElementById('acc');
  var rot = document.getElementById('rot');
  // acc.innerHTML = acc.innerHTML + " ax: " + ax + " ay: " + ay + " az: " + az;
  // rot.innerHTMl = rot.innerHTML + " alpha: " + arAlpha + " beta: " + arBeta + " gamma: " + arGamma;
  ioSocket.emit('sensor', {type: 'sensor',
                           message: 'ax: ' + ax + ' ay: ' + ay + ' az: ' + az});
  ioSocket.emit('sensor', {type: 'sensor',
                           message: ' alpha: ' + arAlpha + ' beta: ' + arBeta + ' gamma: ' + arGamma});
};
window.ondeviceorientation = function(event) {
  alpha = Math.round(event.alpha);
  beta = Math.round(event.beta);
  gamma = Math.round(event.gamma);
  // var ori = document.getElementById('ori');
  // ori.innerHTML = ori.innerHTML + " alpha: " + alpha + " beta: " + beta + " gamma: " + gamma;
  ioSocket.emit('sensor', {type: 'sensor',
                           message: ' alpha: ' + arAlpha + ' beta: ' + arBeta + ' gamma: ' + arGamma});
};

// battery status for mobile Firefox (Android) – others not supported
var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery || navigator.msBattery;

if (battery) {
  // battery API supported
  ioSocket.emit('batterylevel', {type: 'batterylevel',
                                 message: 'batterylevel: ' + Math.floor(battery.level * 100)});
} else {
  ioSocket.emit('batterylevel', {type: 'batterylevel',
                                 message: 'batterylevel not available'});
}
