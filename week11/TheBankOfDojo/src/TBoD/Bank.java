package TBoD;

import java.util.Random;

public class Bank {
	
	private static Integer numberOfAccounts = 0;
	private static Double totalBankBalance = 0d;
	private String accountNumber;
	private Double checkingBalance;
	private Double savingsBalance;
	
	// TODO - transaction class
	// TODO - transaction history
	// TODO - Account Type as a class
	
	private String generateAccountNumber() {
		String newAccountNumber = "";
		Random r = new Random();
		for(int i=0; i<10; i++) {
			newAccountNumber += r.nextInt(10);
		}
		return newAccountNumber;
	}

	public Bank() {
		accountNumber = generateAccountNumber();
		checkingBalance = 0d;
		savingsBalance = 0d;
		numberOfAccounts++;
	}

	public Double getCheckingBalance() {
		return checkingBalance;
	}

	public Double getSavingsBalance() {
		return savingsBalance;
	}
	
	public String getAccountNumber() {
		return accountNumber;
	}

	public void deposit(String accountType, Double amount) {
		if(amount <= 0) {
			return;
		}
		if(accountType == "checking") {
			checkingBalance += amount;
			totalBankBalance += amount;
		} else if(accountType == "savings") {
			savingsBalance += amount;
			totalBankBalance += amount;
		}
	}
	
	public void withdraw(String accountType, Double amount) {
		if(amount <= 0) {
			return;
		}
		if(accountType == "checking") {
			if(checkingBalance < amount) {
				throw new Error("You cannot withdraw $" + amount + " from the checking account!");
			}
			checkingBalance -= amount;
			totalBankBalance -= amount;
		} else if(accountType == "savings") {
			if(savingsBalance < amount) {
				throw new Error("You cannot withdraw $" + amount + " from the savings account!");
			}
			savingsBalance -= amount;
			totalBankBalance -= amount;
		}
	}
	
	public static Double getTotalBankBalance() {
		return totalBankBalance;
	}
	
	public String toString() {
		
		return "<Account no. " + accountNumber + " total balance: $" + String.format("%.2f", (savingsBalance + checkingBalance)) + " />"; 
	}

}
