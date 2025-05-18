function rectangularCollision({ rectangle1, rectangle2 }) {
  return (    
    rectangle1.attackBoxAll.attackBoxCurr.position.x + rectangle1.attackBoxAll.attackBoxCurr.width >= 
      rectangle2.position.x &&
    rectangle1.attackBoxAll.attackBoxCurr.position.x <= 
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBoxAll.attackBoxCurr.position.y + rectangle1.attackBoxAll.attackBoxCurr.height >= 
      rectangle2.position.y &&
    rectangle1.attackBoxAll.attackBoxCurr.position.y <= 
      rectangle2.position.y + rectangle2.height
  );
}

function rectangularCollision2({ rectangle1, rectangle2 }) {
  return (    
    rectangle1.attackBoxAll.attackBoxCurr2.position.x + rectangle1.attackBoxAll.attackBoxCurr2.width >= 
      rectangle2.position.x &&
    rectangle1.attackBoxAll.attackBoxCurr2.position.x <= 
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBoxAll.attackBoxCurr2.position.y + rectangle1.attackBoxAll.attackBoxCurr2.height >= 
      rectangle2.position.y &&
    rectangle1.attackBoxAll.attackBoxCurr2.position.y <= 
      rectangle2.position.y + rectangle2.height
  );
}

function determineWinnerMsg({ player, enemy }) {
  clearInterval(timerId);
  resultMsg.style.display = "block";
  
  if (player.currHealth === enemy.currHealth) {
    resultMsg.textContent = "A Tie, Unbroken!";
    if (currUserData.isSfxOnOrOff) playSfx(sfxLibrary.game.tie);

    setTimeout(() => {
      resultMsg.style.display = "none";

      gameProgression();
    }, 3000);

    isGameOver = true;
  } else if (player.currHealth > enemy.currHealth) {
    resultMsg.textContent = "Victory for Player 1!";
    if (currUserData.isSfxOnOrOff) playSfx(sfxLibrary.game.victory);

    addScore(playerScoreContainer);
    playerScore++;

    setTimeout(() => {
      resultMsg.style.display = "none";

      gameProgression();
    }, 3000);

    isGameOver = true;
  } else {
    if (currUserData.isSfxOnOrOff) playSfx(sfxLibrary.game.victory);

    addScore(enemyScoreContainer);
    enemyScore++;

    resultMsg.textContent = "Victory for Player 2!";
    setTimeout(() => {
      resultMsg.style.display = "none";

      gameProgression();
    }, 3000);

    isGameOver = true;
  }
}

let timerId;
function decreaseTimer(time) {
  let timeSelected = time;
  timerId = setInterval(() => {
    timeSelected--;
    timerSpan.textContent = timeSelected;
    
    if (timeSelected <= 0 && !isGameOver) {
      clearInterval(timerId);
      countdownElement.textContent = "Time's up!"
      if (currUserData.isSfxOnOrOff) 
        playSfx(sfxLibrary.game.timeIsUp);
      setTimeout(() => {
        countdownElement.textContent = "";
        determineWinnerMsg({ player, enemy });
      }, 3000);
      isGameOver = true;
    }
  }, 1000);
}

function countdown() {
  let count = 3;

  const countdownInterval = setInterval(() => {
    countdownElement.textContent = `Ready... ${count}`;
    count--;

    if (count < 0) {
      clearInterval(countdownInterval);
      countdownElement.textContent = "FIGHT!!!";
      setTimeout(() => {
        countdownElement.textContent = "";

        decreaseTimer(currUserData.timer);
        isCountdownEnds = true;
      }, 1000);
    }
  }, 1000);
}

function addScore(container) {
  const diamond = document.createElement("i");
  diamond.classList.add("fas", "fa-gem");

  container.appendChild(diamond);
}

function clearScore(...containers) {
  containers.forEach(container => container.innerHTML = "");
}



function playWinOverall() {
  if (currUserData.isSfxOnOrOff)
    playSfx(sfxLibrary.game.winOverall);
}

function playTieOverall() {
  if (currUserData.isSfxOnOrOff)
    playSfx(sfxLibrary.game.tieOverall);
}

function endGameConclusion() {
  setTimeout(() => {
    round = 0;
    playerScore = 0;
    enemyScore = 0;
    clearScore(playerScoreContainer, enemyScoreContainer);
    gameOverScreen.classList.remove("hidden");
    resultMsg.style.display = "none";
  }, 3500);
}

let round = 0;
let playerScore = 0;
let enemyScore = 0;

