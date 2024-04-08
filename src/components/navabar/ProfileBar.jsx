"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
// import { themes } from '@/constants';
// import { useTheme } from '@/context/ThemeProvider';
// import Image from "next/image";

const ProfileBar = () => {
  //   const { mode, setMode } = useTheme();

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger
          className="focus:bg-light-900
         data-[state=open]:bg-light-900 dark:focus:bg-dark-200
          dark:data-[state=open]:bg-dark-200"
        >
          <span className="relative flex shrink-0 overflow-hidden rounded-full w-6 h-6">
            <img
              className="aspect-square h-full w-full"
              alt="Avatar"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            />
            <div>GN</div>
          </span>
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[200px] rounded border rounded border bg-white py-2 dark:border-dark-400 dark:bg-black dark:text-white flex flex-col gap-2">
          <button className="hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ease-in-out w-full p-2 rounded-lg  ">
            <div className="flex items-center gap-3 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
                className="w-4 h-6 text-blue-500"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M9.49 1.17c-.38-1.56-2.6-1.56-2.98 0a1.53 1.53 0 0 1-2.29.95c-1.37-.84-2.94.73-2.1 2.1.54.89.06 2.05-.95 2.3-1.56.37-1.56 2.6 0 2.97a1.53 1.53 0 0 1 .95 2.29c-.84 1.37.73 2.94 2.1 2.1a1.53 1.53 0 0 1 2.3.95c.37 1.56 2.6 1.56 2.97 0a1.53 1.53 0 0 1 2.29-.95c1.37.84 2.94-.73 2.1-2.1a1.53 1.53 0 0 1 .95-2.3c1.56-.37 1.56-2.6 0-2.97a1.53 1.53 0 0 1-.95-2.29c.84-1.37-.73-2.94-2.1-2.1a1.53 1.53 0 0 1-2.3-.95ZM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-grey-700 font-semibold text-sm  dark:text-slate-100">
                Manage account
              </span>
            </div>
          </button>
          <button className="hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ease-in-out w-full p-2 rounded-lg ">
            <div className="flex items-center gap-3 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 15 16"
                className="w-4 h-6 text-blue-500"
              >
                <path
                  fill="currentColor"
                  d="M1 0a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Zm10.3 9.3a1 1 0 0 0 1.4 1.4l3-3a1 1 0 0 0 0-1.4l-3-3a1 1 0 1 0-1.4 1.4L12.58 6H5a1 1 0 1 0 0 2h7.59l-1.3 1.3Z"
                ></path>
              </svg>
              <span className="text-gray-700 font-semibold text-sm dark:text-slate-100">
                Sign out
              </span>
            </div>
          </button>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default ProfileBar;
