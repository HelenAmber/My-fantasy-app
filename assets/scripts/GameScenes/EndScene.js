class EndScene extends Phaser.Scene {
    constructor() {
        super("End");
    }

    create() {
        this.createBackground();
        this.createСharacters();
        this.showCharacters();
    }

    init(data) {
        this.look = data.score;
        this.bag = data.bag;
        this.accessory = data.accessory;
        this.makeup = data.makeup;
    }

    createBackground() {
        this.bg = this.add.sprite(0, 0, 'bg_end').setOrigin(0,0).setInteractive();
        this.bg_black = this.add.sprite(0, 0, 'bg_black').setOrigin(0,0).setInteractive().setScale(0);
    }

    createСharacters() {
        this.look === 'on_d1' ? this.characterPaul = new Character(this, 'Paul_joy') : this.characterPaul = new Character(this, 'Paul_sad');
        this.characterLexy = new Character(this, this.look);
        
        this.characterPaul.setPosition(800, 450);
        this.characterLexy.setPosition(200, 500);
        
        this.bag === 1 ? this.bag = this.add.sprite(150, 428, 'bag_1') : this.bag = this.add.sprite(155, 390, 'bag_2');
        this.accessory === 1 ? this.accessory = this.add.sprite(210, 280, 'on_necklace') : this.accessory = this.add.sprite(208, 217, 'on_necklace1');
        this.makeup === 1 ? this.mk = this.add.sprite(200, 500, 'on_makeup_1') : this.mk = this.add.sprite(200, 500, 'on_makeup_2');

        this.glad_1 = this.add.sprite(200, 500, 'Lexy_glad_1').setScale(0);
        this.glad_2 = this.add.sprite(200, 500, 'Lexy_glad_2').setScale(0);
        this.sad_1 = this.add.sprite(200, 500, 'Lexy_sad_1').setScale(0);
        this.sad_2 = this.add.sprite(200, 500, 'Lexy_sad_2').setScale(0);
    }

    createButton() {
        this.button = this.add.sprite(config.width/2, config.height/2, 'button').setInteractive().setScale(0);
        this.timer = this.time.addEvent({
            delay: 1000,
            callback: () => {
                this.hideCharacters();
                this.bg_black.setScale(1);
                this.button.setScale(1);
                this.text = this.add.text(260, 430, 'Retry!', {
                    font: '30px Nunito Sans',
                    'font-weight': '700',
                    'line-height': '33px',
                    color: '#FFFFFF'
                });
            }
        });
        this.onButton(this.button);
        this.onButton(this.bg_black, this.button)
    }

    onButton(name, button){
        name.on('pointerdown', () => {
            if(button){
                button.setScale(0.9);
            }
            this.timer = this.time.addEvent({
                delay: 1000,
                callback: () => {
                    this.scene.start('Start');
                }
            });
        });
    }

    showCharacters() {
        this.characterPaul.move({
            x: 380, 
            y: 450, 
            delay: 1000,
            callback: () => {
                this.look === 'on_d1' ?
                this.characterPaul.createPhrase({name:'Paul_phrase', 
                                                 text:'You are beautiful!', 
                                                 x: 250, 
                                                 y: 300}) :
                this.characterPaul.createPhrase({name:'Paul_phrase', 
                                                text:'What a weird appearance!', 
                                                x: 280, 
                                                y: 300});
                
                this.time.addEvent({
                    delay: 1500,
                    callback:() => {
                        if(this.look === 'on_d1' && this.makeup === 1) {
                            this.glad_1.setScale(1);
                            this.characterLexy.сreateCloud(2000);
                            this.onEndCard();
                        } else if (this.look === 'on_d1' && this.makeup === 2){
                            this.glad_2.setScale(1);
                            this.characterLexy.сreateCloud(2000);
                            this.onEndCard();
                        } else if (this.look === 'on_d2' && this.makeup === 1) {
                            this.sad_1.setScale(1);                           
                            this.createButton();
                        } else if (this.look === 'on_d2' && this.makeup === 2){
                            this.sad_2.setScale(1);                                                      
                            this.createButton();                       
                        } 
                    }    
                });                
            }
        });
    }

    hideCharacters(){
        this.bg.setScale(0);
        this.characterPaul.setScale(0);
        this.characterLexy.setScale(0);
        this.bag.setScale(0);
        this.accessory.setScale(0);
        this.mk.setScale(0);
        this.sad_1.setScale(0);
        this.sad_2.setScale(0);
        this.glad_1.setScale(0);
        this.glad_2.setScale(0);
    }

    onEndCard() {
        this.leftArrow = this.add.sprite(100, 500, 'left_arrow').setInteractive().setScale(0);
        this.rightArrow = this.add.sprite(500, 500,'right_arrow').setInteractive().setScale(0);

        this.timer = this.time.addEvent({
            delay: 2000,
            callback: () => {
                this.hideCharacters();
                this.bg.setScale(1);
                this.end_text = this.add.text(150, 350, 'Swipe to play!', {
                    font: '50px Nunito Sans',
                    fontWeight: '700',
                    color: '#FFFFFF'
                });
                this.leftArrow.setScale(1);
                this.rightArrow.setScale(1);
            }
        }); 
        this.onButton(this.leftArrow);
        this.onButton(this.rightArrow);
        this.onButton(this.bg, this.rightArrow);
    }            
}