class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    create() {
        this.createBackground();
        this.createСharacter();
        this.createProgress();
        this.createButtons();
        this.onChooseDress();
    }

    createBackground() {
        this.add.sprite(0, 0,'bg_light').setOrigin(0,0);
        this.dark_overlay = this.add.sprite(0, 0,'bg_dark').setOrigin(0,0).setScale(0);
    }

    createСharacter() {
        this.characterLexy = new Character(this, "Lexy");
        this.characterLexy.setPosition(300, 550);
    }

    createProgress() {
        this.progress = this.add.sprite(40, 30,'progress').setOrigin(0,0).setScale(0);
    }

    createButtons() {
        this.dress1 = this.add.sprite(165, 740,'dress1').setScale(0).setInteractive();
        this.dress2 = this.add.sprite(435, 740,'dress2').setScale(0).setInteractive();         
        this.on_dress1 = this.add.sprite(300, 550,'on_d1_h').setScale(0);
        this.on_dress2 = this.add.sprite(300, 550,'on_d2_h').setScale(0);                       
    }
            
    onChooseDress() {
        this.characterLexy.showOffer('Choose your dress');      
        this.characterLexy.showCharacterThings(this.dress1, this.dress2);
        this.characterLexy.showHitPointer();
        this.characterLexy.toogleButtons(this.dress1, this.dress2, this.on_dress1, this.on_dress2, this.progress);
               
        this.input.on('pointerup', () => {
            this.input.scene.time.addEvent({
                delay: 2000,
                callback: () => {
                    this.scene.start('Game_1', { 
                        score: this.characterLexy.look                       
                    });
                }
            });            
        });
    }    
}