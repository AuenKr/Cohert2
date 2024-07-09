//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution
{
public:
  int lenOfLongSubarr(int A[], int N, int k)
  {
    // Complete the function
    int maxLen = 0, startIdx = 0;
    int currSum = 0;
    for (int i = 0; i < N; i++)
    {
      currSum += A[i];

      if (currSum == k)
      {
        maxLen = max(maxLen, i - startIdx + 1);
      }

      while (currSum > k)
      {
        currSum -= A[startIdx];
        startIdx++;
      }

      cout << "i : " << i << " sum "<< currSum << "\n";
    }
    return maxLen;
  }
};

//{ Driver Code Starts.

int main()
{
  // code

  int t;
  cin >> t;
  while (t--)
  {
    int n, k;
    cin >> n >> k;
    int a[n];

    for (int i = 0; i < n; i++)
      cin >> a[i];
    Solution ob;
    cout << ob.lenOfLongSubarr(a, n, k) << endl;
  }

  return 0;
}
// } Driver Code Ends