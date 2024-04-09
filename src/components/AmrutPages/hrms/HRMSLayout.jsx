import { AnimatedTab } from "@/components/Shared/AnimatedTabs";
import OtApproval from "./components/overtime/OtApproval";
import OtRequestForm from "./components/overtime/OtRequest";

const HRMSLayout = () => {
  const tabs = [
    {
      title: "Request",
      value: "Request",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 text-2xl  font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
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
    <div>
      <AnimatedTab tabs={tabs} />
    </div>
  );
};

export default HRMSLayout;
