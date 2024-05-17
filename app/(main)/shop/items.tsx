"use client";

import { toast } from "sonner";
import { refillHearts } from "@/actions/user-progress";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTransition } from "react";
import { createStripeUrl } from "@/actions/user-subscription";

const POINTS_TO_REFILL = 10;

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const Items = ({ hearts, points, hasActiveSubscription }: Props) => {
  const [pending, startTransition] = useTransition();

  const onRefillHearts = () => {
    if (pending || hearts === 5 || points < POINTS_TO_REFILL) {
      return;
    }

    startTransition(() => {
      refillHearts()
      .catch(() => toast.error("something went wrong"));
    });
  };

const onUpgrade = () => {
  startTransition(() => {
    createStripeUrl()
    .then((response) => {
      if (response.data) {
        window.location.href = response.data;
      }
    })
    .catch(() => toast.error("something went wrong in stripe"));
  });
};

  return (
    <ul className="w-full ">
      <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image
        src={"/heart.svg"}
        alt="heart"
        height={60}
        width={60}
        />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Refill Hearts
          </p>
        </div>
        <Button 
        onClick={onRefillHearts}
        disabled={pending ||hearts === 5 || points < POINTS_TO_REFILL}
        >
          {hearts === 5
            ? "full"
            : (
              <div className="flex items-center">
                <Image
                src={"/points.svg"}
                alt="points"
                height={20}
                width={20}
                />
                <p>
                  {POINTS_TO_REFILL}
                </p>
              </div>
            )
          }
        </Button>
      </div>
      <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2 ">
          <Image
          src={"/unlimited.gif"}
          alt="unlimited"
          height={60}
          width={60}
          />
          <div className="flex-1">
            <p className="text-neutral-700 text-base lg:text-xl font-bold">
              unlimited Hearts
            </p>
          </div>
        <Button
        onClick={onUpgrade}
        disabled={pending || hasActiveSubscription}
        >
          {hasActiveSubscription ? "active" : "upgrade"}
        </Button>
      </div>
    </ul>
  );
};