import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Remarks } from "./RemarksForm";
import { Textarea } from "@/components/ui/textarea";
import { Check, FileEditIcon, SearchIcon, TrashIcon, X } from "lucide-react";

export function OTSingleDialog({ color, type, variant }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center justify-center ">
          <Check color="green" size={"40px"} />
          <X color="red" size={"40px"} />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Remarks:</DialogTitle>
        </DialogHeader>

        <Textarea placeholder="Type your message here." />

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" className="bg-green-500 hover:bg-green-700">
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
