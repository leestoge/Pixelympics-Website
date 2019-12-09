class SceneOver extends Phaser.Scene 
{
    constructor() 
	{
        super('ShootingOver');
    }
	
    preload() 
	{
		this.load.audio("bird", "assets/audio/bird.wav");
		this.load.image("gameover", "assets/images/gameover.png");
	}
	
    create() 
	{
        console.log("Game over!");
        this.background = this.add.image(0, 0, 'gameover');
        this.background.setOrigin(0, 0);
        this.background.displayHeight = game.config.height;
        this.background.displayWidth = game.config.width;
        this.aGrid = new AlignGrid
		({
            scene: this,
            rows: 11,
            cols: 11
        });
		
		this.birdSound = this.sound.add("bird")
		this.birdSound.play();

        var gameOverText = this.add.text(0, 0, "Game Over", 
		{
            color: '#ff0000',
            fontSize: game.config.width / 10,
			fontFamily: '"Roboto Condensed"'
        });
        gameOverText.setOrigin(0.5, 0.5);
        this.aGrid.placeAtIndex(27, gameOverText);


        var playAgainText = this.add.text(0, 0, "Play Again?", 
		{
            color: '#ffffff',
            fontSize: game.config.width / 10,
			fontFamily: '"Roboto Condensed"'
        });
        playAgainText.setOrigin(0.5, 0.5);
        this.aGrid.placeAtIndex(82, playAgainText);
        playAgainText.setInteractive();	
        playAgainText.on('pointerdown', this.playAgain, this);
    }
	
    playAgain() 
	{
        this.scene.start("Shooting");
    }
	
    update() 
	{
		
	}
}