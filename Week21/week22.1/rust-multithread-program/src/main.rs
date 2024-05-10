use std::thread;

fn main(){
    // Swan the thread
    for _ in 0..13{
        thread::spawn(|| {
            let mut counter: f64 = 0.00;
            loop{
                counter +=0.01;
            }
        });
    }

    loop{
        // Main thread does nothing but keep the program alive
    }
}