'use strict';




// ------------------------------------------------------------------------------------------------
// * New Learn *

// draw: ctx.globalAlpha = this.alpha;  inside movement: this.alpha -= 0.01;  トランジションを作成
// const color = `hsl(${Math.random() * 360}, 50%, 50%)`;  リテラルで読み込ませる
// x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;  ２分の１の確率を設定する
// const friction = 0.99; 時間の経過と共に減算する  // ポイントは掛け増す //
// inside movement: this.velocity.x *= friction; this.velocity.y *= friction;
// let AnimationId; cancelAnimationFrame(AnimationId); リクエストはキャンセルの上に記述
// const angle = Math.atan2(destinationY - startingPointY, destinationX - startingPointX)
// const velocity = {x: Math.cos(angle),  y: Math.sin(angle)}
// const distance = Math.hypot(trackingPointX - targetX, trackingPointY - targetY)
// enemiesのindex番めの削除 outside of canvas width or collision
// enemies.forEach(enemy,index) => { setTimeout(() => { enemies.splice(index, 1);), 0}  
// if(enemy.radius - 10 > 20) { enemy.radius -= 10;  // shrink enemy size 
// gsap.to(enemy, { radius: enemy.radius - 20, ease: "linear", duration: .5})  *gsap plugins


// ------------------------------------------------------------------------------------------------

//                                 ----- SHOOTING GAME -----
// ------------------------------------------------------------------------------------------------
// stp1.---  create player & projectile class ---


// const canvas = document.querySelector('canvas');
//   const ctx = canvas.getContext('2d');
//     canvas.width = innerWidth;
//     canvas.height = innerHeight;
//   const x = canvas.width / 2;
//   const y = canvas.height / 2;

// class Player {
//   constructor(x, y, radius, color) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.color = color;
//   }
//   draw() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fill();
//   }
// }
// const player = new Player(x, y, 50, 'purple');
//   player.draw();

// class Projectile {
//   constructor(x, y, radius, color, velocity) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.color = color;
//     this.velocity = velocity;
//   }
//   draw() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fill();
//   }
//   update() {
//     this.draw();
//     this.x += this.velocity.x;
//     this.y += this.velocity.y;
//   }
// }

// // ----------------------------------------------------------
// //     const projectile = new Projectile(canvas.width / 2, 
// //       canvas.height / 2, 5, 'blue', {x: 1, y: 1});
// // const projectiles = [projectile];
// // ----------------------------------------------------------

// const projectiles = [];

// function animate() {
//   projectiles.forEach(projectile => {
//     projectile.update();
//   });
//   requestAnimationFrame(animate);
// } animate();


// window.addEventListener('click', (e) => {
//   projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, 5, 'blue', {x: 1, y: 1}));
//   projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, 5, 'orange', {x: -1, y: -1}));
// });


// ------------------------------------------------------------------------------------------------
// step2.---  1.set event & set velocity ---  2.create enemy & spawn enemy ---


// const canvas = document.querySelector('canvas');
//   const ctx = canvas.getContext('2d');
//     canvas.width = innerWidth;
//     canvas.height = innerHeight;
//   const x = canvas.width / 2;
//   const y = canvas.height / 2;

// class Player {
//   constructor(x, y, radius, color) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.color = color;
//   }
//   draw() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fill();
//   }
// }

// class Projectile {
//   constructor(x, y, radius, color, velocity) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.color = color;
//     this.velocity = velocity;
//   }
//   draw() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fill();
//   }
//   update() {
//     this.draw();
//     this.x += this.velocity.x;
//     this.y += this.velocity.y;
//   }
// }

// // create enemy -----------------------------------------------------
// class Enemy {
//   constructor(x, y, radius, color, velocity) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.color = color;
//     this.velocity = velocity;
//   }
//   draw() {
//       ctx.beginPath();
//       ctx.fillStyle = this.color;
//       ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//       ctx.fill();
//   }
//   enemyMove() {
//     this.x += this.velocity.x;
//     this.y += this.velocity.y;
//   }
//   update() {
//     this.draw();
//     this.enemyMove();
//   }
// }

// ------------------------------------------------------------------
// spawn enemies step1.---

