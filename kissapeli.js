let kissakuva;
let taustakuva;
let kissa;

let lautan_leveys = 80;
let lautanY = 35;

let taustan_leveys = 1590;
let taustan_korkeus = 769;

var kissalista = [];
var kissa_ajastin;

var elamia_jaljella = 9;
var pelastetut_kissat = 0;

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

  kissalista.forEach(function(kissa_olio, monesko) {
    kissa_olio.liikuta();

    if (kissa_olio.Y > taustan_korkeus) {
      kissalista.splice(monesko, 1);
      elamia_jaljella -= 1;
    }

    if (kissa_olio.X > taustan_leveys){
      kissalista.splice(monesko, 1);
      pelastetut_kissat += 1;
    }
  })

  textSize(40);
  textAlign(LEFT, TOP);
  text("Elämät: " + elamia_jaljella + " Pelastetut kissat " + pelastetut_kissat,5,5);
  if (elamia_jaljella <= 0) gameOver();
}

function gameOver() {
  noLoop();
  textSize(80);
  textAlign(CENTER);
  text("Game Over", taustan_leveys / 2, taustan_korkeus / 2);
}

function aloitaPeli() {
  kissalista = [];
  elamia_jaljella = 9;
  pelastetut_kissat = 0;
  clearTimeout(kissa_ajastin);
  loop();

  luo_kissoja();
}

function luo_lautta() {
  fill('rgb(102, 51, 0)')
  rect(mouseX, taustan_korkeus - 50, lautan_leveys, 30, 30, 20, 0, 0 )
}

function luo_kissoja() {
  let uusi_kisu = new Kissa();
  kissalista.unshift(uusi_kisu);
  kissa_ajastin = setTimeout(luo_kissoja, 2000);
}

class Kissa {
  constructor(){
    this.X = 30;
    this.Y = 200;
    this.leveys = 50;
    this.korkeus = 50;
    this.Xnopeus = 2;
    this.Ynopeus = -2;
    this.kulma = 0;
  }
  liikuta() {
    this.X += this.Xnopeus;
    this.Ynopeus += 0.05;

    if (this.Y + this.korkeus > lautanY) {
      if (this.X > mouseX && this.X< mouseX + lautan_leveys) {
        this.Ynopeus = -abs(this.Ynopeus);
      }
    }

    this.Y += this.Ynopeus;

    this.kulma += 1;

    push();
    translate(this.X, this.Y);
    rotate(this.kulma);
    imageMode(CENTER);
    image(kissakuva, 0, 0, this.leveys, this.korkeus);
    pop();
  }
}
