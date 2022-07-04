class Character extends Phaser.GameObjects.Sprite {
    constructor(scene, name){
        super(scene, 0, 30, name);
        this.scene = scene;
        this.look = '';
        this.scene.add.existing(this);
        this.setInteractive();
    }    

    move(params) {
        this.scene.tweens.add({
            targets: this,
            x: params.x,
            y: params.y,
            delay: params.delay,
            ease: 'Linear',
            duration: 500,
            onComplete: () => {
                if(params.callback){
                    params.callback();
                }
            }
        });
    }

    hideCharacter(params) {       
        this.move({
            x: params.x,
            y: params.y,
            delay: params.delay,
            callback: () => {
                if(params.callback){
                    params.callback();
                }
            }
        });
    }

    showCharacterThings(thing1, thing2) {
        this.scene.rect1 = this.scene.add.sprite(165, 740,'rect').setScale(0).setInteractive();
        this.scene.rect2 = this.scene.add.sprite(435, 740,'rect').setScale(0).setInteractive(); 

        thing1.scene.tweens.add({
            targets: thing1,
            scaleX: 1,
            scaleY: 1,
            ease: 'Linear',
            duration: 300,
            delay: 500,
            onComplete: () => {
                thing2.scene.tweens.add({
                    targets: thing2,
                    scaleX: 1,
                    scaleY: 1,
                    ease: 'Linear',
                    duration: 300
                });
            }
        });
    }
        
    toogleButtons(thing1, thing2, texture1, texture2, progress) {
        this.rect1 = this.scene.add.sprite(165, 740,'rect').setScale(0).setInteractive();
        this.rect2 = this.scene.add.sprite(435, 740,'rect').setScale(0).setInteractive();
        let smile = this.scene.add.sprite(300, 552,'smile').setScale(0);
        this.showCharacterThings(thing1, thing2);

        thing1.on('pointerdown', () => {
            this.hideOffer(progress);  
            this.rect2.setScale(0);            
            thing1.setScale(0.9);
            this.rect1.setScale(0.9);
            this.сreateCloud(1200);
            this.look = 'on_d1_h'.slice(0, 'on_d1_h'.length - 2);           
            this.bag = 1;
            this.accessory = 1;
            this.makeup = 1; 
            thing1.scene.time.addEvent({
                delay: 1000,
                callback: () => {
                    thing1.texture.key === 'makeup1' ? smile.setScale(0) : smile.setScale(1);
                    texture1.texture.key === 'on_d1_h' ? this.setTexture(texture1.texture.key) : texture1.setScale(1);
                    thing1.setScale(1);
                    this.rect1.setScale(1);
                }
            });
        })
        .on('pointerup', () => {
            this.rect1.setScale(0);
        });
        

        thing2.on('pointerdown', () => {
            this.hideOffer(progress);            
            this.rect1.setScale(0);
            thing2.setScale(0.9);
            this.rect2.setScale(0.9);
            this.сreateCloud(1200);
            this.look = 'on_d2_h'.slice(0, 'on_d2_h'.length - 2);         
            this.bag = 2; 
            this.accessory = 2;
            this.makeup = 2;
            thing2.scene.time.addEvent({
                delay: 1000,
                callback: () => {
                    thing2.texture.key === 'makeup2' ? smile.setScale(0) : smile.setScale(1);
                    texture2.texture.key === 'on_d2_h' ? this.setTexture(texture2.texture.key) : texture2.setScale(1);
                    thing2.setScale(1);
                    this.rect2.setScale(1);
                }
            });
        })      
        .on('pointerup', () => {
            this.rect2.setScale(0);
        });
    }
        
    сreateCloud (delay) {
        this.particles = this.scene.add.particles('flares');
            
        this.particles.createEmitter({
            frame: 'white',
            x: 300, 
            y: 470, 
            speed: 400,
            tint: [ 0xffff00, 0xff0000, 0x00ff00, 0x0000ff ],
            lifespan: 500,
            frequency: 10,
            blendMode: 'ADD'
            });

        this.particles.scene.time.addEvent({
            delay: delay,
            callback: () => {
                this.particles.setScale(0);
            }
        });
    }

    showOffer(text) { 
        this.scene.dark_overlay.setScale(1);      
        this.offer = this.scene.add.sprite(300, -50, 'offer');
        this.text = this.scene.add.text(200, 35, text, {
            font: '24px Nunito Sans',
            'font-weight': '700',
            'line-height': '33px',
            fill: '#ffffff'
            });
        this.offer.scene.tweens.add({
            targets: this.offer,
            x: 300,
            y: 50,
            ease: 'Linear',
            duration: 100,
        });
    }

    showHitPointer(){  
        this.pointer = this.scene.add.sprite(700, 900,'pointer').setInteractive(); 

        this.pointer.scene.tweens.add({
            targets: this.pointer,
            x: 470, 
            y: 800,
            ease: 'Linear', 
            delay: 2000,
            onComplete: () => {
                this.pointer.scene.tweens.add({
                    targets: this.pointer,
                    x: 200, 
                    y: 800,
                    ease: 'Linear', 
                    delay: 1000,
                    onComplete: () => {
                        this.scene.time.addEvent({
                            delay: 1500,
                            callback:() => {
                                this.pointer.setScale(0);
                                this.showHitPointer();
                            }    
                        })
                    }
                });                
            }
        });        
    }

    hideOffer(progress) {
        this.offer.setScale(0);
        this.pointer.setScale(0);
        this.text.setScale(0);
        this.scene.dark_overlay.setScale(0);
        progress.setScale(1);      
    } 
    
    createPhrase(params) {                
        this.phrase = this.scene.add.sprite(400, 520, params.name).setScale(0);
        this.createText(params.text, params.y);
        
        this.phrase.scene.tweens.add({
            targets: this.phrase,
            scaleX: 1,
            scaleY: 1,
            x: params.x,
            y: params.y,
            ease: 'Linear',
            duration: 200,
        });
              
        this.scene.time.addEvent({
            delay: 1100,
            callback: () => {
                this.text.setScale(0);                
                this.phrase.scene.tweens.add({
                    targets: this.phrase,
                    scaleX: 0,
                    scaleY: 0,
                    x: 900,
                    y: 520,
                    ease: 'Linear',
                    duration: 200,
                });                 
            }
        });

        if(params.name === 'Lexy_phrase') {
            this.scene.time.addEvent({
                delay: 1500,
                callback:() => {
                    this.createText('I need to prepare my appearance', params.y);                
                    this.phrase.scene.tweens.add({
                        targets: this.phrase,
                        scaleX: 1,
                        scaleY: 1,
                        x: params.x,
                        y: params.y,
                        ease: 'Linear',
                        duration: 200,
                    });                 
                } 
            });
        } else {
            return;
        }                    
    }

    createText(text, y){
        this.text = this.scene.add.text(90, y, text, {
            font: '30px Nunito Sans',
            'font-weight': '700',
            'line-height': '33px',
            color: 'black'
            });
        this.text.setScale(0);
        this.scene.time.addEvent({
            delay: 200,
            callback: () => {
                this.text.setScale(1);
            }
        });
    }

}