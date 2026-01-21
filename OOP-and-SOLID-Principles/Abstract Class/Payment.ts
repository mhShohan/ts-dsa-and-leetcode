abstract class PaymentProcessor {
  constructor(
    protected amount: number,
    protected currency: string = 'USD',
  ) {}

  // Abstract methods that must be implemented
  abstract processPayment(): boolean;
  abstract getPaymentDetails(): string;

  // Abstract getter
  abstract get fee(): number;

  // Concrete methods with shared logic
  validateAmount(): boolean {
    return this.amount > 0 && this.amount <= 100000;
  }

  // Template method pattern
  execute(): void {
    console.log(`Processing payment of ${this.formatCurrency(this.amount)}...`);

    if (!this.validateAmount()) {
      throw new Error('Invalid amount');
    }

    const success = this.processPayment();

    if (success) {
      console.log('✅ Payment successful!');
      console.log(this.getPaymentDetails());
      console.log(`Fee: ${this.formatCurrency(this.fee)}`);
    } else {
      console.log('❌ Payment failed');
    }
  }

  private formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: this.currency,
    }).format(amount);
  }
}

class CreditCardProcessor extends PaymentProcessor {
  private cardNumber: string;
  private cvv: string;
  readonly fee: number = 2.5; // 2.5% fee

  constructor(amount: number, cardNumber: string, cvv: string) {
    super(amount);
    this.cardNumber = cardNumber;
    this.cvv = cvv;
  }

  processPayment(): boolean {
    // Simulate payment processing
    console.log(`Processing credit card: ${this.maskCardNumber(this.cardNumber)}`);
    // In real app: API call to payment gateway
    return Math.random() > 0.1; // 90% success rate
  }

  getPaymentDetails(): string {
    return `Credit Card payment - Card: ${this.maskCardNumber(this.cardNumber)}`;
  }

  // Additional validation specific to credit cards
  validateCard(): boolean {
    return this.cardNumber.length === 16 && this.cvv.length === 3;
  }

  private maskCardNumber(cardNumber: string): string {
    return `****-****-****-${cardNumber.slice(-4)}`;
  }

  // Override with additional validation
  execute(): void {
    if (!this.validateCard()) {
      throw new Error('Invalid card details');
    }
    super.execute();
  }
}

class PayPalProcessor extends PaymentProcessor {
  private email: string;
  readonly fee: number = 1.5; // 1.5% fee

  constructor(amount: number, email: string) {
    super(amount);
    this.email = email;
  }

  processPayment(): boolean {
    console.log(`Processing PayPal payment for: ${this.email}`);
    // Simulate PayPal API call
    return Math.random() > 0.05; // 95% success rate
  }

  getPaymentDetails(): string {
    return `PayPal payment - Email: ${this.email}`;
  }
}

class CryptoProcessor extends PaymentProcessor {
  private walletAddress: string;
  readonly fee: number = 0.5; // 0.5% fee

  constructor(amount: number, walletAddress: string, currency: string) {
    super(amount, currency);
    this.walletAddress = walletAddress;
  }

  processPayment(): boolean {
    console.log(`Processing crypto payment to: ${this.maskWallet(this.walletAddress)}`);
    // Blockchain transaction
    return Math.random() > 0.2; // 80% success rate
  }

  getPaymentDetails(): string {
    return `Crypto payment - Wallet: ${this.maskWallet(this.walletAddress)} - Currency: ${this.currency}`;
  }

  private maskWallet(wallet: string): string {
    return `${wallet.slice(0, 6)}...${wallet.slice(-4)}`;
  }
}

// Usage
try {
  const creditCard = new CreditCardProcessor(150.75, '4111111111111111', '123');
  creditCard.execute();

  console.log('\n---\n');

  const paypal = new PayPalProcessor(89.99, 'user@example.com');
  paypal.execute();

  console.log('\n---\n');

  const crypto = new CryptoProcessor(500, '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', 'ETH');
  crypto.execute();
} catch (error: any) {
  console.error('Error:', error.message);
}
