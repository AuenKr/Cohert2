#include <iostream>
#include <string>
using namespace std;

class Student
{
private:
  string name; // Shallow Copy
public:
  double cgpa; // Shallow Copy
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
  // Shallow Copy
  // Student s1("Hemang", 9.10);
  // s1.getInfo();

  // Student s2(s1);
  // s2.cgpa = 9.7;

  // s1.getInfo();

  // Problem with Shallow Copy
  StudentDeep s1("Hemang", 9.10);
  s1.getInfo();

  StudentDeep s2(s1);
  *(s2.cgpaPtr) = 9.7; // this is the problem

  s1.getInfo();
  return 0;
}
