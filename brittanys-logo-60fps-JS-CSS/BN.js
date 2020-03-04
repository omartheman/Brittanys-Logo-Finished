const nRight = document.querySelector('.n-right');
const nMid = document.querySelector('.n-mid');
const nLeft = document.querySelector('.n-left'); 
nMid.style.opacity = 0; 
nLeft.style.opacity = 0;
const traceRight = document.querySelector('.trace-right');
traceRight.style.opacity = 0;
const value = 0.01;
const diag_n = 0.10202;
const speedN = 1.2;
const nodeBottomRight = document.querySelector('.node-bottom-right');
const traceLeftUpper = document.querySelector('.trace-left-upper');
const traceLeftLower = document.body.querySelector('.trace-left-lower');
const nodeBottomLeft = document.body.querySelector('.node-bottom-left');

n_right_draw();
n_left_draw();
n_mid_draw();
trace_right_draw();
setTimeout(trace_left_upper_draw, 450);

function n_right_draw() {
  let v = 73.329776;
  let mult = 1;
  let id_n_right_draw = setInterval(frame, 30*speedN);
  const n_mid_delay = 1000;

  function frame() {
    "use strict";
    if (v < 86.207488) {
      v = v + value*mult;
      mult += 1; 
      nRight.setAttribute(
        'd', 
        `M 77.323669,
        73.329776 V ${v}`);
    }
    else {
      clearInterval(id_n_right_draw);
    }
  }
}
function n_mid_opacity(){
  const id_n_mid_opacity = setInterval(frame, 5);
  let n_mid_opacity = 0;
  function frame(){
    if (n_mid_opacity < 1) {
      nMid.style.opacity = n_mid_opacity;
      n_mid_opacity += 0.03;
    }
    else {
      clearInterval(id_n_mid_opacity);
      n_mid_draw();
    }
  }; //function frame()
}; //function n_mid_opacity()

function n_mid_draw(){

  nMid.style.opacity = 1;
  let mx = 77.323669;
  let my = 90.909993;
  let mxSlope = 77.323669;
  let mySlope = 90.909993;
  let mx2Slope = 62.242255;
  let my2Slope = 73.744814;
  let multX = 1;
  let multY = 1.1;
  const id_n_mid = setInterval(frame, 15*speedN);
  const diagMult = 0.010;
  function frame(){
    if (mx < 62.242256 && my < 73.744815) {
      clearInterval(id_n_mid);
      nMid.setAttribute(
        'd',
        'M 77.323669,90.909993 62.242255,73.744814'
      );
    }
    else {
      mx = mx + (mx2Slope-mxSlope)*diagMult;
      my = my + (my2Slope-mySlope)*diagMult;
      multX ++;
      multY ++; 
      nMid.setAttribute(
        'd', 
        `M 77.323669,90.909993 
        ${mx},${my}`);
    }
  } //function frame()
}; //function n_mid_draw()
//n left original values: d="M 62.242255,73.744814 V 90.930991" 
function n_left_opacity() {
  "use strict";
  nLeft.style.opacity = 0;
  const id = setInterval(frame, 5);
  let opa = 0;
  function frame() {
    if (opa < 1) {
      nLeft.style.opacity = opa;
      opa += 0.03; 
    }
    else {
      clearInterval(id);
      n_left_draw();
    }
  }
}
function n_left_draw(){
  nLeft.style.opacity = 1;
  let v = 90.930991;
  const id = setInterval(frame, 9*speedN);
  function frame(){
    if (v > 73.744814) {
      nLeft.setAttribute('d',`M 62.242255,90.930991 V ${v}`);
      v -= 0.1;
    }
    else {
      clearInterval(id);
      nLeft.setAttribute('d','M 62.242255,73.744814 V 90.930991');
    }
  }
}; //function n_left_draw
//Trace right original d: d="m 62.263056,267.82832 v 14.77151"
function trace_right_draw() {
  traceRight.setAttribute('d', 'm 62.263056,267.82832 v 0');
  traceRight.style.opacity = 1;
  let v = 0;
  const id = setInterval(frame, 15);
  function frame() {
    if (v <= 14.77151) {
      traceRight.setAttribute('d', `m 62.263056,267.82832 v ${v}`)
      v += 0.2;
    }
    else {
      clearInterval(id);
      traceRight.setAttribute('d', 'm 62.263056,267.82832 v 14.77151');
      node_bottom_right_expand();
    }
  }
}; 
function trace_left_upper_draw() {
  "use strict"; 
  const id = setInterval(frame, 4);
  let offset = -7.7;
  function frame(){
    if (offset < 0){
      offset += 0.1;
      traceLeftUpper.style.strokeDashoffset = offset;
    }
    else {
      clearInterval(id);
      trace_left_lower_draw();
    }
  };
};
// trace-left-lower 'd' original: d="m 58.044259,280.18767 v 8.65285"
function trace_left_lower_draw(){
  traceLeftLower.style.strokeOpacity = 1;
  const id = setInterval(frame, 4);
  let v = 0;
  function frame() {
    if (v < 8.65285) {
      traceLeftLower.setAttribute('d', `m 58.044259,280.18767 v ${v}`);
      v += 0.1;
    }
    else {
      clearInterval(id);
      node_bottom_left_expand();
    }
  }
}
function node_bottom_right_expand() {
  "use strict";
  // Original r: r="1.257478"
  const id = setInterval(frame, 40);
  let r = 0;
  function frame() {
    if (r < 1.257478){
      nodeBottomRight.setAttribute('r', r);
      r += 0.1;
    }
    else {
      clearInterval(id);
    }
  }
};
// 1.257478
function node_bottom_left_expand() {
  "use strict";
  // Original r: r="1.257478"
  const id = setInterval(frame, 40);
  let r = 0;
  function frame() {
    if (r < 1.257478){
      nodeBottomLeft.setAttribute('r', r);
      r += 0.1;
    }
    else {
      clearInterval(id);
    }
  }
};