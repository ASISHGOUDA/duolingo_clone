"use server";

import { redirect } from "next/navigation";
import { getCourseById, getUserProgress } from "@/db/queries";
import { auth, currentUser } from "@clerk/nextjs";
import  db  from "@/db/drizzle";
import { userProgress } from "@/db/schema";
import { revalidatePath } from "next/cache";


export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth();
  const user = await currentUser();
  
  if (!userId || !user) {
    throw new Error("Unauthorized");
  }
  
  const course = await getCourseById(courseId);

  if (!course) {
    throw new Error("Course not found");
  }
  
  

  //Todo: Enable once units and lessons are added
  // if(!course.units.length || !course.units[0].lessons.length) {
  //   throw new Error("Course is empty");
  // }

  const existingUserProgress = await getUserProgress();

  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      userName: user.firstName || "user",
      userImageSrc: user.imageUrl || "/mascot.svg",
    });

    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userName: user.firstName || "user",
    userImageSrc: user.imageUrl || "/mascot.svg",
  });

  revalidatePath("/courses");
  revalidatePath("/learn");
  redirect("/learn");
};