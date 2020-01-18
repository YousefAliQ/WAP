/*
Usage : the maxOfTwoNumbers takes two numbers as arguments and returns the largest of them.
 */
$("#maxOfTwoNumbers").click(function (evt) {

    const num1 = $("#max2Number1").val();
    const num2 = $("#max2Number2").val();
    const result = document.getElementById("max2Result");
    if (num1.trim().toString() !== "" && num2.trim().toString() !== "") {
        const max = maxOf(num1, num2);
        result.className = "success";
        result.innerText = "The max number is : " + max;
    } else {
        result.className = "failed";
        result.innerText = "Please, enter two numbers!";
    }
});

/*
Usage : the maxOfThreeNumbers method takes three numbers as arguments and returns the largest of them.
 */

$("#maxOfThreeNumbers").click(function (evt) {

    const num1 = $("#max3Number1").val();
    const num2 = $("#max3Number2").val();
    const num3 = $("#max3Number3").val();
    const result = document.getElementById("max3Result");
    if (num1.trim().toString() !== "" && num2.trim().toString() !== "" && num3.trim().toString() !== "") {
        const max = maxOf(num1, maxOf(num3, num2));
        result.className = "success";
        result.innerText = "The max number is : " + max;
    } else {
        result.className = "failed";
        result.innerText = "Please, enter three numbers!";
    }
});

/*
Usage : the isVowel methos takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
 */

$("#isVowel").click(function (evt) {
    const char = $("#checkForVowel").val().toString();
    const result = document.getElementById("isVowelResult");
    if (char.trim().toString() !== "") {
        if (char.toLowerCase().includes("a")
            || char.toLowerCase().includes("e")
            || char.toLowerCase().includes("i")
            || char.toLowerCase().includes("o")
            || char.toLowerCase().includes("u")) {
            result.className = "success";
            result.innerText = "The '" + char + "' is a vowel.";
        } else {
            result.className = "failed";
            result.innerText = "The '" + char + "' is NOT a vowel.";
        }
    } else {
        result.className = "failed";
        result.innerText = "Please, enter a Char!";
    }
});

/*
Usage : the sumArray method sums all the numbers in an array of numbers.
 For example, sum([1,2,3,4]) should return 10
 */

$("#sumArray").click(function (evt) {
    const enteredArray = $("#sumArrayInput").val().trim().split(" ");
    const result = document.getElementById("sumArrayResult");
    if (enteredArray.length >= 2) {

        result.className = "success";
        result.innerText = "The sum is : " + enteredArray.reduce(getSum, 0);

    } else {
        if (enteredArray.length == 1) {
            result.className = "success";
            result.innerText = "The sum is : " + enteredArray[0].trim();
        } else {
            result.className = "failed";
            result.innerText = "Please, enter an array of integers separated by spaces!";
        }

    }
});
/*
Usage : the multiplyArray multiplies all the numbers in an array of numbers.
        For example,  multiply([1,2,3,4]) should return 24.
 */
$("#multiplyArray").click(function (evt) {
    const enteredArray = $("#multiplyArrayInput").val().trim().split(" ");
    const result = document.getElementById("multiplyArrayResult");
    if (enteredArray.length >= 2) {

        result.className = "success";
        result.innerText = "The multiply is : " + enteredArray.reduce(getMultiply, 1);

    } else {
        if (enteredArray.length == 1) {
            result.className = "success";
            result.innerText = "The multiply is : " + enteredArray[0].trim();
        } else {
            result.className = "failed";
            result.innerText = "Please, enter an array of integers separated by spaces!";
        }

    }
});

/*
Usage : the reverse method computes the reversal of a string.
        For example, reverse("jag testar") should return the string "ratset gaj".
 */

$("#reverse").click(function (evt) {
    const enteredString = $("#reverseInput").val().trim();
    const result = document.getElementById("reverseResult");
    if (enteredString.length >= 2) {

        result.className = "success";
        result.innerText = "The reverse of " + enteredString + " is : " + enteredString.split("").reverse().join("");

    } else {
        if (enteredString.length == 1) {
            result.className = "success";
            result.innerText = "The reverse is : " + enteredString.trim();
        } else {
            result.className = "failed";
            result.innerText = "Please, enter any string!";
        }

    }
});

/*
Usage : the findLongestWord method takes an array of words
        and returns the length of the longest one.
 */

$("#findLongestWord").click(function (evt) {
    const enteredString = $("#findLongestWordInput").val().trim().split(" ");
    const result = document.getElementById("findLongestWordResult");
    if (enteredString.length >= 1) {
        const results = enteredString.map(x => x.length);
        result.className = "success";
        result.innerText = "The longest word is  " + results.reduce(getBigger, results[0]);

    } else {
        result.className = "failed";
        result.innerText = "Please, enter an array of words separated by spaces!";
    }
});

/*
Usage : the filterLongWords method takes an array of words
        and an integer i and returns the array of words that
        are longer than i.
 */
