let doc = {
    title: "",
    body: "",
    footer: "",
    date: "",
    dop: {
        topic: "",
        body: "",
        footer: "",
        date: ""
    },

    fill: function (title, body, footer, date, dopTopic, dopBody, dopFooter, dopDate){
        this.title = title;
        this.body = body;
        this.footer = footer;
        this.date = date;
        this.dop.topic = dopTopic;
        this.dop.body = dopBody;
        this.dop.footer = dopFooter;
        this.dop.date = dopDate;
    },

    displayDocument: function (id1, id2, id3,id4,id5,id6,id7,id8){
        document.getElementById(id1).innerHTML = this.title.toString();
        document.getElementById(id2).innerHTML = this.body.toString();
        document.getElementById(id3).innerHTML = this.footer.toString();
        document.getElementById(id4).innerHTML = this.date.toString();
        document.getElementById(id5).innerHTML = this.dop.topic.toString();
        document.getElementById(id6).innerHTML = this.dop.body.toString();
        document.getElementById(id7).innerHTML = this.dop.date.toString();
        document.getElementById(id8).innerHTML = this.dop.footer.toString();
    }

}

doc.fill("TITLE", "BODY","FOOTER","DATE","DOP_TOPIC","DOP_BODY","DOP_FOOTER","DOP_DATE");
doc.displayDocument("title", "body", "footer", "date", "topic", "dopB", "dopF", "dopD");


//********************************************************

function arifm(a,b, operation){
    a = parseFloat(a);
    b = parseFloat(b);

    if (operation === '+'){
        return a+b;
    }

    else if(operation === '-'){
        return a-b;
    }

    else if(operation === '*'){
        return a*b;
    }

    else if (operation === '/'){
        return a/b;
    }

    else{
        return "ERROR!";
    }
}

alert(arifm(2,3,'+'));

//********************************************************
function arifmTwo(a,b, operation){
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return "МАСИВИ МАЮТЬ МІСТИТИ ОДНАКОВИЙ РОЗМІР!";
        }
        let result = [];
        for (let i = 0; i < a.length; i++) {
            switch (operation) {
                case "+":
                    result.push(a[i] + b[i]);
                    break;
                case "-":
                    result.push(a[i] - b[i]);
                    break;
                case "*":
                    result.push(a[i] * b[i]);
                    break;
                case "/":
                    result.push(a[i] / b[i]);
                    break;
                default:
                    return "ERROR";
            }
        }
        return result;
    }
    else if (typeof a === "number" && typeof b === "number") {
        if (operation === '+') {
            return a + b;
        } else if (operation === '-') {
            return a - b;
        } else if (operation === '*') {
            return a * b;
        } else if (operation === '/') {
            return a / b;
        } else {
            return "ERROR!";
        }
    }

    else{
        return "ERROR";
    }
}

alert(arifmTwo([2,3,4],[2,3,4],'+'));

//*******************************************************

function arifmThree(a,b, operation){
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length)
        {
            return "МАСИВИ МАЮТЬ МІСТИТИ ОДНАКОВИЙ РОЗМІР!";
        }
        let result = [];
        for (let i = 0; i < a.length; i++) {
            switch (operation) {
                case "+":
                    result.push(a[i] + b[i]);
                    break;
                case "-":
                    result.push(a[i] - b[i]);
                    break;
                case "*":
                    result.push(a[i] * b[i]);
                    break;
                case "/":
                    result.push(a[i] / b[i]);
                    break;
                default:
                    return "ERROR";
            }
        }
        return result;
    }
    else if (typeof a === "number" && typeof b === "number") {
        if (operation === '+') {
            return a + b;
        } else if (operation === '-') {
            return a - b;
        } else if (operation === '*') {
            return a * b;
        } else if (operation === '/') {
            return a / b;
        } else {
            return "ERROR!";
        }
    }

    else if (typeof a === "object" && typeof b === "object") {
        if (a.w && a.q && b.w && b.q)
        {
            switch (operation) {
                case "+":
                    return {result: (a.w + b.w) + ", " + (a.q + b.q)};
                case "-":
                    return {result: (a.w - b.w) + ", " + (a.q - b.q)};
                case "*":
                    return {result: (a.w * b.w) + ", " + (a.q * b.q)};
                case "/":
                    return {result: (a.w / b.w) + ", " + (a.q / b.q)};
                default:
                    return "ERROR";
            }
        } else {
            return "НЕМАЄ ТАКОЇ ВЛАСТИВОСТІ";
        }
    }
    else{
        return "ERROR";
    }
}

alert(arifmThree(3,3,'+'));

//*************************************

let MathFrameWork = {
    result: 0,
    calc: function (a,b){
        this.result = a+b;
    }
}

MathFrameWork.calc(2,7);

document.getElementById("res").innerHTML = MathFrameWork.result;


//**************************************


let MathFrameTwo = {
    a: 'a',
    b: 'b',
    result: 0,

    input: function (){
        this.a = parseFloat(prompt(this.a));
        this.b = parseFloat(prompt(this.b));
    },
    calc: function (){
        this.result = this.a+this.b;
    }
}

MathFrameTwo.input();
MathFrameTwo.calc();

document.getElementById("res_2").innerHTML = MathFrameTwo.result;


//**************************************************

let Manager = {
    name: "",
    surname: "",
    age: ""
};

//******************************************
function Secretary(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

//******************************************

let Numbers = {
    a: 7,
    b:2,
    q:0,
    w:0,
    e:0,
    r:0,

    arifm: function (){
        this.q = this.a+this.b;
        this.w = this.a-this.b;
        this.e = this.a*this.b;
        this.r = this.a/this.b;
    }
}

Numbers.arifm();

alert(Numbers.q);
alert(Numbers.w);
alert(Numbers.e);
alert(Numbers.r);
