/**
 * Stopwatch
 */

function MyStopwatch() {

  this.startTime = Date.now();
  this.actualTime = Date.now();

  this.duration = function() {
    console.log('start: ' + this.startTime);
    console.log('actual: ' + this.actualTime);
  }

  this.lap = function() {
    let now = Date.now();
    this.actualTime = now - this.startTime;
    this.duration();
  }

  this.stop = function() {
    
  }
  
}

// const mysw = new MyStopwatch();
// mysw.duration();



function Stopwatch() {
  let startTime, endTime, running, duration = 0;

  this.start = function() {
    if (running)
      throw new Error('Stopwatch is already started.');

    running = true;
    startTime = new Date();
  };

  this.stop = function() {
    if (!running)
      throw new Error('Stopwatch is not started.');
    
    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function() { return duration; }
  });
}

const sw = new Stopwatch();

