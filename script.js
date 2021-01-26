'use strict';

// 1
// Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
// (например n=4 , 1+2+3+4)

function factorial(n) {
  let result = 0;
  sum(n);
  function sum(n) {
    if (n > 1) {
      sum(n - 1);
    }
    result += n;
  }
  return result;
}

// =======================================================================================================

// 2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
// 2.2 Создать объект, который содержит свойства, о факультете и кафедре.
// 2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
// 2.4 Реализовать функцию выводит на экран всю информацию о студенте

const GENDER_LIST = ['male', 'female', 'unknown'];

class Student {
  constructor(firstName, secondName, gender, contacts, department, faculty) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.gender = gender;
    this.contacts = contacts;
    this.university = new University(department, faculty);
  }

  set gender(v) {
    if (GENDER_LIST.includes(v)) {
      this._gender = v;
    } else {
      throw new RangeError('Choose male, female, unknown');
    }
  }

  get gender() {
    return this._gender;
  }

  set university(v) {
    this._university = v;
  }

  get university() {
    return this._university;
  }

  getFullInfo() {
    return Object.entries(this); // я так и не определился, в каком виде лучше выводить инфу, поэтому так и оставил в виде массива
    // return Object.keys(this);
    // return Object.values(this);
  }
}

class University {
  constructor(department, faculty) {
    this.department = department;
    this.faculty = faculty;
  }
}

const student1 = new Student('A', 'W', 'male', '555-35-35', 'informatic', 'computer technologies');
const student2 = new Student('B', 'S', 'male', '555-55-35', 'informatic', 'internet security');
const student3 = new Student('E', 'N', 'female', '555-33-33', 'informatic', 'computer technologies');

// =======================================================================================================

// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
// 3.1*Инициализация с помощью случайных чисел
// 3.2 Вывести элементы с четными индексами
// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)
// 3.5 Подсчитать количество нулевых элементов

function arrayInit() {
  const array = [];
  for (let i = 0; i < 25; i++) {
    array.push(Math.round(Math.random() * 100));
  }
  return array;
}

const numArray = arrayInit();
console.log(numArray);

// 3.2
const evenIndexes = numArray.filter((element, index) => index % 2);
console.log(evenIndexes);

// 3.3
const evenElements = numArray.filter((element) => element % 2 === 0);
console.log(evenElements);

// 3.4
const zeroElementIndexes = numArray.map((element, index) => {
  if (element === 0) {
    return index;
  }
}).filter((element) => element >= 0)
console.log(zeroElementIndexes);

// 3.5
const zeroElementsCount = zeroElementIndexes.length;
console.log(zeroElementsCount);

// =======================================================================================================

//4 Создать классы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

class Book {
  constructor(title, author, year, publishingHouse) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.publishingHouse = publishingHouse;
  }
}

class ElectronBook extends Book {
  constructor(title, author, year, publishingHouse, format, enumber) {
    super(title, author, year, publishingHouse);
    this.format = format;
    this.enumber = enumber;
  }
}

// =======================================================================================================

// 5 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;

function printNumbers(n) {
  for (let i = 0; i < n; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log('fizzbuzz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
}

function printNumbers2(n) {
  new Array(n).fill(0).map((e, i) => e = i).map((e) => console.log(compare(e)));
  function compare(e) {
    if ((e % 3 === 0) && (e % 5 === 0)) {
      return ('fizzbuzz');
    } else if (e % 5 === 0) {
      return ('buzz');
    } else if (e % 3 === 0) {
      return ('fizz');
    } else {
      return e;
    }
  }
}