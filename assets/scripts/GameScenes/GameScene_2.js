class GameScene_2 extends Phaser.Scene {
    constructor() {
        super("Game_2");
    }

    create() {
        this.createBackground();
        this.createСharacter();
        this.createProgress();
        this.createButtons();
        this.onChooseAcc();
    }

    init(data) {
        this.look = data.score;
        this.bag = data.bag;
    }

    createBackground() {
        this.add.sprite(0, 0,'bg_light').setOrigin(0,0);
        this.dark_overlay = this.add.sprite(0, 0,'bg_dark').setOrigin(0,0).setScale(0);
    }

    createСharacter() {
        this.characterLexy = new Character(this, this.look);
        this.characterLexy.setPosition(300, 550);
        if(this.bag === 1) {
            this.add.sprite(252, 473, 'bag_1');
        } else {
            this.add.sprite(265, 428, 'bag_2');
        }
    }

    createProgress() {
        this.progress_2 = this.add.sprite(40, 30,'progress_2').setOrigin(0,0).setScale(0);
    }

    createButtons() {
        this.necklace = this.add.sprite(165, 740,'necklace').setScale(0).setInteractive();
        this.necklace1 = this.add.sprite(435, 740,'necklace1').setScale(0).setInteractive();
        this.on_necklace = this.add.sprite(316, 333, 'on_necklace').setScale(0);
        this.on_necklace1 = this.add.sprite(306, 267, 'on_necklace1').setScale(0);
    }

    onChooseAcc() {
        this.characterLexy.showOffer('Choose your accessory');       
        this.characterLexy.showCharacterThings(this.necklace, this.necklace1);
        this.characterLexy.showHitPointer();
        this.characterLexy.toogleButtons(this.necklace, this.necklace1, this.on_necklace, this.on_necklace1, this.progress_2);
         
        this.input.on('pointerup', () => {
            this.input.scene.time.addEvent({
                delay: 2000,
                callback: () => {
                    this.scene.start('Game_3', { 
                        score: this.look, 
                        bag: this.bag,
                        accessory: this.characterLexy.accessory
                    });
                }
            });
        });            
    }   
}