import { getLesson, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";




const LessonPage = async () => {
  const lessonData = getLesson();
  const userProgressData = getUserProgress();

  const [
    lesson,
    userProgress
  ] = await Promise.all([
    lessonData,
    userProgressData
  ]);


  if (!lesson || !userProgress) {
    redirect("/learn");
  }

  const initialPercentage = lesson.challenges
  .filter((challenge) => challenge.completed)
  .length / lesson.challenges.length * 100;

  return (
    <div>
      Lesson page
    </div>
  );
};

export default LessonPage;
