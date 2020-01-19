window.onload = function() {
    "use strict";

    const myTextArea = document.getElementById("myTextArea");
    const myTextAreaStyle = myTextArea.style;

    function grow() {
        let oldSize = parseInt(myTextAreaStyle.fontSize);
        if(isNaN(oldSize)) oldSize = 12;
        myTextAreaStyle.fontSize = (oldSize + 2) + "pt";
    }

    function checkIfVowel(letter) {
        const l = letter.toLowerCase();
        return l == 'a' || l == 'e' ||
            l == 'i' || l == 'o' || l == 'u';
    }

    function pigLatinizeWord(word) {
        const firstLetter = word.substring(0,1);

        if(!checkIfVowel(firstLetter)) {
            let consonantClusterSize = 1;
            for(let i = 1; i < word.length; ++i) {
                let letter = word.substring(i, i+1);
                if(!checkIfVowel(letter)) {
                    consonantClusterSize++;
                } else {
                    break;
                }
            }
            word = word.substring(consonantClusterSize, word.length).trim() + word.substring(0,consonantClusterSize);
        }
        return word.trim() + "ay ";
    }

    document.getElementById("IgpayAtinlayBtn").onclick = function() {
        const originalText = myTextArea.value;
        let newText = "";
        let nextWord = "";
        for(let i = 0; i < originalText.length; ++i) {
            let letter = originalText.substring(i, i+1);
            nextWord += letter;
            if(letter == ' ' || letter == '\n' || i >= originalText.length-1) {
                nextWord = pigLatinizeWord(nextWord)
                newText += nextWord;
                nextWord = "";
            }
        }
        myTextArea.value = newText;
    };

    document.getElementById("MalkovitchBtn").onclick = function() {
        const originalText = myTextArea.value;
        let newText = "";
        let nextWord = "";
        for(let i = 0; i < originalText.length; ++i) {
            let letter = originalText.substring(i, i+1);
            nextWord += letter;
            if(letter == ' ' || letter == '\n' || i >= originalText.length-1) {
                if(nextWord.trim().length >= 5)
                    nextWord = "Malkovitch ";
                newText += nextWord;
                nextWord = "";
            }
        }
        myTextArea.value = newText;
    };

    document.getElementById("BiggerDecorationsBtn").onclick = function() {
        setInterval(grow, 500);
    };

    document.getElementById("BlingChk").onchange = function() {
        const body = document.body;
        if(this.checked == true) {
            myTextAreaStyle.fontWeight = "bold";
            myTextAreaStyle.color = "green";
            myTextAreaStyle.textDecoration = "underline";

            body.style.background = "url('hundred-dollar-bill.jpg')";
        } else {
            body.style.background = myTextAreaStyle.textDecoration = myTextAreaStyle.fontWeight = myTextAreaStyle.color = "";
        }
    }
}