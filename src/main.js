// Jim Whitehead
// Created: 5/26/2024
// Phaser: 3.80.0
//
// Pathfinder demo
//
// An example of pathfinding in Phaser using the EasyStar.js pathfinder 
// https://github.com/prettymuchbryce/easystarjs
// 
// Assets from the following Kenney Asset packs
// Tiny Dungeon
// https://kenney.nl/assets/tiny-dungeon
//
// Tiny Town
// https://kenney.nl/assets/tiny-town
//


// game config
let config = {

    parent: "phaser-game",
    type: Phaser.CANVAS,
    render: {
        pixelArt: true  // prevent pixel art from getting blurred when scaled
    },
    width: 720,
    height: 720,
    scene: [Load, Start, Dungeon, EndScreen]

}

const SCALE = 2.0;

var my = {

    sprite: {}, 
    enemy: {}, 
    keyCollect: {}, 
    keycode: {}, 
    sfx: {}, 
    vfx: {}, 
    text: {}
    
};

const game = new Phaser.Game(config);