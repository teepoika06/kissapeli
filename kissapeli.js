let kissakuva;
let taustakuva;
let taustan_leveys = 1590;
let taustan_korkeus = 770;

function preload() {
  taustakuva = loadImage('https://igno.cc/opetus/kuvat/tausta.png')
  kissakuva = loadImage('https://igno.cc/opetus/kuvat/cat.png')
}

function setup() {
  var canvas = createCanvas(taustan_leveys, taustan_korkeus);
}

function draw() {
  image(taustakuva, 0, 0, taustan_leveys, taustan_korkeus);
}

function luo_lautta() {
  
}
