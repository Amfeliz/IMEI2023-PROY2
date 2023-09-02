function setup() {
  createCanvas(600, 500);
  noStroke();
}

function draw() {
  // Fondo con colores cambiantes y transparentes
  background(random(255), random(255), random(255), 219);
}
// Definir las propiedades de los círculos
let circle1, circle2, circle3;

function setup() {
  createCanvas(600, 500);
  noStroke();

  // Inicializar los círculos con posiciones y colores iniciales
  circle1 = {
    x: random(width),
    y: random(height),
    radius: 20,
    speedX: random(1, 3),
    speedY: random(1, 3),
    fillColor: color(random(255), random(255), random(255)),
  };

  circle2 = {
    x: random(width),
    y: random(height),
    radius: 10,
    speedX: random(1, 3),
    speedY: random(1, 3),
    fillColor: color(random(255), random(255), random(255)),
  };

  circle3 = {
    x: random(width),
    y: random(height),
    radius: 20,
    speedX: random(1, 3),
    speedY: random(1, 3),
    fillColor: color(random(255), random(255), random(255)),
  };
}

function draw() {
  // Mover los círculos
  moveCircle(circle1);
  moveCircle(circle2);
  moveCircle(circle3);

  // Verificar y corregir las colisiones con los límites del canvas
  checkBoundaryCollision(circle1);
  checkBoundaryCollision(circle2);
  checkBoundaryCollision(circle3);

  // Dibujar los círculos
  fill(circle1.fillColor);
  ellipse(circle1.x, circle1.y, circle1.radius * 2);
  
  fill(circle2.fillColor);
  ellipse(circle2.x, circle2.y, circle2.radius * 2);
  
  fill(circle3.fillColor);
  ellipse(circle3.x, circle3.y, circle3.radius * 2);
}

// Función para mover un círculo
function moveCircle(circle) {
  circle.x += circle.speedX;
  circle.y += circle.speedY;
}

// Función para verificar y corregir colisiones con los límites del canvas
function checkBoundaryCollision(circle) {
  if (circle.x < circle.radius || circle.x > width - circle.radius) {
    circle.speedX *= -1;
    circle.fillColor = color(random(255), random(255), random(255));
  }
  if (circle.y < circle.radius || circle.y > height - circle.radius) {
    circle.speedY *= -1;
    circle.fillColor = color(random(255), random(255), random(255));
  }
}
