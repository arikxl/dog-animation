const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasWidth = canvas.width = 600;
const canvasHeight = canvas.height = 600;

const playerImg = new Image();
playerImg.src = './images/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;

let playerState = 'idle';
const dropDown = document.getElementById('animation');
dropDown.addEventListener('change', function (e) {
    playerState = e.target.value;
})


// sprite of carecter
// let frameX = 0

// Character
// let frameY = 0;
let gameFrame = 0;

// speed of animation
const staggerFrames = 2;

const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames:7
    },
    {
        name: 'jump',
        frames:7
    },
    {
        name: 'fall',
        frames:7
    },
    {
        name: 'run',
        frames:9
    },
    {
        name: 'dizzy',
        frames:11  
    },
    {
        name: 'sit',
        frames:5
    },
    {
        name: 'roll',
        frames:7
    },
    {
        name: 'bite',
        frames:7
    },
    {
        name: 'ko',
        frames:12
    },
    {
        name: 'getHit',
        frames:4
    },

 
];

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],

    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;

        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
})

function animate() {
    
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    let position = ~~(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;

    // s = src    d= destination
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImg,
        frameX , frameY , spriteWidth, spriteHeight,
        0, 0, spriteWidth, spriteHeight);
    // if (gameFrame % staggerFrames === 0) {
    //     if (frameX < 6) frameX++
    //     else frameX = 0;
    // }
    


    gameFrame++
    requestAnimationFrame(animate)
}
animate()

