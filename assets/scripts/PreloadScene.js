class PreloadScene extends Phaser.Scene {
    constructor() {
        super("Preload");
    }

    preload() {
        this.load.atlas('start', 'assets/images/start/start.png', 'assets/scripts/start.json');
    }
    create() {
       this.scene.start('Start');
    }
}