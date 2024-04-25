import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

type Props = {
  activeCourse: { imageSrc: string, title: string } // TODO: Replace with DB types
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};


export const UserProgress = (
  { activeCourse, hearts, points, hasActiveSubscription }: Props
) => {
return (

<div className="flex items-center justify-between gap-x-2 w-full">
  <Link href="/courses" >
    <Button variant={"ghost"}>
      <Image
      src={activeCourse.imageSrc}
      alt={activeCourse.title}
      className="rounded-md border"
      width={28}
      height={28}
      />
    </Button>
  </Link>
  <Link href="/shop" >
    <Button variant={"ghost"} className="text-orange-500">
      <Image
      src="/points.svg"
      alt="points"
      className="mr-2"
      width={32}
      height={32}
      />
      {points}
    </Button>
  </Link>
  <Link href="/shop" >
    <Button variant={"ghost"} className="text-rose-500">
      <Image
      src="/heart.svg"
      alt="points"
      className="mr-2"
      width={22}
      height={22}
      />
      { hasActiveSubscription 
        ? <InfinityIcon className="h-5 w-4 stroke-[3]"/>
        : hearts
      }
    </Button>
  </Link>
</div>

);
};