function gameProgression() { 
  if (round === currUserData.roundSelection) {
    if (playerScore > enemyScore) {
      resultMsg.style.display = "block";
      resultMsg.textContent = "Player 1 emerges victorious!";
      playWinOverall();
    } else if (playerScore < enemyScore) {
      resultMsg.style.display = "block";
      resultMsg.textContent = "Player 2 emerges victorious!";
      playWinOverall();
    } else {
      resultMsg.style.display = "block";
      resultMsg.textContent = "A tie for the ages!";
      playTieOverall();
    }

    endGameConclusion();
    return;
  } 

  if (
    (currUserData.roundSelection === 5 && (playerScore === 3 || enemyScore === 3)) ||
    (currUserData.roundSelection === 3 && (playerScore === 2 || enemyScore === 2))
  ) {
    if (playerScore > enemyScore) {
      resultMsg.style.display = "block";
      resultMsg.textContent = "Player 1 emerges victorious!";
      playWinOverall();
    } else if (playerScore < enemyScore) {
      resultMsg.style.display = "block";
      resultMsg.textContent = "Player 2 emerges victorious!";
      playWinOverall();
    }

    endGameConclusion();
    return;
  }

  round++;
  cancelAnimationFrame(animationFrameId);
  isGameOver = false;
  isCountdownEnds = false;
  
  stopBgm();
  
  setTimeout(() => {
    if (currUserData.roundSelection === 1) {
      resultMsg.style.display = "block";
      resultMsg.textContent = `Sudden Death!`;
      playSfx(sfxLibrary.game.suddenDeath);
    } else if (currUserData.roundSelection === 3) {
      resultMsg.style.display = "block";
      
      if (currUserData.isSfxOnOrOff) {
        if (round === 1) {
          playSfx(sfxLibrary.game.roundOne);
          resultMsg.textContent = `Round ${round}`;
        } else if (round === 2) {
          playSfx(sfxLibrary.game.roundTwo);
          resultMsg.textContent = `Round ${round}`;
        } else {
          playSfx(sfxLibrary.game.roundFinal);
          resultMsg.textContent = "Final Round";
        } 
      }
    } else {
      resultMsg.style.display = "block";

      if (currUserData.isSfxOnOrOff) {
        if (round === 1) {
          playSfx(sfxLibrary.game.roundOne);
          resultMsg.textContent = `Round ${round}`;
        } else if (round === 2) {
          playSfx(sfxLibrary.game.roundTwo);
          resultMsg.textContent = `Round ${round}`;
        } else if (round === 3) {
          playSfx(sfxLibrary.game.roundThree);
          resultMsg.textContent = `Round ${round}`;
        } else if (round === 4) {
          playSfx(sfxLibrary.game.roundFour);
          resultMsg.textContent = `Round ${round}`;
        } else {
          playSfx(sfxLibrary.game.roundFinal);
          resultMsg.textContent = "Final Round";
        }
      }
    } 
  }, 1200);
  
  resetFighter(
    player,
    {
      x: 100,
      y: 360
    },
    "left"
  );

  resetFighter(
    enemy,
    characterCollection[currUserData.enemySelection].position,
    "right"
  );
  restartHP(4);
  
  randomRendering();
  animate();
  updateUI();

  if (currUserData.isBgmOnOrOff) 
    playBgm(randomBgm(gameBgmLibrary));

  setTimeout(() => {
    setTimeout(() => {
      resultMsg.style.display = "none"
    }, 500);

    if (currUserData.isSfxOnOrOff) {
      setTimeout(() => {
        playSfx(sfxLibrary.game.countdown);
      }, 1000);
    }
    
    countdown();
  }, 3500);
}

function randomRendering() {
  renderOrder = Math.random() < 0.5;
}

function waitForImagesToLoad() {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      if (player.image && enemy.image) {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });
}

function resetFighter(
  fighter,
  position,
  characterPos
) {
  const positionCopy = { ...position };
  console.log(positionCopy)

  fighter.dead = false;
  fighter.position = positionCopy;
  fighter.stopAnimation = false;
  fighter.currFrame = 0;
  fighter.framesElapsed = 0;
  
  if (characterPos === "left") {
    fighter.image = fighter.sprites.idleLeftPos.image;
    fighter.maxFrames = fighter.sprites.idleLeftPos.maxFrames;
  } else if (characterPos === "right") {
    fighter.image = fighter.sprites.idleRightPos.image;
    fighter.maxFrames = fighter.sprites.idleLeftPos.maxFrames;
  }

  fighter.currHealth = fighter.startHealth;
}

function updateUI() {
  timerSpan.textContent = currUserData.timer;
  playerHealthTextFull.textContent = player.startHealth;
  playerHealthTextCurr.textContent = currUserData.playerHP;
  enemyHealthTextFull.textContent = enemy.startHealth;
  enemyHealthTextCurr.textContent = currUserData.enemyHP;
  roundElement.textContent = round;
  playerName.textContent = player.name;
  playerName.style.color = player.nameColor;
  enemyName.textContent = enemy.name;
  enemyName.style.color = enemy.nameColor;
}

function toggleStartGame() {
  startPage.classList.add("hidden");
  game.classList.remove("hidden");
}

function toggleBackToMenu() {
  startPage.classList.remove("hidden");
  game.classList.add("hidden");
}

