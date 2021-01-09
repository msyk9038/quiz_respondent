input.onButtonPressed(Button.A, function () {
    if (answer == "A") {
        point += 1
        soundExpression.happy.playUntilDone()
    } else {
        soundExpression.sad.playUntilDone()
    }
    basic.showNumber(point)
})
input.onButtonPressed(Button.AB, function () {
    point = 0
    answer = ""
    soundExpression.spring.playUntilDone()
    basic.showNumber(point)
})
radio.onReceivedString(function (receivedString) {
    answer = receivedString
    soundExpression.giggle.playUntilDone()
    basic.showNumber(point)
})
input.onButtonPressed(Button.B, function () {
    if (answer == "B") {
        point += 1
        soundExpression.happy.playUntilDone()
    } else {
        soundExpression.sad.playUntilDone()
    }
    basic.showNumber(point)
})
let point = 0
let answer = ""
radio.setGroup(1)
answer = ""
point = 0
basic.showIcon(IconNames.EigthNote)
soundExpression.hello.playUntilDone()
