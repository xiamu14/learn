import { interval, fromEvent, animationFrameScheduler } from "rxjs";
import { map, scan, merge } from "rxjs/operators";

const stage = document.getElementById("stage") as HTMLCanvasElement;
const context = stage.getContext("2d");
context.fillStyle = "green";

const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;

const BALL_RADIUS = 10;

const BRICK_ROWS = 5;
const BRICK_COLUMNS = 7;
const BRICK_HEIGHT = 20;
const BRICK_GAP = 3;

function drawIntro() {
  context.clearRect(0, 0, stage.width, stage.height);
  context.textAlign = "center";
  context.font = "24px Courier New";
  context.fillText("Press [<] and [>]", stage.width / 2, stage.height / 2);
}

function drawGameOver(text) {
  context.clearRect(
    stage.width / 4,
    stage.height / 3,
    stage.width / 2,
    stage.height / 2
  );
  context.textAlign = "center";
  context.font = "24px Courier New";
  context.fillText(text, stage.width / 2, stage.height / 2);
}

function drawScore(score) {
  context.textAlign = "center";
  context.font = "16px Courier New";
  context.fillText(score, BRICK_GAP, 16);
}

function drawPaddle(position) {
  context.beginPath();
  context.rect(
    position - PADDLE_WIDTH / 2,
    context.canvas.height - PADDLE_HEIGHT,
    PADDLE_WIDTH,
    PADDLE_HEIGHT
  );
  context.fill();
  context.closePath();
}

function drawBall(ball) {
  context.beginPath();
  context.arc(ball.position.x, ball.position.y, BALL_RADIUS, 0, Math.PI * 2);
  context.fill();
  context.closePath();
}

function drawBrick(brick) {
  context.beginPath();
  context.rect(
    brick.x - brick.width / 2,
    brick.y - brick.height / 2,
    brick.width,
    brick.height
  );
  context.fill();
  context.closePath();
}

function drawBricks(bricks) {
  bricks.forEach((brick) => {
    drawBrick(brick);
  });
}

const TICKER_INTERVAL = Math.ceil(1000 / 60);

const ticker$ = interval(TICKER_INTERVAL, animationFrameScheduler).pipe(
  map(() => ({
    time: Date.now(),
    deltaTime: null,
  })),
  scan((prev, current) => ({
    time: current.time,
    deltaTime: (current.time - prev.time) / 1000,
  }))
);

const PADDLE_CONTROLS = {
  ArrowLeft: -1,
  ArrowRight: 1,
};

const key$ = merge(
  fromEvent(document, "keydown").pipe(
    map((event) => PADDLE_CONTROLS[(event as KeyboardEvent).key])
  ),
  fromEvent(document, "keyup").pipe(map(() => 0))
)
