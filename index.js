// canvas
const canvas = document.getElementById("main-game");
const c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
// UI
const playerHealth = document.getElementById("player-health");
const enemyHealth = document.getElementById("enemy-health");
const playerHealthTextFull = document.getElementById("player-health-text-full");
const playerHealthTextCurr = document.getElementById("player-health-text-curr");
const enemyHealthTextFull = document.getElementById("enemy-health-text-full");
const enemyHealthTextCurr = document.getElementById("enemy-health-text-curr");
const timerSpan = document.getElementById("timer");
const resultMsg = document.getElementById("result-msg");
const startPage = document.getElementById("start-page");
const startGameBtn = document.getElementById("start-game-btn");
const game = document.getElementById("game");
const gameOverScreen = document.getElementById("game-over");  
const backBtn = document.getElementById("game-over-back-btn");
const countdownElement = document.getElementById("countdown-timer");
const roundElement = document.getElementById("round");
const playerScoreContainer = document.getElementById("player-score");
const enemyScoreContainer = document.getElementById("enemy-score");
const playerName = document.getElementById("player-name");
const enemyName = document.getElementById("enemy-name");

// Changeable variables
const gravity = 0.9;
const jumpPower = 19;
const horizontalPower = 8;
const attack2Multi = 2;

// user's data
let currUserData = {};
let isGameStart = false;
let isGameOver = false;
let isCountdownEnds = false;
let activateControls = false;

const background = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: "./img/background.png"
});

const shop = new Sprite({
  position: {
    x: 615,
    y: 128
  },
  imageSrc: "./img/shop.png",
  scale: 2.75,
  maxFrames: 6
});

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  w: {
    pressed: false
  },
  c: {
    pressed: false
  },
  v: {
    pressed: false
  },
  "6": {
    pressed: false
  },
  "4": {
    pressed: false
  },
  "8": {
    pressed: false
  },
  "/": {
    pressed: false
  },
  ".": {
    pressed: false
  }
};

// character init
let player;
let enemy;

let animationFrameId;
let renderOrder;

