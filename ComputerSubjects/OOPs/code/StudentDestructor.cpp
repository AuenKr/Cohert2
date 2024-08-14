#include <iostream>
#include <string>
using namespace std;

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

  ~Student()
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

int main()
{
  Student s1("Hemang", 9.10);
  s1.getInfo();

  return 0;
}
