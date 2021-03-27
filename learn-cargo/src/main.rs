use rand::Rng;
use std::cmp::Ordering;
use std::io;

fn main() {
  println!("猜数字\n输入数字");

  let mut guess = String::new();

  let secret_number = rand::thread_rng().gen_range(0, 100);

  println!("神秘数字：{}", secret_number);

  io::stdin().read_line(&mut guess).expect("无法获取输入的数");

  println!("你猜测的数是：{}", guess);

  let guess: u32 = guess.trim().parse().expect("请输入数字");

  match guess.cmp(&secret_number) {
    Ordering::Less => println!("数字太小了"),
    Ordering::Greater => println!("数字太大了"),
    Ordering::Equal => println!("猜对了"),
  }
}
