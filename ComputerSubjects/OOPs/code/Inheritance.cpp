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