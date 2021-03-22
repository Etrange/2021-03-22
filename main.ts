let SONAR = 0
basic.showString("Hello!")
basic.showString("COMENT ça va !")
cuteBot.forward()
basic.forever(function () {
    if (input.lightLevel() < -20) {
        cuteBot.turnleft()
    } else {
        SONAR = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
        if (SONAR < 15 && SONAR > 2) {
            cuteBot.motors(0, 0)
            for (let index = 0; index < 4; index++) {
                music.playTone(880, music.beat(BeatFraction.Quarter))
            }
            basic.pause(2000)
            cuteBot.motors(randint(-50, -100), 0)
            basic.pause(500)
        } else {
            cuteBot.forward()
        }
    }
})
basic.forever(function () {
    basic.showLeds(`
        # # . # #
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
})
basic.forever(function () {
    if (input.lightLevel() < -20) {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffff00)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x7f00ff)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x000000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x000000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff00ff)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xffffff)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x000000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x000000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x999999)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x000000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x000000)
    } else {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 100, 0)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 0, 100, 0)
    }
})
