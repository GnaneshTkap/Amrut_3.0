import OtApproval from "../AmrutPages/hrms/components/overtime/OtApproval";
import OtRequestForm from "../AmrutPages/hrms/components/overtime/OtRequest";
import { Tabs } from "../ui/tabs";

export function AnimatedTab() {
  const tabs = [
    {
      title: "Request",
      value: "Request",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 text-xl  font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Overtime request</p>
          <OtRequestForm />
        </div>
      ),
    },
    {
      title: "Approval",
      value: "Approval",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Overtime Approvals</p>
          <OtApproval />
        </div>
      ),
    },
  ];

  return (
    <div className="  h-[40rem] [perspective:1000px] relative  flex flex-col max-w-[1160px] mx-auto w-full  items-start justify-start mt-20">
      <Tabs tabs={tabs} />
    </div>
  );
}
