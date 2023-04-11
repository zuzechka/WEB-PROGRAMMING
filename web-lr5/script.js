function task1(){
    let x = 6, y=15, z=4;
    document.getElementById("task1").innerHTML = "x = " + x + ", y = " + y + ", z = " + z;

    x += y - ((x++) * z);
    let xRes = "x = " + x;
    document.getElementById("x_one").innerHTML = xRes;

    z = --x - y * 5;
    let zRes = "z = " + z;
    document.getElementById("z_one").innerHTML = zRes;

    y /= x + 5 % z;
    document.getElementById("y_one").innerHTML = "y = " + y;

    z = x++ + y * 5;
    zRes = "z = " + z;
    document.getElementById("z_two").innerHTML = zRes;

    x = y - x++ * z;
    xRes = "x = " + x;
    document.getElementById("x_two").innerHTML = xRes;

}

function task2(){
    let a, b, c;

    //сразу приводим к инт
    a = document.getElementById("inp_1").value;
    a = parseInt(a);
    b = document.getElementById("inp_2").value;
    b = parseInt(b);
    c = document.getElementById("inp_3").value;
    c = parseInt(c);

    let result = (a+b+c)/3;
    document.getElementById("res_arf").innerHTML = String(result);
}

function task3(){
    let r, h;

    r = document.getElementById("inp_4").value;
    r = parseFloat(r);

    h = document.getElementById("inp_5").value;
    h = parseFloat(h);

    let v = Math.PI*r*r*h;
    let s = 2*Math.PI*r*(r+h);

    document.getElementById("v").innerHTML = String(v);
    document.getElementById("s").innerHTML = String(s);
}

function task4(){
    let a, b;
    a = document.getElementById("inp_a").value;
    a = parseInt(a);

    b = document.getElementById("inp_b").value;
    b = parseInt(b);

    if(a<b){ //проверка
        let sum = 0;
        a++; //сразу начинаем с числа которое в промежутке
        if(a===b){ //доп проверка если нету в промежутке целых чисел
            alert("Цілих чисел на проміжку немає!")
        }

        else{
            let res = "";
            for (let i = a; i < b; i++) {
                if (i % 2 !== 0) { //проврека на парность
                    res += i + ' ';
                }
            }

            document.getElementById("num").innerHTML = res;
            for(;a<b;a++) //сумма
            {
                sum+=a;
            }
            document.getElementById("sum").innerHTML = String(sum);
        }
    }

    else{
        alert("Помилка! Число А повинно бути менше, ніж число В!")
    }
}

function task5(){
    let n;
    n = document.getElementById("inp_tov").value;
    n = parseInt(n);

    let factorial = 1, i = 1;

    do {
        factorial *= i;
        i++;
    } while (i <= n);

    document.getElementById("fact").innerHTML = String(factorial);
}

function task6(){
    let col = 15, row = 5, res = "";
//прямоугольник
    for(let i = 0;i<row;i++)
    {
        for(let j =0;j<col;j++){
            res+="❤ "
        }
        res+="<br>"
    }
    document.getElementById("rect").innerHTML = res;

    res = "";
//прямоугольный треугольник
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < i + 1; j++) {
            res += "❤\n";
        }
        res += "<br>";
    }
    document.getElementById("rect_tr").innerHTML = res;
//равносторонний треугольник
    res = "";
    let a = 7, b = 7, c = 1;
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            res+= "&nbsp\n";
        }
        for (let j = 0; j < c; j++) {
            res+="❤";
        }
        b -= 1;
        c += 2;
        res += "<br>";
    }
    document.getElementById("triangle").innerHTML = res;
//ромб
    res = "";
    let h = 5;
    for (let i = -h; i <= h; i++) {
        for (let j = -h; j <= h; j++) {
            if (Math.abs(i) + Math.abs(j) === h) {
                res += '❤';
            }
            else {
                res += '*';
            }
        }
        document.getElementById("romb").innerHTML = res;
        res+="<br>"
    }
}

function task7(){
    let n;
    n = document.getElementById("inp_n").value;
    n = parseInt(n);

    let arr = [];
    let sum = 0;

    for (let i = 0; i < n; i++ ) {
        arr.push( Math.round( Math.random() * 100 )); //заполняем рандомныими числами
        sum+=arr[i];
    }

    let max = 0;

    for (let i = 0; i < n; i++ ) { //макс число
        if(arr[i]>max){
            max = arr[i];
        }
    }
    let min = max;

    //мин число
    for (let i = 0; i < n; i++ ) {
        if(arr[i]<min){
            min = arr[i];
        }
    }
//среднее арифм
    let arifm = sum/n;

    //непарные числа
    let result = "";
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 !== 0) {
            result += arr[i] + ' ';
        }
    }

    //вывод
    document.getElementById("arr").innerHTML = String(arr);
    document.getElementById("max").innerHTML = String(max);
    document.getElementById("min").innerHTML = String(min);
    document.getElementById("sum_arr").innerHTML = String(sum);
    document.getElementById("arifm_arr").innerHTML = String(arifm);
    document.getElementById("num_arr").innerHTML = result;
}

