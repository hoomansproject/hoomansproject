// SECURE Configuration Template for Hoomans Contact Form
// 
// IMPORTANT: This file shows how to implement environment-based configuration
// for maximum security. Use this approach for production deployments.

// Method 1: Environment Variables (Recommended for production)
// Use this with build tools like Webpack, Vite, or Netlify
const GOOGLE_SHEETS_CONFIG = {
  // These would be injected at build time from environment variables
  scriptURL: process.env.VITE_GOOGLE_SCRIPT_URL || process.env.REACT_APP_GOOGLE_SCRIPT_URL || 'REPLACE_WITH_YOUR_URL',
  sheetName: process.env.VITE_SHEET_NAME || 'Contact Form Submissions',
  enableEmailNotification: process.env.VITE_ENABLE_EMAIL === 'true',
  notificationEmail: process.env.VITE_NOTIFICATION_EMAIL || 'hello@hoomans.com'
};

// Method 2: Server-Side Injection (For static hosting with CI/CD)
// Your build process would replace these placeholders:
/*
const GOOGLE_SHEETS_CONFIG = {
  scriptURL: '{{GOOGLE_SCRIPT_URL}}',
  sheetName: '{{SHEET_NAME}}',
  enableEmailNotification: {{ENABLE_EMAIL}},
  notificationEmail: '{{NOTIFICATION_EMAIL}}'
};
*/

// Method 3: Runtime Fetch (Most secure - requires backend)
// Fetch config from your own API endpoint:
/*
async function loadConfig() {
  try {
    const response = await fetch('/api/config');
    const config = await response.json();
    return config.googleSheets;
  } catch (error) {
    console.error('Failed to load config:', error);
    throw new Error('Configuration not available');
  }
}
*/

// Security Best Practices:
// 1. Never commit real URLs to public repositories
// 2. Use environment variables in CI/CD pipelines
// 3. Validate all inputs on both client and server
// 4. Implement rate limiting and domain restrictions
// 5. Monitor usage through Google Apps Script logs

// Example Netlify deployment with environment variables:
// 1. Set VITE_GOOGLE_SCRIPT_URL in Netlify dashboard
// 2. Build command: npm run build
// 3. Your build tool automatically replaces process.env values

// Example GitHub Actions workflow:
/*
- name: Build with environment variables
  env:
    VITE_GOOGLE_SCRIPT_URL: ${{ secrets.GOOGLE_SCRIPT_URL }}
    VITE_NOTIFICATION_EMAIL: ${{ secrets.NOTIFICATION_EMAIL }}
  run: npm run build
*/

export { GOOGLE_SHEETS_CONFIG };
