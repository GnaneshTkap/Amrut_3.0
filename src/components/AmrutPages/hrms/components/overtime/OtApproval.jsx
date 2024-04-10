import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useState } from "react";

import { CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { OTDialog } from "./OtDialog";
import { OTSingleDialog } from "./OtSingleDialog";

export default function OtApproval() {
  const [selectedValue, setSelectedValue] = useState("Self");
  const [addTab, setAddTab] = useState([1]);

  const handleChange = (e) => {
    setSelectedValue(e);
  };

  return (
    <div className="flex flex-col w-full border-t h-[550px]">
      <div className="   shadow-sm container flex-1 flex flex-col gap-2  p-4 mx-auto ">
        <Card key="1" className=" ">
          <CardContent>
            <div className="   w-full p-4 flex items-center justify-between mt-2">
              <div className="flex items-center gap-4 ">
                <Button size="sm" variant="outline">
                  Select All
                </Button>
                <Button size="sm" variant="outline">
                  Deselect All
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex justify-end gap-2 md:col-start-2">
                  <OTDialog
                    color="bg-green-600 hover:bg-green-700"
                    type="Approve All"
                  />
                  <OTDialog color="" type="Reject All" variant="destructive" />
                </div>
              </div>
            </div>
            <Table className="">
              <TableBody className="border">
                <TableRow className="border hover:border-2 hover:border-slate-400 hover:shadow-xl border-slate-200 hover:transform hover:scale-102 transition-transform mt-4 ">
                  <TableCell>
                    <Checkbox id="select-1" />
                  </TableCell>
                  <TableCell className="ml-0 pr-0 ">
                    <div className="flex  flex-col  ">
                      <span className="font-medium text-xs ">
                        Gnanesh nayak
                      </span>
                      <div>
                        <span className="font-medium text-xs mr-2 ">
                          EMP_ID:
                        </span>
                        <span className="text-xs ">A1198</span>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className=" pl-0 w-[142px]">
                    <div className="flex flex-col  justify-start">
                      <div>
                        <span className="font-medium text-xs mr-2">
                          OT Date:
                        </span>
                        <span className="text-xs ">06-04-2023</span>
                      </div>
                      <div>
                        <span className="font-medium text-xs mr-2">
                          OT From:
                        </span>
                        <span className="text-xs ml-[1px]">12:01 PM</span>
                      </div>
                      <div>
                        <span className="font-medium text-xs mr-2">
                          OT Till:
                        </span>
                        <span className="text-xs ml-[10px]"> 5:02 PM</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-0 w-[180px]">
                    <div className="flex flex-col  justify-start">
                      <div>
                        <span className="font-medium text-xs mr-2">
                          Applied by:
                        </span>
                        <span className=" text-xs ">Gnanesh nayak</span>
                      </div>
                      <div>
                        <span className="font-medium text-xs mr-2">
                          Designation:
                        </span>
                        <span className="text-xs">Group Lead</span>
                      </div>
                      <div>
                        <span className="font-medium text-xs mr-2">
                          Applied On:
                        </span>
                        <span className="text-xs">2023-06-14</span>
                      </div>
                    </div>
                    {/* <span className="text-xs">3h</span> */}
                  </TableCell>
                  <TableCell className="px-0 w-[115px]">
                    <div>
                      <span className="font-medium text-xs mr-2">
                        OT Hours:
                      </span>
                      <span className="text-xs">3h</span>
                    </div>
                    <div>
                      <span className="font-medium text-xs mr-2">
                        OT Minutes:
                      </span>
                      <span className="text-xs">20m</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-0">
                    <div className="flex gap-2 items-center">
                      <span className="font-semibold "> remarks:</span>
                      <span className="text-xs">
                        Implemeted overtime request and approval page
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="flex gap-4 items-center w-full h-full ">
                    <OTSingleDialog />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
