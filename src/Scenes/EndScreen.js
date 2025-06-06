class EndScreen extends Phaser.Scene {

    constructor() {

        super("endScene");

    }

    init(data) {

        // grab data passed through game scene
        this.escape = data.escape;

    }

    create() {

        my.text.finalText = this.add.text(
            config.width / 2,
            config.height / 2,
            "~~ YOU HAVE" + (this.escape ? " ": " NOT ") + "ESCAPED THE DUNGEON ~~",
            { fontFamily: "Pixellari" }
        ).setOrigin(0.5, 0.5).setScale(1.75).setScrollFactor(0).setDepth(1);
        my.text.finalText.y = 50;

        my.text.credits = this.add.text(
            config.width / 2,
            config.height / 2,
            "<< CREDITS >>\n\n==============================================\n\n-- LIBRARIES/PROGRAMS --\n\nPHASER v3.87\nEASYSTAR v0.4.4\nPIXILART\n\n-- VISUAL ASSETS --\n\nKENNEY'S TINY DUNGEON\nKENNEY'S PARTICLE PACK\nPIXELLARI FONT\n\n-- SOUND EFFECTS --",
            { fontFamily: "Pixellari" }
        ).setAlign("center").setOrigin(0.5, 0.5).setScale(1).setScrollFactor(0).setDepth(1);

        my.text.restart = this.add.text(
            config.width / 2,
            config.height / 2,
            "~~ PRESS [R] TO RESTART ~~",
            { fontFamily: "Pixellari" }
        ).setOrigin(0.5, 0.5).setScale(1.75).setScrollFactor(0).setDepth(1);
        my.text.restart.y = 670;

    }

}