// function spawnEnemies() {
//   setInterval(() => {
//     const x = 100;
//     const y = 100;
//     const radius = 30;
//     const color = 'green';
//     const velocity = {x: 1, y: 1}
//     enemies.push(new Enemy(x, y, radius, color, velocity));
//   }, 1000);
// } spawnEnemies();

// ------------------------------------------------------------------
// spawn enemies step2.---

// const enemies = [];
// function spawnEnemies() {
//   setInterval(() => {
//     const x = 100;
//     const y = 100;
//     const radius = 30;
//     const color = 'green';
//       const angle = Math.atan2(  // *
//         canvas.height / 2 - y, 
//         canvas.width / 2 - x);
//       const velocity = {
//         x: Math.cos(angle),
//         y: Math.sin(angle)
//       };  
//     enemies.push(new Enemy(x, y, radius, color, velocity));
//   }, 1000);
// } 
// // spawnEnemies();

// ------------------------------------------------------------------

// const player = new Player(x, y, 50, 'purple');
// const projectiles = [];

// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   player.draw();
//   projectiles.forEach(projectile => {
//     projectile.update();
//   });

//   enemies.forEach(enemy => {
//     enemy.update();
//   });
//   requestAnimationFrame(animate);
// } animate();

// window.addEventListener('click', (e) => {
//   const angle = Math.atan2(                // Math.atan2(Y Coordinate, X Coordinate) // *
//     e.clientY - canvas.height / 2,         // destination - Starting point // *
//     e.clientX - canvas.width / 2);         // destination - Starting point // *
//   const velocity = {
//     x: Math.cos(angle) * 10,
//     y: Math.sin(angle) * 10
//   };  
//   projectiles.push(new Projectile(x, y, 5, 'blue', velocity));
//   console.log(angle);
// });


// ------------------------------------------------------------------------------------------------
// step3. spawn enemies upgrade ---


const cursorRange = document.querySelector('.cursor-range');
  const clickStart = document.querySelector('.btn');
const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  const x = canvas.width / 2;
  const y = canvas.height / 2;


class Player {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.exist = false;
    this.score = 0;
    this.gameOver = true;
  }
  draw() {
    if(this.exist) {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  playGameText() {
    if(this.gameOver) {
      ctx.font = 'bold 32px Verdana'
      ctx.fillStyle = 'rgb(255, 255, 0)';
      if(canvas.width < 416 && canvas.height < 813) {
        ctx.fillText('play game', canvas.width - 205, 45);
      } else if(canvas.width < 813 && canvas.height < 416) {
        ctx.fillText('play game', canvas.width - 205, 45);
      } else {
        ctx.fillText('play game', canvas.width - 230, 50);
      }
    }
  }
  gameOverText() {
    ctx.font = 'bold 32px Verdana'
    ctx.fillStyle = 'rgb(255, 0, 0)';
    if(canvas.width < 416 && canvas.height < 813) {
      ctx.fillText('game over', canvas.width - 210, 45);
    } else if(canvas.width < 813 && canvas.height < 416) {
      ctx.fillText('game over', canvas.width - 210, 45);
    } else {
      ctx.fillText('game over', canvas.width - 230, 50);
    }
  }
  scoreText() {
    ctx.font = 'bold 16px Verdana'
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillText(`score: ${this.score}`, 20, 30);
  }
  getActFalse() { // game over particles explosion 
    this.gameOver = true; // current: inactive
  }  
  update() {
    this.draw();
  }
}

// projectile ------------------------------------------------------------------
class Projectile {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }
  draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
  }
  movement() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
  update() {
    this.draw();
    this.movement();
  }
}

// enemy ------------------------------------------------------------------
class Enemy {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    // this.exist = true;  // *AV 
  }
  draw() {
    // if(this.exist) {  // *AV 
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    // }
  }
  movement() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
  update() {
    this.draw();
    this.movement();
  }
  // destroyed() {  // *AV 
  //   this.exist = false;
  // }
}

// particle ------------------------------------------------------------------
  // const friction = 0.99;  // *
