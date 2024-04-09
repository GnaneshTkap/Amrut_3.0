import OtApproval from "../AmrutPages/hrms/components/overtime/OtApproval";
import OtRequestForm from "../AmrutPages/hrms/components/overtime/OtRequest";
import { Tabs } from "../ui/tabs";

export function AnimatedTab({ tabs }) {
  return (
    <div className="  h-[40rem] [perspective:1000px] relative  flex flex-col max-w-[1160px] mx-auto w-full  items-start justify-start mt-20">
      <Tabs tabs={tabs} />
    </div>
  );
}
