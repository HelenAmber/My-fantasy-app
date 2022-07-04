class GameScene_3 extends Phaser.Scene {
    constructor() {
        super("Game_3");
    }

    create() {
        this.createBackground();
        this.createСharacter();
        this.createProgress();
        this.createButtons();
        this.onChooseMakeUp();
    }

    init(data) {
        this.look = data.score;
        this.bag = data.bag;
        this.accessory = data.accessory;
    }

    createBackground() {
        this.add.sprite(0, 0,'bg_light').setOrigin(0,0);
        this.dark_overlay = this.add.sprite(0, 0,'bg_dark').setOrigin(0,0).setScale(0);
    }

    createСharacter() {
        this.characterLexy = new Character(this, this.look);
        this.characterLexy.setPosition(300, 550);
        this.bag === 1 ? this.add.sprite(252, 473, 'bag_1') : this.add.sprite(265, 428, 'bag_2');
        this.accessory === 1 ? this.add.sprite(316, 333, 'on_necklace') : this.add.sprite(306, 267, 'on_necklace1');
    }

    createProgress() {
        this.progress_3 = this.add.sprite(40, 30,'progress_3').setOrigin(0,0).setScale(0);
    }

    createButtons() {
        this.makeup1 = this.add.sprite(165, 740,'makeup1').setScale(0).setInteractive();
        this.makeup2 = this.add.sprite(435, 740,'makeup2').setScale(0).setInteractive();
        this.on_makeup_1 = this.add.sprite(300, 552, 'on_makeup_1').setScale(0);
        this.on_makeup_2 = this.add.sprite(300, 552, 'on_makeup_2').setScale(0);
    }
    
    onChooseMakeUp() {
        this.characterLexy.showOffer('Choose your make up');
        this.characterLexy.showCharacterThings(this.makeup1, this.makeup2);
        this.characterLexy.showHitPointer();
        this.characterLexy.toogleButtons(this.makeup1, this.makeup2, this.on_makeup_1, this.on_makeup_2, this.progress_3);
        
        this.input.on('pointerup', () => {
            this.timer = this.time.addEvent({
                delay: 2000,
                callback: () => {
                    this.scene.start('End', { 
                        score: this.look,
                        bag: this.bag,
                        accessory: this.accessory,
                        makeup: this.characterLexy.makeup
                    });
                }
            });
        });
    }
}