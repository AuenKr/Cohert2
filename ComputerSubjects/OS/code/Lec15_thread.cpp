#include <iostream>
#include <unistd.h>
#include <thread>

using namespace std;

void taskA(int n = 10)
{
  for(int i = 0; i < n; i ++)
  {
    sleep(1);
    cout<<"TaskA : "<<i<<endl;
    fflush(stdout);
  }
}

void taskB(int n = 10)
{
  for(int i = 0; i < n; i ++)
  {
    sleep(1);
    cout<<"TaskB : "<<i<<endl;
    fflush(stdout);
  }
}

int main()
{
  thread t1(taskA, 10);
  thread t2(taskB, 10);

  // We have to tail that main thread need to wait will its children process is not completed;
  // Else it will exit after it execute all thread process

  t1.join();
  t2.join();
  return 0;
}