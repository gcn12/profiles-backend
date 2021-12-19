-- CreateTable
CREATE TABLE "Content" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Content_id_key" ON "Content"("id");
