#include <bits/stdc++.h>
using namespace std;

class Solution
{
private:
  vector<int> freqArr;

  void resetFreqArr()
  {
    for (int i = 0; i < 9; i++)
      freqArr[i] = 0;
  }
  bool isValidFreqArr()
  {
    for (int i = 0; i < 9; i++)
    {
      if (freqArr[i] > 1)
      {
        resetFreqArr();
        return false;
      }
    }
    resetFreqArr();
    return true;
  }
  int startIndexOfBox(int index)
  {
    if (index >= 0 && index < 3)
      return 0;
    else if (index >= 3 && index < 6)
      return 3;
    else
      return 6;
  }
  int indexForFreqArr(vector<vector<char>> &board, int r, int c)
  {
    char curr = board[r][c];
    if (curr == '.')
      return -1;
    return (curr - '0');
  }
  bool isValidBox(vector<vector<char>> &board, int r, int c)
  {
    int boxRowStart = startIndexOfBox(r);
    int boxColStart = startIndexOfBox(c);

    for (int i = boxRowStart; i < boxRowStart + 3; i++)
    {
      for (int j = boxColStart; j < boxColStart + 3; j++)
      {
        int currIndex = indexForFreqArr(board, i, j);
        if (currIndex != -1)
          freqArr[currIndex]++;
      }
    }
    return isValidFreqArr();
  }
  bool isValidRow(vector<vector<char>> &board, int r)
  {
    for (int j = 0; j < 9; j++)
    {
      int currIndex = indexForFreqArr(board, r, j);
      if (currIndex != -1)
        freqArr[currIndex]++;
    }

    return isValidFreqArr();
  }
  bool isValidCol(vector<vector<char>> &board, int c)
  {
    for (int i = 0; i < 9; i++)
    {
      int currIndex = indexForFreqArr(board, i, c);
      if (currIndex != -1)
        freqArr[currIndex]++;
    }

    return isValidFreqArr();
  }
  bool isValidIndex(vector<vector<char>> &board, int i, int j)
  {
    if (isValidBox(board, i, j) && isValidRow(board, i) &&
        isValidCol(board, j))
      return true;
    return false;
  }

public:
  Solution() : freqArr(9, 0) {}

  bool isValidSudoku(vector<vector<char>> &board)
  {
    for (int i = 0; i < 9; i++)
      for (int j = 0; j < 9; j++)
        if (!isValidIndex(board, i, j))
          return false;

    return true;
  }
};

int main()
{
  // Example 1
  vector<vector<char>> board1 = {
      {'5', '3', '.', '.', '7', '.', '.', '.', '.'},
      {'6', '.', '.', '1', '9', '5', '.', '.', '.'},
      {'.', '9', '8', '.', '.', '.', '.', '6', '.'},
      {'8', '.', '.', '.', '6', '.', '.', '.', '3'},
      {'4', '.', '.', '8', '.', '3', '.', '.', '1'},
      {'7', '.', '.', '.', '2', '.', '.', '.', '6'},
      {'.', '6', '.', '.', '.', '.', '2', '8', '.'},
      {'.', '.', '.', '4', '1', '9', '.', '.', '5'},
      {'.', '.', '.', '.', '8', '.', '.', '7', '9'}};

  Solution sol;
  cout << "Example 1: " << (sol.isValidSudoku(board1) ? "true" : "false") << endl;

  // Example 2
  vector<vector<char>> board2 = {
      {'8', '3', '.', '.', '7', '.', '.', '.', '.'},
      {'6', '.', '.', '1', '9', '5', '.', '.', '.'},
      {'.', '9', '8', '.', '.', '.', '.', '6', '.'},
      {'8', '.', '.', '.', '6', '.', '.', '.', '3'},
      {'4', '.', '.', '8', '.', '3', '.', '.', '1'},
      {'7', '.', '.', '.', '2', '.', '.', '.', '6'},
      {'.', '6', '.', '.', '.', '.', '2', '8', '.'},
      {'.', '.', '.', '4', '1', '9', '.', '.', '5'},
      {'.', '.', '.', '.', '8', '.', '.', '7', '9'}};

  cout << "Example 2: " << (sol.isValidSudoku(board2) ? "true" : "false") << endl;

  return 0;
}
