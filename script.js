const input = document.querySelectorAll('.otp-input');
// console.log(input)

input.forEach((item) => {
    item.addEventListener('keyup', onInputChange);
    // console.log(item)
})

function onInputChange(event) {
    const inputNum = parseInt(event.target.getAttribute("data-number"));

    if (event.key == "Backspace") {
        moveFocusToPreviousInput(inputNum);
        return;
    }

    moveFocusToNextInput(inputNum);
}

function moveFocusToNextInput(eventOrigination) {
    if (eventOrigination === 5) {
        return;
    }

    input[eventOrigination + 1].focus();
};

function moveFocusToPreviousInput(eventOrigination) {
    if (eventOrigination === 0) {
        return;
    }

    input[eventOrigination - 1].focus();
};