function animate() {
  animationFrameId = window.requestAnimationFrame(animate);

  background.update();
  shop.update();
  c.fillStyle = "rgba(255, 255, 255, 0.1)";
  c.fillRect(0, 0, canvas.width, canvas.height);

  if (renderOrder) {
    enemy.update();
    player.update();
  } else {
    player.update();
    enemy.update();
  }

  // player movement
  player.velocity.x = 0;
  // middles 
  const playerMiddle = player.position.x + player.width / 2;
  const enemyMiddle = enemy.position.x + enemy.width / 2;
  //change direction player
  if (!player.dead) {
    if (playerMiddle > enemyMiddle) player.facingRight = false;
    if (playerMiddle < enemyMiddle) player.facingRight = true;
  }
  if (!enemy.dead) {
    if (enemyMiddle < playerMiddle) enemy.facingRight = true;
    if (enemyMiddle > playerMiddle) enemy.facingRight = false;
  }
  
  if (isGameStart && isCountdownEnds && !player.dead) {
    // horizontal moving
    if (keys.d.pressed && player.lastKey === "d") {
      player.handlesHorizontalSpriteChange();

      player.velocity.x = horizontalPower;
    } else if (keys.a.pressed && player.lastKey === "a") {
      player.handlesHorizontalSpriteChange();

      player.velocity.x = -horizontalPower;
    } else {
      player.handlesIdleSpriteChange();
    }

    // jumping
    if (keys.w.pressed && player.isOnGround) {
      player.velocity.y = -jumpPower;
    }

    // jumping sprite change based on velocity
    player.handlesVerticalSpriteChange();

    // attacking
    if (keys.c.pressed && 
      !isGameOver && 
      !player.isAnimatingAttack 
    ) {
      player.attack1();
    } else if (
      keys.v.pressed && 
      !player.attack2Cooldown && 
      !isGameOver && 
      !player.isAnimatingAttack
    ) {
      player.attack2();
    }
  }
  
  // enemy movement 
  enemy.velocity.x = 0;

  if (isGameStart && isCountdownEnds && !enemy.dead) {
    // horizontal moving
    if (keys[6].pressed && enemy.lastKey === "6") {
      enemy.handlesHorizontalSpriteChange();     

      enemy.velocity.x = horizontalPower;
    } else if (keys[4].pressed && enemy.lastKey === "4") {
      enemy.handlesHorizontalSpriteChange();

      enemy.velocity.x = -horizontalPower;
    } else {
      enemy.handlesIdleSpriteChange();
    }

    // jumping
    if (keys[8].pressed && enemy.isOnGround) {
      enemy.velocity.y = -jumpPower;
    }

    // jumping sprite change based on velocity
    enemy.handlesVerticalSpriteChange();

    // attacking
    if (
      keys["/"].pressed && 
      !isGameOver && 
      !enemy.isAnimatingAttack
    ) {
      enemy.attack1();
    } else if (
      keys["."].pressed && 
      !enemy.attack2Cooldown && 
      !isGameOver && 
      !enemy.isAnimatingAttack
    ) {
      enemy.attack2();
    }
  }

  // detect for collision & enemy gets hit with attack1
  if (
    rectangularCollision({
    rectangle1: player,
    rectangle2: enemy
  }) && 
    player.isAttacking && 
    player.currFrame === player.attackFrameThreshold &&
    !enemy.isHit
  ) {
    if (enemy.currHealth > 0) {
      enemy.isHit = true;
      enemy.isHitReset(player.attack1AttackSpeed);
      
      if (player.isCriticalHit()) {
        enemy.currHealth -= Math.round(player.dps * player.critDmg);
        player.handlesCritSfx();
      } else {
        enemy.currHealth -= Math.round(player.dps);
      }

      enemy.currHealth = Math.max(0, enemy.currHealth); 
      gsap.to(enemyHealth, {
        width: `${(enemy.currHealth / enemy.startHealth) * 100}%`
      });
      enemyHealthTextCurr.textContent = enemy.currHealth;
      enemy.handlesGetHitSpriteChange();
    }
  }

  // detect for collision & enemy gets hit with attack2
  if (
    rectangularCollision2({
    rectangle1: player,
    rectangle2: enemy
  }) && 
    player.isAttacking2 && 
    player.currFrame === player.attackFrameThreshold &&
    !enemy.isHit
  ) {
    if (enemy.currHealth > 0) {
      enemy.isHit = true;
      enemy.isHitReset(player.attack1AttackSpeed);
      
      if (player.isCriticalHit()) {
        enemy.currHealth -= 
          Math.round(player.dps * player.critDmg * attack2Multi);

        player.handlesCritSfx();
      } else {
        enemy.currHealth -= Math.round(player.dps * attack2Multi);
      }
      
      enemy.currHealth = Math.max(0, enemy.currHealth); 
      gsap.to(enemyHealth, {
        width: `${(enemy.currHealth / enemy.startHealth) * 100}%`
      });
      enemyHealthTextCurr.textContent = enemy.currHealth;
      enemy.handlesGetHitSpriteChange();
    }
  }
  
  // flicker enemy HP bar below 30%
  if (enemy.currHealth / enemy.startHealth < 0.3 && !enemy.isHPBarFlicker) {
    enemy.isHPBarFlicker = true;
    startFlickerEnemy(enemyHealth);
  } 

  // detect for collision & player gets hit with attack1
  if (
    rectangularCollision({
    rectangle1: enemy,
    rectangle2: player
  }) && 
    enemy.isAttacking && 
    enemy.currFrame === enemy.attackFrameThreshold &&
    !player.isHit
  ) {
    if (player.currHealth > 0) {
      player.isHit = true;
      player.isHitReset(enemy.attack1AttackSpeed);

      if (enemy.isCriticalHit()) {
        player.currHealth -= Math.round(enemy.dps * enemy.critDmg);

        enemy.handlesCritSfx();
      } else {
        player.currHealth -= Math.round(enemy.dps);
      }
      
      player.currHealth = Math.max(0, player.currHealth);
      gsap.to(playerHealth, {
        width: `${(player.currHealth / player.startHealth) * 100}%`
      });
      playerHealthTextCurr.textContent = player.currHealth;
      
      player.handlesGetHitSpriteChange();
    }
  }

  // detect for collision & player gets hit with attack2
  if (
    rectangularCollision2({
    rectangle1: enemy,
    rectangle2: player
  }) && 
    enemy.isAttacking2 && 
    enemy.currFrame === enemy.attackFrameThreshold &&
    !player.isHit
  ) {
    if (player.currHealth > 0) {
      player.isHit = true;
      player.isHitReset(enemy.attack1AttackSpeed);

      if (enemy.isCriticalHit()) {
        player.currHealth -= 
          Math.round(enemy.dps * enemy.critDmg * attack2Multi);

        enemy.handlesCritSfx();
      } else {
        player.currHealth -= Math.round(enemy.dps * attack2Multi);
      }
      
      player.currHealth = Math.max(0, player.currHealth);
      gsap.to(playerHealth, {
        width: `${(player.currHealth / player.startHealth) * 100}%`
      });
      playerHealthTextCurr.textContent = player.currHealth;
      
      player.handlesGetHitSpriteChange();
    }
  }

  // flicker player HP bar below 30%
  if (player.currHealth / player.startHealth < 0.3 && !player.isHPBarFlicker) {
    player.isHPBarFlicker = true;
    startFlickerPlayer(playerHealth);
  } 

  // check if currHealth === 0 switching sprite and state
  if (player.currHealth === 0) {
    player.handlesDeadSpriteChange();
  }
  if (enemy.currHealth === 0) {
    enemy.handlesDeadSpriteChange();
  }

  // end game based on health
  if (enemy.dead || player.dead) {
    if (!isGameOver) {
      determineWinnerMsg({ player, enemy });
    }
  }

  // check for dead
  if (player.dead) player.velocity.x = 0;
  if (enemy.dead) enemy.velocity.x = 0;
}

