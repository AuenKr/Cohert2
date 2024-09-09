#include <iostream>
#include <atomic>
#include <thread>

using namespace std;

class Perterson
{
private:
  atomic<bool> flag[2];
  atomic<int> turn;

public:
  Perterson()
  {
    flag[0] = false;
    flag[1] = false;
    turn = 0;
  }

  void lock(int id)
  {
    flag[id] = true;
    int other = id == 1 ? 0 : 1;
    turn = other;
    while (turn == other && flag[other] == true)
    {
      // busy infinite loop
    }
  }

  void unlock(int id)
  {
    flag[id] = false;
  }
};


Perterson mutex;
int shareResourse = 0;

void worker(int id)
{
  int n = 1000000;
  for (int i = 0; i < n; i++)
  {
    mutex.lock(id);
    shareResourse++;
    mutex.unlock(id);
  }
}


int main()
{
  thread t1(worker, 0);
  thread t2(worker, 1);

  t1.join();
  t2.join();

  cout<<"shared resource : "<<shareResourse<<endl;
  return 0;
}