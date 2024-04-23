import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SidebarItem } from "./sidebar-item";
import {
  ClerkLoading,
  ClerkLoaded,
  UserButton,

} from "@clerk/nextjs";
import { Loader } from "lucide-react";
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
        <SidebarItem 
        label="Learn"
        href="/learn"
        iconSrc="/learn.svg"
        />
      <SidebarItem 
        label="Leaderboard"
        href="/learderboard"
        iconSrc="/leaderboard.svg"
        />
        <SidebarItem 
        label="quests"
        href="/quests"
        iconSrc="/quests.svg"
        />
        <SidebarItem 
        label="shop"
        href="/shop"
        iconSrc="/shop.svg"
        />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton
          afterSignOutUrl="/"
          />
        </ClerkLoaded>
      </div>
    </div>
  );
};