var test = require('tape');
var romanizer = require("./romanizer.js")

test('Tape is working', function(t){
    t.equal(1, 1, 'One should equal one')
    t.end();
});

test('Romnanizer output', function(t){
    var actual = romanizer(1);
    var expected = 'I';
    t.equal(actual, expected, 'One should output I');
    t.end();
});
test('Romnanizer output', function(t){
    var actual = romanizer(2);
    var expected = 'II';
    t.equal(actual, expected, 'Two should output II');
    t.end();
});
test('Romnanizer output', function(t){
    var actual = romanizer(3);
    var expected = 'III';
    t.equal(actual, expected, 'Three should output III');
    t.end();
});
test('Romnanizer output', function(t){
    var actual = romanizer(4);
    var expected = 'IV';
    t.equal(actual, expected, 'Four should output IV');
    t.end();
});
test('Romnanizer output', function(t){
    var actual = romanizer(5);
    var expected = 'V';
    t.equal(actual, expected, 'Five should output V');
    t.end();
});

test('Romnanizer output', function(t){
    var actual = romanizer(6);
    var expected = 'VI';
    t.equal(actual, expected, 'Six should output VI');
    t.end();
});

test('Romnanizer output', function(t){
    var actual = romanizer(7);
    var expected = 'VII';
    t.equal(actual, expected, 'Seven should output VII');
    t.end();
});

test('Romnanizer output', function(t){
    var actual = romanizer(8);
    var expected = 'VIII';
    t.equal(actual, expected, 'Eight should output VIII');
    t.end();
});

test('Romnanizer output', function(t){
    var actual = romanizer(9);
    var expected = 'IX';
    t.equal(actual, expected, 'Nine should output IX');
    t.end();
});

test('Romnanizer output', function(t){
    var actual = romanizer(10);
    var expected = 'X';
    t.equal(actual, expected, 'Ten should output X');
    t.end();
});

test('Romnanizer output', function(t){
    var actual = romanizer(14);
    var expected = 'XIV';
    t.equal(actual, expected, 'Fourteen should output XIV');
    t.end();
});

test('Romnanizer output', function(t){
    var actual = romanizer(15);
    var expected = 'XV';
    t.equal(actual, expected, 'Fifteen should output XV');
    t.end();
});

test('Romnanizer output', function(t){
    var actual = romanizer(19);
    var expected = 'XIX';
    t.equal(actual, expected, 'Nineteen should output XIX');
    t.end();
});

test('Romnanizer output', function(t){
    var actual = romanizer(20);
    var expected = 'XX';
    t.equal(actual, expected, 'Twenty should output XX');
    t.end();
});

test('Romnanizer output', function(t){
    var actual = romanizer(30);
    var expected = 'XXX';
    t.equal(actual, expected, 'Thirty should output XXX');
    t.end();
});

test('Romnanizer output', function(t){
    var actual = romanizer(40);
    var expected = 'XL';
    t.equal(actual, expected, 'Fourty should output XL');
    t.end();
});

test('Romnanizer output', function(t){
    var actual = romanizer(50);
    var expected = 'L';
    t.equal(actual, expected, 'Fifty should output L');
    t.end();
});

test('Romnanizer output', function(t){
    var actual = romanizer(60);
    var expected = 'LX';
    t.equal(actual, expected, 'Sixty should output LX');
    t.end();
});

test('Romnanizer output', function(t){
    var actual = romanizer(90);
    var expected = 'XC';
    t.equal(actual, expected, 'Ninety should output XC');
    t.end();
});

test('Romnanizer output', function(t){
    var actual = romanizer(100);
    var expected = 'C';
    t.equal(actual, expected, 'One-hundred should output C');
    t.end();
});

test('Romnanizer output', function(t){
    var actual = romanizer(150);
    var expected = 'CL';
    t.equal(actual, expected, 'One-hundred and fifty should output CL');
    t.end();
});

test('Romnanizer output', function(t){
    var actual = romanizer(400);
    var expected = 'CD';
    t.equal(actual, expected, 'Four-hundred should output CD');
    t.end();
});
test('Romnanizer output', function(t){
    var actual = romanizer(500);
    var expected = 'D';
    t.equal(actual, expected, 'Five-hundred should output D');
    t.end();
});
test('Romnanizer output', function(t){
    var actual = romanizer(900);
    var expected = 'CM';
    t.equal(actual, expected, 'Nine-hundred should output CM');
    t.end();
});
test('Romnanizer output', function(t){
    var actual = romanizer(1000);
    var expected = 'M';
    t.equal(actual, expected, 'One-thousand should output M');
    t.end();
});
test('Romnanizer output', function(t){
    var actual = romanizer(-1);
    var expected = 'The romans had no representation for less than 1';
    t.equal(actual, expected, 'Less than zero should return a string explanation');
    t.end();
});
test('Romnanizer output', function(t){
    var actual = romanizer(5001);
    var expected = "There's no easy way to represent numb ers over 4999 in Roman numerals"
    ;
    t.equal(actual, expected, '5000 or over should return a string explanation');
    t.end();
});




