// THIS IS A HELPER FUNCTION FOR FORMATTING CALL DATA FOR ACTIVITY TAB

export function getActivity(calls) {
    let activityArr =[]
        for (let call of calls) {

            if (!call.from) {
                call.from = 'Unknown'
            }
            activityArr.push(call)
        }
    
        return activityArr
    }