// EVENT LISTENERS

window.addEventListener("keydown", (e) => {
  // prevent certain keys from interrupting 
  const keysToPrevent = 
    [" ", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter"];
  if (activateControls) {
    if (keysToPrevent.includes(e.key)) e.preventDefault();
  }

  // player only runs if not dead and timer is not 0
  if (activateControls) {
    if (!player.dead) {
      switch (e.key) {
        case "d": // right
        case "a": // left
          keys[e.key].pressed = true;
          player.lastKey = `${e.key}`;
          break;
        case "w": // up
        case "c": // attack1
        case "v": // attack2
          keys[e.key].pressed = true;
          break;
      }
    }
  }

  // enemy only runs if not dead and timer is not 0
  if (activateControls) {
    if (!enemy.dead) {
      switch (e.key) {
        case "6": // right  
        case "4": // left
          keys[e.key].pressed = true;
          enemy.lastKey = `${e.key}`;
          break;
        case "8": // up
        case "/": // attack1
        case ".": // attack2
          keys[e.key].pressed = true;
          break;
      }
    }
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    // player
    case "d": // player right
    case "a": // player left
    case "w": // player up
    case "c": // player attack1
    case "v": // player attack2
    case "6": // enemy right
    case "4": // enemy left
    case "8": // enemy up
    case "/": // enemy attack1
    case ".": // enemy attack2
      keys[e.key].pressed = false;
      break;
  }
});

async function startBtnHandler(e) {
  e.preventDefault();
  activateControls = true;

  blurAllInputs();
  
  pauseBgm(generalBgm.lounge);
  
  // user inputs
  const setTimer = parseInt(document.getElementById("set-timer").value);
  const playerHPStart = parseFloat(document.getElementById("starting-health-player-1").value);
  const enemyHPStart = parseFloat(document.getElementById("starting-health-player-2").value);
  const playerDmgStart = parseFloat(document.getElementById("damage-player-1").value);
  const enemyDmgStart = parseFloat(document.getElementById("damage-player-2").value);
  const critChanceStart = parseFloat(document.getElementById("crit-chance").value);
  const critDmgStart = parseFloat(document.getElementById("crit-dmg").value);
  const isBgmOn = document.getElementById("bgm-toggle").checked;
  const isSfxOn = document.getElementById("sfx-toggle").checked;
  const playerSelection = document.getElementById("player-options").value;
  const enemySelection = document.getElementById("enemy-options").value;
  const roundSelection = Number(document.getElementById("round-options").value);
  
  // check user
  if (!roundSelection) {
    alert("Please choose a battle format.");
    return;
  }
  
  if (!playerSelection || !enemySelection) {
    alert("Please choose character(s).");
    playBgm(generalBgm.lounge);
    return;
  }

  if (critChanceStart < 0 || critChanceStart > 0.5) {
    alert("Please set crit chance between 0 and 0.5.");
    playBgm(generalBgm.lounge);
    return;
  }

  if (critDmgStart < 1.5 || critDmgStart > 2.5) {
    alert("Please set crit damage between 1.5 and 2.5");
    playBgm(generalBgm.lounge);
    return;
  }

  if (setTimer > 600) {
    alert("Please set timer no more than 600 seconds.");
    playBgm(generalBgm.lounge);
    return;
  } else if (setTimer < 1) {
    alert("Please set timer no less than 1 second.");
    playBgm(generalBgm.lounge);
    return;
  }

  if (playerHPStart < 50 || enemyHPStart < 50) {
    alert("Please set HP no less than 50.");
    playBgm(generalBgm.lounge);
    return;
  }

  if (playerDmgStart < 1 || enemyDmgStart < 1) {
    alert("Please set damage no less than 1.");
    playBgm(generalBgm.lounge);
    return;
  }

  isGameStart = true;
  
  // updating user data
  updateUserData({
    setTimer,
    playerHPStart,
    enemyHPStart,
    playerDmgStart,
    enemyDmgStart,
    critChanceStart,
    critDmgStart,
    isBgmOn,
    isSfxOn,
    playerSelection,
    enemySelection,
    roundSelection
  });

  initializePlayer(
    {
      x: 100,
      y: 360
    },
    characterCollection[currUserData.playerSelection],
    currUserData.playerHP,
    currUserData.playerDmg,
    currUserData.critChance,
    currUserData.critDmg
  );
  initializeEnemy(
    {
      x: 855,
      y: 360
    },
    characterCollection[currUserData.enemySelection],
    currUserData.enemyHP,
    currUserData.enemyDmg,
    currUserData.critChance,
    currUserData.critDmg
  );

  await waitForImagesToLoad();
  
  toggleStartGame();
  gameProgression();
  startGameBtn.removeEventListener("click", startBtnHandler);
  backBtn.addEventListener("click", backBtnHandler);
}

function backBtnHandler() {
  gameOverScreen.classList.add("hidden");
  cancelAnimationFrame(animationFrameId);
  isGameOver = false;
  isCountdownEnds = false;
  activateControls = false;
  setTimeout(() => {
    restartHP(0.1);
  }, 200);

  playBgm(generalBgm.lounge);
  stopBgm();
  toggleBackToMenu();

  startGameBtn.addEventListener("click", startBtnHandler);
  backBtn.removeEventListener("click", backBtnHandler);
}

startGameBtn.addEventListener("click", startBtnHandler);
backBtn.removeEventListener("click", backBtnHandler);


document.addEventListener('click', () => {
  playBgm(generalBgm.lounge);
}, { once: true }); 
