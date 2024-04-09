import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function OtRequestForm() {
  const [selectedValue, setSelectedValue] = useState("Self");
  const [addTab, setAddTab] = useState([1]);

  const handleChange = (e) => {
    setSelectedValue(e);
  };

  // Function to gather form data
  const collectFormData = () => {
    const formData = [];
    addTab.forEach((i) => {
      // const employeeNo = document.getElementById(`employeeNo_${i}`).value;
      const employeeNo = "A1198";
      const employeeName = "Gnanesh";
      const date = document.getElementById(`date_${i}`).value;
      const hours = document.getElementById(`hours_${i}`).value;
      const minutes = document.getElementById(`minutes_${i}`).value;
      const from = document.getElementById(`from_${i}`).value;
      const to = document.getElementById(`to_${i}`).value;
      const remarks = document.getElementById(`remarks_${i}`).value;

      formData.push({
        employeeNo,
        employeeName,
        date,
        hours,
        minutes,
        from,
        to,
        remarks,
      });
    });
    return formData;
  };

  // Function to handle form submission
  const handleSubmit = () => {
    const formData = collectFormData();
    // Do something with the formData, like sending it to an API
    console.log(formData);
  };

  return (
    <div className="flex flex-col w-full h-full border-t overflow-auto custom-scrollbar">
      <div className="text-card-foreground shadow-sm container flex-1 flex flex-col gap-4 p-4 mx-auto rounded-md ">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <div className="text-sm font-bold mb-2">Overtime Type</div>
            <Select onValueChange={handleChange}>
              <SelectTrigger className="w-[180px] h-8">
                <SelectValue placeholder={selectedValue} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Self">Self</SelectItem>
                <SelectItem value="Others">Others</SelectItem>
                <SelectItem value="Training">Training</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-bold">Employee NO:</div>
            <Input className="w-[200px]" placeholder={"A1998"} disabled />
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-bold">Employee Name:</div>
            <Input
              className="w-[200px]"
              placeholder="Gnanesh nayak k v"
              disabled
            />
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-bold">Department:</div>
            <Input className="w-[250px]" placeholder="Finance" disabled />
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-bold">Section:</div>
            <Input
              className="w-[200px]"
              placeholder="Information Science"
              disabled
            />
          </div>
        </div>

        <Card className="">
          <CardContent className="p-0 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="pr-0">Employee No</TableHead>
                  <TableHead className="px-0 text-center  ">Date</TableHead>
                  <TableHead className="px-0 ">Hours</TableHead>
                  <TableHead className="px-0 w-[]X">Minutes</TableHead>
                  <TableHead className="px-0">From</TableHead>
                  <TableHead className="px-0">To</TableHead>
                  <TableHead className="px-0">Remarks</TableHead>
                  <TableHead className="px-0 text-center">Delete</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {addTab.map((i, index) => (
                  <TableRow key={index}>
                    <TableCell className="pr-0 w-[110px]">
                      <Input
                        id={`employeeNo_${i}`}
                        className="w-[80px]"
                        placeholder={
                          selectedValue === "Self" ? "A1998" : "EMP_NO"
                        }
                        disabled={selectedValue === "Self"}
                      />
                    </TableCell>
                    <TableCell className="px-0 w-[10px]">
                      <Input
                        id={`date_${i}`}
                        className="w-[135px]"
                        type="date"
                      />
                    </TableCell>
                    <TableCell className="px-0 w-[70px]">
                      <Input
                        id={`hours_${i}`}
                        className="w-[60px] ml-1"
                        type="number"
                      />
                    </TableCell>
                    <TableCell className="px-0 w-[70px]">
                      <Input
                        id={`minutes_${i}`}
                        className="w-[60px]"
                        type="number"
                      />
                    </TableCell>
                    <TableCell className="px-0 w-[70px]">
                      <Input
                        id={`from_${i}`}
                        className="w-[60px]"
                        type="time"
                      />
                    </TableCell>
                    <TableCell className="px-0 w-[70px]">
                      <Input id={`to_${i}`} className="w-[60px]" type="time" />
                    </TableCell>
                    <TableCell className="px-0 ">
                      <Input
                        id={`remarks_${i}`}
                        className=""
                        placeholder="Remarks"
                      />
                    </TableCell>
                    <TableCell className="px-0 items-end flex justify-center ">
                      <Trash2
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => setAddTab(addTab.filter((v) => v !== i))}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              variant="outline"
              className="bg-inherit border-slate-400 mr-2"
              onClick={() => setAddTab([...addTab, addTab.length])}
            >
              Add Row
            </Button>
            <Button className="bg-green-500" onClick={handleSubmit}>
              Submit
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
