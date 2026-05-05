enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("name", 0)
})
radio.sendMessage(RadioMessage.message1)
radio.setGroup(41)
basic.forever(function () {
	
})
