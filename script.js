/*
  Mehdi Jokar
  This JavaScript file contains several functions and 
  each function draw a part of a skyline in the canvas.
*/

// get the canvas element by ID
const canvas = document.getElementById('canvas');

//get the canvas' 2D rendering context
const ctx = canvas.getContext('2d');

//constants
const WATER_HGT = 100; 
const GROUND_HGT = 10; 
const CVS_WIDTH = 600; 
const CVS_HEIGHT = 400; 
const BUILD_WIDTH = 55; 
const BUILD_MIN_H = 30; 
const BUILD_MAX_H = 150; 
const FONT_OFFSET = 40; 
const FONT_WIDTH = 100; 
const WINDOW_SIZE = 5; 
const NUM_BUILDINGS = 15;
const BUILD_MIN_W = 25;
const WINDOW_DISTANCE = 4; 



//this function draw a Background rectangle
function drawBackground(){
    ctx.fillStyle = '#3399FF';
    ctx.fillRect(0, 0, CVS_WIDTH, CVS_HEIGHT);
}

//this function draw a ground rectangle
function drawGround(){
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, CVS_HEIGHT-(WATER_HGT + GROUND_HGT), CVS_WIDTH, GROUND_HGT);
}

//this function draw a water rectangle
function drawWater(){
    ctx.fillStyle = '#003366';
    ctx.fillRect(0, CVS_HEIGHT- WATER_HGT, CVS_WIDTH, WATER_HGT);
}

//random function returns a random integer within a range
function random(low, high){
    return Math.random() * (high - low + 1) + low;
}


//this function draw a building
function drawBuilding(){
    ctx.fillStyle = '#000000';
    const randomX = random(0, (CVS_WIDTH-BUILD_WIDTH));
    const randomBuildWidth = random(BUILD_MIN_W, BUILD_WIDTH);
    const randomBuildHeight = random(BUILD_MIN_H, BUILD_MAX_H);
    const dimensionY = CVS_HEIGHT-(WATER_HGT + GROUND_HGT + randomBuildHeight);
    ctx.fillRect(randomX, dimensionY, randomBuildWidth, randomBuildHeight);

    //invoke the drawWindows() function
    drawWindows(randomX, dimensionY, randomBuildWidth, randomBuildHeight);
}


//this function accepts for parameters of a building and draw some windows for it
/**
 * @param  {} buildingX
 * @param  {} buildingY
 * @param  {} buildingW
 * @param  {} buildingH
 */
function drawWindows(buildingX, buildingY, buildingW, buildingH ){
    let windowCount = ((buildingW - (WINDOW_DISTANCE * 3)) / (WINDOW_SIZE + WINDOW_DISTANCE));
    let windowRows = (buildingH - (WINDOW_SIZE * 4)) / (WINDOW_SIZE + WINDOW_DISTANCE);
    
    let windowY = buildingY + WINDOW_DISTANCE;
    //draw all rows of the building
    for (let i = 0; i < windowRows; i++) {
        let windowX = buildingX + WINDOW_DISTANCE;
        //draw a row of windows
        for (let i = 0; i < windowCount; i++) {
            //draw the window
            ctx.fillStyle = 'white';
            ctx.fillRect(windowX, windowY, WINDOW_SIZE, WINDOW_SIZE);

            //adjust the x position of the current window
            windowX += (WINDOW_SIZE + WINDOW_DISTANCE);
        }
        //adjust the x position of the current window
        windowY += (WINDOW_SIZE + WINDOW_DISTANCE);
    }

}


function drawText() {
    ctx.fillStyle = 'white';
    ctx.font = '35px Times New Roman';
    ctx.lineDashOffset = FONT_OFFSET;
    ctx.fillText('Seattle', (CVS_WIDTH - (FONT_WIDTH + 5)), 35, FONT_WIDTH);
  }

//this function invokes the drawBuilding() function 15 times 
function drawSkyline(){
    for (let index = 0; index < NUM_BUILDINGS; index++) {
        drawBuilding();   
    }
}



//invoke functions
drawBackground();
drawWater();
drawGround();
drawText()
drawSkyline()









