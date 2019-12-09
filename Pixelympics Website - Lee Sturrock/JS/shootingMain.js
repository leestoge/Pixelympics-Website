class SceneMain extends Phaser.Scene 
{
    constructor() 
	{
        super('Shooting');
    }
	
    preload() 
	{
        //load our images or sounds 
        this.preloadIMG("claypigeon");
        this.preloadIMG("bullet");
        this.preloadIMG("birdd");
        this.preloadIMG("sky");
        this.load.spritesheet('exp', 'assets/images/exp.png', 
		{
            frameWidth: 256,
            frameHeight: 256
        });
        this.load.audio("boomSound", "assets/audio/boom.wav");
        this.load.audio("pop", "assets/audio/pop.wav");
        this.load.audio("shoot", "assets/audio/shoot.wav");
		this.load.audio("music", "assets/audio/EdgieAlias - Dritt Per Automatikk.mp3")
    }
	
    preloadIMG(key) 
	{
        var path = "assets/images/" + key + ".png";
        this.load.image(key, path);
    }
	
    create() 
	{
        this.score = 0;
        this.background = this.add.image(0, 0, 'sky');
        this.background.setOrigin(0, 0);
        this.background.displayHeight = game.config.height;
        this.background.displayWidth = game.config.width;
		
		
        //define objects
        this.charGroup = this.physics.add.group();
        this.bulletGroup = this.physics.add.group();


        console.log("Game ready!");
        this.aGrid = new AlignGrid
		({
            scene: this,
            rows: 11,
            cols: 11
        });
        this.addChar();
        this.time.addEvent
		({
            delay: 1500,
            callback: this.addChar,
            callbackScope: this,
            loop: true
        });
        this.input.on('pointerdown', this.addBullet, this);
        this.physics.add.collider(this.charGroup, this.bulletGroup, this.hitChar, null, this);
        this.scoreText = this.add.text(0, 0, "Score:0", 
		{
            color: '#ffffff',
            fontSize: game.config.width / 15,
			fontFamily: '"Roboto Condensed"'
        });
        this.scoreText.setOrigin(0.5, 0.5);
        this.aGrid.placeAtIndex(16, this.scoreText);


        var frameNames = this.anims.generateFrameNumbers('exp');
        this.anims.create
		({
            key: 'boom',
            frames: frameNames,
            frameRate: 32,
            repeat: 0
        });


        this.pop = this.sound.add("pop");
        this.shoot = this.sound.add("shoot");
        this.boomSound = this.sound.add("boomSound", {volume: 0.85});
		
		//bg music
		this.soundtrack = this.sound.add("music", {volume: 0.2});
		this.soundtrack.loop = true; // looping
		this.soundtrack.play();		
    }
	
    hitChar(char, bullet) 
	{
        if (char.isBird == true) 
		{
			this.soundtrack.stop();
            console.log("HIT BIRD!");			//game over
            this.scene.start("ShootingOver");
        } 
		else 
		{
            //get a point
            this.updateScore();
            this.boomSound.play();
            this.exp = this.add.sprite(char.x, char.y, "exp");
            Align.scaleToGameW(this.exp, .25);
            this.exp.play("boom");
            this.exp.on('animationcomplete', function() 
			{
                this.destroy();
                console.log("destroyed claypigeon");
            });
        }
        char.destroy();
        bullet.destroy();
    }
	
    updateScore() 
	{
        this.score++;
        this.scoreText.setText("Score: " + this.score);
    }
	
    addChar() 
	{
        var rand = Phaser.Math.Between(0, 100);
        if (rand > 50) 
		{
            var char = this.physics.add.sprite(0, 0, "claypigeon");
            char.isBird = false;
        } 
		else 
		{
            var char = this.physics.add.sprite(0, 0, "birdd");
            char.isBird = true;
        }
        this.aGrid.placeAtIndex(32, char);
        Align.scaleToGameW(char, .1);
        this.charGroup.add(char);
        char.setVelocityX(-100);
    }
	
    addBullet(pointer) 
	{
        this.shoot.play();
        var bullet = this.physics.add.sprite(pointer.x, game.config.height * .9, "bullet");
        Align.scaleToGameW(bullet, .025);
        this.bulletGroup.add(bullet);
        bullet.setVelocityY(-500);
    }
	
    update() 
	{
        this.charGroup.children.iterate(function(child) 
		{
            if (child) 
			{
                if (child.x < 0) 
				{
                    child.x = 10;
                    child.setVelocityX(100);
                    child.y += child.displayHeight;
                }
                if (child.x > game.config.width) 
				{
                    child.x -= 10;
                    child.setVelocityX(-100);
                    child.y += child.displayHeight;
                }
                if (child.y > game.config.height * .9) 
				{
                    if (child.isBird == true) 
					{
                        this.updateScore();
                        this.pop.play();
                    } 
					else 
					{
                        // game over
                        this.scene.start("ShootingOver");
                    }
                    child.destroy();
                }
            }
        }.bind(this));
        //constant running loop
    }
}