#include <bits/stdc++.h>
using namespace std;

void solve();

int main()
{
  int t;
  cin >> t;

  while (t--)
  {
    solve();
  }

  return 0;
}

void solve()
{
  int x, y;
  cin >> x >> y;
  int max_a = x + (5 - 3);
  int max_b = y + (5 - 4);
  int isPos = max_a >= y && max_b >= x;
  cout << (isPos ? "YES" : "NO") << endl;
}