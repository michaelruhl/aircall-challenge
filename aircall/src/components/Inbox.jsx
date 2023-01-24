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
import { getBadges } from "../helper/getBadges";
import { Call } from "./Call"

// THIS IS THE INBOX COMPONENT PASSING DATA TO CALL COMPONENT

export const Inbox = (props) => {
  // const calls = useActivities();
  const { calls } = props
  const callArr = getBadges(calls);
  // console.log(callArr);
  return (
    <div>
      {callArr.map((data) => (
        <Call data={data}/>
      ))}
    </div>
  );
};
