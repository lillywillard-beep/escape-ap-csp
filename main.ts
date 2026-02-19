 namespace SpriteKind {
    export const Person = SpriteKind.create()
    export const Fruit = SpriteKind.create()
}

tiles.setCurrentTilemap(tilemap`level1`)

let fruit = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . b 5 5 b . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . b b b b b 5 5 5 5 5 5 5 b . .
    . b d 5 b 5 5 5 5 5 5 5 5 b . .
    . . b 5 5 b 5 d 1 f 5 d 4 f . .
    . . b d 5 5 b 1 f f 5 4 4 c . .
    b b d b 5 5 5 d f b 4 4 4 4 b .
    b d d c d 5 5 b 5 4 4 4 4 4 4 b
    c d d d c c b 5 5 5 5 5 5 5 b .
    c b d d d d d 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`, SpriteKind.Fruit)

fruit.setPosition(80, 60)
controller.moveSprite(fruit, 80, 80)

for (let i = 0; i < 5; i++) {
    let person = sprites.create(img`
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..ffe222222eef..........
        ..fe2ffffff2ef..........
        ..ffffeeeeffff......ccc.
        .ffefbf44fbfeff....cddc.
        .ffefbf44fbfeff...cddc..
        .fee4dddddd4eef.ccddc...
        fdfeeddddd4eeffecddc....
        fbffee4444ee4fddccc.....
        fbf4f222222f1edde.......
        fcf.f222222f44ee........
        .ff.f445544f............
        ....ffffffff............
        .....ff..ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
    `, SpriteKind.Person)
    person.setPosition(randint(0, screen.width), randint(0, screen.height))
    person.follow(fruit, 40)
}

sprites.onOverlap(SpriteKind.Person, SpriteKind.Person, function (sprite, otherSprite) {
    if (sprite.x < otherSprite.x) {
        sprite.x += -1
    } else {
        sprite.x += 1
    }

    if (sprite.y < otherSprite.y) {
        sprite.y += -1
    } else {
        sprite.y += 1
    }
})
