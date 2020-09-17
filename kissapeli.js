let kissakuva;
let taustakuva;
let kissa;

let lautan_leveys = 80;
let lautanY = 350;

let taustan_leveys = 1590;
let taustan_korkeus = 769;

function preload() {
  taustakuva = loadImage('https://igno.cc/opetus/kuvat/tausta.png')
  kissakuva = loadImage('https://igno.cc/opetus/kuvat/cat.png')
}

function setup() {
  var canvas = createCanvas(taustan_leveys, taustan_korkeus);

  kissa = new Kissa();
}

function draw() {
  image(taustakuva, 0, 0, taustan_leveys, taustan_korkeus);

  luo_lautta();
  kissa.liikuta();
}

function luo_lautta() {
  fill('rgb(102, 51, 0)')
  rect(mouseX, taustan_korkeus - 50, lautan_leveys, 30, 30, 20, 0, 0 )
}

class Kissa {
  constructor(){
    this.X = 30;
    this.Y = 200;
    this.leveys = 50;
    this.korkeus = 50;
    this.Xnopeus = 2;
    this.Ynopeus = -2;
  }
  liikuta() {
    image(kissakuva, this.X, this.Y, this.leveys, this.korkeus)
    this.X += this.Xnopeus;
    this.Ynopeus += 0.05;

    if (this.Y +this.korkeus > lautanY) {
      if (this.X > mouseX && this.X< mouseX + lautan_leveys) {
        this.Ynopeus = -abs(this.Ynopeus);
      }
    }

    this.Y += this.Ynopeus;
  }
}
