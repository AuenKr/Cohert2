#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
  vector<int> asteroidCollision(vector<int> &asteroids)
  {
    stack<int> st;
    for (int each : asteroids)
    { 
      bool isColl = (st.empty() ? -1 : st.top()) > 0 && each < 0;
      if (isColl) // poss Collide
      {
        while (isColl && abs(st.top()) < abs(each))
        {
          st.pop();
          isColl = (st.empty() ? -1 : st.top()) > 0 && each < 0;
        }
        if (st.empty())
          st.push(each);
        else if (!st.empty() && isColl && abs(st.top()) == abs(each))
          st.pop();
      }
      else // Not collide
        st.push(each);
    }

    int n = st.size();
    vector<int> res(n);
    for (int i = n - 1; i >= 0; i--)
    {
      res[i] = st.top();
      st.pop();
    }
    return res;
  }
};

int main()
{
  vector<int> arr = {10, 2, -5};
  Solution sol;
  vector<int> res = sol.asteroidCollision(arr);
  for (int each : res)
    cout << each << " ";
  cout << endl;
  return 0;
}