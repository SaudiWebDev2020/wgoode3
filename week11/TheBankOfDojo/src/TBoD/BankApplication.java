package TBoD;

public class BankApplication {

	public static void main(String[] args) {
		Bank account1 = new Bank();
		account1.deposit("savings", 12.55);
		account1.deposit("checking", 234.5);
		account1.withdraw("savings", 5.22);
		account1.withdraw("checking", 45.6);
		System.out.println(account1.getCheckingBalance());
		System.out.println(account1.getSavingsBalance());
		Bank account2 = new Bank();
		account2.deposit("savings", 10000d);
		System.out.println(Bank.getTotalBankBalance());
		// account2.savingsBalance = 0;
		System.out.println(account1);
		System.out.println(account2);
	}
	
}
