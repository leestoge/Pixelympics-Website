const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 640,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        preload,
        create,
        update,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false
        },
    }
};

const game = new Phaser.Game(config);

//variable declarations
let player1, player2, blue_ball, red_ball, yellow_ball, green_ball, orange_ball, trackline, cursors;
let gameStarted = false;

function preload()
{
    this.load.image('blue_ball', 'assets/images/blue.png');
    this.load.image('red_ball', 'assets/images/red.png');
    this.load.image('yellow_ball', 'assets/images/yellow.png');
    this.load.image('green_ball', 'assets/images/green.png');
    this.load.image('orange_ball', 'assets/images/orange.png');
    this.load.image('line', 'assets/images/line_128_8.png');
}

function create() {
    player1 = this.physics.add.sprite(
        80, //x position
        120, //y position
        'red_ball' //key for the image of the ball
    );
    player2 = this.physics.add.sprite(
        80, //x position
        160, //y position
        'blue_ball' //key for the image of the ball
    );

    //AI balls
    green_ball = this.physics.add.sprite(
        80, //x position
        200, //y position
        'green_ball' //key for the image of the ball
    );
    yellow_ball = this.physics.add.sprite(
        80, //x position
        240, //y position
        'yellow_ball' //key for the image of the ball
    );
    orange_ball = this.physics.add.sprite(
        80, //x position
        280, //y position
        'orange_ball' //key for the image of the ball
    );

    trackline = this.physics.add.group({
        key: 'line',
        repeat: 9,
        immovable: true,
        setXY: {
            x: 80,
            y: 100,
            stepX: 70
        }
    });

    trackline = this.physics.add.group({
        key: 'line',
        repeat: 9,
        immovable: true,
        setXY: {
            x: 80,
            y: 140,
            stepX: 70
        }
    });

    trackline = this.physics.add.group({
        key: 'line',
        repeat: 9,
        immovable: true,
        setXY: {
            x: 80,
            y: 180,
            stepX: 70
        }
    });

    trackline = this.physics.add.group({
        key: 'line',
        repeat: 9,
        immovable: true,
        setXY: {
            x: 80,
            y: 220,
            stepX: 70
        }
    });

    trackline = this.physics.add.group({
        key: 'line',
        repeat: 9,
        immovable: true,
        setXY: {
            x: 80,
            y: 260,
            stepX: 70
        }
    });

    trackline = this.physics.add.group({
        key: 'line',
        repeat: 9,
        immovable: true,
        setXY: {
            x: 80,
            y: 300,
            stepX: 70
        }
    });

    //adding player movement with keyboard input
    cursors = this.input.keyboard.createCursorKeys();

    player.setCollideWorldBounds(true);
    ball.setCollideWorldBounds(true);
    ball.setBounce(1, 1);
    this.physics.world.checkCollision.down = false;

    //brick collision
    this.physics.add.collider(ball, violetBricks, hitBrick, null, this);
    this.physics.add.collider(ball, yellowBricks, hitBrick, null, this);
    this.physics.add.collider(ball, redBricks, hitBrick, null, this);

    //player collision
    player.setImmovable(true);
    //collider between the ball and the player
    this.physics.add.collider(ball, player, hitPlayer, null, this);
}

function update()
{
    // check to see if the ball left the game scene
    if (isGameOver(this.physics.world)) {
        // game over man... game over!
    } else if (isWon()) {
        // you have won!
    } else {
        //Put this in so that the player stays still if no key is being pressed
        player.body.setVelocityX(0);

        if (cursors.left.isDown) {
            player.body.setVelocityX(-350);
        } else if (cursors.right.isDown) {
            player.body.setVelocityX(350);
        }

        if (!gameStarted) {
            ball.setX(player.x);

            if (cursors.space.isDown) {
                gameStarted = true;
                ball.setVelocityY(-200);
                openingText.setVisible(false);
            }
        }
    }
}

function isGameOver(world) {
    return ball.body.y > world.bounds.height;
}

function isWon() {
    return violetBricks.countActive() + yellowBricks.countActive() + redBricks.countActive() === 0;
}

function hitBrick(ball, brick) {
    brick.disableBody(true, true);

    if (ball.body.velocity.x === 0) {
        randNum = Math.random();

        if (randNum >= 0.5) {
            ball.body.setVelocityX(150);
        } else {
            ball.body.setVelocityX(-150);
        }
    }
}

function hitPlayer(ball, player) {
    //increase the velocity of the ball after it bounces
    ball.setVelocityY(ball.body.velocity.y - 5);

    let newXVelocity = Math.abs(ball.body.velocity.x) + 5;
    // if the ball is to the left of the player, ensure the X-velocity is negative
    if (ball.x < player.x) {
        ball.setVelocityX(-newXVelocity);
    } else {
        ball.setVelocityX(newXVelocity);
    }
}