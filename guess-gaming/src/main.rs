use std::io;

fn main() {
  println!("Guess the number!");
  println!("Please input your guesss.");
  let mut guess = String::new();
  io::stdin().read_line(&mut guess).expect("Failed read line.");

  println!("You guessed:{}", guess);
}
