class Start extends Phaser.Scene {

    constructor() {

        super("startScene");

    }

    preload() {

        this.starting = false;

    }

    create() {

        // create scrolling background
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "scrollBackground")
        .setScale(4).setOrigin(0).setScrollFactor(0, 1).setAlpha(0.5);

        // create left mouse input
        this.pointer = this.input.activePointer;

    }

    update() {

        // scroll background
        this.background.tilePositionX = this.background.tilePositionX + 0.025;

        if (this.pointer.isDown && !this.starting) {

            this.starting = true;
            this.cameras.main.fadeOut(750);
            setTimeout( () => this.scene.start("dungeonScene"), 1000 );

        }

    }

}