import { auth as ath } from "@clerk/nextjs";
import { FileRouter, createUploadthing } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = () => {
  const { userId } = ath();
  if (!userId) throw new Error("Unauthorized");
  return { userId };
};

const auth = (req: Request) => ({ id: "fakeId" });
export const ourFileRouter = {
  courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  courseAttachment: f(["text", "image", "video", "audio", "pdf"])
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  chapterVideo: f({ video: { maxFileSize: "512GB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
