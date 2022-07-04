class BootScene extends Phaser.Scene {
    constructor() {
        super("Boot");
    }

    preload() {       
        this.load.image('bg_dark', 'assets/images/background/bg_dark.jpg');
        this.load.image('bg_light', 'assets/images/background/bg_light.jpg');
        this.load.image('bg_end', 'assets/images/background/bg_end.png');
        this.load.image('bg_black', 'assets/images/background/bg_black.png');

        this.load.image('Paul_joy', 'assets/images/end/Man_joy.png');
        this.load.image('Paul_sad', 'assets/images/end/Man_sad.png');
        this.load.image('Lexy_phrase', 'assets/images/start/Lexy_phrase.png');
        this.load.image('Paul_phrase', 'assets/images/end/Paul_phrase.png');        
        this.load.image('Lexy', 'assets/images/choose_dress/Lexy.png');
        this.load.image('Lexy_glad_1', 'assets/images/end/on_mk1_glad.png');
        this.load.image('Lexy_sad_1', 'assets/images/end/on_mk1_sad.png');
        this.load.image('Lexy_glad_2', 'assets/images/end/on_mk2_glad.png');
        this.load.image('Lexy_sad_2', 'assets/images/end/on_mk2_sad.png');

        this.load.image('progress', 'assets/images/choose_dress/progress.png');
        this.load.atlas('flares', 'assets/images/flares.png', 'assets/scripts/flares.json');       
        this.load.image('smile', 'assets/images/smile.png');
        this.load.image('rect', 'assets/images/Rectangle.png')
        this.load.image('offer', 'assets/images/Rectangle_offer.png');
        this.load.image('pointer', 'assets/images/pointer.png');

        this.load.image('dress1', 'assets/images/choose_dress/dress1.png');
        this.load.image('dress2', 'assets/images/choose_dress/dress2.png');
        this.load.image('on_d1', 'assets/images/choose_dress/on_d1.png');
        this.load.image('on_d2', 'assets/images/choose_dress/on_d2.png');
        this.load.image('on_d1_h', 'assets/images/choose_dress/on_d1_h.png');
        this.load.image('on_d2_h', 'assets/images/choose_dress/on_d2_h.png');

        this.load.image('bag1', 'assets/images/choose_bag/bag1.png');
        this.load.image('bag2', 'assets/images/choose_bag/bag2.png');
        this.load.image('bag_1', 'assets/images/choose_bag/bag_1.png');
        this.load.image('bag_2', 'assets/images/choose_bag/bag_2.png');
        this.load.image('progress_1', 'assets/images/choose_bag/progress_1.png');
        
        this.load.image('necklace', 'assets/images/choose_accessory/necklace.png');
        this.load.image('necklace1', 'assets/images/choose_accessory/necklace1.png');
        this.load.image('on_necklace', 'assets/images/choose_accessory/on_necklace.png');
        this.load.image('on_necklace1', 'assets/images/choose_accessory/on_necklace1.png');
        this.load.image('progress_2', 'assets/images/choose_accessory/progress_2.png');
                               
        this.load.image('makeup1', 'assets/images/choose_makeup/makeup1.png');
        this.load.image('makeup2', 'assets/images/choose_makeup/makeup2.png');
        this.load.image('on_makeup_1', 'assets/images/choose_makeup/on_makeup1.png');
        this.load.image('on_makeup_2', 'assets/images/choose_makeup/on_makeup2.png');
        this.load.image('progress_3', 'assets/images/choose_makeup/progress_3.png');
        
        this.load.image('button', 'assets/images/end/button.png');
        this.load.image('left_arrow', 'assets/images/swipe_left_arrow.png');
        this.load.image('right_arrow', 'assets/images/swipe_right_arrow.png');
    }
    create() {
       this.scene.start('Preload');
    }
}