-- CreateTable
CREATE TABLE "Query" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fullName" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "contact" BIGINT NOT NULL,
    "query" TEXT,

    CONSTRAINT "Query_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Query_email_key" ON "Query"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Query_contact_key" ON "Query"("contact");
