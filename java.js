var canvas = document.createElement("canvas");
canvas.id = "myCanvas";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

var ctx = canvas.getContext("2d");

function drawWelcomeText() {
  // Очищаем холст
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Текст "Welcome!" по центру
  ctx.fillStyle = "#000";
  ctx.font = "30px Arial";
  var text = "Welcome!";
  var textWidth = ctx.measureText(text).width;
  var x = (canvas.width - textWidth) / 2;
  var y = canvas.height / 2;
  var padding = 10; // Добавляем небольшой отступ вокруг текста

  // Рисуем фон только вокруг текста
  ctx.fillStyle = "#fff";
  ctx.fillRect(x - padding, y - 30 - padding, textWidth + 2 * padding, 60 + 2 * padding);

  // Текст "Welcome!" по центру
  ctx.fillStyle = "#000";
  ctx.fillText(text, x, y - 15); // Сдвигаем текст чуть выше, чтобы он был по центру
}

// Перерисовываем текст при изменении размера окна
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawWelcomeText();
});

// Инициализация
drawWelcomeText();
