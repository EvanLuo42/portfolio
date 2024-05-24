import {Separator} from "@/components/ui/separator.tsx";
import {ModeToggle} from "@/components/mode-toggle.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Download} from "lucide-react";

export default function HeaderBar() {
  return (
    <>
      <div className="flex flex-row items-center space-x-3 h-16">
        <h1 className="m-0 ml-6 pt-0 pb-0 text-lg font-bold">ZiYun Luo Evan</h1>
        <div className="absolute right-6 flex flex-row space-x-5">
          <ModeToggle />
          <Button>
            <Download className="mr-2 h-4 w-4"/> Portfolio
          </Button>
        </div>
      </div>
      <Separator></Separator>
    </>
  )
}