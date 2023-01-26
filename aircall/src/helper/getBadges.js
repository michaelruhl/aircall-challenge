// THIS IS A HELPER FUNCTION FOR FORMATTING CALL DATA FOR INBOX TAB

// determine if multiple call attempts by same number and pull most recent
export function getBadges(calls) {
  // init empty arrays and object
  let fromArray = [];
  let callerArray = [];
  let badgeObj = {};
  let missedArray = [];

  // populate array with missed calls
  for (let call of calls) {
    if (call.call_type === "missed" && !call.is_archived) {
      missedArray.push(call);
    }
  }
  // Assign 'Unknown' to calls with missing 'from' value
  for (let i = 0; i < missedArray.length; i++) {
    if (!missedArray[i].from) {
      missedArray[i].from = "Unknown";
    }
    // Populate fromArray and callerArray and add the 'from' element to badge object with value of 0
    if (!fromArray.includes(missedArray[i].from)) {
      fromArray.push(missedArray[i].from);
      callerArray.push(missedArray[i]);
      badgeObj[missedArray[i].from] = 0;
    } else {
      // if 'from' element is within the array already add 1 to badgeObj
      badgeObj[missedArray[i].from] = badgeObj[missedArray[i].from] + 1;
    }
  }

  for (let call of callerArray) {
    // loop through callerArray and pair badge key with badgeObj value
    // add badge key to callerarray with value of 0
    call["badge"] = 0;
    for (let key in badgeObj) {
      if (call.from == key) {
        call["badge"] = badgeObj[key];
      }
    }
    // if badge is 0 set to ''
    if (call["badge"] === 0) {
      call["badge"] = "";
    }
  }
  return callerArray;
}
