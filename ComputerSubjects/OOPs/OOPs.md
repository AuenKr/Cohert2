# OOP (Object Oriented Programming)

```text
H.W
1. Friend function and Friend class

Doubt

1. Virtual func -> Inheritance render multiple times
2. Polymorphism operator
3. Polymorphism virtual vs overloading
```

> definition and example

#### Classes And Objects

> `object` are `entities` in real world. eg: mobile,
> `class` is like a `blueprint` of these entities. eg: car blueprint

##### 4 pillor of OOPs

1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism

eg:

A class of college Administration
> It have Class  `Teacher`

`
        Teacher
  -------------------------------

  |     |      |        |       |
name  dept   subject  Salary    changeDept Func
        Property                method
`

`
Amazon

Product {
  name,
  price,
  desc,
  discount,
  changeDisc(x)
}
`

> `Property` -> value inside class
> `Method` -> func define within the class

> Class try to follow `DRY` ideology

##### Syntax

```cpp

# include<iostream>

# include<string>

class Teacher {
private:
  double salary;

public:
  // Property or attributes by default
  string name;
  string dept;
  string subject;

  // Method or member func
  void changeDept(string newDept)
  {
    dept = newDept;
  }

  // setter => set value of private Property
  void setSalary(double sal)
  {
    salary = sal;
  }

  // getter => get value of private Property
  double getSalary()
  {
    return salary;
  }
};

int main() {
  Teacher t1;
//  Teacher t2;
//  Teacher t3;

  t1.name = "Hemang";
  t1.dept = "MECH";
  t1.subject = "Supply Chain";
  t1.setSalary(250000);
  
  cout << t1.getSalary()<<endl;
  return 0;
}
```

### Access Modifiers

1. `private` : data and method accessible inside class

2. `public` : data and method accessible to everyone

3. `protected` : data and method accessible inside class and to its derived class

4. `static` : access without creating a object

##### > [!NOTE]
>
> By default everything is private

### Encapsulation

Encapsulation (capsule) is wrapping up of data and member func in a single unit of class

=> combination of data/Property and method

Why?
Data hiding => make sensitive info as private Property.

```cpp
class Account {
private: 
  double balance; // data hiding
  string password;

public:
  string accountId;
  string username;
}
```

#### Constructor

> Special method invoked automatically at time of object creation.
> Used for Initialisation

`
Rules

1. Same name as class.
2. Constructor doesn't have return type.
3. Only called once (automatically), at object creation.
4. Memory allocation happens when Constructor is called.

Note
If Class doesn't provide constructor compiler add a constructor by default
`

##### Type of Constructor

1. Non-parameterized Constructor
2. Parameterized Constructor

```cpp
class Teacher {
private:
  double salary;
 
public: 
  string name;
  string dept;
  string subject;
  
  // Non-parameterized Constructor
  Teacher() {
    cout<<"Hi, I am constructor\n";
  }

  // Parameterized Constructor
  Teacher(string n, string d, string s, double sal)
  {
    name = n;
    dept = d;
    subject = s;
    salary = sal;
  }
  
  // Function overloading
  Teacher(string fullName, string subjectTeach) {
    name = fullName;
    subject = subjectTeach;

    // Initialisation of dept and salary by default
    dept = "CSE"; 
    salary = 0;
  }

  // this keyboard and Copy Constructor
  Teacher(Teacher &obj){
    cout<<"Custom copy constructor"<<endl;
    this->name = obj.name;
    this->dept = obj.dept;
    this->subject = obj.subject;
    this->salary = obj.salary;
  }
  
  void changeDept(string newDept)
  {
    dept = newDept;
  }

  void setSalary(double sal)
  {
    salary = sal; 
  }

  double getSalary()
  {
    return salary;
  }

  void getInfo() {
    cout << "name : " << name << endl;
    cout << "dept : " << dept << endl;
    cout << "sub : " << subject << endl;
    cout << "salary :" << salary << endl 
  }
};

int main() {
  Teacher t1("Hemang", "MECH", "Supply Chain", 250000);
  cout << t1.getInfo() << endl;
  return 0;
}


```

###### NOTE
>
> multiple constructor can have diff of input is called `constructor overloading` similar to `Function overloading`.

> example of `Polymorphism`

###### Constructor `This`

> `this` is special pointer in CPP that points to the current object.

eg: `this->prop` is same as `*(this).prop` : * -> dereferencing operator

###### Copy Constructor

> Special Constructor (default) used to copy properties of one object into another

