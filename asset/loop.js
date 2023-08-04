
for (i = 0; i < 16; i++) {
    f_1(i)
    f_2(i)
    f_3(i)
    function f_1(i) {
        if (i < 16 && i % 2 === 0 && i > 0) {
            console.log(i, 'is even');
        } else if (i != 0) {
            console.log(i, 'is odd')
        }
        if (i < 1) {
            console.log(i, 'is zero')
        }
    }
    function f_2(i) {
        if (i % 2 !== 0 && Math.sqrt(i) % 1 !== 0 && i % 5 !== 0) {
            console.log(i, 'is prime')
        }

        if (i / 2 == 1 || i / 5 == 1) {
            console.log(i, 'is prime')
        }
    }
    function f_3(i) {
        if (Math.sqrt(i) % 1 == 0 && i > 1) {
            console.log(i, 'is perfect square')
        }

    }
}





