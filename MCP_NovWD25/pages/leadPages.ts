import { Page } from "@playwright/test";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLoginPage() {
    await this.page.goto("http://leaftaps.com/opentaps/control/main");
  }

  async enterUsername(username: string) {
    await this.page.locator("#username").fill(username);
  }

  async enterPassword(password: string) {
    await this.page.locator("#password").fill(password);
  }

  async clickLogin() {
    await this.page.locator(".decorativeSubmit").click();
  }

  async clickCRMSFA() {
    await this.page.locator("text='CRM/SFA'").click();
  }
}

export class CreateLeadPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickLeadsTab() {
    await this.page.locator("a:has-text('Leads')").click();
  }

  async clickCreateLead() {
    await this.page.locator("a:has-text('Create Lead')").click();
  }

  async enterLeadDetails(firstName: string, lastName: string, companyName: string) {
    await this.page.locator("#createLeadForm_firstName").fill(firstName);
    await this.page.locator("#createLeadForm_lastName").fill(lastName);
    await this.page.locator("#createLeadForm_companyName").fill(companyName);
  }

  async submitLead() {
    await this.page.locator(".smallSubmit").click();
  }
}