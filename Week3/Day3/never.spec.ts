import { test, expect } from "@playwright/test";

// A function that always stops the test

function stopTest(message: string): never {
    throw new Error(message);  // ❌ Test execution stops here
}

test("Login test with never example", async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    const title = await page.title();

    if (title !== "Login") { // when the title value is false 
        stopTest("Login page did not load correctly"); // ✅ never
    }

    // ✅ This line runs ONLY if the title is correct
    console.log("Test continues safely...");
});