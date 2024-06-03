// TODO: Modify this function
function generateShortCode(storeId, transactionId) {
  /* Change the storeId to 3-digit code e.g 1 -> 001, 20 -> 020 */
  const storeIdStr = storeId.toString().padStart(3, '0');
  
  /* Change current date to a 3-digit code e.g 1 Jan -> 001, 10 Jan -> 010 */
  const today = new Date(); 
  const startOfYear = new Date(today.getFullYear(), 0, 1);
  const diff = today - startOfYear + (startOfYear.getTimezoneOffset() - today.getTimezoneOffset()) * 60000;
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
  const dateStr = dayOfYear.toString().padStart(3, '0');
  
  /* Change the transactionId to 4-digit code e.g 1 -> 0001, 200 -> 0200 */
  const transactionIdStr = transactionId.toString().padStart(4, '0');
  
  /* Combine all string into a big integer */
  const combinedStr = storeIdStr + dateStr + transactionIdStr;
  const combinedNum = BigInt(combinedStr);  
  
  /* Change the big integer from decimal to base 36 */
  let finalCode = combinedNum.toString(36);
  /* Format the code to ensure consistency, all generated code is 9-digit */
  finalCode = finalCode.padStart(9, '0');
  
  return finalCode;
}

// TODO: Modify this function
function decodeShortCode(shortCode) {
  /* Transfer the code to a base 36, then a decimal */
  const combinedNumber = BigInt(parseInt(shortCode, 36));
  const combinedStr = combinedNumber.toString().padStart(10, '0');

  /* Extract different components from the decimal */
  const storeId = parseInt(combinedStr.substring(0, 3), 10);  // 前三位是店铺ID
  const dayOfYear = parseInt(combinedStr.substring(3, 6), 10);  // 中间三位是年内天数
  const transactionId = parseInt(combinedStr.substring(6, 10), 10);  // 最后四位是交易ID

  /* Transfer the days back to a normal date */
  const year = new Date().getFullYear();
  const shopDate = new Date(year, 1, 0);
  shopDate.setDate(dayOfYear);
  
  return {
      storeId: storeId,
      shopDate: shopDate,
      transactionId: transactionId
  };
}

// ------------------------------------------------------------------------------//
// --------------- Don't touch this area, all tests have to pass --------------- //
// ------------------------------------------------------------------------------//
function RunTests() {

    var storeIds = [175, 42, 0, 9]
    var transactionIds = [9675, 23, 123, 7]

    storeIds.forEach(function (storeId) {
        transactionIds.forEach(function (transactionId) {
            var shortCode = generateShortCode(storeId, transactionId);
            var decodeResult = decodeShortCode(shortCode);
            $("#test-results").append("<div>" + storeId + " - " + transactionId + ": " + shortCode + "</div>");
            AddTestResult("Length <= 9", shortCode.length <= 9);
            AddTestResult("Is String", (typeof shortCode === 'string'));
            AddTestResult("Is Today", IsToday(decodeResult.shopDate));
            AddTestResult("StoreId", storeId === decodeResult.storeId);
            AddTestResult("TransId", transactionId === decodeResult.transactionId);
        })
    })
}

function IsToday(inputDate) {
    // Get today's date
    var todaysDate = new Date();
    // call setHours to take the time out of the comparison
    return (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0));
}

function AddTestResult(testName, testResult) {
    var div = $("#test-results").append("<div class='" + (testResult ? "pass" : "fail") + "'><span class='tname'>- " + testName + "</span><span class='tresult'>" + testResult + "</span></div>");
}