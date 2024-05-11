#include <stdlib.h>
#include <vector>
#include <iostream>
using namespace std;

vector<vector<int>> merge(vector<vector<int>> &intervals)
{
    int N = intervals.size(), maxi = 0;
    for (int i = 0; i < N; i++)
        maxi = max(maxi, intervals[i][1]);
    vector<int> arr(maxi + 1, 0); // freq array
    for (int i = 0; i < N; i++)
    {
        arr[intervals[i][0]]++;
        arr[intervals[i][1]]--;
    }

    // Calc freq->pSum
    for (int i = 1; i <= maxi; i++)
        arr[i] = arr[i - 1] + arr[i];

    vector<vector<int>> ans;
    int start = -1, end = -1;
    for (int i = 1; i <= maxi; i++)
    {
        if (i == 1 && arr[i - 1] != 0)
        {
            start = 0;
        }
        else if (arr[i - 1] == 0 && arr[i] != 0)
        {
            // start point
            start = i;
        }
        else if (arr[i - 1] != 0 && arr[i] == 0)
        {
            // End point
            end = i;
        }
        if (start != -1 && end != -1)
        {
            ans.push_back({start, end});
            start = -1;
            end = -1;
        }
    }

    // Checking for same timming [0, 0]
    for (int i = 0; i < N; i++)
    {
        int first = intervals[i][0], second = intervals[i][1];
        if (first == second && arr[first]==0)
        {
            ans.push_back({first, second});
        }
    }
    return ans;
}

int main()
{
    vector<vector<int>> intervals = {{1, 3},
                                     {2, 6},
                                     {8, 10},
                                     {15, 18},
                                     {11, 11}};
    vector<vector<int>>
        result = merge(intervals);
    for (int i = 0; i < intervals.size(); i++)
    {
        for (int j = 0; j < intervals[i].size(); j++)
        {
            cout << intervals[i][j] << " ";
        }
        cout << endl;
    }
}