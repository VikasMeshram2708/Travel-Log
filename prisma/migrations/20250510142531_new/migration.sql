/*
  Warnings:

  - A unique constraint covering the columns `[fileId]` on the table `MediaFile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fileId` to the `MediaFile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileSize` to the `MediaFile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MediaFile" DROP CONSTRAINT "MediaFile_tripLogId_fkey";

-- DropForeignKey
ALTER TABLE "TripLog" DROP CONSTRAINT "TripLog_userId_fkey";

-- AlterTable
ALTER TABLE "MediaFile" ADD COLUMN     "fileId" TEXT NOT NULL,
ADD COLUMN     "fileSize" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ContactUs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContactUs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewLetter" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewLetter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContactUs_email_key" ON "ContactUs"("email");

-- CreateIndex
CREATE UNIQUE INDEX "NewLetter_email_key" ON "NewLetter"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MediaFile_fileId_key" ON "MediaFile"("fileId");

-- AddForeignKey
ALTER TABLE "TripLog" ADD CONSTRAINT "TripLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MediaFile" ADD CONSTRAINT "MediaFile_tripLogId_fkey" FOREIGN KEY ("tripLogId") REFERENCES "TripLog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
