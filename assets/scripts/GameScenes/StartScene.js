class StartScene extends Phaser.Scene {
    constructor() {
        super("Start");
    }

    create() {
        this.createBackground();        
        this.createСharacter();
        this.onAnimateCharacter();
        this.onCharacterSays();
        this.setEvents();
    }
    
    createBackground() {
        this.add.sprite(0,0,'bg_dark').setOrigin(0,0);
    }

    createСharacter() {
        this.characterLexy = this.add.sprite(230, 375, 'start', 'Lexy1');
        this.characterSay = new Character(this, 'Lexy').setScale(0);    
    }

    onAnimateCharacter(){
        this.frames = this.anims.generateFrameNames('start', {
            prefix: 'Lexy',
            start: 1,
            end: 5
        });

        this.anims.create({
            key: 'emotions',
            frames: this.frames, 
            frameRate: 1,
            repeat: 0
        });
        this.characterLexy.play('emotions');
    }
   
    onCharacterSays(){
        this.characterSay.createPhrase({
            name:'Lexy_phrase', 
            text:'I received an invitation to the party!', 
            x: 320, 
            y: 600
        });
    }
     
    setEvents() {
        this.timer = this.time.addEvent({
            delay: 4000,
            callback: () => {
               this.scene.start('Game');
            }
        });
    }
}