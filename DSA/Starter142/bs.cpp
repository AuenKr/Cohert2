#include <bits/stdc++.h>
using namespace std;

void binarySearch(vector<int> &arr, float x)
{
  int n = arr.size();
  int k = 0;
  for (int b = n / 2; b >= 1; b = b / 2)
  {
    while (k + b < n && arr[k + b] <= x)
      k += b;
  }

  if (arr[k] == x)
    cout << x << " found at idx : " << endl;
  else
    cout << x << " not found" << endl;

  cout << "k : " << k << endl;
}

int main()
{
  int n = 10;
  vector<int> arr;
  for (int i = 0; i < n; i++)
    arr.push_back(i);

  float x = 12;
  cout << "Binary search" << endl;
  binarySearch(arr, x);

  cout << "Std Binary search" << endl;
  auto a = lower_bound(arr.begin(), arr.end(), x) - arr.begin();
  cout << "a : " << a << " value : " << arr[a] << endl;
  auto b = upper_bound(arr.begin(), arr.end(), x) - arr.begin();
  cout << "b : " << b << " value : " << arr[b] << endl;
  return 0;
}
