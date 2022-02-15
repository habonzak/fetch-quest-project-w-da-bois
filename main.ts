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
    tiles.placeOnTile(pizza, tiles.getTileLocation(17, 10))
    hasPizza = false
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
    tiles.placeOnTile(burger, tiles.getTileLocation(5, 29))
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
    tiles.placeOnTile(cake, tiles.getTileLocation(27, 17))
    hasCake = false
}
function initializeBackground () {
    tiles.setCurrentTilemap(tilemap`level1`)
    scene.cameraFollowSprite(heroBat)
    topRoof = sprites.create(img`
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
        `, SpriteKind.tileThing)
    topRoofRight = sprites.create(img`
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
        `, SpriteKind.tileThing)
    topRoofLeft = sprites.create(img`
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
        `, SpriteKind.tileThing)
    topRoofRightMiddle = sprites.create(img`
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
        `, SpriteKind.tileThing)
    topRoofLeftMiddle = sprites.create(img`
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
        `, SpriteKind.tileThing)
    roofRight = sprites.create(img`
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
    roofLeft = sprites.create(img`
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
    middleHouse = sprites.create(img`
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
    tiles.placeOnRandomTile(topRoof, assets.tile`myTile0`)
    tiles.placeOnRandomTile(topRoofRight, assets.tile`houseDoor6`)
    tiles.placeOnRandomTile(topRoofLeft, assets.tile`houseDoor9`)
    tiles.placeOnRandomTile(topRoofRightMiddle, assets.tile`myTile1`)
    tiles.placeOnRandomTile(topRoofLeftMiddle, assets.tile`myTile2`)
    tiles.placeOnRandomTile(roofRight, assets.tile`myTile`)
    tiles.placeOnRandomTile(roofLeft, assets.tile`myTile3`)
    tiles.placeOnRandomTile(middleHouse, assets.tile`houseDoor`)
}
// talk to friend sprite
function talkFriend (who: Sprite, thing: boolean, quest: boolean, chat: boolean) {
    if (heroBat.overlapsWith(who) && controller.A.isPressed()) {
        heroBat.setFlag(SpriteFlag.Ghost, true)
        // has item, has not talked to sprite yet
        // giving item to sprite
        // has no items
        // has wrong item
        if (chat == false && thing == true) {
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
        } else if (thing == true) {
            // quest not done
            // quest already done
            if (quest == false) {
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
        } else if (currentItem == false && thing == false) {
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
let facingRight = false
let facingLeft = false
let middleHouse: Sprite = null
let roofLeft: Sprite = null
let roofRight: Sprite = null
let topRoofLeftMiddle: Sprite = null
let topRoofRightMiddle: Sprite = null
let topRoofLeft: Sprite = null
let topRoofRight: Sprite = null
let topRoof: Sprite = null
let hasCake = false
let hasPizza = false
let hasBurger = false
let cake: Sprite = null
let pizza: Sprite = null
let burger: Sprite = null
let rejectText: string[] = []
let friendText: string[] = []
let talkSnake = false
let talkDuck = false
let talkGhost = false
let snakeDone = false
let duckDone = false
let ghostDone = false
let currentItem = false
let questsDone = 0
let snakeFriend: Sprite = null
let duckFriend: Sprite = null
let ghostFriend: Sprite = null
let heroBat: Sprite = null
let introText = [
"Welcome to our game!",
"Press A to talk to a villager.",
"Complete each quest by bringing lunch to each villager.",
"To pick up a food item, fly over it.",
"To win, you must finish all three quests.",
"Press B to check your progress and current item.",
"Good luck! Press A to begin the game."
]
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
controller.moveSprite(heroBat)
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
ghostFriend.setPosition(60, 70)
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
duckFriend.setPosition(118, 29)
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
snakeFriend.setPosition(114, 55)
initializeBackground()
createBurger()
createPizza()
createCake()
// set variables
questsDone = 0
currentItem = false
ghostDone = false
duckDone = false
snakeDone = false
talkGhost = false
talkDuck = false
talkSnake = false
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
// calls functions
game.onUpdate(function () {
    talkFriend(ghostFriend, hasBurger, ghostDone, talkGhost)
    talkFriend(duckFriend, hasPizza, duckDone, talkDuck)
    talkFriend(snakeFriend, hasCake, snakeDone, talkSnake)
})
game.onUpdate(function () {
    if (heroBat.vx < 0) {
        facingLeft = true
    } else if (heroBat.vx > 0) {
        facingRight = true
    }
})
