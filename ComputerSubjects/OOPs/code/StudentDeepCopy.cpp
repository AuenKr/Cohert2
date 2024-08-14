#include <iostream>
#include <string>
using namespace std;

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
