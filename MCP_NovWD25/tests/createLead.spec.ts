import { test } from "@playwright/test";
import { LoginPage, CreateLeadPage } from "../pages/leadPages";

test("Create a lead in LeaFtaps", async ({ page }) => {
  // Initialize page objects
  const loginPage = new LoginPage(page);
  const createLeadPage = new CreateLeadPage(page);

  // Navigate to login page
  await loginPage.navigateToLoginPage();

  // Perform login
  await loginPage.enterUsername("demosalesmanager");
  await loginPage.enterPassword("crmsfa");
  await loginPage.clickLogin();

  // Navigate to CRM/SFA
  await loginPage.clickCRMSFA();

  // Navigate to Create Lead page
  await createLeadPage.clickLeadsTab();
  await createLeadPage.clickCreateLead();

  // Fill in lead details
  await createLeadPage.enterLeadDetails("Ravi", "R", "testleaf");

  // Submit lead
  await createLeadPage.submitLead();

  // Debugging step: Log the page content to identify the correct selector
  const pageContent = await page.content();
  console.log("Page content:", pageContent);

  // Verify lead creation (example verification step)
  const confirmationMessage = await page.locator(".successMessage").textContent();
  console.log("Lead creation confirmation: ", confirmationMessage);
});