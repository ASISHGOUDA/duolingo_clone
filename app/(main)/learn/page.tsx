import { redirect } from "next/navigation";
import { getUserProgress } from "@/db/queries";
import { UserProgress } from "@/components/user-progress";
import { Header } from "./header";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { title } from "process";


const LearnPage = async () => {
    const userProgressData =  getUserProgress();

    const [
      userProgress
    ] = await Promise.all([ 
        userProgressData
    ]);

    if(!userProgress || !userProgress.activeCourse) {
      redirect("/courses");
    }
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
        activeCourse={{ title: "Spanish", imageSrc: "/es.svg" }}
        hearts={5}
        points={100}
        hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title = "Spanish" />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;