class Particle {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.alpha = 1;  // *
  }
  draw() {
    ctx.save();  // *
    // globalAlpha <= 0 turn into opacity 1  // *
    ctx.globalAlpha = this.alpha;  // *
    ctx.beginPath(); 
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  movement() {
    // this.velocity.x *= friction;
    // this.velocity.y *= friction;
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    // if(!player.exist) {  
    //   this.alpha -= 0; 
    //   return;
    // } else {
    //   this.alpha -= 0.002;  // *
    // } // active enemy globalAlpha version
    // this.alpha -= 0.01; // *globalAlpha all active version
    // this.alpha -= 0.001; // globalAlpha like inactive
    this.alpha -= 0; // globalAlpha inactivate version
  }
  update() {
    this.draw();
    this.movement();
  }
}

  const player = new Player(x, y, 10, 'white');
    const projectiles = [];
    const enemies = [];
    const particles = [];

    
// spawnEnemies ------------------------------------------------------------------
function spawnEnemies() {
  setInterval(() => {
    let randomV;  // velocity control for window size
    if(canvas.width < 416 && canvas.height < 813) {
      randomV = Math.random() * 1 + 1; // normal velocity
    } else if(canvas.width < 813 && canvas.height < 416) {
      randomV = Math.random() * 1 + 1; // same as constVelocity
    } else {
      randomV = Math.random() * 2.5 * 1;  // bc *3+1 
    }
    const radius = Math.floor(Math.random() * (60 - 10)) + 10;
      const color = `hsla(${Math.random() * 360}, 50%, 50%, 0.9)`;  // *
      // const color = `rgba(
      //   ${Math.floor(Math.random() * 255 + 1)}, 
      //   ${Math.floor(Math.random() * 255 + 1)}, 
      //   ${Math.floor(Math.random() * 255 + 1)}, 1.0)`; 
    let x, y;
    if(Math.random() < 0.5) {
      x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
      y = Math.random() * canvas.height;
    } else {
      x = Math.random() * canvas.width;
      y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
    }
      const angle = Math.atan2(  // *
        canvas.height / 2 - y, 
        canvas.width / 2 - x);
      const velocity = {
        x: Math.cos(angle) * randomV,
        y: Math.sin(angle) * randomV
      };
      enemies.push(new Enemy(x, y, radius, color, velocity));
      console.log(enemies);
  }, 1500);
}
spawnEnemies();
// setInterval 1000 or 500, randomV = Math.random() * 0.5;
// ------------------------------------------------------------------
// collision  projectile & enemies ---

// let AnimationId;
// function animate() {
//   ctx.fillStyle = 'rgba(0, 0, 0, 0.1';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     AnimationId = requestAnimationFrame(animate);
//   player.update();
//     projectiles.forEach((projectile, index) => {
//       projectile.update();
//       if(projectile.x + projectile.radius > canvas.width 
//       || projectile.x - projectile.radius < 0 
//       || projectile.y + projectile.radius > canvas.height 
//       || projectile.y - projectile.radius < 0) {
//         setTimeout(() => { // remove projectile when off screen
//           projectiles.splice(index, 1);
//         }, 0);
//       }
//     });
//   enemies.forEach((enemy, index) => {
//     enemy.update();
//       const distance = Math.hypot(player.x - enemy.x, player.y - enemy.y);
//         if(distance - enemy.radius - player.radius < 0) {
//           cancelAnimationFrame(AnimationId);
//         } // enemy gets player game over
//     projectiles.forEach((projectile, i) => {
//         const distance = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);
//       if(distance - enemy.radius - projectile.radius < 0) { // collision detect
//         // enemy.destroyed(); // *AV 
//           setTimeout(() => {
//             enemies.splice(index, 1);
//             projectiles.splice(i, 1);
//           }, 0);
//       }
//     });
//   });
// } 
// animate();

// ------------------------------------------------------------------
// shrink enemies ---

