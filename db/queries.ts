import { cache } from "react";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs";


import db from "@/db/drizzle";
import { userProgress } from "@/db/schema"; 


  export const getUserProgress = cache(async () => {
    const { userId } = await auth();

    if(!userId) {
      return null;
    }
    
    const data = await db.query.userProgress.findFirst({
      where: eq(userProgress.userId, userId),
      with: {
        activeCourse: true,
      },
    });
    
    return data;
  });

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();

  return data;
});