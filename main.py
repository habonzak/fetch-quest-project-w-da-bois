class ActionKind(Enum):
    Walking = 0
    Idle = 1
    Jumping = 2
@namespace
class SpriteKind:
    Friend = SpriteKind.create()
    Item = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    global currentItem, hasBurger
    if currentItem > 0:
        otherSprite.say_text("no picking up more than one item!")
    elif otherSprite == burger:
        otherSprite.destroy()
        currentItem += 1
        hasBurger = True
sprites.on_overlap(SpriteKind.player, SpriteKind.Item, on_on_overlap)

def batHeroFly():
    global mainFlyLeft, MainFlyRight
    mainFlyLeft = animation.create_animation(ActionKind.Walking, 100)
    animation.attach_animation(heroBat, mainFlyLeft)
    mainFlyLeft.add_animation_frame(img("""
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
    """))
    mainFlyLeft.add_animation_frame(img("""
        . . f f f . . . . . . . . . . . 
                f f f c c . . . . . . . . f f f 
                f f c c . . c c . . . f c b b c 
                f f c 3 c c 3 c c f f b b b c . 
                f f b 3 b c 3 b c f b b c c c . 
                . c b b b b b b c f b c b c c . 
                . c b b b b b b c b b c b b c . 
                c b 1 b b b 1 b b b c c c b c . 
                c b b b b b b b b c c c c c . . 
                f b c b b b c b b b b f c . . . 
                f b 1 f f f 1 b b b b f c c . . 
                . f b b b b b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . .
    """))
    mainFlyLeft.add_animation_frame(img("""
        . . . . . . . . . . . . . . . . 
                . . c c . . c c . . . . . . . . 
                . . c 3 c c 3 c c c . . . . . . 
                . c b 3 b c 3 b c c c . . . . . 
                . c b b b b b b b b f f . . . . 
                c c b b b b b b b b f f . . . . 
                c b 1 b b b 1 b b c f f f . . . 
                c b b b b b b b b f f f f . . . 
                f b c b b b c b c c b b b . . . 
                f b 1 f f f 1 b f c c c c . . . 
                . f b b b b b b f b b c c . . . 
                c c f b b b b b c c b b c . . . 
                c c c f f f f f f c c b b c . . 
                . c c c . . . . . . c c c c c . 
                . . c c c . . . . . . . c c c c 
                . . . . . . . . . . . . . . . .
    """))
    mainFlyLeft.add_animation_frame(img("""
        . f f f . . . . . . . . f f f . 
                f f c . . . . . . . f c b b c . 
                f c c . . . . . . f c b b c . . 
                c f . . . . . . . f b c c c . . 
                c f f . . . . . f f b b c c . . 
                f f f c c . c c f b c b b c . . 
                f f f c c c c c f b c c b c . . 
                . f c 3 c c 3 b c b c c c . . . 
                . c b 3 b c 3 b b c c c c . . . 
                c c b b b b b b b b c c . . . . 
                c b 1 b b b 1 b b b b f c . . . 
                f b b b b b b b b b b f c c . . 
                f b c b b b c b b b b f . . . . 
                . f 1 f f f 1 b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . .
    """))
    MainFlyRight = animation.create_animation(ActionKind.Walking, 100)
    animation.attach_animation(heroBat, MainFlyRight)
    MainFlyRight.add_animation_frame(img("""
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
    """))
    MainFlyRight.add_animation_frame(img("""
        . . . . . . . . . . . f f f . . 
                f f f . . . . . . . . c c f f f 
                c b b c f . . . c c . . c c f f 
                . c b b b f f c c 3 c c 3 c f f 
                . c c c b b f c b 3 c b 3 b f f 
                . c c b c b f c b b b b b b c . 
                . c b b c b b c b b b b b b c . 
                . c b c c c b b b 1 b b b 1 b c 
                . . c c c c c b b b b b b b b c 
                . . . c f b b b b c b b b c b f 
                . . c c f b b b b 1 f f f 1 b f 
                . . . . f c b b b b b b b b f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . .
    """))
    MainFlyRight.add_animation_frame(img("""
        . . . . . . . . . . . . . . . . 
                . . . . . . . . c c . . c c . . 
                . . . . . . c c c 3 c c 3 c . . 
                . . . . . c c c b 3 c b 3 b c . 
                . . . . f f b b b b b b b b c . 
                . . . . f f b b b b b b b b c c 
                . . . f f f c b b 1 b b b 1 b c 
                . . . f f f f b b b b b b b b c 
                . . . b b b c c b c b b b c b f 
                . . . c c c c f b 1 f f f 1 b f 
                . . . c c b b f b b b b b b f . 
                . . . c b b c c b b b b b f c c 
                . . c b b c c f f f f f f c c c 
                . c c c c c . . . . . . c c c . 
                c c c c . . . . . . . c c c . . 
                . . . . . . . . . . . . . . . .
    """))
    MainFlyRight.add_animation_frame(img("""
        . f f f . . . . . . . . f f f . 
                . c b b c f . . . . . . . c f f 
                . . c b b c f . . . . . . c c f 
                . . c c c b f . . . . . . . f c 
                . . c c b b f f . . . . . f f c 
                . . c b b c b f c c . c c f f f 
                . . c b c c b f c c c c c f f f 
                . . . c c c b c b 3 c c 3 c f . 
                . . . c c c c b b 3 c b 3 b c . 
                . . . . c c b b b b b b b b c c 
                . . . c f b b b b 1 b b b 1 b c 
                . . c c f b b b b b b b b b b f 
                . . . . f b b b b c b b b c b f 
                . . . . f c b b b 1 f f f 1 f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . .
    """))
def talkFriend(who: Sprite, thing: bool, quest: bool):
    global questsDone, currentItem, ghostDone
    if heroBat.overlaps_with(who) and controller.A.is_pressed():
        if thing == True:
            if quest == False:
                questsDone += 1
                who.say_text("Thank you!", 500, False)
                who.start_effect(effects.hearts, 500)
                currentItem = 0
                quest = True
            else:
                who.start_effect(effects.hearts, 500)
        elif currentItem == 0 and thing == False:
            who.say_text("Please bring me a burger.", 500, False)
        else:
            who.say_text("What is this? :(")
facingRight = False
facingLeft = False
MainFlyRight: animation.Animation = None
mainFlyLeft: animation.Animation = None
hasBurger = False
ghostDone = False
currentItem = 0
burger: Sprite = None
heroBat: Sprite = None
heroBat = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(heroBat)
ghostFriend = sprites.create(img("""
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
    """),
    SpriteKind.Friend)
burger = sprites.create(img("""
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
    """),
    SpriteKind.Item)
burger.set_position(43, 36)
currentItem = 0
questsDone = 0
ghostDone = False
hasBurger = False

def on_on_update():
    global questsDone, currentItem, ghostDone
    if heroBat.overlaps_with(ghostFriend) and controller.A.is_pressed():
        if hasBurger == True:
            if ghostDone == False:
                questsDone += 1
                ghostFriend.say_text("Thank you!", 500, False)
                ghostFriend.start_effect(effects.hearts, 500)
                currentItem = 0
                ghostDone = True
            else:
                ghostFriend.start_effect(effects.hearts, 500)
        elif currentItem == 0 and hasBurger == False:
            ghostFriend.say_text("Please bring me a burger.", 500, False)
        else:
            ghostFriend.say_text("What is this? :(")
game.on_update(on_on_update)

def on_on_update2():
    global facingLeft, facingRight
    if heroBat.vx < 0:
        facingLeft = True
    elif heroBat.vx > 0:
        facingRight = True
game.on_update(on_on_update2)
