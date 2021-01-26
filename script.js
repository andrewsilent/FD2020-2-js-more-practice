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

// 2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
// 2.2 Создать объект, который содержит свойства, о факультете и кафедре.
// 2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
// 2.4 Реализовать функцию выводит на экран всю информацию о студенте

const GENDER_LIST = ['male','female','unknown'];

class Student {
  constructor(firstName, secondName, gender, contacts, univercity) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.gender = gender;
    this.contacts = contacts;
    this.university = univercity;
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
    this._univercity = v;
  }

  get university() {
    return this._university;
  }

  getFullInfo(){
    console.log(`${this.firstName} ${this.secondName} (${this.gender}), ${this.contacts}. Student of univercity: ${this._university}`);
  }
}

class Univercity {
  constructor(department, faculty) {
    this.department = department;
    this.faculty = faculty;
  }
}

const univercity1 = new Univercity('informatic', 'computer technologies');
const univercity2 = new Univercity('informatic', 'internet security');

const student1 = new Student('A', 'W', 'male', '555-35-35');
const student2 = new Student('B', 'S', 'male', '555-55-35');
const student3 = new Student('E', 'N', 'female', '555-33-33');

student1.univercity = univercity1;
student2.univercity = univercity1;
student3.univercity = univercity2;