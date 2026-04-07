// Print from n to 1;

function printNto1(num) {
    if (num == 0) return;
    console.log(num);
    num--;
    printNto1(num);
}

// printNto1(10);


// Print from 1 to n ;

function print1toN(num, base) {
    if (base > num ) return;
    console.log(base);
    base++;
    print1toN(num, base);
}

print1toN(10, 0);


