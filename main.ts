let y = 0
let x = 2
let dx = 1
let x2 = 1
let dx2 = 1
let x3 = 0
let dx3 = 1
let bright = 250
basic.forever(function () {
    basic.clearScreen()
    y = 0
    if (x >= 4) {
        dx = -1
    } else if (x <= 0) {
        dx = 1
    }
    x += dx
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index <= 4; index++) {
            led.plotBrightness(x - dx * index, y, index * 50)
        }
        y += 1
    }
    basic.pause(300)
    bright = 255
})