function task8(){
    let n=5;
    let arr = [];

    let resArr = "";

    //создание двумерного массива и сразу заполняем его числами также с отрцаительными значениями
    for (let i = 0; i < n; i++ ) {
        arr[i] = [];
       for(let j = 0; j < n; j++){
           arr[i][j] = Math.round( Math.random() * (15-(-10)+1))+(-10);
       }
    }

    //вывод массива
    for(let i = 0; i< n; i++){
        for(let j = 0; j<n; j++){
            resArr += arr[i][j] + " ";
        }
        resArr+="<br>";
    }
    document.getElementById("mas").innerHTML = resArr;

    resArr = "";
    for(let i = 0; i< n; i++){
        for(let j = 0; j<n; j++){
            if(arr[i][j]>0){ //если больше 0 то 1
                arr[i][j] = 1;
            }
            else{ //противном случае 0
                arr[i][j] = 0;
            }
        }
    }

    //вывод нового массива
    for(let i = 0; i< n; i++){
        for(let j = 0; j<n; j++){
            resArr += arr[i][j] + " ";
        }
        resArr+="<br>";
    }
    document.getElementById("new_mas").innerHTML = resArr;

}

function task9(){
    let select = document.querySelector("select"); //выделяем нужный селектор
    let a, b;
    a = document.getElementById("inp_num1").value;
    a = parseFloat(a);

    b = document.getElementById("inp_num2").value;
    b = parseFloat(b);

    let res = 0;

    //если значение в селекторе совпадает значит выполняем операцию
    if(select.value === "one"){
        res = a+b;
    }

    if(select.value === "two"){
        res = a-b;
    }

    if(select.value === "three"){
        res = a*b;
    }

    if(select.value === "four"){
        if(b===0){
            alert("Не можна ділити на 0!") //доп проверка
        }

        else{
            res = a/b;
        }
    }
    //вывод
    document.getElementById("res_operation").innerHTML = String(res);
}

function task10(){
    let n;
    n = document.getElementById("inp_number").value;
    n = parseInt(n);
    let res = "";

    if(n>0){
        res += "Число додатнє!"
    }

    else if (n<0){
        res += "Число від'ємне!"
    }

    else{ //доп проверка если 0
        res += "Число дорінює 0!"
    }

    document.getElementById("pol_otr").innerHTML = res;
    res = "";

    if(n=== 1 || n<1){ //проверяем если 1 или меньше 1
        res += "Число повинно бути більше 1!"
    }

    else{ //в противном случае
        for(let i = 2; i<n; i++) //начинаем с 2 - 2 простое число
        {
            if (n%i===0){ //число составное
                res = "";
                res += "Число складене!"
                break;
            }

            else{ //число простое
                res = "";
                res += "Число просте!"
            }
        }
        if (n===2){ //2 число в любом случае простое
            res += "Число просте!"
        }
    }
    document.getElementById("prost").innerHTML = res; //Вывод
    let result = "";

    if(res === "Число просте!"){ //если число простое значит оно не сможет делиться на эти числа тем более на несколько
        result += "Число просте, тому воно не може ділитися на хоча б одне з цих чисел!"
    }

    else{
        if(n %2 === 0 || n % 3 === 0 || n % 5 === 0 || n%6 === 0 || n % 9 === 0){ //на хотя бы одно из этих чисел
            result += "Число ділиться на одне з цих чисел (2,3,5,6,9)!"
        }

        else{
            result += "Число не ділиться на 2,3,5,6,9!"
        }
    }
    document.getElementById("del").innerHTML = result;
}

function task11(){
    let a = 5, b = 10;
    let res = "";

    //все числа типа number
    res += "Число а = " + a +' (' + typeof(a) + "), число b = " + b+' (' + typeof(b) + ')';

    document. getElementById("nums_value").innerHTML = res;

    let c;
    c = a+b;
    res = "Add = "+ c;
    document. getElementById("nums_add").innerHTML = res;
    c = a-b;
    res = "Sub = " + c;
    document. getElementById("nums_sub").innerHTML = res;
    c = a*b;
    res = "Mul = " + c;
    document. getElementById("nums_mul").innerHTML = res;
    c = a/b;
    res = "Div = " + c;
    document. getElementById("nums_div").innerHTML = res;
}

function task12(){
    let col = 15, row = 5, res = "";

    //делаем прямоугольник
    for(let i = 0;i<row;i++)
    {
        for(let j =0;j<col;j++){
            res+="❤ "
        }
        res+="<br>"
    }
    document.getElementById("rect_2").innerHTML = res;
}

function task13(){
    let n;
    n = document.getElementById("inp_n_arr").value;
    n = parseInt(n);
    let arr = [];

    //заполняем случайными числами
    for (let i = 0; i < n; i++ ) {
        arr.push( Math.round( Math.random() * 100 ));
    }

    document.getElementById("array").innerHTML = String(arr);

    //наоборот
    let res = "";
    for(let i = n-1;i>=0;i--){
        res+=arr[i] + ',';
    }

    document.getElementById("rev_array").innerHTML = res;
}

function task14(){
    //создаем класс
    class MyMath {
        static Calculate(a, b, c) {
            return (a + b + c) / 3;
        }
    }
    let a = 10, b = 4, c = 2;

    let res = "";
    res += "Середнє арифтметичне = " + MyMath.Calculate(a, b, c);

    document.getElementById("class_arifm").innerHTML = res;
}
task1();
task6();
task8();
task11();
task12();
task14();
