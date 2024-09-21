#include <bits/stdc++.h>
using namespace std;

string maxLevel(int no)
{
  string res = "";
  while (no > 0)
  {
    int power = log2(no);
    int X = pow(2, power);
    res += to_string(X);
    no -= X;
  }
  return res;
}

int main()
{
  int t;
  cin >> t;
  while (t--)
  {
    int n;
    cin >> n;
    cout << maxLevel(n) << endl;
  }
  return 0;
}