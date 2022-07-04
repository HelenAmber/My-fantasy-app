let config = {
    type: Phaser.AUTO, // webgl or canvas
    width: 600,
    height: 900,
    scene: [BootScene, PreloadScene, StartScene, GameScene, GameScene_1, GameScene_2, GameScene_3,EndScene],
};

let game = new Phaser.Game(config);