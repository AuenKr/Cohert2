from threading import *
import time

cond = Condition()
done = 1

def task(name):
  global done
  with cond:
    if done == 1:
      done = 2
      print("Waiting on condition variable cond: ", name," done ", done)
      time.sleep(0.5)
      cond.wait()
      print("Condition set : ", name, " new done ", done)
    else:
      for i in range(5):
        print(".")
        time.sleep(1)
      print("Signaling condition variable cond ", name, " done ", done)
      done = 3
      cond.notify_all()
      print("Notification done ", name)
      time.sleep(1)

if __name__ == '__main__':
  print("Init done : ", done)
  time.sleep(.5)
  t1 = Thread(target = task, args = ('t1', ))
  t2 = Thread(target = task, args = ('t2', ))

  t1.start()
  t2.start()

  t1.join()
  t2.join()