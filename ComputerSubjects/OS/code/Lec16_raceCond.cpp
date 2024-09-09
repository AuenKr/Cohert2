#include <iostream>
#include <unistd.h>
#include <thread>
#include <mutex> // For loc

using namespace std;

mutex mtx;
int count = 0;

void task(int n)
{
  for (int i = 0; i < n; i++)
  {
    // Crictal Section
    mtx.lock();
    count++;
    mtx.unlock();
  }
}

int main()
{
  thread t1(task, 10000000);
  thread t2(task, 10000000);
  t1.join();
  t2.join();
  // Race Conditon => inconsistent value aka Critical Section Problem 
  cout << count << endl;
  return 0;
}