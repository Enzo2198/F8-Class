class Person {
  id: number
  name: string
  age: number

  constructor(id: number, name: string, age: number) {
    this.id = id
    this.name = name
    this.age = age
  }
}

class Student extends Person {
  school: string

  constructor(id: number, name: string, age: number, school: string) {
    super(id, name, age);
    this.school = school
  }
}

const student1 = new Student(1, 'Dung', 23, 'f8')

const person2 = new Person(2, 'Trung', 27)

console.log(student1)
console.log(person2)