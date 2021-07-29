controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    ArrowSprite.setImage(assets.image`Up Arrow`)
    ArrowSprite.y += Up
    direction = 4
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    ArrowSprite.setImage(assets.image`Up Arrow`)
    ArrowSprite.y += Up
    direction = 4
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    ArrowSprite.setImage(assets.image`Right Arrow`)
    ArrowSprite.x += Right
    direction = 2
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    ArrowSprite.setImage(assets.image`Left Arrow`)
    ArrowSprite.x += Left
    direction = 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    ArrowSprite.setImage(assets.image`Right Arrow`)
    ArrowSprite.x += Right
    direction = 2
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    Crest.startEffect(effects.spray)
    music.beamUp.play()
    pause(200)
    Crest.destroy()
    Up = Up * 1.5
    Left = Left * 1.5
    Down = Down * 1.5
    Right = Right * 1.5
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    ArrowSprite.setImage(assets.image`Down Arrow`)
    ArrowSprite.y += Down
    direction = 3
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    ArrowSprite.setImage(assets.image`Down Arrow`)
    ArrowSprite.y += Down
    direction = 3
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.startEffect(effects.spray)
    otherSprite.destroy()
    info.changeScoreBy(150)
    if (info.score() == 1500) {
        tiles.setTilemap(tilemap`level5`)
        ArrowSprite.setPosition(10, 100)
        negativeEnemySpeed = -55
        positiveEnemySpeed = 55
        for (let index = 0; index < 15; index++) {
            Pellet = sprites.create(assets.image`Dot`, SpriteKind.Food)
            tiles.placeOnRandomTile(Pellet, assets.tile`myTile3`)
        }
        Crest = sprites.create(assets.image`pickup1`, SpriteKind.Projectile)
        tiles.placeOnRandomTile(Crest, assets.tile`myTile3`)
        XSprite = sprites.create(assets.image`Chemical X`, SpriteKind.Enemy)
        XSprite.setStayInScreen(true)
        XSprite.setBounceOnWall(false)
        tiles.placeOnRandomTile(XSprite, assets.tile`myTile3`)
    }
    if (info.score() == 3750) {
        info.changeScoreBy(endScoreMinus)
        game.over(true, effects.starField)
    }
})
// ArrowSprite.image
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    XSprite.setVelocity(0, 0)
    if (gameover == 0) {
        gameover = 1
        animation.runImageAnimation(
        XSprite,
        assets.animation`Chem X Anim`,
        100,
        true
        )
    }
    if (direction == 1) {
        direction = 0
        console.log("hello world")
        animation.runImageAnimation(
        ArrowSprite,
        assets.animation`Left Arrow Crumble`,
        200,
        false
        )
        pause(1000)
        scene.cameraShake(2, 300)
        ArrowSprite.destroy()
        pause(100)
        game.over(false)
    }
    if (direction == 2) {
        direction = 0
        console.log("hello world")
        animation.runImageAnimation(
        ArrowSprite,
        assets.animation`Right Arrow Crumble`,
        200,
        false
        )
        pause(1000)
        scene.cameraShake(2, 300)
        ArrowSprite.destroy()
        pause(100)
        game.over(false)
    }
    if (direction == 3) {
        direction = 0
        console.log("hello world")
        animation.runImageAnimation(
        ArrowSprite,
        assets.animation`Down Arrow Crumble`,
        200,
        false
        )
        pause(1000)
        scene.cameraShake(2, 300)
        ArrowSprite.destroy()
        pause(100)
        game.over(false)
    }
    if (direction == 4) {
        direction = 0
        console.log("hello world")
        animation.runImageAnimation(
        ArrowSprite,
        assets.animation`Up Arrow Crumble`,
        200,
        false
        )
        pause(1000)
        scene.cameraShake(2, 300)
        ArrowSprite.destroy()
        pause(100)
        game.over(false)
    }
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    ArrowSprite.setImage(assets.image`Left Arrow`)
    ArrowSprite.x += Left
    direction = 1
})
let EnemyDirection = 0
let direction = 0
let gameover = 0
let Pellet: Sprite = null
let Crest: Sprite = null
let XSprite: Sprite = null
let ArrowSprite: Sprite = null
let Right = 0
let Down = 0
let Left = 0
let Up = 0
let endScoreMinus = 0
let positiveEnemySpeed = 0
let negativeEnemySpeed = 0
tiles.setTilemap(tilemap`level1`)
info.setScore(0)
negativeEnemySpeed = -40
positiveEnemySpeed = 40
endScoreMinus = 0
Up = -1
Left = -1
Down = 1
Right = 1
ArrowSprite = sprites.create(assets.image`Right Arrow`, SpriteKind.Player)
ArrowSprite.setPosition(10, 55)
scene.cameraFollowSprite(ArrowSprite)
ArrowSprite.setStayInScreen(false)
XSprite = sprites.create(assets.image`Chemical X`, SpriteKind.Enemy)
XSprite.setStayInScreen(true)
XSprite.setBounceOnWall(false)
Crest = sprites.create(assets.image`pickup1`, SpriteKind.Projectile)
tiles.placeOnRandomTile(Crest, assets.tile`myTile3`)
for (let index = 0; index < 10; index++) {
    Pellet = sprites.create(assets.image`Dot`, SpriteKind.Food)
    tiles.placeOnRandomTile(Pellet, assets.tile`myTile3`)
}
gameover = 0
direction = 0
console.log(direction)
game.onUpdateInterval(1000, function () {
    EnemyDirection = randint(1, 4)
    if (1 == EnemyDirection) {
        XSprite.setVelocity(positiveEnemySpeed, positiveEnemySpeed)
    }
    if (2 == EnemyDirection) {
        XSprite.setVelocity(positiveEnemySpeed, positiveEnemySpeed)
    }
    if (3 == EnemyDirection) {
        XSprite.setVelocity(negativeEnemySpeed, positiveEnemySpeed)
    }
    if (4 == EnemyDirection) {
        XSprite.setVelocity(negativeEnemySpeed, negativeEnemySpeed)
    }
})
game.onUpdateInterval(800, function () {
    endScoreMinus += -25
})
