document.getElementById("button1").addEventListener("click", function () {
    let x1 = document.getElementById("x1").value - 0;
    let y1 = document.getElementById("y1").value - 0;
    let x2 = document.getElementById("x2").value - 0;
    let y2 = document.getElementById("y2").value - 0;
    let x3 = document.getElementById("x3").value - 0;
    let y3 = document.getElementById("y3").value - 0;
    let middle1 = [(x1 + x2) / 2, (y1 + y2) / 2];
    let middle2 = [(x1 + x3) / 2, (y1 + y3) / 2];
    let middle3 = [(x2 + x3) / 2, (y2 + y3) / 2];
    document.getElementById("result1").innerHTML = `1:  [${middle1}]    2:  [${middle2}]    3:  [${middle3}]`;
});

document.querySelector("#button2").addEventListener("click", function () {
    var m = document.getElementById("m").value - 0;
    m1 = m;
    var n = document.getElementById("n").value - 0;
    var k = document.getElementById("k").value - 0;
    let i = 0;
    var count2 = 0;
    while (k > 0) {
        i = 0;
        while (i < n && k > 0) {
            i++;
            k--;
            i1 = i;
            count2++;
        }

        m--;
    }
    if (count2 <= n * m1) {
        document.getElementById("result2").innerHTML = `Проданные места закончаться на ${m1 - m} ряду.
Осталось мест в этом ряду ${n - i1}`;
    } else {
        document.getElementById("result2").innerHTML = `Мест не хватило`;
    }
});

document.querySelector("#button3").addEventListener("click", function () {
    let R1 = document.getElementById("R1").value - 0;
    let R2 = document.getElementById("R2").value - 0;
    let cR1 = 0;
    let cR2 = 0;
    for (let x = -R1; x <= R1; x++) {
        for (let y = -R1; y <= R1; y++) {
            if (x * x + y * y <= R1 * R1) {
                cR1++;
            }
        }
    }

    for (let x2 = -R2; x2 <= R2; x2++) {
        for (let y2 = -R2; y2 <= R2; y2++) {
            if (x2 * x2 + y2 * y2 <= R2 * R2) {
                cR2++;
            }
        }
    }
    if (R2 == 0) {
        document.querySelector("#result3").innerHTML = cR1;
    } else {
        document.querySelector("#result3").innerHTML = cR1 - cR2;
    }
});
document.getElementById("button5").addEventListener("click", function () {
    let numbers = [
        document.getElementById("number1").value,
        document.getElementById("number2").value,
        document.getElementById("number3").value,
    ];
    let result5 = [];
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0; i < 3; i++) {
        for (let st of numbers[i]) {
            console.log(numbers[i]);
            min = Math.min(min, st - 0);
            max = Math.max(max, st);
        }
        result5.push(min * max);
        min = Infinity;
        max = -Infinity;
    }
    document.getElementById("result5").innerHTML = `Результат: ${result5}`;
});

document.getElementById("button6").addEventListener("click", function () {
    let array1 = document.getElementById("array1").value;
    let array2 = document.getElementById("array2").value;
    array1 = array1.split(",");
    array2 = array2.split(",");
    for (let i = 0; i < array2.length; i++) {
        array1.push(array2[i]);
    }

    array1 = Array.from(new Set(array1));
    array1.sort();
    document.getElementById("result6").innerHTML = `Результат: [${array1}]`;
});

document.getElementById("button8").addEventListener("click", function () {
    let str = document.getElementById("str").value;
    let newStr = "";
    let str2 = [];
    let maxword = 0;
    str = str.split(" ");
    for (let j = 0; j < str.length; j++) {
        maxword = Math.max(str[j].length, maxword);
        console.log(maxword);
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i].length != maxword) {
            str2.push(str[i]);
        }
    }
    newStr = str2.join(" ");

    console.log(str);
    document.getElementById("result8").innerHTML = `Результат: ${newStr}`;
});
let menuButtons = document.querySelectorAll(".menu-item");
for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener("click", menuHandler);
}
function menuHandler(event) {
    var contents = document.querySelectorAll(".event");
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.add("hide");
    }
    var id = event.target.dataset.content;
    document.getElementById(id).classList.remove("hide");
}
