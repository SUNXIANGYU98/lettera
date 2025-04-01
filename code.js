export const configurazione = {
  testo: "sun",
  dimensione: 0.8,
  interlinea: 0.7,
  allineamento: "centro",
  percorsoFont: "./assets/InputMonoCondensed-BoldItalic.ttf",
  mostraTestoSotto: true,
  mostraTestoSopra: false,
};

/**
 * Disegna punto
 * Metti qui quello che vuoi disegnare per ogni punto della font!
 *
 
 */
export function disegnaPunto({
  x,
  y,
  angolo,
  indice,
  unita,
  volume,
  alpha = 0,
  beta = 0,
  gamma = 0,
}) {
  push();
  translate(x, y);

  noFill();
  stroke(0);

  if (indice % 2 == 0) fill("grey");
  else fill("orange");
  ellipse(0, 0, sin(frameCount) * 30);

  // Use orientation data to influence color
  // Map alpha (z-rotation) to hue (0-360)
  const hue = map(alpha, 0, 360, 0, 360);

  // Map beta (front-to-back tilt) to saturation (50-100)
  const saturation = map(abs(beta), 0, 90, 50, 100);

  // Map gamma (left-to-right tilt) to brightness (50-100)
  const brightness = map(abs(gamma), 0, 90, 50, 100);

  colorMode(HSB, 360, 100, 100);
  fill(hue, saturation, brightness);
  noStroke();

  rectMode(CENTER);
  rotate(frameCount + indice);

  // Add slight variation based on device tilt
  scale(1 + volume * 10 + (abs(gamma) / 90) * 0.5);
  rect(0, 0, unita / 2);
  pop();
}

export function caricamentoRisorse() {}

export function impostazioni() {
  frameRate(30);
  angleMode(DEGREES);
}

/**
 * Disegna sotto i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sotto(disegnaTesto) {
  background(255);

  fill("blue");
  disegnaTesto();
}

/**
 * Disegna sopra i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sopra(disegnaTesto) {
  //   stroke("white");
  //   noFill();
  //   disegnaTesto();
}
