#include <iostream>
#include <thread>
#include <mutex> 
#include <condition_variable>

using namespace std;

mutex mtx;
condition_variable cond;

// Shared resources
int done = true;

void task(string name)
{
  while (cond)
  {
    if(done == 1)
    {
      done = 2;
      cout<<"waiting on condition var: "<<name;
      cond.wait();
    }
  }
}


int main()
{
  thread t1(taskA, 10);
  thread t2(taskB, 10);

  t1.join();
  t2.join();
  return 0;
}