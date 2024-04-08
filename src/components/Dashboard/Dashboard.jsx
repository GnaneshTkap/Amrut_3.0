import React from "react";

import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";
import { DashboardGrid } from "./Layout";
import { UserCard } from "../cards/UserCard";
import { amrutList } from "@/constant/amrutList";
import AmrutCards from "../cards/AmrutCards";

const Dashboard = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 px-8"
      >
        <div className="flex  mt-[80px] gap-10  ">
          <div className="flex flex-col gap-6 ">
            <UserCard />
            <UserCard />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 h-[32rem] items-start overflow-y-auto w-full relative p-2 gap-1 flex-1 rounded-lg border shadow-xl bg-gradient-to-br overflow-hidden">
            {amrutList.map((v) => (
              <AmrutCards
                name={v.name}
                key={v.id}
                description={v.description}
                image={v.image}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Dashboard;
