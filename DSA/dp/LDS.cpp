#include <bits/stdc++.h>
using namespace std;

int helper(vector<int> &arr, int idx)
{
  int n = arr.size();
  if (idx == n - 1)
    return 1;

  int maxLen = 0;
  for (int i = idx + 1; i < n; i++)
  {
    if (arr[i] > arr[idx])
      maxLen = max(maxLen, helper(arr, i));
  }
  return maxLen + 1;
}
int LDS(vector<int> arr)
{
  // Write your code here.
  int n = arr.size();
  int maxLen = 0;
  for (int i = 0; i < n; i++)
  {
    maxLen = max(maxLen, helper(arr, i));
    cout << "LDS of : " << arr[i] << " : " << maxLen << endl;
  }
  return maxLen;
}

/*
          0   1   2   3   4
nums =  [ 5,  0,  3,  2,  9]
LDS  =  [-1, -1, -1, -1, -1]

        LDS(0)
    LDS(3) LDS(2) LDS(9)  -> calc LDS where nums[j] > nums[i]
 LDS(2)

[8, 7, 4, 8, 1]

    LIS(8)

*/
void solve()
{
  int n;
  cin >> n;
  vector<int> arr(n);
  for (int i = 0; i < n; i++)
    cin >> arr[i];
  cout << LDS(arr) << endl;
}

int main()
{
  int t;
  cin >> t;
  while (t--)
    solve();
  return 0;
}