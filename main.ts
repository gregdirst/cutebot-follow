basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        cuteBot.motors(20, 15)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        cuteBot.motors(15, 20)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
        cuteBot.motors(-10, -10)
    } else {
        cuteBot.motors(20, 20)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
})
