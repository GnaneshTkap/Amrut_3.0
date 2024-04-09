import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileBar from "./ProfileBar";
import Theme from "./Theme";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <header class="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container flex h-14 max-w-screen-2xl items-center">
        <Sidebar />
        <Link class="ml-2 flex items-center space-x-2" to="/">
          <Avatar className="h-6 w-8">
            <AvatarImage src="/logo.png" />
            <AvatarFallback>TKAP</AvatarFallback>
          </Avatar>
          <span className="hidden font-bold sm:inline-block">
            <span className="text-red-500 font-bold">Toyota</span> Kirloskar
            Auto Parts
          </span>
        </Link>
        <div class="mr-4 hidden md:flex"></div>

        <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div class="w-full flex-1 md:w-auto md:flex-none">
            <form className="relative flex-1 ml-auto sm:flex-initial">
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
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                className="pl-8 w-full sm:w-64 md:w-48 lg:w-64 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white shadow-none appearance-none dark:bg-gray-950"
                placeholder="Search..."
                type="search"
              />
            </form>
          </div>
          <nav class="flex items-center gap-3">
            <Theme />

            <div className="hidden md:flex items-center gap-2">
              <ProfileBar />
              <div className="grid gap-1 text-xs font-medium">
                <div>Gnanesh Nayak</div>
                <div className="text-50">Employee ID: 1198</div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
