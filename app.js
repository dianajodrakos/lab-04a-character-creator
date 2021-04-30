// import functions and grab DOM elements

import { resOutput, empOutput, endOutput, faceOutput, faceBgOutput } from '../utils.js';

const resInput = document.querySelector('#res-input');
const empInput = document.querySelector('#emp-input');
const endInput = document.querySelector('#end-input');
const resImg = document.querySelector('#res-img');
const empImg = document.querySelector('#emp-img');
const endImg = document.querySelector('#end-img');
const faceColor = document.querySelector('#face');
const faceBgColor = document.querySelector('#center');
const inputButton = document.querySelector('#button');


// set event listeners to update state and DOM
inputButton.addEventListener ('click', () => {
    const resValue = Number(resInput.value);
    const empValue = Number(empInput.value);
    const endValue = Number(endInput.value);
    const totalValue = resValue + empValue + endValue;
    resImg.src = resOutput(resValue);
    empImg.src = empOutput(empValue);
    endImg.src = endOutput(endValue);
    faceColor.style.color = faceOutput(totalValue);
    faceBgColor.style.background = faceBgOutput(totalValue);
    console.log(resImg.src, empImg.src, endImg.src, faceColor, faceBgColor, totalValue);
});