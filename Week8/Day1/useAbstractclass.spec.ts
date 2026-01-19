

import { test } from "@playwright/test";
import { SBIBank } from "./abstraction";

test("RBI Compliance Check", async () => {

  const bank = new SBIBank();

  bank.openAccount();
  bank.depositMoney();
  bank.withdrawMoney();

  console.log(bank.interestRatePolicy());
});