function restartHP(duration) {
  gsap.killTweensOf(playerHealth);
  gsap.killTweensOf(enemyHealth);

  gsap.to(playerHealth, 
    {
      width: "100%",
      duration: duration,
      ease: "power2.out",
      onComplete: () => {
        player.isHPBarFlicker = false;
      }
    });
  
  gsap.to(enemyHealth, 
    {
      width: "100%",
      duration: duration,
      ease: "power2.out",
      onComplete: () => {
        enemy.isHPBarFlicker = false;
      }
    });

  clearInterval(flickerTimerPlayer);
  clearInterval(flickerTimerEnemy);
}

let flickerTimerPlayer;
function startFlickerPlayer(healthBarEle) {
  flickerTimerPlayer = setInterval(() => {
    healthBarEle.classList.add("hidden");
    if (currUserData.isSfxOnOrOff && !player.dead) 
      playSfx(sfxLibrary.game.lowHpPlayer);

    setTimeout(() => {
      healthBarEle.classList.remove("hidden");
    }, 300);
  }, 600);
}

let flickerTimerEnemy;
function startFlickerEnemy(healthBarEle) {
  flickerTimerEnemy = setInterval(() => {
    if (currUserData.isSfxOnOrOff && !enemy.dead) 
      playSfx(sfxLibrary.game.lowHpEnemy);

    healthBarEle.classList.add("hidden");
    setTimeout(() => {
      healthBarEle.classList.remove("hidden");
    }, 300);
  }, 600);
}

// AUDIO

function stopBgm() {
  if (currBgm.playing) {
    currBgm.playing.pause();
    currBgm.playing.currentTime = 0;
  }
}

function randomBgm(library) {
  const selectedBgm = library[Math.floor(Math.random() * library.length)];
  currBgm.playing = selectedBgm;
  return selectedBgm;
}

function playBgm(selectedBgm) {
  selectedBgm.play();
}

function pauseBgm(selectedBgm) {
  selectedBgm.pause();
}

function playSfx(sound) {
  sound.play();
}

function playSfxOverlay(sound) {
  const soundNode = sound.cloneNode();
  soundNode.play();
}

// UPDATE USER INPUT

function updateUserData({
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
}) {
  currUserData.timer = setTimer;
  currUserData.playerHP = playerHPStart;
  currUserData.enemyHP = enemyHPStart;
  currUserData.playerDmg = playerDmgStart;
  currUserData.enemyDmg = enemyDmgStart;
  currUserData.critChance = critChanceStart;
  currUserData.critDmg = critDmgStart;
  currUserData.isBgmOnOrOff = isBgmOn; 
  currUserData.isSfxOnOrOff = isSfxOn;
  if (playerSelection === "random") {
    currUserData.playerSelection = randomFighter("player");
  } else {
    currUserData.playerSelection = playerSelection;
  }

  if (enemySelection === "random") {
    currUserData.enemySelection = randomFighter("enemy");
  } else {
    currUserData.enemySelection = enemySelection;
  }
  
  currUserData.roundSelection = roundSelection;
}

function randomFighter(type) {
  const charCollection = [
    "samuraiMack",
    "kenji",
    "thornBlackridge",
    "serAlindra",
    "vireya",
    "kingAlaricIronhart",
    "roderic",
    "drakon"
  ];
  const randomIndex = Math.floor(Math.random() * charCollection.length);
  return type === "player" ?
    `${charCollection[randomIndex]}Left` :
    `${charCollection[randomIndex]}Right`
}

function initializePlayer(
  position,
  character,
  startHealth,
  dps,
  critChance,
  critDmg
) {
  player = new Fighter({
    position: position,
    width: character.width,
    height: character.height,
    startHealth: startHealth,
    dps: dps,
    critChance: critChance,
    critDmg: critDmg,
    imageSrc: character.imageSrc,
    maxFrames: character.maxFrames,
    scale: character.scale,
    offset: character.offset,
    sprites: character.sprites,
    attackBoxAll: character.attackBoxAll,
    facingRight: character.facingRight,
    characterPos: character.characterPos,
    characterSfx: character.characterSfx,
    attackFrameThreshold: character.attackFrameThreshold,
    name: character.name,
    nameColor: character.nameColor
  });
}

function initializeEnemy(
  position,
  character,
  startHealth,
  dps,
  critChance,
  critDmg
) {
  enemy = new Fighter({
    position: position,
    width: character.width,
    height: character.height,
    offset: character.offset,
    startHealth: startHealth,
    dps: dps,
    critChance: critChance,
    critDmg: critDmg,
    imageSrc: character.imageSrc,
    maxFrames: character.maxFrames,
    scale: character.scale,
    offset: character.offset,
    sprites: character.sprites,
    attackBoxAll: character.attackBoxAll,
    facingRight: character.facingRight,
    characterPos: character.characterPos,
    characterSfx: character.characterSfx,
    attackFrameThreshold: character.attackFrameThreshold,
    name: character.name,
    nameColor: character.nameColor
  });
}

function blurAllInputs() {
  const inputs = document.querySelectorAll("input, select");
  inputs.forEach(input => input.blur());
}

