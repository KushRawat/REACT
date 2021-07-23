class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Kush";

  printName = () => {
    console.log(this.name);
  };
}

const newPerson = new Person();
newPerson.printName();
newPerson.printGender();
