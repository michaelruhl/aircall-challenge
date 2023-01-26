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
import { getArchived } from "../helper/getArchived";
import { Call } from "./Call";

// THIS IS THE ARCHIVE COMPONENT PASSING DATA TO CALL COMPONENT

export const Archive = (props) => {
const { calls } = props  
const callArr = getArchived(calls);
  return (
    <div>
      {callArr.map((data) => (
        <Call key={data.id} data={data} />
      ))}
    </div>
  );
};
