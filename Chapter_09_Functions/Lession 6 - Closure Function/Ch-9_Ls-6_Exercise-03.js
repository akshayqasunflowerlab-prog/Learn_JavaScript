function bankAccount() {
    let balance = 1000;
    return {
        deposit(amount) {
            balance += amount;
        },
        getBalance() {
            return balance;
        }
    }
}

const account = bankAccount();
account.deposit(1500);
console.log(account.getBalance());
console.log(account.balance);