```cpp
int main(){
  Teacher t1("Hemang", "Mech", "Supply Chain", 250000);

  // default Constructor by cpp compiler made for Teacher class -> invoked
  Teacher t2(t1); // t2 -> values = t1 -> values; (Shallow Copy)
  t2.genInfo();
  return 0;
}
```

###### Shallow & Deep Copy

> A `Shallow` copy of object copies all of the member values from one object to another.

> `Stack Memory` contains all the Shallow copy data. Allocated at compile time only.

> A `deep` copy, not only copies the member values but also
makes copies of any dynamically allocated Memory that the member point to.

> `Heap Memory` contains all the dynamically allocated memory ( using `new`/`malloc` keyword ). Deep copy memory also allocated in `heap memory`. Allocated at runtime.

`Shallow Copy example`

```cpp
class Student
{
private:
  string name; // Shallow Copy
  double cgpa; // Shallow Copy
public:
  Student(string name, double cgpa)
  {
    this->name = name;
    this->cgpa = cgpa;
  }

  Student(Student &studentData)
  {
    this->name = studentData.name;
    this->cgpa = studentData.cgpa;
  }

  void getInfo()
  {
    cout << "name : " << this->name << endl;
    cout << "cgpa : " << this->cgpa << endl;
  }
};
```

`Problem with Shallow Copy example`

```cpp
class StudentShallowProblem
{
private:
  string name;     // Shallow Copy
public:
  double *cgpaPtr; // Shallow Copy
  StudentDeep(string name, double cgpa)
  {
    this->name = name;
    this->cgpaPtr = new double;
    *(this->cgpaPtr) = cgpa;
  }

  StudentDeep(StudentDeep &studentData)
  {
    this->name = studentData.name;
    this->cgpaPtr = studentData.cgpaPtr;
  }

  void getInfo()
  {
    cout << "name : " << this->name << endl;
    cout << "*cgpaPtr : " << *(this->cgpaPtr) << endl;
  }
};

int main()
{
  StudentDeep s1("Hemang", 9.10);
  s1.getInfo();

  StudentDeep s2(s1);
  *(s2.cgpaPtr) = 9.7;

  s1.getInfo(); // => s1.cgpaPtr value also changes as both point to same address. This is the problem with Shallow copy.
  return 0;
}

```

> To Solve the issue we use `Deep Copy`

-> Manually need to define Copy Constructor => compiler only make shallow copy.

> `Deep Copy Constructor`

```cpp
class StudentDeepCopy
{
public:
  string name;
  double *cgpaPtr;
  StudentDeepCopy(string name, double cgpa)
  {
    this->name = name;
    this->cgpaPtr = new double;
    *(this->cgpaPtr) = cgpa;
  }

  StudentDeepCopy(StudentDeepCopy &studentData) // Copy Constructor with deep copy
  {
    this->name = studentData.name;
    this->cgpaPtr = new double;
    *(this->cgpaPtr) = *(studentData.cgpaPtr);
  }

  void getInfo()
  {
    cout << "name : " << this->name << endl;
    cout << "*cgpaPtr : " << *(this->cgpaPtr) << endl;
  }
};

int main()
{
  StudentDeepCopy s1("Hemang", 9.10);
  s1.getInfo();

  StudentDeepCopy s2(s1);
  s2.name = "Neha";
  *(s2.cgpaPtr) = 9.7; // solved the problem

  s1.getInfo();
  s2.getInfo();
  return 0;
}
```

###### Destructor

1. Why ? => Memory Leak

2. Free the memory allocated to objects from memory.

* allocated with `malloc`, freed with `free`
* allocated with `new`, freed with `delete`
* allocated with `new[]`, freed with `delete[]`

3. When `delete ptr` called it free the address pointed by pointer `ptr`.

4. Destructor has same name as class with `~` (teelda) as prefix.

5. Automatically called just before exiting from Function similar.

6. Statical Memory is automatically freed but not dynamically allocated memory.

```cpp
class Student
{
public:
  string name;
  double *cgpaPtr;

  Student(string name, double cgpa)
  {
    this->name = name;
    this->cgpaPtr = new double;
    *(this->cgpaPtr) = cgpa;
  }

  Student(Student &studentData) // Copy Constructor with deep copy
  {
    this->name = studentData.name;
    this->cgpaPtr = new double;
    *(this->cgpaPtr) = *(studentData.cgpaPtr);
  }

  ~Student() // Destructor
  {
    cout << "Destructor is called" << endl;
    delete cgpaPtr;
  }

  void getInfo()
  {
    cout << "name : " << this->name << endl;
    cout << "*cgpaPtr : " << *(this->cgpaPtr) << endl;
  }
};
```

