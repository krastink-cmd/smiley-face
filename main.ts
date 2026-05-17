input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.ringTone(262)
})
