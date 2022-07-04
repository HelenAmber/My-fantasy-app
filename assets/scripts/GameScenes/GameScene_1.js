class GameScene_1 extends Phaser.Scene {
    constructor() {
        super("Game_1");
    }

    create() {
        this.createBackground();
        this.createСharacter();
        this.createProgress();
        this.createButtons();
        this.onChooseBag();
    }
    init(data) {
        this.look = data.score;
    }

    createBackground() {
        this.add.sprite(0, 0,'bg_light').setOrigin(0,0);
        this.dark_overlay = this.add.sprite(0, 0,'bg_dark').setOrigin(0,0).setScale(0);
    }

    createСharacter() {
        this.characterLexy = new Character(this, this.look);
        this.characterLexy.setPosition(300, 550);
    }

    createProgress() {
        this.progress_1 = this.add.sprite(40, 30,'progress_1').setOrigin(0,0).setScale(0);
    }

    createButtons() {
        this.bag1 = this.add.sprite(165, 740,'bag1').setScale(0).setInteractive();
        this.bag2 = this.add.sprite(435, 740,'bag2').setScale(0).setInteractive(); 
        this.bag_2 = this.add.sprite(265, 428, 'bag_2').setScale(0);
        this.bag_1 = this.add.sprite(252, 473, 'bag_1').setScale(0);
    }

    onChooseBag() {
        this.characterLexy.showOffer('Choose your bag'); 
        this.characterLexy.showCharacterThings(this.bag1, this.bag2);
        this.characterLexy.showHitPointer();
        this.characterLexy.toogleButtons(this.bag1, this.bag2, this.bag_1, this.bag_2, this.progress_1);
        
        this.input.on('pointerup', () => {
            this.input.scene.time.addEvent({
                delay: 2000,
                callback: () => {
                    console.log(this.characterLexy.look);
                    this.scene.start('Game_2', { score: this.look, bag: this.characterLexy.bag });
                }
            });
        });       
    }

}