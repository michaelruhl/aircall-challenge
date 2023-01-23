import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import {
  faSquarePhone,
  faPhoneSlash,
  faPhone,
  faCircleArrowUp,
  faCircleArrowDown,
  faInbox,
  faFolderPlus,
  faBolt,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Inbox } from "./components/Inbox";
import { Archive } from "./components/Archive";
import { Activity } from "./components/Activity";
import { useActivities } from "./hooks/useActivities";
import { getBadges } from "./helper/getBadges";

export default function App() {
  // states for determining which tab is selected
  const [inbox, setInbox] = useState(true);
  const [archive, setArchive] = useState(false);
  const [activity, setActivity] = useState(false);

  const calls = useActivities();
  const callArr = getBadges(calls);

  // determine how many notifications in inbox
  let notifications = callArr.length;
  for (let notification of callArr) {
    if (notification.badge) {
      notifications--;
      notifications = notifications + notification.badge;
    }
  }

  // API call for resetting archive
  const resetRequest = async (url) => {
    try {
      const response = await axios.patch(url);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div id="body pt-0">
        <div className="basis-1/3 items-center flex justify-center  rounded-md">
          <div
            onClick={() =>
              resetRequest(
                `https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/reset`
              )
            }
            className="cursor-pointer items-center w-[80%] flex justify-center bg-teal-300 text-6xl text-white px-4 py-2 rounded-md"
          >
            RESET ARCHIVE
          </div>
        </div>
        <div
          id="main-container"
          className=" rounded-xl shadow border-4 border-teal-300 text-teal-300 flex flex-col shadow mt-20 w-[360px] h-[740px] cursor-pointer bg-gray-800 "
        >
          <div
            id="header"
            style={{ fontSize: "56px" }}
            className="p-0 bg-gradient-to-b from-cyan-500 to-teal-500 text-white justify-between items-center rounded-lg w-[100%] h-[75px] flex"
          >
            <FontAwesomeIcon
              className="text-[#F1F1F2] flex justify-end basis-1/3 rounded-full pl-3 p-3 w-[50px] h-[50px]"
              icon={faSquarePhone}
            />
            <div>Aircall</div>
            <div></div>
            <FontAwesomeIcon
              className="text-[#F1F1F2] flex basis-1/3 rounded-full pl-3 p-3 w-[25px] h-[25px]"
              icon={faBars}
            />
          </div>

          <div
            id="callContainer"
            className="overflow-hidden h-[100%] lg:h-[475px] mb10"
          >
            {/* conditionally showing components based on state */}
            {inbox ? <Inbox /> : ""}
            {archive ? <Archive /> : ""}
            {activity ? <Activity /> : ""}
          </div>
          <div
            id="Navbar"
            className="p-0 bg-gradient-to-b from-cyan-500 to-teal-500 rounded-lg border w-[100%] h-[75px] flex justify-between"
          >
            <div className="flex basis-1/3">
              {/* logic for showing selected tab */}
              <FontAwesomeIcon
                onClick={
                  !inbox
                    ? () => (
                        setInbox(!inbox),
                        activity ? setActivity(!activity) : null,
                        archive ? setArchive(!archive) : null
                      )
                    : null
                }
                style={inbox ? { color: "white" } : ""}
                className="text-teal-800 pl-3 py-3 w-[50px] h-[50px]"
                icon={faInbox}
              />
              {/* logic for calculating notifications */}
              {notifications ? (
                <div
                  id="badge"
                  style={{ fontSize: "20px" }}
                  className="flex text-teal-800 rounded-full justify-center items-center self-start border-teal-300 border border-solid bg-teal-400 w-[25px] h-[30px]"
                >
                  {notifications}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <FontAwesomeIcon
              onClick={
                !activity
                  ? () => (
                      setActivity(!activity),
                      archive ? setArchive(!archive) : null,
                      inbox ? setInbox(!inbox) : null
                    )
                  : null
              }
              style={activity ? { color: "white" } : ""}
              className="basis-1/3 text-teal-800 p-3 w-[50px] h-[50px]"
              icon={faBolt}
            />
            <FontAwesomeIcon
              onClick={
                !archive
                  ? () => (
                      setArchive(!archive),
                      activity ? setActivity(!activity) : null,
                      inbox ? setInbox(!inbox) : null
                    )
                  : null
              }
              style={archive ? { color: "white" } : ""}
              className="basis-1/3 text-teal-800 p-3 w-[50px] h-[50px]"
              icon={faFolderPlus}
            />
          </div>
        </div>
        <div className="basis-1/3"></div>
      </div>
    </div>
  );
}
