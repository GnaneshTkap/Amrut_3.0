"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/constant/Index";
import { useTheme } from "@/context/ThemeProvider";

const Theme = () => {
  const { mode, setMode } = useTheme();

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger
          className="focus:bg-light-900
         data-[state=open]:bg-light-900 dark:focus:bg-dark-200
          dark:data-[state=open]:bg-dark-200"
        >
          {mode === "light" ? (
            <img
              src="/assets/icons/sun.svg"
              alt="sun"
              width={20}
              height={20}
              className="active-theme"
            />
          ) : (
            <img
              src="/assets/icons/moon.svg"
              alt="moon"
              width={20}
              height={20}
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent
          className="absolute right-[-3rem] mt-3 min-w-[120px] 
        rounded border bg-white py-2 dark:border-dark-400 dark:bg-black dark:text-white"
        >
          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              className="flex items-center gap-4 px-2.5 py-2
                         focus:bg-light-800 dark:focus:bg-dark-400"
              onClick={() => {
                setMode(item.value);
                if (item.value !== "system") {
                  localStorage.theme = item.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <img
                src={item.icon}
                alt={item.value}
                width={16}
                height={16}
                className={`${mode === item.value && "active-theme"}`}
              />
              <p
                className={`body-semibold text-light-500 
              ${
                mode === item.value
                  ? "text-primary-500"
                  : "text-dark-100 dark:text-light-900"
              }
              `}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
