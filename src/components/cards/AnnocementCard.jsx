import React from "react";
import { Meteors } from "../ui/meteors";
import { TyperEffect } from "../Shared/TyperEffect";

const AnnouncementCard = () => {
  return (
    <div className=" rounded-lg border text-card-foreground overflow-hidden shadow-xl max-h-[248px] sm:w-[435px] overflow-y-auto relative bg-transparent">
      {/* <BackgroundGradientAnimation> */}
      <div className=" p-4 rounded-lg">
        <div className="text-xl font-semibold mb-4 text-black dark:text-white flex gap-2">
          HR <TyperEffect className="text-sm" />
        </div>
        <div className="border-b bg-black dark:border-white mb-0"></div>
        <div className="space-y-6">
          <div className="bg-transparent rounded-lg p-4  bg-opacity-75 ">
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white ">
              HOLIDAY CALENDAR 2024
            </h3>
            <div className="  p-3">
              <p className="text-black dark:text-white">
                Dear All, Holiday calendar for the year 2024 has been published
                under Forms & Templates section for your reference. Please
                note...
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-400">
                  95 Days, 6 Hours, and 5 Minutes ago
                </span>
                <a
                  className="text-blue-600 hover:underline flex items-center"
                  href="#"
                >
                  View More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 w-4 h-4"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" x2="21" y1="14" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-b bg-black dark:border-white "></div>
          <div className="bg-transparent rounded-lg p-4  ">
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
              REG: COMPANY POLICY
            </h3>
            <div className=" rounded-lg p-4">
              <p className="text-black dark:text-white">
                Dear All, This is to notify that some changes have been
                incorporated in our existing Company policy with effective from
                1st....
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-400">
                  347 Days, 5 Hours, and 40 Minutes ago
                </span>
                <a
                  className="text-blue-600 hover:underline flex items-center"
                  href="#"
                >
                  View More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 w-4 h-4"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" x2="21" y1="14" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <Meteors number={2} />
        </div>
      </div>
      {/* </BackgroundGradientAnimation> */}
    </div>
  );
};

export default AnnouncementCard;
