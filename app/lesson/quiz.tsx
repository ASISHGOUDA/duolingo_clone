"use client";

import { challengeOptions, challenges } from "@/db/schema";

import { useState } from "react";

import { Header } from "./header";


type Props = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: typeof challengeOptions.$inferSelect[];
  })[];
  userSubscription: any; //todo Replace with Subscription Db type.
};

export const Quiz = ({
  initialPercentage,
  initialHearts,
  initialLessonId,
  initialLessonChallenges,
  userSubscription
}: Props) => {
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(initialPercentage);
  const [challenges] = useState(initialLessonChallenges);
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex((challenge) => !challenge.completed);
    return uncompletedIndex === -1 ? 0 : uncompletedIndex;
  });

  const challenge = challenges[activeIndex];

  const title = challenge.type === "ASSIST"
  ? "select the correct meaning" 
  : challenge.question;

  return (
    <>
      <Header
      hearts={hearts}
      percentage={percentage}
      hasActiveSubscription={!!userSubscription?.isActive}
      />
      <div className="flex-1 ">
          <div className="h-full flex items-center justify-center">
            <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
              <h1 className="text-lg lg:text_3xl text-center lg:text-start font-bold text-neutral-700">
                {title}
              </h1>
              <div>
                {/* Todo: Challenge comoponent */}
              </div>
            </div>
          </div>
      </div>
    </>
  );
};