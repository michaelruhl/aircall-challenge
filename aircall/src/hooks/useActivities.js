import React, { useState, useEffect } from "react";
import axios from "axios";
// THIS IS A GET REQUEST FOR GETTING CALLS
export function useActivities() {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    async function getActivities() {
      try {
        const response = await axios.get(
          "https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities"
        );
        console.log(response);
        setCalls(response.data.reverse());
      } catch (err) {
        console.log(err);
      }
    }

    getActivities();
  }, []);

  return calls;
}
