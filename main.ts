basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        basic.showLeds(`
            . . . . .
            . . # . #
            . . . . .
            # . . . #
            . # # # .
            `)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x00ff00)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
        cuteBot.motors(20, 15)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        basic.showLeds(`
            . . . . .
            # . # . .
            . . . . .
            # . . . #
            . # # # .
            `)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
        cuteBot.motors(15, 20)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        basic.showIcon(IconNames.Sad)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        cuteBot.motors(-10, -10)
    } else {
        basic.showIcon(IconNames.Happy)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
        cuteBot.motors(20, 20)
    }
})
