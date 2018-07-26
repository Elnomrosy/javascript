var pos = 0, test, test_status, question, choice, choices, cha, chb, chc, correct = 0, counter = 0;
var eee = [];

var questions = [
    ["what is 10+4 ?", "12", "14", "16", "b"], ["what is 20-9 ?", "7", "13", "11", "c"], ["what is 7*3 ?", "21", "24", "25", "a"], ["what is 8/2 ?", "10", "2", "4", "c"]
];

function doc(x) {
    return document.getElementById(x);
}

function increaseQuestion() {
    test = doc("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2>your score is  " + " " + correct + " " + "out of" + " " + questions.length + "</h2>";
        doc("test_status").innerHTML = "test completed";
        pos = 0;
        correct = 0;
        return false;
    }
    doc("test_status").innerHTML = "question " + (pos + 1) + " of " + questions.length;
    question = questions[pos][0];
    cha = questions[pos][1];
    chb = questions[pos][2];
    chc = questions[pos][3];
    counter = counter + 1;
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input type='radio' name='choices' id='o' value='a'>" + cha + "<br>";
    test.innerHTML += "<input type='radio' name='choices' id='t' value='b' >" + chb + "<br>";
    test.innerHTML += "<input type='radio' name='choices'  id='r' value='c' >" + chc + "<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'id='g' >submit answer </button>";
    test.innerHTML += "<button onclick='decreaseQuestion()'id='hy' >previous </button>";
}

function checkAnswer() {
    choices = document.getElementsByName("choices");

    var d = document.getElementById("o");
    var y = document.getElementById("t");
    var e = document.getElementById("r");

    if ((y).checked || (d).checked || (e).checked) {
        for (var i = 0; i < choices.length; i++) {
            if (choices[i].checked) {
                choice = choices[i].value;
                eee[i] = choices[i].value;
            }
        }
        if (choice === questions[pos][4]) {
            correct++;
        }
        pos++;
        increaseQuestion();
    }
    else {
        alert("you should choose one")
    }
}

window.addEventListener("load", increaseQuestion, false);

function decreaseQuestion() {
    test = doc("test");
    if (pos > 0) {
        doc("test_status").innerHTML = "question " + (pos) + " of " + questions.length;

        pos--;

        question = questions[pos][0];
        cha = questions[pos][1];
        chb = questions[pos][2];
        chc = questions[pos][3];


        test.innerHTML = "<h3>" + question + "</h3>";

        test.innerHTML = "<h3>" + question + "</h3>";
        test.innerHTML += "<input type='radio' name='choices' id='o' value='a'>" + cha + "<br>";
        test.innerHTML += "<input type='radio' name='choices' id='t' value='b' >" + chb + "<br>";
        test.innerHTML += "<input type='radio' name='choices'  id='r' value='c' >" + chc + "<br><br>";
        test.innerHTML += "<button onclick='checkAnswer()'id='g' >submit answer </button>";
        test.innerHTML += "<button onclick='decreaseQuestion() 'id='hy' >perivious </button>";
    }
    else {
        alert("no");
    }

}


