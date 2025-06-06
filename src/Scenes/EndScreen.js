class EndScreen extends Phaser.Scene {

    constructor() {

        super("endScene");

    }

    init(data) {

        this.escape = data.escape;

    }

    create() {

        console.log(this.escape);

    }

}