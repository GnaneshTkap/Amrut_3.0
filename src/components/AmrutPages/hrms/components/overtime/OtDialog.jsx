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

export function OTDialog({ color, type, variant }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant={variant} className={color}>
          {type}
        </Button>
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
