namespace SpriteKind {
    export const Friend = SpriteKind.create()
    export const Item = SpriteKind.create()
    export const tileThing = SpriteKind.create()
}
// picking up items
sprites.onOverlap(SpriteKind.Player, SpriteKind.Item, function (sprite, otherSprite) {
    if (currentItem == true) {
        otherSprite.sayText("no picking up more than one item!", 500, false)
    } else if (otherSprite == burger) {
        otherSprite.destroy()
        currentItem = true
        hasBurger = true
    } else if (otherSprite == pizza) {
        otherSprite.destroy()
        currentItem = true
        hasPizza = true
    } else if (otherSprite == cake) {
        otherSprite.destroy()
        currentItem = true
        hasCake = true
    }
})
function placeTileSprites () {
    tiles.placeOnTile(topRoofMiddle1, tiles.getTileLocation(18, 18))
    tiles.placeOnTile(topRoofLeft1, tiles.getTileLocation(17, 18))
    tiles.placeOnTile(topRoofRight1, tiles.getTileLocation(19, 18))
    tiles.placeOnTile(middleRoofLeft1, tiles.getTileLocation(17, 19))
    tiles.placeOnTile(middleRoofRight1, tiles.getTileLocation(19, 19))
    tiles.placeOnTile(middleRoof1, tiles.getTileLocation(18, 19))
    tiles.placeOnTile(roofRight1, tiles.getTileLocation(20, 19))
    tiles.placeOnTile(roofLeft1, tiles.getTileLocation(16, 19))
    tiles.placeOnTile(topRoofMiddle2, tiles.getTileLocation(6, 13))
    tiles.placeOnTile(topRoofLeft2, tiles.getTileLocation(5, 13))
    tiles.placeOnTile(topRoofRight2, tiles.getTileLocation(7, 13))
    tiles.placeOnTile(middleRoofLeft2, tiles.getTileLocation(5, 14))
    tiles.placeOnTile(middleRoofRight2, tiles.getTileLocation(7, 14))
    tiles.placeOnTile(middleRoof2, tiles.getTileLocation(6, 14))
    tiles.placeOnTile(roofRight2, tiles.getTileLocation(8, 14))
    tiles.placeOnTile(roofLeft2, tiles.getTileLocation(4, 14))
    tiles.placeOnTile(topRoofMiddle3, tiles.getTileLocation(2, 0))
    tiles.placeOnTile(topRoofLeft3, tiles.getTileLocation(1, 0))
    tiles.placeOnTile(topRoofRight3, tiles.getTileLocation(3, 0))
    tiles.placeOnTile(middleRoofLeft3, tiles.getTileLocation(1, 1))
    tiles.placeOnTile(middleRoofRight3, tiles.getTileLocation(3, 1))
    tiles.placeOnTile(middleRoof3, tiles.getTileLocation(2, 1))
    tiles.placeOnTile(roofRight3, tiles.getTileLocation(4, 1))
    tiles.placeOnTile(roofLeft3, tiles.getTileLocation(0, 1))
}
// checks completed quests
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hasBurger == true && ghostDone == false) {
        game.splash("You have " + convertToText(questsDone) + "/3 quests done.", "You are holding a burger.")
    } else if (hasPizza == true && duckDone == false) {
        game.splash("You have " + convertToText(questsDone) + "/3 quests done.", "You are holding pizza.")
    } else if (hasCake == true && snakeDone == false) {
        game.splash("You have " + convertToText(questsDone) + "/3 quests done.", "You are holding cake.")
    } else {
        game.splash("You have " + convertToText(questsDone) + "/3 quests done.", "You are holding nothing.")
    }
})
function setSprites () {
    controller.moveSprite(heroBat)
    scene.cameraFollowSprite(heroBat)
    ghostFriend = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Friend)
    tiles.placeOnTile(ghostFriend, tiles.getTileLocation(18, 21))
    duckFriend = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Friend)
    tiles.placeOnTile(duckFriend, tiles.getTileLocation(6, 16))
    snakeFriend = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Friend)
    tiles.placeOnTile(snakeFriend, tiles.getTileLocation(2, 3))
}
function setPresets () {
    // set variables
    questsDone = 0
    currentItem = false
    ghostDone = false
    duckDone = false
    snakeDone = false
    talkGhost = false
    talkDuck = false
    talkSnake = false
}
function createTileSprites () {
    topRoofMiddle1 = sprites.create(img`
        . . . . . . c c c c . . . . . . 
        . . . . . c e 4 5 e c . . . . . 
        . . . . c 2 e 4 5 e 2 c . . . . 
        . . . c 4 2 e 4 4 e 2 2 c . . . 
        . . c e 2 2 e 4 5 e 2 4 e c . . 
        . c 2 e 4 2 e 4 4 e 2 2 e 2 c . 
        c 4 2 e 2 2 e 4 5 e 2 4 e 2 2 c 
        e 2 2 e 4 2 e 4 4 e 2 2 e 2 4 e 
        e 4 2 e 2 2 e c c e 2 4 e 2 2 e 
        e 2 2 e 4 2 c e 4 c 2 2 e 2 4 e 
        e 4 2 e 2 c 4 e e e c 4 e 2 2 e 
        e 2 2 e c e e c c e 4 c e 2 4 e 
        e 4 2 c 4 e c e c c e 4 c 2 2 e 
        e 2 c 4 e c e c e c c e e c 4 e 
        e c 4 e c c e e e e e c e 4 c e 
        c e e c c c c c c c c c c e 4 c 
        `, SpriteKind.Player)
    topRoofLeft1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . c 
        . . . . . . . . . . . . . . c 2 
        . . . . . . . . . . . . . c 4 2 
        . . . . . . . . . . . . c e 2 2 
        . . . . . . . . . . . c 2 e 4 2 
        . . . . . . . . . . c 2 2 e 2 2 
        . . . . . . . . . c e 4 2 e 4 2 
        . . . . . . . . c 2 e 2 2 e 2 2 
        . . . . . . . c 2 2 e 4 2 e 4 2 
        `, SpriteKind.Player)
    topRoofRight1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        c . . . . . . . . . . . . . . . 
        2 c . . . . . . . . . . . . . . 
        2 4 c . . . . . . . . . . . . . 
        2 2 e c . . . . . . . . . . . . 
        2 4 e 2 c . . . . . . . . . . . 
        2 2 e 2 2 c . . . . . . . . . . 
        2 4 e 2 4 e c . . . . . . . . . 
        2 2 e 2 2 e 2 c . . . . . . . . 
        2 4 e 2 4 e 2 2 c . . . . . . . 
        `, SpriteKind.Player)
    middleRoofLeft1 = sprites.create(img`
        . . . . . . c e 4 2 e 2 2 e 2 c 
        . . . . . c 2 e 2 2 e 4 2 e c 4 
        . . . . c 4 2 e 4 2 e 2 c c 4 e 
        . . . c e 2 2 e 2 2 e c 4 4 e c 
        . . c 2 e 4 2 e 4 2 c 4 e e c c 
        . c 2 2 e 2 2 e 2 c 4 e c c c 4 
        c e 4 2 e 4 2 c c 4 e c e c e e 
        2 e 2 2 e 2 c 4 4 e c e c e e e 
        2 e 4 2 e c 4 e e c c c e e e e 
        2 e 2 2 c 4 e c c c e e e e e e 
        2 e c c 4 e c c c c c c c c c c 
        2 c 4 4 e c 4 c 4 4 4 4 4 4 4 4 
        c 4 e e c c e e e e e e e e e e 
        4 e c c c e e e e e e e e e e e 
        e c e c e e e e e e e e e e e e 
        c c c c c c c c c c c c c c c c 
        `, SpriteKind.Player)
    middleRoofRight1 = sprites.create(img`
        c 2 e 2 2 e 2 4 e c . . . . . . 
        4 c e 2 4 e 2 2 e 2 c . . . . . 
        e 4 c c 2 e 2 4 e 2 4 c . . . . 
        c e 4 4 c e 2 2 e 2 2 e c . . . 
        c c e e 4 c 2 4 e 2 4 e 2 c . . 
        4 c c c e 4 c 2 e 2 2 e 2 2 c . 
        e e c e c e 4 c c 2 4 e 2 4 e c 
        e e e c e c e 4 4 c 2 e 2 2 e 2 
        e e e e c c c e e 4 c e 2 4 e 2 
        e e e e e e c c c e 4 c 2 2 e 2 
        c c c c c c c c c c e 4 c c e 2 
        4 4 4 4 4 4 4 4 c 4 c e 4 4 c 2 
        e e e e e e e e e e c c e e 4 c 
        e e e e e e e e e e e c c c e 4 
        e e e e e e e e e e e e c e c e 
        c c c c c c c c c c c c c c c c 
        `, SpriteKind.Player)
    middleRoof1 = sprites.create(img`
        e c c 4 4 4 4 4 4 4 4 4 4 c 4 c 
        e c e e e e e e e e e e e c c e 
        c c e e e e b b b b e e e e e c 
        e e e e b b 9 9 9 6 b b e e e e 
        c c c b 9 1 9 9 9 9 9 6 b c c c 
        4 4 4 b 9 9 1 9 9 9 9 9 c 4 4 4 
        e e b 9 9 9 1 1 9 9 9 9 6 c e e 
        e e b 9 9 9 9 9 1 9 9 9 6 c e e 
        e e c 9 9 1 1 9 9 1 1 9 9 c e e 
        e e c 6 9 9 1 1 9 9 1 9 9 c e e 
        c c c c 6 9 9 9 1 9 9 9 c c c c 
        4 4 4 c 6 6 9 9 9 9 9 9 c 4 4 4 
        e e e e c c 6 9 9 9 c c e e e e 
        e e e e e e c c c c e e e e e e 
        e e e e e e e e e e e e e e e e 
        c c c c c c c c c c c c c c c c 
        `, SpriteKind.Player)
    roofLeft1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . c 
        . . . . . . . . . . . . . . c 2 
        . . . . . . . . . . . . . . c 4 
        . . . . . . . . . . . . . . c 2 
        . . . . . . . . . . . . . . c 4 
        . . . . . . . . . . . . . . c 2 
        . . . . . . . . . . . . . . c 4 
        . . . . . . . . . . . . . . c 2 
        . . . . . . . . . . . . . . . c 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    roofRight1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        c . . . . . . . . . . . . . . . 
        2 c . . . . . . . . . . . . . . 
        4 c . . . . . . . . . . . . . . 
        2 c . . . . . . . . . . . . . . 
        4 c . . . . . . . . . . . . . . 
        2 c . . . . . . . . . . . . . . 
        4 c . . . . . . . . . . . . . . 
        2 c . . . . . . . . . . . . . . 
        c . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.tileThing)
}
function setBackground () {
    tiles.setCurrentTilemap(tilemap`level1`)
    createTileSprites()
    createTileSprites2()
    createTileSprites3()
    placeTileSprites()
}
// creates or resets items
function createPizza () {
    pizza = sprites.create(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `, SpriteKind.Item)
    tiles.placeOnTile(pizza, tiles.getTileLocation(3, 22))
    hasPizza = false
}
function setArrays () {
    introText = [
    "Welcome to our game!",
    "Press A to talk to a villager.",
    "Complete each quest by bringing lunch to each villager.",
    "To pick up a food item, fly over it.",
    "To win, you must finish all three quests.",
    "Press B to check your progress and current item.",
    "Good luck! Press A to begin the game."
    ]
    friendText = [
    "Hi friend!",
    "Hey! :)",
    ":)",
    ":D",
    "<3"
    ]
    rejectText = [
    "Ew.",
    "Yuck!",
    "What is this? :(",
    "Gross :(",
    "I don't like this."
    ]
}
function createTileSprites3 () {
    topRoofMiddle3 = sprites.create(img`
        . . . . . . c c c c . . . . . . 
        . . . . . c e 4 5 e c . . . . . 
        . . . . c 2 e 4 5 e 2 c . . . . 
        . . . c 4 2 e 4 4 e 2 2 c . . . 
        . . c e 2 2 e 4 5 e 2 4 e c . . 
        . c 2 e 4 2 e 4 4 e 2 2 e 2 c . 
        c 4 2 e 2 2 e 4 5 e 2 4 e 2 2 c 
        e 2 2 e 4 2 e 4 4 e 2 2 e 2 4 e 
        e 4 2 e 2 2 e c c e 2 4 e 2 2 e 
        e 2 2 e 4 2 c e 4 c 2 2 e 2 4 e 
        e 4 2 e 2 c 4 e e e c 4 e 2 2 e 
        e 2 2 e c e e c c e 4 c e 2 4 e 
        e 4 2 c 4 e c e c c e 4 c 2 2 e 
        e 2 c 4 e c e c e c c e e c 4 e 
        e c 4 e c c e e e e e c e 4 c e 
        c e e c c c c c c c c c c e 4 c 
        `, SpriteKind.Player)
    topRoofLeft3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . c 
        . . . . . . . . . . . . . . c 2 
        . . . . . . . . . . . . . c 4 2 
        . . . . . . . . . . . . c e 2 2 
        . . . . . . . . . . . c 2 e 4 2 
        . . . . . . . . . . c 2 2 e 2 2 
        . . . . . . . . . c e 4 2 e 4 2 
        . . . . . . . . c 2 e 2 2 e 2 2 
        . . . . . . . c 2 2 e 4 2 e 4 2 
        `, SpriteKind.Player)
    topRoofRight3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        c . . . . . . . . . . . . . . . 
        2 c . . . . . . . . . . . . . . 
        2 4 c . . . . . . . . . . . . . 
        2 2 e c . . . . . . . . . . . . 
        2 4 e 2 c . . . . . . . . . . . 
        2 2 e 2 2 c . . . . . . . . . . 
        2 4 e 2 4 e c . . . . . . . . . 
        2 2 e 2 2 e 2 c . . . . . . . . 
        2 4 e 2 4 e 2 2 c . . . . . . . 
        `, SpriteKind.Player)
    middleRoofLeft3 = sprites.create(img`
        . . . . . . c e 4 2 e 2 2 e 2 c 
        . . . . . c 2 e 2 2 e 4 2 e c 4 
        . . . . c 4 2 e 4 2 e 2 c c 4 e 
        . . . c e 2 2 e 2 2 e c 4 4 e c 
        . . c 2 e 4 2 e 4 2 c 4 e e c c 
        . c 2 2 e 2 2 e 2 c 4 e c c c 4 
        c e 4 2 e 4 2 c c 4 e c e c e e 
        2 e 2 2 e 2 c 4 4 e c e c e e e 
        2 e 4 2 e c 4 e e c c c e e e e 
        2 e 2 2 c 4 e c c c e e e e e e 
        2 e c c 4 e c c c c c c c c c c 
        2 c 4 4 e c 4 c 4 4 4 4 4 4 4 4 
        c 4 e e c c e e e e e e e e e e 
        4 e c c c e e e e e e e e e e e 
        e c e c e e e e e e e e e e e e 
        c c c c c c c c c c c c c c c c 
        `, SpriteKind.Player)
    middleRoofRight3 = sprites.create(img`
        c 2 e 2 2 e 2 4 e c . . . . . . 
        4 c e 2 4 e 2 2 e 2 c . . . . . 
        e 4 c c 2 e 2 4 e 2 4 c . . . . 
        c e 4 4 c e 2 2 e 2 2 e c . . . 
        c c e e 4 c 2 4 e 2 4 e 2 c . . 
        4 c c c e 4 c 2 e 2 2 e 2 2 c . 
        e e c e c e 4 c c 2 4 e 2 4 e c 
        e e e c e c e 4 4 c 2 e 2 2 e 2 
        e e e e c c c e e 4 c e 2 4 e 2 
        e e e e e e c c c e 4 c 2 2 e 2 
        c c c c c c c c c c e 4 c c e 2 
        4 4 4 4 4 4 4 4 c 4 c e 4 4 c 2 
        e e e e e e e e e e c c e e 4 c 
        e e e e e e e e e e e c c c e 4 
        e e e e e e e e e e e e c e c e 
        c c c c c c c c c c c c c c c c 
        `, SpriteKind.Player)
    middleRoof3 = sprites.create(img`
        e c c 4 4 4 4 4 4 4 4 4 4 c 4 c 
        e c e e e e e e e e e e e c c e 
        c c e e e e b b b b e e e e e c 
        e e e e b b 9 9 9 6 b b e e e e 
        c c c b 9 1 9 9 9 9 9 6 b c c c 
        4 4 4 b 9 9 1 9 9 9 9 9 c 4 4 4 
        e e b 9 9 9 1 1 9 9 9 9 6 c e e 
        e e b 9 9 9 9 9 1 9 9 9 6 c e e 
        e e c 9 9 1 1 9 9 1 1 9 9 c e e 
        e e c 6 9 9 1 1 9 9 1 9 9 c e e 
        c c c c 6 9 9 9 1 9 9 9 c c c c 
        4 4 4 c 6 6 9 9 9 9 9 9 c 4 4 4 
        e e e e c c 6 9 9 9 c c e e e e 
        e e e e e e c c c c e e e e e e 
        e e e e e e e e e e e e e e e e 
        c c c c c c c c c c c c c c c c 
        `, SpriteKind.Player)
    roofLeft3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . c 
        . . . . . . . . . . . . . . c 2 
        . . . . . . . . . . . . . . c 4 
        . . . . . . . . . . . . . . c 2 
        . . . . . . . . . . . . . . c 4 
        . . . . . . . . . . . . . . c 2 
        . . . . . . . . . . . . . . c 4 
        . . . . . . . . . . . . . . c 2 
        . . . . . . . . . . . . . . . c 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    roofRight3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        c . . . . . . . . . . . . . . . 
        2 c . . . . . . . . . . . . . . 
        4 c . . . . . . . . . . . . . . 
        2 c . . . . . . . . . . . . . . 
        4 c . . . . . . . . . . . . . . 
        2 c . . . . . . . . . . . . . . 
        4 c . . . . . . . . . . . . . . 
        2 c . . . . . . . . . . . . . . 
        c . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.tileThing)
}
function createBurger () {
    burger = sprites.create(img`
        . . . . c c c b b b b b . . . . 
        . . c c b 4 4 4 4 4 4 b b b . . 
        . c c 4 4 4 4 4 5 4 4 4 4 b c . 
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
        . e b 4 4 4 4 4 5 4 4 4 4 b e . 
        8 7 e e b 4 4 4 4 4 4 b e e 6 8 
        8 7 2 e e e e e e e e e e 2 7 8 
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
        e b e 8 8 c c 8 8 c c c 8 e b e 
        e e b e c c e e e e e c e b e e 
        . e e b b 4 4 4 4 4 4 4 4 e e . 
        . . . c c c c c e e e e e . . . 
        `, SpriteKind.Item)
    tiles.placeOnTile(burger, tiles.getTileLocation(21, 9))
    hasBurger = false
}
function createCake () {
    cake = sprites.create(img`
        . . . . . . . . . . b b b . . . 
        . . . . . . . . b e e 3 3 b . . 
        . . . . . . b b e 3 2 e 3 a . . 
        . . . . b b 3 3 e 2 2 e 3 3 a . 
        . . b b 3 3 3 3 3 e e 3 3 3 a . 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
        b 3 3 3 d d d d 3 3 3 3 3 d d a 
        b b b b b b b 3 d d d d d d 3 a 
        b d 5 5 5 5 d b b b a a a a a a 
        b 3 d d 5 5 5 5 5 5 5 d d d d a 
        b 3 3 3 3 3 3 d 5 5 5 d d d d a 
        b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
        b b b 3 d 5 5 5 5 5 5 5 d d b a 
        . . . b b b 3 d 5 5 5 5 d d 3 a 
        . . . . . . b b b b 3 d d d b a 
        . . . . . . . . . . b b b a a . 
        `, SpriteKind.Item)
    tiles.placeOnTile(cake, tiles.getTileLocation(12, 1))
    hasCake = false
}
function createTileSprites2 () {
    topRoofMiddle2 = sprites.create(img`
        . . . . . . c c c c . . . . . . 
        . . . . . c e 4 5 e c . . . . . 
        . . . . c 2 e 4 5 e 2 c . . . . 
        . . . c 4 2 e 4 4 e 2 2 c . . . 
        . . c e 2 2 e 4 5 e 2 4 e c . . 
        . c 2 e 4 2 e 4 4 e 2 2 e 2 c . 
        c 4 2 e 2 2 e 4 5 e 2 4 e 2 2 c 
        e 2 2 e 4 2 e 4 4 e 2 2 e 2 4 e 
        e 4 2 e 2 2 e c c e 2 4 e 2 2 e 
        e 2 2 e 4 2 c e 4 c 2 2 e 2 4 e 
        e 4 2 e 2 c 4 e e e c 4 e 2 2 e 
        e 2 2 e c e e c c e 4 c e 2 4 e 
        e 4 2 c 4 e c e c c e 4 c 2 2 e 
        e 2 c 4 e c e c e c c e e c 4 e 
        e c 4 e c c e e e e e c e 4 c e 
        c e e c c c c c c c c c c e 4 c 
        `, SpriteKind.Player)
    topRoofLeft2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . c 
        . . . . . . . . . . . . . . c 2 
        . . . . . . . . . . . . . c 4 2 
        . . . . . . . . . . . . c e 2 2 
        . . . . . . . . . . . c 2 e 4 2 
        . . . . . . . . . . c 2 2 e 2 2 
        . . . . . . . . . c e 4 2 e 4 2 
        . . . . . . . . c 2 e 2 2 e 2 2 
        . . . . . . . c 2 2 e 4 2 e 4 2 
        `, SpriteKind.Player)
    topRoofRight2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        c . . . . . . . . . . . . . . . 
        2 c . . . . . . . . . . . . . . 
        2 4 c . . . . . . . . . . . . . 
        2 2 e c . . . . . . . . . . . . 
        2 4 e 2 c . . . . . . . . . . . 
        2 2 e 2 2 c . . . . . . . . . . 
        2 4 e 2 4 e c . . . . . . . . . 
        2 2 e 2 2 e 2 c . . . . . . . . 
        2 4 e 2 4 e 2 2 c . . . . . . . 
        `, SpriteKind.Player)
    middleRoofLeft2 = sprites.create(img`
        . . . . . . c e 4 2 e 2 2 e 2 c 
        . . . . . c 2 e 2 2 e 4 2 e c 4 
        . . . . c 4 2 e 4 2 e 2 c c 4 e 
        . . . c e 2 2 e 2 2 e c 4 4 e c 
        . . c 2 e 4 2 e 4 2 c 4 e e c c 
        . c 2 2 e 2 2 e 2 c 4 e c c c 4 
        c e 4 2 e 4 2 c c 4 e c e c e e 
        2 e 2 2 e 2 c 4 4 e c e c e e e 
        2 e 4 2 e c 4 e e c c c e e e e 
        2 e 2 2 c 4 e c c c e e e e e e 
        2 e c c 4 e c c c c c c c c c c 
        2 c 4 4 e c 4 c 4 4 4 4 4 4 4 4 
        c 4 e e c c e e e e e e e e e e 
        4 e c c c e e e e e e e e e e e 
        e c e c e e e e e e e e e e e e 
        c c c c c c c c c c c c c c c c 
        `, SpriteKind.Player)
    middleRoofRight2 = sprites.create(img`
        c 2 e 2 2 e 2 4 e c . . . . . . 
        4 c e 2 4 e 2 2 e 2 c . . . . . 
        e 4 c c 2 e 2 4 e 2 4 c . . . . 
        c e 4 4 c e 2 2 e 2 2 e c . . . 
        c c e e 4 c 2 4 e 2 4 e 2 c . . 
        4 c c c e 4 c 2 e 2 2 e 2 2 c . 
        e e c e c e 4 c c 2 4 e 2 4 e c 
        e e e c e c e 4 4 c 2 e 2 2 e 2 
        e e e e c c c e e 4 c e 2 4 e 2 
        e e e e e e c c c e 4 c 2 2 e 2 
        c c c c c c c c c c e 4 c c e 2 
        4 4 4 4 4 4 4 4 c 4 c e 4 4 c 2 
        e e e e e e e e e e c c e e 4 c 
        e e e e e e e e e e e c c c e 4 
        e e e e e e e e e e e e c e c e 
        c c c c c c c c c c c c c c c c 
        `, SpriteKind.Player)
    middleRoof2 = sprites.create(img`
        e c c 4 4 4 4 4 4 4 4 4 4 c 4 c 
        e c e e e e e e e e e e e c c e 
        c c e e e e b b b b e e e e e c 
        e e e e b b 9 9 9 6 b b e e e e 
        c c c b 9 1 9 9 9 9 9 6 b c c c 
        4 4 4 b 9 9 1 9 9 9 9 9 c 4 4 4 
        e e b 9 9 9 1 1 9 9 9 9 6 c e e 
        e e b 9 9 9 9 9 1 9 9 9 6 c e e 
        e e c 9 9 1 1 9 9 1 1 9 9 c e e 
        e e c 6 9 9 1 1 9 9 1 9 9 c e e 
        c c c c 6 9 9 9 1 9 9 9 c c c c 
        4 4 4 c 6 6 9 9 9 9 9 9 c 4 4 4 
        e e e e c c 6 9 9 9 c c e e e e 
        e e e e e e c c c c e e e e e e 
        e e e e e e e e e e e e e e e e 
        c c c c c c c c c c c c c c c c 
        `, SpriteKind.Player)
    roofLeft2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . c 
        . . . . . . . . . . . . . . c 2 
        . . . . . . . . . . . . . . c 4 
        . . . . . . . . . . . . . . c 2 
        . . . . . . . . . . . . . . c 4 
        . . . . . . . . . . . . . . c 2 
        . . . . . . . . . . . . . . c 4 
        . . . . . . . . . . . . . . c 2 
        . . . . . . . . . . . . . . . c 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    roofRight2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        c . . . . . . . . . . . . . . . 
        2 c . . . . . . . . . . . . . . 
        4 c . . . . . . . . . . . . . . 
        2 c . . . . . . . . . . . . . . 
        4 c . . . . . . . . . . . . . . 
        2 c . . . . . . . . . . . . . . 
        4 c . . . . . . . . . . . . . . 
        2 c . . . . . . . . . . . . . . 
        c . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.tileThing)
}
// talk to friend sprite
function talkFriend (who: Sprite, food: boolean, done: boolean, meet: boolean) {
    if (heroBat.overlapsWith(who) && controller.A.isPressed()) {
        heroBat.setFlag(SpriteFlag.Ghost, true)
        // has item, has not talked to sprite yet
        // giving item to sprite
        // has no items
        // has wrong item
        if (meet == false && food == true) {
            if (who == ghostFriend) {
                who.sayText("Please bring me a burger.", 500, false)
                talkGhost = true
            } else if (who == duckFriend) {
                who.sayText("I want pizza!", 500, false)
                talkDuck = true
            } else if (who == snakeFriend) {
                who.sayText("Get me a cake ssslice...", 500, false)
                talkSnake = true
            }
            pause(200)
        } else if (food == true) {
            // quest not done
            // quest already done
            if (done == false) {
                questsDone += 1
                who.sayText("Thank you!", 500, false)
                who.startEffect(effects.hearts, 500)
                pause(200)
                currentItem = false
                if (who == ghostFriend) {
                    ghostDone = true
                } else if (who == duckFriend) {
                    duckDone = true
                } else if (who == snakeFriend) {
                    snakeDone = true
                }
            } else {
                if (Math.percentChance(50)) {
                    who.sayText(friendText._pickRandom(), 500, false)
                    who.startEffect(effects.hearts, 500)
                    pause(200)
                } else {
                    who.startEffect(effects.hearts, 500)
                }
            }
        } else if (currentItem == false && food == false) {
            if (who == ghostFriend) {
                who.sayText("Please bring me a burger.", 500, false)
                talkGhost = true
            } else if (who == duckFriend) {
                who.sayText("I want pizza!", 500, false)
                talkDuck = true
            } else if (who == snakeFriend) {
                who.sayText("GIVE ME CAKE!", 500, false)
                talkSnake = true
            }
        } else {
            who.sayText(rejectText._pickRandom(), 500, false)
            pause(200)
            if (hasBurger == true && ghostDone == false) {
                createBurger()
                currentItem = false
            } else if (hasPizza == true && duckDone == false) {
                createPizza()
                currentItem = false
            } else if (hasCake == true && snakeDone == false) {
                createCake()
                currentItem = false
            }
        }
        heroBat.setFlag(SpriteFlag.Ghost, false)
    }
}
let rejectText: string[] = []
let friendText: string[] = []
let talkSnake = false
let talkDuck = false
let talkGhost = false
let snakeFriend: Sprite = null
let duckFriend: Sprite = null
let ghostFriend: Sprite = null
let questsDone = 0
let snakeDone = false
let duckDone = false
let ghostDone = false
let roofLeft3: Sprite = null
let roofRight3: Sprite = null
let middleRoof3: Sprite = null
let middleRoofRight3: Sprite = null
let middleRoofLeft3: Sprite = null
let topRoofRight3: Sprite = null
let topRoofLeft3: Sprite = null
let topRoofMiddle3: Sprite = null
let roofLeft2: Sprite = null
let roofRight2: Sprite = null
let middleRoof2: Sprite = null
let middleRoofRight2: Sprite = null
let middleRoofLeft2: Sprite = null
let topRoofRight2: Sprite = null
let topRoofLeft2: Sprite = null
let topRoofMiddle2: Sprite = null
let roofLeft1: Sprite = null
let roofRight1: Sprite = null
let middleRoof1: Sprite = null
let middleRoofRight1: Sprite = null
let middleRoofLeft1: Sprite = null
let topRoofRight1: Sprite = null
let topRoofLeft1: Sprite = null
let topRoofMiddle1: Sprite = null
let hasCake = false
let hasPizza = false
let hasBurger = false
let cake: Sprite = null
let pizza: Sprite = null
let burger: Sprite = null
let currentItem = false
let heroBat: Sprite = null
let introText: string[] = []
setArrays()
for (let value of introText) {
    game.showLongText(value, DialogLayout.Center)
}
// initialize sprites
heroBat = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Player)
setBackground()
setSprites()
setPresets()
createBurger()
createPizza()
createCake()
// calls functions
game.onUpdate(function () {
    talkFriend(ghostFriend, hasBurger, ghostDone, talkGhost)
    talkFriend(duckFriend, hasPizza, duckDone, talkDuck)
    talkFriend(snakeFriend, hasCake, snakeDone, talkSnake)
})
game.onUpdate(function () {
    if (heroBat.vx < 0) {
        heroBat.setImage(img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `)
    } else if (heroBat.vx > 0) {
        heroBat.setImage(img`
            f f f . . . . . . . . f f f . . 
            c b b c f . . . . . . c c f f . 
            . c b b c f . . . . . . c c f f 
            . c c c b f . . . . . . c f c f 
            . c c b b c f . c c . c c f f f 
            . c b b c b f c c 3 c c 3 c f f 
            . c b c c b f c b 3 c b 3 b f f 
            . . c c c b b c b b b b b b c . 
            . . . c c c c b b 1 b b b 1 c . 
            . . . . c c b b b b b b b b b c 
            . . . . f b b b b c b b b c b c 
            . . . c f b b b b 1 f f f 1 b f 
            . . c c f b b b b b b b b b b f 
            . . . . f c b b b b b b b b f . 
            . . . . . f c b b b b b b f . . 
            . . . . . . f f f f f f f . . . 
            `)
    }
})
