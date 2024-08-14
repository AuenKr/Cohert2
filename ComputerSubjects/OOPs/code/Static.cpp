#include <bits/stdc++.h>
using namespace std;

// Static variable inside a function
void fun()
{
  static int x = 0; // Run only 3 times due to static
  cout << "x : " << x << endl;
  x++;
}

int main1()
{
  fun();
  fun();
  fun();
  return 0;
}

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
    // StaticTest obj; // Contructor called
    // Destructor called
    static StaticTest obj; // Contructor called at init but destructor will call when main terminates
  }

  cout << "End of main function" << endl;
  return 0;
}