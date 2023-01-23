// THIS IS A HELPER FUNCTION FOR FORMATTING CALL DATA FOR ARCHIVE TAB

export function getArchived(calls) {
  let archivedArr = [];
  for (let call of calls) {
    if (!call.from) {
      call.from = "Unknown";
    }
    if (call.is_archived) {
      archivedArr.push(call);
    }
  }

  return archivedArr;
}
