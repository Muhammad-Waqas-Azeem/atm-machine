import inquirer from "inquirer";
const pin: number = 2003;
let balance: number = 10000;
let userEnteredPin = await inquirer.prompt([
  { message: "Enter Your Pin", type: "number", name: "userPin" },
]);
if (userEnteredPin.userPin === pin) {
  console.log(`Your balance is ${balance}`);
  
  let option = await inquirer.prompt(
    {
      message: "What do you want",
      type: "list",
      name: "choice",
      choices: ["Cash Withdrawl", "Balance Check"],
    },
  );
  if(option.choice === "Cash Withdrawl"){
    let amount=await inquirer.prompt([{message:"Enter Amount",type:"number",name:"amount"}]);
    console.log(`Your Remaining Balance is ${balance - amount.amount}`);
}
else if(option.choice === "Balance Check"){
    console.log(`Your balance is ${balance}`);
  }
} 
else {
  console.log("Wrong Pin");
}