$("#filterLongWords").click(function (evt) {
    const enteredString = $("#filterLongWordsInput").val().trim().split(" ");
    const enteredi = $("#ifilterLongWordsInput").val().trim();

    const result = document.getElementById("filterLongWordsResult");
    if (enteredString.length >= 1 && enteredi.trim() !== "") {
        result.className = "success";
        result.innerText = "The words are : " + enteredString.filter(x => wordLongerThan(x, enteredi)).toString();

    } else {
        result.className = "failed";
        result.innerText = "Please, enter an array of words separated by spaces!";
    }
});

/*
Usage : test on the map/filter/reduce as follows:

a) multiply each element by 10;

b) return array with all elements equal to 3;

c) return the product of all elements;

and testing the console.assert.
 */
console.log("Modified the jsfiddle on the map/filter/reduce slide as follows:");
console.log("==============================================================");
console.log("a) multiply each element by 10 :");

const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
    return elem * 10;
})
console.log(b);

console.log("b) return array with all elements equal to 3 :");

const c = a.filter(function (elem, i, array) {
    return elem === 3;
});
console.log(c);

console.log("c) return the product of all elements :");

const d = a.reduce(function (prevValue, elem, i, array) {
    return prevValue * elem;
});
console.log(d);

const d2 = a.find(function (elem) {
    return elem > 1;
}); //3
const d3 = a.findIndex(function (elem) {
    return elem > 1;
}); //1
/*
 Note : The following two assertions will failed. Its for testing purposes.
 */
console.log("The following two assertions will failed. Its for testing purposes.");
console.assert(d2 === 0, {"find elem > 1": 1, errorMsg: "failed! should equal 3"});
console.assert(d3 === 0, {"findIndex elem > 1": 2, errorMsg: "failed! should equal 1"});

function wordLongerThan(x, enteredi) {
    return (x.length > parseInt(enteredi));
}

/*
Usage: getBigger method takes two arguments and returns the bigger value between them.
 */
function getBigger(big, num) {
    if (parseFloat(num) > parseFloat(big))
        return parseFloat(num);
    else
        return parseFloat(big);
}

/*
Usage: getSum method takes two arguments and returns the summation of them.
 */
function getSum(total, num) {
    return parseFloat(total) + parseFloat(num);
}

/*
Usage: getMultiply method takes two arguments and returns the multiplication of them.
 */
function getMultiply(total, num) {
    return parseFloat(total) * parseFloat(num);
}

/*
Usage: maxOf method takes two arguments and returns the maximum value between them.
 */
function maxOf(num1, num2) {
    return Math.max(parseFloat(num1), parseFloat(num2));
}

/*
Usage: max2Number1 reset the result value.
 */

$("#max2Number1").change(function (evt) {
    const result = document.getElementById("max2Result");
    result.className = "";
    result.innerText = "";
});
/*
Usage: max2Number2 reset the result value.
 */

$("#max2Number2").change(function (evt) {
    const result = document.getElementById("max2Result");
    result.className = "";
    result.innerText = "";
});
/*
Usage: max3Number1 reset the result value.
 */

$("#max3Number1").change(function (evt) {
    const result = document.getElementById("max3Result");
    result.className = "";
    result.innerText = "";
});
/*
Usage: max3Number2 reset the result value.
 */

$("#max3Number2").change(function (evt) {
    const result = document.getElementById("max3Result");
    result.className = "";
    result.innerText = "";
});
/*
Usage: max3Number3 reset the result value.
 */

$("#max3Number3").change(function (evt) {
    const result = document.getElementById("max3Result");
    result.className = "";
    result.innerText = "";
});
/*
Usage: checkForVowel reset the result value.
 */

$("#checkForVowel").change(function (evt) {
    const result = document.getElementById("isVowelResult");
    result.className = "";
    result.innerText = "";
});
/*
Usage: sumArrayInput reset the result value.
 */

$("#sumArrayInput").change(function (evt) {
    const result = document.getElementById("sumArrayResult");
    result.className = "";
    result.innerText = "";
});
/*
Usage: multiplyArrayInput reset the result value.
 */

$("#multiplyArrayInput").change(function (evt) {
    const result = document.getElementById("multiplyArrayResult");
    result.className = "";
    result.innerText = "";
});
/*
Usage: reverseInput reset the result value.
 */

$("#reverseInput").change(function (evt) {
    const result = document.getElementById("reverseResult");
    result.className = "";
    result.innerText = "";
});
/*
Usage: findLongestWordInput reset the result value.
 */

$("#findLongestWordInput").change(function (evt) {
    const result = document.getElementById("findLongestWordResult");
    result.className = "";
    result.innerText = "";
});
/*
Usage: filterLongWordsInput reset the result value.
 */

$("#filterLongWordsInput").change(function (evt) {
    const result = document.getElementById("filterLongWordsResult");
    result.className = "";
    result.innerText = "";
});




