// Audio
const generalBgm = {
  lounge: new Audio("./audio/general-bgm/lounge.mp3")
};

generalBgm.lounge.loop = true;
generalBgm.lounge.volume = 0.03;

const gameBgmLibrary = [];
const currBgm = {};
for (let i = 1; i <= 5; i++) {
  gameBgmLibrary.push(new Audio(`./audio/game-bgm/bgm${i}.mp3`));
}

gameBgmLibrary.forEach(bgm => {
  bgm.volume = 0.25;
  bgm.loop = true;
});

const sfxLibrary = {
  game: {
    countdown: new Audio("./audio/game-sfx/countdown2-final.mp3"),
    victory: new Audio("./audio/game-sfx/victory-final.mp3"),
    tie: new Audio("./audio/game-sfx/tie-final.mp3"),
    timeIsUp: new Audio("./audio/game-sfx/time-is-up-final.mp3"),
    lowHpPlayer: new Audio("./audio/game-sfx/low-hp-final.mp3"),
    lowHpEnemy: new Audio("./audio/game-sfx/low-hp-final.mp3"),
    roundOne: new Audio("./audio/game-sfx/round-one-final.mp3"),
    roundTwo: new Audio("./audio/game-sfx/round-two-final.mp3"),
    roundThree: new Audio("./audio/game-sfx/round-three-final.mp3"),
    roundFour: new Audio("./audio/game-sfx/round-four-final.mp3"),
    roundFinal: new Audio("./audio/game-sfx/round-final-final.mp3"),
    suddenDeath: new Audio("./audio/game-sfx/sudden-death-final.mp3"),
    winOverall: new Audio("./audio/game-sfx/win-overall-final.mp3"),
    tieOverall: new Audio("./audio/game-sfx/tie-overall-final.mp3")
  },
  samuraiMackLeft: {
    running: new Audio("./audio/characters/samurai-mack/samurai-mack-running-final.mp3"),
    jumping: new Audio("./audio/characters/samurai-mack/samurai-mack-jumping-final.mp3"),
    getHit: new Audio("./audio/characters/samurai-mack/samurai-mack-get-hit-final.mp3"),
    crit: new Audio("./audio/characters/shared-sfx/crit-final.mp3"),
    atk1: new Audio("./audio/characters/samurai-mack/samurai-mack-atk1-final.mp3"),
    atk2: new Audio("./audio/characters/samurai-mack/samurai-mack-atk2-final.mp3")
  },
  samuraiMackRight: {
    running: new Audio("./audio/characters/samurai-mack/samurai-mack-running-final.mp3"),
    jumping: new Audio("./audio/characters/samurai-mack/samurai-mack-jumping-final.mp3"),
    getHit: new Audio("./audio/characters/samurai-mack/samurai-mack-get-hit-final.mp3"),
    crit: new Audio("./audio/characters/shared-sfx/crit-final.mp3"),
    atk1: new Audio("./audio/characters/samurai-mack/samurai-mack-atk1-final.mp3"),
    atk2: new Audio("./audio/characters/samurai-mack/samurai-mack-atk2-final.mp3")
  },
  kenjiLeft: {
    running: new Audio("./audio/characters/kenji/kenji-running-final.mp3"),
    jumping: new Audio("./audio/characters/kenji/kenji-jumping-final.mp3"),
    getHit: new Audio("./audio/characters/kenji/kenji-get-hit-final.mp3"),
    crit: new Audio("./audio/characters/shared-sfx/crit-final.mp3"),
    atk1: new Audio("./audio/characters/kenji/kenji-atk1-final.mp3"),
    atk2: new Audio("./audio/characters/kenji/kenji-atk2-final.mp3")
  },
  kenjiRight: {
    running: new Audio("./audio/characters/kenji/kenji-running-final.mp3"),
    jumping: new Audio("./audio/characters/kenji/kenji-jumping-final.mp3"),
    getHit: new Audio("./audio/characters/kenji/kenji-get-hit-final.mp3"),
    crit: new Audio("./audio/characters/shared-sfx/crit-final.mp3"),
    atk1: new Audio("./audio/characters/kenji/kenji-atk1-final.mp3"),
    atk2: new Audio("./audio/characters/kenji/kenji-atk2-final.mp3")
  },
  thornBlackridgeLeft: {
    running: new Audio("./audio/characters/thorn-blackridge/thorn-blackridge-running-final.mp3"),
    jumping: new Audio("./audio/characters/thorn-blackridge/thorn-blackridge-jumping-final.mp3"),
    getHit: new Audio("./audio/characters/thorn-blackridge/thorn-blackridge-get-hit-final.mp3"),
    crit: new Audio("./audio/characters/shared-sfx/crit-final.mp3"),
    atk1: new Audio("./audio/characters/thorn-blackridge/thorn-blackridge-atk1-final.mp3"),
    atk2: new Audio("./audio/characters/thorn-blackridge/thorn-blackridge-atk2-final.mp3")
  },
  thornBlackridgeRight: {
    running: new Audio("./audio/characters/thorn-blackridge/thorn-blackridge-running-final.mp3"),
    jumping: new Audio("./audio/characters/thorn-blackridge/thorn-blackridge-jumping-final.mp3"),
    getHit: new Audio("./audio/characters/thorn-blackridge/thorn-blackridge-get-hit-final.mp3"),
    crit: new Audio("./audio/characters/shared-sfx/crit-final.mp3"),
    atk1: new Audio("./audio/characters/thorn-blackridge/thorn-blackridge-atk1-final.mp3"),
    atk2: new Audio("./audio/characters/thorn-blackridge/thorn-blackridge-atk2-final.mp3")
  },
  serAlindraLeft: {
    running: new Audio("./audio/characters/ser-alindra/ser-alindra-running-final.mp3"),
    jumping: new Audio("./audio/characters/ser-alindra/ser-alindra-jumping-final.mp3"),
    getHit: new Audio("./audio/characters/ser-alindra/ser-alindra-get-hit-final.mp3"),
    crit: new Audio("./audio/characters/shared-sfx/crit-final.mp3"),
    atk1: new Audio("./audio/characters/ser-alindra/ser-alindra-atk1-final.mp3"),
    atk2: new Audio("./audio/characters/ser-alindra/ser-alindra-atk2-final.mp3")
  },
  serAlindraRight: {
    running: new Audio("./audio/characters/ser-alindra/ser-alindra-running-final.mp3"),
    jumping: new Audio("./audio/characters/ser-alindra/ser-alindra-jumping-final.mp3"),
    getHit: new Audio("./audio/characters/ser-alindra/ser-alindra-get-hit-final.mp3"),
    crit: new Audio("./audio/characters/shared-sfx/crit-final.mp3"),
    atk1: new Audio("./audio/characters/ser-alindra/ser-alindra-atk1-final.mp3"),
    atk2: new Audio("./audio/characters/ser-alindra/ser-alindra-atk2-final.mp3")
  },
  VireyaLeft: {
    running: new Audio("./audio/characters/vireya/vireya-running-final.mp3"),
    jumping: new Audio("./audio/characters/vireya/vireya-jumping-final.mp3"),
    getHit: new Audio("./audio/characters/vireya/vireya-get-hit-final.mp3"),
    crit: new Audio("./audio/characters/shared-sfx/crit-final.mp3"),
    atk1: new Audio("./audio/characters/vireya/vireya-atk1-final.mp3"),
    atk2: new Audio("./audio/characters/vireya/vireya-atk2-final.mp3")
  },
  VireyaRight: {
    running: new Audio("./audio/characters/vireya/vireya-running-final.mp3"),
    jumping: new Audio("./audio/characters/vireya/vireya-jumping-final.mp3"),
    getHit: new Audio("./audio/characters/vireya/vireya-get-hit-final.mp3"),
    crit: new Audio("./audio/characters/shared-sfx/crit-final.mp3"),
    atk1: new Audio("./audio/characters/vireya/vireya-atk1-final.mp3"),
    atk2: new Audio("./audio/characters/vireya/vireya-atk2-final.mp3")
  },
  kingAlaricIronhartLeft: {
    running: new Audio("./audio/characters/king-alaric-ironhart/king-alaric-ironhart-running-final.mp3"),
    jumping: new Audio("./audio/characters/king-alaric-ironhart/king-alaric-ironhart-jumping-final.mp3"),
    getHit: new Audio("./audio/characters/king-alaric-ironhart/king-alaric-ironhart-get-hit-final.mp3"),
    crit: new Audio("./audio/characters/shared-sfx/crit-final.mp3"),
    atk1: new Audio("./audio/characters/king-alaric-ironhart/king-alaric-ironhart-atk1-final.mp3"),
    atk2: new Audio("./audio/characters/king-alaric-ironhart/king-alaric-ironhart-atk2-final.mp3")
  },
  kingAlaricIronhartRight: {
    running: new Audio("./audio/characters/king-alaric-ironhart/king-alaric-ironhart-running-final.mp3"),
    jumping: new Audio("./audio/characters/king-alaric-ironhart/king-alaric-ironhart-jumping-final.mp3"),
    getHit: new Audio("./audio/characters/king-alaric-ironhart/king-alaric-ironhart-get-hit-final.mp3"),
    crit: new Audio("./audio/characters/shared-sfx/crit-final.mp3"),
    atk1: new Audio("./audio/characters/king-alaric-ironhart/king-alaric-ironhart-atk1-final.mp3"),
    atk2: new Audio("./audio/characters/king-alaric-ironhart/king-alaric-ironhart-atk2-final.mp3")
  },
  rodericLeft: {
    running: new Audio("./audio/characters/roderic/roderic-running-final.mp3"),
    jumping: new Audio("./audio/characters/roderic/roderic-jumping-final.mp3"),
    getHit: new Audio("./audio/characters/roderic/roderic-get-hit-final.mp3"),
    crit: new Audio("./audio/characters/shared-sfx/crit-final.mp3"),
    atk1: new Audio("./audio/characters/roderic/roderic-atk1-final.mp3"),
    atk2: new Audio("./audio/characters/roderic/roderic-atk2-final.mp3")
  },
  rodericRight: {
    running: new Audio("./audio/characters/roderic/roderic-running-final.mp3"),
    jumping: new Audio("./audio/characters/roderic/roderic-jumping-final.mp3"),
    getHit: new Audio("./audio/characters/roderic/roderic-get-hit-final.mp3"),
    crit: new Audio("./audio/characters/shared-sfx/crit-final.mp3"),
    atk1: new Audio("./audio/characters/roderic/roderic-atk1-final.mp3"),
    atk2: new Audio("./audio/characters/roderic/roderic-atk2-final.mp3")
  },
  drakonLeft: {
    running: new Audio("./audio/characters/drakon/drakon-running-final.mp3"),
    jumping: new Audio("./audio/characters/drakon/drakon-jumping-final.mp3"),
    getHit: new Audio("./audio/characters/drakon/drakon-get-hit-final.mp3"),
    crit: new Audio("./audio/characters/shared-sfx/crit-final.mp3"),
    atk1: new Audio("./audio/characters/drakon/drakon-atk1-final.mp3"),
    atk2: new Audio("./audio/characters/drakon/drakon-atk2-final.mp3")
  },
  drakonRight: {
    running: new Audio("./audio/characters/drakon/drakon-running-final.mp3"),
    jumping: new Audio("./audio/characters/drakon/drakon-jumping-final.mp3"),
    getHit: new Audio("./audio/characters/drakon/drakon-get-hit-final.mp3"),
    crit: new Audio("./audio/characters/shared-sfx/crit-final.mp3"),
    atk1: new Audio("./audio/characters/drakon/drakon-atk1-final.mp3"),
    atk2: new Audio("./audio/characters/drakon/drakon-atk2-final.mp3")
  }
};