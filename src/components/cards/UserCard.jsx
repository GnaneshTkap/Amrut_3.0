import React from "react";
import { Meteors } from "../ui/meteors";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// import { Meteors } from "../ui/meteors";

export function UserCard() {
  return (
    <div className="">
      <div className=" w-full relative ">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 max-h-[240px] sm:w-[435px] w-[300px] overflow-hidden rounded-2xl flex flex-col justify-center">
          <div className="flex justify-center flex-col items-center">
            <Avatar className="w-24 h-24">
              <AvatarImage src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Gnanesh Nayak
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              Engineer - Software
            </p>
            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              08-04-2024
            </p>
          </div>

          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