### Inheritance

1. When properties and member functions of `base` or `parent` class are passed on to the `derived` or `child` class.

2. Use for code reusability (DRY Principal)

example:

`
    classA (Parent / Base)
      |
      |
      |
      |
    classB (Child / derived)  => Inherited all propert and class of A.`

##### Note

> Think from first principle
> Constructor execution ordered from base to derived

1. Base Class
2. Derived Class

> Destructor execution ordered from Derived to Base

1. Derived Class
2. Base Class

#### Mode of Inheritance

| Base Class | Derived Class (Private Mode) | Derived Class (Protected Mode)  | Derived Class (Public Mode)  |
|------------|------------------------------|---------------------------------|------------------------------|
| **Private**    | Not Inherited                | Not Inherited                   | Not Inherited                |
| **Protected**  | Private                      | Protected                       | Protected                    |
| **Public**     | Private                      | Protected                       | Public                       |

> Private => Not to pass to derived class (child)
> Protected => Only to pass to derived class (child)
> Public => Pass everything expect private property to child

#### Types of Inheritance

1. `Single Inheritance` when pass property from one parent class to one child only.
  example : Person --> Student

2. `Multi-level Inheritance`

`
  Parent
    |
    |
  Parent
    |
    |
  Child
`
example : Person --> Student --> Graduate Student

3. `Multiple Inheritance` when child inherit from different multiple parent class.

`
Parent1  Parent2
    |       |
     |     |
      |   |
        |
      Child
`
example: class Student, Teacher, TA's in college

> `virtual mode` why we need it ??

4. `Hierarchical Inheritance` two or more diff child from same parent

`
         Parent
          | |
        |     |
      |         |
    Child1    Child2
`

5. `Hibrid Inheritance` mix of single inheritance, multi-level inheritance, multiple inheritance, hierarchical inheritance

> example of all

```cpp
#include <bits/stdc++.h>

using namespace std;

class Person
{
public:
  string name;
  int age;

  Person()
  {
    cout << "non-parameterized contructor" << endl;
  }

  Person(string name)
  {
    this->name = name;
  }

  Person(int age)
  {
    this->age = age;
  }

  Person(string name, int age)
  {
    this->name = name;
    this->age = age;
    // cout << "Person constructor called" << endl;
  }

  ~Person()
  {
    cout << "Person destructor called" << endl;
  }

  void getInfo()
  {
    cout << "name : " << name << endl;
    cout << "age : " << age << endl;
  }
};

class Student : public Person // Single Inheritance
{
public:
  // name, age -> Person
  int rollNo;

  Student(string name, int age, int rollNo) : Person(name, age) // Running parent constructor by passing name & age
  {
    this->rollNo = rollNo;
    // cout << "Student constructor called" << endl;
  }

  ~Student()
  {
    cout << "Student destructor called" << endl;
  }

  void getInfo()
  {
    Person::getInfo();
    cout << "rollNo : " << rollNo << endl;
  }
};

class GradStudent : public Student // Multi-level Inheritance
{
public:
  string researchArea;

  GradStudent(string name, int age, int rollNo, string researchArea) : Student(name, age, rollNo)
  {
    this->researchArea = researchArea;
    cout << "Graduate Constructor is called" << endl;
  }
  ~GradStudent()
  {
    cout << "Graduate Destructor is called" << endl;
  }
  void getInfo()
  {
    Student::getInfo();
    cout << "researchArea : " << researchArea << endl;
  }
};

class Teacher : public Person // Single Inheritance
{
public:
  string subject;
  double salary;

  Teacher(string name, int age, string subject, double salary) : Person(name, age)
  {
    this->subject = subject;
    this->salary = salary;
    cout << "Teacher Constructor is called" << endl;
  }

  ~Teacher()
  {
    cout << "Teacher Destructor is called" << endl;
  }
  void getInfo()
  {
    Person::getInfo();
    cout << "subject : " << subject << endl;
    cout << "salary : " << salary << endl;
  }
};

class TAs : public Student, public Teacher // Multiple Inheritance
{
public:
  TAs(string name, int age, int rollNo, string subject, double salary) : Teacher(name, age, subject, salary), Student(name, age, rollNo)
  {
    cout << "TAs Constructor is called" << endl;
  }

  ~TAs()
  {
    cout << "TAs Destructor is called" << endl;
  }
  void getInfo()
  {
    Student::getInfo();
    Teacher::getInfo();
  }
};

// Whole class is hybrid Inheritance

int main()
{
  // Student s1("Golden Kumar", 22, 21111);
  // s1.getInfo();

  // GradStudent g1("Hemang Pathak", 22, 21112, "HPCL");
  // g1.getInfo();

  TAs phd("Rohit Sen", 30, 18000, "network system", 25000);
  phd.getInfo(); // virtaul mode ??

  return 0;
}
```

