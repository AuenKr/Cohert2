#include <bits/stdc++.h>
using namespace std;

void solve();

int main()
{
  // your code goes here
  int t;
  cin >> t;
  while (t--)
    solve();
}

void solve()
{
  int x;
  cin >> x;

  if ((x & (x - 1)) == 0)
  {
    cout << 0 << endl;
    return;
  }
  
  int nearest = 1;
  while (nearest < x / 2)
    nearest *= 2;
  
  nearest /= 2;
  int diff = x / 2 - nearest;
  cout << 4 * diff << endl;
  return;
}
