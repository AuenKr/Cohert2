#include <bits/stdc++.h>
using namespace std;

// Compile time Polymorphism
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

// Run time Polymorphism
class Parent
{
public:
  void getInfo()
  {
    cout << "Hi, form Parent class" << endl;
  }

  virtual void hello()
  {
    cout << "Hello, form parent class" << endl;
  }
};

class Child : public Parent
{
public:
  void getInfo()
  {
    cout << "Hi, form Child class" << endl;
  }

  void hello()
  {
    cout << "Hello, from child class" << endl;
  }
};
int main()
{
  // Print compileTimePoly;
  // compileTimePoly.show(1);
  // compileTimePoly.show('a');
  // compileTimePoly.show("Afsdsafd");

  Child runTimePoly;
  runTimePoly.getInfo();

  runTimePoly.hello();
  return 0;
}