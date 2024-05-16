#include <bits/stdc++.h>
using namespace std;

void fRow(vector<vector<int>> &grid, int i)
{
    for (int j = 0; j < grid[i].size(); j++)
        grid[i][j] = !grid[i][j];
}
void fCol(vector<vector<int>> &grid, int j)
{
    for (int i = 0; i < grid.size(); i++)
        grid[i][j] = !grid[i][j];
}
int countOneCol(vector<vector<int>> &grid, int j)
{
    int count = 0;
    for (int i = 0; i < grid.size(); i++)
    {
        if (grid[i][j] == 1)
            count++;
    }
    return count;
}
int calcScore(vector<vector<int>> &grid)
{
    int m = grid.size(), n = grid[0].size(), score = 0;
    for (int i = 0; i < m; i++)
    {
        int power = 0;
        for (int j = n - 1; j >= 0; j--)
        {
            cout<<grid[i][j]<<" ";
            score += grid[i][j] * pow(2, power++);
        }
        cout<<endl;
    }
    return score;
}
int matrixScore(vector<vector<int>> &grid)
{
    // Greedy appr
    // for row => MST == 1
    int m = grid.size(), n = grid[0].size();
    for (int i = 0; i < m; i++)
    {
        if (grid[i][0] != 1)
            fRow(grid, i);
    }
    // for col => max no of 1
    for (int j = 0; j < n; j++)
    {
        int noOne = countOneCol(grid, j);
        if (noOne <= m / 2)
        {
            fCol(grid, j);
        }
    }

    int ans = calcScore(grid);
    return ans;
}

int main()
{
    vector<vector<int>> grid = {{0, 0, 1, 1}, {1, 0, 1, 0}, {1, 1, 0, 0}};
    int score = matrixScore(grid);
    cout<<score<<endl;
    return 1;
}