### Polymorphism

> Polymorphism is the ability of objects to take on `different forms` or behave in different ways `depending on the context` in which they are used.

> Poly -> multiple and morph -> form
> Polymorphism -> multiple forms

> example : `Constructor overloading`

#### Types of Polymorphism

1. Compile Time Polymorphism : form taken by function define at compile time.

  example: Constructor Overloading, Function Overloading

2. Run Time Polymorphism : form taken by function define at runtime.

#### Compile Time Polymorphism

1. Constructor Overloading
2. Function Overloading
3. Operator Overloading  // Read more about it?

> function or constructor name is same but there parameter / arguments are different.
> parameter diff :

* by no of parameter
* by type of parameter

```cpp
class Print
{
public:
  void show(int x)
  {
    cout << "int : " << x << endl;
  }

  void show(char ch)
  {
    cout << "char : " << ch << endl;
  }

  void show(string s)
  {
    cout << "string : " << s << endl;
  }
};

int main()
{
  Print p;
  p.show(1);
  p.show('a');
  p.show("Afsdsafd");
  return 0;
}
```

#### Run Time Polymorphism

1. Function Overriding (only with Inheritance)

> Parent and Child both contain the same function with different implementation.
> The parent class function is said to be overriding.

> child functions override the parent class function.

```cpp
// Run time Polymorphism
class Parent
{
public:
  void getInfo()
  {
    cout << "Hi, form Parent class" << endl;
  }
};

class Child : public Parent
{
public:
  void getInfo()
  {
    cout << "Hi, form Child class" << endl;
  }
};

int main()
{
  Child runTimePoly;
  runTimePoly.getInfo();
  return 0;
}
```

2. Virtual Function

> A virtual function is a member function that you expect to be redefined in derived classes.

> Virtual functions are Dynamic in nature.
> Defined by the keyword `virtual` inside a base class and are always declared with a base class and overridden in a child class.
> A virtual function is called during Runtime.

`Read more !!!`

### Abstraction ( ख्याल )

> Hiding all unnecessary details and showing only the important parts.

> Data hiding using private vs Abstraction -> Abstraction hides and even show important data.

#### Implementation of Abstraction

1. Using access modifiers or specifiers
1. private
2. protected
3. public

2. Using `Abstract` class by using `abstract` keyword before classes.

> Abstract class doesn't create a class only for inheritance(like a blueprint to class, how they should look like).

> Abstract classes are used to provide a base class from which other classes can be derived.
> They cannot be instantiated(form object) and are meant to be inherited.
> Abstract classes are typically used to define an interface for derived classes.

example:

```cpp
class Shape
{
public:
  virtual void draw() = 0; // pure virtual function
  // If pure virtual function => abstract class
};

class Circle : public Shape
{
public:
  void draw()
  {
    cout << "Circle" << endl;
  }
};

class Rectangle : public Shape
{
public:
  void draw()
  {
    cout << "Rectangle" << endl;
  }
};

int main()
{
  Circle c1;
  c1.draw();

  Rectangle r1;
  r1.draw();

  return 0;
}
```

### Static Keyword

* Static Variables

> `In Function`: Variables declared as static in a function are created and initialised once for the lifetime of the program.

```cpp
void fun()
{
  static int x = 0; // Run only 3 times due to static
  cout << "x : " << x << endl;
  x++;
}

int main()
{
  fun();
  fun();
  fun();
  turn 0;
}
```

```text
Output => 
x : 0
x : 1
x : 2
```

> `In Class` : Static variables in a class are created and initialised once. They are shared by a;; the objects of the class.

### Static Objects

> `Object propert with static` are share among all the object created by that class till lifetime of process.

```cpp
class StaticTest
{
public:
  StaticTest()
  {
    cout << "constructor" << endl;
  }
  ~StaticTest()
  {
    cout << "destructor" << endl;
  }
};

int main()
{
  if (true)
  {
    // StaticTest obj; // Constructor called
    // Destructor called
    static StaticTest obj; // Constructor called at init but destructor will call when main terminates
  }

  cout << "End of main function" << endl;
  return 0;
}
```
