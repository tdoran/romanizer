var values = [
    {
        arabic: 1000,
        roman: 'M'
    },
    {
        arabic: 900,
        roman: 'CM'
    },
    {
        arabic: 500,
        roman: 'D'
    },
    {
        arabic: 400,
        roman: 'CD'
    },
    {
        arabic: 100,
        roman: 'C'
    },
    {
        arabic: 90,
        roman: 'XC'
    },
    {
        arabic: 50,
        roman: 'L'
    },
    {
        arabic: 40,
        roman: 'XL'
    },
    {
        arabic: 10,
        roman: 'X'
    },
    {
        arabic: 9,
        roman: 'IX'
    },
    {
        arabic: 5,
        roman: 'V'
    },
    {
        arabic: 4,
        roman: 'IV'
    },
    {
        arabic: 1,
        roman: 'I'
    }
];

function romanizer(num){
    if(num < 0){
        return "The romans had no representation for less than 1";
    }
    if(num >= 5000){
        return "There's no easy way to represent numb ers over 4999 in Roman numerals";
    }
    var remaining = num;
    var result = "";
     
    values.forEach(function(value){
        while (remaining >= value.arabic){
            result += value.roman;
            remaining -= value.arabic;
        }
    });
    return result;
}



module.exports = romanizer;