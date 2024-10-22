/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Corbyn da Gama
 * Created on: Oct 2020
 * This program shows 2 random numbers and compares them together.
*/

// clean up
basic.clearScreen()
basic.showIcon(IconNames.Happy)
    // variables
    let randomNumberOne: number = 0
    let randomNumberTwo: number = 0
    randomNumberOne = randint(0, 99)
    randomNumberTwo = randint(0, 99)

    // Show 1st number
    input.onButtonPressed(Button.A, function(){
        basic.clearScreen()
        basic.showString('#1: ' + randomNumberOne)
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
    })

    // Show 2nd number
    input.onButtonPressed(Button.B, function(){
        basic.clearScreen()
        basic.showString('#2: ' + randomNumberTwo)
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
    })
    
    // compare them
    input.onGesture(Gesture.Shake, function() {
    basic.clearScreen()
    if (randomNumberOne < randomNumberTwo)
        basic.showString(randomNumberOne + '<' + randomNumberTwo)
    else
        basic.showString(randomNumberOne + '>' + randomNumberTwo)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
    })