let AnimationId;
function animate() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    AnimationId = requestAnimationFrame(animate);
      player.update();
    particles.forEach((particle, index) => {  
      // remove projectile when off screen
      if(particle.x + particle.radius > canvas.width 
      || particle.x - particle.radius < 0 
      || particle.y + particle.radius > canvas.height 
      || particle.y - particle.radius < 0) {
        setTimeout(() => { 
          particles.splice(index, 1);
        }, 0);
      }
      // * avoid globalAlpha opacity 1
      if(particle.alpha <= 0) {  
        setTimeout(() => {  // remove particles
          particles.splice(index, 1);
        }, 0);
      } else {
        particle.update();
      }
    });
    projectiles.forEach((projectile, index) => {
      projectile.update();
      // remove projectile when off screen
      if(projectile.x + projectile.radius > canvas.width 
      || projectile.x - projectile.radius < 0 
      || projectile.y + projectile.radius > canvas.height 
      || projectile.y - projectile.radius < 0) {
        setTimeout(() => { 
          projectiles.splice(index, 1);
        }, 0);
      }
    });
  enemies.forEach((enemy, index) => {
    enemy.update();
    // remove enemy when off screen
    if(enemy.x + enemy.radius > canvas.width + enemy.radius * 2
    || enemy.x - enemy.radius < 0 - enemy.radius * 2
    || enemy.y + enemy.radius > canvas.height + enemy.radius * 2
    || enemy.y - enemy.radius < 0 - enemy.radius * 2) {
      setTimeout(() => { 
        enemies.splice(index, 1);
      }, 0);
    }
    // player enemy collision  * game over
    const distance = Math.hypot(player.x - enemy.x, player.y - enemy.y);
      if(distance - enemy.radius - player.radius < 0) {  // player enemy collision
        // cancelAnimationFrame(AnimationId);
        if(player.exist) {  // game over particles explosion  // *
          for (let i = 0; i < enemy.radius; i++) {  
            particles.push(new Particle(player.x, player.y , Math.random() * 3,
            player.color, {
              x: (Math.random() - 0.5) * (Math.random() * 8),  // ~ * ( add power )
              y: (Math.random() - 0.5) * (Math.random() * 8)   // ~ * ( add power )
            }));
          }
          setTimeout(() => {
            player.exist = false;
            setTimeout(() => {  // restart game
              clickStart.classList.add('js_btnClick');
              player.gameOver = true;
              // player.getActFalse();
            }, 3500);
          }, 500);
        }
      } 
    // enemy projectile collision 
    projectiles.forEach((projectile, i) => {  
      const distance = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);
      if(distance - enemy.radius - projectile.radius < 0) { // collision
        for (let i = 0; i < enemy.radius; i++) {  // create particles explosion  // *
          particles.push(new Particle(projectile.x, projectile.y, Math.random() * 3,
          enemy.color, {
            x: (Math.random() - 0.5) * (Math.random() * 6),  // ~ * ( add power )
            y: (Math.random() - 0.5) * (Math.random() * 6)   // ~ * ( add power )
          }));
        }
        if(enemy.radius - 10 > 20) {  // shrink enemy size 
        // enemy.radius -= 10;  // VaJS Version
          gsap.to(enemy, {  // *gsap plugins
            radius: enemy.radius - 20,
            ease: "linear",
            duration: .5
          });
          setTimeout(() => {
            projectiles.splice(i, 1);
          }, 0);
        } else {
          setTimeout(() => {
            projectiles.splice(i, 1);
            enemies.splice(index, 1);
            // enemy.destroyed(); // *AV 
          }, 0);
        }
        player.score += Math.floor(enemy.radius); 
      }
    });
  });
    player.scoreText();  
    player.playGameText();  
  if(!player.exist && !player.gameOver) {player.gameOverText()}
} 
animate();


// event --------------------------------------------------------------

  document.addEventListener('click', (e) => {
    const angle = Math.atan2(  // *
      e.clientY - canvas.height / 2, 
      e.clientX - canvas.width / 2);
    const velocity = {
      x: Math.cos(angle) * 5,
      y: Math.sin(angle) * 5
    };  
    if(player.exist) {
      projectiles.push(new Projectile(x, y, 3, 'white', velocity));
    }
  });

  clickStart.addEventListener('click', (e) => {
    e.stopPropagation();
    clickStart.classList.remove('js_btnClick');
    enemies.splice(0);
    player.exist = true;
    player.gameOver = false;
    player.score = 0;
    // particles.splice(0);  // particles all delete
  });

  window.addEventListener('mousedown', (e) => {
    if(player.exist) {cursorRange.classList.add('js_circle')}
    cursorRange.style.left = e.clientX + 'px';
    cursorRange.style.top = e.clientY - 1 + 'px';
  });

  window.addEventListener('mouseup', () => {
    cursorRange.classList.remove('js_circle')
  });

  window.addEventListener('load', () => {
    clickStart.classList.add('js_btnClick');
  });

  window.addEventListener('resize', () => {
      window.location.reload();
  });


