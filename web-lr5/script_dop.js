window.addEventListener('load', function() {
    let p = document.getElementsByClassName('par');
    for (let i = 0; i < p.length; i++) {
        p[i].textContent = 'замена';
    }
});

let button = document.getElementById('button');
let paragraph = document.getElementById('paragraph');
let p = 0;

button.addEventListener('click', function() {
    if (p < 10) {
        let newP = document.createElement('p');
        newP.textContent = 'гав мяу гав';
        paragraph.appendChild(newP);
        p++;
    } else {
        // Удаляем все параграфы из контейнера
        while (paragraph.firstChild) {
            paragraph.removeChild(paragraph.firstChild);
        }
        p = 0;
    }
});


let query = (function() {
    //приватная функция для проверки, что элемент имеет указанный класс
    function hasClass(elem, className) {
        return elem.classList.contains(className);
    }

    // Публичная функция для поиска элементов по имени класса
    function FindClass(className) {
        let elem = document.getElementsByTagName('*');
        let arr = [];

        for (let i = 0; i < arr.length; i++) {
            if (hasClass(arr[i], className)) {
                elem.push(arr[i]);
            }
        }

        return elem;
    }

    return {
        FindClass: FindClass
    };
})();

function selectAll(tag) {
    let elements = document.getElementsByTagName(tag);
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('selected');
    }
}

function selectDiv() {
    let element = document.getElementById('test_div');
    element.classList.add('selected');
}