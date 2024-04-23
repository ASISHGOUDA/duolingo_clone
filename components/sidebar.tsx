import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  className?: string;
}



export const Sidebar = ({ className }: Props) => {
  return (
    <div className={cn("flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
    className,
    )}>
      <Link href="/learn">
        <div className="pt-8 pl-2 pb-7 flex items-center gap-x-3" >
            <Image
              src="/duo_header.svg"
              alt="Mascot"
              width={179}
              height={42}
            />
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem />
      </div>
    </div>
  );
};