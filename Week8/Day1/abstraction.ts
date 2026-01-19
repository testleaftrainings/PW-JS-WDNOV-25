
import { RBIRegulations } from "./interface";

export abstract class BaseBank {
  
  validateKYC(): void {
    console.log("KYC verified as per RBI norms");
  }

  auditTransaction(): void {
    console.log("Transaction logged for RBI audit");
  }

  // Must be defined by every bank
  interestRatePolicy(): number{
    return 5.0 ;
  }
}


// ### **Example: SBI Bank**

export class SBIBank extends BaseBank implements RBIRegulations {

  openAccount(): void {
    console.log("SBI account opened");
  }

  depositMoney(): void {
    console.log("Money deposited in SBI");
  }

  withdrawMoney(): void {
    console.log("Money withdrawn from SBI");
  }

  interestRatePolicy(): number {
    return 4.0;
  }
}


//  **Example: HDFC Bank**

export class HDFCBank extends BaseBank implements RBIRegulations {

  openAccount(): void {
    console.log("HDFC account opened digitally");
  }

  depositMoney(): void {
    console.log("Money deposited in HDFC");
  }

  withdrawMoney(): void {
    console.log("Money withdrawn via ATM");
  }

  interestRatePolicy(): number {
    return 3.5;
  }
}