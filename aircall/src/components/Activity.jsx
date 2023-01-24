import React from "react";
import Moment from "react-moment";
import {
  faSquarePhone,
  faPhoneSlash,
  faPhone,
  faCircleArrowUp,
  faCircleArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActivities } from "../hooks/useActivities";
import { getActivity } from "../helper/getActivity";
import { Call } from "./Call";

// THIS IS THE ACTIVITY COMPONENT PASSING DATA TO CALL COMPONENT

export const Activity = (props) => {
  const { calls } = props  
  const callArr = getActivity(calls);

  return (
    <div>
      {callArr.map((data) => (
        <Call data={data} />
      ))}
    </div>
  );
};
