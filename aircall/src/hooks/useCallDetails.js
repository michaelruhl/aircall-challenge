import React, { useState, useEffect } from "react";
import axios from "axios";

// THIS IS AN CUSTOM HOOK MEANT FOR GETTING CALL DETAILS IT IS CURRENTLY UNUSED

export function useCallDetails(props) {
  const [callId, setCallId] = useState([]);

  useEffect(() => {
    async function getCallDetails() {
      try {
        const response = await axios.get(
          `https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities/${props}`
        );
        console.log(response);
        setCallId(response.data.reverse());
      } catch (err) {
        console.log(err);
      }
    }

    getCallDetails();
  }, []);

  return callId;
}
