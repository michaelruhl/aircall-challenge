import React, { useState, useEffect } from "react";
import axios from "axios";
// THIS IS A PATCH REQUEST FOR ARCHIVING CALLS
export function useArchived(props) {
  const [callId, setCallId] = useState([]);

  useEffect(() => {
    async function getArchived() {
      try {
        const response = await axios.patch(
          `https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities/${props}`,
          { is_archived: true } // Request body with JSON data
        );
        console.log(response);
        setCallId(response.data.reverse());
      } catch (err) {
        console.log(err);
      }
    }

    getArchived(); // Call the function to make the request
  }, []);

  return callId; // Return the response data
}
