export function resOutput(input) {
    if (input === 0) {
        return './assets/galaxy00.jpeg';
    } else if (input > 7) {
        return './assets/galaxy03.jpg';
    } else if (input > 3) {
        return './assets/galaxy02.jpg';
    } else {
        return './assets/galaxy01.jpg';
    }
}

export function empOutput(input) {
    if (input === 0) {
        return './assets/sky00.jpeg';
    } else if (input > 7) {
        return './assets/sky03.jpeg';
    } else if (input > 3) {
        return './assets/sky02.jpeg';
    } else {
        return './assets/sky01.jpeg';
    }
}

export function endOutput(input) {
    if (input === 0) {
        return './assets/ocean00.jpg';
    } else if (input > 7) {
        return './assets/ocean03.jpg';
    } else if (input > 3) {
        return './assets/ocean02.jpg';
    } else {
        return './assets/ocean01.jpg';
    }
}

export function faceOutput(input) {
    if (input === 0) {
        return 'lightsteelblue';
    } else if (input > 21) {
        return 'orangered';
    } else if (input > 9) {
        return 'lemonchiffon';
    } else {
        return 'skyblue';
    }
}

export function faceBgOutput(input) {
    if (input === 0) {
        return 'mintcream';
    } else if (input > 21) {
        return 'mistyrose';
    } else if (input > 9) {
        return 'peru';
    } else {
        return 'lavender';
    }
}