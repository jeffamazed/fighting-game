const characterCollection = {
  samuraiMackLeft: {
    width: 65,
    height: 130,
    imageSrc: "./img/characters/samurai-mack/left-position/IdleLeftPos.png",
    maxFrames: 8,
    scale: 2.5,
    offset: {
      x: 217,
      y: 177
    },
    sprites: {
      idleLeftPos: {
        imageSrc: "./img/characters/samurai-mack/left-position/IdleLeftPos.png",
        maxFrames: 8
      },
      idleRightPos: {
        imageSrc: "./img/characters/samurai-mack/left-position/IdleRightPos.png",
        maxFrames: 8
      },
      runLeftPos: {
        imageSrc: "./img/characters/samurai-mack/left-position/RunLeftPos.png",
        maxFrames: 8
      },
      runRightPos: {
        imageSrc: "./img/characters/samurai-mack/left-position/RunRightPos.png",
        maxFrames: 8
      },
      jumpLeftPos: {
        imageSrc: "./img/characters/samurai-mack/left-position/JumpLeftPos.png",
        maxFrames: 2
      },
      jumpRightPos: {
        imageSrc: "./img/characters/samurai-mack/left-position/JumpRightPos.png",
        maxFrames: 2
      },
      fallLeftPos: {
        imageSrc: "./img/characters/samurai-mack/left-position/FallLeftPos.png",
        maxFrames: 2
      },
      fallRightPos: {
        imageSrc: "./img/characters/samurai-mack/left-position/FallRightPos.png",
        maxFrames: 2
      },
      attack1LeftPos: {
        imageSrc: "./img/characters/samurai-mack/left-position/Attack1LeftPos.png",
        maxFrames: 6
      },
      attack1RightPos: {
        imageSrc: "./img/characters/samurai-mack/left-position/Attack1RightPos.png",
        maxFrames: 6
      },
      attack2LeftPos: {
        imageSrc: "./img/characters/samurai-mack/left-position/Attack2LeftPos.png",
        maxFrames: 6
      },
      attack2RightPos: {
        imageSrc: "./img/characters/samurai-mack/left-position/Attack2RightPos.png",
        maxFrames: 6
      },
      takeHitLeftPos: {
        imageSrc: "./img/characters/samurai-mack/left-position/Take Hit - white silhouetteLeftPos.png",
        maxFrames: 4
      },
      takeHitRightPos: {
        imageSrc: "./img/characters/samurai-mack/left-position/Take Hit - white silhouetteRightPos.png",
        maxFrames: 4
      },
      deathLeftPos: {
        imageSrc: "./img/characters/samurai-mack/left-position/DeathLeftPos.png",
        maxFrames: 6
      },
      deathRightPos: {
        imageSrc: "./img/characters/samurai-mack/left-position/DeathRightPos.png",
        maxFrames: 6
      },
    },
    attackBoxAll: {
      attackBoxCurr: {
        offset: {
          x: 65,
          y: 10
        },
        width: 190,
        height: 50
      },
      attackBox: {
        offset: {
          x: 65,
          y: 10
        },
        width: 190,
        height: 50
      },
      attackBoxOpp: {
        offset: {
          x: -190,
          y: 10
        },
        width: 190,
        height: 50
      },
      attackBoxCurr2: {
        offset: {
          x: 65,
          y: 50
        },
        width: 203,
        height: 50
      },
      attackBox2: {
        offset: {
          x: 65,
          y: 50
        },
        width: 203,
        height: 50
      },
      attackBoxOpp2: {
        offset: {
          x: -203,
          y: 50
        },
        width: 203,
        height: 50
      }
    },
    facingRight: true,
    characterPos: "left",
    characterSfx: sfxLibrary.samuraiMackLeft,
    attackFrameThreshold: 4,
    name: "Samurai Mack",
    nameColor: "#8B0000"
  },
  samuraiMackRight: {
    position: {
      x: 855,
      y: 360
    },
    width: 65,
    height: 130,
    imageSrc: "./img/characters/samurai-mack/right-position/IdleRightPos.png",
    maxFrames: 8,
    scale: 2.5,
    offset: {
      x: 218,
      y: 177
    },
    sprites: {
      idleRightPos: {
        imageSrc: "./img/characters/samurai-mack/right-position/IdleRightPos.png",
        maxFrames: 8
      },
      idleLeftPos: {
        imageSrc: "./img/characters/samurai-mack/right-position/IdleLeftPos.png",
        maxFrames: 8
      },
      runRightPos: {
        imageSrc: "./img/characters/samurai-mack/right-position/RunRightPos.png",
        maxFrames: 8
      },
      runLeftPos: {
        imageSrc: "./img/characters/samurai-mack/right-position/RunLeftPos.png",
        maxFrames: 8
      },
      jumpRightPos: {
        imageSrc: "./img/characters/samurai-mack/right-position/JumpRightPos.png",
        maxFrames: 2
      },
      jumpLeftPos: {
        imageSrc: "./img/characters/samurai-mack/right-position/JumpLeftPos.png",
        maxFrames: 2
      },
      fallRightPos: {
        imageSrc: "./img/characters/samurai-mack/right-position/FallRightPos.png",
        maxFrames: 2
      },
      fallLeftPos: {
        imageSrc: "./img/characters/samurai-mack/right-position/FallLeftPos.png",
        maxFrames: 2
      },
      attack1RightPos: {
        imageSrc: "./img/characters/samurai-mack/right-position/Attack1RightPos.png",
        maxFrames: 6
      },
      attack1LeftPos: {
        imageSrc: "./img/characters/samurai-mack/right-position/Attack1LeftPos.png",
        maxFrames: 6
      },
      attack2RightPos: {
        imageSrc: "./img/characters/samurai-mack/right-position/Attack2RightPos.png",
        maxFrames: 6
      },
      attack2LeftPos: {
        imageSrc: "./img/characters/samurai-mack/right-position/Attack2LeftPos.png",
        maxFrames: 6
      },
      takeHitRightPos: {
        imageSrc: "./img/characters/samurai-mack/right-position/Take Hit - white silhouetteRightPos.png",
        maxFrames: 4
      },
      takeHitLeftPos: {
        imageSrc: "./img/characters/samurai-mack/right-position/Take Hit - white silhouetteLeftPos.png",
        maxFrames: 4
      },
      deathRightPos: {
        imageSrc: "./img/characters/samurai-mack/right-position/DeathRightPos.png",
        maxFrames: 6
      },
      deathLeftPos: {
        imageSrc: "./img/characters/samurai-mack/right-position/DeathLeftPos.png",
        maxFrames: 6
      },
    },
    attackBoxAll: {
      attackBoxCurr: {
        offset: {
          x: -190,
          y: 10
        },
        width: 190,
        height: 50
      },
      attackBox: {
        offset: {
          x: -190,
          y: 10
        },
        width: 190,
        height: 50
      },
      attackBoxOpp: {
        offset: {
          x: 65,
          y: 10
        },
        width: 190,
        height: 50
      },
      attackBoxCurr2: {
        offset: {
          x: -203,
          y: 50
        },
        width: 203,
        height: 50
      },
      attackBox2: {
        offset: {
          x: -203,
          y: 50
        },
        width: 203,
        height: 50
      },
      attackBoxOpp2: {
        offset: {
          x: 65,
          y: 50
        },
        width: 203,
        height: 50
      }
    },
    facingRight: false,
    characterPos: "right",
    characterSfx: sfxLibrary.samuraiMackRight,
    attackFrameThreshold: 4,
    name: "Samurai Mack",
    nameColor: "#8B0000"
  },
  kenjiLeft: {
    width: 65,
    height: 140,
    imageSrc: "./img/characters/kenji/left-position/IdleLeftPos.png",
    maxFrames: 4,
    scale: 2.5,
    offset: {
      x: 218,
      y: 181
    },
    sprites: {
      idleLeftPos: {
        imageSrc: "./img/characters/kenji/left-position/IdleLeftPos.png",
        maxFrames: 4
      },
      idleRightPos: {
        imageSrc: "./img/characters/kenji/left-position/IdleRightPos.png",
        maxFrames: 4
      },
      runLeftPos: {
        imageSrc: "./img/characters/kenji/left-position/RunLeftPos.png",
        maxFrames: 8
      },
      runRightPos: {
        imageSrc: "./img/characters/kenji/left-position/RunRightPos.png",
        maxFrames: 8
      },
      jumpLeftPos: {
        imageSrc: "./img/characters/kenji/left-position/JumpLeftPos.png",
        maxFrames: 2
      },
      jumpRightPos: {
        imageSrc: "./img/characters/kenji/left-position/JumpRightPos.png",
        maxFrames: 2
      },
      fallLeftPos: {
        imageSrc: "./img/characters/kenji/left-position/FallLeftPos.png",
        maxFrames: 2
      },
      fallRightPos: {
        imageSrc: "./img/characters/kenji/left-position/FallRightPos.png",
        maxFrames: 2
      },
      attack1LeftPos: {
        imageSrc: "./img/characters/kenji/left-position/Attack1LeftPos.png",
        maxFrames: 4
      },
      attack1RightPos: {
        imageSrc: "./img/characters/kenji/left-position/Attack1RightPos.png",
        maxFrames: 4
      },
      attack2LeftPos: {
        imageSrc: "./img/characters/kenji/left-position/Attack2LeftPos.png",
        maxFrames: 4
      },
      attack2RightPos: {
        imageSrc: "./img/characters/kenji/left-position/Attack2RightPos.png",
        maxFrames: 4
      },
      takeHitLeftPos: {
        imageSrc: "./img/characters/kenji/left-position/Take hitLeftPos.png",
        maxFrames: 3
      },
      takeHitRightPos: {
        imageSrc: "./img/characters/kenji/left-position/Take hitRightPos.png",
        maxFrames: 3
      },
      deathLeftPos: {
        imageSrc: "./img/characters/kenji/left-position/DeathLeftPos.png",
        maxFrames: 7
      },
      deathRightPos: {
        imageSrc: "./img/characters/kenji/left-position/DeathRightPos.png",
        maxFrames: 7
      }
    },
    attackBoxAll: {
      attackBoxCurr: {
        offset: {
          x: 65,
          y: 25
        },
        width: 172,
        height: 50
      },
      attackBox: {
        offset: {
          x: 65,
          y: 25
        },
        width: 172,
        height: 50
      },
      attackBoxOpp: {
        offset: {
          x: -172,
          y: 25
        },
        width: 172,
        height: 50
      },
      attackBoxCurr2: {
        offset: {
          x: 65,
          y: 40
        },
        width: 180,
        height: 50
      },
      attackBox2: {
        offset: {
          x: 65,
          y: 40
        },
        width: 180,
        height: 50
      },
      attackBoxOpp2: {
        offset: {
          x: -180,
          y: 40
        },
        width: 180,
        height: 50
      }
    },
    facingRight: true,
    characterPos: "left",
    characterSfx: sfxLibrary.kenjiLeft,
    attackFrameThreshold: 2,
    name: "Kenji",
    nameColor: "#4B0082"
  },
  kenjiRight: {
    position: {
      x: 855,
      y: 360
    },
    width: 65,
    height: 140,
    imageSrc: "./img/characters/kenji/right-position/IdleRightPos.png",
    maxFrames: 4,
    scale: 2.5,
    offset: {
      x: 216,
      y: 181
    },
    sprites: {
      idleRightPos: {
        imageSrc: "./img/characters/kenji/right-position/IdleRightPos.png",
        maxFrames: 4
      },
      idleLeftPos: {
        imageSrc: "./img/characters/kenji/right-position/IdleLeftPos.png",
        maxFrames: 4
      },
      runRightPos: {
        imageSrc: "./img/characters/kenji/right-position/RunRightPos.png",
        maxFrames: 8
      },
      runLeftPos: {
        imageSrc: "./img/characters/kenji/right-position/RunLeftPos.png",
        maxFrames: 8
      },
      jumpRightPos: {
        imageSrc: "./img/characters/kenji/right-position/JumpRightPos.png",
        maxFrames: 2
      },
      jumpLeftPos: {
        imageSrc: "./img/characters/kenji/right-position/JumpLeftPos.png",
        maxFrames: 2
      },
      fallRightPos: {
        imageSrc: "./img/characters/kenji/right-position/FallRightPos.png",
        maxFrames: 2
      },
      fallLeftPos: {
        imageSrc: "./img/characters/kenji/right-position/FallLeftPos.png",
        maxFrames: 2
      },
      attack1RightPos: {
        imageSrc: "./img/characters/kenji/right-position/Attack1RightPos.png",
        maxFrames: 4
      },
      attack1LeftPos: {
        imageSrc: "./img/characters/kenji/right-position/Attack1LeftPos.png",
        maxFrames: 4
      },
      attack2RightPos: {
        imageSrc: "./img/characters/kenji/right-position/Attack2RightPos.png",
        maxFrames: 4
      },
      attack2LeftPos: {
        imageSrc: "./img/characters/kenji/right-position/Attack2LeftPos.png",
        maxFrames: 4
      },
      takeHitRightPos: {
        imageSrc: "./img/characters/kenji/right-position/Take hitRightPos.png",
        maxFrames: 3
      },
      takeHitLeftPos: {
        imageSrc: "./img/characters/kenji/right-position/Take hitLeftPos.png",
        maxFrames: 3
      },
      deathRightPos: {
        imageSrc: "./img/characters/kenji/right-position/DeathRightPos.png",
        maxFrames: 7
      },
      deathLeftPos: {
        imageSrc: "./img/characters/kenji/right-position/DeathLeftPos.png",
        maxFrames: 7
      }
    },
    attackBoxAll: {
      attackBoxCurr: {
        offset: {
          x: -172,
          y: 25
        },
        width: 172,
        height: 50
      },
      attackBox: {
        offset: {
          x: -172,
          y: 25
        },
        width: 172,
        height: 50
      },
      attackBoxOpp: {
        offset: {
          x: 65,
          y: 25
        },
        width: 172,
        height: 50
      },
      attackBoxCurr2: {
        offset: {
          x: -180,
          y: 40
        },
        width: 180,
        height: 50
      },
      attackBox2: {
        offset: {
          x: -180,
          y: 40
        },
        width: 180,
        height: 50
      },
      attackBoxOpp2: {
        offset: {
          x: 65,
          y: 40
        },
        width: 180,
        height: 50
      }
    },
    facingRight: false,
    characterPos: "right",
    characterSfx: sfxLibrary.kenjiRight,
    attackFrameThreshold: 2,
    name: "Kenji",
    nameColor: "#4B0082"
  },
  thornBlackridgeLeft: {
    width: 80,
    height: 145,
    imageSrc: "./img/characters/thorn-blackridge/left-position/IdleLeftPos.png",
    maxFrames: 10,
    scale: 3.2,
    offset: {
      x: 220,
      y: 179
    },
    sprites: {
      idleLeftPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/IdleLeftPos.png",
        maxFrames: 10
      },
      runLeftPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/RunLeftPos.png",
        maxFrames: 8
      },
      jumpLeftPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/JumpLeftPos.png",
        maxFrames: 3
      },
      fallLeftPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/FallLeftPos.png",
        maxFrames: 3
      },
      attack1LeftPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/Attack1LeftPos.png",
        maxFrames: 7
      },
      attack2LeftPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/Attack2LeftPos.png",
        maxFrames: 8
      },
      takeHitLeftPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/Take hitLeftPos.png",
        maxFrames: 3
      },
      deathLeftPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/DeathLeftPos.png",
        maxFrames: 7
      },
      idleRightPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/IdleRightPos.png",
        maxFrames: 10
      },
      runRightPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/RunRightPos.png",
        maxFrames: 8
      },
      jumpRightPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/JumpRightPos.png",
        maxFrames: 3
      },
      fallRightPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/FallRightPos.png",
        maxFrames: 3
      },
      attack1RightPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/Attack1RightPos.png",
        maxFrames: 7
      },
      attack2RightPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/Attack2RightPos.png",
        maxFrames: 8
      },
      takeHitRightPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/Take hitRightPos.png",
        maxFrames: 3
      },
      deathRightPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/DeathRightPos.png",
        maxFrames: 7
      }
    },
    attackBoxAll: {
      attackBoxCurr: {
        offset: {
          x: 80,
          y: 40
        },
        width: 120,
        height: 50
      },
      attackBox: {
        offset: {
          x: 80,
          y: 40
        },
        width: 120,
        height: 50
      },
      attackBoxOpp: {
        offset: {
          x: -120,
          y: 40
        },
        width: 120,
        height: 50
      },
      attackBoxCurr2: {
        offset: {
          x: 80,
          y: 50
        },
        width: 180,
        height: 50
      },
      attackBox2: {
        offset: {
          x: 80,
          y: 50
        },
        width: 180,
        height: 50
      },
      attackBoxOpp2: {
        offset: {
          x: -180,
          y: 50
        },
        width: 180,
        height: 50
      }
    },
    facingRight: true,
    characterPos: "left",
    characterSfx: sfxLibrary.thornBlackridgeLeft,
    attackFrameThreshold: 5,
    name: "Thorn Blackridge",
    nameColor: "#3b2f2f"
  },
  thornBlackridgeRight: {
    position: {
      x: 845,
      y: 360
    },
    width: 80,
    height: 145,
    imageSrc: "./img/characters/thorn-blackridge/right-position/IdleRightPos.png",
    maxFrames: 10,
    scale: 3.2,
    offset: {
      x: 220,
      y: 179
    },
    sprites: {
      idleLeftPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/IdleLeftPos.png",
        maxFrames: 10
      },
      runLeftPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/RunLeftPos.png",
        maxFrames: 8
      },
      jumpLeftPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/JumpLeftPos.png",
        maxFrames: 3
      },
      fallLeftPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/FallLeftPos.png",
        maxFrames: 3
      },
      attack1LeftPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/Attack1LeftPos.png",
        maxFrames: 7
      },
      attack2LeftPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/Attack2LeftPos.png",
        maxFrames: 8
      },
      takeHitLeftPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/Take hitLeftPos.png",
        maxFrames: 3
      },
      deathLeftPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/DeathLeftPos.png",
        maxFrames: 7
      },
      idleRightPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/IdleRightPos.png",
        maxFrames: 10
      },
      runRightPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/RunRightPos.png",
        maxFrames: 8
      },
      jumpRightPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/JumpRightPos.png",
        maxFrames: 3
      },
      fallRightPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/FallRightPos.png",
        maxFrames: 3
      },
      attack1RightPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/Attack1RightPos.png",
        maxFrames: 7
      },
      attack2RightPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/Attack2RightPos.png",
        maxFrames: 8
      },
      takeHitRightPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/Take hitRightPos.png",
        maxFrames: 3
      },
      deathRightPos: {
        imageSrc: "./img/characters/thorn-blackridge/left-position/DeathRightPos.png",
        maxFrames: 7
      }
    },
    attackBoxAll: {
      attackBoxCurr: {
        offset: {
          x: -120,
          y: 40
        },
        width: 120,
        height: 50
      },
      attackBox: {
        offset: {
          x: -120,
          y: 40
        },
        width: 120,
        height: 50
      },
      attackBoxOpp: {
        offset: {
          x: 80,
          y: 40
        },
        width: 120,
        height: 50
      },
      attackBoxCurr2: {
        offset: {
          x: -180,
          y: 50
        },
        width: 180,
        height: 50
      },
      attackBox2: {
        offset: {
          x: -180,
          y: 50
        },
        width: 180,
        height: 50
      },
      attackBoxOpp2: {
        offset: {
          x: 80,
          y: 50
        },
        width: 180,
        height: 50
      }
    },
    facingRight: false,
    characterPos: "right",
    characterSfx: sfxLibrary.thornBlackridgeRight,
    attackFrameThreshold: 5,
    name: "Thorn Blackridge",
    nameColor: "#3b2f2f"
  },
  serAlindraLeft: {
    width: 100,
    height: 115,
    imageSrc: "./img/characters/ser-alindra/left-position/IdleLeftPos.png",
    maxFrames: 11,
    scale: 2.5,
    offset: {
      x: 175,
      y: 170
    },
    sprites: {
      idleLeftPos: {
        imageSrc: "./img/characters/ser-alindra/left-position/IdleLeftPos.png",
        maxFrames: 11
      },
      runLeftPos: {
        imageSrc: "./img/characters/ser-alindra/left-position/RunLeftPos.png",
        maxFrames: 8
      },
      jumpLeftPos: {
        imageSrc: "./img/characters/ser-alindra/left-position/JumpLeftPos.png",
        maxFrames: 3
      },
      fallLeftPos: {
        imageSrc: "./img/characters/ser-alindra/left-position/FallLeftPos.png",
        maxFrames: 3
      },
      attack1LeftPos: {
        imageSrc: "./img/characters/ser-alindra/left-position/Attack1LeftPos.png",
        maxFrames: 7
      },
      attack2LeftPos: {
        imageSrc: "./img/characters/ser-alindra/left-position/Attack2LeftPos.png",
        maxFrames: 7
      },
      takeHitLeftPos: {
        imageSrc: "./img/characters/ser-alindra/left-position/Take HitLeftPos.png",
        maxFrames: 4
      },
      deathLeftPos: {
        imageSrc: "./img/characters/ser-alindra/left-position/DeathLeftPos.png",
        maxFrames: 11
      },
      idleRightPos: {
        imageSrc: "./img/characters/ser-alindra/left-position/IdleRightPos.png",
        maxFrames: 11
      },
      runRightPos: {
        imageSrc: "./img/characters/ser-alindra/left-position/RunRightPos.png",
        maxFrames: 8
      },
      jumpRightPos: {
        imageSrc: "./img/characters/ser-alindra/left-position/JumpRightPos.png",
        maxFrames: 3
      },
      fallRightPos: {
        imageSrc: "./img/characters/ser-alindra/left-position/FallRightPos.png",
        maxFrames: 3
      },
      attack1RightPos: {
        imageSrc: "./img/characters/ser-alindra/left-position/Attack1RightPos.png",
        maxFrames: 7
      },
      attack2RightPos: {
        imageSrc: "./img/characters/ser-alindra/left-position/Attack2RightPos.png",
        maxFrames: 7
      },
      takeHitRightPos: {
        imageSrc: "./img/characters/ser-alindra/left-position/Take HitRightPos.png",
        maxFrames: 4
      },
      deathRightPos: {
        imageSrc: "./img/characters/ser-alindra/left-position/DeathRightPos.png",
        maxFrames: 11
      }
    },
    attackBoxAll: {
      attackBoxCurr: {
        offset: {
          x: 100,
          y: 20
        },
        width: 50,
        height: 50
      },
      attackBox: {
        offset: {
          x: 100,
          y: 20
        },
        width: 50,
        height: 50
      },
      attackBoxOpp: {
        offset: {
          x: -50,
          y: 20
        },
        width: 50,
        height: 50
      },
      attackBoxCurr2: {
        offset: {
          x: 100,
          y: 20
        },
        width: 162,
        height: 50
      },
      attackBox2: {
        offset: {
          x: 100,
          y: 20
        },
        width: 162,
        height: 50
      },
      attackBoxOpp2: {
        offset: {
          x: -162,
          y: 20
        },
        width: 162,
        height: 50
      }
    },
    facingRight: true,
    characterPos: "left",
    characterSfx: sfxLibrary.serAlindraLeft,
    attackFrameThreshold: 4,
    name: "Ser Alindra",
    nameColor: "#FFD700"
  },
  serAlindraRight: {
    position: {
      x: 825,
      y: 360
    },
    width: 100,
    height: 115,
    imageSrc: "./img/characters/ser-alindra/right-position/IdleRightPos.png",
    maxFrames: 11,
    scale: 2.5,
    offset: {
      x: 175,
      y: 170
    },
    sprites: {
      idleLeftPos: {
        imageSrc: "./img/characters/ser-alindra/right-position/IdleLeftPos.png",
        maxFrames: 11
      },
      runLeftPos: {
        imageSrc: "./img/characters/ser-alindra/right-position/RunLeftPos.png",
        maxFrames: 8
      },
      jumpLeftPos: {
        imageSrc: "./img/characters/ser-alindra/right-position/JumpLeftPos.png",
        maxFrames: 3
      },
      fallLeftPos: {
        imageSrc: "./img/characters/ser-alindra/right-position/FallLeftPos.png",
        maxFrames: 3
      },
      attack1LeftPos: {
        imageSrc: "./img/characters/ser-alindra/right-position/Attack1LeftPos.png",
        maxFrames: 7
      },
      attack2LeftPos: {
        imageSrc: "./img/characters/ser-alindra/right-position/Attack2LeftPos.png",
        maxFrames: 7
      },
      takeHitLeftPos: {
        imageSrc: "./img/characters/ser-alindra/right-position/Take HitLeftPos.png",
        maxFrames: 4
      },
      deathLeftPos: {
        imageSrc: "./img/characters/ser-alindra/right-position/DeathLeftPos.png",
        maxFrames: 11
      },
      idleRightPos: {
        imageSrc: "./img/characters/ser-alindra/right-position/IdleRightPos.png",
        maxFrames: 11
      },
      runRightPos: {
        imageSrc: "./img/characters/ser-alindra/right-position/RunRightPos.png",
        maxFrames: 8
      },
      jumpRightPos: {
        imageSrc: "./img/characters/ser-alindra/right-position/JumpRightPos.png",
        maxFrames: 3
      },
      fallRightPos: {
        imageSrc: "./img/characters/ser-alindra/right-position/FallRightPos.png",
        maxFrames: 3
      },
      attack1RightPos: {
        imageSrc: "./img/characters/ser-alindra/right-position/Attack1RightPos.png",
        maxFrames: 7
      },
      attack2RightPos: {
        imageSrc: "./img/characters/ser-alindra/right-position/Attack2RightPos.png",
        maxFrames: 7
      },
      takeHitRightPos: {
        imageSrc: "./img/characters/ser-alindra/right-position/Take HitRightPos.png",
        maxFrames: 4
      },
      deathRightPos: {
        imageSrc: "./img/characters/ser-alindra/right-position/DeathRightPos.png",
        maxFrames: 11
      }
    },
    attackBoxAll: {
      attackBoxCurr: {
        offset: {
          x: -50,
          y: 20
        },
        width: 50,
        height: 50
      },
      attackBox: {
        offset: {
          x: -50,
          y: 20
        },
        width: 50,
        height: 50
      },
      attackBoxOpp: {
        offset: {
          x: 100,
          y: 20
        },
        width: 50,
        height: 50
      },
      attackBoxCurr2: {
        offset: {
          x: -162,
          y: 20
        },
        width: 162,
        height: 50
      },
      attackBox2: {
        offset: {
          x: -162,
          y: 20
        },
        width: 162,
        height: 50
      },
      attackBoxOpp2: {
        offset: {
          x: 100,
          y: 20
        },
        width: 162,
        height: 50
      }
    },
    facingRight: false,
    characterPos: "right",
    characterSfx: sfxLibrary.serAlindraRight,
    attackFrameThreshold: 4,
    name: "Ser Alindra",
    nameColor: "#FFD700"
  },
  vireyaLeft: {
    width: 65,
    height: 120,
    imageSrc: "./img/characters/vireya/left-position/IdleLeftPos.png",
    maxFrames: 8,
    scale: 3,
    offset: {
      x: 193,
      y: 172
    },
    sprites: {
      idleLeftPos: {
        imageSrc: "./img/characters/vireya/left-position/IdleLeftPos.png",
        maxFrames: 8
      },
      runLeftPos: {
        imageSrc: "./img/characters/vireya/left-position/RunLeftPos.png",
        maxFrames: 8
      },
      jumpLeftPos: {
        imageSrc: "./img/characters/vireya/left-position/JumpLeftPos.png",
        maxFrames: 2
      },
      fallLeftPos: {
        imageSrc: "./img/characters/vireya/left-position/FallLeftPos.png",
        maxFrames: 2
      },
      attack1LeftPos: {
        imageSrc: "./img/characters/vireya/left-position/Attack1LeftPos.png",
        maxFrames: 5
      },
      attack2LeftPos: {
        imageSrc: "./img/characters/vireya/left-position/Attack2LeftPos.png",
        maxFrames: 5
      },
      takeHitLeftPos: {
        imageSrc: "./img/characters/vireya/left-position/Take hitLeftPos.png",
        maxFrames: 3
      },
      deathLeftPos: {
        imageSrc: "./img/characters/vireya/left-position/DeathLeftPos.png",
        maxFrames: 8
      },
      idleRightPos: {
        imageSrc: "./img/characters/vireya/left-position/IdleRightPos.png",
        maxFrames: 8
      },
      runRightPos: {
        imageSrc: "./img/characters/vireya/left-position/RunRightPos.png",
        maxFrames: 8
      },
      jumpRightPos: {
        imageSrc: "./img/characters/vireya/left-position/JumpRightPos.png",
        maxFrames: 2
      },
      fallRightPos: {
        imageSrc: "./img/characters/vireya/left-position/FallRightPos.png",
        maxFrames: 2
      },
      attack1RightPos: {
        imageSrc: "./img/characters/vireya/left-position/Attack1RightPos.png",
        maxFrames: 5
      },
      attack2RightPos: {
        imageSrc: "./img/characters/vireya/left-position/Attack2RightPos.png",
        maxFrames: 5
      },
      takeHitRightPos: {
        imageSrc: "./img/characters/vireya/left-position/Take hitRightPos.png",
        maxFrames: 3
      },
      deathRightPos: {
        imageSrc: "./img/characters/vireya/left-position/DeathRightPos.png",
        maxFrames: 8
      }
    },
    attackBoxAll: {
      attackBoxCurr: {
        offset: {
          x: 65,
          y: 10
        },
        width: 118,
        height: 50
      },
      attackBox: {
        offset: {
          x: 65,
          y: 10
        },
        width: 118,
        height: 50
      },
      attackBoxOpp: {
        offset: {
          x: -118,
          y: 10
        },
        width: 118,
        height: 50
      },
      attackBoxCurr2: {
        offset: {
          x: 65,
          y: 20
        },
        width: 118,
        height: 50
      },
      attackBox2: {
        offset: {
          x: 65,
          y: 20
        },
        width: 118,
        height: 50
      },
      attackBoxOpp2: {
        offset: {
          x: -118,
          y: 20
        },
        width: 118,
        height: 50
      }
    },
    facingRight: true,
    characterPos: "left",
    characterSfx: sfxLibrary.VireyaLeft,
    attackFrameThreshold: 3,
    name: "Vireya",
    nameColor: "#228B22"
  },
  vireyaRight: {
    position: {
      x: 860,
      y: 360
    },
    width: 65,
    height: 120,
    imageSrc: "./img/characters/vireya/right-position/IdleRightPos.png",
    maxFrames: 8,
    scale: 3,
    offset: {
      x: 193,
      y: 172
    },
    sprites: {
      idleLeftPos: {
        imageSrc: "./img/characters/vireya/right-position/IdleLeftPos.png",
        maxFrames: 8
      },
      runLeftPos: {
        imageSrc: "./img/characters/vireya/right-position/RunLeftPos.png",
        maxFrames: 8
      },
      jumpLeftPos: {
        imageSrc: "./img/characters/vireya/right-position/JumpLeftPos.png",
        maxFrames: 2
      },
      fallLeftPos: {
        imageSrc: "./img/characters/vireya/right-position/FallLeftPos.png",
        maxFrames: 2
      },
      attack1LeftPos: {
        imageSrc: "./img/characters/vireya/right-position/Attack1LeftPos.png",
        maxFrames: 5
      },
      attack2LeftPos: {
        imageSrc: "./img/characters/vireya/right-position/Attack2LeftPos.png",
        maxFrames: 5
      },
      takeHitLeftPos: {
        imageSrc: "./img/characters/vireya/right-position/Take hitLeftPos.png",
        maxFrames: 3
      },
      deathLeftPos: {
        imageSrc: "./img/characters/vireya/right-position/DeathLeftPos.png",
        maxFrames: 8
      },
      idleRightPos: {
        imageSrc: "./img/characters/vireya/right-position/IdleRightPos.png",
        maxFrames: 8
      },
      runRightPos: {
        imageSrc: "./img/characters/vireya/right-position/RunRightPos.png",
        maxFrames: 8
      },
      jumpRightPos: {
        imageSrc: "./img/characters/vireya/right-position/JumpRightPos.png",
        maxFrames: 2
      },
      fallRightPos: {
        imageSrc: "./img/characters/vireya/right-position/FallRightPos.png",
        maxFrames: 2
      },
      attack1RightPos: {
        imageSrc: "./img/characters/vireya/right-position/Attack1RightPos.png",
        maxFrames: 5
      },
      attack2RightPos: {
        imageSrc: "./img/characters/vireya/right-position/Attack2RightPos.png",
        maxFrames: 5
      },
      takeHitRightPos: {
        imageSrc: "./img/characters/vireya/right-position/Take hitRightPos.png",
        maxFrames: 3
      },
      deathRightPos: {
        imageSrc: "./img/characters/vireya/right-position/DeathRightPos.png",
        maxFrames: 8
      }
    },
    attackBoxAll: {
      attackBoxCurr: {
        offset: {
          x: -118,
          y: 10
        },
        width: 118,
        height: 50
      },
      attackBox: {
        offset: {
          x: -118,
          y: 10
        },
        width: 118,
        height: 50
      },
      attackBoxOpp: {
        offset: {
          x: 65,
          y: 10
        },
        width: 118,
        height: 50
      },
      attackBoxCurr2: {
        offset: {
          x: -118,
          y: 20
        },
        width: 118,
        height: 50
      },
      attackBox2: {
        offset: {
          x: -118,
          y: 20
        },
        width: 118,
        height: 50
      },
      attackBoxOpp2: {
        offset: {
          x: 65,
          y: 20
        },
        width: 118,
        height: 50
      },
    },
    facingRight: false,
    characterPos: "right",
    characterSfx: sfxLibrary.VireyaRight,
    attackFrameThreshold: 3,
    name: "Vireya",
    nameColor: "#228B22"
  },
  kingAlaricIronhartLeft: {
    width: 75,
    height: 140,
    imageSrc: "./img/characters/king-alaric-ironhart/left-position/IdleLeftPos.png",
    maxFrames: 8,
    scale: 2.65,
    offset: {
      x: 175,
      y: 140
    },
    sprites: {
      idleLeftPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/left-position/IdleLeftPos.png",
        maxFrames: 8
      },
      runLeftPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/left-position/RunLeftPos.png",
        maxFrames: 8
      },
      jumpLeftPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/left-position/JumpLeftPos.png",
        maxFrames: 2
      },
      fallLeftPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/left-position/FallLeftPos.png",
        maxFrames: 2
      },
      attack1LeftPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/left-position/Attack1LeftPos.png",
        maxFrames: 4
      },
      attack2LeftPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/left-position/Attack2LeftPos.png",
        maxFrames: 4
      },
      takeHitLeftPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/left-position/Take Hit - white silhouetteLeftPos.png",
        maxFrames: 4
      },
      deathLeftPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/left-position/DeathLeftPos.png",
        maxFrames: 6
      },
      idleRightPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/left-position/IdleRightPos.png",
        maxFrames: 8
      },
      runRightPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/left-position/RunRightPos.png",
        maxFrames: 8
      },
      jumpRightPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/left-position/JumpRightPos.png",
        maxFrames: 2
      },
      fallRightPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/left-position/FallRightPos.png",
        maxFrames: 2
      },
      attack1RightPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/left-position/Attack1RightPos.png",
        maxFrames: 4
      },
      attack2RightPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/left-position/Attack2RightPos.png",
        maxFrames: 4
      },
      takeHitRightPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/left-position/Take Hit - white silhouetteRightPos.png",
        maxFrames: 4
      },
      deathRightPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/left-position/DeathRightPos.png",
        maxFrames: 6
      }
    },
    attackBoxAll: {
      attackBoxCurr: {
        offset: {
          x: 75,
          y: 20
        },
        width: 170,
        height: 50
      },
      attackBox: {
        offset: {
          x: 75,
          y: 20
        },
        width: 170,
        height: 50
      },
      attackBoxOpp: {
        offset: {
          x: -170,
          y: 20
        },
        width: 170,
        height: 50
      },
      attackBoxCurr2: {
        offset: {
          x: 75,
          y: 0
        },
        width: 158,
        height: 50
      },
      attackBox2: {
        offset: {
          x: 75,
          y: 0
        },
        width: 158,
        height: 50
      },
      attackBoxOpp2: {
        offset: {
          x: -158,
          y: 0
        },
        width: 158,
        height: 50
      }
    },
    facingRight: true,
    characterPos: "left",
    characterSfx: sfxLibrary.kingAlaricIronhartLeft,
    attackFrameThreshold: 2,
    name: "King Alaric Ironhart",
    nameColor: "#D4AF37"
  },
  kingAlaricIronhartRight: {
    position: {
      x: 850,
      y: 360
    },
    width: 75,
    height: 140,
    imageSrc: "./img/characters/king-alaric-ironhart/right-position/IdleLeftPos.png",
    maxFrames: 8,
    scale: 2.65,
    offset: {
      x: 175,
      y: 140
    },
    sprites: {
      idleLeftPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/right-position/IdleLeftPos.png",
        maxFrames: 8
      },
      runLeftPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/right-position/RunLeftPos.png",
        maxFrames: 8
      },
      jumpLeftPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/right-position/JumpLeftPos.png",
        maxFrames: 2
      },
      fallLeftPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/right-position/FallLeftPos.png",
        maxFrames: 2
      },
      attack1LeftPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/right-position/Attack1LeftPos.png",
        maxFrames: 4
      },
      attack2LeftPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/right-position/Attack2LeftPos.png",
        maxFrames: 4
      },
      takeHitLeftPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/right-position/Take Hit - white silhouetteLeftPos.png",
        maxFrames: 4
      },
      deathLeftPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/right-position/DeathLeftPos.png",
        maxFrames: 6
      },
      idleRightPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/right-position/IdleRightPos.png",
        maxFrames: 8
      },
      runRightPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/right-position/RunRightPos.png",
        maxFrames: 8
      },
      jumpRightPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/right-position/JumpRightPos.png",
        maxFrames: 2
      },
      fallRightPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/right-position/FallRightPos.png",
        maxFrames: 2
      },
      attack1RightPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/right-position/Attack1RightPos.png",
        maxFrames: 4
      },
      attack2RightPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/right-position/Attack2RightPos.png",
        maxFrames: 4
      },
      takeHitRightPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/right-position/Take Hit - white silhouetteRightPos.png",
        maxFrames: 4
      },
      deathRightPos: {
        imageSrc: "./img/characters/king-alaric-ironhart/right-position/DeathRightPos.png",
        maxFrames: 6
      }
    },
    attackBoxAll: {
      attackBoxCurr: {
        offset: {
          x: -170,
          y: 20
        },
        width: 170,
        height: 50
      },
      attackBox: {
        offset: {
          x: -170,
          y: 20
        },
        width: 170,
        height: 50
      },
      attackBoxOpp: {
        offset: {
          x: 75,
          y: 20
        },
        width: 170,
        height: 50
      },
      attackBoxCurr2: {
        offset: {
          x: -158,
          y: 0
        },
        width: 158,
        height: 50
      },
      attackBox2: {
        offset: {
          x: -158,
          y: 0
        },
        width: 158,
        height: 50
      },
      attackBoxOpp2: {
        offset: {
          x: 75,
          y: 0
        },
        width: 158,
        height: 50
      },
      
    },
    facingRight: false,
    characterPos: "right",
    characterSfx: sfxLibrary.kingAlaricIronhartRight,
    attackFrameThreshold: 2,
    name: "King Alaric Ironhart",
    nameColor: "#D4AF37"
  },
  rodericLeft: {
    width: 80,
    height: 128,
    imageSrc: "./img/characters/roderic/left-position/IdleLeftPos.png",
    maxFrames: 10,
    scale: 3.25,
    offset: {
      x: 180,
      y: 152
    },
    sprites: {
      idleLeftPos: {
        imageSrc: "./img/characters/roderic/left-position/IdleLeftPos.png",
        maxFrames: 10
      },
      runLeftPos: {
        imageSrc: "./img/characters/roderic/left-position/RunLeftPos.png",
        maxFrames: 6
      },
      jumpLeftPos: {
        imageSrc: "./img/characters/roderic/left-position/JumpLeftPos.png",
        maxFrames: 2
      },
      fallLeftPos: {
        imageSrc: "./img/characters/roderic/left-position/FallLeftPos.png",
        maxFrames: 2
      },
      attack1LeftPos: {
        imageSrc: "./img/characters/roderic/left-position/Attack1LeftPos.png",
        maxFrames: 4
      },
      attack2LeftPos: {
        imageSrc: "./img/characters/roderic/left-position/Attack2LeftPos.png",
        maxFrames: 5
      },
      takeHitLeftPos: {
        imageSrc: "./img/characters/roderic/left-position/Take HitLeftPos.png",
        maxFrames: 3
      },
      deathLeftPos: {
        imageSrc: "./img/characters/roderic/left-position/DeathLeftPos.png",
        maxFrames: 9
      },
      idleRightPos: {
        imageSrc: "./img/characters/roderic/left-position/IdleRightPos.png",
        maxFrames: 10
      },
      runRightPos: {
        imageSrc: "./img/characters/roderic/left-position/RunRightPos.png",
        maxFrames: 6
      },
      jumpRightPos: {
        imageSrc: "./img/characters/roderic/left-position/JumpRightPos.png",
        maxFrames: 2
      },
      fallRightPos: {
        imageSrc: "./img/characters/roderic/left-position/FallRightPos.png",
        maxFrames: 2
      },
      attack1RightPos: {
        imageSrc: "./img/characters/roderic/left-position/Attack1RightPos.png",
        maxFrames: 4
      },
      attack2RightPos: {
        imageSrc: "./img/characters/roderic/left-position/Attack2RightPos.png",
        maxFrames: 5
      },
      takeHitRightPos: {
        imageSrc: "./img/characters/roderic/left-position/Take HitRightPos.png",
        maxFrames: 3
      },
      deathRightPos: {
        imageSrc: "./img/characters/roderic/left-position/DeathRightPos.png",
        maxFrames: 9
      }
    },
    attackBoxAll: {
      attackBoxCurr: {
        offset: {
          x: 80,
          y: 18
        },
        width: 140,
        height: 50
      },
      attackBox: {
        offset: {
          x: 80,
          y: 18
        },
        width: 140,
        height: 50
      },
      attackBoxOpp: {
        offset: {
          x: -140,
          y: 18
        },
        width: 140,
        height: 50
      },
      attackBoxCurr2: {
        offset: {
          x: 80,
          y: 0
        },
        width: 172,
        height: 50
      },
      attackBox2: {
        offset: {
          x: 80,
          y: 0
        },
        width: 172,
        height: 50
      },
      attackBoxOpp2: {
        offset: {
          x: -172,
          y: 0
        },
        width: 172,
        height: 50
      }
    },
    facingRight: true,
    characterPos: "left",
    characterSfx: sfxLibrary.rodericLeft,
    attackFrameThreshold: 2,
    name: "Roderic",
    nameColor: "#570166"
  },
  rodericRight: {
    position: {
      x: 840,
      y: 360
    },
    width: 80,
    height: 128,
    imageSrc: "./img/characters/roderic/right-position/IdleLeftPos.png",
    maxFrames: 10,
    scale: 3.25,
    offset: {
      x: 180,
      y: 152
    },
    sprites: {
      idleLeftPos: {
        imageSrc: "./img/characters/roderic/right-position/IdleLeftPos.png",
        maxFrames: 10
      },
      runLeftPos: {
        imageSrc: "./img/characters/roderic/right-position/RunLeftPos.png",
        maxFrames: 6
      },
      jumpLeftPos: {
        imageSrc: "./img/characters/roderic/right-position/JumpLeftPos.png",
        maxFrames: 2
      },
      fallLeftPos: {
        imageSrc: "./img/characters/roderic/right-position/FallLeftPos.png",
        maxFrames: 2
      },
      attack1LeftPos: {
        imageSrc: "./img/characters/roderic/right-position/Attack1LeftPos.png",
        maxFrames: 4
      },
      attack2LeftPos: {
        imageSrc: "./img/characters/roderic/right-position/Attack2LeftPos.png",
        maxFrames: 5
      },
      takeHitLeftPos: {
        imageSrc: "./img/characters/roderic/right-position/Take HitLeftPos.png",
        maxFrames: 3
      },
      deathLeftPos: {
        imageSrc: "./img/characters/roderic/right-position/DeathLeftPos.png",
        maxFrames: 9
      },
      idleRightPos: {
        imageSrc: "./img/characters/roderic/right-position/IdleRightPos.png",
        maxFrames: 10
      },
      runRightPos: {
        imageSrc: "./img/characters/roderic/right-position/RunRightPos.png",
        maxFrames: 6
      },
      jumpRightPos: {
        imageSrc: "./img/characters/roderic/right-position/JumpRightPos.png",
        maxFrames: 2
      },
      fallRightPos: {
        imageSrc: "./img/characters/roderic/right-position/FallRightPos.png",
        maxFrames: 2
      },
      attack1RightPos: {
        imageSrc: "./img/characters/roderic/right-position/Attack1RightPos.png",
        maxFrames: 4
      },
      attack2RightPos: {
        imageSrc: "./img/characters/roderic/right-position/Attack2RightPos.png",
        maxFrames: 5
      },
      takeHitRightPos: {
        imageSrc: "./img/characters/roderic/right-position/Take HitRightPos.png",
        maxFrames: 3
      },
      deathRightPos: {
        imageSrc: "./img/characters/roderic/right-position/DeathRightPos.png",
        maxFrames: 9
      }
    },
    attackBoxAll: {
      attackBoxCurr: {
        offset: {
          x: -140,
          y: 18
        },
        width: 140,
        height: 50
      },
      attackBox: {
        offset: {
          x: -140,
          y: 18
        },
        width: 140,
        height: 50
      },
      attackBoxOpp: {
        offset: {
          x: 80,
          y: 18
        },
        width: 140,
        height: 50
      },
      attackBoxCurr2: {
        offset: {
          x: -172,
          y: 0
        },
        width: 172,
        height: 50
      },
      attackBox2: {
        offset: {
          x: -172,
          y: 0
        },
        width: 172,
        height: 50
      },
      attackBoxOpp2: {
        offset: {
          x: 80,
          y: 0
        },
        width: 172,
        height: 50
      },
      
    },
    facingRight: false,
    characterPos: "right",
    characterSfx: sfxLibrary.rodericRight,
    attackFrameThreshold: 2,
    name: "Roderic",
    nameColor: "#570166"
  },
  drakonLeft: {
    width: 100,
    height: 110,
    imageSrc: "./img/characters/drakon/left-position/IdleLeftPos.png",
    maxFrames: 10,
    scale: 2.55,
    offset: {
      x: 111,
      y: 101
    },
    sprites: {
      idleLeftPos: {
        imageSrc: "./img/characters/drakon/left-position/IdleLeftPos.png",
        maxFrames: 10
      },
      runLeftPos: {
        imageSrc: "./img/characters/drakon/left-position/RunLeftPos.png",
        maxFrames: 8
      },
      jumpLeftPos: {
        imageSrc: "./img/characters/drakon/left-position/JumpLeftPos.png",
        maxFrames: 3
      },
      fallLeftPos: {
        imageSrc: "./img/characters/drakon/left-position/FallLeftPos.png",
        maxFrames: 3
      },
      attack1LeftPos: {
        imageSrc: "./img/characters/drakon/left-position/Attack1LeftPos.png",
        maxFrames: 6
      },
      attack2LeftPos: {
        imageSrc: "./img/characters/drakon/left-position/Attack2LeftPos.png",
        maxFrames: 7
      },
      takeHitLeftPos: {
        imageSrc: "./img/characters/drakon/left-position/Take HitLeftPos.png",
        maxFrames: 3
      },
      deathLeftPos: {
        imageSrc: "./img/characters/drakon/left-position/DeathLeftPos.png",
        maxFrames: 11
      },
      idleRightPos: {
        imageSrc: "./img/characters/drakon/left-position/IdleRightPos.png",
        maxFrames: 10
      },
      runRightPos: {
        imageSrc: "./img/characters/drakon/left-position/RunRightPos.png",
        maxFrames: 8
      },
      jumpRightPos: {
        imageSrc: "./img/characters/drakon/left-position/JumpRightPos.png",
        maxFrames: 3
      },
      fallRightPos: {
        imageSrc: "./img/characters/drakon/left-position/FallRightPos.png",
        maxFrames: 3
      },
      attack1RightPos: {
        imageSrc: "./img/characters/drakon/left-position/Attack1RightPos.png",
        maxFrames: 6
      },
      attack2RightPos: {
        imageSrc: "./img/characters/drakon/left-position/Attack2RightPos.png",
        maxFrames: 7
      },
      takeHitRightPos: {
        imageSrc: "./img/characters/drakon/left-position/Take HitRightPos.png",
        maxFrames: 3
      },
      deathRightPos: {
        imageSrc: "./img/characters/drakon/left-position/DeathRightPos.png",
        maxFrames: 11
      }
    },
    attackBoxAll: {
      attackBoxCurr: {
        offset: {
          x: 100,
          y: -10
        },
        width: 108,
        height: 50
      },
      attackBox: {
        offset: {
          x: 100,
          y: -10
        },
        width: 108,
        height: 50
      },
      attackBoxOpp: {
        offset: {
          x: -108,
          y: -10
        },
        width: 108,
        height: 50
      },
      attackBoxCurr2: {
        offset: {
          x: 100,
          y: -10
        },
        width: 107,
        height: 50
      },
      attackBox2: {
        offset: {
          x: 100,
          y: -10
        },
        width: 107,
        height: 50
      },
      attackBoxOpp2: {
        offset: {
          x: -107,
          y: -10
        },
        width: 107,
        height: 50
      }
    },
    facingRight: true,
    characterPos: "left",
    characterSfx: sfxLibrary.drakonLeft,
    attackFrameThreshold: 4,
    name: "Drakon",
    nameColor: "#FF4500"
  },
  drakonRight: {
    position: {
      x: 820,
      y: 360
    },
    width: 100,
    height: 110,
    imageSrc: "./img/characters/drakon/right-position/IdleLeftPos.png",
    maxFrames: 10,
    scale: 2.55,
    offset: {
      x: 111,
      y: 101
    },
    sprites: {
      idleLeftPos: {
        imageSrc: "./img/characters/drakon/right-position/IdleLeftPos.png",
        maxFrames: 10
      },
      runLeftPos: {
        imageSrc: "./img/characters/drakon/right-position/RunLeftPos.png",
        maxFrames: 8
      },
      jumpLeftPos: {
        imageSrc: "./img/characters/drakon/right-position/JumpLeftPos.png",
        maxFrames: 3
      },
      fallLeftPos: {
        imageSrc: "./img/characters/drakon/right-position/FallLeftPos.png",
        maxFrames: 3
      },
      attack1LeftPos: {
        imageSrc: "./img/characters/drakon/right-position/Attack1LeftPos.png",
        maxFrames: 6
      },
      attack2LeftPos: {
        imageSrc: "./img/characters/drakon/right-position/Attack2LeftPos.png",
        maxFrames: 7
      },
      takeHitLeftPos: {
        imageSrc: "./img/characters/drakon/right-position/Take HitLeftPos.png",
        maxFrames: 3
      },
      deathLeftPos: {
        imageSrc: "./img/characters/drakon/right-position/DeathLeftPos.png",
        maxFrames: 11
      },
      idleRightPos: {
        imageSrc: "./img/characters/drakon/right-position/IdleRightPos.png",
        maxFrames: 10
      },
      runRightPos: {
        imageSrc: "./img/characters/drakon/right-position/RunRightPos.png",
        maxFrames: 8
      },
      jumpRightPos: {
        imageSrc: "./img/characters/drakon/right-position/JumpRightPos.png",
        maxFrames: 3
      },
      fallRightPos: {
        imageSrc: "./img/characters/drakon/right-position/FallRightPos.png",
        maxFrames: 3
      },
      attack1RightPos: {
        imageSrc: "./img/characters/drakon/right-position/Attack1RightPos.png",
        maxFrames: 6
      },
      attack2RightPos: {
        imageSrc: "./img/characters/drakon/right-position/Attack2RightPos.png",
        maxFrames: 7
      },
      takeHitRightPos: {
        imageSrc: "./img/characters/drakon/right-position/Take HitRightPos.png",
        maxFrames: 3
      },
      deathRightPos: {
        imageSrc: "./img/characters/drakon/right-position/DeathRightPos.png",
        maxFrames: 11
      }
    },
    attackBoxAll: {
      attackBoxCurr: {
        offset: {
          x: -108,
          y: -10
        },
        width: 108,
        height: 50
      },
      attackBox: {
        offset: {
          x: -108,
          y: -10
        },
        width: 108,
        height: 50
      },
      attackBoxOpp: {
        offset: {
          x: 100,
          y: -10
        },
        width: 108,
        height: 50
      },
      attackBoxCurr2: {
        offset: {
          x: -107,
          y: -10
        },
        width: 107,
        height: 50
      },
      attackBox2: {
        offset: {
          x: -107,
          y: -10
        },
        width: 107,
        height: 50
      },
      attackBoxOpp2: {
        offset: {
          x: 100,
          y: -10
        },
        width: 107,
        height: 50
      }
    },
    facingRight: false,
    characterPos: "right",
    characterSfx: sfxLibrary.drakonRight,
    attackFrameThreshold: 4,
    name: "Drakon",
    nameColor: "#FF4500"
  }
};