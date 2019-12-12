'use strict'

var cities = ['Dnepr', 'Kiev', 'Lviv'];
var names = ['Ivan', 'Julia', 'Nazar'];

function merge (ar1, ar2){
    var result = [];
    for (var item of ar1) {
        result.push(item);
    }
    for (var item of ar2) {
        result.push(item);
    }
    return result;
}

function render(ar, container_id) {
    var html = '';

    for(var item of ar){
        html+= '<li>' + item + '</li>';

    }
    var con = document.querySelector('#list');
    con.innerHTML = html;
}

var mergedAr = merge (cities, names);

console.log(mergedAr);












var btn = document.querySelector('#btn');

var user = {
   name: 'vasa',
}

var show = function (event) {
   if(event.type === 'click'){
      event.target.style = 'background: red';
   }

   else if(event.type === 'dblclick'){
      event.target.style = 'background: green';
   }

}.bind(user);

btn.onclick = show;
btn.ondblclick = show;


// !!!!!!!!!!!!!!!!!!  метод .bind - сохраняет базовый объект в this который мы указали в скобках ()







var btn = document.querySelector('#btn');
var text = document.querySelector('#text-block');
var color = document.querySelector('#color-block');
var container = document.querySelector('#block-list');

function remove () {
   this.parentNode.remove();
}

btn.onclick = function (){ 
   var block = document.createElement('p');
   var rem = document.createElement('span');
   rem.innerHTML = 'x';

   rem.onclick = remove;

   block.innerHTML = text.value;
   block.appendChild(rem);

   block.style.backgroundColor = color.value;

   container.appendChild(block);
}





var lists = document.querySelectorAll('h1');

var myClick = function () {
   alert(this.innerHTML);
}

lists.forEach(function (element, index) {
   element.onclick = myClick;
});





// =========================== ВИДЫ ФУНЦИЙ! ================================

show();

function show () {
   alert('DFDFDFDF');
}

// 1 - Функция объявлена в стиле Declaration, можно вызывать её раньше чем она объявлена.




var show = function () {
   alert('sdfsdfdf');
}

// 2 - Функция объявлена в стиле Expression



var cart = function (x) {
   x();
}

cart(show);

// 3 - Функция объвлена способом CallBack одна функция передана по ссылке другой функции.




(function () {
   var a = 5;
   var b = 10;
   return a + b;
})();

// 4 - Анонимный способ задания функции, берёться во внешние скобки () и как правило сразу вызывается.



var hi = function (message) {
   return `hello ${message}`;
}

var hi2 = (name, message) => {
   return `hello ${message}`;
};

alert(hi2('Ivan','friend'));



// 5 - СТРЕЛОЧНЫЕ ФУНКЦИИ!!!!




// ================== НАСЛЕДОВАНИЕ =================


// ======================= НАСЛЕДОВАНИЕ ===========================

var pay = {
   name: 'PAY',
   send: function() {
       console.log(`send ${this.name}`);
   }
}

var privat = {
   __proto__: pay,
   name: 'PRIVAT',
   sendCard: function() {
       console.log('SEND CARD');
   }
}

Pumb.prototype = pay;

function Pumb(price, product) {
   this.price = price;
   this.product = product; 
   this.name = 'PUMB';
   this.sendCard = function() {
   console.log('SEND MONEY');
 }
}

console.log(new Pumb(2600, 'phone'));
console.log(new Pumb(1700, 'notebook'));




var parentObj = {
   objectMethod: function() {
       console.log('HELLO ALL OBJECT METHOD');
   }
}

ParentArr.prototype = parentObj;

function ParentArr(params) {
   this.name = 'IVANNNNNN'
   this.push = function() {
       console.log('PUSH');
   }
   this.filter = function() {
       console.log('FILTER');
   }
}

MyArr.prototype = new ParentArr();

// Конструктор для создания массива 
function MyArr() {
   for(var j in arguments) {
       this[j] = arguments[j];
   }
   this.length = arguments.length;
}


ParentHandler.prototype = parentObj;

function ParentHandler(params) {
   this.addHandler = function() {
       console.log('addHandler');
   }
}

MyHandler.prototype = new ParentHandler();

// Конструктор для создания массива 
function MyHandler(data) {
   this.data = data
   this.MyHandlerMethod = function() {
       console.log('MyHandlerMethod');
   }
}

var users = new MyHandler(123);
var names = new MyArr('ivan', 'juli', 'nazik');
var cities = new MyArr('Dnipro', 'Kyiv', 'Lviv');

console.log(users);
console.log(names);
console.log(cities);

cities.push();
cities.objectMethod();






// ================== Самостоятельное задание =====================


// Задание: вывести на страницу массив в лишки 

var arr = ['ivan', 'juli', 'nazar', 'alis'];    

function NewArr(data, id) {
    
    var container = '';
    this.init = function () {
        for(var i of data) {
            container += `<li> ${i} </li>`;
        }

        document.querySelector(id).innerHTML = container;
    }
}

var list = new NewArr(arr, "#list");

list.init();







// ======================= Методы объявления объектов ===========================

var a = 'age';

var obj = {
    name: 'Ivan',
    [a]: '36',

    toString() {
        return this.name;
    }

    getName() {
        console.log(this.age);
    }
}

obj.getName();



var arr = [1, 2, 3];
arr.toString = function(params){
    return this.length;
}

alert(arr);







var user = {
   name: 'Ivan'
};

// ---- Удалене конкретного сво-ва объекта.

delete user.name;                          

// ----  Добавление сво-ва объекта.

Object.defineProperty(user, 'age', {
   writable: false,
   enumerable: true,
   configurable: false,  
   value: '25'                  
});      




// =============  Дескриптор объекта ==================


Object.defineProperty(user, 'fullname', {
   // writable: true,
   enumerable: true,
   configurable: false, 

   set: function(obj) {
       this.name = obj.name;
       this.surname = obj.surname;
   },
   
   get: function(obj) {
       return `${this.name} ${this.surname}`;
   }
   
});  

console.log(user);

//  user.fullname = {name: 'juli', surname: 'titichkina'};

console.log(user.fullname);

// ================  Запросы web ====================


const request = new XMLHttpRequest();

request.open('GET', 'http://blog.api.axenov-it.com/posts');

request.send();

request.onreadystatechange = function() {
    if (request.readyState !== 4) return;

    let posts = JSON.parse(request.responseText);

    const container = document.querySelector('#list1');

    for (const post of posts) {
        const p = document.createElement('p');

        p.innerHTML = post.title;

        container.appendChild(p);
    }
}