// ------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------
// collision detection ---  Math.hypot()  get distance (between two point)

// Math.hypot(trackingPointX *subtracting target.X, trackingPointY *subtracting target.Y); 
// Math.hypot(trackingPointX - target.X, trackingPointY - target.Y); #1

/* 
const distance = Math.hypot(trackingPointX - target.X, trackingPointY - target.Y); #1
if(distance < 1) {
console.log('collision');
} 
*/

// Math.hypot(target.X - trackingPointX, target.Y - trackingPointY); #2
// const distance = Math.hypot(target.X - trackingPointX, target.Y - trackingPointY); #2
// ----------------------------------------------------------------------------------------
// player movable testing version ---


// window.addEventListener('click', (e) => {
//   const angle = Math.atan2( 
//     e.clientY - player.y, 
//     e.clientX - player.x);
//   const velocity = {
//     x: Math.cos(angle) * 5,
//     y: Math.sin(angle) * 5
//   };  
//   if(player.exist) {
//     projectiles.push(new Projectile(player.x, player.y, 3, 'white', velocity));
//   }
// });

// class Player {
//   constructor(x, y, radius, color) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.color = color;
//     this.exist = false;
//     this.score = 0;
//     this.gameOver = true;
//     this.dx = 15;
//     this.dy = 15;
//     this.eventHandler();
//   }
//   eventHandler() {
//     window.addEventListener('keydown', (e) => {
//       if(e.key === 'ArrowLeft') {
//         console.log(e.key);
//         this.x += -this.dx;
//       }
//       if(e.key === 'ArrowRight') {
//         console.log(e.key);
//         this.x += this.dx;
//       }
//       if(e.key === 'ArrowUp') {
//         console.log(e.key);
//         this.y += -this.dy;
//       }
//       if(e.key === 'ArrowDown') {
//         console.log(e.key);
//         this.y += this.dy;
//       }
//     });
//   }
//   draw() {
//     if(this.exist) {
//       ctx.beginPath();
//       ctx.fillStyle = this.color;
//       ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//       ctx.fill();
//     }
//   }
//   movement() {
//     this.x += this.dx;
//     this.y += this.dy;
//   }
//   playGameText() {
//     if(this.gameOver) {
//       ctx.font = 'bold 32px Verdana'
//       ctx.fillStyle = 'rgb(255, 255, 0)';
//       ctx.fillText('play game', canvas.width - 230, 50);
//     }
//   }
//   gameOverText() {
//     ctx.font = 'bold 32px Verdana'
//     ctx.fillStyle = 'rgb(255, 0, 0)';
//     ctx.fillText('game over', canvas.width - 230, 50);
//   }
//   scoreText() {
//     ctx.font = 'bold 16px Verdana'
//     ctx.fillStyle = 'rgb(255, 255, 255)';
//     ctx.fillText(`score: ${this.score}`, 20, 30);
//   }
//   getActFalse() { // game over particles explosion 
//     this.gameOver = true;
//   }  
//   update() {
//     this.draw();
//     this.playGameText();
//     this.scoreText();
//   }
// }


// ----------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------
// window.addEventListener('resize', () => {
//   canvas.width = '';
//   canvas.height = '';
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   this.x = canvas.width / 2
//   this.y = canvas.width / 2
//   console.log('hi');
// });
// ------------------------------------------------------------------------------------------------





















// ----------------------------------------------------------------
// test ---
// ----------------------------------------------------------------
// randomRGBA 元版 ---
// const color = `rgba(
//   ${Math.floor(Math.random() * 255 + 1)}, 
//   ${Math.floor(Math.random() * 255 + 1)}, 
//   ${Math.floor(Math.random() * 255 + 1)}, 0.1)`; 
// --------------------------------------------------------
// test input value.1
/* 
setInterval 30, 
Math.floor(Math.random() * 255 + 1)}, 0.1), 
radius = Math.floor(Math.random() * (50 - 10)) + 10
*/
// ----------------------------------------------------------------




















































































// ------------------------------------------------------------------------------------------------

