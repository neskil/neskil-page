var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('brush', 'assets/sprites/brush1.png');
}

function create ()
{
    var rt = this.add.renderTexture(0, 0, 800, 600);

    var brush = this.textures.getFrame('brush');

    this.input.on('pointermove', function (pointer) {

        if (pointer.isDown)
        {
            rt.draw(brush.texture, brush, pointer.x - 32, pointer.y - 32);
        }

    }, this);
}
