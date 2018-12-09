
for (var i = 1; i <= 100; i++) {
    if (isDivisible(i,3)) {
        document.write("Fizz");
    }

    if (isDivisible(i,5)) {
        document.write("Buzz");
    }

    if (!isDivisible(i,3) && !isDivisible(i,5)) {
        document.write(i);
    }

    document.write("<br/>");
}

function isDivisible(number, divisor) {
    if (number % divisor == 0){
        return true;
    } else {
        return false;
    }
}