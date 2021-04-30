// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { resOutput } from '../utils.js';




const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expects
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('input high value, return cool galaxy img', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = './assets/galaxy03.jpg';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = resOutput(9);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('input mid value, return ok galaxy img', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = './assets/galaxy02.jpg';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = resOutput(5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('input 0 value, return boring galaxy img', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = './assets/galaxy00.jpeg';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = resOutput(0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});