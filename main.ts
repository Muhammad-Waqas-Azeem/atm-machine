import inquirer from "inquirer";
const pin: number = 2003;
let balance: number = 10000;
let userEnteredPin = await inquirer.prompt([
  { message: "Enter Your Pin", type: "number", name: "userPin" },
]);
if (userEnteredPin.userPin === pin) {
  console.log("Correct Pin code");
  console.log(`Your balance is ${balance}`);

  let option = await inquirer.prompt({
    message: "What do you want",
    type: "list",
    name: "choice",
    choices: ["Cash Withdrawl", "Balance Check", "Fast Cash"],
  });
  if (option.choice === "Cash Withdrawl") {
    let amount = await inquirer.prompt([
      { message: "Enter Amount", type: "number", name: "amounts" },
    ]);
    if (amount.amounts > balance) {
      console.log("Insufficient Balance");
    } 
    else {
      console.log(`Your Remaining Balance is ${balance - amount.amounts}`);
    }
  } else if (option.choice === "Balance Check") {
    console.log(`Your balance is ${balance}`);
  } else if (option.choice === "Fast Cash") {
    let fastAmount = await inquirer.prompt({
      name: "amount",
      message: "Select any fixed amount for fast withdrawl",
      type: "list",
      choices: ["500", "1000", "2000", "3000", "4000", "5000"],
    });
    console.log(`Your Remaining Balance is ${balance - fastAmount.amount}`);
  }
   else {
    console.log("Invalid amount Please Enter Amount in Numbers");
  }
} else {
  console.log("Wrong Pin");
}
