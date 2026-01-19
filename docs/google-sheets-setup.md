# Google Sheets Integration Setup

To connect your form to Google Sheets without paying for third-party services, we will use a small **Google Apps Script**.

## Step 1: Create the Sheet
1.  Go to [Google Sheets](https://sheets.new) and create a new sheet.
2.  Name it "Horizon Vert Giveaway Entries".
3.  In the first row (Header), add these columns matching our data:
    *   **A1**: `Timestamp`
    *   **B1**: `Name` (We haven't added this field yet, but usually needed!)
    *   **C1**: `Email`
    *   **D1**: `Snack`
    *   **E1**: `Team`

## Step 2: Add the Script
1.  In the Sheet, go to **Extensions** > **Apps Script**.
2.  Delete any code there and paste this:

```javascript
var SHEET_NAME = "Sheet1";

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName(SHEET_NAME);

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow() + 1;

    var newRow = headers.map(function(header) {
      if (header === 'Timestamp') return new Date();
      // Map the incoming parameters to the header name (case insensitive matching)
      var paramName = Object.keys(e.parameter).find(k => k.toLowerCase() === header.toLowerCase());
      return paramName ? e.parameter[paramName] : '';
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  finally {
    lock.releaseLock();
  }
}
```

3.  Click the **Save** icon (disk).

## Step 3: Deploy
1.  Click **Deploy** (blue button top right) > **New deployment**.
2.  Click the **Select type** gear icon > **Web app**.
3.  **Description**: "Giveaway API".
4.  **Execute as**: `Me (your email)`.
5.  **Who has access**: `Anyone` (IMPORTANT: This allows the form to submit without login).
6.  Click **Deploy**.
7.  Authorize the script if asked (Click *Review permissions* > Choose account > *Advanced* > *Go to (unsafe)* > *Allow*).
8.  **Copy the Web App URL** (starts with `https://script.google.com/macros/s/...`).

## Step 4: Share the URL
Paste that URL in the chat for me!
