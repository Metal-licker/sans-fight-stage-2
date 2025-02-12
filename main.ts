namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Flower = SpriteKind.create()
    export const Fireball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hops_and_Paw.vy == 0) {
        Hops_and_Paw.vy = -200
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hops_and_Paw.vy == 0) {
        Hops_and_Paw.vy = -170
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    game.over(false, effects.slash)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    current_level += 1
    startLevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flower, function (sprite, otherSprite) {
    otherSprite.destroy()
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        . . . . f f f . . f f f . . . . 
        . . . f 1 1 1 f f 1 1 1 f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f f f 1 1 f f f . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . f f f 1 1 f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 1 1 f f 1 1 1 f . . . 
        . . . . f f f . . f f f . . . . 
        `,img`
        . . . . f f f . . f f f . . . . 
        . . . f 1 1 1 f f 1 1 1 f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f f f 1 1 f f f . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . f f f 1 1 f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 1 1 f f 1 1 1 f . . . 
        . . . . f f f . . f f f . . . . 
        `,img`
        . . . . f f f . . f f f . . . . 
        . . . f 1 1 1 f f 1 1 1 f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f f f 1 1 f f f . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . f f f 1 1 f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 1 1 f f 1 1 1 f . . . 
        . . . . f f f . . f f f . . . . 
        `,img`
        . . . . f f f . . f f f . . . . 
        . . . f 1 1 1 f f 1 1 1 f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f f f 1 1 f f f . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . f f f 1 1 f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 1 1 f f 1 1 1 f . . . 
        . . . . f f f . . f f f . . . . 
        `,img`
        . . . . f f f . . f f f . . . . 
        . . . f 1 1 1 f f 1 1 1 f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f f f 1 1 f f f . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . f f f 1 1 f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 1 1 f f 1 1 1 f . . . 
        . . . . f f f . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . f f f . 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 f f f f f f f f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        f 1 1 1 f . . . . . . f 1 1 1 f 
        . f f f . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    bee.setPosition(Hops_and_Paw.x + 80, Hops_and_Paw.y - 80)
    bee.follow(Hops_and_Paw, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fireball, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
function startLevel () {
    if (current_level == 0) {
        tiles.setTilemap(tilemap`level`)
    } else if (current_level == 1) {
        tiles.setTilemap(tilemap`level_0`)
    } else if (current_level == 2) {
        tiles.setTilemap(tilemap`level_1`)
    } else {
        game.over(true)
    }
    tiles.placeOnRandomTile(Hops_and_Paw, assets.tile`tile6`)
    for (let value of tiles.getTilesByType(assets.tile`tile6`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    scene.cameraFollowSprite(Hops_and_Paw)
    info.setLife(5)
    for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
        value2.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.Coin)) {
        value3.destroy()
    }
    for (let value4 of sprites.allOfKind(SpriteKind.Flower)) {
        value4.destroy()
    }
    for (let value5 of tiles.getTilesByType(assets.tile`tile4`)) {
        flower = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 4 4 4 5 5 5 f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . . f 5 5 4 4 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        flower,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 4 4 4 4 4 5 5 5 f . . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . . f 5 5 4 4 4 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . f 5 4 4 4 4 5 5 f . . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 4 5 5 5 f . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 4 4 5 5 f . . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f 5 5 4 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 4 4 5 5 f . . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f 5 5 4 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(flower, value5)
        tiles.setTileAt(value5, assets.tile`tile0`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`tile5`)) {
        flower = sprites.create(img`
            . . . . f f f . . f f f . . . . 
            . . . f 9 9 9 f f 9 9 9 f . . . 
            . . . f 9 9 9 9 9 9 9 9 f . . . 
            . . . f 9 9 9 9 9 9 9 9 f . . . 
            . . . . f f f 9 9 f f f . . . . 
            . . . . . . f 9 9 f . . . . . . 
            . . . . . . f 9 9 f . . . . . . 
            . . . . . . f 9 9 f . . . . . . 
            . . . . . . f 9 9 f . . . . . . 
            . . . . . . f 9 9 f . . . . . . 
            . . . . . . f 9 9 f . . . . . . 
            . . . . f f f 9 9 f f f . . . . 
            . . . f 9 9 9 9 9 9 9 9 f . . . 
            . . . f 9 9 9 9 9 9 9 9 f . . . 
            . . . f 9 9 9 f f 9 9 9 f . . . 
            . . . . f f f . . f f f . . . . 
            `, SpriteKind.Flower)
        tiles.placeOnTile(flower, value6)
        tiles.setTileAt(value6, assets.tile`tile0`)
    }
    for (let value7 of tiles.getTilesByType(assets.tile`tile11`)) {
        fireball = sprites.create(img`
            . . . . f f f . . f f f . . . . 
            . . . f 1 1 1 f f 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . . f f f 1 1 f f f . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . f f f 1 1 f f f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 f f 1 1 1 f . . . 
            . . . . f f f . . f f f . . . . 
            `, SpriteKind.Fireball)
        tiles.placeOnTile(fireball, value7)
        tiles.setTileAt(value7, assets.tile`tile0`)
        animation.runMovementAnimation(
        fireball,
        "c 0 -100 0 100 0 0",
        2000,
        true
        )
        fireball.startEffect(effects.fountain)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (Hops_and_Paw.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
let fireball: Sprite = null
let flower: Sprite = null
let bee: Sprite = null
let Hops_and_Paw: Sprite = null
let current_level = 0
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
current_level = 0
Hops_and_Paw = sprites.create(img`
    . . f f f f . . . . f f f f . . 
    . f 8 8 8 8 f . . f f 8 8 8 f . 
    f 8 8 8 8 8 8 f f 8 8 8 8 8 8 f 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
    . f 8 8 8 8 8 8 8 8 8 8 8 8 f . 
    . . f 8 8 8 8 8 8 8 8 8 8 f . . 
    . . . f 8 8 8 8 8 8 8 8 f . . . 
    . . . . f 8 8 8 8 8 8 f . . . . 
    . . . . . f 8 8 8 8 f . . . . . 
    . . . . . . f 8 8 f . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Hops_and_Paw, 80, 0)
startLevel()
game.onUpdate(function () {
    if (Hops_and_Paw.vy < 0) {
        Hops_and_Paw.setImage(img`
            . . f f f f . . . . f f f f . . 
            . f 8 8 8 8 f . . f f 8 8 8 f . 
            f 8 8 8 8 8 8 f f 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            . f 8 8 8 8 8 8 8 8 8 8 8 8 f . 
            . . f 8 8 8 8 8 8 8 8 8 8 f . . 
            . . . f 8 8 8 8 8 8 8 8 f . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . . f 8 8 8 8 f . . . . . 
            . . . . . . f 8 8 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (Hops_and_Paw.vy > 0) {
        Hops_and_Paw.setImage(img`
            . . f f f f . . . . f f f f . . 
            . f 8 8 8 8 f . . f f 8 8 8 f . 
            f 8 8 8 8 8 8 f f 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            . f 8 8 8 8 8 8 8 8 8 8 8 8 f . 
            . . f 8 8 8 8 8 8 8 8 8 8 f . . 
            . . . f 8 8 8 8 8 8 8 8 f . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . . f 8 8 8 8 f . . . . . 
            . . . . . . f 8 8 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (Hops_and_Paw.x % 2 == 0) {
        Hops_and_Paw.setImage(img`
            . . f f f f . . . . f f f f . . 
            . f 8 8 8 8 f . . f f 8 8 8 f . 
            f 8 8 8 8 8 8 f f 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            . f 8 8 8 8 8 8 8 8 8 8 8 8 f . 
            . . f 8 8 8 8 8 8 8 8 8 8 f . . 
            . . . f 8 8 8 8 8 8 8 8 f . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . . f 8 8 8 8 f . . . . . 
            . . . . . . f 8 8 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        Hops_and_Paw.setImage(img`
            . . f f f f . . . . f f f f . . 
            . f 8 8 8 8 f . . f f 8 8 8 f . 
            f 8 8 8 8 8 8 f f 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            . f 8 8 8 8 8 8 8 8 8 8 8 8 f . 
            . . f 8 8 8 8 8 8 8 8 8 8 f . . 
            . . . f 8 8 8 8 8 8 8 8 f . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . . f 8 8 8 8 f . . . . . 
            . . . . . . f 8 8 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if ((Hops_and_Paw.isHittingTile(CollisionDirection.Left) || Hops_and_Paw.isHittingTile(CollisionDirection.Right)) && Hops_and_Paw.vy >= 0) {
        Hops_and_Paw.vy = 0
        Hops_and_Paw.ay = 0
        Hops_and_Paw.setImage(img`
            . . f f f f . . . . f f f f . . 
            . f 8 8 8 8 f . . f f 8 8 8 f . 
            f 8 8 8 8 8 8 f f 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            . f 8 8 8 8 8 8 8 8 8 8 8 8 f . 
            . . f 8 8 8 8 8 8 8 8 8 8 f . . 
            . . . f 8 8 8 8 8 8 8 8 f . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . . f 8 8 8 8 f . . . . . 
            . . . . . . f 8 8 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        Hops_and_Paw.ay = 350
    }
    if (Hops_and_Paw.vx < 0 || Hops_and_Paw.isHittingTile(CollisionDirection.Left)) {
        Hops_and_Paw.image.flipX()
        Hops_and_Paw.setImage(Hops_and_Paw.image)
    }
})
