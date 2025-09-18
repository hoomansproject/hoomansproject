// Google Sheets Configuration
// Replace 'YOUR_SCRIPT_ID' with your actual Google Apps Script Web App URL
// You can get this by creating a Google Apps Script project and deploying it as a web app

const GOOGLE_SHEETS_CONFIG = {
  // Replace with your Google Apps Script Web App URL
  scriptURL: 'https://script.google.com/macros/s/AKfycbwvJmCr83BS0seoNzfWtHc6EFI1FIJzZLQa3KsIN6trkfrhHpyCrmQZPqA4S2kvBajm/exec',
  sheetName: 'Contact Form Submissions', // Name of your Google Sheet
  enableEmailNotification: true, // Set to true if you want email notifications
  notificationEmail: 'faarizsalman003@gmail.com' // Email to receive notifications
};

// Instructions:
// 1. Create a new Google Sheet
// 2. Create a new Google Apps Script project (script.google.com)
// 3. Copy the Apps Script code provided below
// 4. Deploy as web app with "Anyone" access
// 5. Replace 'YOUR_SCRIPT_ID' above with your deployment URL
