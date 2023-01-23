import React, { useState } from "react";
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
import { useArchived } from "../hooks/useArchived";
import axios from "axios";

// THIS IS WHERE THE CALL LIST IS DISPLAYED
// I WOULD LIKE TO REFACTOR THIS WITH A CALLDETAILS COMPONENT FOR BETTER READABILITY

export const Call = (props) => {
  const [details, setDetails] = useState(false);
  // JSON FOR ARCHIVE FUNCTION
  const archived = {
    is_archived: true,
  };
  // ARCHIVE FUNCTION
  const patchRequest = async (url, data) => {
    try {
      const response = await axios.patch(url, data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div key={props.data.id}>
      {/* CONDITIONALLY SHOW CALL DETAILS BASED ON STATE */}
      {!details ? (
        <div
          className="flex flex-col align-center hover:shadow2xl hover:shadowteal600"
          onClick={() => setDetails(!details)}
        >
          <div className="flex justify-center">
            <Moment
              className="flex w-[50%] "
              format="MMMM DD, YYYY"
              date={props.data.created_at}
            />
          </div>
          <div className="flex h-[50px] border border-solid rounded-full border-teal-300 items-center justify-center">
            <div className="w-[85%] flex justify-between items-center">
              <div>
                <FontAwesomeIcon
                  className="text-teal-300 w-[24px] h-[24px]"
                  icon={faPhone}
                />
                {props.data.direction === "inbound" ? (
                  <FontAwesomeIcon
                    className="text-teal-300 w-[24px] h-[24px]"
                    icon={faCircleArrowDown}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="text-teal-300 w-[24px] h-[24px]"
                    icon={faCircleArrowUp}
                  />
                )}
              </div>
              <div
                id="callbadgecontainer"
                className="flex justify-between w-[60%]"
              >
                <div></div>
                <div>
                  <div className="flex flex-col items-center justify-center">
                    {props.data.from}
                    <div style={{ fontSize: "10px" }}>
                      {`Tried to call on ${props.data.via}`}
                    </div>
                  </div>
                </div>
                {props.data.badge ? (
                  <div
                    id="badge"
                    style={{ fontSize: "20px" }}
                    className="flex text-teal-800 rounded-full justify-center items-center self-center border-teal-300 border border-solid bg-teal-400 w-[25px] h-[30px]"
                  >
                    {props.data.badge}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div>
                <Moment className="" format="HH:mm">
                  {props.data.created_at}
                </Moment>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // /////////////////////////////////////////
        // /////////////////////////////////////////
        // CALL DETAILS
        <div
          className="flex py-5 flex-col align-center hover:shadow2xl hover:shadowteal600"
          onClick={() => setDetails(!details)}
        >
          <div className="flex justify-center">
            <Moment
              className="flex w-[50%] "
              format="MMMM DD, YYYY"
              date={props.data.created_at}
            />
          </div>
          <div className="flex h-[100px] border border-solid rounded-full shadow-teal-300 shadow-lg border-teal-300 items-center justify-center">
            <div className="w-[85%] flex justify-between items-center">
              <div>
                <FontAwesomeIcon
                  className="text-teal-300 w-[24px] h-[24px]"
                  icon={faPhone}
                />
                {props.data.direction === "inbound" ? (
                  <FontAwesomeIcon
                    className="text-teal-300 w-[24px] h-[24px]"
                    icon={faCircleArrowDown}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="text-teal-300 w-[24px] h-[24px]"
                    icon={faCircleArrowUp}
                  />
                )}
              </div>
              <div
                id="callbadgecontainer"
                className="flex justify-between w-[60%]"
              >
                <div></div>
                <div>
                  <div className="flex flex-col items-start ">
                    <div>To: {props.data.to}</div>
                    <div>From: {props.data.from}</div>

                    <div style={{ fontSize: "10px" }}>
                      {`Tried to call on ${props.data.via}`}
                    </div>
                  </div>
                </div>
                {props.data.badge ? (
                  <div
                    id="badge"
                    style={{ fontSize: "20px" }}
                    className="flex text-teal-800 rounded-full justify-center items-center self-start border-teal-300 border border-solid bg-teal-400 w-[25px] h-[30px]"
                  >
                    {props.data.badge}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="flex items-center flex-col">
                {/* FORMAT DATE */}
                <Moment className="" format="HH:mm">
                  {props.data.created_at}
                </Moment>
                {/* ARCHIVE BUTTON */}
                <div
                  onClick={() =>
                    patchRequest(
                      `https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities/${props.data.id}`,
                      archived
                    )
                  }
                  className="items-center bg-teal-300 text-white px-4 py-2 rounded-md"
                >
                  Archive
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
