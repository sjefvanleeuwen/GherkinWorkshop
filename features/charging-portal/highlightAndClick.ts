import { Page } from 'playwright';

// Helper function that highlights an element and clicks it
async function highlightAndClick(page: Page, selector: string, options: { force?: boolean } = {}): Promise<void> {
  // Ensure the element exists before trying to highlight or click it
  const elementHandle = await page.$(selector);

  if (!elementHandle) {
    console.error(`Element with selector "${selector}" not found`);
    return;
  }

  // Inject JavaScript to apply custom CSS for highlighting
  await page.evaluate((selector) => {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      // Apply CSS to highlight the element
      element.style.border = '4px solid yellow';  // Red border
      element.style.backgroundColor = 'rgba(255, 255, 0, 1)';  // Light red background
      element.style.color = "black";
      element.style.transition = 'border 0.3s ease, background-color 0.3s ease';  // Smooth transitions
    }
  }, selector);

  // Click the element after highlighting it
  await page.click(selector, options);
}

export default highlightAndClick;