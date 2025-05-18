  class Sprite {
    constructor({ position, 
      imageSrc, 
      scale = 1, 
      maxFrames = 1,
      offset = { x: 0, y: 0 }
    }) {
      this.position = position;   
      this.image = new Image();
      this.image.src = imageSrc;    
      this.scale = scale;
      this.maxFrames = maxFrames;
      this.currFrame = 0;
      this.framesElapsed = 0;
      this.framesHold = 5;
      this.offset = offset;
    }

    draw() {
      c.drawImage(
        this.image,
        this.currFrame * (this.image.width / this.maxFrames),
        0,
        this.image.width / this.maxFrames,
        this.image.height,
        this.position.x - this.offset.x, 
        this.position.y - this.offset.y,
        (this.image.width / this.maxFrames) * this.scale,
        this.image.height * this.scale
      );
    }

    animateFrames() {
      this.framesElapsed++;
      if (this.framesElapsed % this.framesHold === 0) {
        if (this.currFrame < this.maxFrames - 1) {
          this.currFrame ++;
        } else {
          this.currFrame = 0; 
        }
      }
    }

    update() {
      this.draw();
      this.animateFrames();
    }
  }

  class Fighter extends Sprite {
    constructor({ 
      position,
      width,
      height, 
      startHealth, 
      dps,
      critChance,
      critDmg,
      imageSrc, 
      scale = 1, 
      maxFrames = 1,
      offset = { x: 0, y: 0 },
      sprites,
      attackBoxAll = {
        attackBoxCurr: {
          offset,
          width, 
          height
        },
        attackBox: {
          offset,
          width, 
          height
        },
        attackBoxOpp: {
          offset,
          width, 
          height
        },
        attackBoxCurr2: {
          offset,
          width, 
          height
        },
        attackBox2: {
          offset,
          width, 
          height
        },
        attackBoxOpp2: {
          offset,
          width, 
          height
        }
      },
      facingRight,
      characterPos,
      characterSfx,
      attackFrameThreshold,
      name,
      nameColor
    }) {
      super({
        position,
        imageSrc,
        scale,
        maxFrames,
        offset
      })

      this.velocity = {
        x: 0,
        y: 0
      };
      this.width = width;
      this.height = height;
      this.lastKey;

      this.attackBoxAll = {
        attackBoxCurr: {
          position: {
            x: this.position.x,
            y: this.position.y
          },
          offset: attackBoxAll.attackBoxCurr.offset,
          width: attackBoxAll.attackBoxCurr.width,
          height: attackBoxAll.attackBoxCurr.height
        },
        attackBox: {
          position: {
            x: this.position.x,
            y: this.position.y
          },
          offset: attackBoxAll.attackBox.offset,
          width: attackBoxAll.attackBox.width,
          height: attackBoxAll.attackBox.height
        },
        attackBoxOpp:{
          position: {
            x: this.position.y,
            y: this.position.y
          },
          offset: attackBoxAll.attackBoxOpp.offset,
          width: attackBoxAll.attackBoxOpp.width,
          height: attackBoxAll.attackBoxOpp.height
        },
        attackBoxCurr2: {
          position: {
            x: this.position.x,
            y: this.position.y
          },
          offset: attackBoxAll.attackBoxCurr2.offset,
          width: attackBoxAll.attackBoxCurr2.width,
          height: attackBoxAll.attackBoxCurr2.height
        },
        attackBox2: {
          position: {
            x: this.position.x,
            y: this.position.y
          },
          offset: attackBoxAll.attackBox2.offset,
          width: attackBoxAll.attackBox2.width,
          height: attackBoxAll.attackBox2.height
        },
        attackBoxOpp2:{
          position: {
            x: this.position.y,
            y: this.position.y
          },
          offset: attackBoxAll.attackBoxOpp2.offset,
          width: attackBoxAll.attackBoxOpp2.width,
          height: attackBoxAll.attackBoxOpp2.height
        }
      };

      this.facingRight = facingRight;
      this.characterPos = characterPos;

      this.isOnGround = false;
      this.isAttacking = false;
      this.isAttacking2 = false;
      this.attack2Cooldown = false;
      this.isAnimatingAttack = false;
      this.attackFrameThreshold = attackFrameThreshold;
      
      this.isHit = false;

      this.startHealth = startHealth;
      this.currHealth = startHealth;
      this.dps = dps;
      this.critChance = critChance;
      this.critDmg = critDmg;

      this.sprites = sprites;
      for (const sprite in sprites) {
        sprites[sprite].image = new Image();
        sprites[sprite].image.src = sprites[sprite].imageSrc;
      }

      this.dead = false;
      this.stopAnimation = false;
      this.isHPBarFlicker = false;

      this.characterSfx = characterSfx;

      this.attack1AttackSpeed = 
        this.sprites.attack1LeftPos.maxFrames * this.framesHold * 11;

      this.name = name;
      this.nameColor = nameColor;
    }

    update() {
      this.draw();
      if (!this.stopAnimation) this.animateFrames();

      
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.checkForHorizontalCanvasCollision();

      // update all attack boxes
      this.updateAttackBox();
      
      if (this.characterPos === "left") {
        this.updateAttackBoxDirectionLeftPos();
      }
      if (this.characterPos === "right") {
        this.updateAttackBoxDirectionRightPos();
      }

      // player body for reference
      // c.fillStyle = "rgba(0, 0, 255, 0.8)";
      // c.fillRect(
      //   this.position.x,
      //   this.position.y,
      //   this.width,
      //   this.height
      // );

      // attackBox for attack1 for reference
      // c.fillStyle = "rgba(255, 0, 0, 0.2)";
      // c.fillRect(
      //   this.attackBoxAll.attackBoxCurr.position.x, 
      //   this.attackBoxAll.attackBoxCurr.position.y, 
      //   this.attackBoxAll.attackBoxCurr.width, 
      //   this.attackBoxAll.attackBoxCurr.height
      // );

      // attackBox for attack2 for reference
      // c.fillStyle = "rgba(0, 255, 0, 0.2)";
      // c.fillRect(
      //   this.attackBoxAll.attackBoxCurr2.position.x, 
      //   this.attackBoxAll.attackBoxCurr2.position.y, 
      //   this.attackBoxAll.attackBoxCurr2.width, 
      //   this.attackBoxAll.attackBoxCurr2.height
      // );

      // ground collision
      const groundLevel = canvas.height - 96;
      if (this.position.y + this.height + this.velocity.y >= groundLevel) {
        this.velocity.y = 0;
        this.position.y = groundLevel - this.height;
        this.isOnGround = true;
      } else {
        this.velocity.y += gravity;
        this.isOnGround = false;
      }
    }

    handlesDeadSpriteChange() {
      this.dead = true;

      if (this.facingRight) this.switchSprite("deathLeftPos");
      else if (!this.facingRight) this.switchSprite("deathRightPos");
    }

    handlesGetHitSpriteChange() {
      if (this.facingRight) 
        this.switchSprite("takeHitLeftPos");
      else this.switchSprite("takeHitRightPos");

      if (currUserData.isSfxOnOrOff) 
        this.playCharacterSfxOverlay(this.characterSfx.getHit);
    }

    handlesCritSfx() {
      if (currUserData.isSfxOnOrOff) 
        this.playCharacterSfxOverlay(this.characterSfx.crit);
    }

    handlesHorizontalSpriteChange() {
      if (this.isOnGround && currUserData.isSfxOnOrOff) 
        this.playCharacterSfx(this.characterSfx.running);

      if (this.facingRight) this.switchSprite("runLeftPos");
      else this.switchSprite("runRightPos");
    }

    handlesVerticalSpriteChange() {
      if (this.velocity.y < 0) {
        if (currUserData.isSfxOnOrOff) 
        this.playCharacterSfx(this.characterSfx.jumping);

        if (this.facingRight) this.switchSprite("jumpLeftPos");
        else this.switchSprite("jumpRightPos");
      } else if (this.velocity.y > 0) {
        if (this.facingRight) this.switchSprite("fallLeftPos");
        else this.switchSprite("fallRightPos");
      }
    }

    handlesIdleSpriteChange() {
      if (this.facingRight) this.switchSprite("idleLeftPos");
      else this.switchSprite("idleRightPos");
    }

    updateAttackBox() {
      // attack1
      this.attackBoxAll.attackBoxCurr.position.x = 
        this.position.x + this.attackBoxAll.attackBoxCurr.offset.x;
      this.attackBoxAll.attackBoxCurr.position.y = 
        this.position.y + this.attackBoxAll.attackBoxCurr.offset.y;

      // attack2
      this.attackBoxAll.attackBoxCurr2.position.x = 
        this.position.x + this.attackBoxAll.attackBoxCurr2.offset.x;
      this.attackBoxAll.attackBoxCurr2.position.y = 
        this.position.y + this.attackBoxAll.attackBoxCurr2.offset.y;
    }

    updateAttackBoxDirectionLeftPos() {
      if (this.facingRight) {
        this.attackBoxAll.attackBoxCurr = this.attackBoxAll.attackBox;
        this.attackBoxAll.attackBoxCurr2 = this.attackBoxAll.attackBox2;
      } else {
        this.attackBoxAll.attackBoxCurr = this.attackBoxAll.attackBoxOpp;
        this.attackBoxAll.attackBoxCurr2 = this.attackBoxAll.attackBoxOpp2;
      } 
    }

    updateAttackBoxDirectionRightPos() {
      if (this.facingRight) {
        this.attackBoxAll.attackBoxCurr = this.attackBoxAll.attackBoxOpp;
        this.attackBoxAll.attackBoxCurr2 = this.attackBoxAll.attackBoxOpp2;
      } else {
        this.attackBoxAll.attackBoxCurr = this.attackBoxAll.attackBox;
        this.attackBoxAll.attackBoxCurr2 = this.attackBoxAll.attackBox2;
      } 
    }

    checkForHorizontalCanvasCollision() {
      // pro check
      this.position.x = 
        Math.min(Math.max(this.position.x, 0), canvas.width - this.width);
    }

    attack1() {
      if (
        this.isAnimatingAttack || 
        this.image === this.sprites.takeHitLeftPos.image ||
        this.image === this.sprites.takeHitRightPos.image ||
        this.image === this.sprites.attack2LeftPos.image ||
        this.image === this.sprites.attack2RightPos.image
      ) return;
      
      if (this.facingRight) this.switchSprite("attack1LeftPos");
      else this.switchSprite("attack1RightPos")
      if (currUserData.isSfxOnOrOff) 
        this.playCharacterSfx(this.characterSfx.atk1);    
    
      this.isAttacking = true;
      this.isAnimatingAttack = true;

      // Fallback reset in case animation doesn't complete
      setTimeout(() => {
        this.isAnimatingAttack = false;
      }, this.sprites.attack1LeftPos.maxFrames * this.framesHold * 16);
    }

    attack2() {
      if (
        this.isAnimatingAttack || 
        this.attack2Cooldown ||
        this.image === this.sprites.takeHitLeftPos.image ||
        this.image === this.sprites.takeHitRightPos.image ||
        this.image === this.sprites.attack1LeftPos.image ||
        this.image === this.sprites.attack1RightPos.image
      ) return;
      
      if (this.facingRight) this.switchSprite("attack2LeftPos");
      else this.switchSprite("attack2RightPos")
      
      if (currUserData.isSfxOnOrOff) 
        this.playCharacterSfx(this.characterSfx.atk2);

      this.isAttacking2 = true;
      this.isAnimatingAttack = true;
      
      this.attack2Cooldown = true;
      setTimeout(() => {
        this.attack2Cooldown = false;
      }, 5000);

      // Fallback reset in case animation doesn't complete
      setTimeout(() => {
        this.isAnimatingAttack = false;
      }, this.sprites.attack2LeftPos.maxFrames * this.framesHold * 16);
    }

    isHitReset(attack1AttackSpeedOpposite) {
      setTimeout(() => {
        this.isHit = false;
      }, attack1AttackSpeedOpposite);
    }

    isCriticalHit() {
      return Math.random() < this.critChance;
    }

    switchSprite(sprite) {
      //override for attack1 and attack2 animation both left and right
      if (
        (this.image === this.sprites.attack1LeftPos.image &&
        this.currFrame < this.sprites.attack1LeftPos.maxFrames - 1) || 
        (this.image === this.sprites.attack2LeftPos.image &&
          this.currFrame < this.sprites.attack2LeftPos.maxFrames - 1)
      ) return;

      if (
        (this.image === this.sprites.attack1RightPos.image &&
        this.currFrame < this.sprites.attack1RightPos.maxFrames - 1) || 
        (this.image === this.sprites.attack2RightPos.image &&
          this.currFrame < this.sprites.attack2RightPos.maxFrames - 1)
      ) return;


      // Reset isAnimatingAttack when attack animations end both left and right
      if (
        (
          this.image === this.sprites.attack1LeftPos.image && 
          this.currFrame === this.sprites.attack1LeftPos.maxFrames - 1)
      ) {
        this.isAnimatingAttack = false;
        this.isAttacking = false;
      }

      if (
        (
          this.image === this.sprites.attack2LeftPos.image && 
          this.currFrame === this.sprites.attack2LeftPos.maxFrames - 1
        )
      ) {
        this.isAnimatingAttack = false;
        this.isAttacking2 = false;
      }

      if (
        (
          this.image === this.sprites.attack1RightPos.image && 
          this.currFrame === this.sprites.attack1RightPos.maxFrames - 1) 
      ) {
        this.isAnimatingAttack = false;
        this.isAttacking = false;
      }

      if (
        (
          this.image === this.sprites.attack2RightPos.image && 
          this.currFrame === this.sprites.attack2RightPos.maxFrames - 1
        )
      ) {
        this.isAnimatingAttack = false;
        this.isAttacking2 = false;
      }

    
      //override for takeHit animation both left and right
      if (
        this.image === this.sprites.takeHitLeftPos.image &&
        this.currFrame < this.sprites.takeHitLeftPos.maxFrames - 1
      ) return;

      if (
        this.image === this.sprites.takeHitRightPos.image &&
        this.currFrame < this.sprites.takeHitRightPos.maxFrames - 1
      ) return;

      //override for death animation
      
      if (
        this.image === this.sprites.deathLeftPos.image && 
        this.currFrame === this.sprites.deathLeftPos.maxFrames - 1
      ) {
        this.stopAnimation = true;
        return;
      }

      if (
        this.image === this.sprites.deathRightPos.image && 
        this.currFrame === this.sprites.deathRightPos.maxFrames - 1
      ) {
        this.stopAnimation = true;
        return;
      }
      
      switch (sprite) {
        case "idleLeftPos":
        case "idleRightPos":
        case "runLeftPos":
        case "runRightPos":
        case "jumpLeftPos":
        case "jumpRightPos":
        case "fallLeftPos":
        case "fallRightPos":
        case "attack1LeftPos":
        case "attack1RightPos":
        case "attack2LeftPos":
        case "attack2RightPos":
        case "takeHitLeftPos":
        case "takeHitRightPos":
        case "deathLeftPos":
        case "deathRightPos":
          if (this.image !== this.sprites[sprite].image) {
            this.image = this.sprites[sprite].image;
            this.maxFrames = this.sprites[sprite].maxFrames;
            this.currFrame = 0;
          }
          break;
      }
    }

    playCharacterSfx(sfx) {
      sfx.play();
    }

    playCharacterSfxOverlay(sfx) {
      const soundNode = sfx.cloneNode();
      soundNode.play();
    }
  }