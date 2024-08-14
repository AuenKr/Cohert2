#include <bits/stdc++.h>
using namespace std;

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